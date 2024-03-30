"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[46102],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),l=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(a.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,y=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(y,c(c({ref:n},p),{},{components:t})):o.createElement(y,c({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43898:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=t(58168),r=(t(96540),t(15680));const i={version:"0.8.0",title:"COS Filesystem",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:new Date("2020-04-21T22:50:50.000Z"),language:"cn"},c=void 0,s={unversionedId:"cos_hoodie",id:"version-0.8.0/cos_hoodie",title:"COS Filesystem",description:"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Tencent Cloud COS\u5b58\u50a8\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.8.0/cos_hoodie.md",sourceDirName:".",slug:"/cos_hoodie",permalink:"/cn/docs/0.8.0/cos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/cos_hoodie.md",tags:[],version:"0.8.0",frontMatter:{version:"0.8.0",title:"COS Filesystem",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:"2020-04-21T22:50:50.000Z",language:"cn"},sidebar:"version-0.8.0/docs",previous:{title:"Azure \u6587\u4ef6\u7cfb\u7edf",permalink:"/cn/docs/0.8.0/azure_hoodie"},next:{title:"IBM Cloud Object Storage Filesystem",permalink:"/cn/docs/0.8.0/ibm_cos_hoodie"}},a=[{value:"Tencent Cloud COS \u90e8\u7f72",id:"tencent-cloud-cos-\u90e8\u7f72",children:[{value:"Tencent Cloud COS \u76f8\u5173\u7684\u914d\u7f6e",id:"tencent-cloud-cos-\u76f8\u5173\u7684\u914d\u7f6e",children:[],level:3},{value:"Tencent Cloud COS Libs",id:"tencent-cloud-cos-libs",children:[],level:3}],level:2}],l={toc:a},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Tencent Cloud COS\u5b58\u50a8\u3002"),(0,r.yg)("h2",{id:"tencent-cloud-cos-\u90e8\u7f72"},"Tencent Cloud COS \u90e8\u7f72"),(0,r.yg)("p",null,"\u4e3a\u4e86\u8ba9Hudi\u4f7f\u7528COS\uff0c\u9700\u8981\u589e\u52a0\u4e24\u90e8\u5206\u7684\u914d\u7f6e:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e3aHidi\u589e\u52a0Tencent Cloud COS\u7684\u76f8\u5173\u914d\u7f6e"),(0,r.yg)("li",{parentName:"ul"},"\u589e\u52a0Jar\u5305\u7684MVN\u4f9d\u8d56")),(0,r.yg)("h3",{id:"tencent-cloud-cos-\u76f8\u5173\u7684\u914d\u7f6e"},"Tencent Cloud COS \u76f8\u5173\u7684\u914d\u7f6e"),(0,r.yg)("p",null,"\u65b0\u589e\u4e0b\u9762\u7684\u914d\u7f6e\u5230\u4f60\u7684Hudi\u80fd\u8bbf\u95ee\u7684core-site.xml\u6587\u4ef6\u3002\u4f7f\u7528\u4f60\u7684COS bucket name\u66ff\u6362\u6389",(0,r.yg)("inlineCode",{parentName:"p"},"fs.defaultFS"),"\uff0c\u4f7f\u7528COS\u7684key\u548csecret\u5206\u522b\u66ff\u6362",(0,r.yg)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretKey"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretId"),"\u3002\u4e3b\u8981Hudi\u5c31\u80fd\u8bfb\u5199\u76f8\u5e94\u7684bucket\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"    <property>\n        <name>fs.defaultFS</name>\n        <value>cosn://bucketname</value>\n        <description>COS bucket name</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretId</name>\n        <value>cos-secretId</value>\n        <description>Tencent Cloud Secret Id</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretKey</name>\n        <value>cos-secretkey</value>\n        <description>Tencent Cloud Secret Key</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.region</name>\n        <value>ap-region</value>\n        <description>The region where the bucket is located.</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.endpoint_suffix</name>\n        <value>cos.endpoint.suffix</value>\n        <description>\n          COS endpoint to connect to.\n          For public cloud users, it is recommended not to set this option, and only the correct area field is required.\n        </description>\n    </property>\n\n    <property>\n        <name>fs.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosFileSystem</value>\n        <description>The implementation class of the CosN Filesystem.</description>\n    </property>\n\n    <property>\n        <name>fs.AbstractFileSystem.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosN</value>\n        <description>The implementation class of the CosN AbstractFileSystem.</description>\n    </property>\n\n")),(0,r.yg)("h3",{id:"tencent-cloud-cos-libs"},"Tencent Cloud COS Libs"),(0,r.yg)("p",null,"\u6dfb\u52a0COS\u4f9d\u8d56jar\u5305\u5230classpath"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-cos:2.8.5")))}u.isMDXComponent=!0}}]);