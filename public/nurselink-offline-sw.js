const CACHE='nurselink-registration-shell-aed1dd3c4255';
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);const r=await fetch('/nurselink-offline-assets.json',{cache:'no-store'});const assets=await r.json();await cache.addAll(['/smart-registration',...assets]);await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const name of await caches.keys())if(name.startsWith('nurselink-registration-shell-')&&name!==CACHE)await caches.delete(name);await self.clients.claim();})()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||url.pathname.startsWith('/backend/')||url.pathname.startsWith('/admin/'))return;
 if(event.request.mode==='navigate'&&url.pathname==='/smart-registration'){event.respondWith(fetch(event.request).catch(()=>caches.match('/smart-registration')));return;}
 if(url.pathname.startsWith('/assets/')||url.pathname==='/nurselink-context-icons.js'){event.respondWith((async()=>{const cache=await caches.open(CACHE);const hit=await cache.match(event.request,{ignoreSearch:true});if(hit)return hit;const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());return response;})());}
});
