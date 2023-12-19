'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "980547175e325fe622a3362b84d55b6a",
"splash/img/light-2x.png": "09372f66323fa03d58d8ca604dd3c521",
"splash/img/dark-4x.png": "4aed77ad4359577d1f477e264082d413",
"splash/img/light-3x.png": "616db813c8d0aaf92b282ccde6f24de0",
"splash/img/dark-3x.png": "616db813c8d0aaf92b282ccde6f24de0",
"splash/img/light-4x.png": "4aed77ad4359577d1f477e264082d413",
"splash/img/dark-2x.png": "09372f66323fa03d58d8ca604dd3c521",
"splash/img/dark-1x.png": "743f14cb538f6e5a7455cafc94cc4be0",
"splash/img/light-1x.png": "743f14cb538f6e5a7455cafc94cc4be0",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"favicon.ico": "428cbee8595f64d3e6262441217df984",
"index.html": "0382ed9b1934a63a1939a6c9c7f44397",
"/": "0382ed9b1934a63a1939a6c9c7f44397",
"main.dart.js": "afd4c204897d5cbf4ebf777d33f903e2",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/Icon-192.png": "82b10d630411e43f57b4c4846b86280c",
"icons/Icon-maskable-192.png": "82b10d630411e43f57b4c4846b86280c",
"icons/Icon-maskable-512.png": "b10b2d5bad76c6abf9a622f1179890f0",
"icons/Icon-512.png": "b10b2d5bad76c6abf9a622f1179890f0",
"manifest.json": "2c17c09b08bdeeae502bd62ac6e5f9b6",
"assets/AssetManifest.json": "2588d29d90dc31e4aba4ee678c6236c3",
"assets/NOTICES": "15bb5f74cdde9e57f76aae571a58925c",
"assets/FontManifest.json": "65b2e2329bd1c6f8d8d08b5507f5310d",
"assets/AssetManifest.bin.json": "8e3aba9c774018b4ed344336bc5cc6a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f1ddaf645d06730e2679efb6496b997c",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "978f229ae45b935983ab978031991377",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/logo.png": "f7fbce61eaca4d983c24c249711f6b49",
"assets/assets/sounds/begin.mp3": "b4a9472cbe7ed19702bd40e40efaf4fb",
"assets/assets/sounds/done.mp3": "a5297301558110dc15cf32ca47b52072",
"assets/assets/sounds/end.mp3": "4006227c8c6aa82ac1c9a418ff912c2d",
"assets/assets/photos/photo4.png": "bd0ee07e06c2efdbce9831c3fbeaa580",
"assets/assets/photos/photo5.png": "40b935be6187529c57d49da04d846c74",
"assets/assets/photos/photo6.png": "6baacfe2309a5d13f92d3c9244b74d1d",
"assets/assets/photos/photo2.png": "7e435f7f6b240fcff17c21d2ce5d0773",
"assets/assets/photos/photo3.png": "1a3df028696ef0906488a229bfccf0ee",
"assets/assets/photos/photo1.png": "89fdb3b771b64f30c483d1c1c3def8bd",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
