// APC U39 Concept V1.2.1: PWA offline; atualiza arquivos sem servir HTML desatualizado.
const CACHE='apc-u39-concept-v1.2.1';
const STATIC=['./','./index.html','./app.css','./app.js','./config.js','./training.js','./cic.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('apc-u39-concept-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{const cache=await caches.open(CACHE);try{const response=await fetch(req);if(response.ok)cache.put(req,response.clone()).catch(()=>{});return response}catch(_){return (await cache.match(req))||(req.mode==='navigate'?await cache.match('./index.html'):Response.error())}})())
});
