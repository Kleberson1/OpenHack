(function(e){function t(t){for(var a,c,s=t[0],i=t[1],l=t[2],u=0,f=[];u<s.length;u++)c=s[u],r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7a29333c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o,i=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");c.type=a,c.request=o,n[1](c)}r[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,i.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"088c":function(e,t,n){},"535b":function(e,t,n){},"548c":function(e,t,n){},"715a":function(e,t,n){"use strict";var a=n("088c"),r=n.n(a);r.a},"833e":function(e,t,n){"use strict";var a=n("548c"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=n("ce5b"),o=n.n(r);n("bf40");a["default"].use(o.a,{});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[e._l(e.items,function(t){return[t.heading?n("v-layout",{key:t.heading,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[t.heading?n("v-subheader",[e._v("\n              "+e._s(t.heading)+"\n            ")]):e._e()],1),n("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[n("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[e._v("EDIT")])])],1):n("v-list-tile",{key:t.text,attrs:{to:t.link},on:{click:function(e){}}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("\n              "+e._s(t.text)+"\n            ")])],1)],1)]})],2)],1),n("v-toolbar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,color:"blue darken-3",dark:"",app:"",fixed:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("span",{staticClass:"hidden-sm-and-down"},[e._v("KuberMin")])],1),n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"search",label:"Procurar"}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("apps")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("notifications")])],1),n("v-btn",{attrs:{icon:"",large:""}},[n("v-avatar",{attrs:{size:"32px",tile:""}},[n("img",{attrs:{src:"https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/images/microsoft-header.png",alt:"Kubernetes"}})])],1)],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("router-view")],1)],1)],1)],1)},s=[],i={data:function(){return{dialog:!1,drawer:null,items:[{icon:"dns",text:"Server US",link:"centralpaneus"},{icon:"dns",text:"Server EU",link:"centralpaneeu"}]}},props:{source:String}},l=i,u=n("2877"),d=Object(u["a"])(l,c,s,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,v=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},m=[],b=n("c665"),h=n("dc0a"),k=n("d328"),_=n("11d9"),g=n("9ab4"),x=n("60a3"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("img",{staticClass:"mb-5",attrs:{src:"https://kerpanic.files.wordpress.com/2017/11/1qtnqtnrgq-n-r5k-nyuz0g.png?quality=80&strip=info&w=1600",alt:"Kubernetes"}}),n("blockquote",[e._v("\n        “First, solve the problem. Then, write the code.”\n        "),n("footer",[n("small",[n("em",[e._v("—John Johnson")])])])])])],1)],1)},y=[],O={name:"HelloWorld",props:{msg:String}},j=O,C=(n("833e"),Object(u["a"])(j,w,y,!1,null,"019387b0",null));C.options.__file="HelloWorld.vue";var S=C.exports,E=function(e){function t(){return Object(b["a"])(this,t),Object(k["a"])(this,Object(_["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),t}(x["b"]);E=g["a"]([Object(x["a"])({components:{HelloWorld:S}})],E);var T=E,P=T,A=Object(u["a"])(P,p,m,!1,null,null,null);A.options.__file="Home.vue";var U=A.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cardCentralUS")},$=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xl12:"",sm12:""}},[n("v-card",[n("v-card-title",[e._v("\n            SERVER USA\n          ")]),n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.items,function(t,a){return n("v-flex",e._b({key:t.name,model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},"v-flex",(r={},r["xs"+t.flex]=!0,r),!1),[n("v-card",[n("v-card-media",{attrs:{src:"https://i.pinimg.com/originals/a2/a1/7a/a2a17a270659686e11b8fc837f06f0f9.png",height:"200px"}}),n("v-container",{attrs:{"fill-height":"",fluid:"","pa-2":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline dark--text",domProps:{textContent:e._s(t.name)}})])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},nativeOn:{click:function(n){e.removeItem(t.name,a)}}},[n("v-icon",{attrs:{dark:""}},[e._v("remove")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[n("v-icon",[e._v(e._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}]},[n("span",[n("b",[e._v("IP:")])]),n("span",{domProps:{textContent:e._s(t.endpoints.minecraft)}}),n("br"),n("span",[n("b",[e._v("RCon IP:")])]),n("span",{domProps:{textContent:e._s(t.endpoints.rcon)}})])],1)],1)],1);var r}))],1)],1)],1),n("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"pink",dark:"",fixed:""},nativeOn:{click:function(t){e.createItem()}}},[n("v-icon",[e._v("add")])],1),n("v-snackbar",{attrs:{color:e.typeSnack,"multi-line":"multi-line"===e.mode,timeout:e.timeout,vertical:"vertical"===e.mode},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.snackText)+"\n      "),n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n        Close\n      ")])],1)],1)},q=[],z=n("bc3a"),G=n.n(z),H=null,M={name:"cardCentralUS",data:function(){return{snackbar:!1,typeSnack:"success",snackText:"",items:[]}},created:function(){H=this},mounted:function(){var e={headers:{"Access-Control-Allow-Origin":"*"}};G()({method:"GET",url:"http://lista-k8s.eastus.cloudapp.azure.com:5000/api/server"},e).then(function(e){console.log(e.data),e.data.forEach(function(e){e.show=!0}),H.items=e.data},function(e){console.error(e)})},methods:{removeItem:function(e,t){var n={headers:{"Access-Control-Allow-Origin":"*"}},a="http://lista-k8s.eastus.cloudapp.azure.com:5000/api/server/delete/"+e;G()({method:"GET",url:a},n).then(function(e){console.log(e.data),H.typeSnack="success",H.snackText="Server Removed"+e.data,H.snackbar=!0},function(e){console.error(e)})},createItem:function(){var e={headers:{"Access-Control-Allow-Origin":"*"}},t="http://lista-k8s.eastus.cloudapp.azure.com:5000/api/server/create";G()({method:"GET",url:t},e).then(function(e){console.log(e.data),H.typeSnack="success",H.snackText="Server created "+e.data,H.snackbar=!0},function(e){H.typeSnack="error",H.snackText=e,H.snackbar=!0,console.error(e)})}}},N=M,W=(n("715a"),Object(u["a"])(N,R,q,!1,null,"5d35c426",null));W.options.__file="cardCentralUS.vue";var J=W.exports,F=function(e){function t(){return Object(b["a"])(this,t),Object(k["a"])(this,Object(_["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),t}(x["b"]);F=g["a"]([Object(x["a"])({components:{cardCentralUS:J}})],F);var K=F,V=K,B=Object(u["a"])(V,I,$,!1,null,null,null);B.options.__file="CentralPaneUS.vue";var D=B.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cardCentralEU")},Y=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xl12:"",sm12:""}},[n("v-card",[n("v-card-title",[e._v("\n            SERVER EUROPA\n          ")]),n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.items,function(t,a){return n("v-flex",e._b({key:t.name,model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},"v-flex",(r={},r["xs"+t.flex]=!0,r),!1),[n("v-card",[n("v-card-media",{attrs:{src:"https://i.pinimg.com/originals/a2/a1/7a/a2a17a270659686e11b8fc837f06f0f9.png",height:"200px"}}),n("v-container",{attrs:{"fill-height":"",fluid:"","pa-2":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline dark--text",domProps:{textContent:e._s(t.name)}})])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},nativeOn:{click:function(n){e.removeItem(t.name,a)}}},[n("v-icon",{attrs:{dark:""}},[e._v("remove")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[n("v-icon",[e._v(e._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),n("v-slide-y-transition",[n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}]},[n("span",[n("b",[e._v("IP:")])]),n("span",{domProps:{textContent:e._s(t.endpoints.minecraft)}}),n("br"),n("span",[n("b",[e._v("RCon IP:")])]),n("span",{domProps:{textContent:e._s(t.endpoints.rcon)}})])],1)],1)],1);var r}))],1)],1)],1),n("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"pink",dark:"",fixed:""},nativeOn:{click:function(t){e.createItem()}}},[n("v-icon",[e._v("add")])],1),n("v-snackbar",{attrs:{color:e.typeSnack,"multi-line":"multi-line"===e.mode,timeout:e.timeout,vertical:"vertical"===e.mode},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.snackText)+"\n      "),n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n        Close\n      ")])],1)],1)},X=[],Z=null,ee={name:"cardCentralEU",data:function(){return{snackbar:!1,typeSnack:"success",snackText:"",items:[]}},created:function(){Z=this},mounted:function(){var e={headers:{"Access-Control-Allow-Origin":"*"}};G()({method:"GET",url:"http://40.85.72.156/api/server"},e).then(function(e){console.log(e.data),e.data.forEach(function(e){e.show=!0}),Z.items=e.data},function(e){console.error(e)})},methods:{removeItem:function(e,t){var n={headers:{"Access-Control-Allow-Origin":"*"}},a="http://lista-k8s.eastus.cloudapp.azure.com:5000/api/server/delete/"+e;G()({method:"GET",url:a},n).then(function(e){console.log(e.data),Z.typeSnack="success",Z.snackText="Server Removed"+e.data,Z.snackbar=!0},function(e){console.error(e)})},createItem:function(){var e={headers:{"Access-Control-Allow-Origin":"*"}},t="http://lista-k8s.eastus.cloudapp.azure.com:5000/api/server/create";G()({method:"GET",url:t},e).then(function(e){console.log(e.data),Z.typeSnack="success",Z.snackText="Server created "+e.data,Z.snackbar=!0},function(e){Z.typeSnack="error",Z.snackText=e,Z.snackbar=!0,console.error(e)})}}},te=ee,ne=(n("f33f"),Object(u["a"])(te,Q,X,!1,null,"71a53676",null));ne.options.__file="cardCentralEU.vue";var ae=ne.exports,re=function(e){function t(){return Object(b["a"])(this,t),Object(k["a"])(this,Object(_["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),t}(x["b"]);re=g["a"]([Object(x["a"])({components:{cardCentralEU:ae}})],re);var oe=re,ce=oe,se=Object(u["a"])(ce,L,Y,!1,null,null,null);se.options.__file="CentralPaneEU.vue";var ie=se.exports;a["default"].use(v["a"]);var le=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/centralpaneus",name:"centralpaneus",component:D},{path:"/centralpaneeu",name:"centralpaneeu",component:ie}]}),ue=n("9483");Object(ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["default"].config.productionTip=!1,new a["default"]({router:le,render:function(e){return e(f)}}).$mount("#app")},f33f:function(e,t,n){"use strict";var a=n("535b"),r=n.n(a);r.a}});
//# sourceMappingURL=app.e3bb33c2.js.map