(()=>{var t={};t.id=888,t.ids=[888],t.modules={1484:(t,e,r)=>{"use strict";r.a(t,async(t,s)=>{try{r.r(e),r.d(e,{default:()=>o});var u=r(997),a=r(8269);r(8819);var i=r(3590),n=t([i]);function o({Component:t,pageProps:e}){return(0,u.jsxs)(a.H,{children:[u.jsx(t,{...e}),u.jsx(i.ToastContainer,{})]})}i=(n.then?(await n)():n)[0],s()}catch(t){s(t)}})},8269:(t,e,r)=>{"use strict";r.d(e,{H:()=>i,a:()=>n});var s=r(997),u=r(6689);let a=(0,u.createContext)(null),i=({children:t})=>{let[e,r]=(0,u.useState)(null),i=async(t,e)=>{r({id:t})};return s.jsx(a.Provider,{value:{user:e,login:i,logout:()=>{r(null)}},children:t})},n=()=>{let t=(0,u.useContext)(a);if(!t)throw Error("useAuth must be used within an AuthProvider");return t}},8819:()=>{},6689:t=>{"use strict";t.exports=require("react")},997:t=>{"use strict";t.exports=require("react/jsx-runtime")},3590:t=>{"use strict";t.exports=import("react-toastify")}};var e=require("../webpack-runtime.js");e.C(t);var r=e(e.s=1484);module.exports=r})();