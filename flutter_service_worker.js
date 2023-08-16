'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e6bd1c573361449e13f9cbb454826c16",
"index.html": "043025121e39957a267e2af28f4490fd",
"/": "043025121e39957a267e2af28f4490fd",
"main.dart.js": "fa90b6ad71c014542dc100e257cecd18",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "a30275034f29f36de40ffbbfee569cfc",
"icons/Icon-192.png": "723c04b61637d6cbc0de184ac324b86b",
"icons/Icon-maskable-192.png": "723c04b61637d6cbc0de184ac324b86b",
"icons/Icon-maskable-512.png": "06b3769e2981b16b1a807f7d9521eea7",
"icons/Icon-512.png": "06b3769e2981b16b1a807f7d9521eea7",
"manifest.json": "cce42f3a04ecf38425bf4bc5059f3f74",
".git/config": "0eff26048154b25cc423b06a8580d9c2",
".git/objects/pack/pack-2716c1b894d33d252ea01b33adf942904417c456.pack": "6b71410269af61e5f8249bb0d87c39cc",
".git/objects/pack/pack-2716c1b894d33d252ea01b33adf942904417c456.idx": "20dd7d6a26ec6370c656ea642d79fe2a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd5614ab116c1c95b9c9f26541479983",
".git/logs/refs/heads/main": "dd5614ab116c1c95b9c9f26541479983",
".git/logs/refs/remotes/origin/HEAD": "dd5614ab116c1c95b9c9f26541479983",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "61c6f081fa856d20237de34c8df36444",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "1ce4e52800fdc23c7dfd7adecb87fc65",
".git/packed-refs": "04dc96f5afaed258bd6c26d30e42e462",
"assets/AssetManifest.json": "d8eee61074010080c603594acb5c1ca7",
"assets/NOTICES": "95249a0eeb44edc8ba0488d9c206d0cb",
"assets/FontManifest.json": "3a9064c706ecf952f88e059ea227c64b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "2c33f60d62d4a70c072b03f037d3abfb",
"assets/AssetManifest.bin": "9261dc8f6081c5325f6817c24384e800",
"assets/fonts/MaterialIcons-Regular.otf": "3d70790b8062e699771a77e361dd22cd",
"assets/assets/images/card/recharge_limit_img.png": "3a5d43285f5e3217ac628cbd62bdeee2",
"assets/assets/images/card/apply_card_title_bg.png": "db515f5dfeb83f21b80b1ff353b255bc",
"assets/assets/images/card/visa_identifying.png": "3e31f142ee456dcbb6ed6756a0185b9e",
"assets/assets/images/card/monthly_fee_img.png": "eafc385aad5aad7451af7c274458ccda",
"assets/assets/images/card/fire_icon_img.png": "b0535f87210b4acd2d6851fc43a25132",
"assets/assets/images/card/commission_img.png": "add2145dc14d4e00c24667e0d983e4f1",
"assets/assets/images/card/black_gold_bj_img.png": "e679233fddfaf3e211d2b12b3c534a3a",
"assets/assets/images/card/withdrawal_icon.png": "d9b13b62eb44043e4057c208b711c13a",
"assets/assets/images/card/recharge_icon.png": "582a74dfba4fd3978c9ea9503f76790e",
"assets/assets/images/card/platinum_card_bj_img.png": "8b353e66111b8af12f9f21c367aeb07f",
"assets/assets/images/card/consumption_img.png": "77c4466f6d72c2c81b378a0bc7a34464",
"assets/assets/images/card/bare_card_img.png": "98843a7941b2dfee4fb077c1f8de7d1d",
"assets/assets/images/card/standard_card_bj_img.png": "6701dc9a6ae80f341540e87bd9a921b8",
"assets/assets/images/card/master_card_identifying.png": "ef7f199312712c4fd1e06706774f7b18",
"assets/assets/images/card/activation_icon.png": "69924f23862b5bd2785c8bb685be1bc1",
"assets/assets/images/card/centurion_card_img.png": "740580516c639b7fbe76f60d6348f02b",
"assets/assets/images/card/check_button_img.png": "39e66834cfef5bfe4aa5a556b6e94085",
"assets/assets/images/card/period_validity_img.png": "f4e6fa50ddc60e8a0137db870f4c9e5b",
"assets/assets/images/card/recharge_process_img.png": "00e9eff538726e5457da67736a291c7d",
"assets/assets/images/card/lite_card_bj_img.png": "c93db631f85d03f7bbd460e297655e51",
"assets/assets/images/card/senior_card_bj_img.png": "cbfae927eb70dfe2a8255d9922357d21",
"assets/assets/images/card/card_fee_img.png": "5896d790f4716acfe9765a9ce669dbac",
"assets/assets/images/card/no_data.png": "5a3188ffef5910fc9a29ce5332d45d8b",
"assets/assets/images/card/card_title_bg.png": "84f43a641c232079c91d5983b1294e14",
"assets/assets/images/card/benefits_icon.png": "30fc8faa694d0e94a4f83a3bedb50a8f",
"assets/assets/images/card/warn_icon_img.png": "155498b3237d232711d10cca82c3a014",
"assets/assets/images/card/card_payment.png": "f680371dc6d2a6fece0d927cb4f2544f",
"assets/assets/images/card/cvv_code_icon.png": "df91debab482ddb54aef0b58123ba47d",
"assets/assets/images/tab/wallet_inactive.png": "6ea4a98bfa7d2a3ba88de51e7a0e2e7c",
"assets/assets/images/tab/me_active.png": "65fc8b374f2d32d02039a2fb561348cd",
"assets/assets/images/tab/me_inactive.png": "8e5a51ba220e1d793ddd70151573193a",
"assets/assets/images/tab/card_inactive.png": "5ed004bf29b8716232ad85dcc7b21356",
"assets/assets/images/tab/card_active.png": "89e8848c6e02d7f0474aee57d28bebcf",
"assets/assets/images/tab/invite_active.png": "d28fb2b32cb7fb54b53baf1c16add67f",
"assets/assets/images/tab/invite_inactive.png": "444e8998ef78e52519242710776b54bd",
"assets/assets/images/tab/wallet_active.png": "866a441020d904cfc4b707bb2404f811",
"assets/assets/images/invite/start_start.png": "14a73466f99dd222bbd03b49d1545f07",
"assets/assets/images/invite/invite_bottom_gift.png": "103990fdca53f98d2d346e7cb4a8eb9b",
"assets/assets/images/invite/invite_bottom_saving.png": "1e5ad8f67b37edc5a12447220d8b9d54",
"assets/assets/images/invite/invite_register_title.png": "91f47811010dd9b471a03bc761888e55",
"assets/assets/images/invite/invite_banner_bg.png": "f51eb39e65d98a965402cbd8bb9d084e",
"assets/assets/images/invite/invite_bottom_wallet.png": "70a2fbd0918d884792434bbbb09cc35b",
"assets/assets/images/wallet/withdraw_success_tip.png": "c16f6029ebdbf5aeb4065ee57c3206a6",
"assets/assets/images/wallet/fill_round.png": "26c30e364ab015aa32c9f6be298d5d16",
"assets/assets/images/wallet/wallet_title_bg.png": "1c60a1b59b19d82ba0634c08d2d040b7",
"assets/assets/images/wallet/usdt_icon.png": "81f19c028b6e26392316d7ab4c2a01c3",
"assets/assets/images/wallet/usd_icon.png": "21a238b6e7b816de072d768b4b5f255d",
"assets/assets/images/setting/twitter_img.png": "5c57b1fac4d8992ffcd49b8a4f31963d",
"assets/assets/images/setting/open_eye_img.png": "bf5032c193642a6770b714b2ec05e314",
"assets/assets/images/setting/my_head_bj_img.png": "c830c988e544696d0e0b4e59f2c4b798",
"assets/assets/images/setting/official_website_img.png": "adb970a027ab8d370110ab145bac6913",
"assets/assets/images/setting/user_logo_img.png": "7456cbf56e6556e4015a1953686b10f2",
"assets/assets/images/setting/we_com_img.png": "bc388846b21038761c0882223620ece1",
"assets/assets/images/setting/check_img.png": "91d41adcda73dfc0386bf9c0610640e4",
"assets/assets/images/setting/pricing_icon_img.png": "5ff49f997df304ff1d4b5f4ae72b36e8",
"assets/assets/images/setting/version_icon_img.png": "df9b741b7b0164d6940ed1452bca2b9d",
"assets/assets/images/setting/close_eyes_img.png": "abb94b88cc6f8eedb1c5c9187bcf06b2",
"assets/assets/images/setting/asset_overview_img.png": "b5a48ae9c2d0e7dadb992a7cdeb4d33c",
"assets/assets/images/setting/message_img.png": "bf758c33c45cdfa5e062792e41b0ce19",
"assets/assets/images/setting/default_card_img.png": "5beeae22f552ec59e26d47b38944f56a",
"assets/assets/images/setting/mailbox_img.png": "4f07a10b983f2417d3e0b215df78569d",
"assets/assets/images/setting/privacy_icon_img.png": "c9cc18251923013be4c75195727d1d84",
"assets/assets/images/setting/common_icon_img.png": "19aa0bee4530f077350b7ef76740d8df",
"assets/assets/images/setting/service_icon_img.png": "7dce224161fe47c0aee3c2b5fbcf3c33",
"assets/assets/images/setting/official_account_img.png": "b5c1801fba67c83273b07a55df4484be",
"assets/assets/images/setting/agreement_icon_img.png": "3a9ff8553f32baa729f35eede1b01d74",
"assets/assets/images/setting/commission_icon_img.png": "19a14c6c7280bab24a802eda751566ac",
"assets/assets/images/setting/trumpet_icon_img.png": "ffa3a42704939bb08e9ed82c1f18435b",
"assets/assets/images/setting/scan_code_img.png": "eb68232602067e2b165b9712ca2ea444",
"assets/assets/images/setting/alert_icon_img.png": "3b67cd2b1857f5b0fa792bb5a85288bc",
"assets/assets/images/setting/arrow_img.png": "c46e2537ea2513619504485c9fc4359f",
"assets/assets/images/setting/secure_icon_img.png": "569d59dd0f588313edf2d166e4eb9646",
"assets/assets/images/setting/cost_icon_img.png": "0f44549ba94a1e30ad80b54ecfe99fe5",
"assets/assets/images/setting/card_balance_img.png": "480265de039cfd683caa8b38d0c46c54",
"assets/assets/images/setting/payment_icon_img.png": "c643572b444c59f1b59c396a4503cca7",
"assets/assets/images/setting/notice_icon_img.png": "032ff6eaad94a4b9944419e20de1a140",
"assets/assets/images/setting/exit_icon_img.png": "89f6843924e16b6f5af9ab27c93f1850",
"assets/assets/images/setting/user_copy_icon_img.png": "6a1796289f151dfa6c0a916ac7b66685",
"assets/assets/images/setting/total_expenditure_img.png": "92395704a0b835ee344d2b4265e0cbff",
"assets/assets/images/setting/telegram_img.png": "c4ab5e87721ac7f235ed139ad9b4e1a9",
"assets/assets/images/setting/copy_icon_img.png": "e5da47d8012e34dbf5c2572acae0afa9",
"assets/assets/images/setting/qq_img.png": "0938ebc38387558ba15ad94e785202c5",
"assets/assets/images/setting/help_icon_img.png": "806e901bca1925f3414a117b89e98997",
"assets/assets/images/setting/language_icon_img.png": "5d4529f3bb8e2cf0d46e83f8df8501ec",
"assets/assets/images/setting/log_off_icon_img.png": "5208366a6a460205f81f1ac05071b600",
"assets/assets/images/login/binding_tip.png": "0ed3a1753aa7cc46facc7842d5453251",
"assets/assets/images/login/login_info_expire.png": "70c342535714c5dbe268d09050a4651d",
"assets/assets/images/login/kyc_certification.png": "b1a63c8da29c19425bb4c64372b72484",
"assets/assets/images/login/title_header.png": "15d9933a8a7f30bdc236c539a663c9ba",
"assets/assets/images/login/failure_icon.png": "c84855de760be0108f79ee600bc4ba1e",
"assets/assets/images/login/kyc_failure.png": "898271fc4f3109e4d57b54f2a1fae9e0",
"assets/assets/images/login/binding_success.png": "f04f6674bd3d517160c1ab16d257b82d",
"assets/assets/images/login/secondary_validation_header.png": "86a323ab47a444151183af455b1e4277",
"assets/assets/font/cardfont.ttf": "f059c1c61f135f8143b27ad3ab22a1ab",
"assets/assets/font/iconfont.ttf": "89c341904953dc047dd767322fbb4ca1",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
