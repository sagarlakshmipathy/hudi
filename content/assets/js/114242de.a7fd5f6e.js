"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[64700],{6238:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var r=i(15799),n=i(74848),a=i(28453);const s={title:"Record Mergers in Apache Hudi",excerpt:"Explain need for record mergers in Apache Hudi and implemenation details",author:"Aditya Goenka",category:"blog",image:"/assets/images/blog/2025-03-03-record-mergers-in-apache-hudi.png",tags:["Data Lake","Data Lakehouse","Apache Hudi","Record Mergers","Record payloads","Late Arriving Data"]},o=void 0,d={authorsImageUrls:[void 0]},c=[{value:"The Challenge of Unordered Streams of Events",id:"the-challenge-of-unordered-streams-of-events",level:2},{value:"Data Integrity",id:"data-integrity",level:4},{value:"Complexity in Processing",id:"complexity-in-processing",level:4},{value:"What are Record Mergers",id:"what-are-record-mergers",level:2},{value:"1. Merging input data before writing : Combining Change Records During Writes",id:"1-merging-input-data-before-writing--combining-change-records-during-writes",level:4},{value:"2. Merging Final Change Record in CoW (Copy-on-Write) Tables: Applying Changes to Existing Records",id:"2-merging-final-change-record-in-cow-copy-on-write-tables-applying-changes-to-existing-records",level:4},{value:"3. Compaction Merge in MoR (Merge-on-Read) Tables : Merging Log Files with Base Files",id:"3-compaction-merge-in-mor-merge-on-read-tables--merging-log-files-with-base-files",level:4},{value:"4. Query-Time Merge: Merging Log Files with Base Files in MoR (Merge-on-Read) Tables",id:"4-query-time-merge-merging-log-files-with-base-files-in-mor-merge-on-read-tables",level:4},{value:"Implementation",id:"implementation",level:2},{value:"1. COMMIT_TIME_ORDERING",id:"1-commit_time_ordering",level:4},{value:"2. EVENT_TIME_ORDERING (DEFAULT)",id:"2-event_time_ordering-default",level:4},{value:"3. CUSTOM",id:"3-custom",level:4},{value:"Record Payloads",id:"record-payloads",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"the-challenge-of-unordered-streams-of-events",children:"The Challenge of Unordered Streams of Events"}),"\n",(0,n.jsx)(t.p,{children:"One of the primary challenges associated with streaming workloads is the unordered nature of incoming events. In a typical streaming scenario, events can arrive out of sequence due to network latency, processing delays, or other factors. With the increasing volume and velocity of data being ingested from various sources\u2014especially in mobile applications and IoT platforms\u2014data processing frameworks must be equipped to handle mutations (i.e., changes to records) and out-of-order events.\nTraditional data storage systems and file formats, such as those optimized for batch processing, often struggle to manage these scenarios effectively. Hudi steps in with features specifically designed to handle such challenges.\nWhen events or changes to a record arrive at different times, they may not be in the same order in which they were originally generated. For example, in a smart city traffic monitoring system, sensors may report vehicle speeds at various intersections in real-time. However, due to network issues or delays, some sensor data might arrive later than others, possibly out of order. To handle this, the system needs to merge the new incoming data with existing records efficiently. Just like how Hudi\u2019s merge modes control the merging of records with the same key in a storage system, ensuring consistency and accuracy, it ensures that the final traffic data reflects the correct event times, even when some data arrives with a delay. These merge modes help maintain a consistent, deterministic result under heavy load, making sure that late data updates the right records without causing inconsistencies.\nThis can lead to several issues:"}),"\n",(0,n.jsx)(t.h4,{id:"data-integrity",children:"Data Integrity"}),"\n",(0,n.jsx)(t.p,{children:"When events are processed out of order, it can result in incorrect or inconsistent data states. For example, if an event representing a transaction is processed before the event that indicates the account balance, the resulting data may not accurately reflect the true state of the system."}),"\n",(0,n.jsx)(t.h4,{id:"complexity-in-processing",children:"Complexity in Processing"}),"\n",(0,n.jsx)(t.p,{children:"Handling unordered events often requires additional logic to ensure that data is processed in the correct sequence. This can complicate the data pipeline and increase the likelihood of errors."}),"\n",(0,n.jsx)(t.h2,{id:"what-are-record-mergers",children:"What are Record Mergers"}),"\n",(0,n.jsx)(t.p,{children:"With the new api introduced with version 1.0.0, Hudi supports three primary merge modes, each suited to different stages of data processing: writing, compaction, and querying.\n4 places/points of data processing [Subheader]"}),"\n",(0,n.jsx)(t.h4,{id:"1-merging-input-data-before-writing--combining-change-records-during-writes",children:"1. Merging input data before writing : Combining Change Records During Writes"}),"\n",(0,n.jsx)(t.p,{children:"When new data arrives for an existing record, Hudi performs deduplication on the input dataset. This process involves combining multiple change records for the same record key before the write phase. This is an optimization that also helps reduce the number of records written to the log files (in case of MOR). By merging changes upfront, Hudi reduces unnecessary records, improving the efficiency of both query and write operations.\nThis step is crucial for handling stream data in real-time, where changes may arrive rapidly, and ensuring that only the final version of the record is written into the system. Normally these out of order events come together commonly in the same batch,  With processing engines like spark, which deals with micro-batches, merging the input changes helps in reduces the number of records which needs to be written."}),"\n",(0,n.jsx)(t.h4,{id:"2-merging-final-change-record-in-cow-copy-on-write-tables-applying-changes-to-existing-records",children:"2. Merging Final Change Record in CoW (Copy-on-Write) Tables: Applying Changes to Existing Records"}),"\n",(0,n.jsx)(t.p,{children:"In Copy-on-Write (CoW) tables, changes are applied by creating new file versions for the records. When an update, partial update, or delete operation occurs, Hudi will merge this final change with the existing record in the storage. The merge mode controls how these updates are applied, ensuring that only the most recent changes are reflected and the table\u2019s data remains consistent.\nThis is especially important in CoW tables, as they preserve immutability of historical data by writing new versions of the records instead of overwriting the existing data. The merge mode ensures that the new version of the record is consistent with all previous changes."}),"\n",(0,n.jsx)(t.h4,{id:"3-compaction-merge-in-mor-merge-on-read-tables--merging-log-files-with-base-files",children:"3. Compaction Merge in MoR (Merge-on-Read) Tables : Merging Log Files with Base Files"}),"\n",(0,n.jsx)(t.p,{children:"Hudi uses a concept of log files (delta logs) and base files (original data). As changes to records accumulate over time, Hudi\u2019s compaction service merges the change records stored in the log files with the base files to keep the data consistent and query-optimized. The merge mode defines how these log records are merged with base files during the compaction process.\nCompaction helps maintain storage efficiency and ensures that queries run faster by reducing the number of small log files that might need to be read."}),"\n",(0,n.jsx)(t.h4,{id:"4-query-time-merge-merging-log-files-with-base-files-in-mor-merge-on-read-tables",children:"4. Query-Time Merge: Merging Log Files with Base Files in MoR (Merge-on-Read) Tables"}),"\n",(0,n.jsx)(t.p,{children:"In Merge-on-Read (MoR) tables, the data is stored in both log files and base files. When a query is executed, Hudi merges the change records in the log files with the base files based on the merge mode. The merge operation occurs at query time to provide the final, consistent view of the data.\nBy merging records at query time, Hudi ensures that queries reflect the most recent changes while maintaining query performance."}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.p,{children:"In common scenarios, the input data contains a field that can be used to identify the latest record. Typically, tables have fields like updated_at or other ordering columns. If no such column is present in the input, we are limited to relying on the incoming order."}),"\n",(0,n.jsxs)(t.p,{children:["After the release of Hudi 1.0.0, a new configuration, ",(0,n.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations/#hoodierecordmergemode",children:"hoodie.record.merge.mode"})," was introduced to define the merge modes responsible for handling record updates. These merge modes dictate how records with the same key are processed at different stages of the pipeline, from data ingestion to query results.\nIt can have the following three values:"]}),"\n",(0,n.jsx)(t.h4,{id:"1-commit_time_ordering",children:"1. COMMIT_TIME_ORDERING"}),"\n",(0,n.jsx)(t.p,{children:"This merge mode is used when no field is available in the input data to explicitly determine which record is the latest. The system will rely on the order of ingestion (commit time) to determine the order of records. Hudi expects records to arrive in strict order of their commits. So, the most recent record (in terms of ingestion time) is assumed to be the latest version of the record. This mode is typically used when there is no dedicated column like updated_at, timestamp, or versioning field that can indicate the order of the records.\nThe merging logic here simply picks the latest write based on the ingestion order (commit time). In a way, it's equivalent to overwriting semantics where only the most recent record is considered.\nExample -"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SET hoodie.spark.sql.insert.into.operation=upsert;\nCREATE TABLE hudi_table (\n    ts BIGINT,\n    uuid STRING,\n    rider STRING,\n    driver STRING,\n    fare DOUBLE,\n    city STRING\n) USING HUDI TBLPROPERTIES (primaryKey = 'uuid', hoodie.record.merge.mode='COMMIT_TIME_ORDERING');\n\nINSERT INTO hudi_table\nVALUES\n(3,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-A','driver-K',19.10,'san_francisco'),\n(2,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-C','driver-M',27.70 ,'san_francisco');\n\nselect * from hudi_table;\n-- Result - 20250106162911278\t20250106162911278_0_0\t334e26e9-8355-45cc-97c6-c31daf0df330\t\t08218473-f72a-480d-90e6-c6764f062e5c-0_0-43-47_20250106162911278.parquet\t1695091554788\t334e26e9-8355-45cc-97c6-c31daf0df330\trider-C\tdriver-M\t27.7\tsan_francisco\n\nINSERT INTO hudi_table\nVALUES\n(1,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-D','driver-K',19.10,'san_francisco');\n\nselect * from hudi_table;\n-- Result - 20250106163449812\t20250106163449812_0_0\t334e26e9-8355-45cc-97c6-c31daf0df330\t\t08218473-f72a-480d-90e6-c6764f062e5c-0_0-71-68_20250106163449812.parquet\t1\t334e26e9-8355-45cc-97c6-c31daf0df330\trider-D\tdriver-K\t19.1\tsan_francisco\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the example above, we created the table using the COMMIT_TIME_ORDERING merge mode. When using this mode, there is no need to specify a precombine or ordering field.\nDuring the first insert, two records with the same record key are provided. The system will deduplicate them and keep the record that is processed later.\nIn the second insert, a new record with the same record key is inserted. As expected, the table is updated with the new record because it is committed later, regardless of the values in any of the fields."}),"\n",(0,n.jsx)(t.h4,{id:"2-event_time_ordering-default",children:"2. EVENT_TIME_ORDERING (DEFAULT)"}),"\n",(0,n.jsx)(t.p,{children:'This merge mode is used when you do have a field in the input data that can be used to determine the order of events (such as a timestamp field like updated_at or a version number). If your records contain a field that can be used to track when the record was last updated (e.g., updated_at, last_modified, or a sequence number), Hudi will use this field to determine which record is the latest.\nIn this case, Hudi does not rely on the ingestion order but instead uses the value of the ordering field (updated_at, for example) to decide the correct record.\nThis approach is ideal when you have temporal or event-driven data, and you want to maintain the "latest" record according to an event timestamp.\nExample -'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TABLE hudi_table;\nSET hoodie.spark.sql.insert.into.operation=upsert;\n\nCREATE TABLE hudi_table (\n    ts BIGINT,\n    uuid STRING,\n    rider STRING,\n    driver STRING,\n    fare DOUBLE,\n    city STRING\n) USING HUDI TBLPROPERTIES (primaryKey = 'uuid',preCombineField = 'ts', hoodie.record.merge.mode='EVENT_TIME_ORDERING');\n\nINSERT INTO hudi_table\nVALUES\n(3,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-A','driver-K',19.10,'san_francisco'),\n(2,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-C','driver-M',27.70 ,'san_francisco');\n\nselect * from hudi_table;\n-- Result - 20250106165902806\t20250106165902806_0_0\t334e26e9-8355-45cc-97c6-c31daf0df330\t\t568ce7bc-9b71-4e15-b557-cbaeb5b4d2ea-0_0-56-57_20250106165902806.parquet\t3\t334e26e9-8355-45cc-97c6-c31daf0df330\trider-A\tdriver-K\t19.1\tsan_francisco\n\nINSERT INTO hudi_table\nVALUES\n(1,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-D','driver-K',18.00,'san_francisco');\n\nselect * from hudi_table;\n-- Result - 20250106165902806\t20250106165902806_0_0\t334e26e9-8355-45cc-97c6-c31daf0df330\t\t568ce7bc-9b71-4e15-b557-cbaeb5b4d2ea-0_0-84-78_20250106165918731.parquet\t3\t334e26e9-8355-45cc-97c6-c31daf0df330\trider-A\tdriver-K\t19.1\tsan_francisco\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the example above, we created the table using the EVENT_TIME_ORDERING merge mode. When using this mode, we need to specify the precombineField. In this case we are specifying ts as the precombineField.\nDuring the first insert, two records with the same record key are provided. The system will deduplicate them and keep the record that is processed later.\nIn the second insert, a new record with the same record key is inserted. As expected, the table is updated with the new record because it is committed later, regardless of the values in any of the fields."}),"\n",(0,n.jsx)(t.h4,{id:"3-custom",children:"3. CUSTOM"}),"\n",(0,n.jsxs)(t.p,{children:["For more complex use-case sometimes prior discussed merging modes won\u2019t work. We may need to implement a use-case specific merging logic.\nThe details for the implementation is provided here  - ",(0,n.jsx)(t.a,{href:"https://hudi.apache.org/docs/record_merger/#custom",children:"https://hudi.apache.org/docs/record_merger/#custom"})]}),"\n",(0,n.jsx)(t.h2,{id:"record-payloads",children:"Record Payloads"}),"\n",(0,n.jsxs)(t.p,{children:["Pre 1.0.0, Hudi uses the legacy Record Payload API, Please refer to the ",(0,n.jsx)(t.a,{href:"https://hudi.apache.org/docs/record_merger/#record-payloads",children:"Record Payloads"})," section to know about the implementation and some of the existing record payloads."]}),"\n",(0,n.jsxs)(t.p,{children:["Along with the existing payloads, Hudi provides flexibility to implement the custom record payload by implementing the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordPayload.java",children:"HoodieRecordPayload"})," interface"]}),"\n",(0,n.jsx)(t.p,{children:"The following example demonstrates the use of Record Payload, which achieves a similar outcome to what EVENT_TIME_ORDERING does. We\u2019ve used the same example as above to illustrate how this functionality works."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TABLE hudi_table;\nSET hoodie.spark.sql.insert.into.operation=upsert;\n\nCREATE TABLE hudi_table (\n    ts BIGINT,\n    uuid STRING,\n    rider STRING,\n    driver STRING,\n    fare DOUBLE,\n    city STRING\n) USING HUDI TBLPROPERTIES (primaryKey = 'uuid',preCombineField = 'ts', hoodie.datasource.write.payload.class='org.apache.hudi.common.model.DefaultHoodieRecordPayload');\n\nINSERT INTO hudi_table\nVALUES\n(3,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-A','driver-K',19.10,'san_francisco'),\n(2,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-C','driver-M',27.70 ,'san_francisco');\n\nselect * from hudi_table;\n-- Result - 20250203164444124\t20250203164444124_0_0\t334e26e9-8355-45cc-97c6-c31daf0df330\t\t4549ed8e-0346-4d59-8878-9e047fb6c651-0_0-14-17_20250203164444124.parquet\t3\t334e26e9-8355-45cc-97c6-c31daf0df330\trider-A\tdriver-K\t19.1\tsan_francisco\n\n\nINSERT INTO hudi_table\nVALUES\n(1,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-D','driver-K',18.00,'san_francisco');\n\nselect * from hudi_table;\n-- Result - 20250203164444124\t20250203164444124_0_0\t334e26e9-8355-45cc-97c6-c31daf0df330\t\t4549ed8e-0346-4d59-8878-9e047fb6c651-0_0-53-51_20250203164537068.parquet\t3\t334e26e9-8355-45cc-97c6-c31daf0df330\trider-A\tdriver-K\t19.1\tsan_francisco\n"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In conclusion, managing late-arriving and out-of-order data is a critical challenge in modern data processing systems, especially when dealing with large-scale, real-time data pipelines. Tools like Hudi provide powerful merge modes that ensure data consistency, accuracy, and efficiency by handling record updates intelligently across different stages of the pipeline. Whether you're working with streaming data, IoT sensors, or social media posts, understanding how to configure and use these merge modes can greatly improve the performance and reliability of your data storage and query processes. By leveraging the right merge strategy, you can ensure that your system remains robust, even under heavy load and with delayed data, ultimately enabling better decision-making and insights from your data."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15799:e=>{e.exports=JSON.parse('{"permalink":"/blog/2025/03/03/record-mergers-in-hudi","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2025-03-03-record-mergers-in-hudi.mdx","source":"@site/blog/2025-03-03-record-mergers-in-hudi.mdx","title":"Record Mergers in Apache Hudi","description":"The Challenge of Unordered Streams of Events","date":"2025-03-03T00:00:00.000Z","tags":[{"inline":true,"label":"Data Lake","permalink":"/blog/tags/data-lake"},{"inline":true,"label":"Data Lakehouse","permalink":"/blog/tags/data-lakehouse"},{"inline":true,"label":"Apache Hudi","permalink":"/blog/tags/apache-hudi"},{"inline":true,"label":"Record Mergers","permalink":"/blog/tags/record-mergers"},{"inline":true,"label":"Record payloads","permalink":"/blog/tags/record-payloads"},{"inline":true,"label":"Late Arriving Data","permalink":"/blog/tags/late-arriving-data"}],"readingTime":9.285,"hasTruncateMarker":false,"authors":[{"name":"Aditya Goenka","key":null,"page":null}],"frontMatter":{"title":"Record Mergers in Apache Hudi","excerpt":"Explain need for record mergers in Apache Hudi and implemenation details","author":"Aditya Goenka","category":"blog","image":"/assets/images/blog/2025-03-03-record-mergers-in-apache-hudi.png","tags":["Data Lake","Data Lakehouse","Apache Hudi","Record Mergers","Record payloads","Late Arriving Data"]},"unlisted":false,"nextItem":{"title":"Curious Engineering Facts ( Trace Agents | Hudi| Daft : 1) : March Release 18 : 25","permalink":"/blog/2025/02/25/curious-engineering-facts-trace-agents-hudi-daft-1"}}')},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var r=i(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);