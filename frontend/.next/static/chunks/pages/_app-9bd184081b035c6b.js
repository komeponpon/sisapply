(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2473)}])},2473:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var o=n(5893),a=n(8673);n(1691);var s=n(7294),r=function(){for(var e,t,n=0,o="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function e(t){var n,o,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(n=0;n<s;n++)t[n]&&(o=e(t[n]))&&(a&&(a+=" "),a+=o)}else for(o in t)t[o]&&(a&&(a+=" "),a+=o)}return a}(e))&&(o&&(o+=" "),o+=t);return o};let i=e=>"number"==typeof e&&!isNaN(e),l=e=>"string"==typeof e,c=e=>"function"==typeof e,u=e=>l(e)||c(e)?e:null,d=e=>(0,s.isValidElement)(e)||l(e)||c(e)||i(e);function p(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p,playToast:f}=e,m=o?`${t}--${l}`:t,g=o?`${n}--${l}`:n,y=(0,s.useRef)(0);return(0,s.useLayoutEffect)(()=>{let e=d.current,t=m.split(" "),n=o=>{o.target===d.current&&(f(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===y.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,s.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}(e,u,r):u()};p||(c?t():(y.current=1,e.className+=` ${g}`,e.addEventListener("animationend",t)))},[p]),s.createElement(s.Fragment,null,i)}}function f(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let m=new Map,g=[],y=new Set,v=e=>y.forEach(t=>t(e)),h=()=>m.size>0;function E(e,t){var n;if(t)return!(null==(n=m.get(t))||!n.isToastActive(e));let o=!1;return m.forEach(t=>{t.isToastActive(e)&&(o=!0)}),o}function T(e,t){d(e)&&(h()||g.push({content:e,options:t}),m.forEach(n=>{n.buildToast(e,t)}))}function _(e,t){m.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function b(e){let{delay:t,isRunning:n,closeToast:o,type:a="default",hide:i,className:l,style:u,controlledProgress:d,progress:p,rtl:f,isIn:m,theme:g}=e,y=i||d&&0===p,v={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};d&&(v.transform=`scaleX(${p})`);let h=r("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":f}),E=c(l)?l({rtl:f,type:a,defaultClassName:h}):r(h,l);return s.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},s.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`}),s.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:E,style:v,[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{m&&o()}}))}let I=1,C=()=>""+I++;function L(e,t){return T(e,t),t.toastId}function N(e,t){return{...t,type:t&&t.type||e,toastId:t&&(l(t.toastId)||i(t.toastId))?t.toastId:C()}}function w(e){return(t,n)=>L(t,N(e,n))}function k(e,t){return L(e,N("default",t))}k.loading=(e,t)=>L(e,N("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),k.promise=function(e,t,n){let o,{pending:a,error:s,success:r}=t;a&&(o=l(a)?k.loading(a,n):k.loading(a.render,{...n,...a}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,a)=>{if(null==t)return void k.dismiss(o);let s={type:e,...i,...n,data:a},r=l(t)?{render:t}:t;return o?k.update(o,{...s,...r}):k(r.render,{...s,...r}),a},d=c(e)?e():e;return d.then(e=>u("success",r,e)).catch(e=>u("error",s,e)),d},k.success=w("success"),k.info=w("info"),k.error=w("error"),k.warning=w("warning"),k.warn=k.warning,k.dark=(e,t)=>L(e,N("default",{theme:"dark",...t})),k.dismiss=function(e){!function(e){var t;if(h()){if(null==e||l(t=e)||i(t))m.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=m.get(e.containerId);t?t.removeToast(e.id):m.forEach(t=>{t.removeToast(e.id)})}}else g=g.filter(t=>null!=e&&t.options.toastId!==e)}(e)},k.clearWaitingQueue=function(e){void 0===e&&(e={}),m.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},k.isActive=E,k.update=function(e,t){void 0===t&&(t={});let n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=m.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){let{props:o,content:a}=n,s={delay:100,...o,...t,toastId:t.toastId||e,updateId:C()};s.toastId!==e&&(s.staleId=e);let r=s.render||a;delete s.render,L(r,s)}},k.done=e=>{k.update(e,{progress:1})},k.onChange=function(e){return y.add(e),()=>{y.delete(e)}},k.play=e=>_(!0,e),k.pause=e=>_(!1,e);let P="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,$=e=>{let{theme:t,type:n,isLoading:o,...a}=e;return s.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...a})},x={info:function(e){return s.createElement($,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement($,{...e},s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement($,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement($,{...e},s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}},A=e=>{let{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:a,playToast:i}=function(e){var t,n;let[o,a]=(0,s.useState)(!1),[r,i]=(0,s.useState)(!1),l=(0,s.useRef)(null),c=(0,s.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:u,pauseOnHover:d,closeToast:p,onClick:f,closeOnClick:g}=e;function y(){a(!0)}function v(){a(!1)}function h(t){let n=l.current;c.canDrag&&n&&(c.didMove=!0,o&&v(),c.delta="x"===e.draggableDirection?t.clientX-c.start:t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1),n.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,n.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function E(){document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",E);let t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return i(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=m.get((t={id:e.toastId,containerId:e.containerId,fn:a}).containerId||1))||n.setToggle(t.id,t.fn),(0,s.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",v)}},[e.pauseOnFocusLoss]);let T={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",h),document.addEventListener("pointerup",E);let n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:o,left:a,right:s}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=a&&t.clientX<=s&&t.clientY>=n&&t.clientY<=o?v():y()}};return u&&d&&(T.onMouseEnter=v,e.stacked||(T.onMouseLeave=y)),g&&(T.onClick=e=>{f&&f(e),c.canCloseOnClick&&p()}),{playToast:y,pauseToast:v,isRunning:o,preventExitTransition:r,toastRef:l,eventHandlers:T}}(e),{closeButton:l,children:u,autoClose:d,onClick:p,type:f,hideProgressBar:g,closeToast:y,transition:v,position:h,className:E,style:T,bodyClassName:_,bodyStyle:I,progressClassName:C,progressStyle:L,updateId:N,role:w,progress:k,rtl:P,toastId:$,deleteToast:A,isIn:M,isLoading:O,closeOnClick:B,theme:D}=e,R=r("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":B}),S=c(E)?E({rtl:P,position:h,type:f,defaultClassName:R}):r(R,E),z=function(e){let{theme:t,type:n,isLoading:o,icon:a}=e,r=null,i={theme:t,type:n};return!1===a||(c(a)?r=a({...i,isLoading:o}):(0,s.isValidElement)(a)?r=(0,s.cloneElement)(a,i):o?r=x.spinner():n in x&&(r=x[n](i))),r}(e),H=!!k||!d,X={closeToast:y,type:f,theme:D},j=null;return!1===l||(j=c(l)?l(X):(0,s.isValidElement)(l)?(0,s.cloneElement)(l,X):function(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return s.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(X)),s.createElement(v,{isIn:M,done:A,position:h,preventExitTransition:n,nodeRef:o,playToast:i},s.createElement("div",{id:$,onClick:p,"data-in":M,className:S,...a,style:T,ref:o},s.createElement("div",{...M&&{role:w},className:c(_)?_({type:f}):r("Toastify__toast-body",_),style:I},null!=z&&s.createElement("div",{className:r("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},z),s.createElement("div",null,u)),j,s.createElement(b,{...N&&!H?{key:`pb-${N}`}:{},rtl:P,theme:D,delay:d,isRunning:t,isIn:M,closeToast:y,hide:g,type:f,style:L,className:C,controlledProgress:H,progress:k||0})))},M=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},O=p(M("bounce",!0)),B=(p(M("slide",!0)),p(M("zoom")),p(M("flip")),{position:"top-right",transition:O,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function D(e){let t={...B,...e},n=e.stacked,[o,a]=(0,s.useState)(!0),p=(0,s.useRef)(null),{getToastToRender:y,isToastActive:h,count:_}=function(e){let{subscribe:t,getSnapshot:n,setProps:o}=(0,s.useRef)(function(e){let t=e.containerId||1;return{subscribe(n){let o=function(e,t,n){let o=1,a=0,r=[],p=[],m=[],g=t,y=new Map,v=new Set,h=()=>{m=Array.from(y.values()),v.forEach(e=>e())},E=e=>{p=null==e?[]:p.filter(t=>t!==e),h()},T=e=>{let{toastId:t,onOpen:o,updateId:a,children:r}=e.props,i=null==a;e.staleId&&y.delete(e.staleId),y.set(t,e),p=[...p,e.props.toastId].filter(t=>t!==e.staleId),h(),n(f(e,i?"added":"updated")),i&&c(o)&&o((0,s.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(v.add(e),()=>v.delete(e)),toggle:(e,t)=>{y.forEach(n=>{null!=t&&t!==n.props.toastId||c(n.toggle)&&n.toggle(e)})},removeToast:E,toasts:y,clearQueue:()=>{a-=r.length,r=[]},buildToast:(t,p)=>{var m,v;if((t=>{let{containerId:n,toastId:o,updateId:a}=t,s=y.has(o)&&null==a;return(n?n!==e:1!==e)||s})(p))return;let{toastId:_,updateId:b,data:I,staleId:C,delay:L}=p,N=()=>{E(_)},w=null==b;w&&a++;let k={...g,style:g.toastStyle,key:o++,...Object.fromEntries(Object.entries(p).filter(e=>{let[t,n]=e;return null!=n})),toastId:_,updateId:b,data:I,closeToast:N,isIn:!1,className:u(p.className||g.toastClassName),bodyClassName:u(p.bodyClassName||g.bodyClassName),progressClassName:u(p.progressClassName||g.progressClassName),autoClose:!p.isLoading&&(m=p.autoClose,v=g.autoClose,!1===m||i(m)&&m>0?m:v),deleteToast(){let e=y.get(_),{onClose:t,children:o}=e.props;c(t)&&t((0,s.isValidElement)(o)&&o.props),n(f(e,"removed")),y.delete(_),--a<0&&(a=0),r.length>0?T(r.shift()):h()}};k.closeButton=g.closeButton,!1===p.closeButton||d(p.closeButton)?k.closeButton=p.closeButton:!0===p.closeButton&&(k.closeButton=!d(g.closeButton)||g.closeButton);let P=t;(0,s.isValidElement)(t)&&!l(t.type)?P=(0,s.cloneElement)(t,{closeToast:N,toastProps:k,data:I}):c(t)&&(P=t({closeToast:N,toastProps:k,data:I}));let $={content:P,props:k,staleId:C};g.limit&&g.limit>0&&a>g.limit&&w?r.push($):i(L)?setTimeout(()=>{T($)},L):T($)},setProps(e){g=e},setToggle:(e,t)=>{y.get(e).toggle=t},isToastActive:e=>p.some(t=>t===e),getSnapshot:()=>g.newestOnTop?m.reverse():m}}(t,e,v);m.set(t,o);let a=o.observe(n);return g.forEach(e=>T(e.content,e.options)),g=[],()=>{a(),m.delete(t)}},setProps(e){var n;null==(n=m.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=m.get(t))?void 0:e.getSnapshot()}}}(e)).current;o(e);let a=(0,s.useSyncExternalStore)(t,n,n);return{getToastToRender:function(e){if(!a)return[];let t=new Map;return a.forEach(e=>{let{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:E,count:null==a?void 0:a.length}}(t),{className:b,style:I,rtl:C,containerId:L}=t;function N(){n&&(a(!0),k.play())}return P(()=>{if(n){var e;let n=p.current.querySelectorAll('[data-in="true"]'),a=null==(e=t.position)?void 0:e.includes("top"),s=0,r=0;Array.from(n).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed=`${o}`),e.dataset.pos||(e.dataset.pos=a?"top":"bot");let n=s*(o?.2:1)+(o?0:12*t);e.style.setProperty("--y",`${a?n:-1*n}px`),e.style.setProperty("--g","12"),e.style.setProperty("--s",""+(1-(o?r:0))),s+=e.offsetHeight,r+=.025})}},[o,_,n]),s.createElement("div",{ref:p,className:"Toastify",id:L,onMouseEnter:()=>{n&&(a(!1),k.pause())},onMouseLeave:N},y((e,t)=>{let o=t.length?{...I}:{...I,pointerEvents:"none"};return s.createElement("div",{className:function(e){let t=r("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":C});return c(b)?b({position:e,rtl:C,defaultClassName:t}):r(t,u(b))}(e),style:o,key:`container-${e}`},t.map(e=>{let{content:t,props:o}=e;return s.createElement(A,{...o,stacked:n,collapseAll:N,isIn:h(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},t)}))}))}function R(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(a.H,{children:[(0,o.jsx)(t,{...n}),(0,o.jsx)(D,{})]})}},8673:function(e,t,n){"use strict";n.d(t,{H:function(){return r},a:function(){return i}});var o=n(5893),a=n(7294);let s=(0,a.createContext)(null),r=e=>{let{children:t}=e,[n,r]=(0,a.useState)(null),i=async(e,t)=>{r({id:e})};return(0,o.jsx)(s.Provider,{value:{user:n,login:i,logout:()=>{r(null)}},children:t})},i=()=>{let e=(0,a.useContext)(s);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},1691:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);