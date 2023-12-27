"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34170:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Oracle Cloud Infrastructure",keywords:["hudi","hive","oracle cloud","storage","spark"],summary:"In this page, we go over how to configure hudi with Oracle Cloud Infrastructure Object Storage.",last_modified_at:new Date("2022-03-04T00:57:05.000Z")},i=void 0,c={unversionedId:"oci_hoodie",id:"oci_hoodie",title:"Oracle Cloud Infrastructure",description:"The Oracle Object Storage system provides strongly-consistent operations on all buckets in all regions. OCI Object Storage provides an HDFS Connector your Application will need to access data.",source:"@site/docs/oci_hoodie.md",sourceDirName:".",slug:"/oci_hoodie",permalink:"/cn/docs/next/oci_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/oci_hoodie.md",tags:[],version:"current",frontMatter:{title:"Oracle Cloud Infrastructure",keywords:["hudi","hive","oracle cloud","storage","spark"],summary:"In this page, we go over how to configure hudi with Oracle Cloud Infrastructure Object Storage.",last_modified_at:"2022-03-04T00:57:05.000Z"},sidebar:"docs",previous:{title:"JuiceFS",permalink:"/cn/docs/next/jfs_hoodie"},next:{title:"Overview",permalink:"/cn/docs/next/faq"}},l=[{value:"OCI Configs",id:"oci-configs",children:[{value:"Configuring the HDFS Connector",id:"configuring-the-hdfs-connector",children:[],level:3},{value:"Libraries",id:"libraries",children:[],level:3},{value:"Construct an OCI HDFS URI",id:"construct-an-oci-hdfs-uri",children:[],level:3}],level:2}],s={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en-us/iaas/Content/Object/Concepts/objectstorageoverview.htm"},"Oracle Object Storage")," system provides strongly-consistent operations on all buckets in all regions. OCI Object Storage provides an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/hdfsconnector.htm"},"HDFS Connector")," your Application will need to access data."),(0,o.kt)("h2",{id:"oci-configs"},"OCI Configs"),(0,o.kt)("p",null,"To use HUDI on OCI Object Storage you must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure the HDFS Connector using an API key"),(0,o.kt)("li",{parentName:"ul"},"Include the HDFS Connector and dependencies in your application"),(0,o.kt)("li",{parentName:"ul"},"Construct an OCI HDFS URI")),(0,o.kt)("h3",{id:"configuring-the-hdfs-connector"},"Configuring the HDFS Connector"),(0,o.kt)("p",null,"The OCI HDFS Connector requires configurations from an API key to authenticate and select the correct region. Start by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm"},"generating an API key"),"."),(0,o.kt)("p",null,"If you are using Hadoop, include these in your core-site.xml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.oci.client.auth.tenantId</name>\n    <value>ocid1.tenancy.oc1..[tenant]</value>\n    <description>The OCID of your OCI tenancy</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.userId</name>\n    <value>ocid1.user.oc1..[user]</value>\n    <description>The OCID of your OCI user</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.fingerprint</name>\n    <value>XX::XX</value>\n    <description>Your 32-digit hexidecimal public key fingerprint</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.pemfilepath</name>\n    <value>/path/to/file</value>\n    <description>Local path to your private key file</description>\n  </property>\n\n  <property>\n    <name>fs.oci.client.auth.hostname</name>\n    <value>https://objectstorage.[region].oraclecloud.com</value>\n    <description>HTTPS endpoint of your regional object store</description>\n  </property>\n")),(0,o.kt)("p",null,"If you are using Spark outside of Hadoop, set these configurations in your Spark Session:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"spark.hadoop.fs.oci.client.auth.tenantId"),(0,o.kt)("td",{parentName:"tr",align:null},"The OCID of your OCI tenancy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"spark.hadoop.fs.oci.client.auth.userId"),(0,o.kt)("td",{parentName:"tr",align:null},"The OCID of your OCI user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"spark.hadoop.fs.oci.client.auth.fingerprint"),(0,o.kt)("td",{parentName:"tr",align:null},"Your 32-digit hexidecimal public key fingerprint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"spark.hadoop.fs.oci.client.auth.pemfilepath"),(0,o.kt)("td",{parentName:"tr",align:null},"Local path to your private key file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"spark.hadoop.fs.oci.client.hostname"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS endpoint of your regional object store")))),(0,o.kt)("p",null,"If you are running Spark in OCI Data Flow you do not need to configure these settings, object storage access is configured for you."),(0,o.kt)("h3",{id:"libraries"},"Libraries"),(0,o.kt)("p",null,"These libraries need to be added to your application. The versions below are a reference, the libraries are continuously updated and you should check for later releases in Maven Central."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"com.oracle.oci.sdk:oci-java-sdk-core:2.18.0"),(0,o.kt)("li",{parentName:"ul"},"com.oracle.oci.sdk:oci-hdfs-connector:3.3.0.5")),(0,o.kt)("h3",{id:"construct-an-oci-hdfs-uri"},"Construct an OCI HDFS URI"),(0,o.kt)("p",null,"OCI HDFS URIs have the form of:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"oci://<bucket>@<namespace>/<path>")),(0,o.kt)("p",null,"The HDFS connector allows you to treat these locations similar to an ",(0,o.kt)("inlineCode",{parentName:"p"},"HDFS")," location on Hadoop. Your tenancy has a unique Object Storage namespace. If you're not sure what your namespace is you can find it by installing the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/cliinstall.htm"},"OCI CLI")," and running ",(0,o.kt)("inlineCode",{parentName:"p"},"oci os ns get"),"."))}p.isMDXComponent=!0}}]);