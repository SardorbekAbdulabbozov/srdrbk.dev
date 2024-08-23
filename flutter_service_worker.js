'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6fc394fab7ee07db3f0ff9939f9bcca1",
"index.html": "5e341f6575c1f9f5ff84aed9d08988f3",
"/": "5e341f6575c1f9f5ff84aed9d08988f3",
"main.dart.js": "fb7a5dade1023a628e6e7f604f7e9c24",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "919f17d0278a9c3859c22fad10dd07b3",
"icons/favicon-16x16.png": "68099464b1ec9c24ea36a4f8a071cdd0",
"icons/favicon.ico": "d99385255ff716c30577775a29a453f5",
"icons/apple-icon.png": "9a3dbc1fc24f4652963f6d5ee7981f35",
"icons/apple-icon-144x144.png": "1cf173ba88301279a79ad4ace8eccf37",
"icons/android-icon-192x192.png": "5ad73cc24dab82371dc1873ce13a1445",
"icons/apple-icon-precomposed.png": "9a3dbc1fc24f4652963f6d5ee7981f35",
"icons/apple-icon-114x114.png": "5c48f4efb9652639d565d5cdb24b9878",
"icons/ms-icon-310x310.png": "a59c95b2e4f2ff6e3a9bcbb2f09454f8",
"icons/ms-icon-144x144.png": "1cf173ba88301279a79ad4ace8eccf37",
"icons/apple-icon-57x57.png": "e64662b229a256e62a9a13e055d8eda2",
"icons/apple-icon-152x152.png": "28ccbaf9f057a6dd27fde3e33b28f79b",
"icons/ms-icon-150x150.png": "33a9e4ca1c79a59efdeebf9764245c63",
"icons/android-icon-72x72.png": "3d6b99ca361ae74953c98132ecd18798",
"icons/android-icon-96x96.png": "919f17d0278a9c3859c22fad10dd07b3",
"icons/android-icon-36x36.png": "5c7a7507a4aba00a6498afd95e899bb3",
"icons/apple-icon-180x180.png": "859ccd0314ceb75ac5fd11add46198d5",
"icons/favicon-96x96.png": "919f17d0278a9c3859c22fad10dd07b3",
"icons/android-icon-48x48.png": "20181ca6949c99855bb17c03d6a23325",
"icons/apple-icon-76x76.png": "c0d7489288675f6b08f06dae6bd587fe",
"icons/apple-icon-60x60.png": "4f435eb68a166e9306540661fd8901a9",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "1cf173ba88301279a79ad4ace8eccf37",
"icons/apple-icon-72x72.png": "3d6b99ca361ae74953c98132ecd18798",
"icons/apple-icon-120x120.png": "83a5fd7a4c0b763fda4226f42e3f877e",
"icons/favicon-32x32.png": "849a0f5460bb115fa1732b3b068b681e",
"icons/ms-icon-70x70.png": "907ce4fd9c34b50ede2994bb2ddf9c5d",
"manifest.json": "29311a72d28d4c29783ebb274db0ba84",
"assets/AssetManifest.json": "c988bdeb3825675a1acd4f6f5122b09d",
"assets/NOTICES": "a9bdaca99191787f827a647a5681d6be",
"assets/FontManifest.json": "0af06d235f37f71d7d051881fb01a576",
"assets/AssetManifest.bin.json": "f2387f681abb384c9ee371a06df2d98c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/core/config/localization/en.json": "58b78cd7ec5901a79b12f1877dc8bd98",
"assets/lib/core/config/localization/locale_keys.g.dart": "6b5b2c3f4b70a1024bbd8bb3315f33ef",
"assets/lib/core/config/localization/uz.json": "2bcad7c2599b8bf381904257e17f5e89",
"assets/AssetManifest.bin": "45003944278d98279e287669b6f41667",
"assets/fonts/MaterialIcons-Regular.otf": "4ea977939aa5df05330a0ecd899fb4c8",
"assets/assets/images/kpi.png": "2cd0fcd67aab790fececba94d3d1eee4",
"assets/assets/images/signature_white.png": "da1925b0170c3e8f401662520a02eb46",
"assets/assets/images/git.png": "042664999475fd8cc3672db6567e2e53",
"assets/assets/images/uzd+.jpg": "0fec0ae6b2e029e966c5b0e5347f218d",
"assets/assets/images/flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/images/firebase.png": "0e8789d152ed2744d7f7265dc3f1457e",
"assets/assets/images/java.png": "652fdb659a681116811612e0b9e25354",
"assets/assets/images/lebazar.jpg": "79921dc1afa9defa15aacefefb07c7c9",
"assets/assets/images/inspector.png": "2b3a016c9e7b14ecee92d20e7a68aee5",
"assets/assets/images/figma.png": "6bf064dbb539c754917b5972554ed72c",
"assets/assets/images/signature_black.png": "82049bb3c9d459a5eec5f401aba26a79",
"assets/assets/images/kpiMobile.png": "7525c7acaf944704e3fdf58037dba3d0",
"assets/assets/images/swift.png": "cfb294e874c8a683617e9438156dc352",
"assets/assets/images/udevs.png": "b75503d0cd77cf35f6680177485dac71",
"assets/assets/images/c++.png": "0b849c72f38362fe12072a4916660013",
"assets/assets/images/swiftui.png": "a24e2f6b0602910ad28fc5aa29e6f103",
"assets/assets/images/photo2.jpeg": "20a58630f1a624b60319069d6f78d39b",
"assets/assets/images/dart.png": "b96cb5023a5dd284d44013bd5811e842",
"assets/assets/images/photo1.jpg": "dd22be066588098b165cf484cb832370",
"assets/assets/vectors/copyright.svg": "d161a1bad587c7db437bdbdad408455e",
"assets/assets/vectors/github.svg": "ae25051a9ad67cdb4e0478684ca19edd",
"assets/assets/vectors/dark.svg": "2a73fb3319bb047c3b0c7e1fb66387c0",
"assets/assets/vectors/email.svg": "2afbe6cfb5819699f7837a3b1d2a7e7c",
"assets/assets/vectors/close.svg": "27f7d68b561eea323b994863c05a2d08",
"assets/assets/vectors/copy.svg": "b8b4a460e6dc59a4425ff391f656a743",
"assets/assets/vectors/phone.svg": "c7ddfaed26f219f41ecd76c0a1c7dc7f",
"assets/assets/vectors/location.svg": "12f9eb4cd5a0f750850afcc34c8ad61f",
"assets/assets/vectors/share.svg": "6dd4d38b3cec314a4a0ac8e63354db1a",
"assets/assets/vectors/linkedin.svg": "94442d83ca30265339924f6ab9ca4d8a",
"assets/assets/vectors/twitter.svg": "3288942efb5e1bba9733b8889d546537",
"assets/assets/vectors/telegram2.svg": "6320a82336e54ab09d06cf6cfac62486",
"assets/assets/vectors/menu.svg": "17739e9c69437c64dfba385f2575847a",
"assets/assets/vectors/wavingHand.svg": "2e397a5430d8682a193e259ee8fa8138",
"assets/assets/vectors/telegram1.svg": "e9421633db89f2e84a9b7ab0f0269d09",
"assets/assets/vectors/light.svg": "0e6f548f164e437360942cfcd3e608ba",
"assets/assets/fonts/Inter_28pt-LightItalic.ttf": "53fd3364ffe65ab2ff79f7fe024c83ce",
"assets/assets/fonts/Inter_18pt-ExtraBoldItalic.ttf": "b03bfa9ceab3df1f81834d0523331c30",
"assets/assets/fonts/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/Inter_28pt-ExtraLightItalic.ttf": "44168090bcf11276f500c0f02b154ff4",
"assets/assets/fonts/Inter_28pt-Bold.ttf": "14080569c713459a85b1693cf7354cc0",
"assets/assets/fonts/Inter_28pt-ExtraLight.ttf": "97f88391f7a4de7986e436bdeeb86d8c",
"assets/assets/fonts/Inter_28pt-Thin.ttf": "f045084a42b5d5a11297b0c058ecf884",
"assets/assets/fonts/Inter_28pt-ThinItalic.ttf": "3a4d750a496f2c6e20eef12f2f28443c",
"assets/assets/fonts/Inter_24pt-ExtraBold.ttf": "995fb5ac38b90303c0cc1a0b21e2c9fe",
"assets/assets/fonts/Inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/fonts/Inter_28pt-BoldItalic.ttf": "a2d4f13d253a5d230ab950b8d1aa6a3b",
"assets/assets/fonts/Inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/Inter_28pt-ExtraBoldItalic.ttf": "0a060bf48937936c4aa7d9952dfe1ae8",
"assets/assets/fonts/Inter_18pt-LightItalic.ttf": "6eb3a2d2c6f095080ac034867886d0bf",
"assets/assets/fonts/Inter_18pt-ExtraLight.ttf": "2c6c78d98816958b53fea58451f921d3",
"assets/assets/fonts/Inter_18pt-ThinItalic.ttf": "95d83862ccec5b0d0487f243e34fcc61",
"assets/assets/fonts/Inter_18pt-ExtraBold.ttf": "a6ed481bff60bc9270904d214947ab13",
"assets/assets/fonts/Inter_18pt-BoldItalic.ttf": "66469edaf106f7a1e14f4061212a1123",
"assets/assets/fonts/Inter_28pt-Light.ttf": "3ea4007efbbb2f30c2c73275eef5c2b0",
"assets/assets/fonts/Inter_18pt-Thin.ttf": "6f2d2f41f504aee66da88684f15d7e1d",
"assets/assets/fonts/Inter_28pt-Medium.ttf": "4bf75147230e93108702b004fdee55df",
"assets/assets/fonts/Inter_18pt-BlackItalic.ttf": "6a6d7edd78447c5edcb33570ce97efe8",
"assets/assets/fonts/Inter_28pt-BlackItalic.ttf": "ff93e5c0c4542fe58a56430a3be67cce",
"assets/assets/fonts/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/Inter_18pt-ExtraLightItalic.ttf": "24df6449633144fa3f4258c775dd67c5",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/Inter_24pt-ExtraLightItalic.ttf": "c37c2ef7e42dc86b284a5cbaf8a8efae",
"assets/assets/fonts/Inter_18pt-Black.ttf": "b797a429ef21b9b7d44b96038cdb10f2",
"assets/assets/fonts/Inter_24pt-Light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/fonts/Inter_28pt-SemiBoldItalic.ttf": "f6a4fc371cbdc516f1b3aa53e570e25e",
"assets/assets/fonts/Inter_24pt-ExtraBoldItalic.ttf": "054fe10e7073eb84bf31447dfd79e522",
"assets/assets/fonts/Inter_24pt-MediumItalic.ttf": "5ed286000cb7a0e7b015ec71e190a767",
"assets/assets/fonts/Inter_28pt-SemiBold.ttf": "70c03908b3ab82969b38ba14745f3a54",
"assets/assets/fonts/Inter_18pt-MediumItalic.ttf": "c64a8c393f4d6ffd87f80723727b7f2c",
"assets/assets/fonts/Inter_24pt-BlackItalic.ttf": "1fa0b44e2ca8a6ce911e0fc8cc3b7255",
"assets/assets/fonts/Inter_28pt-Italic.ttf": "457934416e3b66a693b814d64446076e",
"assets/assets/fonts/Inter_24pt-Thin.ttf": "1e9e30c74648950a240427636b6c1992",
"assets/assets/fonts/Inter_24pt-SemiBoldItalic.ttf": "9685a9dcf0c26640b3828dd34b953bcd",
"assets/assets/fonts/Inter_24pt-Black.ttf": "2392341284c30f5fffb9fe0ab0cd983e",
"assets/assets/fonts/Inter_18pt-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/Inter_28pt-Regular.ttf": "fc20e0880f7747bb39b85f2a0722b371",
"assets/assets/fonts/Inter_28pt-MediumItalic.ttf": "ecec8d44b9cfb67aafab4573295b3c29",
"assets/assets/fonts/Inter_28pt-ExtraBold.ttf": "7c8dddeead3a39ebb25d4be0e0c4b876",
"assets/assets/fonts/Inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/fonts/Inter_18pt-Italic.ttf": "ab4004692577ac82604c777fa83da556",
"assets/assets/fonts/Inter_28pt-Black.ttf": "298c6ce1b2641dfe1647544180b67fd1",
"assets/assets/fonts/Inter_18pt-SemiBoldItalic.ttf": "0f93bef7d8e8ea0612ba37a71efcccff",
"assets/assets/fonts/Inter_24pt-BoldItalic.ttf": "a1757dcadd00b07cd874af79e2904c92",
"assets/assets/fonts/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/Inter_24pt-ThinItalic.ttf": "27a3a82e0df426a69c7a7562a2293bda",
"assets/assets/fonts/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/Inter_24pt-ExtraLight.ttf": "8da347e947a38e1262841f21fe7c893e",
"assets/assets/fonts/Inter_24pt-Italic.ttf": "0b52c6d11ac407c2ef591475f2b4ed11",
"assets/assets/fonts/Inter_24pt-LightItalic.ttf": "a401ba0ab41163ff9ec6247c023b1c68",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
