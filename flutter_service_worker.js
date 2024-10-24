'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2048cbfec2b649b91efc506a52b617c5",
"version.json": "980547175e325fe622a3362b84d55b6a",
"splash/img/light-2x.png": "2c4bf06c6778609766be99fd33b14276",
"splash/img/dark-4x.png": "4d2b71c867ab3c5d026e21de557e156b",
"splash/img/light-3x.png": "561558f7675f44498f6ee4ff06a32363",
"splash/img/dark-3x.png": "561558f7675f44498f6ee4ff06a32363",
"splash/img/light-4x.png": "4d2b71c867ab3c5d026e21de557e156b",
"splash/img/dark-2x.png": "2c4bf06c6778609766be99fd33b14276",
"splash/img/dark-1x.png": "dd529950bfb6eefc846bc08ff1132856",
"splash/img/light-1x.png": "dd529950bfb6eefc846bc08ff1132856",
"index.html": "c7a930a08f60f7c99624225c91a939dc",
"/": "c7a930a08f60f7c99624225c91a939dc",
"main.dart.js": "94ee68fa06b393584de17db82723a65a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "255520c34fe75b193e60ec79a17cf860",
"icons/Icon-192.png": "19878a2628e19ce8b64f352099b4d201",
"icons/Icon-maskable-192.png": "b2f2cafa9426b6a8e7b229664cdb2ea2",
"icons/Icon-maskable-512.png": "596fe9bcf1b13b984c2101e539a4907a",
"icons/Icon-512.png": "1be469e5460d427ad19751c4332ac16c",
"manifest.json": "9a2650c203bfffe67bc39100f114a5c7",
"assets/AssetManifest.json": "8d3735338dee9e2947fd29ee26ce6d52",
"assets/NOTICES": "da873e2e60cf9e1f52ce6626dd8d3ab6",
"assets/FontManifest.json": "65b2e2329bd1c6f8d8d08b5507f5310d",
"assets/AssetManifest.bin.json": "8d06c9895743d574a4bef8f9d610ce11",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "567772d4a668356357a51918d16a4aa5",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "eab2cb1fd11f8f87e3b0ec9ba4c1fb64",
"assets/fonts/MaterialIcons-Regular.otf": "a3e0d65b41683d1cbd31b11af652e9c3",
"assets/assets/images/gSignIn.png": "a696be4710211b53f27405b71c0637e6",
"assets/assets/images/aSignIn.png": "9f7abc236a294b7c31234b6c78ff2bbf",
"assets/assets/images/mSignIn.png": "d53447b42f0e520eca497e5e5e6d9ff1",
"assets/assets/images/apple.png": "03d14e77df23beb58b2ca9f6c9ce1626",
"assets/assets/images/logo.png": "6114a201fe3890e0de97415373476eab",
"assets/assets/images/google.png": "70a928ab185fa70c1613595643e58b25",
"assets/assets/sounds/begin.mp3": "b4a9472cbe7ed19702bd40e40efaf4fb",
"assets/assets/sounds/done.mp3": "7a3389aa036b9739d6a74dcba348c76e",
"assets/assets/sounds/end.mp3": "4006227c8c6aa82ac1c9a418ff912c2d",
"assets/assets/photos/sLearner.png": "1f7af78361a794e798ed80b5303ebfbb",
"assets/assets/photos/pEducator.png": "e916aa4384065bc1b7fdd7dd957d2018",
"assets/assets/photos/sEducator.png": "26e754af4a5e86ba9ce5c9ff45b22321",
"assets/assets/photos/photo2.png": "bed7415867a7d3155f92ccf4b1f2470f",
"assets/assets/photos/pLearner.png": "cc396776d8e06895d24aac20cf8348cd",
"assets/assets/photos/photo1.png": "9ad875e72147b82ebff964f7954f24b8",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
