var Ae=Object.defineProperty;var Le=(L,b,S)=>b in L?Ae(L,b,{enumerable:!0,configurable:!0,writable:!0,value:S}):L[b]=S;var h=(L,b,S)=>(Le(L,typeof b!="symbol"?b+"":b,S),S);import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import{i as Se}from"./index.DImtQWSj.js";import{_ as xe}from"./preload-helper.BiBI96sQ.js";let Te=(async()=>{window.dataLayer=window.dataLayer||[];function L(){dataLayer.push(arguments)}L("js",new Date),L("config","G-0YDFJ7LX7F"),function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?e3a5cec56ef8619cf9d7c2abebd509e3";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(e,t,n,o,r){e[o]=e[o]||[];var c=t.getElementsByTagName(n)[0],d=t.createElement(n);d.async=!0,d.id="beacon-aplus",d.setAttribute("exparams","userid=&aplus&sidx=aplusSidex&ckx=aplusCkx"),d.src="//g.alicdn.com/alilog/mlog/aplus_v2.js",d.crossorigin="anonymous",c.parentNode.insertBefore(d,c)}(window,document,"script","aplus_queue"),function(e){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js",t.onload=function(){window.location.hostname==="nacos.io"&&(window.AES_CONFIG=window.AES_CONFIG||{env:"prod"},window.aes=new AES({pid:"e7WQkK",user_type:6}),window.AESPluginAutologConfig={exposure:"auto"},window.AEMPluginInstances=[aes.use(AESPluginPV,window.AESPluginPVConfig||{enableHistory:!0}),aes.use(AESPluginEvent,window.AESPluginEventConfig||{}),aes.use(AESPluginSurvey,window.AESPluginEventConfig||{}),aes.use(AESPluginAutolog,window.AESPluginAutologConfig||{}),aes.use(AESPluginJSError,window.AESPluginJSError||{}),aes.use(AESPluginResourceError,window.AESPluginResourceError||{})])},setTimeout(function(){e.getElementsByTagName("body")[0].appendChild(t)},800)}(document);class b extends HTMLElement{constructor(){super();h(this,"ifscroll");h(this,"handleScroll",()=>{window.innerWidth<=800||(window.scrollY>=100&&!this.ifscroll&&(this.ifscroll=!0,this.classList.add("bg-gray-14/[0.84]")),window.scrollY<=100&&this.ifscroll&&(this.ifscroll=!1,this.classList.remove("bg-gray-14/[0.84]")))});this.ifscroll=!1,window.addEventListener("scroll",this.handleScroll)}}customElements.define("my-layout",b);function S(){const e=document.createElement("script");e.type="text/javascript",e.src="https://g.alicdn.com/cm-design/copilot-booter/0.0.22/copilot-booter.js",e.addEventListener("load",function(){window.CNPilot&&window.CNPilot.mounted({CNPilot_NODE_ENV:"development",CNPilot_OPEN_SOURCE:["nacos.io"],CNPilot_OPEN_SOURCE_API:"https://ai.nacos.io",showFloatICON:!0,globalStyle:{top:"64px"},entryIconProps:{"position-type":"updown","icon-hover-text":"AI\u4E13\u5BB6"},headerProps:{closeIcon:{show:!0},titleText:"nacos\u6587\u6863\u7B54\u7591\u52A9\u624B"}})}),document.body.append(e)}S(),document.addEventListener("astro:page-load",function(){window.CNPilot&&window.CNPilot.unmounted(),S()});let M=document.createElement("script");M.src="https://g.alicdn.com/cm-design/mw-vendor/1.6.12/web-animations-next.min.js?spm=defwork.home.0.0.413a5c4bEOqptl&file=web-animations-next.min.js",M.onload=function(){document.getAnimations||(document.getAnimations=window.Element.prototype.getAnimations)},document.head.appendChild(M);const Q="astro:before-preparation",z="astro:after-preparation",Z="astro:before-swap",ee="astro:after-swap",te=e=>document.dispatchEvent(new Event(e));class R extends Event{constructor(n,o,r,c,d,u,f,g,m,s){super(n,o);h(this,"from");h(this,"to");h(this,"direction");h(this,"navigationType");h(this,"sourceElement");h(this,"info");h(this,"newDocument");h(this,"signal");this.from=r,this.to=c,this.direction=d,this.navigationType=u,this.sourceElement=f,this.info=g,this.newDocument=m,this.signal=s,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class ne extends R{constructor(n,o,r,c,d,u,f,g,m,s){super(Q,{cancelable:!0},n,o,r,c,d,u,f,g);h(this,"formData");h(this,"loader");this.formData=m,this.loader=s.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class oe extends R{constructor(n,o,r){super(Z,void 0,n.from,n.to,n.direction,n.navigationType,n.sourceElement,n.info,n.newDocument,n.signal);h(this,"direction");h(this,"viewTransition");h(this,"swap");this.direction=n.direction,this.viewTransition=o,this.swap=r.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function re(e,t,n,o,r,c,d,u,f){const g=new ne(e,t,n,o,r,c,window.document,d,u,f);return document.dispatchEvent(g)&&(await g.loader(),g.defaultPrevented||(te(z),g.navigationType!=="traverse"&&q({scrollX,scrollY}))),g}function ie(e,t,n){const o=new oe(e,t,n);return document.dispatchEvent(o),o.swap(),o}const se=history.pushState.bind(history),D=history.replaceState.bind(history),q=e=>{history.state&&(history.scrollRestoration="manual",D({...history.state,...e},""))},j=!!document.startViewTransition,H=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),I=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let w,T,k;const Y=e=>document.dispatchEvent(new Event(e)),X=()=>Y("astro:page-load"),ae=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{var n;let t=document.title||((n=document.querySelector("h1"))==null?void 0:n.textContent)||location.pathname;e.textContent=t},60)},x="data-astro-transition-persist",U="data-astro-transition",_="data-astro-transition-fallback";let C,P=0;history.state?(P=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):H()&&(D({index:P,scrollX,scrollY},""),history.scrollRestoration="manual");async function ce(e,t){var n;try{const o=await fetch(e,t),r=((n=o.headers.get("content-type"))!=null?n:"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:r}}catch{return null}}function F(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function le(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const c=new Promise(d=>{o.onload=o.onerror=d});e=e.then(()=>c)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const V=(e,t,n,o,r)=>{const c=I(t,e),d=document.title;document.title=o;let u=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const f=history.state;D({...n.state,index:f.index,scrollX:f.scrollX,scrollY:f.scrollY},"",e.href)}else se({...n.state,index:++P,scrollX:0,scrollY:0},"",e.href);if(document.title=d,k=e,c||(scrollTo({left:0,top:0,behavior:"instant"}),u=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const f=history.state;location.href=e.href,history.state||(D(f,""),c&&window.dispatchEvent(new PopStateEvent("popstate")))}else u||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function de(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${x}="${n.getAttribute(x)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(c=>o.addEventListener(c,r)),document.head.append(o)}))}return t}async function $(e,t,n,o,r){const c=(i,l)=>{const p=i.getAttribute(x),A=p&&l.head.querySelector(`[${x}="${p}"]`);if(A)return A;if(i.matches("link[rel=stylesheet]")){const y=i.getAttribute("href");return l.head.querySelector(`link[rel=stylesheet][href="${y}"]`)}return null},d=()=>{const i=document.activeElement;if(i!=null&&i.closest(`[${x}]`)){if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){const l=i.selectionStart,p=i.selectionEnd;return{activeElement:i,start:l,end:p}}return{activeElement:i}}else return{activeElement:null}},u=({activeElement:i,start:l,end:p})=>{i&&(i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(typeof l=="number"&&(i.selectionStart=l),typeof p=="number"&&(i.selectionEnd=p)))},f=i=>{const l=i.dataset.astroTransitionPersistProps;return l==null||l==="false"},g=i=>{const l=document.documentElement,p=[...l.attributes].filter(({name:a})=>(l.removeAttribute(a),a.startsWith("data-astro-")));[...i.newDocument.documentElement.attributes,...p].forEach(({name:a,value:v})=>l.setAttribute(a,v));for(const a of document.scripts)for(const v of i.newDocument.scripts)if(!v.hasAttribute("data-astro-rerun")&&(!a.src&&a.textContent===v.textContent||a.src&&a.type===v.type&&a.src===v.src)){v.dataset.astroExec="";break}for(const a of Array.from(document.head.children)){const v=c(a,i.newDocument);v?v.remove():a.remove()}document.head.append(...i.newDocument.head.children);const A=document.body,y=d();document.body.replaceWith(i.newDocument.body);for(const a of A.querySelectorAll(`[${x}]`)){const v=a.getAttribute(x),N=document.querySelector(`[${x}="${v}"]`);N&&(N.replaceWith(a),N.localName==="astro-island"&&f(a)&&(a.setAttribute("ssr",""),a.setAttribute("props",N.getAttribute("props"))))}u(y)};async function m(i){function l(y){const a=y.effect;return!a||!(a instanceof KeyframeEffect)||!a.target?!1:window.getComputedStyle(a.target,a.pseudoElement).animationIterationCount==="infinite"}const p=document.getAnimations();document.documentElement.setAttribute(_,i);const A=document.getAnimations().filter(y=>!p.includes(y)&&!l(y));return Promise.allSettled(A.map(y=>y.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await m("old")}catch{}const s=document.title,E=ie(e,n.viewTransition,g);V(E.to,E.from,t,s,o),Y(ee),r==="animate"&&(!n.transitionSkipped&&!E.signal.aborted?m("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function ue(){return w==null||w.controller.abort(),w={controller:new AbortController}}async function B(e,t,n,o,r){const c=ue();if(!H()||location.origin!==n.origin){c===w&&(w=void 0),location.href=n.href;return}const d=r?"traverse":o.history==="replace"?"replace":"push";if(d!=="traverse"&&q({scrollX,scrollY}),I(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){V(n,t,o,document.title,r),c===w&&(w=void 0);return}const u=await re(t,n,e,d,o.sourceElement,o.info,c.controller.signal,o.formData,f);if(u.defaultPrevented||u.signal.aborted){c===w&&(w=void 0),u.signal.aborted||(location.href=n.href);return}async function f(s){var A,y;const E=s.to.href,i={signal:s.signal};if(s.formData){i.method="POST";const a=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:(A=s.sourceElement)==null?void 0:A.closest("form");i.body=((y=a==null?void 0:a.attributes.getNamedItem("enctype"))==null?void 0:y.value)==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const l=await ce(E,i);if(l===null){s.preventDefault();return}if(l.redirected&&(s.to=new URL(l.redirected)),C!=null||(C=new DOMParser),s.newDocument=C.parseFromString(l.html,l.mediaType),s.newDocument.querySelectorAll("noscript").forEach(a=>a.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const p=de(s.newDocument);p.length&&!s.signal.aborted&&await Promise.all(p)}async function g(){if(T&&T.viewTransition){try{T.viewTransition.skipTransition()}catch{}try{await T.viewTransition.updateCallbackDone}catch{}}return T={transitionSkipped:!1}}const m=await g();if(u.signal.aborted){c===w&&(w=void 0);return}if(document.documentElement.setAttribute(U,u.direction),j)m.viewTransition=document.startViewTransition(async()=>await $(u,o,m,r));else{const s=(async()=>{await Promise.resolve(),await $(u,o,m,r,F())})();m.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(E=>m.viewTransitionFinished=E),skipTransition:()=>{m.transitionSkipped=!0,document.documentElement.removeAttribute(_)}}}m.viewTransition.updateCallbackDone.finally(async()=>{await le(),X(),ae()}),m.viewTransition.finished.finally(()=>{m.viewTransition=void 0,m===T&&(T=void 0),c===w&&(w=void 0),document.documentElement.removeAttribute(U),document.documentElement.removeAttribute(_)});try{await m.viewTransition.updateCallbackDone}catch(s){const E=s;console.log("[astro]",E.name,E.message,E.stack)}}async function K(e,t){await B("forward",k,new URL(e,location.href),t!=null?t:{})}function me(e){if(!H()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>P?"forward":"back";P=n,B(o,k,new URL(location.href),{},t)}const W=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&q({scrollX,scrollY})};{if(j||F()!=="none")if(k=new URL(location.href),addEventListener("popstate",me),addEventListener("load",X),"onscrollend"in window)addEventListener("scrollend",W);else{let e,t,n,o;const r=()=>{var c;if(o!==((c=history.state)==null?void 0:c.index)){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,W();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}function fe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function G(e){return e.dataset.astroReload!==void 0}(j||fe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;G(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),K(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{var m,s,E,i;let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||G(t))return;const n=t,o=e.submitter,r=new FormData(n,o),c=typeof n.action=="string"?n.action:n.getAttribute("action"),d=typeof n.method=="string"?n.method:n.getAttribute("method");let u=(s=(m=o==null?void 0:o.getAttribute("formaction"))!=null?m:c)!=null?s:location.pathname;const f=(i=(E=o==null?void 0:o.getAttribute("formmethod"))!=null?E:d)!=null?i:"get";if(f==="dialog"||location.origin!==new URL(u,location.href).origin)return;const g={sourceElement:o!=null?o:n};if(f==="get"){const l=new URLSearchParams(r),p=new URL(u);p.search=l.toString(),u=p.toString()}else g.formData=r;e.preventDefault(),K(u,g)}),Se({prefetchAll:!0}));const pe={appId:"1QV814950M",apiKey:"7445da3dec050d45d29f3fe93ed45af3",indexName:"nacos"};let O="";class he extends HTMLElement{constructor(){super(),setTimeout(()=>{O&&O!==window.location.href&&this.initDocSearch(),O=window.location.href},0),window.addEventListener("DOMContentLoaded",this.initDocSearch)}async initDocSearch(){const{default:t}=await xe(()=>import("./index.qv16JarW.js"),[]),n={...pe,container:"sl-doc-search"};try{const o=JSON.parse(this.dataset.translations||"{}");Object.assign(n,o)}catch{}t(n)}}customElements.define("sl-doc-search",he);function ge(e){e.parentNode.style.display="none",window.alertBarClosed=!0}function J(){try{const e=document.querySelector(".alert-bar"),t=document.querySelector(".close-button");(window.alertBarClosed||!1)===!0?e.style.display="none":t.addEventListener("click",function(){ge(t)})}catch(e){console.log(e)}}window.addEventListener("DOMContentLoaded",J),document.addEventListener("astro:after-swap",J);let we=class extends HTMLElement{constructor(){super();h(this,"toggleLanguage",()=>{var t;/^(\/en).+/.test((t=window==null?void 0:window.location)==null?void 0:t.pathname)?window.location.pathname=window.location.pathname.replace("/en/","/"):window.location.pathname=window.location.pathname.replace("/","/en/")});const t=document.querySelectorAll("input[data-switch]")[0],n=document.querySelectorAll("div[data-switch]")[0];t.addEventListener("click",()=>{this.toggleLanguage()}),n.addEventListener("click",()=>{this.toggleLanguage()})}};customElements.define("toggle-content",we);class Ee extends HTMLElement{constructor(){super();const t=this.querySelector("button");t.addEventListener("click",()=>this.toggleExpanded());const n=this.closest("nav");n&&n.addEventListener("keyup",o=>this.closeOnEscape(o,t))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t,n){t.code==="Escape"&&(this.setExpanded(!1),n.focus())}}customElements.define("mobile-menu-button",Ee);class ye extends HTMLElement{constructor(){super();const t=this.getAttribute("data-trigger"),n=this.querySelector(".toggle-dropdown"),o=this.querySelector("svg[data-updown]");o&&(t==="click"?this.addEventListener("click",()=>{n&&n.classList.toggle("toggle-dropdown-active"),document.body.classList.toggle("overflow-hidden"),Array.from(o.classList).includes("toggle-trigger-up")?this.toggleDown(o):this.toggleUp(o)}):t==="hover"&&(this.addEventListener("mouseenter",()=>{n&&n.classList.add("toggle-dropdown-active"),this.toggleUp(o)}),this.addEventListener("mouseleave",()=>{n&&n.classList.remove("toggle-dropdown-active"),this.toggleDown(o)})))}toggleUp(t){t.classList.remove("toggle-trigger-down"),t.classList.add("toggle-trigger-up")}toggleDown(t){t.classList.remove("toggle-trigger-up"),t.classList.add("toggle-trigger-down")}}customElements.define("toggle-component",ye);class ve extends HTMLElement{constructor(){super()}}customElements.define("docs-menu",ve);class be extends HTMLElement{constructor(){super();const t=this.parentElement;this.querySelector(".dropdown-overlay").addEventListener("mouseenter",()=>{t.classList.remove("toggle-dropdown-active"),t.classList.add("toggle-dropdown-notactive")})}}customElements.define("community-menu",be)})();export{Te as __tla};
