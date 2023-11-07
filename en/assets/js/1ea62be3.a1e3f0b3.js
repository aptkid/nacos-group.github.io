"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"control plugin",keywords:["anti-fragile","control limit","connection limit","TPS"],description:"Nacos support control plugin."},o=void 0,i={unversionedId:"v2/plugin/control-plugin",id:"version-2.X/v2/plugin/control-plugin",title:"control plugin",description:"Nacos support control plugin.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/v2/plugin/control-plugin.md",sourceDirName:"v2/plugin",slug:"/v2/plugin/control-plugin",permalink:"/en/docs/v2/plugin/control-plugin",draft:!1,tags:[],version:"2.X",frontMatter:{title:"control plugin",keywords:["anti-fragile","control limit","connection limit","TPS"],description:"Nacos support control plugin."}},p={},s=[{value:"Concepts in Control Plugin",id:"concepts-in-control-plugin",level:2},{value:"Control Point",id:"control-point",level:3},{value:"Control Rule",id:"control-rule",level:3},{value:"Plugin Development",id:"plugin-development",level:2},{value:"Load Plugin",id:"load-plugin",level:3},{value:"Use the default Nacos Control Plugin",id:"use-the-default-nacos-control-plugin",level:2},{value:"Enable the default Nacos Control Plugin",id:"enable-the-default-nacos-control-plugin",level:3},{value:"Setting control plugin for default Nacos control plugin",id:"setting-control-plugin-for-default-nacos-control-plugin",level:3},{value:"The Storage Dir of Control Rules",id:"the-storage-dir-of-control-rules",level:3},{value:"Supported Control PointNames",id:"supported-control-pointnames",level:2},{value:"Advanced Development",id:"advanced-development",level:2},{value:"External Storage for Control Rules",id:"external-storage-for-control-rules",level:3},{value:"Dynamic Loading of Control Rules",id:"dynamic-loading-of-control-rules",level:3},{value:"Custom Format Parse for Control Rules",id:"custom-format-parse-for-control-rules",level:3},{value:"Custom Time Windows for TPS",id:"custom-time-windows-for-tps",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Translated by AI."),(0,r.kt)("h1",{parentName:"blockquote",id:"control-plugin"},"Control Plugin")),(0,r.kt)("p",null,"Starting from version 2.3.0, Nacos supports injecting control related plugins through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"},"SPI"),", and selecting a specific plugin implementation as the actual control capability in the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," configuration file. This document provides a detailed introduction on how to implement an control plugin and how to make it effective."),(0,r.kt)("h2",{id:"concepts-in-control-plugin"},"Concepts in Control Plugin"),(0,r.kt)("p",null,"Anti-fragility is a strategy that restricts access to a ",(0,r.kt)("strong",{parentName:"p"},"certain resource")," on the server when the ",(0,r.kt)("strong",{parentName:"p"},"frequency and number")," of accesses reach a certain level. It is used to protect the server from quickly rejecting requests under high pressure, preventing widespread unavailability caused by excessive resource access and exhaustion. The Nacos control plugin abstracts information primarily into ",(0,r.kt)("inlineCode",{parentName:"p"},"control point")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"control rules"),"."),(0,r.kt)("h3",{id:"control-point"},"Control Point"),(0,r.kt)("p",null,"The control point correspond to the mapping of resources occupied when making requests to the server. Currently, they mainly focus on ",(0,r.kt)("inlineCode",{parentName:"p"},"Connections")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Transactions Per Second (TPS)"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "Connections" control point primarily monitors the number of long connections used by Nacos 2.X clients and the number of long polling connections used by Nacos 1.X clients. These two types of connections are monitored independently.'),(0,r.kt)("li",{parentName:"ul"},'The "Transactions Per Second (TPS)" control point mainly monitors the frequency of access to core interfaces in the Nacos server. Similar operation interfaces are considered as the same monitor point. For example, the registration service v1 interface and v2 interface are treated as the same monitor point. Please refer to the document for specific TPS monitor ',(0,r.kt)("a",{parentName:"li",href:"#1.1"},"point names"),".")),(0,r.kt)("h3",{id:"control-rule"},"Control Rule"),(0,r.kt)("p",null,'The control rules are different limitation rules that are executed for each control point. They are specifically categorized as "Connection Control Rules" ',(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionControlRule"),' and "Transactions Per Second Control Rules" ',(0,r.kt)("inlineCode",{parentName:"p"},"TpsControlRule"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionControlRule")," mainly include follow contents:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"countLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Total count limit for connections. Default is -1, indicating no limitation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorIpList"),(0,r.kt)("td",{parentName:"tr",align:null},"Set"),(0,r.kt)("td",{parentName:"tr",align:null},"List of IPs to be monitored by trace. It is used to observe the operations performed on the corresponding IP connections in detail. Once added, the connection requests from the corresponding IPs will be logged in detail in the ",(0,r.kt)("inlineCode",{parentName:"td"},"remote-digest.log")," file.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TpsControlRule")," mainly include follow contents:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pointName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the control point corresponding to the rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pointRule"),(0,r.kt)("td",{parentName:"tr",align:null},"RuleDetail"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific details of the rule content.")))),(0,r.kt)("p",null,"And ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleDetail")," mainly include follow contents:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ruleName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the rule. It is different from the control point name. A control point can have multiple rule names.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxCount"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Total count limit for TPS. Default is -1, indicating no limitation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeUnit"),(0,r.kt)("td",{parentName:"tr",align:null},"The period in which the rule is effective, such as counting at the second level or minute level. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"TimeUnit.SECONDS")," for second level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring type, can be either ",(0,r.kt)("inlineCode",{parentName:"td"},"monitor")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"intercept"),". It corresponds to monitoring mode (only counting and printing TPS, even if the rule is triggered, no interception) and interception mode.")))),(0,r.kt)("h2",{id:"plugin-development"},"Plugin Development"),(0,r.kt)("p",null,"To develop a control plugin for the Nacos server, you first need to depend on the relevant API of the control plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-control-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${project.version}")," is the Nacos version, at least ",(0,r.kt)("inlineCode",{parentName:"p"},"2.3.0"),"."),(0,r.kt)("p",null,"Then to extend ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.connection.ConnectionControlManager")," abstract class and ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.tps.TpsControlManager"),"abstract class\uff0cimplement their methods; Then implement ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.spi.ControlManagerBuilder")," interface to build the two above classes; Finally add the SPI file to ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/services"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.connection.ConnectionControlManager")," need implement follow methods:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applyConnectionLimitRule"),(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionControlRule"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Apply new connection limit rule")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check"),(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionCheckRequest"),(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionCheckResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"To determine if the connection count rule is hit, if the success field in the ConnectionCheckResponse is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", new connections will be rejected.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.tps.TpsControlManager")," need implement follow methods:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registerTpsPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Registers a TPS control point. The Nacos server will register the current TPS control point to the plugin during startup. The input parameter is the name of the TPS control point. Please refer to the document for ",(0,r.kt)("a",{parentName:"td",href:"#1.1"},"point names"),". The plugin needs to maintain a TpsBarrier within this method to record TPS and rule content. For more details, refer to ",(0,r.kt)("a",{parentName:"td",href:"#1.2"},"Custom Time Windows for TPS"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applyTpsRule"),(0,r.kt)("td",{parentName:"tr",align:null},"String, TpsControlRule"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies a new TPS rule and associates it with the TPS control point name for update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check"),(0,r.kt)("td",{parentName:"tr",align:null},"TpsCheckRequest"),(0,r.kt)("td",{parentName:"tr",align:null},"TpsCheckResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if the TPS rule is hit. If the success field in the TpsCheckResponse is false, new requests will be rejected.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.spi.ControlManagerBuilder")," need implement follow methods:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getName"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the name of the plugin. It is used to match the specified type in the configuration file and use the matched plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buildConnectionControlManager"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionControlManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates an implementation of ",(0,r.kt)("inlineCode",{parentName:"td"},"ConnectionControlManager")," for the plugin. When it is null, the ",(0,r.kt)("inlineCode",{parentName:"td"},"no limit")," implementation will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buildTpsControlManager"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"TpsControlManager"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates an implementation of ",(0,r.kt)("inlineCode",{parentName:"td"},"TpsControlManager")," for the plugin. When it is null, the ",(0,r.kt)("inlineCode",{parentName:"td"},"no limit")," implementation will be used.")))),(0,r.kt)("h3",{id:"load-plugin"},"Load Plugin"),(0,r.kt)("p",null,"After the plugin finished, it needs to be packaged into jar/zip and places in the classpath of the nacos server. If you don't know how to add plugins into the classpath, please place plugins under ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/plugins")," directly."),(0,r.kt)("p",null,"After Adding plugins into classpath, also need to modify some configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### The name of the control plugin enabled in Nacos, corresponding to the return value of com.alibaba.nacos.plugin.control.spi.ControlManagerBuilder's getName method.\nnacos.plugin.control.manager.type=${controlPluginName}\n")),(0,r.kt)("p",null,"After restarting the Nacos cluster and completing the startup, you can see the following logs in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/logs/plugin-control.log"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Found control manager plugin of name=${controlPluginName}\nBuild connection control manager, class=${your plugin ConnectionControlManager class}\nBuild tps control manager, class=${your plugin TpsControlManager class}\n")),(0,r.kt)("h2",{id:"use-the-default-nacos-control-plugin"},"Use the default Nacos Control Plugin"),(0,r.kt)("p",null,"Starting from version 2.3.0, Nacos comes with a built-in simple control plugin implementation, which can limit the connection count and specified interface TPS of the Nacos server."),(0,r.kt)("h3",{id:"enable-the-default-nacos-control-plugin"},"Enable the default Nacos Control Plugin"),(0,r.kt)("p",null,"Modify the following configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"nacos.plugin.control.manager.type=nacos\n")),(0,r.kt)("h3",{id:"setting-control-plugin-for-default-nacos-control-plugin"},"Setting control plugin for default Nacos control plugin"),(0,r.kt)("p",null,"You can modify and set control rules by creating and modifying the control rule file. By default, the rules for the control plugin are defined in JSON format."),(0,r.kt)("p",null,"For example, if you want to set the connection limit to 100, you can perform the following steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ${nacos.home}/data/connection/\necho '{\"countLimit\": 100}' > ${nacos.home}/data/connection/limitRule\n")),(0,r.kt)("p",null,"Then restart Nacos server node."),(0,r.kt)("p",null,"What's more, if you want set the TPS of query config as 100, you can perform the following steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir -p ${nacos.home}/data/tps/\n# ConfigQuery is the PointName of the query config API.\necho \'{"pointName":"ConfigQuery","pointRule":{"maxCount":100,"monitorType":"intercept"}}\' > ${nacos.home}/data/tps/ConfigQuery \n')),(0,r.kt)("p",null,"Then restart Nacos server node."),(0,r.kt)("p",null,"More control rules and control point names please move to ",(0,r.kt)("a",{parentName:"p",href:"#1.1"},"point names"),"."),(0,r.kt)("h3",{id:"the-storage-dir-of-control-rules"},"The Storage Dir of Control Rules"),(0,r.kt)("p",null,"The built-in simple control plugin implementation in Nacos stores and reads control rules through the local file system. By default, the rules are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos.home}/data/connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos.home}/data/tps")," directories."),(0,r.kt)("p",null,"If you want to change the directory for storing the rule files, you can modify the following configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"nacos.plugin.control.rule.local.basedir=${expectedDir}\n")),(0,r.kt)("p",null,"In this way, the control rules will be stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"${expectedDir}/data/connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${expectedDir}/data/tps"),"."),(0,r.kt)("h4",{id:"1.1"}),(0,r.kt)("h2",{id:"supported-control-pointnames"},"Supported Control PointNames"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"control pointNames"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"started version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection"),(0,r.kt)("td",{parentName:"tr",align:null},"Total Connections"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Supported Connection Limit for a Specific Node"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConfigPublish"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration Publish Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Supported TPS Limit for Configuration Publishing on a Specific Node, including both HTTP and gRPC access sources"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConfigQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration Query Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Supported TPS Limit for Configuration Querying on a Specific Node, including both HTTP and gRPC access sources"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConfigRemove"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration Removal Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Supported TPS Limit for Configuration Removal on a Specific Node, including both HTTP and gRPC access sources"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConfigListen"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration Listening Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Supported TPS Limit for Configuration Listening on a Specific Node, only including gRPC access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoteNamingInstanceRegisterDeregister"),(0,r.kt)("td",{parentName:"tr",align:null},"Remote Naming Instance Register and Deregister Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Registering or Deregistering Service Instances, only including gRPC access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoteNamingInstanceBatchRegister"),(0,r.kt)("td",{parentName:"tr",align:null},"Remote Naming Instance Batch Register Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Batch Registering Service Instances, only including gRPC access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoteNamingServiceListQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Remote Naming Service List Query Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service List Query, only including gRPC access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoteNamingServiceQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Remote Naming Service Query Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service Query, only including gRPC access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoteNamingServiceSubscribeUnSubscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"Remote Naming Service Subscribe and Unsubscribe Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service Subscribe and Unsubscribe, only including gRPC access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingInstanceRegister"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming Instance Register Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Registering Service Instances, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingInstanceDeregister"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming Instance Deregister Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Deregistering Service Instances, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingInstanceUpdate"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming Instance Metadata Update Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Updating Service Instance Metadata, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingInstanceMetadataUpdate"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming Instance Batch Metadata Update Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Batch Updating Service Instance Metadata, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingServiceSubscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming Service Query and Subscribe Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service Query and Subscribe, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingInstanceQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Single Service Instance Query Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Querying Single Service Instance, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HttpHealthCheck"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Instance Heartbeat Renewal Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service Instance Heartbeat Renewal, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingServiceRegister"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Create Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Creating Services, different from ",(0,r.kt)("inlineCode",{parentName:"td"},"NamingInstanceRegister"),", this monitoring point represents the TPS for the interface of creating an empty service, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingServiceDeregister"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Delete Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Deleting Services, different from ",(0,r.kt)("inlineCode",{parentName:"td"},"NamingInstanceDeregister"),", this monitoring point represents the TPS for the interface of deleting services, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingServiceQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Query Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service Query, different from ",(0,r.kt)("inlineCode",{parentName:"td"},"NamingInstanceQuery"),", this monitoring point represents the TPS for the interface of querying service information, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingServiceListQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Service List Query Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service List Query, different from ",(0,r.kt)("inlineCode",{parentName:"td"},"NamingServiceSubscribe"),", this monitoring point represents the TPS for the interface of service list query, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NamingServiceUpdate"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Metadata Update Interface TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS Limit for Service Metadata Update, different from ",(0,r.kt)("inlineCode",{parentName:"td"},"NamingInstanceUpdate"),", this monitoring point represents the TPS for the interface of updating service metadata, only including HTTP access source"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")))),(0,r.kt)("h2",{id:"advanced-development"},"Advanced Development"),(0,r.kt)("p",null,"Nacos control plugin also supports advanced extensions to meet the higher requirements of developers and users in this aspect."),(0,r.kt)("h3",{id:"external-storage-for-control-rules"},"External Storage for Control Rules"),(0,r.kt)("p",null,"By default, the Nacos control plugin only supports storing and modifying control rules for individual nodes through the local file system. For users with large-scale or multiple clusters, adjusting each node individually can be time-consuming and cumbersome. Additionally, in many containerized environments, there may be issues with disk mounting and persistence for the local file system."),(0,r.kt)("p",null,"To address these concerns, the Nacos control plugin allows the option to add an external storage for unified storage and distribution of control rules. This external storage can be implemented by the plugin itself, such as using a ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration center"),"."),(0,r.kt)("p",null,"To enable external storage for control rules, you need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.spi.ExternalRuleStorageBuilder")," interface in your plugin development, and place the plugin jar file along with the interface implementation in the ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/plugins")," directory."),(0,r.kt)("p",null,"After placing the plugin files, you need to modify the following configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"nacos.plugin.control.rule.external.storage=${controlPluginName}\n")),(0,r.kt)("p",null,"Afterwards, restart the Nacos node for the changes to take effect."),(0,r.kt)("h3",{id:"dynamic-loading-of-control-rules"},"Dynamic Loading of Control Rules"),(0,r.kt)("p",null,"In custom plugin implementations, there are two ways to dynamically load contrl rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.ControlManagerCenter#reloadTpsControlRule")," method or ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.ControlManagerCenter#reloadConnectionControlRule")," method.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Publish a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionLimitRuleChangeEvent")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TpsControlRuleChangeEvent")," event using ",(0,r.kt)("inlineCode",{parentName:"p"},"NotifyCenter.publishEvent()"),"."))),(0,r.kt)("p",null,"These methods allow you to reload and update the control rules dynamically in your custom plugin implementation."),(0,r.kt)("h3",{id:"custom-format-parse-for-control-rules"},"Custom Format Parse for Control Rules"),(0,r.kt)("p",null,"By default, Nacos uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Json")," format as the text format for control rules. However, plugin developers can use other formats such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Yaml")," or other custom formats for parsing."),(0,r.kt)("p",null,"To use a custom format for rule parsing, you can override the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.connection.ConnectionControlManager#buildConnectionControlRuleParser")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.tps.TpsControlManager#buildTpsControlRuleParser")," methods. Implement a custom format rule parser by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleParser")," that can parse rules in your desired format. Nacos will then use this custom rule parser to parse the rule text."),(0,r.kt)("p",null,"Additionally, you can enhance the default custom rules by parsing them into more advanced rules. This can be done in combination with the custom logic of your plugin, allowing for more advanced control."),(0,r.kt)("h4",{id:"1.2"}),(0,r.kt)("h3",{id:"custom-time-windows-for-tps"},"Custom Time Windows for TPS"),(0,r.kt)("p",null,"It is well-known that different time window algorithms can lead to significant differences in TPS statistics. Nacos defaults to a simple per-second statistical method, where TPS is counted based on clock seconds. This is sufficient for most scenarios, but for users with higher accuracy requirements, more precise methods such as sliding windows may be needed for TPS statistics."),(0,r.kt)("p",null,"In such cases, plugin developers can customize the time window and statistical methods for TPS by inheriting from ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.tps.barrier.TpsBarrier")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.tps.barrier.RuleBarrier"),". Additionally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.control.tps.TpsControlManager#buildTpsBarrierCreator")," method needs to be overridden. This allows for the generation of the corresponding custom implementation during plugin initialization and dynamic loading of control rules."),(0,r.kt)("p",null,"By implementing these customizations, plugin developers can control the time window and statistical methods used for TPS in a way that meets the specific accuracy requirements of their users."))}d.isMDXComponent=!0}}]);