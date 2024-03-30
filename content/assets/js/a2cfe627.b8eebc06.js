"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[19369],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9230:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(96540),n=a(92303);function l(e){let{children:t,url:l}=e;return(0,n.A)()&&(a.g.window.location.href=l),r.createElement("span",null,t,"or click ",r.createElement("a",{href:l},"here"))}},40319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(58168),n=(a(96540),a(15680)),l=a(9230);const i={title:"How NerdWallet uses AWS and Apache Hudi to build a serverless, real-time analytics platform",authors:[{name:"Kevin Chun"},{name:"Dylan Qu"}],category:"blog",image:"/assets/images/blog/2022-08-09-How-NerdWallet-uses-AWS-and-Apache-Hudi-to-build-a-serverless-real-time-analytics-platform.png",tags:["use-case","near real-time analytics","incremental processing","amazon"]},o=void 0,s={permalink:"/blog/2022/08/09/How-NerdWallet-uses-AWS-and-Apache-Hudi-to-build-a-serverless-real-time-analytics-platform",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-08-09-How-NerdWallet-uses-AWS-and-Apache-Hudi-to-build-a-serverless-real-time-analytics-platform.mdx",source:"@site/blog/2022-08-09-How-NerdWallet-uses-AWS-and-Apache-Hudi-to-build-a-serverless-real-time-analytics-platform.mdx",title:"How NerdWallet uses AWS and Apache Hudi to build a serverless, real-time analytics platform",description:"Redirecting... please wait!!",date:"2022-08-09T00:00:00.000Z",formattedDate:"August 9, 2022",tags:[{label:"use-case",permalink:"/blog/tags/use-case"},{label:"near real-time analytics",permalink:"/blog/tags/near-real-time-analytics"},{label:"incremental processing",permalink:"/blog/tags/incremental-processing"},{label:"amazon",permalink:"/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Kevin Chun"},{name:"Dylan Qu"}],prevItem:{title:"Use Flink Hudi to Build a Streaming Data Lake Platform",permalink:"/blog/2022/08/12/Use-Flink-Hudi-to-Build-a-Streaming-Data-Lake-Platform"},nextItem:{title:"Build Open Lakehouse using Apache Hudi & dbt",permalink:"/blog/2022/07/11/build-open-lakehouse-using-apache-hudi-and-dbt"}},c={authorsImageUrls:[void 0,void 0]},u=[],p={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(l.A,{url:"https://aws.amazon.com/blogs/big-data/how-nerdwallet-uses-aws-and-apache-hudi-to-build-a-serverless-real-time-analytics-platform/",mdxType:"Redirect"},"Redirecting... please wait!! "))}d.isMDXComponent=!0}}]);