"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1857],{15680:(e,r,o)=>{o.d(r,{xA:()=>d,yg:()=>f});var t=o(96540);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),u=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},d=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(o),g=n,f=s["".concat(c,".").concat(g)]||s[g]||p[g]||a;return o?t.createElement(f,i(i({ref:r},d),{},{components:o})):t.createElement(f,i({ref:r},d))}));function f(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},15157:(e,r,o)=>{o.r(r),o.d(r,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=o(58168),n=(o(96540),o(15680));const a={title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2021-10-12T02:50:00.000Z")},i=void 0,l={unversionedId:"cloud",id:"version-0.14.1/cloud",title:"Cloud Storage",description:"Talking to Cloud Storage",source:"@site/versioned_docs/version-0.14.1/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/cn/docs/cloud",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/cloud.md",tags:[],version:"0.14.1",frontMatter:{title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2021-10-12T02:50:00.000Z"},sidebar:"docs",previous:{title:"Flink Tuning",permalink:"/cn/docs/flink_tuning"},next:{title:"AWS S3",permalink:"/cn/docs/s3_hoodie"}},c=[{value:"Talking to Cloud Storage",id:"talking-to-cloud-storage",children:[],level:2}],u={toc:c},d="wrapper";function s(e){let{components:r,...o}=e;return(0,n.yg)(d,(0,t.A)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"talking-to-cloud-storage"},"Talking to Cloud Storage"),(0,n.yg)("p",null,"Immaterial of whether RDD/WriteClient APIs or Datasource is used, the following information helps configure access\nto cloud stores."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/s3_hoodie"},"AWS S3")," ",(0,n.yg)("br",null),"\nConfigurations required for S3 and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/gcs_hoodie"},"Google Cloud Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for GCS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/oss_hoodie"},"Alibaba Cloud OSS")," ",(0,n.yg)("br",null),"\nConfigurations required for OSS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/azure_hoodie"},"Microsoft Azure")," ",(0,n.yg)("br",null),"\nConfigurations required for Azure and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/cos_hoodie"},"Tencent Cloud Object Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for COS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/ibm_cos_hoodie"},"IBM Cloud Object Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for IBM Cloud Object Storage and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"bos_hoodie"},"Baidu Cloud Object Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for BOS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"jfs_hoodie"},"JuiceFS")," ",(0,n.yg)("br",null),"\nConfigurations required for JuiceFS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"oci_hoodie"},"Oracle Cloud Infrastructure")," ",(0,n.yg)("br",null),"\nConfigurations required for OCI and Hudi co-operability.")),(0,n.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.yg)("div",{parentName:"div",className:"admonition-heading"},(0,n.yg)("h5",{parentName:"div"},(0,n.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.yg)("div",{parentName:"div",className:"admonition-content"},(0,n.yg)("p",{parentName:"div"},"Many cloud object storage systems like ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/s3/"},"Amazon S3")," allow you to set\nlifecycle policies, such as ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"},"S3 Lifecycle"),",\nto manage objects. One of the policies is related to object expiration. If your organisation has configured such policies,\nthen please ensure to exclude (or have a longer expiry period) for Hudi tables."))))}s.isMDXComponent=!0}}]);