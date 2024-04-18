(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4258:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>y,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>h,getStaticProps:()=>f,reportWebVitals:()=>m,routeModule:()=>j,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>b});var o=r(7093),a=r(5244),i=r(1323),l=r(1777),s=r.n(l),u=r(1484),c=r(8539),d=e([u]);u=(d.then?(await d)():d)[0];let p=(0,i.l)(c,"default"),f=(0,i.l)(c,"getStaticProps"),h=(0,i.l)(c,"getStaticPaths"),g=(0,i.l)(c,"getServerSideProps"),y=(0,i.l)(c,"config"),m=(0,i.l)(c,"reportWebVitals"),b=(0,i.l)(c,"unstable_getStaticProps"),x=(0,i.l)(c,"unstable_getStaticPaths"),P=(0,i.l)(c,"unstable_getStaticParams"),v=(0,i.l)(c,"unstable_getServerProps"),_=(0,i.l)(c,"unstable_getServerSideProps"),j=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:u.default,Document:s()},userland:c});n()}catch(e){n(e)}})},8539:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(167),o=r(997),a=n._(r(6689)),i=n._(r(6665)),l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let u={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||l[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:u.error,children:[(0,o.jsx)(i.default,{children:(0,o.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:u.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:u.h1,children:e}):null,(0,o.jsx)("div",{style:u.wrap,children:(0,o.jsxs)("h2",{style:u.h2,children:[this.props.title||e?r:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=s,c.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2771:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6665:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return g}});let n=r(167),o=r(8760),a=r(997),i=o._(r(6689)),l=n._(r(8747)),s=r(8039),u=r(1988),c=r(2771);function d(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1558);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let a=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,i.useContext)(s.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return(0,a.jsx)(l.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8747:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(6689),o=()=>{},a=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1558:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1484:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>s});var o=r(997),a=r(8269);r(8819);var i=r(3590),l=e([a,i]);function s({Component:e,pageProps:t}){return(0,o.jsxs)(a.H,{children:[o.jsx(e,{...t}),o.jsx(i.ToastContainer,{})]})}[a,i]=l.then?(await l)():l,n()}catch(e){n(e)}})},3118:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>l});var o=r(9648),a=e([o]);let i=(o=(a.then?(await a)():a)[0]).default.create({baseURL:"http://localhost:4000",headers:{"Content-Type":"application/json"}});i.interceptors.request.use(e=>{let t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));let l=i;n()}catch(e){n(e)}})},8269:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{H:()=>u,a:()=>c});var o=r(997),a=r(6689),i=r(2938),l=e([i]);i=(l.then?(await l)():l)[0];let s=(0,a.createContext)(null),u=({children:e})=>{let[t,r]=(0,a.useState)(null);(0,a.useEffect)(()=>{let e=localStorage.getItem("token"),t=localStorage.getItem("companyName");e&&t&&r({loginId:"",companyName:t})},[]);let n=async(e,t)=>{try{let{token:n,companyName:o}=await (0,i.x)(e,t);localStorage.setItem("token",n),r({loginId:e,companyName:o})}catch(e){throw Error("ログインに失敗しました")}};return o.jsx(s.Provider,{value:{user:t,login:n,logout:()=>{localStorage.removeItem("token"),r(null)}},children:e})},c=()=>{let e=(0,a.useContext)(s);if(!e)throw Error("useAuth must be used within an AuthProvider");return e};n()}catch(e){n(e)}})},2938:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{x:()=>i});var o=r(3118),a=e([o]);o=(a.then?(await a)():a)[0];let i=async(e,t)=>{try{let r=await o.Z.post("/api/login",{loginId:e,password:t});console.log(r);let{token:n,companyName:a}=r.data;return localStorage.setItem("token",n),localStorage.setItem("companyName",a),{token:n,companyName:a}}catch(e){throw console.error("ログインエラー",e),Error("ログインに失敗しました")}};n()}catch(e){n(e)}})},8819:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9648:e=>{"use strict";e.exports=import("axios")},3590:e=>{"use strict";e.exports=import("react-toastify")},1017:e=>{"use strict";e.exports=require("path")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[777],()=>r(4258));module.exports=n})();