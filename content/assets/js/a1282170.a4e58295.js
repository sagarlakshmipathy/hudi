"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[43834],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88432:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,s={unversionedId:"use_cases",id:"version-0.14.0/use_cases",title:"Use Cases",description:"Apache Hudi provides the foundational features required to build a state-of-the-art Lakehouse.",source:"@site/versioned_docs/version-0.14.0/use_cases.md",sourceDirName:".",slug:"/use_cases",permalink:"/docs/0.14.0/use_cases",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/use_cases.md",tags:[],version:"0.14.0",frontMatter:{title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Oracle Cloud Infrastructure",permalink:"/docs/0.14.0/oci_hoodie"},next:{title:"FAQs",permalink:"/docs/0.14.0/faq"}},l=[{value:"A Streaming Data Lake",id:"a-streaming-data-lake",children:[{value:"Near Real-Time Ingestion",id:"near-real-time-ingestion",children:[],level:3},{value:"Incremental Processing Pipelines",id:"incremental-processing-pipelines",children:[],level:3},{value:"Unified Batch and Streaming",id:"unified-batch-and-streaming",children:[],level:3}],level:2},{value:"Cloud-Native Tables",id:"cloud-native-tables",children:[{value:"Schema Management",id:"schema-management",children:[],level:3},{value:"ACID Transactions",id:"acid-transactions",children:[],level:3},{value:"Efficient Upserts and Deletes",id:"efficient-upserts-and-deletes",children:[],level:3},{value:"Time-Travel",id:"time-travel",children:[],level:3}],level:2},{value:"Data Lake Performance Optimizations",id:"data-lake-performance-optimizations",children:[],level:2}],c={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi provides the foundational features required to build a state-of-the-art Lakehouse.\nThe following are examples of use cases for why many choose to use Apache Hudi:"),(0,i.kt)("h2",{id:"a-streaming-data-lake"},"A Streaming Data Lake"),(0,i.kt)("p",null,"Apache Hudi is a Streaming Data Lake Platform that unlocks near real-time data ingestion and incremental processing pipelines with ease.\nThis blog post outlines this use case in more depth - ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/07/21/streaming-data-lake-platform"},"https://hudi.apache.org/blog/2021/07/21/streaming-data-lake-platform")),(0,i.kt)("h3",{id:"near-real-time-ingestion"},"Near Real-Time Ingestion"),(0,i.kt)("p",null,"Ingesting data from OLTP sources like (event logs, databases, external sources) into a ",(0,i.kt)("a",{parentName:"p",href:"http://martinfowler.com/bliki/DataLake.html"},"Data Lake"),' is a common problem,\nthat is unfortunately solved in a piecemeal fashion, using a medley of ingestion tools. This "raw data" layer of the data lake often forms the bedrock on which\nmore value is created.'),(0,i.kt)("p",null,"For RDBMS ingestion, Hudi provides ",(0,i.kt)("strong",{parentName:"p"},"faster loads via Upserts"),", as opposed costly & inefficient bulk loads. It's very common to use a change capture solution like\n",(0,i.kt)("a",{parentName:"p",href:"http://debezium.io/"},"Debezium")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/index"},"Kafka Connect")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports"},"Sqoop Incremental Import")," and apply them to an\nequivalent Hudi table on DFS. For NoSQL datastores like ",(0,i.kt)("a",{parentName:"p",href:"http://cassandra.apache.org/"},"Cassandra")," / ",(0,i.kt)("a",{parentName:"p",href:"http://www.project-voldemort.com/voldemort/"},"Voldemort")," / ",(0,i.kt)("a",{parentName:"p",href:"https://hbase.apache.org/"},"HBase"),",\neven moderately big installations store billions of rows. It goes without saying that ",(0,i.kt)("strong",{parentName:"p"},"full bulk loads are simply infeasible")," and more efficient approaches\nare needed if ingestion is to keep up with the typically high update volumes."),(0,i.kt)("p",null,"Even for immutable data sources like ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Kafka"),", there is often a need to de-duplicate the incoming events against what's stored on DFS.\nHudi achieves this by ",(0,i.kt)("a",{parentName:"p",href:"http://hudi.apache.org/blog/2020/11/11/hudi-indexing-mechanisms/"},"employing indexes")," of different kinds, quickly and efficiently."),(0,i.kt)("p",null,"All of this is seamlessly achieved by the Hudi Streamer tool, which is maintained in tight integration with rest of the code\nand we are always trying to add more capture sources, to make this easier for the users. The tool also has a continuous mode, where it\ncan self-manage clustering/compaction asynchronously, without blocking ingestion, significantly improving data freshness."),(0,i.kt)("h3",{id:"incremental-processing-pipelines"},"Incremental Processing Pipelines"),(0,i.kt)("p",null,"Data Lake ETL typically involves building a chain of tables derived from each other via DAGs expressed as workflows. Workflows often depend on new data being output by\nmultiple upstream workflows and traditionally, availability of new data is indicated by a new DFS Folder/Hive Partition.\nLet's take a concrete example to illustrate this. An upstream workflow ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," can create a Hive partition for every hour, with data for that hour (event_time) at the end of each hour (processing_time), providing effective freshness of 1 hour.\nThen, a downstream workflow ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),", kicks off immediately after ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," finishes, and does its own processing for the next hour, increasing the effective latency to 2 hours."),(0,i.kt)("p",null,"The above paradigm simply ignores late arriving data i.e when ",(0,i.kt)("inlineCode",{parentName:"p"},"processing_time")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"event_time")," drift apart.\nUnfortunately, in today's post-mobile & pre-IoT world, ",(0,i.kt)("strong",{parentName:"p"},"late data from intermittently connected mobile devices & sensors are the norm, not an anomaly"),".\nIn such cases, the only remedy to guarantee correctness is to reprocess the last few hours worth of data, over and over again each hour,\nwhich can significantly hurt the efficiency across the entire ecosystem. For e.g; imagine reprocessing TBs worth of data every hour across hundreds of workflows."),(0,i.kt)("p",null,"Hudi comes to the rescue again, by providing a way to consume new data (including late data) from an upstream Hudi table ",(0,i.kt)("inlineCode",{parentName:"p"},"HU")," at a record granularity (not folders/partitions),\napply the processing logic, and efficiently update/reconcile late data with a downstream Hudi table ",(0,i.kt)("inlineCode",{parentName:"p"},"HD"),". Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"HU")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HD")," can be continuously scheduled at a much more frequent schedule\nlike 15 mins, and providing an end-end latency of 30 mins at ",(0,i.kt)("inlineCode",{parentName:"p"},"HD"),"."),(0,i.kt)("p",null,"To achieve this, Hudi has embraced similar concepts from stream processing frameworks like ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/streaming-programming-guide#join-operations"},"Spark Streaming")," , Pub/Sub systems like ",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/documentation/#theconsumer"},"Kafka"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org"},"Flink")," or database replication technologies like ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E11882_01/server.112/e16545/xstrm_cncpt.htm#XSTRM187"},"Oracle XStream"),".\nFor the more curious, a more detailed explanation of the benefits of Incremental Processing can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop"},"here")),(0,i.kt)("h3",{id:"unified-batch-and-streaming"},"Unified Batch and Streaming"),(0,i.kt)("p",null,"The world we live in is polarized - even on data analytics storage - into real-time and offline/batch storage. Typically, real-time ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_mart"},"datamarts"),"\nare powered by specialized analytical stores such as ",(0,i.kt)("a",{parentName:"p",href:"http://druid.io/"},"Druid")," or ",(0,i.kt)("a",{parentName:"p",href:"http://www.memsql.com/"},"Memsql")," or ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.tech/"},"Clickhouse"),", fed by event buses like\n",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Kafka")," or ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar"),". This model is prohibitively expensive, unless a small fraction of your data lake data\nneeds sub-second query responses such as system monitoring or interactive real-time analysis."),(0,i.kt)("p",null,"The same data gets ingested into data lake storage much later (say every few hours or so) and then runs through batch ETL pipelines, with intolerable data freshness\nto do any kind of near-realtime analytics. On the other hand, the data lakes provide access to interactive SQL engines like Presto/SparkSQL, which can horizontally scale\neasily and provide return even more complex queries, within few seconds."),(0,i.kt)("p",null,"By bringing streaming primitives to data lake storage, Hudi opens up new possibilities by being able to ingest data within few minutes and also author incremental data\npipelines that are orders of magnitude faster than traditional batch processing. By bringing ",(0,i.kt)("strong",{parentName:"p"},"data freshness to a few minutes"),", Hudi can provide a much efficient alternative,\nfor a large class of data applications, compared to real-time datamarts. Also, Hudi has no upfront server infrastructure investments\nand thus enables faster analytics on much fresher analytics, without increasing the operational overhead. This external ",(0,i.kt)("a",{parentName:"p",href:"https://www.analyticsinsight.net/can-big-data-solutions-be-affordable/"},"article"),"\nfurther validates this newer model."),(0,i.kt)("h2",{id:"cloud-native-tables"},"Cloud-Native Tables"),(0,i.kt)("p",null,'Apache Hudi makes it easy to define tables, manage schema, metadata, and bring SQL semantics to cloud file storage.\nSome may first hear about Hudi as an "open table format". While this is true, it is just one layer the full Hudi stack.\nThe term \u201ctable format\u201d is new and still means many things to many people. Drawing an analogy to file formats, a table\nformat simply consists of : the file layout of the table, table\u2019s schema and metadata tracking changes to the table.\nHudi is not a table format alone, but it does implement one internally. '),(0,i.kt)("h3",{id:"schema-management"},"Schema Management"),(0,i.kt)("p",null,"A key component of a table is the schema of that table. Apache Hudi provides flexibility to enforce schemas, but also allow\nschema evolution to ensure pipeline resilience to changes. Hudi uses Avro schemas to store, manage and evolve a table\u2019s\nschema. Currently, Hudi enforces schema-on-write, which although stricter than schema-on-read, is adopted widely in the\nstream processing world to ensure pipelines don't break from non backwards compatible changes."),(0,i.kt)("h3",{id:"acid-transactions"},"ACID Transactions"),(0,i.kt)("p",null,"Along with a table, Apache Hudi brings ACID transactional guarantees to a data lake.\nHudi ensures atomic writes, by way of publishing commits atomically to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/timeline"},"timeline"),", stamped with an\ninstant time that denotes the time at which the action\nis deemed to have occurred. Unlike general purpose file version control, Hudi draws clear distinction between writer processes\n(that issue user\u2019s upserts/deletes), table services (that write data/metadata to optimize/perform bookkeeping) and readers\n(that execute queries and read data). Hudi provides snapshot isolation between all three types of processes, meaning they\nall operate on a consistent snapshot of the table. Hudi provides ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+22+%3A+Snapshot+Isolation+using+Optimistic+Concurrency+Control+for+multi-writers"},"optimistic concurrency control"),"\n(OCC) between writers, while providing lock-free, non-blocking MVCC based concurrency control between writers and\ntable-services and between different table services."),(0,i.kt)("p",null,"Projects that solely rely on OCC deal with competing operations, by either implementing a lock or relying on atomic renames.\nSuch approaches are optimistic that real contention never happens and resort to failing one of the writer operations if\nconflicts occur, which can cause significant resource wastage or operational overhead. Imagine a scenario of two writer\nprocesses : an ingest writer job producing new data every 30 minutes and a deletion writer job that is enforcing GDPR\ntaking 2 hours to issue deletes. If there were to overlap on the same files (very likely to happen in real situations\nwith random deletes), the deletion job is almost guaranteed to starve and fail to commit each time, wasting tons of\ncluster resources. Hudi takes a very different approach that we believe is more apt for lake transactions, which are\ntypically long-running. For e.g async compaction that can keep deleting records in the background without blocking the ingest job.\nThis is implemented via a file level, log based concurrency control protocol which orders actions based on their start instant times on the timeline."),(0,i.kt)("h3",{id:"efficient-upserts-and-deletes"},"Efficient Upserts and Deletes"),(0,i.kt)("p",null,"While ACID transactions opens the door for Upserts and Deletes, Hudi also unlocks special capabilities like clustering,\nindexing, and z-ordering which allows users to optimize for efficiency in Deletions and Upserts. Specifically, users can\ncluster older event log data based on user_id, such that, queries that evaluate candidates for data deletion can do so, while\nmore recent partitions are optimized for query performance and clustered on say timestamp. "),(0,i.kt)("p",null,"Hudi also offers efficient ways of dealing with large write amplification, resulting from random deletes based on user_id\n(or any secondary key), by way of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Merge On Read")," table types. Hudi's elegant log based concurrency control, ensures\nthat the ingestion/writing can continue happening, as a background compaction job amortizes the cost of rewriting data to enforce deletes."),(0,i.kt)("h3",{id:"time-travel"},"Time-Travel"),(0,i.kt)("p",null,"Apache Hudi unlocks the ability to write time travel queries, which means you can query the previous state of the data.\nThis is particularly useful for a few use cases. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rollbacks - Easily revert back to a previous version of the table."),(0,i.kt)("li",{parentName:"ul"},"Debugging - Inspect previous versions of data to understand how it has changed over time."),(0,i.kt)("li",{parentName:"ul"},"Audit History - Have a trail of commits that helps you see how, who, and when altered the data over time.")),(0,i.kt)("h2",{id:"data-lake-performance-optimizations"},"Data Lake Performance Optimizations"),(0,i.kt)("p",null,"Apache Hudi offers several cutting edge services which help you achieve industry leading performance and significant\ncost savings for your data lake."),(0,i.kt)("p",null,"Some examples of the Apache Hudi services that make this performance optimization easy include: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/file_sizing"},"Auto File Sizing"),' - to solve the "small files" problem.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/clustering"},"Clustering")," - to co-locate data next to each other."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/compaction"},"Compaction")," - to allow tuning of low latency ingestion and fast read queries. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/indexing"},"Indexing")," - for efficient upserts and deletes."),(0,i.kt)("li",{parentName:"ul"},"Multi-Dimensional Partitioning (Z-Ordering) - Traditional folder style partitioning on low-cardinality, while also\nZ-Ordering data within files based on high-cardinality"),(0,i.kt)("li",{parentName:"ul"},"Metadata Table - No more slow S3 file listings or throttling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/hoodie_cleaner"},"Auto Cleaning")," - Keeps your storage costs in check by automatically removing old versions of files.")))}p.isMDXComponent=!0}}]);