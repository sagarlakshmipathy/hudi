"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1506],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),y=r,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return t?o.createElement(f,c(c({ref:n},u),{},{components:t})):o.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},76648:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=t(58168),r=(t(96540),t(15680));const i={title:"Tencent Cloud",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:new Date("2020-04-21T21:38:24.000Z")},c=void 0,a={unversionedId:"cos_hoodie",id:"cos_hoodie",title:"Tencent Cloud",description:"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS.",source:"@site/docs/cos_hoodie.md",sourceDirName:".",slug:"/cos_hoodie",permalink:"/docs/next/cos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/cos_hoodie.md",tags:[],version:"current",frontMatter:{title:"Tencent Cloud",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:"2020-04-21T21:38:24.000Z"},sidebar:"docs",previous:{title:"Microsoft Azure",permalink:"/docs/next/azure_hoodie"},next:{title:"IBM Cloud",permalink:"/docs/next/ibm_cos_hoodie"}},s=[{value:"Tencent Cloud COS configs",id:"tencent-cloud-cos-configs",children:[{value:"Tencent Cloud COS Credentials",id:"tencent-cloud-cos-credentials",children:[],level:3},{value:"Tencent Cloud COS Libs",id:"tencent-cloud-cos-libs",children:[],level:3}],level:2}],l={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS."),(0,r.yg)("h2",{id:"tencent-cloud-cos-configs"},"Tencent Cloud COS configs"),(0,r.yg)("p",null,"There are two configurations required for Hudi-COS compatibility:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Adding Tencent Cloud COS Credentials for Hudi"),(0,r.yg)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,r.yg)("h3",{id:"tencent-cloud-cos-credentials"},"Tencent Cloud COS Credentials"),(0,r.yg)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your COS bucket name, replace ",(0,r.yg)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretId")," with your COS secret Id, replace ",(0,r.yg)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretKey")," with your COS key. Hudi should be able to read/write from the bucket."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"    <property>\n        <name>fs.defaultFS</name>\n        <value>cosn://bucketname</value>\n        <description>COS bucket name</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretId</name>\n        <value>cos-secretId</value>\n        <description>Tencent Cloud Secret Id</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretKey</name>\n        <value>cos-secretkey</value>\n        <description>Tencent Cloud Secret Key</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.region</name>\n        <value>ap-region</value>\n        <description>The region where the bucket is located.</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.endpoint_suffix</name>\n        <value>cos.endpoint.suffix</value>\n        <description>\n          COS endpoint to connect to. \n          For public cloud users, it is recommended not to set this option, and only the correct area field is required.\n        </description>\n    </property>\n\n    <property>\n        <name>fs.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosFileSystem</value>\n        <description>The implementation class of the CosN Filesystem.</description>\n    </property>\n\n    <property>\n        <name>fs.AbstractFileSystem.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosN</value>\n        <description>The implementation class of the CosN AbstractFileSystem.</description>\n    </property>\n\n")),(0,r.yg)("h3",{id:"tencent-cloud-cos-libs"},"Tencent Cloud COS Libs"),(0,r.yg)("p",null,"COS hadoop libraries to add to our classpath"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-cos:2.8.5")))}p.isMDXComponent=!0}}]);