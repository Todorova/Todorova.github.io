"use strict";var precacheConfig=[["/index.html","1bc98d66d90e4f094b8eb27d35fb77de"],["/static/css/main.bf1a7e80.css","4cd763dc51e6bcfd82a5c70f02bffbc9"],["/static/js/main.30780217.js","e512f080127a6fd39b7d0750b01146d8"],["/static/media/Cake.6ca5121c.png","6ca5121cf7c9a43763cdc9c50a10a949"],["/static/media/Creative.e2a484f6.jpg","e2a484f64df81833848536b85eba7578"],["/static/media/DuckFace.c576a1cf.jpg","c576a1cf4994a23c25c3bb7c5753cb11"],["/static/media/Eat.edd2ca5a.jpg","edd2ca5a6e0bd1c7b948fe32ea431731"],["/static/media/Medal.eec5c1db.jpg","eec5c1dbb3d961ab204f45609c4f0453"],["/static/media/MoreRun.ba01d5b8.jpg","ba01d5b824dc6b33b82b2d4b6be67598"],["/static/media/Pancakes.759c8313.jpg","759c83134082f46d7618955224aa6ad8"],["/static/media/Run.2a948ddf.jpg","2a948ddfc6ca31f6406a4d9e72e60c43"],["/static/media/huvepharma.63df497d.png","63df497d4431a21fde55ff519826ec1e"],["/static/media/newb.1382f649.png","1382f64997656199f084f06e337ead6f"],["/static/media/profil2.2d7769e3.png","2d7769e38b20ef4fe32f3e0adabe116c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});