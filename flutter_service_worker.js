'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "92125ef55c26c51f8f0ad0d61bc0e6ce",
"version.json": "6fc394fab7ee07db3f0ff9939f9bcca1",
"index.html": "caf8468a5d2e3d781ae0ad0e98eed425",
"/": "caf8468a5d2e3d781ae0ad0e98eed425",
"main.dart.js": "0b3ec2f089fbc454a0195d977de50a98",
"flutter.js": "f393d3c16b631f36852323de8e583132",
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
"assets/AssetManifest.json": "91a56479449308c872f80635fab51fa2",
"assets/NOTICES": "aa9f3b18d335a237218fd813230c32e6",
"assets/FontManifest.json": "0af06d235f37f71d7d051881fb01a576",
"assets/AssetManifest.bin.json": "f14703ffc2014b5d6131a3bca3441a88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/core/config/localization/en.json": "58b78cd7ec5901a79b12f1877dc8bd98",
"assets/lib/core/config/localization/locale_keys.g.dart": "6b5b2c3f4b70a1024bbd8bb3315f33ef",
"assets/lib/core/config/localization/uz.json": "2bcad7c2599b8bf381904257e17f5e89",
"assets/AssetManifest.bin": "3c5fc0529a151ff6c361e5fa2161d31b",
"assets/fonts/MaterialIcons-Regular.otf": "4ea977939aa5df05330a0ecd899fb4c8",
"assets/assets/images/kpi.png": "2cd0fcd67aab790fececba94d3d1eee4",
"assets/assets/images/signature_white.png": "da1925b0170c3e8f401662520a02eb46",
"assets/assets/images/git.png": "042664999475fd8cc3672db6567e2e53",
"assets/assets/images/uzd+.jpg": "0fec0ae6b2e029e966c5b0e5347f218d",
"assets/assets/images/flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/images/github.png": "d657412a942ba2c8785299974d475a6a",
"assets/assets/images/firebase.png": "0e8789d152ed2744d7f7265dc3f1457e",
"assets/assets/images/java.png": "652fdb659a681116811612e0b9e25354",
"assets/assets/images/lebazar.jpg": "79921dc1afa9defa15aacefefb07c7c9",
"assets/assets/images/inspector.png": "2b3a016c9e7b14ecee92d20e7a68aee5",
"assets/assets/images/figma.png": "6bf064dbb539c754917b5972554ed72c",
"assets/assets/images/wavingHand.png": "6976763c1d32aaeda31098d02d8d71bf",
"assets/assets/images/telegram2.png": "23f5e9c78707f5260f3554c266e47b42",
"assets/assets/images/signature_black.png": "82049bb3c9d459a5eec5f401aba26a79",
"assets/assets/images/kpiMobile.png": "7525c7acaf944704e3fdf58037dba3d0",
"assets/assets/images/swift.png": "cfb294e874c8a683617e9438156dc352",
"assets/assets/images/linkedin.png": "64f0c49cd04a15245ebf56e4ba0321b3",
"assets/assets/images/udevs.png": "b75503d0cd77cf35f6680177485dac71",
"assets/assets/images/praaktisGo.png": "9d475623cd8578bc4fa426e90149ebfc",
"assets/assets/images/c++.png": "0b849c72f38362fe12072a4916660013",
"assets/assets/images/photo4.jpg": "3a0a810897f3b4f4d972ff76fd422a91",
"assets/assets/images/photo5.jpg": "4fea5824bf836e0f018b5e9e2a347a59",
"assets/assets/images/swiftui.png": "a24e2f6b0602910ad28fc5aa29e6f103",
"assets/assets/images/photo6.jpg": "8999913e5d56e56548c36469f0a7a6a8",
"assets/assets/images/photo2.jpg": "20a58630f1a624b60319069d6f78d39b",
"assets/assets/images/dart.png": "b96cb5023a5dd284d44013bd5811e842",
"assets/assets/images/photo3.jpg": "0788618057ac88cc2d7127309411ad26",
"assets/assets/images/photo1.jpg": "dd22be066588098b165cf484cb832370",
"assets/assets/vectors/figma.svg": "c92bab1989adac0e382bf43a296c0ff7",
"assets/assets/vectors/copyright.svg": "d08bad032476ed8fb79a256f00bd83c5",
"assets/assets/vectors/github.svg": "d7f0c9964314b09c6a3427a996938211",
"assets/assets/vectors/dark.svg": "fe43e182a63c623a16f899d15e5956a6",
"assets/assets/vectors/email.svg": "67fd8949a1d05588865d819136acd81a",
"assets/assets/vectors/close.svg": "6c2ce261dfc5cfe58c1f55634209daa9",
"assets/assets/vectors/copy.svg": "b03bdaf9c88cce1d2a43f68526ce2c2c",
"assets/assets/vectors/phone.svg": "d1928a69fc0a7da12827bf2fc52dfbb5",
"assets/assets/vectors/location.svg": "7b1a25f673eb819692b1c6885c30037d",
"assets/assets/vectors/share.svg": "6e0e33c6da0f92d79b55f926fe8c906e",
"assets/assets/vectors/twitter.svg": "93b4d9ff4215e474f320bc05b533ffc9",
"assets/assets/vectors/menu.svg": "6b2ab59ec4a7dce930698844fa89fd01",
"assets/assets/vectors/wavingHand.svg": "d3340c0d2cc235a67a790a5fff4f878c",
"assets/assets/vectors/light.svg": "34dc484bbad0a9770ac44d09d1bbc4d1",
"assets/assets/fonts/Inter_28pt-LightItalic.ttf": "53fd3364ffe65ab2ff79f7fe024c83ce",
"assets/assets/fonts/Inter_18pt-ExtraBoldItalic.ttf": "b03bfa9ceab3df1f81834d0523331c30",
"assets/assets/fonts/AppIcons.ttf": "77716959153b110df6320aab3d9e96d3",
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
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
".idea/workspace.xml": "f0e7b638ddea4dc620a592d7cb8f8647",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "f460225ee7b0da88b858fdafab5eca69",
".idea/caches/deviceStreaming.xml": "542d2674277f7923567b5d133a2c1f82"};
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
