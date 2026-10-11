/* Links stay in the host portal; fragment links stay inside this trusted document. */
(() => {
 'use strict';
 const routes=Object.freeze({'/nurselink-notifications.html':'/notifications','/nurselink-mentoring.html':'/mentoring','/nurselink-engagement.html':'/engagement','/nurselink-career-intelligence.html':'/career-intelligence','/nurselink-credential-renewal.html':'/credential-renewal','/nurselink-digital-id.html':'/digital-member-id','/nurselink-cv-maker.html':'/cv-maker','/nurselink-events.html':'/events'});
 function sync(){
  document.querySelectorAll('a[href]').forEach(a=>{
   const raw=a.getAttribute('href');if(!raw)return;
   if(raw.startsWith('#')){if(a.target!=='_self')a.target='_self';return;}
   let url;try{url=new URL(raw,location.origin==='null'?parent.location.origin:location.origin);}catch{return;}
   if(url.origin!==parent.location.origin)return;
   if(routes[url.pathname]){url.pathname=routes[url.pathname];a.setAttribute('href',url.pathname+url.search+url.hash);}
  });
 }
 sync();new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});
})();
