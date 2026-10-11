/* Document camera: conservative bright-page detection; original frame always preserved. */
(() => {
  'use strict';
  function detectPage(image) {
    const {data,width:w,height:h}=image, n=w*h;
    const light=new Uint8Array(n);let sum=0;
    for(let i=0;i<n;i++){light[i]=Math.round(.299*data[i*4]+.587*data[i*4+1]+.114*data[i*4+2]);sum+=light[i];}
    const threshold=Math.max(125,Math.min(225,sum/n+22)),seen=new Uint8Array(n);let best=[];
    for(let start=0;start<n;start++){
      if(seen[start]||light[start]<threshold)continue;
      const queue=[start];seen[start]=1;
      for(let j=0;j<queue.length;j++){const p=queue[j],x=p%w,y=Math.floor(p/w);for(const q of [x>0?p-1:-1,x<w-1?p+1:-1,y>0?p-w:-1,y<h-1?p+w:-1])if(q>=0&&!seen[q]&&light[q]>=threshold){seen[q]=1;queue.push(q);}}
      if(queue.length>best.length)best=queue;
    }
    if(best.length<n*.15)return null;
    let tl=null,tr=null,br=null,bl=null;
    for(const p of best){const q={x:p%w,y:Math.floor(p/w)};if(!tl||q.x+q.y<tl.x+tl.y)tl=q;if(!tr||q.x-q.y>tr.x-tr.y)tr=q;if(!br||q.x+q.y>br.x+br.y)br=q;if(!bl||q.y-q.x>bl.y-bl.x)bl=q;}
    const corners=[tl,tr,br,bl];
    const area=Math.abs(corners.reduce((a,p,i)=>a+p.x*corners[(i+1)%4].y-p.y*corners[(i+1)%4].x,0))/2;
    if(area<n*.18||area>n*.88)return null;
    const safe=corners.every(p=>p.x>w*.025&&p.x<w*.975&&p.y>h*.025&&p.y<h*.975);
    return {corners:corners.map(p=>({x:p.x/w,y:p.y/h})),safe};
  }
  async function captureDocument(input) {
    const dialog=document.createElement('dialog');dialog.className='nl-document-camera';dialog.setAttribute('aria-label','Capture document');
    dialog.innerHTML='<div class="nl-camera-toolbar"><strong>Capture document</strong><button type="button" data-close>Close</button></div><p>Keep all four paper corners inside the dashed frame. Move back if any edge is outside the picture.</p><div class="nl-camera-stage"><video autoplay playsinline muted></video><canvas aria-label="Camera guide"></canvas><img alt="Captured document review" hidden></div><p role="status" data-status>Starting camera…</p><div class="nl-camera-toolbar"><button type="button" data-capture disabled>Capture full photo</button><button type="button" data-retake hidden>Retake</button><button type="button" data-use hidden>Use photo</button></div><p>Check every edge before using the photo. Corner detection is a guide; the full image is preserved.</p>';
    document.body.appendChild(dialog);dialog.showModal();
    const video=dialog.querySelector('video'),overlay=dialog.querySelector('canvas'),preview=dialog.querySelector('img'),status=dialog.querySelector('[data-status]'),shoot=dialog.querySelector('[data-capture]'),use=dialog.querySelector('[data-use]'),retake=dialog.querySelector('[data-retake]');
    let stream=null,timer=null,blob=null,blobUrl=null,closed=false,stable=0;
    const sample=document.createElement('canvas');sample.width=240;const sc=sample.getContext('2d',{willReadFrequently:true});
    const stop=()=>{clearInterval(timer);stream?.getTracks().forEach(t=>t.stop());};
    dialog.addEventListener('close',()=>{closed=true;stop();if(blobUrl)URL.revokeObjectURL(blobUrl);dialog.remove();},{once:true});
    dialog.querySelector('[data-close]').onclick=()=>dialog.close();
    function guide(){
      if(closed||blob||!video.videoWidth)return;
      const w=video.videoWidth,h=video.videoHeight;sample.height=Math.round(240*h/w);sc.drawImage(video,0,0,sample.width,sample.height);
      const found=detectPage(sc.getImageData(0,0,sample.width,sample.height));stable=found?.safe?stable+1:0;
      overlay.width=w;overlay.height=h;const c=overlay.getContext('2d');c.lineWidth=Math.max(3,w/250);c.strokeStyle='#ffffff';c.setLineDash([w/70,w/100]);c.strokeRect(w*.05,h*.05,w*.90,h*.90);c.setLineDash([]);
      if(found){c.strokeStyle=found.safe?'#22c55e':'#f59e0b';c.fillStyle=c.strokeStyle;c.beginPath();found.corners.forEach((p,i)=>i?c.lineTo(p.x*w,p.y*h):c.moveTo(p.x*w,p.y*h));c.closePath();c.stroke();found.corners.forEach(p=>{c.beginPath();c.arc(p.x*w,p.y*h,w/100,0,Math.PI*2);c.fill();});}
      status.textContent=stable>=3?'Page edges detected with space around them. Hold steady and capture.':found&&!found.safe?'Page is too close to an edge. Move the camera back.':'Place the whole page on a contrasting surface with even light. Check all four corners; detection is not yet confident.';
    }
    shoot.onclick=()=>{
      if(!video.videoWidth)return;
      const full=document.createElement('canvas');full.width=video.videoWidth;full.height=video.videoHeight;full.getContext('2d').drawImage(video,0,0);
      shoot.disabled=true;
      full.toBlob(result=>{if(closed)return;if(!result){status.textContent='Unable to capture. Please try again.';shoot.disabled=false;return;}blob=result;blobUrl=URL.createObjectURL(blob);preview.src=blobUrl;preview.hidden=false;video.hidden=true;overlay.hidden=true;shoot.hidden=true;retake.hidden=false;use.hidden=false;status.textContent='Review the full photo. Are all paper edges visible and the text readable? Retake if anything is clipped or blurred.';},'image/jpeg',.95);
    };
    retake.onclick=()=>{if(blobUrl)URL.revokeObjectURL(blobUrl);blobUrl=null;blob=null;preview.hidden=true;video.hidden=false;overlay.hidden=false;shoot.hidden=false;shoot.disabled=false;use.hidden=true;retake.hidden=true;stable=0;};
    use.onclick=()=>{if(!blob)return;const transfer=new DataTransfer();if(input.multiple)for(const f of input.files)transfer.items.add(f);transfer.items.add(new File([blob],'document-camera-'+new Date().toISOString().replace(/[:.]/g,'-')+'.jpg',{type:'image/jpeg'}));input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));dialog.close();};
    try {
      if(!navigator.mediaDevices?.getUserMedia)throw new Error('Camera capture is unavailable in this browser. Use file upload instead.');
      stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:2560},height:{ideal:1920}},audio:false});
      if(closed){stop();return;}video.srcObject=stream;await video.play();shoot.disabled=false;guide();timer=setInterval(guide,350);
    }catch(error){stop();status.textContent=error.name==='NotAllowedError'?'Camera access was not allowed. Allow camera access in the browser or use file upload.':error.message;}
  }
  for(const id of ['fileInput','encoderDocumentInput']){
    const input=document.getElementById(id);if(!input)continue;
    const button=document.createElement('button');button.type='button';button.textContent='Capture document';button.className='nl-camera-launch';button.addEventListener('click',()=>captureDocument(input));
    const anchor=id==='encoderDocumentInput'?document.getElementById('quickUploadDocument'):input;anchor.insertAdjacentElement('afterend',button);
  }
})();
