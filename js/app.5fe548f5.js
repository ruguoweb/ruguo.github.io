(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-ef2f2df6":"6c0512f5"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-ef2f2df6":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-ef2f2df6":"c46269fe"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===n||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===n||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3870:function(e,t,r){"use strict";var n=r("dea0"),o=r.n(n);o.a},"522b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header-basic"),r("router-view")],1)},a=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"AppHeader"},[n("div",{staticClass:"page-header"},[n("img",{staticClass:"img-logo",attrs:{src:r("cf05")}}),e._v("我是AppHeader ")]),n("div",{staticClass:"search-container"},[n("div",{staticClass:"search-left"},[e._v("搜索框")]),n("div",{staticClass:"search-right"},[e._v("快捷按钮")])])])}],i={name:"HeaderBasic"},s=i,f=(r("3870"),r("2877")),l=Object(f["a"])(s,c,u,!1,null,"1dd608a4",null),d=l.exports,p={name:"App",components:{HeaderBasic:d}},h=p,v=Object(f["a"])(h,o,a,!1,null,null,null),m=v.exports,g=(r("13d5"),r("d3b7"),r("ac1f"),r("5319"),r("ddb0"),r("2f62"));n["a"].use(g["a"]);var b=r("c653"),y=b.keys().reduce((function(e,t){var r=t.replace(/^\.\/(.*)\.\w+$/,"$1"),n=b(t);return e[r]=n.default,e}),{}),w=new g["a"].Store({modules:y}),_=w,O=r("8c4f");n["a"].use(O["a"]);var k=[{path:"/",component:function(){return r.e("chunk-ef2f2df6").then(r.bind(null,"42df"))}}],C=function(){return new O["a"]({scrollBehavior:function(){return{y:0}},routes:k})},E=C();var j=E;r("522b");n["a"].config.productionTip=!1,new n["a"]({router:j,store:_,render:function(e){return e(m)}}).$mount("#app")},c653:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id="c653"},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},dea0:function(e,t,r){}});
//# sourceMappingURL=app.5fe548f5.js.map