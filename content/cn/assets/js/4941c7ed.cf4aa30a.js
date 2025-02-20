"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[72322],{27232:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"record_payload","title":"Record Payload","description":"Background","source":"@site/versioned_docs/version-0.14.1/record_payload.md","sourceDirName":".","slug":"/record_payload","permalink":"/cn/docs/0.14.1/record_payload","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/record_payload.md","tags":[],"version":"0.14.1","frontMatter":{"title":"Record Payload","keywords":["hudi","merge","upsert","precombine"],"toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Concurrency Control","permalink":"/cn/docs/0.14.1/concurrency_control"},"next":{"title":"SQL DDL","permalink":"/cn/docs/0.14.1/sql_ddl"}}');var n=r(74848),o=r(28453);const d={title:"Record Payload",keywords:["hudi","merge","upsert","precombine"],toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},t=void 0,s={},l=[{value:"Background",id:"background",level:3},{value:"Configs",id:"configs",level:3},{value:"Existing Payloads",id:"existing-payloads",level:3},{value:"OverwriteWithLatestAvroPayload",id:"overwritewithlatestavropayload",level:4},{value:"DefaultHoodieRecordPayload",id:"defaulthoodierecordpayload",level:4},{value:"EventTimeAvroPayload",id:"eventtimeavropayload",level:4},{value:"OverwriteNonDefaultsWithLatestAvroPayload",id:"overwritenondefaultswithlatestavropayload",level:4},{value:"PartialUpdateAvroPayload",id:"partialupdateavropayload",level:4},{value:"Summary",id:"summary",level:3}];function c(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h3,{id:"background",children:"Background"}),"\n",(0,n.jsx)(a.p,{children:"One of the core features of Hudi is the ability to incrementally upsert data, deduplicate and merge records on the fly.\nAdditionally, users can implement their custom logic to merge the input records with the record on storage. Record\npayload is an abstract representation of a Hudi record that allows the aforementioned capability. As we shall see below,\nHudi provides out-of-box support for different payloads for different use cases. But, first let us understand how record\npayload is used in the Hudi upsert path."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)("img",{className:"docimage",src:r(41426).A,alt:"upsert_path.png"})}),"\n",(0,n.jsx)(a.p,{children:"Figure above shows the main stages that records go through while being written to the Hudi table. In the precombining\nstage, Hudi performs any deduplication based on the payload implementation and precombine key configured by the user.\nFurther, on index lookup, Hudi identifies which records are being updated and the record payload implementation tells\nHudi how to merge the incoming record with the existing record on storage."}),"\n",(0,n.jsx)(a.h3,{id:"configs",children:"Configs"}),"\n",(0,n.jsxs)(a.p,{children:["Payload class can be specified using the below configs. For more advanced configs refer ",(0,n.jsx)(a.a,{href:"https://hudi.apache.org/docs/configurations#RECORD_PAYLOAD",children:"here"})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Spark based configs;"})}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Config Name"}),(0,n.jsx)(a.th,{children:"Default"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsx)(a.tbody,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"hoodie.datasource.write.payload.class"}),(0,n.jsx)(a.td,{children:"org.apache.hudi.common.model.OverwriteWithLatestAvroPayload (Optional)"}),(0,n.jsxs)(a.td,{children:["Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for PRECOMBINE_FIELD_OPT_VAL in-effective",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"Config Param: WRITE_PAYLOAD_CLASS_NAME"})]})]})})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Flink based configs:"})}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Config Name"}),(0,n.jsx)(a.th,{children:"Default"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsx)(a.tbody,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"payload.class"}),(0,n.jsx)(a.td,{children:"org.apache.hudi.common.model.EventTimeAvroPayload (Optional)"}),(0,n.jsxs)(a.td,{children:["Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for the option in-effective",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsx)(a.code,{children:"Config Param: PAYLOAD_CLASS_NAME"})]})]})})]}),"\n",(0,n.jsx)(a.h3,{id:"existing-payloads",children:"Existing Payloads"}),"\n",(0,n.jsx)(a.h4,{id:"overwritewithlatestavropayload",children:"OverwriteWithLatestAvroPayload"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteWithLatestAvroPayload\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This is the default record payload implementation. It picks the record with the greatest value (determined by calling\n",(0,n.jsx)(a.code,{children:".compareTo()"})," on the value of precombine key) to break ties and simply picks the latest record while merging. This gives\nlatest-write-wins style semantics."]}),"\n",(0,n.jsx)(a.h4,{id:"defaulthoodierecordpayload",children:"DefaultHoodieRecordPayload"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.DefaultHoodieRecordPayload\n"})}),"\n",(0,n.jsxs)(a.p,{children:["While ",(0,n.jsx)(a.code,{children:"OverwriteWithLatestAvroPayload"})," precombines based on an ordering field and picks the latest record while merging,\n",(0,n.jsx)(a.code,{children:"DefaultHoodieRecordPayload"})," honors the ordering field for both precombinig and merging. Let's understand the difference with an example:"]}),"\n",(0,n.jsxs)(a.p,{children:["Let's say the ordering field is ",(0,n.jsx)(a.code,{children:"ts"})," and record key is ",(0,n.jsx)(a.code,{children:"id"})," and schema is:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:"Current record in storage:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,n.jsx)(a.p,{children:"Incoming record:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"    id      ts      name    price\n    1       1       name_1    price_1\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Result data after merging using ",(0,n.jsx)(a.code,{children:"OverwriteWithLatestAvroPayload"})," (latest-write-wins):"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"    id      ts      name    price\n    1       1       name_1  price_1\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Result data after merging using ",(0,n.jsx)(a.code,{children:"DefaultHoodieRecordPayload"})," (always honors ordering field):"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,n.jsx)(a.h4,{id:"eventtimeavropayload",children:"EventTimeAvroPayload"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.EventTimeAvroPayload\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This is the default record payload for Flink based writing. Some use cases require merging records by event time and\nthus event time plays the role of an ordering field. This payload is particularly useful in the case of late-arriving data.\nFor such use cases, users need to set the ",(0,n.jsx)(a.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"payload event time field"})," configuration."]}),"\n",(0,n.jsx)(a.h4,{id:"overwritenondefaultswithlatestavropayload",children:"OverwriteNonDefaultsWithLatestAvroPayload"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteNonDefaultsWithLatestAvroPayload\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This payload is quite similar to ",(0,n.jsx)(a.code,{children:"OverwriteWithLatestAvroPayload"})," with slight difference while merging records. For\nprecombining, just like ",(0,n.jsx)(a.code,{children:"OverwriteWithLatestAvroPayload"}),", it picks the latest record for a key, based on an ordering\nfield. While merging, it overwrites the existing record on storage only for the specified ",(0,n.jsx)(a.strong,{children:"fields that don't equal\ndefault value"})," for that field."]}),"\n",(0,n.jsx)(a.h4,{id:"partialupdateavropayload",children:"PartialUpdateAvroPayload"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.PartialUpdateAvroPayload\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This payload supports partial update. Typically, once the merge step resolves which record to pick, then the record on\nstorage is fully replaced by the resolved record. But, in some cases, the requirement is to update only certain fields\nand not replace the whole record. This is called partial update. ",(0,n.jsx)(a.code,{children:"PartialUpdateAvroPayload"})," provides out-of-box support\nfor such use cases. To illustrate the point, let us look at a simple example:"]}),"\n",(0,n.jsxs)(a.p,{children:["Let's say the ordering field is ",(0,n.jsx)(a.code,{children:"ts"})," and record key is ",(0,n.jsx)(a.code,{children:"id"})," and schema is:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:"Current record in storage:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"    id      ts      name    price\n    1       2       name_1  null\n"})}),"\n",(0,n.jsx)(a.p,{children:"Incoming record:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"    id      ts      name    price\n    1       1       null    price_1\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Result data after merging using ",(0,n.jsx)(a.code,{children:"PartialUpdateAvroPayload"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"    id      ts      name    price\n    1       2       name_1  price_1\n"})}),"\n",(0,n.jsx)(a.h3,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(a.p,{children:["In this document, we highlighted the role of record payload to support fast incremental ETL with updates and deletes. We\nalso talked about some payload implementations readily provided by Hudi. There are quite a few other implementations\nand developers would be interested in looking at the hierarchy of ",(0,n.jsx)(a.code,{children:"HoodieRecordPayload"})," interface. For\nexample, ",(0,n.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/MySqlDebeziumAvroPayload.java",children:(0,n.jsx)(a.code,{children:"MySqlDebeziumAvroPayload"})}),"\nand ",(0,n.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/PostgresDebeziumAvroPayload.java",children:(0,n.jsx)(a.code,{children:"PostgresDebeziumAvroPayload"})}),"\nprovides support for seamlessly applying changes captured via Debezium for MySQL and PostgresDB.\n",(0,n.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/AWSDmsAvroPayload.java",children:(0,n.jsx)(a.code,{children:"AWSDmsAvroPayload"})}),"\nprovides support for applying changes captured via Amazon Database Migration Service onto S3."]}),"\n",(0,n.jsxs)(a.p,{children:["Record payloads are tunable to suit many use cases. Please check out the configurations\nlisted ",(0,n.jsx)(a.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"here"}),". Moreover, if users want to implement their own custom merge logic,\nplease check out ",(0,n.jsx)(a.a,{href:"faq_writing_tables/#can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage",children:"this FAQ"}),". In a\nseparate document, we will talk about a new record merger API for optimized payload handling."]})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>d,x:()=>t});var i=r(96540);const n={},o=i.createContext(n);function d(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(o.Provider,{value:a},e.children)}},41426:(e,a,r)=>{r.d(a,{A:()=>i});const i=r.p+"assets/images/upsert_path-0935f9caee7f799b5ba273d3b077c87d.png"}}]);