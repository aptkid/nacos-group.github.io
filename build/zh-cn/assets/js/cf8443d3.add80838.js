"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,b=d["".concat(o,".").concat(u)]||d[u]||g[u]||s;return a?n.createElement(b,c(c({ref:t},p),{},{components:a})):n.createElement(b,c({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<s;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const s={title:"Nacos 2.0 \u5347\u7ea7\u524d\u540e\u6027\u80fd\u5bf9\u6bd4\u538b\u6d4b",keywords:[2,"\u6027\u80fd\u6d4b\u8bd5","\u6027\u80fd\u5bf9\u6bd4"],description:"Nacos2.0\u901a\u8fc7\u5347\u7ea7\u901a\u4fe1\u534f\u8bae\u548c\u6846\u67b6\u3001\u6570\u636e\u6a21\u578b\u7684\u65b9\u5f0f\u5c06\u6027\u80fd\u63d0\u5347\u4e86\u7ea610\u500d\uff0c\u89e3\u51b3\u7ee7 Nacos 1.0 \u53d1\u5e03\u9010\u6b65\u66b4\u9732\u7684\u6027\u80fd\u95ee\u9898\u3002\u672c\u6587\u901a\u8fc7\u538b\u6d4b Nacos1.0\uff0cNacos1.0\u5347\u7ea7Nacos2.0\u8fc7\u7a0b\u4e2d\uff0cNacos2.0 \u8fdb\u884c\u5168\u9762\u6027\u80fd\u5bf9\u6bd4\uff0c\u76f4\u89c2\u7684\u5c55\u793aNacos2.0\u6240\u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\u3002",date:new Date("2021-07-29T00:00:00.000Z")},c="Nacos 2.0 \u5347\u7ea7\u524d\u540e\u6027\u80fd\u5bf9\u6bd4\u538b\u6d4b",l={permalink:"/zh-cn/blog/performance-compare",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/performance-compare.md",title:"Nacos 2.0 \u5347\u7ea7\u524d\u540e\u6027\u80fd\u5bf9\u6bd4\u538b\u6d4b",description:"Nacos2.0\u901a\u8fc7\u5347\u7ea7\u901a\u4fe1\u534f\u8bae\u548c\u6846\u67b6\u3001\u6570\u636e\u6a21\u578b\u7684\u65b9\u5f0f\u5c06\u6027\u80fd\u63d0\u5347\u4e86\u7ea610\u500d\uff0c\u89e3\u51b3\u7ee7 Nacos 1.0 \u53d1\u5e03\u9010\u6b65\u66b4\u9732\u7684\u6027\u80fd\u95ee\u9898\u3002\u672c\u6587\u901a\u8fc7\u538b\u6d4b Nacos1.0\uff0cNacos1.0\u5347\u7ea7Nacos2.0\u8fc7\u7a0b\u4e2d\uff0cNacos2.0 \u8fdb\u884c\u5168\u9762\u6027\u80fd\u5bf9\u6bd4\uff0c\u76f4\u89c2\u7684\u5c55\u793aNacos2.0\u6240\u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\u3002",date:"2021-07-29T00:00:00.000Z",formattedDate:"2021\u5e747\u670829\u65e5",tags:[],readingTime:7.765,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 2.0 \u5347\u7ea7\u524d\u540e\u6027\u80fd\u5bf9\u6bd4\u538b\u6d4b",keywords:["2","\u6027\u80fd\u6d4b\u8bd5","\u6027\u80fd\u5bf9\u6bd4"],description:"Nacos2.0\u901a\u8fc7\u5347\u7ea7\u901a\u4fe1\u534f\u8bae\u548c\u6846\u67b6\u3001\u6570\u636e\u6a21\u578b\u7684\u65b9\u5f0f\u5c06\u6027\u80fd\u63d0\u5347\u4e86\u7ea610\u500d\uff0c\u89e3\u51b3\u7ee7 Nacos 1.0 \u53d1\u5e03\u9010\u6b65\u66b4\u9732\u7684\u6027\u80fd\u95ee\u9898\u3002\u672c\u6587\u901a\u8fc7\u538b\u6d4b Nacos1.0\uff0cNacos1.0\u5347\u7ea7Nacos2.0\u8fc7\u7a0b\u4e2d\uff0cNacos2.0 \u8fdb\u884c\u5168\u9762\u6027\u80fd\u5bf9\u6bd4\uff0c\u76f4\u89c2\u7684\u5c55\u793aNacos2.0\u6240\u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\u3002",date:"2021-07-29T00:00:00.000Z"},prevItem:{title:"Nacos 2.0.3\u7248\u672c\u53d1\u5e03\uff0c\u7ee7\u7eed\u63d0\u5347\u96c6\u7fa4\u7a33\u5b9a\u6027\u53ca\u5347\u7ea7\u7a33\u5b9a\u6027",permalink:"/zh-cn/blog/2.0.3-release"},nextItem:{title:"Nacos-spring-boot0.2.10\u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301Nacos2.0",permalink:"/zh-cn/blog/springboot-0.2.10"}},o={authorsImageUrls:[]},i=[{value:"\u538b\u6d4b\u51c6\u5907",id:"\u538b\u6d4b\u51c6\u5907",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u538b\u6d4b\u6a21\u578b",id:"\u538b\u6d4b\u6a21\u578b",level:3},{value:"\u538b\u6d4b\u8fc7\u7a0b",id:"\u538b\u6d4b\u8fc7\u7a0b",level:2},{value:"Nacos1.X Server + Nacos1.X Client",id:"nacos1x-server--nacos1x-client",level:3},{value:"Nacos2.X Server + Nacos1.X Client",id:"nacos2x-server--nacos1x-client",level:3},{value:"Nacos2.X Server + Nacos2.X Client",id:"nacos2x-server--nacos2x-client",level:3},{value:"\u538b\u6d4b\u7ed3\u679c",id:"\u538b\u6d4b\u7ed3\u679c",level:2}],p={toc:i},d="wrapper";function g(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nacos2.0\u901a\u8fc7\u5347\u7ea7\u901a\u4fe1\u534f\u8bae\u548c\u6846\u67b6\u3001\u6570\u636e\u6a21\u578b\u7684\u65b9\u5f0f\u5c06\u6027\u80fd\u63d0\u5347\u4e86\u7ea610\u500d\uff0c\u89e3\u51b3\u7ee7 Nacos 1.0 \u53d1\u5e03\u9010\u6b65\u66b4\u9732\u7684\u6027\u80fd\u95ee\u9898\u3002\u672c\u6587\u901a\u8fc7\u538b\u6d4b Nacos1.0\uff0cNacos1.0\u5347\u7ea7Nacos2.0\u8fc7\u7a0b\u4e2d\uff0cNacos2.0 \u8fdb\u884c\u5168\u9762\u6027\u80fd\u5bf9\u6bd4\uff0c\u76f4\u89c2\u7684\u5c55\u793aNacos2.0\u6240\u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\u3002"),(0,r.kt)("h2",{id:"\u538b\u6d4b\u51c6\u5907"},"\u538b\u6d4b\u51c6\u5907"),(0,r.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbfNacos\u90e8\u7f72\u5347\u7ea7\u548c\u5c55\u793a\u6838\u5fc3\u6027\u80fd\u6307\u6807\uff0c\u6211\u4eec\u662f\u4ece",(0,r.kt)("a",{parentName:"p",href:"https://cn.aliyun.com/product/aliware/mse"},"\u963f\u91cc\u4e91\u5fae\u670d\u52a1\u5f15\u64ceMSE"),"\u4e2d\u8d2d\u4e70\u7684\u4e00\u4e2a2\u6838CPU+4G\u5185\u5b58\u7684\u4e09\u8282\u70b9Nacos\u96c6\u7fa4\u3002"),(0,r.kt)("h3",{id:"\u538b\u6d4b\u6a21\u578b"},"\u538b\u6d4b\u6a21\u578b"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5c55\u793a\u4e0d\u540c\u89c4\u6a21\u4e0b\u7684\u7cfb\u7edf\u8868\u73b0\uff0c\u6211\u4eec\u91c7\u7528\u9010\u6b65\u589e\u538b\u7684\u65b9\u5f0f\u8fdb\u884c\u538b\u6d4b\uff0c\u5c06\u538b\u529b\u5206\u4e3a3\u4e2a\u6279\u6b21\u8fdb\u884c\u9010\u6b65\u542f\u52a8\uff0c\u5e76\u89c2\u5bdf\u6bcf\u4e2a\u6279\u6b21\u4e0b\u96c6\u7fa4\u7684\u8fd0\u884c\u8868\u73b0\u3002\u540c\u65f6\u4f1a\u5728\u538b\u529b\u96c6\u7fa4\u4e4b\u5916\uff0c\u518d\u589e\u52a0\u4e00\u4e2aDubbo\u670d\u52a1\u7684Demo\uff0c\u5e76\u4f7f\u7528Jmeter\u4ee5100TPS\u7684\u538b\u529b\u4e0d\u505c\u7684\u8c03\u7528\uff0c\u4ee5\u6a21\u62df\u4e0d\u540c\u538b\u529b\u4e0b\uff0c\u5bf9\u5b9e\u9645\u4e1a\u52a1\u8c03\u7528\u5b58\u5728\u7684\u53ef\u80fd\u5f71\u54cd\u3002"),(0,r.kt)("p",null,"\u538b\u6d4b\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5728\u9002\u5f53\u7684\u65f6\u5019\u5bf9\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u8fdb\u884c\u5347\u7ea7\uff1b\u670d\u52a1\u7aef\u7684\u5347\u7ea7\u5c06\u76f4\u63a5\u4f7f\u7528MSE\u63d0\u4f9b\u7684\u4e00\u952e\u5347\u7ea7\u529f\u80fd\uff0c\u5ba2\u6237\u7aef\u7684\u5347\u7ea7\u4f1a\u4f7f\u7528\u5206\u6279\u6b21\u8f6e\u6d41\u91cd\u542f\u7684\u65b9\u5f0f\u8fdb\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u538b\u6d4b\u6a21\u578b",src:a(88255).Z,width:"1550",height:"732"})),(0,r.kt)("h2",{id:"\u538b\u6d4b\u8fc7\u7a0b"},"\u538b\u6d4b\u8fc7\u7a0b"),(0,r.kt)("h3",{id:"nacos1x-server--nacos1x-client"},"Nacos1.X Server + Nacos1.X Client"),(0,r.kt)("p",null,"\u9996\u5148\u542f\u52a8\u7b2c\u4e00\u6279\u65bd\u538b\u96c6\u7fa4\uff0c\u5bf9MSE Nacos1.2.1\u8fdb\u884c\u65bd\u538b\uff0c\u57286000\u4e2aProviders\u7684\u538b\u529b\u4e0b\uff0c\u96c6\u7fa4\u7a33\u5b9a\u65f6CPU\u5927\u7ea625%\uff0c\u80fd\u591f\u7a33\u5b9a\u4fdd\u63016000\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.X6000\u5b9e\u4f8bCPU",src:a(1014).Z,width:"3098",height:"508"}),"\n",(0,r.kt)("img",{alt:"1.X6000\u5b9e\u4f8b",src:a(84791).Z,width:"3096",height:"504"})),(0,r.kt)("p",null,"\u968f\u540e\u542f\u52a8\u7b2c\u4e8c\u6279\u65bd\u538b\u96c6\u7fa4\uff0c\u589e\u52a04000\u4e2aProvider\uff0c\u5408\u96c610000\u4e2aProvider\u3002\u6b64\u65f6\u96c6\u7fa4\u5cf0\u503cCPU\u5df2\u7ecf\u8fbe\u523060%\uff0c\u7a33\u5b9a\u8fd0\u884c\u65f6\u5927\u7ea6\u572845%\u5de6\u53f3\uff0c\u96c6\u7fa4\u80fd\u591f\u7a33\u5b9a\u8fd0\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.X10000\u5b9e\u4f8bCPU",src:a(69754).Z,width:"3060",height:"490"}),"\n",(0,r.kt)("img",{alt:"1.X10000\u5b9e\u4f8b",src:a(3934).Z,width:"3024",height:"502"})),(0,r.kt)("p",null,"\u5728\u524d\u4e24\u6279\u7684\u538b\u529b\u4e0b\uff0c\u96c6\u7fa4\u6ca1\u6709\u51fa\u73b0\u7a33\u5b9a\u6027\u95ee\u9898\uff0c\u6240\u4ee5Dubbo\u7684\u8c03\u7528\u4fdd\u6301\u6b63\u5e38\uff0c\u6ca1\u6709\u9519\u8bef\u53d1\u751f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.X10000\u5b9e\u4f8bDubbo",src:a(48763).Z,width:"1064",height:"481"})),(0,r.kt)("p",null,"\u5f53\u7b2c\u4e09\u6279\u65bd\u538b\u96c6\u7fa4\u542f\u52a8\u4e4b\u540e\uff0c\u538b\u529b\u603b\u8ba114000\u4e2aProvider\u3002\u6b64\u65f6\u96c6\u7fa4\u5148\u662f\u77ed\u6682\u7684\u6ce8\u518c\u523013000\u4e2a\u5b9e\u4f8b\uff0c\u4e4b\u540e\u5f88\u5feb\u51fa\u73b0\u5b9e\u4f8b\u6570\u4e0b\u8dcc\uff0cCPU\u8dd1\u6ee1\u7684\u95ee\u9898\u3002\u5e76\u4e14\u7f29\u5c0f\u65f6\u95f4\u8303\u56f4\u53ef\u4ee5\u770b\u5230\uff0c\u4e0b\u8dcc\u540e\u7684\u5b9e\u4f8b\u4ecd\u7136\u5728\u5c0f\u8303\u56f4\u6296\u52a8\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.X14000\u5b9e\u4f8bCPU",src:a(79404).Z,width:"3030",height:"496"}),"\n",(0,r.kt)("img",{alt:"1.X14000\u5b9e\u4f8b",src:a(20531).Z,width:"3018",height:"480"}),"\n",(0,r.kt)("img",{alt:"1.X14000\u5b9e\u4f8b\u6296\u52a8",src:a(96904).Z,width:"3026",height:"512"})),(0,r.kt)("p",null,"\u540c\u65f6Dubbo\u7684\u8c03\u7528\u51fa\u73b0\u9519\u8bef\uff0c\u4eceConsumer\u7684\u65e5\u5fd7\u53ef\u4ee5\u770b\u51fa\uff0c\u662f\u7531\u4e8e\u670d\u52a1\u7aef\u65e0\u6cd5\u652f\u6491\u8fd9\u4e2a\u7ea7\u522b\u7684\u538b\u529b\uff0c\u5bfc\u81f4Dubbo Provider\u88ab\u6458\u9664\uff0c\u6240\u4ee5\u8c03\u7528\u7684\u65f6\u5019\u51fa\u73b0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"No provider"),"\u7684\u9519\u8bef\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.X14000\u5b9e\u4f8bDubbo",src:a(67663).Z,width:"1064",height:"481"}),"\n",(0,r.kt)("img",{alt:"1.X14000\u5b9e\u4f8bDubbo\u9519\u8bef",src:a(62229).Z,width:"3566",height:"312"})),(0,r.kt)("h3",{id:"nacos2x-server--nacos1x-client"},"Nacos2.X Server + Nacos1.X Client"),(0,r.kt)("p",null,"\u7531\u4e8e\u670d\u52a1\u7aef\u5347\u7ea7\u671f\u95f4\uff0c\u4f1a\u8fdb\u884c\u5b9e\u4f8b\u7684\u53cc\u5199\u64cd\u4f5c\uff0c\u56e0\u6b64\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u670d\u52a1\u7aef\u5b58\u50a8\u7684\u5b9e\u4f8b\u6570\u4f1a\u662f\u5b9e\u9645\u5b9e\u4f8b\u503c\u7684\u4e24\u500d\u3002\u6839\u636e\u4e0a\u8ff0\u6d4b\u8bd5\u7ed3\u679c\uff0c\u9700\u8981\u5148\u5c06\u5b9e\u4f8b\u6570\u56de\u6eda\u56de\u7b2c\u4e00\u62796000\u5b9e\u4f8b\u4e4b\u540e\uff0c\u6216\u662f\u5347\u7ea7\u914d\u7f6e\u6269\u5bb9\u673a\u5668\u4e4b\u540e\u518d\u5c1d\u8bd5\u5347\u7ea7\u3002\u672c\u6587\u4f7f\u7528\u56de\u6eda\u538b\u529b\u7684\u65b9\u5f0f\uff0c\u5148\u505c\u6b62\u540e\u542f\u52a8\u7684\u65bd\u538b\u96c6\u7fa4\u3002\u8ba9\u96c6\u7fa4\u6062\u590d\u6b63\u5e38\u540e\u518d\u6267\u884c\u5347\u7ea7\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5347\u7ea7\u524d6000\u5b9e\u4f8bCPU",src:a(84693).Z,width:"3088",height:"486"}),"\n",(0,r.kt)("img",{alt:"\u5347\u7ea7\u524d6000\u5b9e\u4f8b",src:a(62611).Z,width:"3052",height:"482"}),"\n",(0,r.kt)("img",{alt:"\u5347\u7ea7\u524d6000\u5b9e\u4f8bDubbo",src:a(65628).Z,width:"1064",height:"481"})),(0,r.kt)("p",null,"\u4ece\u76d1\u63a7\u56fe\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u5728\u505c\u6b62\u540e\u4e24\u6279\u538b\u529b\u540e\uff0c\u96c6\u7fa4\u5f88\u5feb\u5c31\u6062\u590d\u5230\u4e86\u6b63\u5e38\uff0c\u8fd0\u884c\u7a33\u5b9a\uff0cDubbo\u8c03\u7528\u4e5f\u6062\u590d\u6b63\u5e38\u3002\u4e4b\u540e\u4f7f\u7528MSE\u7684\u5347\u7ea7\u529f\u80fd\uff0c\u8fdb\u884c\u5347\u7ea7\u3002\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7531\u4e8e\u53cc\u5199\u7684\u6027\u80fd\u635f\u8017\uff0c\u5bfc\u81f4CPU\u6709\u8f83\u5927\u7684\u6296\u52a8\uff1b\u800c\u4e14\u56e0\u4e3a\u53cc\u5199\u5bfc\u81f4\u7684\u5b9e\u4f8b\u6570\u7ffb\u500d\uff0c\u5b9e\u9645\u4e0a\u76f8\u5f53\u4e8e12000\u5b9e\u4f8b\u7684\u6781\u9650\u538b\u529b\uff0c\u670d\u52a1\u7aef\u4ecd\u7136\u6709\u4e00\u5b9a\u7684\u6296\u52a8\uff0c\u56e0\u6b64\u5bfc\u81f4\u4e86\u4e9b\u8bb8Dubbo\u7684\u9519\u8bef\u3002\u82e5\u662f\u5728\u975e\u6781\u9650\u538b\u529b\u4e0b\u5347\u7ea7\uff0c\u5c06\u4e0d\u4f1a\u6709\u6b64\u5f71\u54cd\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5347\u7ea7\u540e14000\u5b9e\u4f8bCPU",src:a(6433).Z,width:"3064",height:"464"}),"\n",(0,r.kt)("img",{alt:"\u5347\u7ea7\u540e14000\u5b9e\u4f8b",src:a(84909).Z,width:"3040",height:"482"}),"\n",(0,r.kt)("img",{alt:"\u5347\u7ea7\u540e14000\u5b9e\u4f8bDubbo",src:a(59698).Z,width:"1064",height:"481"})),(0,r.kt)("p",null,"\u968f\u7740\u670d\u52a1\u7aef\u5347\u7ea7\u5b8c\u6210\u505c\u6b62\u53cc\u5199\uff0c\u6d88\u9664\u4e86\u53cc\u5199\u5e26\u6765\u7684\u6027\u80fd\u635f\u8017\uff0cCPU\u4f7f\u7528\u964d\u4f4e\u5e76\u8d8b\u4e8e\u7a33\u5b9a\uff0c\u540c\u65f6\u5b9e\u4f8b\u6570\u4e5f\u4e0d\u518d\u6296\u52a8\uff0cDubbo\u8c03\u7528\u5b8c\u5168\u6062\u590d\uff1b\u5982\u540c1.X\u670d\u52a1\u7aef\u4e00\u6837\uff0c\u5206\u4e24\u4e2a\u6279\u6b21\u542f\u52a8\u65bd\u538b\u96c6\u7fa4\uff0c\u5bf9\u6bd4\u4e24\u4e2a\u7248\u672c\u95f4\u5728\u76f8\u540c\u538b\u529b\u4e0b\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5347\u7ea7\u540e14000\u5b9e\u4f8bCPU",src:a(26598).Z,width:"3106",height:"510"}),"\n",(0,r.kt)("img",{alt:"\u5347\u7ea7\u540e14000\u5b9e\u4f8b",src:a(34263).Z,width:"3114",height:"512"}),"\n",(0,r.kt)("img",{alt:"\u5347\u7ea7\u540e14000\u5b9e\u4f8bDubbo",src:a(58911).Z,width:"1064",height:"481"})),(0,r.kt)("p",null,"\u7531\u4e8e\u5ba2\u6237\u7aef\u4f9d\u65e7\u4f7f\u7528\u7684\u662f1.X\u7684\u5ba2\u6237\u7aef\uff0c\u670d\u52a1\u7aef\u7684\u4f7f\u7528\u6c34\u4f4d\u4f9d\u7136\u975e\u5e38\u9ad8\uff0c\u5728\u5168\u90e8\u538b\u529b\u542f\u52a8\u540e\uff0cCPU\u51e0\u4e4e\u8fbe\u5230100%\uff1b\u867d\u7136\u6ca1\u6709\u50cf1.X\u670d\u52a1\u7aef\u4e00\u6837\uff0c\u51fa\u73b0\u5927\u89c4\u6a21\u5b9e\u4f8b\u4e0b\u8dcc\uff0c\u4f46\u662f\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e\u4f9d\u65e7\u6709\u5c11\u91cf\u7684\u5b9e\u4f8b\u6296\u52a8\uff0c\u8bf4\u660e\u4ec5\u5347\u7ea7Nacos\u670d\u52a1\u7aef\u52302.0\u7248\u672c\u80fd\u6709\u4e00\u5b9a\u7684\u6539\u5584\uff0c\u4f46\u662f\u6ca1\u6709\u5f7b\u5e95\u89e3\u51b3\u6027\u80fd\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5347\u7ea7\u540e14000\u5b9e\u4f8b\u6296\u52a8",src:a(13685).Z,width:"3032",height:"470"})),(0,r.kt)("h3",{id:"nacos2x-server--nacos2x-client"},"Nacos2.X Server + Nacos2.X Client"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b8c\u5168\u91ca\u653eNacos2.0\u7684\u6027\u80fd\uff0c\u8fd8\u9700\u8981\u5c06\u65bd\u538b\u96c6\u7fa4\u7684\u5ba2\u6237\u7aef\u4e5f\u5347\u7ea7\u52302.0\u4ee5\u4e0a\u7248\u672c\u3002\u540c\u6837\u5c06\u52063\u4e2a\u6279\u6b21\u8fdb\u884c\u66ff\u6362\uff0c\u671f\u95f4\u7531\u4e8eProvider\u8fdb\u884c\u4e86\u91cd\u542f\uff0c\u670d\u52a1\u7aef\u6709\u51fa\u73b0\u5b9e\u4f8b\u7684\u4e0b\u8dcc\u518d\u6062\u590d\u5c5e\u4e8e\u6b63\u5e38\u73b0\u8c61\u3002\u968f\u7740\u65bd\u538b\u96c6\u7fa4\u7684\u5347\u7ea7\uff0c\u53ef\u4ee5\u53d1\u73b0CPU\u6709\u4e86\u975e\u5e38\u660e\u663e\u7684\u4e0b\u964d\uff0c\u6700\u7ec8\u8fbe\u5230\u7a33\u5b9a\u65f6\uff0cCPU\u7531\u6700\u521d\u7684\u63a5\u8fd1100%\uff0c\u964d\u4f4e\u523020%\uff0c\u96c6\u7fa4\u7a33\u5b9a\u8fd0\u884c14000\u4e2a\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2.X14000\u5b9e\u4f8bCPU",src:a(4).Z,width:"3114",height:"514"}),"\n",(0,r.kt)("img",{alt:"2.X14000\u5b9e\u4f8b",src:a(64182).Z,width:"3100",height:"514"}),"\n",(0,r.kt)("img",{alt:"2.X14000\u5b9e\u4f8bDubbo",src:a(71866).Z,width:"1064",height:"481"})),(0,r.kt)("h2",{id:"\u538b\u6d4b\u7ed3\u679c"},"\u538b\u6d4b\u7ed3\u679c"),(0,r.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u6211\u4eec\u80fd\u591f\u5f97\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"2\u6838CPU+4G\u5185\u5b58"),"\u7684\u4e09\u8282\u70b9\u96c6\u7fa4\u5728\u4e0d\u540c\u7248\u672c\u4e0b\u7684\u6027\u80fd\u5dee\u5f02\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u538b\u529b\u89c4\u6a21"),(0,r.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4\u7a33\u5b9a\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU\u4f7f\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nacos1.X"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos1.X"),(0,r.kt)("td",{parentName:"tr",align:null},"14000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u4e0d\u7a33\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nacos2.X\uff08\u5347\u7ea7\u4e2d\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos1.X"),(0,r.kt)("td",{parentName:"tr",align:null},"6000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6709\u4e00\u5b9a\u6296\u52a8"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nacos2.X"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos1.X"),(0,r.kt)("td",{parentName:"tr",align:null},"14000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6709\u4e00\u5b9a\u6296\u52a8"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nacos2.X"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos2.X"),(0,r.kt)("td",{parentName:"tr",align:null},"14000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:null},"20%")))),(0,r.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0cNacos2.0\u786e\u5b9e\u5bf9\u6027\u80fd\u6709\u8f83\u5927\u7684\u63d0\u5347\uff0c\u65b0\u7528\u6237\u5efa\u8bae\u76f4\u63a5\u5168\u90e8\u91c7\u7528Nacos2.0\uff0c\u8001\u7528\u6237\u5efa\u8bae\u5148\u5347\u7ea7Server\u7aef\uff0c\u7136\u540e\u5728\u9010\u6b65\u5347\u7ea7\u5ba2\u6237\u7aef\u91ca\u653e\u7ea2\u5229\u3002\u6700\u540e\u4ece\u6574\u4e2a\u538b\u6d4b\u89c6\u89d2\u7684\u76d1\u63a7\uff0c\u6765\u76f4\u89c2\u7684\u611f\u53d7\u4e00\u4e0b\u4e0d\u540c\u7248\u672c\u5728\u4e0d\u540c\u9636\u6bb5\u7684\u6027\u80fd\u8868\u73b0\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d1\u63a7\u7eb5\u89c8",src:a(72151).Z,width:"1919",height:"665"})))}g.isMDXComponent=!0},69754:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_10000_cpu-a695b8af2bbff9a9109f1724f1d1b74a.jpg"},48763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_10000_dubbo-da8dd7d0766c57e101626142e0bb3760.png"},3934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_10000_instance-ce3c6f41290b3243a49d0824d5af1bbb.jpg"},79404:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_14000_cpu-00b8c49ccf573f6c05ee87135f6af20e.jpg"},67663:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_14000_dubbo-5fa816b30338e3e9cd77fe21c416e649.png"},62229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_14000_dubbo_error-dac9eef0c76a5d4b3d53175d66edd504.jpg"},20531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_14000_instance-a8b02f1b13cf6309300be3004b5ac67c.jpg"},96904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_14000_instance_shake-40f671422fd0ee548fedf18251dd90db.jpg"},1014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_6000_cpu-baab16c555248319a7e3751f105cb749.jpg"},84791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_6000_instance-aee611f962310aa4be0f35730054ff5f.jpg"},4:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2_14000_cpu-549f6b56287ca04b59041dfa4b28068f.jpg"},71866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2_14000_dubbo-24cd3e2e0bbe884335ced04e2cdeb4be.png"},64182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2_14000_instance-747758b3881f3abb6e1330f1452547a9.jpg"},26598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/after_upgrade_cpu-7cafc402fa20692fc047a08a71d96354.jpg"},58911:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/after_upgrade_dubbo-7eb99da583572f6351a451c75a4a9ec2.png"},34263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/after_upgrade_instance-5745811ef8147996d0a3d3e478f492bd.jpg"},13685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/after_upgrade_instance_shake-88a15bfc8b3b8156ad61338d622c1e52.jpg"},72151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/all-ba420b22959bd95a783dd0e6d843ecd4.jpg"},84693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/before_upgrade_cpu-d1c74733549728383a3fa828af094e3a.jpg"},65628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/before_upgrade_dubbo-aa23e93668a3100461e9857ace56e8b1.png"},62611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/before_upgrade_instance-2fe6c5eb295715f6124ce8e752d9c4b9.jpg"},88255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/performance_model-97b609e8d29e6ec0b5b084d1da365c25.jpg"},6433:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrading_cpu-8adead39922245f9d0bfb04e163f1a0c.jpg"},59698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrading_dubbo-408e2ea28e28e757151720ab66060edd.png"},84909:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrading_instance-73fb6bb6f225e9cd00bc9e248e243661.jpg"}}]);