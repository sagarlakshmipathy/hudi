"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[99335],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9230:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(96540),n=a(92303);function i(e){let{children:t,url:i}=e;return(0,n.A)()&&(a.g.window.location.href=i),r.createElement("span",null,t,"or click ",r.createElement("a",{href:i},"here"))}},22896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(58168),n=(a(96540),a(15680)),i=a(9230);const o={title:"Ingest streaming data to Apache Hudi tables using AWS Glue and Apache Hudi DeltaStreamer",authors:[{name:"Vishal Pathak"},{name:"Anand Prakash"},{name:"Noritaka Sekiyama"}],category:"blog",image:"/assets/images/blog/2022-10-06_Ingest_streaming_data_to_Apache_Hudi_tables_using_AWS_Glue_and_DeltaStreamer.png",tags:["how-to","streaming ingestion","deltastreamer","amazon"]},l=void 0,s={permalink:"/blog/2022/10/06/Ingest-streaming-data-to-Apache-Hudi-using-AWS-Glue-and-DeltaStreamer",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-10-06-Ingest-streaming-data-to-Apache-Hudi-using-AWS-Glue-and-DeltaStreamer.mdx",source:"@site/blog/2022-10-06-Ingest-streaming-data-to-Apache-Hudi-using-AWS-Glue-and-DeltaStreamer.mdx",title:"Ingest streaming data to Apache Hudi tables using AWS Glue and Apache Hudi DeltaStreamer",description:"Redirecting... please wait!!",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"streaming ingestion",permalink:"/blog/tags/streaming-ingestion"},{label:"deltastreamer",permalink:"/blog/tags/deltastreamer"},{label:"amazon",permalink:"/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Vishal Pathak"},{name:"Anand Prakash"},{name:"Noritaka Sekiyama"}],prevItem:{title:"What, Why and How : Apache Hudi\u2019s Bloom Index",permalink:"/blog/2022/10/08/what-why-and-how-apache-hudis-bloom-index"},nextItem:{title:"Data processing with Spark: time traveling",permalink:"/blog/2022/09/28/Data-processing-with-Spark-time-traveling"}},c={authorsImageUrls:[void 0,void 0,void 0]},u=[],m={toc:u},p="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(i.A,{url:"https://aws.amazon.com/blogs/big-data/ingest-streaming-data-to-apache-hudi-tables-using-aws-glue-and-apache-hudi-deltastreamer/",mdxType:"Redirect"},"Redirecting... please wait!! "))}g.isMDXComponent=!0}}]);