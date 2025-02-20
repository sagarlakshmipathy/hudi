"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78790],{28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>r});var o=t(96540);const n={},a=o.createContext(n);function s(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:i},e.children)}},45011:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"faq_storage","title":"Storage","description":"Does Hudi support cloud storage/object stores?","source":"@site/versioned_docs/version-1.0.1/faq_storage.md","sourceDirName":".","slug":"/faq_storage","permalink":"/cn/docs/faq_storage","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.1/faq_storage.md","tags":[],"version":"1.0.1","frontMatter":{"title":"Storage","keywords":["hudi","writing","reading"]},"sidebar":"docs","previous":{"title":"Table Services","permalink":"/cn/docs/faq_table_services"},"next":{"title":"Integrations","permalink":"/cn/docs/faq_integrations"}}');var n=t(74848),a=t(28453);const s={title:"Storage",keywords:["hudi","writing","reading"]},r="Storage FAQ",d={},l=[{value:"Does Hudi support cloud storage/object stores?",id:"does-hudi-support-cloud-storageobject-stores",level:3},{value:"What is the difference between copy-on-write (COW) vs merge-on-read (MOR) table types?",id:"what-is-the-difference-between-copy-on-write-cow-vs-merge-on-read-mor-table-types",level:3},{value:"How do I migrate my data to Hudi?",id:"how-do-i-migrate-my-data-to-hudi",level:3},{value:"How to convert an existing COW table to MOR?",id:"how-to-convert-an-existing-cow-table-to-mor",level:3},{value:"How can I find the average record size in a commit?",id:"how-can-i-find-the-average-record-size-in-a-commit",level:3},{value:"How does the Hudi indexing work &amp; what are its benefits?",id:"how-does-the-hudi-indexing-work--what-are-its-benefits",level:3},{value:"Can I switch from one index type to another without having to rewrite the entire table?",id:"can-i-switch-from-one-index-type-to-another-without-having-to-rewrite-the-entire-table",level:3},{value:"I have an existing dataset and want to evaluate Hudi using portion of that data ?",id:"i-have-an-existing-dataset-and-want-to-evaluate-hudi-using-portion-of-that-data-",level:3},{value:"Why does maintain record level commit metadata? Isn&#39;t tracking table version at file level good enough?\xa0",id:"why-does-maintain-record-level-commit-metadata-isnt-tracking-table-version-at-file-level-good-enough",level:3},{value:"Why partition fields are also stored in parquet files in addition to the partition path ?",id:"why-partition-fields-are-also-stored-in-parquet-files-in-addition-to-the-partition-path-",level:3},{value:"How do I configure Bloom filter (when Bloom/Global_Bloom index is used)?",id:"how-do-i-configure-bloom-filter-when-bloomglobal_bloom-index-is-used",level:3},{value:"How do I verify datasource schema reconciliation in Hudi?",id:"how-do-i-verify-datasource-schema-reconciliation-in-hudi",level:3},{value:"Can I change keygenerator for an existing table?",id:"can-i-change-keygenerator-for-an-existing-table",level:3},{value:"Is Hudi JVM dependent? Does Hudi leverage Java specific serialization?",id:"is-hudi-jvm-dependent-does-hudi-leverage-java-specific-serialization",level:3}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"storage-faq",children:"Storage FAQ"})}),"\n",(0,n.jsx)(i.h3,{id:"does-hudi-support-cloud-storageobject-stores",children:"Does Hudi support cloud storage/object stores?"}),"\n",(0,n.jsxs)(i.p,{children:["Yes. Generally speaking, Hudi is able to provide its functionality on any Hadoop FileSystem implementation and thus can read and write tables on ",(0,n.jsx)(i.a,{href:"/docs/cloud",children:"Cloud stores"})," (Amazon S3 or Microsoft Azure or Google Cloud Storage). Over time, Hudi has also incorporated specific design aspects that make building Hudi tables on the cloud easy, such as ",(0,n.jsx)(i.a,{href:"/docs/configurations#hoodieconsistencycheckenabled",children:"consistency checks for s3"}),", Zero moves/renames involved for data files."]}),"\n",(0,n.jsx)(i.h3,{id:"what-is-the-difference-between-copy-on-write-cow-vs-merge-on-read-mor-table-types",children:"What is the difference between copy-on-write (COW) vs merge-on-read (MOR) table types?"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Copy On Write"})," - This storage type enables clients to ingest data on columnar file formats, currently parquet. Any new data that is written to the Hudi table using COW storage type, will write new parquet files. Updating an existing set of rows will result in a rewrite of the entire parquet files that collectively contain the affected rows being updated. Hence, all writes to such tables are limited by parquet writing performance, the larger the parquet file, the higher is the time taken to ingest the data."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Merge On Read"})," - This storage type enables clients to ingest data quickly onto row based data format such as avro. Any new data that is written to the Hudi table using MOR table type, will write new log/delta files that internally store the data as avro encoded bytes. A compaction process (configured as inline or asynchronous) will convert log file format to columnar file format (parquet). Two different InputFormats expose 2 different views of this data, Read Optimized view exposes columnar parquet reading performance while Realtime View exposes columnar and/or log reading performance respectively. Updating an existing set of rows will result in either a) a companion log/delta file for an existing base parquet file generated from a previous compaction or b) an update written to a log/delta file in case no compaction ever happened for it. Hence, all writes to such tables are limited by avro/log file writing performance, much faster than parquet. Although, there is a higher cost to pay to read log/delta files vs columnar (parquet) files."]}),"\n",(0,n.jsxs)(i.p,{children:["More details can be found ",(0,n.jsx)(i.a,{href:"/docs/concepts/",children:"here"})," and also ",(0,n.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/Design+And+Architecture",children:"Design And Architecture"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"how-do-i-migrate-my-data-to-hudi",children:"How do I migrate my data to Hudi?"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi provides built in support for rewriting your entire table into Hudi one-time using the HDFSParquetImporter tool available from the hudi-cli . You could also do this via a simple read and write of the dataset using the Spark datasource APIs. Once migrated, writes can be performed using normal means discussed ",(0,n.jsx)(i.a,{href:"faq_writing_tables#what-are-some-ways-to-write-a-hudi-table",children:"here"}),". This topic is discussed in detail ",(0,n.jsx)(i.a,{href:"/docs/migration_guide/",children:"here"}),", including ways to doing partial migrations."]}),"\n",(0,n.jsx)(i.h3,{id:"how-to-convert-an-existing-cow-table-to-mor",children:"How to convert an existing COW table to MOR?"}),"\n",(0,n.jsx)(i.p,{children:"All you need to do is to edit the table type property in hoodie.properties(located at hudi_table_path/.hoodie/hoodie.properties)."}),"\n",(0,n.jsx)(i.p,{children:"But manually changing it will result in checksum errors. So, we have to go via hudi-cli."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Copy existing hoodie.properties to a new location."}),"\n",(0,n.jsx)(i.li,{children:"Edit table type to MERGE_ON_READ"}),"\n",(0,n.jsx)(i.li,{children:"launch hudi-cli"}),"\n",(0,n.jsx)(i.li,{children:"connect --path hudi_table_path"}),"\n",(0,n.jsx)(i.li,{children:"repair overwrite-hoodie-props --new-props-file new_hoodie.properties"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"how-can-i-find-the-average-record-size-in-a-commit",children:"How can I find the average record size in a commit?"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"commit showpartitons"})," command in ",(0,n.jsx)(i.a,{href:"/docs/cli",children:"HUDI CLI"}),' will show both "bytes written" and']}),"\n",(0,n.jsx)(i.p,{children:'"records inserted." Divide the bytes written by records inserted to find the average size. Note that this answer assumes'}),"\n",(0,n.jsx)(i.p,{children:"metadata overhead is negligible. For a small table (such as 5 columns, 100 records) this will not be the case."}),"\n",(0,n.jsx)(i.h3,{id:"how-does-the-hudi-indexing-work--what-are-its-benefits",children:"How does the Hudi indexing work & what are its benefits?"}),"\n",(0,n.jsx)(i.p,{children:"The indexing component is a key part of the Hudi writing and it maps a given recordKey to a fileGroup inside Hudi consistently. This enables faster identification of the file groups that are affected/dirtied by a given write operation."}),"\n",(0,n.jsx)(i.p,{children:"Hudi supports a few options for indexing as below"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"HoodieBloomIndex"})," : Uses a bloom filter and ranges information placed in the footer of parquet/base files (and soon log files as well)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"HoodieGlobalBloomIndex"})," : The non global indexing only enforces uniqueness of a key inside a single partition i.e the user is expected to know the partition under which a given record key is stored. This helps the indexing scale very well for even ",(0,n.jsx)(i.a,{href:"https://eng.uber.com/uber-big-data-platform/",children:"very large datasets"}),". However, in some cases, it might be necessary instead to do the de-duping/enforce uniqueness across all partitions and the global bloom index does exactly that. If this is used, incoming records are compared to files across the entire table and ensure a recordKey is only present in one partition."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"HBaseIndex"})," : Apache HBase is a key value store, typically found in close proximity to HDFS. You can also store the index inside HBase, which could be handy if you are already operating HBase."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"HoodieSimpleIndex (default)"})," : A simple index which reads interested fields (record key and partition path) from base files and joins with incoming records to find the tagged location."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"HoodieGlobalSimpleIndex"})," : Global version of Simple Index, where in uniqueness is on record key across entire table."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"HoodieBucketIndex"})," : Each partition has statically defined buckets to which records are tagged with. Since locations are tagged via hashing mechanism, this index lookup will be very efficient."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"HoodieSparkConsistentBucketIndex"})," : This is also similar to Bucket Index. Only difference is that, data skews can be tackled by dynamically changing the bucket number."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["You can implement your own index if you'd like, by subclassing the ",(0,n.jsx)(i.code,{children:"HoodieIndex"})," class and configuring the index class name in configs."]}),"\n",(0,n.jsx)(i.h3,{id:"can-i-switch-from-one-index-type-to-another-without-having-to-rewrite-the-entire-table",children:"Can I switch from one index type to another without having to rewrite the entire table?"}),"\n",(0,n.jsx)(i.p,{children:"It should be okay to switch between Bloom index and Simple index as long as they are not global."}),"\n",(0,n.jsx)(i.p,{children:"Moving from global to non-global and vice versa may not work. Also switching between Hbase (gloabl index) and regular bloom might not work."}),"\n",(0,n.jsx)(i.h3,{id:"i-have-an-existing-dataset-and-want-to-evaluate-hudi-using-portion-of-that-data-",children:"I have an existing dataset and want to evaluate Hudi using portion of that data ?"}),"\n",(0,n.jsx)(i.p,{children:"You can bulk import portion of that data to a new hudi table. For example, if you want to try on a month of data -"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'spark.read.parquet("your_data_set/path/to/month")\n     .write.format("org.apache.hudi")\n     .option("hoodie.datasource.write.operation", "bulk_insert")\n     .option("hoodie.datasource.write.storage.type", "storage_type") // COPY_ON_WRITE or MERGE_ON_READ\n     .option("hoodie.datasource.write.recordkey.field", "<your key>").\n     .option("hoodie.datasource.write.partitionpath.field", "<your_partition>")\n     ...\n     .mode(SaveMode.Append)\n     .save(basePath);\n'})}),"\n",(0,n.jsx)(i.p,{children:"Once you have the initial copy, you can simply run upsert operations on this by selecting some sample of data every round"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'spark.read.parquet("your_data_set/path/to/month").limit(n) // Limit n records\n     .write.format("org.apache.hudi")\n     .option("hoodie.datasource.write.operation", "upsert")\n     .option("hoodie.datasource.write.recordkey.field", "<your key>").\n     .option("hoodie.datasource.write.partitionpath.field", "<your_partition>")\n     ...\n     .mode(SaveMode.Append)\n     .save(basePath);\n'})}),"\n",(0,n.jsxs)(i.p,{children:["For merge on read table, you may want to also try scheduling and running compaction jobs. You can run compaction directly using spark submit on org.apache.hudi.utilities.HoodieCompactor or by using ",(0,n.jsx)(i.a,{href:"/docs/cli",children:"HUDI CLI"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"why-does-maintain-record-level-commit-metadata-isnt-tracking-table-version-at-file-level-good-enough",children:"Why does maintain record level commit metadata? Isn't tracking table version at file level good enough?\xa0"}),"\n",(0,n.jsxs)(i.p,{children:["By generating a commit time ahead of time, Hudi is able to stamp each record with effectively a transaction id that it's part of that commit enabling record level change tracking. This means, that even if that file is compacted/clustered (",(0,n.jsx)(i.a,{href:"/docs/clustering#how-is-compaction-different-from-clustering",children:"they mean different things in Hudi"}),") many times, in between incremental queries, we are able to ",(0,n.jsx)(i.a,{href:"/blog/2023/05/19/hudi-metafields-demystified",children:"preserve history of the records"}),'. Further more, Hudi is able to leverage compaction to amortize the cost of "catching up" for incremental readers by handing latest state of a record after a point in time - which is orders of magnitude efficient than processing each record. Other similar systems lack such decoupling of change streams from physical files the records were part of and core table management services being aware of the history of records.\xa0Such similar approaches of record level metadata fields for efficient incremental processing has been also applied in other leading industry ',(0,n.jsx)(i.a,{href:"https://twitter.com/apachehudi/status/1676021143697002496?s=20",children:"data warehouses"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"why-partition-fields-are-also-stored-in-parquet-files-in-addition-to-the-partition-path-",children:"Why partition fields are also stored in parquet files in addition to the partition path ?"}),"\n",(0,n.jsx)(i.p,{children:"Hudi supports customizable partition values which could be a derived value of another field. Also, storing the partition value only as part of the field results in losing type information when queried by various query engines."}),"\n",(0,n.jsx)(i.h3,{id:"how-do-i-configure-bloom-filter-when-bloomglobal_bloom-index-is-used",children:"How do I configure Bloom filter (when Bloom/Global_Bloom index is used)?"}),"\n",(0,n.jsx)(i.p,{children:"Bloom filters are used in bloom indexes to look up the location of record keys in write path. Bloom filters are used only when the index type is chosen as \u201cBLOOM\u201d or \u201cGLOBAL_BLOOM\u201d. Hudi has few config knobs that users can use to tune their bloom filters."}),"\n",(0,n.jsx)(i.p,{children:"On a high level, hudi has two types of blooms: Simple and Dynamic."}),"\n",(0,n.jsx)(i.p,{children:"Simple, as the name suggests, is simple. Size is statically allocated based on few configs."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"hoodie.bloom.index.filter.type"}),": SIMPLE"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"hoodie.index.bloom.num_entries"})," refers to the total number of entries per bloom filter, which refers to one file slice. Default value is 60000."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"hoodie.index.bloom.fpp"})," refers to the false positive probability with the bloom filter. Default value: 1*10^-9."]}),"\n",(0,n.jsxs)(i.p,{children:["Size of the bloom filter depends on these two values. This is statically allocated and here is the formula that determines the size of bloom. Until the total number of entries added to the bloom is within the configured ",(0,n.jsx)(i.code,{children:"hoodie.index.bloom.num_entries"})," value, the fpp will be honored. i.e. with default values of 60k and 1*10^-9, bloom filter serialized size = 430kb. But if more entries are added, then the false positive probability will not be honored. Chances that more false positives could be returned if you add more number of entries than the configured value. So, users are expected to set the right values for both num_entries and fpp."]}),"\n",(0,n.jsx)(i.p,{children:"Hudi suggests to have roughly 100 to 120 mb sized files for better query performance. So, based on the record size, one could determine how many records could fit into one data file."}),"\n",(0,n.jsx)(i.p,{children:"Lets say your data file max size is 128Mb and default avg record size is 1024 bytes. Hence, roughly this translates to 130k entries per data file. For this config, you should set num_entries to ~130k."}),"\n",(0,n.jsx)(i.p,{children:"Dynamic bloom filter:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"hoodie.bloom.index.filter.type"})," : DYNAMIC"]}),"\n",(0,n.jsxs)(i.p,{children:["This is an advanced version of the bloom filter which grows dynamically as the number of entries grows. So, users are expected to set two values wrt num_entries. ",(0,n.jsx)(i.code,{children:"hoodie.index.bloom.num_entries"})," will determine the starting size of the bloom. ",(0,n.jsx)(i.code,{children:"hoodie.bloom.index.filter.dynamic.max.entries"})," will determine the max size to which the bloom can grow upto. And fpp needs to be set similar to \u201cSimple\u201d bloom filter. Bloom size will be allotted based on the first config ",(0,n.jsx)(i.code,{children:"hoodie.index.bloom.num_entries"}),". Once the number of entries reaches this value, bloom will dynamically grow its size to 2X. This will go on until the size reaches a max of ",(0,n.jsx)(i.code,{children:"hoodie.bloom.index.filter.dynamic.max.entries"})," value. Until the size reaches this max value, fpp will be honored. If the entries added exceeds the max value, then the fpp may not be honored."]}),"\n",(0,n.jsx)(i.h3,{id:"how-do-i-verify-datasource-schema-reconciliation-in-hudi",children:"How do I verify datasource schema reconciliation in Hudi?"}),"\n",(0,n.jsxs)(i.p,{children:["With Hudi you can reconcile schema, meaning you can apply target table schema on your incoming data, so if there's a missing field in your batch it'll be injected null value. You can enable schema reconciliation using ",(0,n.jsx)(i.a,{href:"/docs/configurations/#hoodiedatasourcewritereconcileschema",children:"hoodie.datasource.write.reconcile.schema"})," config."]}),"\n",(0,n.jsx)(i.p,{children:"Example how schema reconciliation works with Spark:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:'hudi_options = {\n    \'hoodie.table.name\': "test_recon1",\n    \'hoodie.datasource.write.recordkey.field\': \'uuid\',\n    \'hoodie.datasource.write.table.name\': "test_recon1",\n    \'hoodie.datasource.write.precombine.field\': \'ts\',\n    \'hoodie.upsert.shuffle.parallelism\': 2,\n    \'hoodie.insert.shuffle.parallelism\': 2,\n    "hoodie.datasource.write.hive_style_partitioning":"true",\n    "hoodie.datasource.write.reconcile.schema": "true",\n    "hoodie.datasource.hive_sync.jdbcurl":"thrift://localhost:9083",\n    "hoodie.datasource.hive_sync.database":"hudi",\n    "hoodie.datasource.hive_sync.table":"test_recon1",\n    "hoodie.datasource.hive_sync.enable":"true",\n    "hoodie.datasource.hive_sync.mode": "hms"\n}\n\nsome_json = \'{"uuid":1,"ts":1,"Url":"hudi.apache.com"}\'\ndf = spark.read.json(sc.parallelize([some_json]))\n\ndf.write.format("hudi").mode("append").options(**hudi_options).save(base_path)\n\nspark.sql("select * from hudi.test_recon1;").show()\n\nmissing_field_json = \'{"uuid":2,"ts":1}\'\ndf = spark.read.json(sc.parallelize([missing_field_json]))\n\ndf.write.format("hudi").mode("append").options(**hudi_options).save(base_path)\n\nspark.sql("select * from hudi.test_recon1;").show()\n'})}),"\n",(0,n.jsx)(i.p,{children:"After first write:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"_hoodie_commit_time"}),(0,n.jsx)(i.th,{children:"_hoodie_commit_seqno"}),(0,n.jsx)(i.th,{children:"_hoodie_record_key"}),(0,n.jsx)(i.th,{children:"_hoodie_partition_path"}),(0,n.jsx)(i.th,{children:"_hoodie_file_name"}),(0,n.jsx)(i.th,{children:"Url"}),(0,n.jsx)(i.th,{children:"ts"}),(0,n.jsx)(i.th,{children:"uuid"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"20220622204044318"}),(0,n.jsx)(i.td,{children:"20220622204044318..."}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"890aafc0-d897-44d..."}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"http://hudi.apache.com",children:"hudi.apache.com"})}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"1"})]})})]}),"\n",(0,n.jsx)(i.p,{children:"After the second write:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"_hoodie_commit_time"}),(0,n.jsx)(i.th,{children:"_hoodie_commit_seqno"}),(0,n.jsx)(i.th,{children:"_hoodie_record_key"}),(0,n.jsx)(i.th,{children:"_hoodie_partition_path"}),(0,n.jsx)(i.th,{children:"_hoodie_file_name"}),(0,n.jsx)(i.th,{children:"Url"}),(0,n.jsx)(i.th,{children:"ts"}),(0,n.jsx)(i.th,{children:"uuid"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"20220622204044318"}),(0,n.jsx)(i.td,{children:"20220622204044318..."}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"890aafc0-d897-44d..."}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"http://hudi.apache.com",children:"hudi.apache.com"})}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"1"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"20220622204208997"}),(0,n.jsx)(i.td,{children:"20220622204208997..."}),(0,n.jsx)(i.td,{children:"2"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"890aafc0-d897-44d..."}),(0,n.jsx)(i.td,{children:"null"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"2"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"can-i-change-keygenerator-for-an-existing-table",children:"Can I change keygenerator for an existing table?"}),"\n",(0,n.jsxs)(i.p,{children:["No. There are small set of properties that cannot change once chosen. KeyGenerator is one among them. ",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/3f37d4fb08169c95930f9cc32389abf4e5cd5551/hudi-spark-datasource/hudi-spark-common/src/main/scala/org/apache/hudi/HoodieWriterUtils.scala#L128",children:"Here"})," is a code referecne where we"]}),"\n",(0,n.jsx)(i.p,{children:"validate the properties."}),"\n",(0,n.jsx)(i.h3,{id:"is-hudi-jvm-dependent-does-hudi-leverage-java-specific-serialization",children:"Is Hudi JVM dependent? Does Hudi leverage Java specific serialization?"}),"\n",(0,n.jsx)(i.p,{children:"Hudi was not originally designed as a database layer that would fit under the various big data query engines, that were painfully hard to integrate with (Spark did not have DataSet/DataSource APIs, Trino was still Presto, Presto SPI was still budding, Hive storage handlers were just out). Popular engines including Spark, Flink, Presto, Trino, and Athena do not have issues integrating with Hudi as they are all based on JVM, and access access to Timeline, Metadata table are well-abstracted by Hudi APIs. Even non-jvm engines like Redshift have successfully integrated with Hudi."}),"\n",(0,n.jsxs)(i.p,{children:['Since it was not thought of as a "format", the focus on the APIs for such lower level integrations and documenting the serialized bytes has been historically inadequate. However, with some understanding of the serialization, looking beyond the APIs used and focus on what the serialized bytes are, its possible to integrate Hudi from outside the JVM. For e.g Bloom filters are serialized as hex strings, from byte arrays/primitive types, and should be ',(0,n.jsx)(i.strong,{children:"readable cross language"}),". The Hudi Log Format bytes and layout are clearly defined as well, the header/footers are also binary serialized only with primitive types/byte arrays. So with the right endianity information and documentation of these bytes, ",(0,n.jsx)(i.strong,{children:"cross jvm clients can read this"}),". The Hudi metadata table uses ",(0,n.jsx)(i.a,{href:"https://hbase.apache.org/book.html#_hfile_format_2",children:"HFile format"})," as the base file format, which while being a well-documented open file format with clear protobuf specifications, does not have native readers. Community has taken efforts towards improving the docs on ",(0,n.jsx)(i.a,{href:"/tech-specs",children:"tech specs"}),". Going forward, Hudi community plans on improving the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/pull/7080",children:"table APIs"})," to facilitate faster engine integrations, including native language support, as a big part of the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-69/rfc-69.md",children:"Hudi 1.0"})," format changes to generalize Hudi more."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"Note"})}),": ",(0,n.jsx)(i.em,{children:"In a recent release the delete block keys were unintentionally serialized as kryo, and is being fixed in the 0.14 release. Thankfully, since Hudi\u2019s log blocks and format are versioned, when the file slice is compacted things return to normal."})]})]})}function c(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);