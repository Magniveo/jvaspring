(function(e){function t(t){for(var n,u,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c95e4":"33ba6225"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"3dfd":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{color:"black",dense:"",dark:"",app:""}},[r("v-app-bar-nav-icon"),r("v-toolbar-title",[e._v(e._s(e.appTitle))]),e._l(e.menuItems,(function(t){return r("v-btn",{key:t.title,attrs:{to:t.path}},[r("v-icon",[e._v(e._s(t.icon))]),e._v(" "+e._s(t.title)+" ")],1)}))],2),r("v-main",[r("router-view")],1)],1)},o=[],a=r("9ab4"),u=r("60a3");let i=class extends u["b"]{constructor(){super()}data(){return{appTitle:"VueAppJs",sidebar:!1,menuItems:[{title:"Загрузка файла",path:"/loadfile",icon:"mdi-radio-tower"}]}}};i=Object(a["a"])([Object(u["a"])({components:{}})],i);var c=i,l=c,s=r("2877"),p=Object(s["a"])(l,n,o,!1,null,null,null);t["default"]=p.exports},"4adc":function(e,t,r){var n={"./App.vue":["3dfd"],"./pages/LoadFile.vue":["599c","chunk-2d0c95e4"]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id="4adc",e.exports=o},cd49:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=r("3dfd"),a=r("ce5b"),u=r.n(a),i=r("8c4f");const c=[{path:"/loadfile",component:"pages/LoadFile"}],l=c.map(e=>({...e,component:()=>r("4adc")(`./${e.component}.vue`)}));new i["a"];n["default"].use(i["a"]);const s=new i["a"]({mode:"history",routes:l});s.beforeEach((e,t,r)=>{r()});var p=s,f=(r("bf40"),r("5363"),r("2f62"));n["default"].use(f["a"]);var d=new f["a"].Store({modules:{}});n["default"].config.productionTip=!0,n["default"].use(u.a),new n["default"]({store:d,router:p,vuetify:new u.a,render:e=>e(o["default"])}).$mount("#app")}});
//# sourceMappingURL=app.7ec51ffe.js.map