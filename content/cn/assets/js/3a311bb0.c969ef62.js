"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[86480],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),s=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(d.Provider,{value:r},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=n,g=c["".concat(d,".").concat(u)]||c[u]||y[u]||o;return t?a.createElement(g,i(i({ref:r},p),{},{components:t})):a.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4645:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(58168),n=(t(96540),t(15680));const o={title:"Record Payload",keywords:["hudi","merge","upsert","precombine"]},i=void 0,l={unversionedId:"record_payload",id:"version-0.13.1/record_payload",title:"Record Payload",description:"Record Payload",source:"@site/versioned_docs/version-0.13.1/record_payload.md",sourceDirName:".",slug:"/record_payload",permalink:"/cn/docs/0.13.1/record_payload",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/record_payload.md",tags:[],version:"0.13.1",frontMatter:{title:"Record Payload",keywords:["hudi","merge","upsert","precombine"]},sidebar:"docs",previous:{title:"Concurrency Control",permalink:"/cn/docs/0.13.1/concurrency_control"},next:{title:"SQL DDL",permalink:"/cn/docs/0.13.1/table_management"}},d=[{value:"Record Payload",id:"record-payload",children:[{value:"Existing Payloads",id:"existing-payloads",children:[{value:"OverwriteWithLatestAvroPayload",id:"overwritewithlatestavropayload",children:[],level:4},{value:"DefaultHoodieRecordPayload",id:"defaulthoodierecordpayload",children:[],level:4},{value:"EventTimeAvroPayload",id:"eventtimeavropayload",children:[],level:4},{value:"OverwriteNonDefaultsWithLatestAvroPayload",id:"overwritenondefaultswithlatestavropayload",children:[],level:4},{value:"PartialUpdateAvroPayload",id:"partialupdateavropayload",children:[],level:4}],level:3},{value:"Summary",id:"summary",children:[],level:3}],level:2}],s={toc:d},p="wrapper";function c(e){let{components:r,...o}=e;return(0,n.yg)(p,(0,a.A)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"record-payload"},"Record Payload"),(0,n.yg)("p",null,"One of the core features of Hudi is the ability to incrementally upsert data, deduplicate and merge records on the fly.\nAdditionally, users can implement their custom logic to merge the input records with the record on storage. Record\npayload is an abstract representation of a Hudi record that allows the aforementioned capability. As we shall see below,\nHudi provides out-of-the-box support for different payloads for different use cases. But, first let us understand how record\npayload is used in the Hudi upsert path."),(0,n.yg)("figure",null,(0,n.yg)("img",{className:"docimage",src:t(41426).A,alt:"upsert_path.png"})),(0,n.yg)("p",null,"Figure above shows the main stages that records go through while being written to the Hudi table. In the precombining\nstage, Hudi performs any deduplication based on the payload implementation and precombine key configured by the user.\nFurther, on index lookup, Hudi identifies which records are being updated and the record payload implementation tells\nHudi how to merge the incoming record with the existing record on storage."),(0,n.yg)("h3",{id:"existing-payloads"},"Existing Payloads"),(0,n.yg)("h4",{id:"overwritewithlatestavropayload"},"OverwriteWithLatestAvroPayload"),(0,n.yg)("p",null,"This is the default record payload implementation. It picks the record with the greatest value (determined by calling\n",(0,n.yg)("inlineCode",{parentName:"p"},".compareTo()")," on the value of precombine key) to break ties and simply picks the latest record while merging. This gives\nlatest-write-wins style semantics."),(0,n.yg)("h4",{id:"defaulthoodierecordpayload"},"DefaultHoodieRecordPayload"),(0,n.yg)("p",null,"While ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload")," precombines based on an ordering field and picks the latest record while merging,\n",(0,n.yg)("inlineCode",{parentName:"p"},"DefaultHoodieRecordPayload")," honors the ordering field for both precombining and merging. Let's understand the difference with an example:"),(0,n.yg)("p",null,"Let's say the ordering field is ",(0,n.yg)("inlineCode",{parentName:"p"},"ts")," and record key is ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," and schema is:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n')),(0,n.yg)("p",null,"Current record in storage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_2  price_2\n")),(0,n.yg)("p",null,"Incoming record:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       1       name_1    price_1\n")),(0,n.yg)("p",null,"Result data after merging using ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload")," (latest-write-wins):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       1       name_1  price_1\n")),(0,n.yg)("p",null,"Result data after merging using ",(0,n.yg)("inlineCode",{parentName:"p"},"DefaultHoodieRecordPayload")," (always honors ordering field):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_2  price_2\n")),(0,n.yg)("h4",{id:"eventtimeavropayload"},"EventTimeAvroPayload"),(0,n.yg)("p",null,"Some use cases require merging records by event time and thus event time plays the role of an ordering field. This\npayload is particularly useful in the case of late-arriving data. For such use cases, users need to set\nthe ",(0,n.yg)("a",{parentName:"p",href:"/docs/configurations#RECORD_PAYLOAD"},"payload event time field")," configuration."),(0,n.yg)("h4",{id:"overwritenondefaultswithlatestavropayload"},"OverwriteNonDefaultsWithLatestAvroPayload"),(0,n.yg)("p",null,"This payload is quite similar to ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload")," with slight difference while merging records. For\nprecombining, just like ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload"),", it picks the latest record for a key, based on an ordering\nfield. While merging, it overwrites the existing record on storage only for the specified ",(0,n.yg)("strong",{parentName:"p"},"fields that do not equal\nthe default value")," for that field."),(0,n.yg)("h4",{id:"partialupdateavropayload"},"PartialUpdateAvroPayload"),(0,n.yg)("p",null,"This payload supports partial update. Typically, once the merge step resolves which record to pick, then the record on\nstorage is fully replaced by the resolved record. But, in some cases, the requirement is to update only certain fields\nand not replace the whole record. This is called partial update. ",(0,n.yg)("inlineCode",{parentName:"p"},"PartialUpdateAvroPayload")," provides out-of-box support\nfor such use cases. To illustrate the point, let us look at a simple example:"),(0,n.yg)("p",null,"Let's say the ordering field is ",(0,n.yg)("inlineCode",{parentName:"p"},"ts")," and record key is ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," and schema is:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n')),(0,n.yg)("p",null,"Current record in storage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_1  null\n")),(0,n.yg)("p",null,"Incoming record:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       1       null    price_1\n")),(0,n.yg)("p",null,"Result data after merging using ",(0,n.yg)("inlineCode",{parentName:"p"},"PartialUpdateAvroPayload"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_1  price_1\n")),(0,n.yg)("h3",{id:"summary"},"Summary"),(0,n.yg)("p",null,"In this document, we highlighted the role of record payload to support fast incremental ETL with updates and deletes. We\nalso talked about some payload implementations readily provided by Hudi. There are quite a few other implementations\nand developers would be interested in looking at the hierarchy of ",(0,n.yg)("inlineCode",{parentName:"p"},"HoodieRecordPayload")," interface. For\nexample, ",(0,n.yg)("inlineCode",{parentName:"p"},"MySqlDebeziumAvroPayload")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"PostgresDebeziumAvroPayload")," provides support for seamlessly applying changes\ncaptured via Debezium for MySQL and PostgresDB. ",(0,n.yg)("inlineCode",{parentName:"p"},"AWSDmsAvroPayload")," provides support for applying changes captured via\nAmazon Database Migration Service onto S3."),(0,n.yg)("p",null,"Record payloads are tunable to suit many use cases. Please check out the configurations\nlisted ",(0,n.yg)("a",{parentName:"p",href:"/docs/configurations#RECORD_PAYLOAD"},"here"),". Moreover, if users want to implement their own custom merge logic,\nplease check\nout ",(0,n.yg)("a",{parentName:"p",href:"/docs/faq/#can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage"},"this FAQ"),". In a\nseparate document, we will talk about a new record merger API for optimized payload handling."))}c.isMDXComponent=!0},41426:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/upsert_path-0935f9caee7f799b5ba273d3b077c87d.png"}}]);