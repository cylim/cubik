if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-9564d7f6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1166-33a8124a54418ac7.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/1294.57aea2bf38375aa5.js",revision:"57aea2bf38375aa5"},{url:"/_next/static/chunks/1356d5da-1d928e79686d298f.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/1612.606dc48154077109.js",revision:"606dc48154077109"},{url:"/_next/static/chunks/1697.bde1d178ae16fa81.js",revision:"bde1d178ae16fa81"},{url:"/_next/static/chunks/3804.5c782b135a9ecacd.js",revision:"5c782b135a9ecacd"},{url:"/_next/static/chunks/4088.37e101588c85bb8b.js",revision:"37e101588c85bb8b"},{url:"/_next/static/chunks/4152-4804aafff7639d5c.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/47d33619-2e64fb82855170f5.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/4818.18035930032b564e.js",revision:"18035930032b564e"},{url:"/_next/static/chunks/5303.fe4147cad7582d9a.js",revision:"fe4147cad7582d9a"},{url:"/_next/static/chunks/5456-49b2d900f084dead.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/5493-a46d1d94950ed01a.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/5825.d6b097c91aeae4f6.js",revision:"d6b097c91aeae4f6"},{url:"/_next/static/chunks/6056-b761282ced73d5ea.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/6140.79adf3aa3e943f63.js",revision:"79adf3aa3e943f63"},{url:"/_next/static/chunks/6399-69e1ebcd7d0273a1.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/7091.a45f9b6f81c7c10e.js",revision:"a45f9b6f81c7c10e"},{url:"/_next/static/chunks/7502.97153e09b3e093f7.js",revision:"97153e09b3e093f7"},{url:"/_next/static/chunks/7617-96543e111a9ca695.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/7728.ee0cae9aceaed547.js",revision:"ee0cae9aceaed547"},{url:"/_next/static/chunks/7820.5baac7a0e62da206.js",revision:"5baac7a0e62da206"},{url:"/_next/static/chunks/797.2ae316f35dcfff17.js",revision:"2ae316f35dcfff17"},{url:"/_next/static/chunks/8511.d52c9171102de54a.js",revision:"d52c9171102de54a"},{url:"/_next/static/chunks/859.06111ccb8a725a51.js",revision:"06111ccb8a725a51"},{url:"/_next/static/chunks/9357-814159aa1ff579b4.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/9403-733811fa81f1b4a3.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/9626.97815599a4fa5484.js",revision:"97815599a4fa5484"},{url:"/_next/static/chunks/9805-c802bba28b092eea.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/9ffa21ba.04dea90ca1efe2e5.js",revision:"04dea90ca1efe2e5"},{url:"/_next/static/chunks/app/_not-found-9fd3314a96dc4933.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/data-display/divider/page-70e3244de9bd3e1c.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/data-display/subhead/page-fe0e88c0ac88e0cf.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/data-display/table/page-4a11bb2dbc7c3c4d.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/data-display/tag/page-9c0dfe47b33aa533.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/data-display/text/page-e493014c9bfccf02.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/disclosure/accordion/page-8f897c82719400ff.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/disclosure/segment/page-f4c379ee1ed1946c.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/disclosure/tabs/page-fda99f5044f8df10.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/feedback/alert/page-f92b95a24673560a.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/feedback/progress/page-fe4e620cd018f7db.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/feedback/toast/page-e153b52a327b255e.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/button/page-89cb933ddaa5474e.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/checkbox/page-0b31e2d75708f7bc.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/input/page-94c3e9867ab85d1e.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/inputfield/page-8009e08998e12b3b.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/inputlabel/page-728021e305bffdb6.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/select/page-948365d55ad11700.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/switch/page-b8ef349b8b7cbfa3.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/forms/textarea/page-86e845b67f185832.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/layout-6290860b3f7a1c4a.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/media/avatar/page-711c0788b75ab582.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/overlay/drawer/page-d56524d25fb9da80.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/overlay/modal/page-a52afc8688b5490f.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/overlay/popover/page-bd882785161f1e27.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/overlay/tooltip/page-265100fa0e05bc24.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/components/page-9438a5abbc167440.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/border-radius/page-6177460d9834b0d8.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/colors/page-fd340466a230d3c1.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/design-tokens/page-610f88952bb52d3b.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/dimensions/page-608d9a2a4a30fc30.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/layout-c087656c57d398d9.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/page-e157b7c6e237ff04.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/spacing/page-edfcdd56ca3ead73.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/foundations/typography/page-e441ab29833e94eb.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/layout-c7b0587d4c45fc1e.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/others/layout-319cf134fdf49889.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/others/page-0d568d15340412ec.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/others/wallet-connect/page-15a6aab2f72eb5c8.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/app/page-1b7229101db8a499.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/framework-d01b68062ece2457.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/main-30f42e88bb576a30.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/main-app-d6f0e5f1979644cd.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/pages/_app-2a5070c88aec2406.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/pages/_error-45dfdbc8243c2070.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-04be45d5db08d8ae.js",revision:"dLorOSrC6LiJ1xku3BiA6"},{url:"/_next/static/css/19fe4eeb2f8a32a8.css",revision:"19fe4eeb2f8a32a8"},{url:"/_next/static/css/f3209715ac294f44.css",revision:"f3209715ac294f44"},{url:"/_next/static/dLorOSrC6LiJ1xku3BiA6/_buildManifest.js",revision:"6f159ad9c5704c6fe8eb939c622099d7"},{url:"/_next/static/dLorOSrC6LiJ1xku3BiA6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/43aea0fda6fb8cff-s.p.woff2",revision:"b9daee671fd4ca3e61c0d367c446522d"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/819ce6ae95bf1f56-s.woff2",revision:"7136d1969df05a8fc9ef757351a0c74c"},{url:"/_next/static/media/96ea1c5f58969ba4-s.p.woff2",revision:"15678f821dcae595c0fc137ebdfd3e7f"},{url:"/_next/static/media/bb101507aabae8bb-s.woff2",revision:"86abe220ef6d34d1255e6405bd94fe0b"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/ee3366da1baba43e-s.woff2",revision:"40f223b5e5ad2101eb66a525b0a2bd66"},{url:"/_next/static/media/f669417f2ed2df13-s.woff2",revision:"9848290e88ae15fbff9a8fd2ad6ed374"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
