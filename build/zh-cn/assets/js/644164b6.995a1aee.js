"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8072],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return t?o.createElement(m,c(c({ref:n},s),{},{components:t})):o.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<r;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={title:"Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001",keywords:["nacos","nacos0.2","alibaba","\u90a2\u5b66\u8d85","Aliware Open Source","spring cloud"],description:"Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001"},c="Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001",l={permalink:"/zh-cn/blog/chengdu-dubbo",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/chengdu-dubbo.md",title:"Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001",description:"Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001",date:"2023-10-10T11:24:40.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:6.135,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001",keywords:["nacos","nacos0.2","alibaba","\u90a2\u5b66\u8d85","Aliware Open Source","spring cloud"],description:"Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001"},prevItem:{title:"Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",permalink:"/zh-cn/blog/apisix"},nextItem:{title:"Nacos\u6253\u901aCMDB\u5b9e\u73b0\u5c31\u8fd1\u8bbf\u95ee",permalink:"/zh-cn/blog/cmdb"}},i={authorsImageUrls:[]},p=[{value:"1.\xa0Nacos\u5f00\u6e90\u4ecb\u7ecd",id:"1nacos\u5f00\u6e90\u4ecb\u7ecd",level:2},{value:"2. Nacos v0.2\u8fdb\u5ea6\u548c\u89c4\u5212",id:"2-nacos-v02\u8fdb\u5ea6\u548c\u89c4\u5212",level:2},{value:"3. Nacos \u4ee3\u7801\u6f14\u793a &amp; v0.3\u63a7\u5236\u53f0\u9884\u89c8",id:"3-nacos-\u4ee3\u7801\u6f14\u793a--v03\u63a7\u5236\u53f0\u9884\u89c8",level:2},{value:"4. Nacos \u793e\u533a\u4ecb\u7ecd\u548c\u62db\u52df\u8ba1\u5212",id:"4-nacos-\u793e\u533a\u4ecb\u7ecd\u548c\u62db\u52df\u8ba1\u5212",level:2}],s={toc:p},u="wrapper";function b(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u8fd1\u671f\u7684Aliware Open Source \u6210\u90fd\u7ad9\u7684\u6d3b\u52a8\u4e0a\uff0c\u963f\u91cc\u5df4\u5df4\u9ad8\u7ea7\u5de5\u7a0b\u5e08\u90a2\u5b66\u8d85\uff08\u4e8e\u6000\uff09\u5206\u4eab\u4e86Nacos v0.2\u7684\u89c4\u5212\u548c\u8fdb\u5ea6\uff0c\u5e76\u5bf9Nacos v0.3\u7684\u63a7\u5236\u53f0\u8fdb\u884c\u4e86\u9884\u89c8\u3002Nacos v0.2\u5c06\u8fdb\u4e00\u6b65\u878d\u5165Duboo\u548cSpring Cloud\u751f\u6001\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u7684\u5728\u5fae\u670d\u52a1\u573a\u666f\u4e0b\u4f7f\u7528\u670d\u52a1\u53d1\u73b0\u548c\u52a8\u6001\u914d\u7f6e\u7ba1\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1537795153259-cc2c60c2-d7cb-431a-8858-cbd71b1c89e9.png",alt:"undefined"})," "),(0,a.kt)("p",null,"\u5609\u5bbe\u4ecb\u7ecd\uff1a\u90a2\u5b66\u8d85\uff08\u4e8e\u6000\uff09\uff0cNacos\u5f00\u6e90\u9879\u76ee\u4e3b\u8981\u63a8\u52a8\u8005\uff0c\u8d1f\u8d23\u963f\u91cc\u5df4\u5df4\u5185\u90e8 configserver\u3001skywalker\u548ctaokeeper\u4ea7\u54c1\u7684\u67b6\u6784\u548c\u7814\u53d1\uff0c\u7231\u597d\u4ee3\u7801\u3001\u7bee\u7403\u3001\u5409\u4ed6\u548c\u6447\u6eda\uff0c\u8fd8\u8bb0\u5f97\u8d85\u54e5\u7ed9\u76f2\u4eba\u5c0f\u670b\u53cb\u5199\u7684\u90a3\u9996\u8d85\u6e29\u6696\u7684\u6b4c\u4e48\uff1f",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzU4NzU0MDIzOQ==&mid=2247484141&idx=2&sn=30943616cf3d86393e906f82a3282bda&chksm=fdeb308dca9cb99b6ca0e04112d2f5994a2a9cbdb5f43e5c38ef0c592001ab78e1d0be390120&scene=21#wechat_redirect"},"\u4f20\u9001\u95e8\uff1a\u7ed9\u4f60\u4eec\u7684\u6b4c")),(0,a.kt)("h2",{id:"1nacos\u5f00\u6e90\u4ecb\u7ecd"},"1.\xa0Nacos\u5f00\u6e90\u4ecb\u7ecd"),(0,a.kt)("p",null,"Nacos\u662f\u4e00\u4e2a\u66f4\u6613\u4e8e\u5e2e\u52a9\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\uff0c\u8131\u80ce\u4e8e\u627f\u8f7d\u6574\u4e2a\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u7684\u8f6f\u8d1f\u8f7d\u4ea7\u54c1\uff0c\u5e76\u4e8e\u4eca\u5e747\u6708\u5bf9\u5916\u5f00\u6e90\u3002\u5f00\u6e90\u4ee5\u6765\uff0c\u83b7\u5f97\u4e86\u6765\u81ea\u793e\u533a\u7684\u79ef\u6781\u53cd\u9988\uff0cstar\u6570\u7a81\u7834\xa01k \u3002"),(0,a.kt)("p",null,"Nacos\u65e8\u5728\u5c06\u963f\u91cc\u5df4\u5df4\u5728\u5efa\u8bbe\u5171\u4eab\u670d\u52a1\u4f53\u7cfb\u4e2d\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u53ca\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\u8d21\u732e\u7ed9\u5f00\u6e90\u793e\u533a\uff0c\u901a\u8fc7\u6253\u9020Dubbo + Nacos\u7684\u7ecf\u5178\u7ec4\u5408\u8fdb\u4e00\u6b65\u91ca\u653eDubbo\u5728\u4e91\u539f\u751f\u53caService Mesh\u65f6\u4ee3\u4e2d\uff0c\u5728\u5927\u89c4\u6a21\u5fae\u670d\u52a1\u6cbb\u7406\u3001\u6d41\u91cf\u6cbb\u7406\u3001\u670d\u52a1\u96c6\u6210\u4e0e\u670d\u52a1\u5171\u4eab\u7b49\u670d\u52a1\u5e73\u53f0\u80fd\u529b\u5efa\u8bbe\u4e0a\u7684\u5a01\u529b\uff0c\u540c\u65f6Nacos\u5173\u6ce8\u5bf9\u4e3b\u6d41\u5f00\u6e90\u793e\u533a\uff0c\u5982Spring Cloud\u548cKubernetes\u4e91\u539f\u751f\u4f53\u7cfb\u7684\u65e0\u7f1d\u5bf9\u63a5\u4e0e\u652f\u6301\u3002\u8be5\u9879\u76ee\u9884\u8ba1\u57287\u6708\u4e2d\u65ec\u5f00\u653e\u9996\u4e2a\u6d4b\u8bd5\u9884\u89c8\u7248\u672c\uff0c\u5e76\u8ba1\u5212\u57280.8\u7248\u672c\u4e0a\uff0c\u8fbe\u5230\u751f\u4ea7\u53ef\u7528\u7684\u72b6\u6001\u3002\u6b64\u5916\uff0cNacos\u652f\u6301\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u7684\u5206\u79bb\u90e8\u7f72\uff0c\u4e5f\u5173\u6ce8\u4e0a\u4e91\u7684saas\u5316\u90e8\u7f72\uff0c\u5b9e\u73b0\u4e91\u4e0b\u5230\u4e91\u4e0a\u7684\u5e73\u6ed1\u8fc1\u79fb\u3002"),(0,a.kt)("p",null,"Github\u9879\u76ee\u4e3b\u9875\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"https://github.com/alibaba/nacos"),"\nNacos\u5b98\u7f51\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"http://nacos.io/"},"http://nacos.io/"),"\xa0"),(0,a.kt)("h2",{id:"2-nacos-v02\u8fdb\u5ea6\u548c\u89c4\u5212"},"2. Nacos v0.2\u8fdb\u5ea6\u548c\u89c4\u5212"),(0,a.kt)("p",null,"Nacos +\xa0Dubbo\uff0c \u53cc\u4e2d\u5fc3\u91cd\u6784\uff0c\u91ca\u653e\u5a01\u529b\nDubbo2.7\u5c06\u5bf9\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u8fdb\u884c\u91cd\u6784\u3002\u6ce8\u518c\u4e2d\u5fc3\u5c06\u53ea\u7528\u4e8eEndpoint\u7684\u540c\u6b65\uff0c\u8fdb\u4e00\u6b65\u51cf\u8f7b\u6ce8\u518c\u4e2d\u5fc3\u7684\u5b58\u50a8\u538b\u529b\uff0c\u63d0\u9ad8\u5730\u5740\u540c\u6b65\u6548\u7387\uff0c\u540c\u65f6\u7f13\u89e3\u5f53\u524d\u7531\u4e8eURL\u5197\u4f59\u5728\u5927\u89c4\u6a21\u63a8\u9001\u65f6\u9020\u6210\u7684Consumer\u7aef\u5185\u5b58\u8ba1\u7b97\u538b\u529b\u3002\u914d\u7f6e\u4e2d\u5fc3\u5c06\u89e3\u51b3\u5f53\u524d\u914d\u7f6e\u548c\u5730\u5740\u4fe1\u606f\u8026\u5408\u7684\u95ee\u9898\uff0c\u901a\u8fc7\u62bd\u8c61\u52a8\u6001\u914d\u7f6e\u5c42\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u5bf9\u63a5\u5fae\u670d\u52a1\u573a\u666f\u4e0b\u66f4\u5e38\u7528\u7684\u3001\u66f4\u4e13\u4e1a\u7684\u914d\u7f6e\u4e2d\u5fc3\u3002\u8fd9\u4f7f\u5f97Nacos\u548cDubbo\u7684\u5b8c\u7f8e\u878d\u5408\u6210\u4e3a\u53ef\u80fd\uff0c\u8fdb\u4e00\u6b65\u91ca\u653eDubbo\u5728\u670d\u52a1\u6cbb\u7406\u3001\u6d41\u91cf\u6cbb\u7406\u3001\u670d\u52a1\u8fd0\u8425\u548c\u7ba1\u7406\u7b49\u65b9\u9762\u7684\u5a01\u529b\u3002"),(0,a.kt)("p",null,"Nacos + Spring Cloud\uff0c\u591a\u5c42\u878d\u5165\uff0c\u65e0\u7f1d\u8d34\u5408\nNacos\u5728\u6280\u672f\u793e\u533a\u5df2\u7ecf\u542f\u52a8Nacos + Spring Cloud\u7684\u5de5\u7a0b\uff0c\u53ef\u65e0\u7f1d\u652f\u6301Spring Cloud\uff0c\u4e3aSpring Cloud\u7528\u6237\u63d0\u4f9b\u66f4\u7b80\u4fbf\u7684\u914d\u7f6e\u4e2d\u5fc3\u548c\u6ce8\u518c\u4e2d\u5fc3\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f\u7528Nacos\u4e0d\u7528\u518d\u4ec5\u4ec5\u4e3a\u670d\u52a1\u548c\u914d\u7f6e\u5c31\u9700\u8981\u5728\u751f\u4ea7\u4e0ahold\u4f4f Eureka\uff0cSpring Cloud Config Server\uff0cGit\uff0cConsul \u8d77\u7801\u56db\u4e2a\u5f00\u6e90\u4ea7\u54c1\u3002"),(0,a.kt)("p",null,"Nacos v0.2\uff0c\u5168\u65b9\u4f4d\u6ce8\u89e3\uff0c\u5b9e\u73b0\u5e73\u6ed1\u8fc1\u79fb\n\u5728 Java \u751f\u6001\u7cfb\u7edf\u4e2d\uff0c\u4ee5 Spring Boot \u548c Spring Cloud \u4e3a\u4ee3\u8868\u7684\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5f15\u5165\u4e86\u5168\u65b0\u7684\u7f16\u7a0b\u6a21\u578b\uff0c\u5305\u62ec\uff1a\no\t\u6ce8\u89e3\u9a71\u52a8\uff08Annotation-Driven\uff09\no\t\u5916\u90e8\u5316\u914d\u7f6e\uff08External Configuration\uff09\no\t\u81ea\u52a8\u88c5\u914d\uff08Auto-Configure\uff09"),(0,a.kt)("p",null,"Nacos\u5c06\u5728v0.2\u652f\u6301\u539f\u751fSpring\u3001Spring Boot\u3001Spring Cloud\u4e2d\u5173\u4e8e\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u7ba1\u7406\u7684\u539f\u751f\u914d\u7f6e\uff0c\u9002\u914dSpring Boot\u3001Spring Cloud\u6807\u51c6\uff0c\u6b64\u5916Nacos\u8fd8\u662f\u652f\u6301\u4ee5\u4e0b\u6ce8\u89e3\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1537795187129-bf48b9b1-3560-4081-99fc-b9c99497525b.png",alt:"undefined"})," "),(0,a.kt)("h2",{id:"3-nacos-\u4ee3\u7801\u6f14\u793a--v03\u63a7\u5236\u53f0\u9884\u89c8"},"3. Nacos \u4ee3\u7801\u6f14\u793a & v0.3\u63a7\u5236\u53f0\u9884\u89c8"),(0,a.kt)("p",null,"\u5728\u5206\u4eab\u4e2d\uff0c\u4e8e\u6000\u73b0\u573a\u6f14\u793a\u4e86\u5982\u4f55\u5feb\u901f\u8fd0\u884c\u4e00\u4e2aNacos\u5e94\u7528\u3001\u8c03\u7528Nacos API\u3001\u5982\u4f55\u4f7f\u7528\u6ce8\u89e3\u6765\u8fd0\u884cNacos\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\uff0cNacos v0.3\u52a0\u5165\u4e86\u63a7\u5236\u53f0\u7684\u529f\u80fd\uff0c\u63a7\u5236\u53f0\u5206\u4e3a\u4e24\u4e2a\u5185\u5bb9\uff0c\u5e76\u4f1a\u878d\u5408\u5728\u4e00\u8d77\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u53d1\u73b0\u6a21\u5757\uff0c\u5305\u62ec\u670d\u52a1\u4e0a\u4e0b\u7ebf\u7ba1\u7406\u3001\u670d\u52a1\u6743\u91cd\u3001\u670d\u52a1\u6253\u6807\u3001\u670d\u52a1\u5065\u5eb7\u4fe1\u606f\u548c\u670d\u52a1\u5143\u4fe1\u606f\u7684\u5c55\u73b0;"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u6a21\u5757\uff0c\u63d0\u4f9b\u914d\u7f6e\u5217\u8868\u3001\u76d1\u542c\u67e5\u8be2\u3001\u63a8\u9001\u8f68\u8ff9\u7b49\u529f\u80fd\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1537795211701-dc18d18c-99a6-40e0-824f-6519d8f8b434.png",alt:"undefined"})," "),(0,a.kt)("h2",{id:"4-nacos-\u793e\u533a\u4ecb\u7ecd\u548c\u62db\u52df\u8ba1\u5212"},"4. Nacos \u793e\u533a\u4ecb\u7ecd\u548c\u62db\u52df\u8ba1\u5212"),(0,a.kt)("p",null,"Nacos\u5f3a\u8c03\u793e\u533a\u5316\u7684\u53d1\u5c55\u4e0e\u793e\u533a\u7684\u591a\u6837\u6027\uff0c\u91c7\u53d6PMC\u548cCommitter\u673a\u5236\u6765\u7ba1\u7406\u793e\u533a\uff0c\u9f13\u52b1\u70ed\u60c5\u3001\u6ce8\u91cd\u7ec6\u8282\u3001\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u6d3b\u52a8\u3001\u5bf9\u9879\u76ee\u611f\u5174\u8da3\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u5230\u5f00\u6e90\u9879\u76ee\u4e2d\u6765\uff0c\u5e0c\u671b\u5728\u7b2c\u4e00\u5e74\u5c31\u5438\u6536\u81f3\u5c11\u8d85\u8fc75\u540d\u6765\u81ea\u5176\u5b83\u516c\u53f8\u7684PMC\uff0c\u81f3\u5c1110\u540d\u7684\u5916\u90e8Committer\uff0c\u4f9d\u6258\u4e8e\u793e\u533a\u5c06\u4ea7\u54c1\u505a\u5f97\u66f4\u597d\uff0c\u5e76\u8ba1\u5212\u572819\u5e74\u5e74\u521d\u548cCNCF\u57fa\u91d1\u4f1a\u6216apache\u57fa\u91d1\u4f1a\u6c9f\u901a\u6350\u8d60\u9002\u5b9c\uff0c\u793e\u533a\u8d21\u732e\u8005\u4f1a\u968f\u4e4b\u8fdb\u5165\u57fa\u91d1\u4f1a\u4f53\u7cfb\u3002"),(0,a.kt)("p",null,"\u753b\u5916\u97f3\uff1a\u6211\u4eec\u51c6\u5907\u4e8640\u4e2aNacos\u9650\u91cf\u7248\u7eaa\u5ff5\u54c1\uff0c\u7528\u4e8e\u5956\u52b1\u53c2\u4e0e\u201cNacos\u6709\u5956\u6d3b\u52a8\u201d\u7684\u5f00\u53d1\u8005\u3002\n\u6d3b\u52a8\u94fe\u63a5\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/activity.html"},"https://nacos.io/zh-cn/docs/activity.html")))}b.isMDXComponent=!0}}]);