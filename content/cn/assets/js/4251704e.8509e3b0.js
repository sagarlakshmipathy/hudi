"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[50819],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),h=a,m=s["".concat(c,".").concat(h)]||s[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={title:"Apache Hudi Support on Apache Zeppelin",excerpt:"Integrating HUDI's real-time and read-optimized query capabilities into Apache Zeppelin\u2019s notebook",author:"leesf",category:"blog",tags:["how-to","apache zeppelin","apache hudi"]},i=void 0,p={permalink:"/cn/blog/2020/04/27/apache-hudi-apache-zepplin",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-04-27-apache-hudi-apache-zepplin.md",source:"@site/blog/2020-04-27-apache-hudi-apache-zepplin.md",title:"Apache Hudi Support on Apache Zeppelin",description:"1. Introduction",date:"2020-04-27T00:00:00.000Z",formattedDate:"April 27, 2020",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"apache zeppelin",permalink:"/cn/blog/tags/apache-zeppelin"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:2.23,truncated:!0,authors:[{name:"leesf"}],prevItem:{title:"Monitor Hudi metrics with Datadog",permalink:"/cn/blog/2020/05/28/monitoring-hudi-metrics-with-datadog"},nextItem:{title:"Export Hudi datasets as a copy or as different formats",permalink:"/cn/blog/2020/03/22/exporting-hudi-datasets"}},c={authorsImageUrls:[void 0]},l=[{value:"1. Introduction",id:"1-introduction",children:[],level:2}],u={toc:l},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"1-introduction"},"1. Introduction"),(0,a.yg)("p",null,"Apache Zeppelin is a web-based notebook that provides interactive data analysis. It is convenient for you to make beautiful documents that can be data-driven, interactive, and collaborative, and supports multiple languages, including Scala (using Apache Spark), Python (Apache Spark), SparkSQL, Hive, Markdown, Shell, and so on. Hive and SparkSQL currently support querying Hudi\u2019s read-optimized view and real-time view. So in theory, Zeppelin\u2019s notebook should also have such query capabilities."))}d.isMDXComponent=!0}}]);