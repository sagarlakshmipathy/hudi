"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[52912],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?o.createElement(m,a(a({ref:r},u),{},{components:t})):o.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},76234:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(58168),n=(t(96540),t(15680));const i={version:"0.6.0",title:"GCS Filesystem",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},a=void 0,l={unversionedId:"gcs_hoodie",id:"version-0.6.0/gcs_hoodie",title:"GCS Filesystem",description:"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.",source:"@site/versioned_docs/version-0.6.0/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/docs/0.6.0/gcs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/gcs_hoodie.md",tags:[],version:"0.6.0",frontMatter:{version:"0.6.0",title:"GCS Filesystem",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.6.0/docs",previous:{title:"S3 Filesystem",permalink:"/docs/0.6.0/s3_hoodie"},next:{title:"OSS Filesystem",permalink:"/docs/0.6.0/oss_hoodie"}},s=[{value:"GCS Configs",id:"gcs-configs",children:[{value:"GCS Credentials",id:"gcs-credentials",children:[],level:3},{value:"GCS Libs",id:"gcs-libs",children:[],level:3}],level:2}],c={toc:s},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,o.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"For Hudi storage on GCS, ",(0,n.yg)("strong",{parentName:"p"},"regional")," buckets provide an DFS API with strong consistency."),(0,n.yg)("h2",{id:"gcs-configs"},"GCS Configs"),(0,n.yg)("p",null,"There are two configurations required for Hudi GCS compatibility:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Adding GCS Credentials for Hudi"),(0,n.yg)("li",{parentName:"ul"},"Adding required jars to classpath")),(0,n.yg)("h3",{id:"gcs-credentials"},"GCS Credentials"),(0,n.yg)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,n.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your GCS bucket name and Hudi should be able to read/write from the bucket."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n")),(0,n.yg)("h3",{id:"gcs-libs"},"GCS Libs"),(0,n.yg)("p",null,"GCS hadoop libraries to add to our classpath"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2")))}p.isMDXComponent=!0}}]);