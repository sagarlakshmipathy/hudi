"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59020],{23504:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/2024-11-19-automated-small-file-handling-benchmarks-5340e7e5e0e586c3803f6e06796b5daf.png"},26996:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var a=n(42698),s=n(74848),t=n(28453);const l={title:"Hudi\u2019s Automatic File Sizing Delivers Unmatched Performance",excerpt:"Explains how Hudi handles small files during ingestion and its benefits",author:"Aditya Goenka",category:"blog",image:"/assets/images/blog/2024-06-07-apache-hudi-a-deep-dive-with-python-code-examples.png",tags:["Data Lake","Apache Hudi"]},o=void 0,r={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Small File Challenges",id:"understanding-small-file-challenges",level:2},{value:"Impact of Small File",id:"impact-of-small-file",level:3},{value:"How table formats solve this problem",id:"how-table-formats-solve-this-problem",level:2},{value:"<strong>Ingesting Data As-Is and Optimizing Post-Ingestion</strong> :",id:"ingesting-data-as-is-and-optimizing-post-ingestion-",level:3},{value:"Pros:",id:"pros",level:4},{value:"Cons:",id:"cons",level:4},{value:"<strong>Managing Small Files During Ingestion Only</strong> :",id:"managing-small-files-during-ingestion-only-",level:3},{value:"How Hudi helps in small file handling during ingestion",id:"how-hudi-helps-in-small-file-handling-during-ingestion",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const i={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:"In today\u2019s data-driven world, managing large volumes of data efficiently is crucial. One of the standout features of Apache Hudi is its ability to handle small files during data writes, which significantly optimizes both performance and cost. In this post, we\u2019ll explore how Hudi\u2019s auto file sizing, powered by a unique bin packing algorithm, can transform your data processing workflows."}),"\n",(0,s.jsx)(i.h2,{id:"understanding-small-file-challenges",children:"Understanding Small File Challenges"}),"\n",(0,s.jsx)(i.p,{children:"In big data environments, small files can pose a major challenge. Some major use-cases which can create lot of small files -"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Streaming Workloads"})," :\nWhen data is ingested in micro-batches, as is common in streaming workloads, the resulting files tend to be small. This can lead to a significant number of small files, especially for high-throughput streaming applications."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"High-Cardinality Partitioning"})," :\nExcessive partitioning, particularly on columns with high cardinality, can create a large number of small files. This can be especially problematic when dealing with large datasets and complex data schemas."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"These small files can lead to several inefficiencies that can include increased metadata overhead, degraded read performance, and higher storage costs, particularly when using cloud storage solutions like Amazon S3."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Increased Metadata Overhead"})," :\nMetadata is data about data, including information such as file names, sizes, creation dates, and other attributes that help systems manage and locate files. Each file, no matter how small, requires metadata to be tracked and managed. In environments where numerous small files are created, the amount of metadata generated can skyrocket. For instance, if a dataset consists of thousands of tiny files, the system must maintain metadata for each of these files. This can overwhelm metadata management systems, leading to longer lookup times and increased latency when accessing files."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Degraded Read Performance"})," :\nReading data from storage typically involves input/output (I/O) operations, which can be costly in terms of time and resources. When files are small, the number of I/O operations increases, as each small file needs to be accessed individually. This scenario can create bottlenecks, particularly in analytical workloads where speed is critical. Querying a large number of small files may result in significant delays, as the system spends more time opening and reading each file than processing the data itself."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Higher Cloud Costs"})," :\nMany cloud storage solutions, like Amazon S3, charge based on the total amount of data stored as well as the number of requests made. With numerous small files, not only does the total storage requirement increase, but the number of requests to access these files also grows. Each small file incurs additional costs due to the overhead associated with managing and accessing them. This can add up quickly, leading to unexpectedly high storage bills."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"High Query Load"})," :\nMultiple teams are querying these tables for various dashboards, ad-hoc analyses, and machine learning tasks. This leads to a high number of concurrent queries, including Spark jobs, which can significantly impact performance. All those queries/jobs will take a hit on both performance and cost."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"impact-of-small-file",children:"Impact of Small File"}),"\n",(0,s.jsxs)(i.p,{children:["To demonstrate the impact of small files, we conducted a benchmarking using AWS EMR.\nDataset Used - TPC-DS 1 TB dataset ( ",(0,s.jsx)(i.a,{href:"https://www.tpc.org/tpcds/",children:"https://www.tpc.org/tpcds/"})," )\nCluster Configurations - 10 nodes (m5.4xlarge)\nSpark Configurations - Executors: 10 (16 cores 32 GB memory)\nDataset Generation - We generated two types of datasets in parquet format"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Optimized File Sizes which had ~100 MB sized files"}),"\n",(0,s.jsx)(i.li,{children:"Small File Sizes which had ~5-10 MB sized files\nExecution and Results"}),"\n",(0,s.jsx)(i.li,{children:"We executed 3 rounds of 99 standard TPC-DS queries on both datasets and measured the time taken by the queries."}),"\n",(0,s.jsx)(i.li,{children:"The results indicated that queries executed on small files were, on average, 30% slower compared to those executed on optimized file sizes."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The following chart illustrates the average runtimes for the 99 queries across each round."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Impact of Small Files",src:n(23504).A+"",width:"3188",height:"1844"})}),"\n",(0,s.jsx)(i.h2,{id:"how-table-formats-solve-this-problem",children:"How table formats solve this problem"}),"\n",(0,s.jsx)(i.p,{children:"When it comes to managing small files in table formats, there are two primary strategies:"}),"\n",(0,s.jsxs)(i.h3,{id:"ingesting-data-as-is-and-optimizing-post-ingestion-",children:[(0,s.jsx)(i.strong,{children:"Ingesting Data As-Is and Optimizing Post-Ingestion"})," :"]}),"\n",(0,s.jsx)(i.p,{children:"In this approach, data, including small files, is initially ingested without immediate processing. After ingestion, various technologies provide functionalities to merge these small files into larger, more efficient partitions:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Hudi uses clustering to manage small files."}),"\n",(0,s.jsx)(i.li,{children:"Delta Lake utilizes the OPTIMIZE command."}),"\n",(0,s.jsx)(i.li,{children:"Iceberg offers the rewrite_data_files function."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"pros",children:"Pros:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Writing small files directly accelerates the ingestion process, enabling quick data availability\u2014especially beneficial for real-time or near-real-time applications."}),"\n",(0,s.jsx)(i.li,{children:"The initial write phase involves less data manipulation, as small files are simply appended. This streamlines workflows and eases the management of incoming data streams."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"cons",children:"Cons:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Until clustering or optimization is performed, small files may be exposed to readers, which can significantly slow down queries and potentially violate read SLAs."}),"\n",(0,s.jsx)(i.li,{children:"Just like with read performance, exposing small files to readers can lead to a high number of cloud storage API calls, which can increase cloud costs significantly."}),"\n",(0,s.jsx)(i.li,{children:"Managing table service jobs can become cumbersome. These jobs often can't run in parallel with ingestion tasks, leading to potential delays and resource contention."}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"managing-small-files-during-ingestion-only-",children:[(0,s.jsx)(i.strong,{children:"Managing Small Files During Ingestion Only"})," :"]}),"\n",(0,s.jsx)(i.p,{children:"Hudi offers a unique functionality that can handle small files during the ingestion only, ensuring that only larger files are stored in the table. This not only optimizes read performance but also significantly reduces storage costs.\nBy eliminating small files from the lake, Hudi addresses key challenges associated with data management, providing a streamlined solution that enhances both performance and cost efficiency."}),"\n",(0,s.jsx)(i.h2,{id:"how-hudi-helps-in-small-file-handling-during-ingestion",children:"How Hudi helps in small file handling during ingestion"}),"\n",(0,s.jsx)(i.p,{children:'Hudi automatically manages file sizing during insert and upsert operations. It employs a bin packing algorithm to handle small files effectively. A bin packing algorithm is a technique used to optimize file storage by grouping files of varying sizes into fixed-size containers, often referred to as "bins." This strategy aims to minimize the number of bins required to store all files efficiently. When writing data, Hudi identifies file groups of small files and merges new data into the same  group, resulting in optimized file sizes.'}),"\n",(0,s.jsx)(i.p,{children:"The diagram above illustrates how Hudi employs a bin packing algorithm to manage small files while using default parameters: a small file limit of 100 MB and a maximum file size of 120 MB."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"  ",src:n(90105).A+"",width:"1350",height:"632"})}),"\n",(0,s.jsxs)(i.p,{children:["Initially, the table contains the following files: F1 (110 MB), F2 (60 MB), F3 (20 MB), and F4 (20 MB).\nAfter processing a batch-1 of 150 MB, F2, F3, and F4 will all be classified as small files since they each fall below the 100 MB threshold. The first 60 MB will be allocated to F2, increasing its size to 120 MB. The remaining 90 MB will be assigned to F3, bringing its total to 110 MB.\nAfter processing batch-2 of 150 MB, only F4 will be classified as a small file. F3, now at 110 MB, will not be considered a small file since it exceeds the 100 MB limit. Therefore, an additional 100 MB will be allocated to F4, increasing its size to 120 MB, while the remaining 50 MB will create a new file of 50 MB.\nWe can refer this blog for in-depth details of the functionality  - ",(0,s.jsx)(i.a,{href:"https://hudi.apache.org/blog/2021/03/01/hudi-file-sizing/",children:"https://hudi.apache.org/blog/2021/03/01/hudi-file-sizing/"})]}),"\n",(0,s.jsx)(i.p,{children:"We use following configs to configure this -"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"hoodie.parquet.max.file.size (Default 128 MB)"}),"\nThis setting specifies the target size, in bytes, for Parquet files generated during Hudi write phases. The writer will attempt to create files that approach this target size. For example, if an existing file is 80 MB, the writer will allocate only 40 MB to that particular file group."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"hoodie.parquet.small.file.limit (Default 100 MB)"}),"\nThis setting defines the maximum file size for a data file to be classified as a small file. Files below this threshold are considered small files, prompting the system to allocate additional records to their respective file groups in subsequent write phases."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"hoodie.copyonwrite.record.size.estimate (Default 1024)"}),"\nThis setting represents the estimated average size of a record. If not explicitly specified, Hudi will dynamically compute this estimate based on commit metadata. Accurate record size estimation is essential for determining insert parallelism and efficiently bin-packing inserts into smaller files."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"hoodie.copyonwrite.insert.split.size (Default 500000)"}),"\nThis setting determines the number of records inserted into each partition or bucket during a write operation. The default value is based on the assumption of 100MB files with at least 1KB records, resulting in approximately 100,000 records per file. To accommodate potential variations, we overprovision to 500,000 records. As long as auto-tuning of splits is turned on, this only affects the first write, where there is no history to learn record sizes from."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"hoodie.merge.small.file.group.candidates.limit (Default1)"}),"\nThis setting specifies the maximum number of file groups whose base files meet the small-file limit that can be considered for appending records during an upsert operation. This parameter is applicable only to Merge-On-Read (MOR) tables."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["We can refer this blog to understand internal functionality how it works -\n",(0,s.jsx)(i.a,{href:"https://hudi.apache.org/blog/2021/03/01/hudi-file-sizing/#during-write-vs-after-write",children:"https://hudi.apache.org/blog/2021/03/01/hudi-file-sizing/#during-write-vs-after-write"})]}),"\n",(0,s.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(i.p,{children:"Hudi's innovative approach to managing small files during ingestion positions it as a compelling choice in the lakehouse landscape. By automatically merging small files at the time of ingestion, it optimizes storage costs and enhances read performance, and alleviates users from the operational burden of maintaining their tables in an optimized state."}),"\n",(0,s.jsxs)(i.p,{children:["Unleash the power of Apache Hudi for your big data challenges! Head over to ",(0,s.jsx)(i.a,{href:"https://hudi.apache.org/",children:"https://hudi.apache.org/"})," and dive into the quickstarts to get started. Want to learn more? Join our vibrant Hudi community! Attend the monthly Community Call or hop into the Apache Hudi Slack to ask questions and gain deeper insights."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var a=n(96540);const s={},t=a.createContext(s);function l(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:i},e.children)}},42698:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/11/19/automated-small-file-handling","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-11-19-automated-small-file-handling.md","source":"@site/blog/2024-11-19-automated-small-file-handling.md","title":"Hudi\u2019s Automatic File Sizing Delivers Unmatched Performance","description":"Introduction","date":"2024-11-19T00:00:00.000Z","tags":[{"inline":true,"label":"Data Lake","permalink":"/blog/tags/data-lake"},{"inline":true,"label":"Apache Hudi","permalink":"/blog/tags/apache-hudi"}],"readingTime":7.955,"hasTruncateMarker":false,"authors":[{"name":"Aditya Goenka","key":null,"page":null}],"frontMatter":{"title":"Hudi\u2019s Automatic File Sizing Delivers Unmatched Performance","excerpt":"Explains how Hudi handles small files during ingestion and its benefits","author":"Aditya Goenka","category":"blog","image":"/assets/images/blog/2024-06-07-apache-hudi-a-deep-dive-with-python-code-examples.png","tags":["Data Lake","Apache Hudi"]},"unlisted":false,"prevItem":{"title":"Apache Iceberg vs Hudi: Key Features, Performance & Use Cases","permalink":"/blog/2024/12/03/apache-iceberg-vs-apache-hudi"},"nextItem":{"title":"Record Level Indexing in Apache Hudi","permalink":"/blog/2024/11/12/record-level-indexing-in-apache-hudi"}}')},90105:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/2024-11-19-automated-small-file-handling-process-676b9be484af36088162dfaf6a219a1f.png"}}]);