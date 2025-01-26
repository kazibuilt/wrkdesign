<!DOCTYPE html>
<html id="html-element">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#0000FF">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#0000FF">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="text/javascript">
      /* eslint-disable */
      /*! modernizr 3.6.0 (Custom Build) | MIT *
      * https://modernizr.com/download/?-arrow-promises !*/
      !function(window,document,undefined){function is(n,e){return typeof n===e}function testRunner(){var n,e,o,r,i,t,s;for(var d in tests)if(tests.hasOwnProperty(d)){if(n=[],e=tests[d],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(r=is(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)t=n[i],s=t.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),classes.push((r?"":"no-")+s.join("-"))}}var tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){tests.push({name:n,fn:e,options:o})},addAsyncTest:function(n){tests.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("arrow",function(){try{eval("()=>{}")}catch(e){return!1}return!0}),Modernizr.addTest("promises",function(){return"Promise"in window&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var n;return new window.Promise(function(e){n=e}),"function"==typeof n}()});var classes=[];testRunner(),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);
      /* eslint-enable */
    </script>
    <script type="text/javascript">
      // https://github.com/aws-amplify/amplify-js/issues/7499#issuecomment-804386820
      window.global = window
      var html = window.document.getElementById('html-element') // eslint-disable-line no-var
      // check if browser is pre-renderer
      if ('__PRERENDER_INJECTED' in window) {
        // we are a prerenderer instance
        // overwrite classes set by modernizr (if any) with initial one
        html.className = ''
      } else if (window.Modernizr.arrow && window.Modernizr.promises) {
        // we are in a supported browser and js is running
        // remove no-js class immediately
        html.className = html.className.split('no-js').join('')
      } else {
        // we are in an unsupported browser
        var $buoop = { // eslint-disable-line
          required: { e: -4, f: -3, o: -3, s: -3, c: -3 },
          noclose: true,
          reminder: 0,
          no_permanent_hide: true,
          insecure: true,
          api: 2021.07
        }

        function $buo_f () { // eslint-disable-line camelcase
          var e = document.createElement('script') // eslint-disable-line no-var
          e.src = '//browser-update.org/update.min.js'
          document.body.appendChild(e)
        }

        try { document.addEventListener('DOMContentLoaded', $buo_f, false) } catch (e) { window.attachEvent('onload', $buo_f) }
      }
    </script>

    <!-- Google Tag Manager -->
    <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
                  new Date().getTime(),
        event: 'gtm.js'
      }); const f = d.getElementsByTagName(s)[0]
      const j = d.createElement(s); const dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', 'GTM-N2TWW5CV')
    </script>
    <!-- End Google Tag Manager -->

    <style>
      /* stylelint-disable property-no-vendor-prefix,at-rule-no-vendor-prefix */
      #no-js-msg {
        display: none;
        text-align: center;
        text-transform: uppercase;
      }
      .no-js #no-js-msg {
        display: block !important;
      }
      body{
        background: #00F;
        color: #fff;
      }
      body .buorg {
        top: 50%;
        left: 50%;
        width: 100%;
        max-width: 80%;
        animation: unset;
        transform: translate(-50%, -50%);
      }
      .no-js #app,
      .no-js #app-loading {
        display: none !important;
      }
      /* stylelint-enable property-no-vendor-prefix,at-rule-no-vendor-prefix */
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet">
    <script type="module" crossorigin src="/static/app-4ccm2Cjh.js"></script>
    <link rel="stylesheet" crossorigin href="/static/app-lGGCgUQ7.css">
    <script type="module">import.meta.url;import("_").catch(()=>1);(async function*(){})().next();if(location.protocol!="file:"){window.__vite_is_modern_browser=true}</script>
    <script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>
  </head>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2TWW5CV"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="app"></div>
    <!-- this is the preloader of the app -->
    <!-- it is placed here because it is instantly available -->
    <div id="app-loading-container">
      <div id="app-loading" v-if="visible">
        <svg class="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
      </div>
    </div>
    <noscript>Your browser does not support JavaScript or you have disabled it for this site. Please enable Javascript execution or update your browser to view this site.</noscript>
    <script nomodule>!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script>
    <script nomodule crossorigin id="vite-legacy-polyfill" src="/static/polyfills-legacy-Mtx-ElRR.js"></script>
    <script nomodule crossorigin id="vite-legacy-entry" data-src="/static/app-legacy-auzWO5cd.js">System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))</script>
  </body>
</html>
