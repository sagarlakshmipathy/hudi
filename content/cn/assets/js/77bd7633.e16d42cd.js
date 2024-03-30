"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[13786],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>y});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=t.createContext({}),s=function(e){var a=t.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=s(e.components);return t.createElement(d.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,y=c["".concat(d,".").concat(u)]||c[u]||g[u]||o;return r?t.createElement(y,i(i({ref:a},p),{},{components:r})):t.createElement(y,i({ref:a},p))}));function y(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74468:(e,a,r)=>{r.r(a),r.d(a,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=r(58168),n=(r(96540),r(15680));const o={title:"Record Payload",keywords:["hudi","merge","upsert","precombine"],toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},i=void 0,l={unversionedId:"record_payload",id:"record_payload",title:"Record Payload",description:"Background",source:"@site/docs/record_payload.md",sourceDirName:".",slug:"/record_payload",permalink:"/cn/docs/next/record_payload",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/record_payload.md",tags:[],version:"current",frontMatter:{title:"Record Payload",keywords:["hudi","merge","upsert","precombine"],toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Key Generation",permalink:"/cn/docs/next/key_generation"},next:{title:"Schema Evolution",permalink:"/cn/docs/next/schema_evolution"}},d=[{value:"Background",id:"background",children:[],level:3},{value:"Configs",id:"configs",children:[],level:3},{value:"Existing Payloads",id:"existing-payloads",children:[{value:"OverwriteWithLatestAvroPayload",id:"overwritewithlatestavropayload",children:[],level:4},{value:"DefaultHoodieRecordPayload",id:"defaulthoodierecordpayload",children:[],level:4},{value:"EventTimeAvroPayload",id:"eventtimeavropayload",children:[],level:4},{value:"OverwriteNonDefaultsWithLatestAvroPayload",id:"overwritenondefaultswithlatestavropayload",children:[],level:4},{value:"PartialUpdateAvroPayload",id:"partialupdateavropayload",children:[],level:4}],level:3},{value:"Summary",id:"summary",children:[],level:3}],s={toc:d},p="wrapper";function c(e){let{components:a,...o}=e;return(0,n.yg)(p,(0,t.A)({},s,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"background"},"Background"),(0,n.yg)("p",null,"One of the core features of Hudi is the ability to incrementally upsert data, deduplicate and merge records on the fly.\nAdditionally, users can implement their custom logic to merge the input records with the record on storage. Record\npayload is an abstract representation of a Hudi record that allows the aforementioned capability. As we shall see below,\nHudi provides out-of-box support for different payloads for different use cases. But, first let us understand how record\npayload is used in the Hudi upsert path."),(0,n.yg)("figure",null,(0,n.yg)("img",{className:"docimage",src:r(41426).A,alt:"upsert_path.png"})),(0,n.yg)("p",null,"Figure above shows the main stages that records go through while being written to the Hudi table. In the precombining\nstage, Hudi performs any deduplication based on the payload implementation and precombine key configured by the user.\nFurther, on index lookup, Hudi identifies which records are being updated and the record payload implementation tells\nHudi how to merge the incoming record with the existing record on storage."),(0,n.yg)("h3",{id:"configs"},"Configs"),(0,n.yg)("p",null,"Payload class can be specified using the below configs. For more advanced configs refer ",(0,n.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#RECORD_PAYLOAD"},"here")," "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Spark based configs;")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"hoodie.datasource.write.payload.class"),(0,n.yg)("td",{parentName:"tr",align:null},"org.apache.hudi.common.model.OverwriteWithLatestAvroPayload (Optional)"),(0,n.yg)("td",{parentName:"tr",align:null},"Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for PRECOMBINE_FIELD_OPT_VAL in-effective",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"Config Param: WRITE_PAYLOAD_CLASS_NAME"))))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Flink based configs:")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"payload.class"),(0,n.yg)("td",{parentName:"tr",align:null},"org.apache.hudi.common.model.EventTimeAvroPayload (Optional)"),(0,n.yg)("td",{parentName:"tr",align:null},"Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for the option in-effective",(0,n.yg)("br",null),(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"Config Param: PAYLOAD_CLASS_NAME"))))),(0,n.yg)("h3",{id:"existing-payloads"},"Existing Payloads"),(0,n.yg)("h4",{id:"overwritewithlatestavropayload"},"OverwriteWithLatestAvroPayload"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteWithLatestAvroPayload\n")),(0,n.yg)("p",null,"This is the default record payload implementation. It picks the record with the greatest value (determined by calling\n",(0,n.yg)("inlineCode",{parentName:"p"},".compareTo()")," on the value of precombine key) to break ties and simply picks the latest record while merging. This gives\nlatest-write-wins style semantics."),(0,n.yg)("h4",{id:"defaulthoodierecordpayload"},"DefaultHoodieRecordPayload"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.DefaultHoodieRecordPayload\n")),(0,n.yg)("p",null,"While ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload")," precombines based on an ordering field and picks the latest record while merging,\n",(0,n.yg)("inlineCode",{parentName:"p"},"DefaultHoodieRecordPayload")," honors the ordering field for both precombinig and merging. Let's understand the difference with an example:"),(0,n.yg)("p",null,"Let's say the ordering field is ",(0,n.yg)("inlineCode",{parentName:"p"},"ts")," and record key is ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," and schema is:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n')),(0,n.yg)("p",null,"Current record in storage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_2  price_2\n")),(0,n.yg)("p",null,"Incoming record:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       1       name_1    price_1\n")),(0,n.yg)("p",null,"Result data after merging using ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload")," (latest-write-wins):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       1       name_1  price_1\n")),(0,n.yg)("p",null,"Result data after merging using ",(0,n.yg)("inlineCode",{parentName:"p"},"DefaultHoodieRecordPayload")," (always honors ordering field):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_2  price_2\n")),(0,n.yg)("h4",{id:"eventtimeavropayload"},"EventTimeAvroPayload"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.EventTimeAvroPayload\n")),(0,n.yg)("p",null,"This is the default record payload for Flink based writing. Some use cases require merging records by event time and\nthus event time plays the role of an ordering field. This payload is particularly useful in the case of late-arriving data.\nFor such use cases, users need to set the ",(0,n.yg)("a",{parentName:"p",href:"/docs/configurations#RECORD_PAYLOAD"},"payload event time field")," configuration."),(0,n.yg)("h4",{id:"overwritenondefaultswithlatestavropayload"},"OverwriteNonDefaultsWithLatestAvroPayload"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteNonDefaultsWithLatestAvroPayload\n")),(0,n.yg)("p",null,"This payload is quite similar to ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload")," with slight difference while merging records. For\nprecombining, just like ",(0,n.yg)("inlineCode",{parentName:"p"},"OverwriteWithLatestAvroPayload"),", it picks the latest record for a key, based on an ordering\nfield. While merging, it overwrites the existing record on storage only for the specified ",(0,n.yg)("strong",{parentName:"p"},"fields that don't equal\ndefault value")," for that field."),(0,n.yg)("h4",{id:"partialupdateavropayload"},"PartialUpdateAvroPayload"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.PartialUpdateAvroPayload\n")),(0,n.yg)("p",null,"This payload supports partial update. Typically, once the merge step resolves which record to pick, then the record on\nstorage is fully replaced by the resolved record. But, in some cases, the requirement is to update only certain fields\nand not replace the whole record. This is called partial update. ",(0,n.yg)("inlineCode",{parentName:"p"},"PartialUpdateAvroPayload")," provides out-of-box support\nfor such use cases. To illustrate the point, let us look at a simple example:"),(0,n.yg)("p",null,"Let's say the ordering field is ",(0,n.yg)("inlineCode",{parentName:"p"},"ts")," and record key is ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," and schema is:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n')),(0,n.yg)("p",null,"Current record in storage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_1  null\n")),(0,n.yg)("p",null,"Incoming record:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       1       null    price_1\n")),(0,n.yg)("p",null,"Result data after merging using ",(0,n.yg)("inlineCode",{parentName:"p"},"PartialUpdateAvroPayload"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    id      ts      name    price\n    1       2       name_1  price_1\n")),(0,n.yg)("h3",{id:"summary"},"Summary"),(0,n.yg)("p",null,"In this document, we highlighted the role of record payload to support fast incremental ETL with updates and deletes. We\nalso talked about some payload implementations readily provided by Hudi. There are quite a few other implementations\nand developers would be interested in looking at the hierarchy of ",(0,n.yg)("inlineCode",{parentName:"p"},"HoodieRecordPayload")," interface. For\nexample, ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/MySqlDebeziumAvroPayload.java"},(0,n.yg)("inlineCode",{parentName:"a"},"MySqlDebeziumAvroPayload")),"\nand ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/PostgresDebeziumAvroPayload.java"},(0,n.yg)("inlineCode",{parentName:"a"},"PostgresDebeziumAvroPayload")),"\nprovides support for seamlessly applying changes captured via Debezium for MySQL and PostgresDB.\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/AWSDmsAvroPayload.java"},(0,n.yg)("inlineCode",{parentName:"a"},"AWSDmsAvroPayload")),"\nprovides support for applying changes captured via Amazon Database Migration Service onto S3."),(0,n.yg)("p",null,"Record payloads are tunable to suit many use cases. Please check out the configurations\nlisted ",(0,n.yg)("a",{parentName:"p",href:"/docs/configurations#RECORD_PAYLOAD"},"here"),". Moreover, if users want to implement their own custom merge logic,\nplease check out ",(0,n.yg)("a",{parentName:"p",href:"/docs/next/faq_writing_tables/#can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage"},"this FAQ"),". In a\nseparate document, we will talk about a new record merger API for optimized payload handling."))}c.isMDXComponent=!0},41426:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/upsert_path-0935f9caee7f799b5ba273d3b077c87d.png"}}]);