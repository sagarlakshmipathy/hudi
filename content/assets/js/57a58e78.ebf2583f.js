"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[46905],{28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>r});var a=t(96540);const n={},s=a.createContext(n);function o(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:i},e.children)}},94582:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"faq_general","title":"General","description":"When is Hudi useful for me or my organization?","source":"@site/versioned_docs/version-0.15.0/faq_general.md","sourceDirName":".","slug":"/faq_general","permalink":"/docs/0.15.0/faq_general","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/faq_general.md","tags":[],"version":"0.15.0","frontMatter":{"title":"General","keywords":["hudi","writing","reading"]},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/0.15.0/faq"},"next":{"title":"Design & Concepts","permalink":"/docs/0.15.0/faq_design_and_concepts"}}');var n=t(74848),s=t(28453);const o={title:"General",keywords:["hudi","writing","reading"]},r="General FAQ",l={},d=[{value:"When is Hudi useful for me or my organization?",id:"when-is-hudi-useful-for-me-or-my-organization",level:3},{value:"What are some non-goals for Hudi?",id:"what-are-some-non-goals-for-hudi",level:3},{value:"What is incremental processing? Why does Hudi docs/talks keep talking about it?",id:"what-is-incremental-processing-why-does-hudi-docstalks-keep-talking-about-it",level:3},{value:"How is Hudi optimized for CDC and streaming use cases?",id:"how-is-hudi-optimized-for-cdc-and-streaming-use-cases",level:3},{value:"How do I choose a storage type for my workload?",id:"how-do-i-choose-a-storage-type-for-my-workload",level:3},{value:"Is Hudi an analytical database?",id:"is-hudi-an-analytical-database",level:3},{value:"How do I model the data stored in Hudi?",id:"how-do-i-model-the-data-stored-in-hudi",level:3},{value:"Why does Hudi require a key field to be configured?",id:"why-does-hudi-require-a-key-field-to-be-configured",level:3},{value:"How does Hudi actually store data inside a table?",id:"how-does-hudi-actually-store-data-inside-a-table",level:3},{value:"How Hudi handles partition evolution requirements ?",id:"how-hudi-handles-partition-evolution-requirements-",level:3}];function c(e){const i={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"general-faq",children:"General FAQ"})}),"\n",(0,n.jsx)(i.h3,{id:"when-is-hudi-useful-for-me-or-my-organization",children:"When is Hudi useful for me or my organization?"}),"\n",(0,n.jsxs)(i.p,{children:["If you are looking to quickly ingest data onto HDFS or cloud storage, Hudi provides you ",(0,n.jsx)(i.a,{href:"/docs/hoodie_streaming_ingestion",children:"tools"}),". Also, if you have ETL/hive/spark jobs which are slow/taking up a lot of resources, Hudi can potentially help by providing an incremental approach to reading and writing data."]}),"\n",(0,n.jsxs)(i.p,{children:["As an organization, Hudi can help you build an ",(0,n.jsx)(i.a,{href:"https://docs.google.com/presentation/d/1FHhsvh70ZP6xXlHdVsAI0g__B_6Mpto5KQFlZ0b8-mM/edit#slide=id.p",children:"efficient data lake"}),", solving some of the most complex, low-level storage management problems, while putting data into hands of your data analysts, engineers and scientists much quicker."]}),"\n",(0,n.jsx)(i.h3,{id:"what-are-some-non-goals-for-hudi",children:"What are some non-goals for Hudi?"}),"\n",(0,n.jsx)(i.p,{children:"Hudi is not designed for any OLTP use-cases, where typically you are using existing NoSQL/RDBMS data stores. Hudi cannot replace your in-memory analytical database (at-least not yet!). Hudi support near-real time ingestion in the order of few minutes, trading off latency for efficient batching. If you truly desirable sub-minute processing delays, then stick with your favorite stream processing solution."}),"\n",(0,n.jsx)(i.h3,{id:"what-is-incremental-processing-why-does-hudi-docstalks-keep-talking-about-it",children:"What is incremental processing? Why does Hudi docs/talks keep talking about it?"}),"\n",(0,n.jsxs)(i.p,{children:["Incremental processing was first introduced by Vinoth Chandar, in the O'reilly ",(0,n.jsx)(i.a,{href:"https://www.oreilly.com/content/ubers-case-for-incremental-processing-on-hadoop/",children:"blog"}),", that set off most of this effort. In purely technical terms, incremental processing merely refers to writing mini-batch programs in streaming processing style. Typical batch jobs consume ",(0,n.jsx)(i.strong,{children:"all input"})," and recompute ",(0,n.jsx)(i.strong,{children:"all output"}),", every few hours. Typical stream processing jobs consume some ",(0,n.jsx)(i.strong,{children:"new input"})," and recompute ",(0,n.jsx)(i.strong,{children:"new/changes to output"}),", continuously/every few seconds. While recomputing all output in batch fashion can be simpler, it's wasteful and resource expensive. Hudi brings ability to author the same batch pipelines in streaming fashion, run every few minutes."]}),"\n",(0,n.jsxs)(i.p,{children:["While we can merely refer to this as stream processing, we call it ",(0,n.jsx)(i.em,{children:"incremental processing"}),", to distinguish from purely stream processing pipelines built using Apache Flink or Apache Kafka Streams."]}),"\n",(0,n.jsx)(i.h3,{id:"how-is-hudi-optimized-for-cdc-and-streaming-use-cases",children:"How is Hudi optimized for CDC and streaming use cases?"}),"\n",(0,n.jsx)(i.p,{children:"One of the core use-cases for Apache Hudi is enabling seamless, efficient database ingestion to your lake, and change data capture is a direct application of that. Hudi\u2019s core design primitives support fast upserts and deletes of data that are suitable for CDC and streaming use cases. Here is a glimpse of some of the challenges accompanying streaming and cdc workloads that Hudi handles efficiently out of the box."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"Processing of deletes:"})})," Deletes are treated no differently than updates and are logged with the same filegroups where the corresponding keys exist. This helps process deletes faster same like regular inserts and updates and Hudi processes deletes at file group level using compaction in MOR tables. This can be very expensive in other open source systems that store deletes as separate files than data files and incur N(Data files)*N(Delete files) merge cost to process deletes every time, soon lending into a complex graph problem to solve whose planning itself is expensive. This gets worse with volume, especially when dealing with CDC style workloads that streams changes to records frequently."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"Operational overhead of merging deletes at scale:"})})," When deletes are stored as separate files without any notion of data locality, the merging of data and deletes can become a run away job that cannot complete in time due to various reasons (Spark retries, executor failure, OOM, etc.). As more data files and delete files are added, the merge becomes even more expensive and complex later on, making it hard to manage in practice causing operation overhead. Hudi removes this complexity from users by treating deletes similarly to any other write operation."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"File sizing with updates:"})})," Other open source systems, process updates by generating new data files for inserting the new records after deletion, where both data files and delete files get introduced for every batch of updates. This yields to small file problem and requires file sizing. Whereas, Hudi embraces mutations to the data, and manages the table automatically by keeping file sizes in check without passing the burden of file sizing to users as manual maintenance."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"Support for partial updates and payload ordering:"})})," Hudi support partial updates where already existing record can be updated for specific fields that are non null from newer records (with newer timestamps). Similarly, Hudi supports payload ordering with timestamp through specific payload implementation where late-arriving data with older timestamps will be ignored or dropped. Users can even implement custom logic and plug in to handle what they want."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"how-do-i-choose-a-storage-type-for-my-workload",children:"How do I choose a storage type for my workload?"}),"\n",(0,n.jsxs)(i.p,{children:["A key goal of Hudi is to provide ",(0,n.jsx)(i.strong,{children:"upsert functionality"})," that is orders of magnitude faster than rewriting entire tables or partitions."]}),"\n",(0,n.jsx)(i.p,{children:"Choose Copy-on-write storage if :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"You are looking for a simple alternative, that replaces your existing parquet tables without any need for real-time data."}),"\n",(0,n.jsx)(i.li,{children:"Your current job is rewriting entire table/partition to deal with updates, while only a few files actually change in each partition."}),"\n",(0,n.jsxs)(i.li,{children:["You are happy keeping things operationally simpler (no compaction etc), with the ingestion/write performance bound by the ",(0,n.jsx)(i.a,{href:"/docs/configurations#hoodieparquetmaxfilesize",children:"parquet file size"})," and the number of such files affected/dirtied by updates"]}),"\n",(0,n.jsx)(i.li,{children:"Your workload is fairly well-understood and does not have sudden bursts of large amount of update or inserts to older partitions. COW absorbs all the merging cost on the writer side and thus these sudden changes can clog up your ingestion and interfere with meeting normal mode ingest latency targets."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Choose merge-on-read storage if :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"You want the data to be ingested as quickly & queryable as much as possible."}),"\n",(0,n.jsx)(i.li,{children:"Your workload can have sudden spikes/changes in pattern (e.g bulk updates to older transactions in upstream database causing lots of updates to old partitions on DFS). Asynchronous compaction helps amortize the write amplification caused by such scenarios, while normal ingestion keeps up with incoming stream of changes."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Immaterial of what you choose, Hudi provides"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Snapshot isolation and atomic write of batch of records"}),"\n",(0,n.jsx)(i.li,{children:"Incremental pulls"}),"\n",(0,n.jsx)(i.li,{children:"Ability to de-duplicate data"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Find more ",(0,n.jsx)(i.a,{href:"/docs/concepts/",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"is-hudi-an-analytical-database",children:"Is Hudi an analytical database?"}),"\n",(0,n.jsx)(i.p,{children:"A typical database has a bunch of long running storage servers always running, which takes writes and reads. Hudi's architecture is very different and for good reasons. It's highly decoupled where writes and queries/reads can be scaled independently to be able to handle the scale challenges. So, it may not always seems like a database."}),"\n",(0,n.jsx)(i.p,{children:"Nonetheless, Hudi is designed very much like a database and provides similar functionality (upserts, change capture) and semantics (transactional writes, snapshot isolated reads)."}),"\n",(0,n.jsx)(i.h3,{id:"how-do-i-model-the-data-stored-in-hudi",children:"How do I model the data stored in Hudi?"}),"\n",(0,n.jsxs)(i.p,{children:["When writing data into Hudi, you model the records like how you would on a key-value store - specify a key field (unique for a single partition/across table), a partition field (denotes partition to place key into) and preCombine/combine logic that specifies how to handle duplicates in a batch of records written. This model enables Hudi to enforce primary key constraints like you would get on a database table. See ",(0,n.jsx)(i.a,{href:"writing_data",children:"here"})," for an example."]}),"\n",(0,n.jsx)(i.p,{children:"When querying/reading data, Hudi just presents itself as a json-like hierarchical table, everyone is used to querying using Hive/Spark/Presto over Parquet/Json/Avro."}),"\n",(0,n.jsx)(i.h3,{id:"why-does-hudi-require-a-key-field-to-be-configured",children:"Why does Hudi require a key field to be configured?"}),"\n",(0,n.jsx)(i.p,{children:"Hudi was designed to support fast record level Upserts and thus requires a key to identify whether an incoming record is\nan insert or update or delete, and process accordingly. Additionally, Hudi automatically maintains indexes on this primary\nkey and for many use-cases like CDC, ensuring such primary key constraints is crucial to ensure data quality. In this context,\npre combine key helps reconcile multiple records with same key in a single batch of input records. Even for append-only data\nstreams, Hudi supports key based de-duplication before inserting records. For e-g; you may have atleast once data integration\nsystems like Kafka MirrorMaker that can introduce duplicates during failures. Even for plain old batch pipelines, keys\nhelp eliminate duplication that could be caused by backfill pipelines, where commonly it's unclear what set of records\nneed to be re-written. We are actively working on making keys easier by only requiring them for Upsert and/or automatically\ngenerate the key internally (much like RDBMS row_ids)"}),"\n",(0,n.jsx)(i.h3,{id:"how-does-hudi-actually-store-data-inside-a-table",children:"How does Hudi actually store data inside a table?"}),"\n",(0,n.jsxs)(i.p,{children:["At a high level, Hudi is based on MVCC design that writes data to versioned parquet/base files and log files that contain changes to the base file. All the files are stored under a partitioning scheme for the table, which closely resembles how Apache Hive tables are laid out on DFS. Please refer ",(0,n.jsx)(i.a,{href:"/docs/concepts/",children:"here"})," for more details."]}),"\n",(0,n.jsx)(i.h3,{id:"how-hudi-handles-partition-evolution-requirements-",children:"How Hudi handles partition evolution requirements ?"}),"\n",(0,n.jsx)(i.p,{children:"Hudi recommends keeping coarse grained top level partition paths e.g date(ts) and within each such partition do clustering in a flexible way to z-order, sort data based on interested columns. This provides excellent performance by : minimzing the number of files in each partition, while still packing data that will be queried together physically closer (what partitioning aims to achieve)."}),"\n",(0,n.jsxs)(i.p,{children:["Let's take an example of a table, where we store log_events with two fields ",(0,n.jsx)(i.code,{children:"ts"})," (time at which event was produced) and ",(0,n.jsx)(i.code,{children:"cust_id"})," (user for which event was produced) and a common option is to partition by both date(ts) and cust_id.\nSome users may want to start granular with hour(ts) and then later evolve to new partitioning scheme say date(ts). But this means, the number of partitions in the table could be very high - 365 days x 1K customers = at-least 365K potentially small parquet files, that can significantly slow down queries, facing throttling issues on the actual S3/DFS reads."]}),"\n",(0,n.jsx)(i.p,{children:"For the afore mentioned reasons, we don't recommend mixing different partitioning schemes within the same table, since it adds operational complexity, and unpredictable performance.\nOld data stays in old partitions and only new data gets into newer evolved partitions. If you want to tidy up the table, one has to rewrite all partition/data anwyay! This is where we suggest start with coarse grained partitions\nand lean on clustering techniques to optimize for query performance."}),"\n",(0,n.jsx)(i.p,{children:"We find that most datasets have at-least one high fidelity field, that can be used as a coarse partition. Clustering strategies in Hudi provide a lot of power - you can alter which partitions to cluster, and which fields to cluster each by etc.\nUnlike Hive partitioning, Hudi does not remove the partition field from the data files i.e if you write new partition paths, it does not mean old partitions need to be rewritten.\nPartitioning by itself is a relic of the Hive era; Hudi is working on replacing partitioning with database like indexing schemes/functions,\nfor even more flexibility and get away from Hive-style partition evol route."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);