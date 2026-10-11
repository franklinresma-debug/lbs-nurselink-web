(() => {
 'use strict';
 const root=document.getElementById('lbs-migration-staging');if(!root)return;
 const API='/backend/api/nurselink/admin/migration-staging';
 const e=(tag,text,parent)=>{const n=document.createElement(tag);if(text!==null)n.textContent=text;if(parent)parent.append(n);return n;};
 const body=root.querySelector('[data-staging-body]');let selected=null,page=1,busy=false;
 const status=e('div','',body);status.className='ms-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const form=e('form',null,body),grid=e('div',null,form);grid.className='ms-grid';
 function input(label,name,type='text'){const l=e('label',label,grid),n=e('input',null,l);n.name=name;n.type=type;n.required=true;return n;}
 const source=input('Source system code','source_system');source.placeholder='legacy-recruitment';source.maxLength=80;source.pattern='[A-Za-z0-9][A-Za-z0-9_.\\-]{0,79}';
 const name=input('Batch name','name');name.maxLength=120;name.placeholder='Applicants — batch 001';
 const file=input('CSV, JSON, ZIP or SQL · up to 10 MiB','file','file');file.accept='.csv,.json,.zip,.sql';
 const dl=e('label','CSV delimiter',grid),delimiter=e('select',null,dl);delimiter.name='delimiter';for(const [v,t]of [['comma','Comma'],['semicolon','Semicolon'],['tab','Tab']]){const o=e('option',t,delimiter);o.value=v;}
 const upload=e('button','Upload to private staging',form);upload.type='submit';
 const refresh=e('button','Refresh my batches',body);refresh.type='button';const list=e('div',null,body),detail=e('div',null,body);
 function message(t){status.textContent=t;}
 async function request(path='',options={}){
   const headers={Accept:'application/json','X-Requested-With':'XMLHttpRequest'};
   if(options.method==='POST'){
     const csrf=await fetch('/backend/sanctum/csrf-cookie',{credentials:'include',headers:{Accept:'application/json'}});if(!csrf.ok)throw Error('Sign in again to initialize a secure staging request.');
     const token=document.cookie.split(';').map(s=>s.trim()).find(s=>s.startsWith('XSRF-TOKEN='));if(token)headers['X-XSRF-TOKEN']=decodeURIComponent(token.slice(11));
     if(!(options.body instanceof FormData))headers['Content-Type']='application/json';
   }
   const r=await fetch(API+path,{...options,headers,credentials:'include',cache:'no-store'});let b;try{b=await r.json();}catch{throw Error('The staging service did not return a readable response.');}
   if(!r.ok)throw Error(b.message||`Request failed (${r.status}).`);return b;
 }
 async function run(fn){if(busy)return;busy=true;root.querySelectorAll('button').forEach(b=>b.disabled=true);try{await fn();}catch(err){message(err.message);}finally{busy=false;root.querySelectorAll('button').forEach(b=>b.disabled=false);}}
 async function load(){const r=await request();list.replaceChildren();e('h4','My staging batches',list);if(!r.data.batches.length)e('p','No staging batches yet.',list);for(const b of r.data.batches){const button=e('button',`${b.name} · ${b.format.toUpperCase()} · ${b.rows} rows · ${b.status.replaceAll('_',' ')}`,list);button.type='button';button.onclick=()=>run(()=>show(b.id,1));}}
 async function show(id,nextPage=1){selected=id;page=nextPage;const {data}=await request('/'+id+'?page='+page);const b=data.batch;detail.replaceChildren();e('h4',b.name,detail);e('p',b.note,detail);e('p',`Source: ${b.source_system} · ${b.rows} rows · ${b.document_count} documents · SHA-256: ${b.sha256}`,detail);
   if(b.format==='sql'){e('p','Next step: technical review and conversion in a disposable isolated database. Re-upload its approved CSV/JSON export with the same source-system code. No SQL execution or production import is available here.',detail);return;}
   const mapping=e('form',null,detail),mg=e('div',null,mapping);mg.className='ms-grid';const selects={};
   const labels={legacy_id:'Legacy ID (required)',full_name:'Full name (required)',email:'Email (required)',phone:'Phone',birth_date:'Birth date',nationality:'Nationality',address:'Address',employer:'Employer',position:'Position',legacy_status:'Legacy status'};
   for(const [key,label]of Object.entries(labels)){const l=e('label',label,mg),s=e('select',null,l);selects[key]=s;s.setAttribute('aria-label',label);e('option','Not mapped',s).value='';for(const h of b.headers)e('option',h,s).value=h;s.value=b.mapping?.[key]||'';if(['legacy_id','full_name','email'].includes(key))s.required=true;}
   const validate=e('button','Validate mapping and build review',mapping);validate.type='submit';mapping.onsubmit=event=>{event.preventDefault();run(async()=>{const values=Object.fromEntries(Object.entries(selects).map(([k,s])=>[k,s.value]));message('Validating rows and checking existing email matches…');await request('/'+id+'/validate',{method:'POST',body:JSON.stringify({mapping:values})});await load();await show(id);message('Review saved. No live applicant records were created.');});};
   if(data.review){const v=data.review,s=v.summary;e('h4','Review results',detail);e('p',`${s.source_rows} source rows → ${s.staged_rows} staged rows. ${s.validated_drafts} validated drafts; ${s.flagged_rows} need review; ${s.unlinked_documents} unlinked documents. Live records written: 0.`,detail);e('p','Validated drafts are not approved applicants. Review every issue and complete the migration approval gates.',detail);
     if(v.unmapped_columns.length)e('p','Unmapped columns retained in source records: '+v.unmapped_columns.join(', '),detail);
     const download=e('button','Download full review JSON',detail);download.type='button';download.onclick=()=>run(async()=>{const result=await request('/'+id+'/review');const url=URL.createObjectURL(new Blob([JSON.stringify(result,null,2)],{type:'application/json'}));const a=e('a',null,detail);a.href=url;a.download='staging-review-'+id+'.json';a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
     const scroll=e('div',null,detail);scroll.className='ms-scroll';scroll.tabIndex=0;scroll.setAttribute('aria-label','Staging review rows; scroll horizontally for all columns');const table=e('table',null,scroll),head=e('tr',null,e('thead',null,table));for(const t of ['Row','Legacy ID','Applicant','Result / reasons'])e('th',t,head).scope='col';const tb=e('tbody',null,table);for(const r of v.rows){const tr=e('tr',null,tb);for(const t of [r.source_row,r.legacy_id,r.proposed.full_name,r.issues.length?r.issues.join('; '):'Validated draft — approval pending'])e('td',String(t),tr);}
     const pages=Math.ceil(s.source_rows/50);e('p',`Page ${page} of ${pages}`,detail);if(page>1){const prev=e('button','Previous rows',detail);prev.type='button';prev.onclick=()=>run(()=>show(id,page-1));}if(page<pages){const next=e('button','Next rows',detail);next.type='button';next.onclick=()=>run(()=>show(id,page+1));}
   }
 }
 form.onsubmit=event=>{event.preventDefault();run(async()=>{if(!file.files[0]||file.files[0].size>10485760)throw Error('Select a file of at most 10 MiB.');message('Uploading to private staging…');const result=await request('',{method:'POST',body:new FormData(form)});await load();await show(result.data.id);message(result.data.reused?'This identical upload already exists; its batch was reused.':'Upload staged. Map the source columns before validation.');});};
 refresh.onclick=()=>run(load);let loaded=false;root.addEventListener('toggle',()=>{if(root.open&&!loaded)run(async()=>{await load();loaded=true;message('Private staging is available to Super Administrators.');});});
})();
