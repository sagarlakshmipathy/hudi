"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[85899],{28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}},86686:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"cos_hoodie","title":"Tencent Cloud","description":"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS.","source":"@site/versioned_docs/version-0.12.3/cos_hoodie.md","sourceDirName":".","slug":"/cos_hoodie","permalink":"/cn/docs/0.12.3/cos_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/cos_hoodie.md","tags":[],"version":"0.12.3","frontMatter":{"title":"Tencent Cloud","keywords":["hudi","hive","tencent","cos","spark","presto"],"summary":"In this page, we go over how to configure Hudi with COS filesystem.","last_modified_at":"2020-04-21T21:38:24.000Z"},"sidebar":"docs","previous":{"title":"Microsoft Azure","permalink":"/cn/docs/0.12.3/azure_hoodie"},"next":{"title":"IBM Cloud","permalink":"/cn/docs/0.12.3/ibm_cos_hoodie"}}');var s=o(74848),i=o(28453);const r={title:"Tencent Cloud",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:new Date("2020-04-21T21:38:24.000Z")},c=void 0,d={},l=[{value:"Tencent Cloud COS configs",id:"tencent-cloud-cos-configs",level:2},{value:"Tencent Cloud COS Credentials",id:"tencent-cloud-cos-credentials",level:3},{value:"Tencent Cloud COS Libs",id:"tencent-cloud-cos-libs",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS."}),"\n",(0,s.jsx)(n.h2,{id:"tencent-cloud-cos-configs",children:"Tencent Cloud COS configs"}),"\n",(0,s.jsx)(n.p,{children:"There are two configurations required for Hudi-COS compatibility:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adding Tencent Cloud COS Credentials for Hudi"}),"\n",(0,s.jsx)(n.li,{children:"Adding required Jars to classpath"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tencent-cloud-cos-credentials",children:"Tencent Cloud COS Credentials"}),"\n",(0,s.jsxs)(n.p,{children:["Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,s.jsx)(n.code,{children:"fs.defaultFS"})," with your COS bucket name, replace ",(0,s.jsx)(n.code,{children:"fs.cosn.userinfo.secretId"})," with your COS secret Id, replace ",(0,s.jsx)(n.code,{children:"fs.cosn.userinfo.secretKey"})," with your COS key. Hudi should be able to read/write from the bucket."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"    <property>\n        <name>fs.defaultFS</name>\n        <value>cosn://bucketname</value>\n        <description>COS bucket name</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretId</name>\n        <value>cos-secretId</value>\n        <description>Tencent Cloud Secret Id</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretKey</name>\n        <value>cos-secretkey</value>\n        <description>Tencent Cloud Secret Key</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.region</name>\n        <value>ap-region</value>\n        <description>The region where the bucket is located.</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.endpoint_suffix</name>\n        <value>cos.endpoint.suffix</value>\n        <description>\n          COS endpoint to connect to. \n          For public cloud users, it is recommended not to set this option, and only the correct area field is required.\n        </description>\n    </property>\n\n    <property>\n        <name>fs.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosFileSystem</value>\n        <description>The implementation class of the CosN Filesystem.</description>\n    </property>\n\n    <property>\n        <name>fs.AbstractFileSystem.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosN</value>\n        <description>The implementation class of the CosN AbstractFileSystem.</description>\n    </property>\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tencent-cloud-cos-libs",children:"Tencent Cloud COS Libs"}),"\n",(0,s.jsx)(n.p,{children:"COS hadoop libraries to add to our classpath"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"org.apache.hadoop:hadoop-cos:2.8.5"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);