"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[31945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(c,".").concat(g)]||d[g]||b[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6746:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(72389);function o(e){let{children:t,url:o}=e;return(0,a.Z)()&&(r.g.window.location.href=o),n.createElement("span",null,t,"or click ",n.createElement("a",{href:o},"here"))}},96726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(6746);const i={title:"Apache Hudi: From Zero To One (4/10)",excerpt:"All about writer indexes",author:"Shiyan Xu",category:"blog",image:"/assets/images/blog/2023-09-27-Apache-Hudi-From-Zero-To-One-blog-4.png",tags:["blog","apache hudi","indexing","bloom index","record index","datumagic","hbase index","bucket index"]},l=void 0,c={permalink:"/cn/blog/2023/09/27/Apache-Hudi-From-Zero-To-One-blog-4",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-09-27-Apache-Hudi-From-Zero-To-One-blog-4.mdx",source:"@site/blog/2023-09-27-Apache-Hudi-From-Zero-To-One-blog-4.mdx",title:"Apache Hudi: From Zero To One (4/10)",description:"Redirecting... please wait!!",date:"2023-09-27T00:00:00.000Z",formattedDate:"September 27, 2023",tags:[{label:"blog",permalink:"/cn/blog/tags/blog"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"},{label:"indexing",permalink:"/cn/blog/tags/indexing"},{label:"bloom index",permalink:"/cn/blog/tags/bloom-index"},{label:"record index",permalink:"/cn/blog/tags/record-index"},{label:"datumagic",permalink:"/cn/blog/tags/datumagic"},{label:"hbase index",permalink:"/cn/blog/tags/hbase-index"},{label:"bucket index",permalink:"/cn/blog/tags/bucket-index"}],readingTime:.045,truncated:!1,authors:[{name:"Shiyan Xu"}],prevItem:{title:"Apache Hudi: Copy on Write(CoW) Table",permalink:"/cn/blog/2023/10/06/Apache-Hudi-Copy-on-Write-CoW-Table"},nextItem:{title:"Exploring the Architecture of Apache Iceberg, Delta Lake, and Apache Hudi",permalink:"/cn/blog/2023/09/22/Exploring-the-Architecture-of-Apache-Iceberg-Delta-Lake-and-Apache-Hudi"}},p={authorsImageUrls:[void 0]},u=[],d={toc:u},b="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{url:"https://blog.datumagic.com/p/apache-hudi-from-zero-to-one-410",mdxType:"Redirect"},"Redirecting... please wait!! "))}g.isMDXComponent=!0}}]);