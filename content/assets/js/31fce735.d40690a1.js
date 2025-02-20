"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[58002],{28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},79032:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"oci_hoodie","title":"Oracle Cloud Infrastructure","description":"The Oracle Object Storage system provides strongly-consistent operations on all buckets in all regions. OCI Object Storage provides an HDFS Connector your Application will need to access data.","source":"@site/versioned_docs/version-0.14.1/oci_hoodie.md","sourceDirName":".","slug":"/oci_hoodie","permalink":"/docs/0.14.1/oci_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/oci_hoodie.md","tags":[],"version":"0.14.1","frontMatter":{"title":"Oracle Cloud Infrastructure","keywords":["hudi","hive","oracle cloud","storage","spark"],"summary":"In this page, we go over how to configure hudi with Oracle Cloud Infrastructure Object Storage.","last_modified_at":"2022-03-04T00:57:05.000Z"},"sidebar":"docs","previous":{"title":"JuiceFS","permalink":"/docs/0.14.1/jfs_hoodie"},"next":{"title":"Overview","permalink":"/docs/0.14.1/faq"}}');var r=o(74848),i=o(28453);const s={title:"Oracle Cloud Infrastructure",keywords:["hudi","hive","oracle cloud","storage","spark"],summary:"In this page, we go over how to configure hudi with Oracle Cloud Infrastructure Object Storage.",last_modified_at:new Date("2022-03-04T00:57:05.000Z")},c=void 0,a={},d=[{value:"OCI Configs",id:"oci-configs",level:2},{value:"Configuring the HDFS Connector",id:"configuring-the-hdfs-connector",level:3},{value:"Libraries",id:"libraries",level:3},{value:"Construct an OCI HDFS URI",id:"construct-an-oci-hdfs-uri",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/en-us/iaas/Content/Object/Concepts/objectstorageoverview.htm",children:"Oracle Object Storage"})," system provides strongly-consistent operations on all buckets in all regions. OCI Object Storage provides an ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/hdfsconnector.htm",children:"HDFS Connector"})," your Application will need to access data."]}),"\n",(0,r.jsx)(n.h2,{id:"oci-configs",children:"OCI Configs"}),"\n",(0,r.jsx)(n.p,{children:"To use HUDI on OCI Object Storage you must:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configure the HDFS Connector using an API key"}),"\n",(0,r.jsx)(n.li,{children:"Include the HDFS Connector and dependencies in your application"}),"\n",(0,r.jsx)(n.li,{children:"Construct an OCI HDFS URI"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuring-the-hdfs-connector",children:"Configuring the HDFS Connector"}),"\n",(0,r.jsxs)(n.p,{children:["The OCI HDFS Connector requires configurations from an API key to authenticate and select the correct region. Start by ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm",children:"generating an API key"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If you are using Hadoop, include these in your core-site.xml:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"  <property>\n    <name>fs.oci.client.auth.tenantId</name>\n    <value>ocid1.tenancy.oc1..[tenant]</value>\n    <description>The OCID of your OCI tenancy</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.userId</name>\n    <value>ocid1.user.oc1..[user]</value>\n    <description>The OCID of your OCI user</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.fingerprint</name>\n    <value>XX::XX</value>\n    <description>Your 32-digit hexidecimal public key fingerprint</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.pemfilepath</name>\n    <value>/path/to/file</value>\n    <description>Local path to your private key file</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.hostname</name>\n    <value>https://objectstorage.[region].oraclecloud.com</value>\n    <description>HTTPS endpoint of your regional object store</description>\n  </property>\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you are using Spark outside of Hadoop, set these configurations in your Spark Session:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spark.hadoop.fs.oci.client.auth.tenantId"}),(0,r.jsx)(n.td,{children:"The OCID of your OCI tenancy"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spark.hadoop.fs.oci.client.auth.userId"}),(0,r.jsx)(n.td,{children:"The OCID of your OCI user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spark.hadoop.fs.oci.client.auth.fingerprint"}),(0,r.jsx)(n.td,{children:"Your 32-digit hexidecimal public key fingerprint"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spark.hadoop.fs.oci.client.auth.pemfilepath"}),(0,r.jsx)(n.td,{children:"Local path to your private key file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spark.hadoop.fs.oci.client.hostname"}),(0,r.jsx)(n.td,{children:"HTTPS endpoint of your regional object store"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"If you are running Spark in OCI Data Flow you do not need to configure these settings, object storage access is configured for you."}),"\n",(0,r.jsx)(n.h3,{id:"libraries",children:"Libraries"}),"\n",(0,r.jsx)(n.p,{children:"These libraries need to be added to your application. The versions below are a reference, the libraries are continuously updated and you should check for later releases in Maven Central."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"com.oracle.oci.sdk:oci-java-sdk-core:2.18.0"}),"\n",(0,r.jsx)(n.li,{children:"com.oracle.oci.sdk:oci-hdfs-connector:3.3.0.5"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"construct-an-oci-hdfs-uri",children:"Construct an OCI HDFS URI"}),"\n",(0,r.jsx)(n.p,{children:"OCI HDFS URIs have the form of:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"oci://<bucket>@<namespace>/<path>"})}),"\n",(0,r.jsxs)(n.p,{children:["The HDFS connector allows you to treat these locations similar to an ",(0,r.jsx)(n.code,{children:"HDFS"})," location on Hadoop. Your tenancy has a unique Object Storage namespace. If you're not sure what your namespace is you can find it by installing the ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/cliinstall.htm",children:"OCI CLI"})," and running ",(0,r.jsx)(n.code,{children:"oci os ns get"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);