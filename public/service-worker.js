console.log("Hello from your service worker!");

//create variable for cache
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const iconSizes = ["16","32","36","48","57","60","70","72","76","96","114","120","144","150","152","180","192","310","512"];
const iconFiles = iconSizes.map(
 (size) => `/icons/icon-${size}x${size}.png`
);

const staticFilesToPreCache = [
  "/",
 "/index.html",
 "db.js",
 "/styles.css",
 "/manifest.webmanifest",
 ].concat(iconFiles);

 // install sw
self.addEventListener("install", function(evt) {
  evt.waitUntil(
caches.open(CACHE_NAME).then(cache => {
 console.log("Your files were pre-cached successfully!");
   return cache.addAll(staticFilesToPreCache);
  })
 );

  self.skipWaiting();
});
