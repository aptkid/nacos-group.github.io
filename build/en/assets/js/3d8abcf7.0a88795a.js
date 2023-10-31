/*! For license information please see 3d8abcf7.0a88795a.js.LICENSE.txt */
(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3591],{91262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(67294),s=n(72389);function r(e){let{children:t,fallback:n}=e;return(0,s.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},35138:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>m,N$:()=>c,zx:()=>o,$_:()=>E,iR:()=>h});var i=n(67294),s=n(94184),r=n.n(s),a=n(81876);const l={type:"primary",link:"",target:"_self",customStyle:{}},o=function(e){return void 0===e&&(e=l),i.createElement("a",{className:r()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,a.Rg)(e.link,e.language),style:e.customStyle},e.children)},c=e=>i.createElement("div",{className:r()({bone:!0,[`bone-${e.type}`]:!0})}),m=e=>{const{text:t,img:n}=e,s=r()({bar:!0});return i.createElement("div",{className:s},i.createElement("div",{className:"bar-body"},i.createElement("img",{src:n,className:"front-img"}),i.createElement("div",{className:"bar-title"},i.createElement("span",null,t),i.createElement(c,{type:"light"})),i.createElement("img",{src:n,className:"back-img"})))};var d=n(73935);class u extends i.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,a.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=3;const t=this.container?.getBoundingClientRect().width,n=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&n&&(e=Math.floor(t/n)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:n}=this.state,s=i.Children.count(t),r=Math.ceil(s/n);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*r}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=[],r=i.Children.count(e),a=Math.ceil(r/n);for(let i=0;i<a;i++)s.push(Array.from(e).slice(i*n,(i+1)*n));return i.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},s.map(((e,t)=>i.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,s)=>i.createElement("div",{className:"slider-item",key:s},i.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*n+s}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=i.Children.count(e),a=Math.ceil(s/n),l=[];for(let o=0;o<a;o++)l.push(i.createElement("span",{key:o,className:r()({"slider-control-item":!0,"slider-control-item-active":o===t}),onClick:this.changeScreen.bind(this,o)}));return i.createElement("div",{className:"slider-control"},l)};render(){return i.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const h=u;i.Component;var g=n(95999),p=n(52263);const f={vision:{title:(0,g.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,g.I)({id:"homepage.footerVersionContent",message:"Nacos \u901a\u8fc7\u63d0\u4f9b\u7b80\u5355\u6613\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7b49\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5728\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u6216\u8005\u516c\u6709\u4e91\u7b49\u6240\u6709\u4e91\u73af\u5883\u4e2d\uff0c\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u66f4\u5feb\u7684\u590d\u7528\u548c\u7ec4\u5408\u4e1a\u52a1\u670d\u52a1\uff0c\u66f4\u5feb\u7684\u4ea4\u4ed8\u5546\u4e1a\u521b\u65b0\u7684\u4ef7\u503c\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u8d62\u5f97\u5e02\u573a\u3002"})},documentation:{title:(0,g.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,g.I)({id:"homepage.footerDocListText1",message:"\u6982\u89c8"}),link:"/docs/what-is-nacos",target:""},{text:(0,g.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/quick-start",target:""},{text:(0,g.I)({id:"homepage.footerDocListText3",message:"\u5f00\u53d1\u8005\u6307\u5357"}),link:"/docs/contributing",target:""}]},resources:{title:(0,g.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,g.I)({id:"homepage.footerResourcesListText1",message:"\u793e\u533a"}),link:"/community/index",target:""},{text:"\u4e91\u670d\u52a1 MSE",link:"https://cn.aliyun.com/product/aliware/mse?spm=nacos-website.topbar.0.0.0",target:"_blank"},{text:"\u4e91\u670d\u52a1 EDAS",link:"https://www.aliyun.com/product/edas?source_type=nacos_pc_20181219",target:"_blank"},{text:"\u4e91\u670d\u52a1 AHAS",link:"https://www.aliyun.com/product/ahas?source_type=nacos_pc_20190225",target:"_blank"}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Nacos`},E=e=>{const{logo:t}=e,{i18n:n}=(0,p.Z)(),s=n.currentLocale;return i.createElement("footer",{className:"footer-container"},i.createElement("div",{className:"footer-body"},i.createElement("img",{src:e.logo}),i.createElement("div",{className:"cols-container"},i.createElement("div",{className:"col col-12"},i.createElement("h3",null,f.vision.title),i.createElement("p",null,f.vision.content)),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text)))))),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text))))))),i.createElement("div",{className:"copyright"},i.createElement("span",null,f.copyright))))}},97685:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var i=n(67294),s=n(95999),r=n(35138),a=n(91262),l=n(81876);const o={list:[{icon:"img/feature_easy_to_use.png",title:(0,s.I)({id:"homepage.featureListTitle1",message:"\u6613\u4e8e\u4f7f\u7528"}),content:[(0,s.I)({id:"homepage.featureListContent1",message:"\u52a8\u6001\u914d\u7f6e\u7ba1\u7406\u3001\u670d\u52a1\u53d1\u73b0\u548c\u52a8\u6001\u7684\u4e00\u7ad9\u5f0f\u89e3\u51b3\u65b9\u6848;20\u591a\u79cd\u5f00\u7bb1\u5373\u7528\u7684\u4ee5\u670d\u52a1\u4e3a\u4e2d\u5fc3\u7684\u67b6\u6784\u7279\u6027;\u57fa\u672c\u7b26\u5408\u751f\u4ea7\u8981\u6c42\u7684\u8f7b\u91cf\u7ea7\u6613\u7528\u63a7\u5236\u53f0\u3002"})]},{icon:"img/feature_adaptable.png",title:(0,s.I)({id:"homepage.featureListTitle2",message:"\u66f4\u9002\u5e94\u4e91\u67b6\u6784"}),content:[(0,s.I)({id:"homepage.featureListContent2",message:"\u65e0\u7f1d\u652f\u6301Kubernetes\u548cSpring Cloud;\u5728\u4e3b\u6d41\u516c\u5171\u4e91\u4e0a\u66f4\u5bb9\u6613\u90e8\u7f72\u548c\u8fd0\u884c\uff08\u4f8b\u5982\u963f\u91cc\u4e91\u548cAWS\uff09;\u591a\u79df\u6237\u548c\u591a\u73af\u5883\u652f\u6301\u3002"})]},{icon:"img/feature_production_grade.png",title:(0,s.I)({id:"homepage.featureListTitle3",message:"\u751f\u4ea7\u7b49\u7ea7"}),content:(0,s.I)({id:"homepage.featureListContent3",message:"\u8131\u80ce\u4e8e\u5386\u7ecf\u963f\u91cc\u5df4\u5df410\u5e74\u751f\u4ea7\u9a8c\u8bc1\u7684\u5185\u90e8\u4ea7\u54c1;\u652f\u6301\u5177\u6709\u6570\u767e\u4e07\u670d\u52a1\u7684\u5927\u89c4\u6a21\u573a\u666f;\u5177\u5907\u4f01\u4e1a\u7ea7SLA\u7684\u5f00\u6e90\u4ea7\u54c1\u3002"})},{icon:"img/feature_rich.png",title:(0,s.I)({id:"homepage.featureListTitle4",message:"\u4e30\u5bcc\u7684\u5e94\u7528\u573a\u666f"}),content:(0,s.I)({id:"homepage.featureListContent4",message:"\u652f\u6301\u9650\u6d41\u3001\u5927\u4fc3\u9500\u9884\u6848\u548c\u5f02\u5730\u591a\u6d3b;\u76f4\u63a5\u652f\u6301\u6216\u7a0d\u4f5c\u6269\u5c55\u5373\u53ef\u652f\u6301\u5927\u91cf\u6709\u7528\u7684\u4e92\u8054\u7f51\u5e94\u7528\u573a\u666f;\u6d41\u91cf\u8c03\u5ea6\u548c\u670d\u52a1\u6cbb\u7406\u3002"})}],title:(0,s.I)({id:"homepage.featureTitle",message:"\u7279\u8272\u529f\u80fd"})},c=e=>{const{feature:t}=e;return i.createElement(a.Z,null,(()=>i.createElement("li",{className:"feature-list-item"},i.createElement("img",{src:(0,l.Rg)(t.icon)}),i.createElement("div",null,i.createElement("h4",null,t.title),i.createElement("ul",null,t.content)))))},m=()=>i.createElement(a.Z,null,(()=>i.createElement("section",{className:"feature-section"},i.createElement("div",{className:"feature-section-body"},i.createElement("h3",null,o.title),i.createElement(r.N$,{type:"light"}),i.createElement("ul",{className:"feature-list"},o.list.map(((e,t)=>i.createElement(c,{feature:e,key:t}))))))))},81876:(e,t,n)=>{"use strict";n.d(t,{P2:()=>i,Rg:()=>s});const i=(e,t)=>{let n=null;return function(){for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];const a=this;clearTimeout(n),n=setTimeout((()=>{e.apply(a,s)}),t)}},s=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?void 0===t?`${window.rootPath||""}${"default"===t?"/zh-cn":""}${e}`:`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},94184:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&e.push(a)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)i.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}}]);