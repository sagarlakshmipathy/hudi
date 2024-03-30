"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[23041],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85754:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(58168),i=(r(96540),r(15680));const a={title:"File Layouts",toc:!0},o=void 0,l={unversionedId:"file_layouts",id:"version-0.12.1/file_layouts",title:"File Layouts",description:"The following describes the general file layout structure for Apache Hudi",source:"@site/versioned_docs/version-0.12.1/file_layouts.md",sourceDirName:".",slug:"/file_layouts",permalink:"/cn/docs/0.12.1/file_layouts",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/file_layouts.md",tags:[],version:"0.12.1",frontMatter:{title:"File Layouts",toc:!0},sidebar:"docs",previous:{title:"Indexing",permalink:"/cn/docs/0.12.1/indexing"},next:{title:"Metadata Table",permalink:"/cn/docs/0.12.1/metadata"}},c=[],s={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The following describes the general file layout structure for Apache Hudi"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Hudi organizes data tables into a directory structure under a base path on a distributed file system"),(0,i.yg)("li",{parentName:"ul"},"Tables are broken up into partitions"),(0,i.yg)("li",{parentName:"ul"},"Within each partition, files are organized into file groups, uniquely identified by a file ID"),(0,i.yg)("li",{parentName:"ul"},"Each file group contains several file slices "),(0,i.yg)("li",{parentName:"ul"},"Each slice contains a base file (",(0,i.yg)("em",{parentName:"li"},".parquet) produced at a certain commit/compaction instant time, along with set of log files ("),".log.*) that contain inserts/updates to the base file since the base file was produced. ")),(0,i.yg)("p",null,"Hudi adopts Multiversion Concurrency Control (MVCC), where ",(0,i.yg)("a",{parentName:"p",href:"/docs/compaction"},"compaction")," action merges logs and base files to produce new\nfile slices and ",(0,i.yg)("a",{parentName:"p",href:"/docs/hoodie_cleaner"},"cleaning")," action gets rid of unused/older file slices to reclaim space on the file system."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Partition On HDFS",src:r(43541).A})))}p.isMDXComponent=!0},43541:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/hudi_partitions_HDFS-5f9da4e0c57c9ee20b74b31c035ba0e6.png"}}]);