"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[88394],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),p=r,u=d["".concat(s,".").concat(p)]||d[p]||g[p]||i;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9230:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(96540),r=t(92303);function i(e){let{children:n,url:i}=e;return(0,r.A)()&&(t.g.window.location.href=i),a.createElement("span",null,n,"or click ",a.createElement("a",{href:i},"here"))}},27151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680)),i=t(9230);const o={title:"How Zoom implemented streaming log ingestion and efficient GDPR deletes using Apache Hudi on Amazon EMR",authors:[{name:"Sekar Srinivasan"},{name:"Amit Kumar Agrawal"},{name:"Chandra Dhandapani"},{name:"Viral Shah"}],category:"blog",image:"/assets/images/blog/2023-05-16-how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr.png",tags:["use-case","streaming ingestion","gdpr deletion","deletes","amazon"]},l=void 0,s={permalink:"/cn/blog/2023/05/16/how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-05-16-how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr.mdx",source:"@site/blog/2023-05-16-how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr.mdx",title:"How Zoom implemented streaming log ingestion and efficient GDPR deletes using Apache Hudi on Amazon EMR",description:"Redirecting... please wait!!",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[{label:"use-case",permalink:"/cn/blog/tags/use-case"},{label:"streaming ingestion",permalink:"/cn/blog/tags/streaming-ingestion"},{label:"gdpr deletion",permalink:"/cn/blog/tags/gdpr-deletion"},{label:"deletes",permalink:"/cn/blog/tags/deletes"},{label:"amazon",permalink:"/cn/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Sekar Srinivasan"},{name:"Amit Kumar Agrawal"},{name:"Chandra Dhandapani"},{name:"Viral Shah"}],prevItem:{title:"Hudi Metafields demystified",permalink:"/cn/blog/2023/05/19/hudi-metafields-demystified"},nextItem:{title:"Ingesting data to Apache Hudi using Spark sql",permalink:"/cn/blog/2023/05/12/ingesting-data-to-apache-hudi-using-spark-sql"}},m={authorsImageUrls:[void 0,void 0,void 0,void 0]},c=[],d={toc:c},g="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)(i.A,{url:"https://aws.amazon.com/blogs/big-data/how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr/",mdxType:"Redirect"},"Redirecting... please wait!! "))}p.isMDXComponent=!0}}]);