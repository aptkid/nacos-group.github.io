/*! For license information please see c8858931.95541d81.js.LICENSE.txt */
(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5707],{91262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(72389);function s(e){let{children:t,fallback:n}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},35138:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>m,N$:()=>c,zx:()=>o,$_:()=>b,iR:()=>h});var a=n(67294),r=n(94184),s=n.n(r),i=n(81876);const l={type:"primary",link:"",target:"_self",customStyle:{}},o=function(e){return void 0===e&&(e=l),a.createElement("a",{className:s()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,i.Rg)(e.link,e.language),style:e.customStyle},e.children)},c=e=>a.createElement("div",{className:s()({bone:!0,[`bone-${e.type}`]:!0})}),m=e=>{const{text:t,img:n}=e,r=s()({bar:!0});return a.createElement("div",{className:r},a.createElement("div",{className:"bar-body"},a.createElement("img",{src:n,className:"front-img"}),a.createElement("div",{className:"bar-title"},a.createElement("span",null,t),a.createElement(c,{type:"light"})),a.createElement("img",{src:n,className:"back-img"})))};var d=n(73935);class u extends a.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,i.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=3;const t=this.container?.getBoundingClientRect().width,n=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&n&&(e=Math.floor(t/n)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:n}=this.state,r=a.Children.count(t),s=Math.ceil(r/n);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*s}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,r=[],s=a.Children.count(e),i=Math.ceil(s/n);for(let a=0;a<i;a++)r.push(Array.from(e).slice(a*n,(a+1)*n));return a.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},r.map(((e,t)=>a.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,r)=>a.createElement("div",{className:"slider-item",key:r},a.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*n+r}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,r=a.Children.count(e),i=Math.ceil(r/n),l=[];for(let o=0;o<i;o++)l.push(a.createElement("span",{key:o,className:s()({"slider-control-item":!0,"slider-control-item-active":o===t}),onClick:this.changeScreen.bind(this,o)}));return a.createElement("div",{className:"slider-control"},l)};render(){return a.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const h=u;a.Component;var g=n(95999),p=n(52263);const f={vision:{title:(0,g.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,g.I)({id:"homepage.footerVersionContent",message:"Nacos \u901a\u8fc7\u63d0\u4f9b\u7b80\u5355\u6613\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7b49\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5728\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u6216\u8005\u516c\u6709\u4e91\u7b49\u6240\u6709\u4e91\u73af\u5883\u4e2d\uff0c\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u66f4\u5feb\u7684\u590d\u7528\u548c\u7ec4\u5408\u4e1a\u52a1\u670d\u52a1\uff0c\u66f4\u5feb\u7684\u4ea4\u4ed8\u5546\u4e1a\u521b\u65b0\u7684\u4ef7\u503c\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u8d62\u5f97\u5e02\u573a\u3002"})},documentation:{title:(0,g.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,g.I)({id:"homepage.footerDocListText1",message:"\u6982\u89c8"}),link:"/docs/what-is-nacos",target:""},{text:(0,g.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/quick-start",target:""},{text:(0,g.I)({id:"homepage.footerDocListText3",message:"\u5f00\u53d1\u8005\u6307\u5357"}),link:"/docs/contributing",target:""}]},resources:{title:(0,g.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,g.I)({id:"homepage.footerResourcesListText1",message:"\u793e\u533a"}),link:"/community/index",target:""},{text:"\u4e91\u670d\u52a1 MSE",link:"https://cn.aliyun.com/product/aliware/mse?spm=nacos-website.topbar.0.0.0",target:"_blank"},{text:"\u4e91\u670d\u52a1 EDAS",link:"https://www.aliyun.com/product/edas?source_type=nacos_pc_20181219",target:"_blank"},{text:"\u4e91\u670d\u52a1 AHAS",link:"https://www.aliyun.com/product/ahas?source_type=nacos_pc_20190225",target:"_blank"}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Nacos`},b=e=>{const{logo:t}=e,{i18n:n}=(0,p.Z)(),r=n.currentLocale;return a.createElement("footer",{className:"footer-container"},a.createElement("div",{className:"footer-body"},a.createElement("img",{src:e.logo}),a.createElement("div",{className:"cols-container"},a.createElement("div",{className:"col col-12"},a.createElement("h3",null,f.vision.title),a.createElement("p",null,f.vision.content)),a.createElement("div",{className:"col col-6"},a.createElement("dl",null,a.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>a.createElement("dd",{key:t},a.createElement("a",{href:`/${r}${e.link}`,target:e.target||"_self"},e.text)))))),a.createElement("div",{className:"col col-6"},a.createElement("dl",null,a.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>a.createElement("dd",{key:t},a.createElement("a",{href:`/${r}${e.link}`,target:e.target||"_self"},e.text))))))),a.createElement("div",{className:"copyright"},a.createElement("span",null,f.copyright))))}},68726:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(95999),s=n(35138),i=n(81876),l=n(91262);const o={brandName:"Nacos",briefIntroduction:(0,r.I)({id:"homepage.briefIntroduction",message:"\u4e00\u4e2a\u66f4\u6613\u4e8e\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\u3002"}),buttons:[{text:"\u524d\u5f80 Github",link:"https://github.com/alibaba/nacos",type:"primary",target:"_blank"},{text:"\u624b\u518c",link:"/docs/v2/what-is-nacos.html",type:"normal"}],versionNote:{text:"V2.2.3 \u7248\u672c\u8bf4\u660e",link:"https://github.com/alibaba/nacos/releases/tag/2.2.3"},versionNote2:{text:"V1.4.6",link:"https://github.com/alibaba/nacos/releases/tag/1.4.6"},releaseDate:{text:"2023\u5e745\u670825\u65e5\u53d1\u5e03"}},c=e=>{let{language:t}=e;const[n,r]=a.useState({starCount:"",forkCount:""}),{starCount:c,forkCount:m}=n;return a.useEffect((()=>{fetch("https://api.github.com/repos/alibaba/nacos").then((e=>e.json())).then((e=>{r({starCount:`${e.stargazers_count}`,forkCount:`${e.forks_count}`})}))}),[]),a.createElement(l.Z,null,(()=>a.createElement("section",{className:"top-section",style:{background:`url(${(0,i.Rg)("img/black_dot.png")}) repeat`,backgroundSize:"14px 14px"}},a.createElement("div",{className:"vertical-middle"},a.createElement("img",{className:"product-logo",src:(0,i.Rg)("img/nacos.png")}),a.createElement("p",{className:"product-desc"},o.briefIntroduction),a.createElement("div",{className:"button-area"},o.buttons.map((e=>a.createElement(s.zx,{type:e.type,key:e.type,link:e.link,target:e.target,language:t},e.text)))),a.createElement("div",{className:"github-buttons"},a.createElement("a",{href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"},a.createElement("div",{className:"star"},a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"}),a.createElement("span",{className:"count"},c))),a.createElement("a",{href:"https://github.com/alibaba/nacos/fork",target:"_blank",rel:"noopener noreferrer"},a.createElement("div",{className:"fork"},a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"}),a.createElement("span",{className:"count"},m)))),a.createElement("div",{className:"version-note"},a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:(0,i.Rg)(o.versionNote.link)},o.versionNote.text),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:(0,i.Rg)(o.versionNote2.link)},o.versionNote2.text)),a.createElement("div",{className:"release-date"},o.releaseDate.text)),a.createElement("div",{className:"animation animation1"}),a.createElement("div",{className:"animation animation2"}),a.createElement("div",{className:"animation animation3"}),a.createElement("div",{className:"animation animation4"}),a.createElement("div",{className:"animation animation5"}))))}},81876:(e,t,n)=>{"use strict";n.d(t,{P2:()=>a,Rg:()=>r});const a=(e,t)=>{let n=null;return function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];const i=this;clearTimeout(n),n=setTimeout((()=>{e.apply(i,r)}),t)}},r=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?void 0===t?`${window.rootPath||""}${"default"===t?"/zh-cn":""}${e}`:`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);