"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59004],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var i=r(96540);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},37041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"querying_data","title":"Querying Hudi Tables","description":"Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained before.","source":"@site/versioned_docs/version-0.5.3/querying_data.md","sourceDirName":".","slug":"/querying_data","permalink":"/docs/0.5.3/querying_data","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.3/querying_data.md","tags":[],"version":"0.5.3","frontMatter":{"version":"0.5.3","title":"Querying Hudi Tables","keywords":["hudi","hive","spark","sql","presto"],"summary":"In this page, we go over how to enable SQL queries on Hudi built tables.","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Writing Hudi Tables","permalink":"/docs/0.5.3/writing_data"},"next":{"title":"Configurations","permalink":"/docs/0.5.3/configurations"}}');var n=r(74848),s=r(28453);const a={version:"0.5.3",title:"Querying Hudi Tables",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to enable SQL queries on Hudi built tables.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},d=void 0,l={},o=[{value:"Support Matrix",id:"support-matrix",level:2},{value:"Copy-On-Write tables",id:"copy-on-write-tables",level:3},{value:"Merge-On-Read tables",id:"merge-on-read-tables",level:3},{value:"Hive",id:"hive",level:2},{value:"Incremental query",id:"incremental-query",level:3},{value:"Spark SQL",id:"spark-sql",level:2},{value:"Spark Datasource",id:"spark-datasource",level:2},{value:"Incremental query",id:"spark-incr-query",level:3},{value:"Presto",id:"presto",level:2},{value:"Impala (3.4 or later)",id:"impala-34-or-later",level:2},{value:"Snapshot Query",id:"snapshot-query",level:3}];function c(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained ",(0,n.jsx)(t.a,{href:"/docs/concepts#query-types",children:"before"}),".\nOnce the table is synced to the Hive metastore, it provides external Hive tables backed by Hudi's custom inputformats. Once the proper hudi\nbundle has been installed, the table can be queried by popular query engines like Hive, Spark SQL, Spark Datasource API and Presto."]}),"\n",(0,n.jsxs)(t.p,{children:["Specifically, following Hive tables are registered based off ",(0,n.jsx)(t.a,{href:"/docs/configurations#TABLE_NAME_OPT_KEY",children:"table name"}),"\nand ",(0,n.jsx)(t.a,{href:"/docs/configurations#TABLE_TYPE_OPT_KEY",children:"table type"})," configs passed during write."]}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"table name = hudi_trips"})," and ",(0,n.jsx)(t.code,{children:"table type = COPY_ON_WRITE"}),", then we get:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hudi_trips"})," supports snapshot query and incremental query on the table backed by ",(0,n.jsx)(t.code,{children:"HoodieParquetInputFormat"}),", exposing purely columnar data."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"table name = hudi_trips"})," and ",(0,n.jsx)(t.code,{children:"table type = MERGE_ON_READ"}),", then we get:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hudi_trips_rt"})," supports snapshot query and incremental query (providing near-real time data) on the table  backed by ",(0,n.jsx)(t.code,{children:"HoodieParquetRealtimeInputFormat"}),", exposing merged view of base and log data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hudi_trips_ro"})," supports read optimized query on the table backed by ",(0,n.jsx)(t.code,{children:"HoodieParquetInputFormat"}),", exposing purely columnar data stored in base files."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["As discussed in the concepts section, the one key capability needed for ",(0,n.jsx)(t.a,{href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop",children:"incrementally processing"}),",\nis obtaining a change stream/log from a table. Hudi tables can be queried incrementally, which means you can get ALL and ONLY the updated & new rows\nsince a specified instant time. This, together with upserts, is particularly useful for building data pipelines where 1 or more source Hudi tables are incrementally queried (streams/facts),\njoined with other tables (tables/dimensions), to ",(0,n.jsx)(t.a,{href:"/docs/writing_data",children:"write out deltas"})," to a target Hudi table. Incremental queries are realized by querying one of the tables above,\nwith special configurations that indicates to query planning that only incremental data needs to be fetched out of the table."]}),"\n",(0,n.jsx)(t.h2,{id:"support-matrix",children:"Support Matrix"}),"\n",(0,n.jsx)(t.p,{children:"Following tables show whether a given query is supported on specific query engine."}),"\n",(0,n.jsx)(t.h3,{id:"copy-on-write-tables",children:"Copy-On-Write tables"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Query Engine"}),(0,n.jsx)(t.th,{children:"Snapshot Queries"}),(0,n.jsx)(t.th,{children:"Incremental Queries"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Hive"})}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Spark SQL"})}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Spark Datasource"})}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Presto"})}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"N"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Impala"})}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"N"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Note that ",(0,n.jsx)(t.code,{children:"Read Optimized"})," queries are not applicable for COPY_ON_WRITE tables."]}),"\n",(0,n.jsx)(t.h3,{id:"merge-on-read-tables",children:"Merge-On-Read tables"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Query Engine"}),(0,n.jsx)(t.th,{children:"Snapshot Queries"}),(0,n.jsx)(t.th,{children:"Incremental Queries"}),(0,n.jsx)(t.th,{children:"Read Optimized Queries"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Hive"})}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Spark SQL"})}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"Y"}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Spark Datasource"})}),(0,n.jsx)(t.td,{children:"N"}),(0,n.jsx)(t.td,{children:"N"}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Presto"})}),(0,n.jsx)(t.td,{children:"N"}),(0,n.jsx)(t.td,{children:"N"}),(0,n.jsx)(t.td,{children:"Y"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Impala"})}),(0,n.jsx)(t.td,{children:"N"}),(0,n.jsx)(t.td,{children:"N"}),(0,n.jsx)(t.td,{children:"Y"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"In sections, below we will discuss specific setup to access different query types from different query engines."}),"\n",(0,n.jsx)(t.h2,{id:"hive",children:"Hive"}),"\n",(0,n.jsx)(t.p,{children:"In order for Hive to recognize Hudi tables and query correctly,"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the HiveServer2 needs to be provided with the ",(0,n.jsx)(t.code,{children:"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar"})," in its ",(0,n.jsx)(t.a,{href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf#concept_nc3_mms_lr",children:"aux jars path"}),". This will ensure the input format\nclasses with its dependencies are available for query planning & execution."]}),"\n",(0,n.jsx)(t.li,{children:"For MERGE_ON_READ tables, additionally the bundle needs to be put on the hadoop/hive installation across the cluster, so that queries can pick up the custom RecordReader as well."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In addition to setup above, for beeline cli access, the ",(0,n.jsx)(t.code,{children:"hive.input.format"})," variable needs to be set to the fully qualified path name of the\ninputformat ",(0,n.jsx)(t.code,{children:"org.apache.hudi.hadoop.HoodieParquetInputFormat"}),". For Tez, additionally the ",(0,n.jsx)(t.code,{children:"hive.tez.input.format"})," needs to be set\nto ",(0,n.jsx)(t.code,{children:"org.apache.hadoop.hive.ql.io.HiveInputFormat"}),". Then proceed to query the table like any other Hive table."]}),"\n",(0,n.jsx)(t.h3,{id:"incremental-query",children:"Incremental query"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"HiveIncrementalPuller"})," allows incrementally extracting changes from large fact/dimension tables via HiveQL, combining the benefits of Hive (reliably process complex SQL queries) and\nincremental primitives (speed up querying tables incrementally instead of scanning fully). The tool uses Hive JDBC to run the hive query and saves its results in a temp table.\nthat can later be upserted. Upsert utility (",(0,n.jsx)(t.code,{children:"HoodieDeltaStreamer"}),") has all the state it needs from the directory structure to know what should be the commit time on the target table.\ne.g: ",(0,n.jsx)(t.code,{children:"/app/incremental-hql/intermediate/{source_table_name}_temp/{last_commit_included}"}),".The Delta Hive table registered will be of the form ",(0,n.jsx)(t.code,{children:"{tmpdb}.{source_table}_{last_commit_included}"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The following are the configuration options for HiveIncrementalPuller"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Config"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Default"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hiveUrl"}),(0,n.jsx)(t.td,{children:"Hive Server 2 URL to connect to"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hiveUser"}),(0,n.jsx)(t.td,{children:"Hive Server 2 Username"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hivePass"}),(0,n.jsx)(t.td,{children:"Hive Server 2 Password"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"queue"}),(0,n.jsx)(t.td,{children:"YARN Queue name"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tmp"}),(0,n.jsx)(t.td,{children:"Directory where the temporary delta data is stored in DFS. The directory structure will follow conventions. Please see the below section."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"extractSQLFile"}),(0,n.jsx)(t.td,{children:"The SQL to execute on the source table to extract the data. The data extracted will be all the rows that changed since a particular point in time."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sourceTable"}),(0,n.jsx)(t.td,{children:"Source Table Name. Needed to set hive environment properties."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sourceDb"}),(0,n.jsx)(t.td,{children:"Source DB name. Needed to set hive environment properties."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"targetTable"}),(0,n.jsx)(t.td,{children:"Target Table Name. Needed for the intermediate storage directory structure."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"targetDb"}),(0,n.jsx)(t.td,{children:"Target table's DB name."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tmpdb"}),(0,n.jsx)(t.td,{children:"The database to which the intermediate temp delta table will be created"}),(0,n.jsx)(t.td,{children:"hoodie_temp"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fromCommitTime"}),(0,n.jsx)(t.td,{children:"This is the most important parameter. This is the point in time from which the changed records are queried from."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxCommits"}),(0,n.jsx)(t.td,{children:"Number of commits to include in the query. Setting this to -1 will include all the commits from fromCommitTime. Setting this to a value > 0, will include records that ONLY changed in the specified number of commits after fromCommitTime. This may be needed if you need to catch up say 2 commits at a time."}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"help"}),(0,n.jsx)(t.td,{children:"Utility Help"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Setting fromCommitTime=0 and maxCommits=-1 will fetch the entire source table and can be used to initiate backfills. If the target table is a Hudi table,\nthen the utility can determine if the target table has no commits or is behind more than 24 hour (this is configurable),\nit will automatically use the backfill configuration, since applying the last 24 hours incrementally could take more time than doing a backfill. The current limitation of the tool\nis the lack of support for self-joining the same table in mixed mode (snapshot and incremental modes)."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE on Hive incremental queries that are executed using Fetch task:"}),"\nSince Fetch tasks invoke InputFormat.listStatus() per partition, Hoodie metadata can be listed in\nevery such listStatus() call. In order to avoid this, it might be useful to disable fetch tasks\nusing the hive session property for incremental queries: ",(0,n.jsx)(t.code,{children:"set hive.fetch.task.conversion=none;"})," This\nwould ensure Map Reduce execution is chosen for a Hive query, which combines partitions (comma\nseparated) and calls InputFormat.listStatus() only once with all those partitions."]}),"\n",(0,n.jsx)(t.h2,{id:"spark-sql",children:"Spark SQL"}),"\n",(0,n.jsx)(t.p,{children:"Once the Hudi tables have been registered to the Hive metastore, it can be queried using the Spark-Hive integration. It supports all query types across both Hudi table types,\nrelying on the custom Hudi input formats again like Hive. Typically notebook users and spark-shell users leverage spark sql for querying Hudi tables. Please add hudi-spark-bundle as described above via --jars or --packages."}),"\n",(0,n.jsxs)(t.p,{children:["By default, Spark SQL will try to use its own parquet reader instead of Hive SerDe when reading from Hive metastore parquet tables. However, for MERGE_ON_READ tables which has\nboth parquet and avro data, this default setting needs to be turned off using set ",(0,n.jsx)(t.code,{children:"spark.sql.hive.convertMetastoreParquet=false"}),".\nThis will force Spark to fallback to using the Hive Serde to read the data (planning/executions is still Spark)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"$ spark-shell --driver-class-path /etc/hive/conf  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3,org.apache.spark:spark-avro_2.11:2.4.4 --conf spark.sql.hive.convertMetastoreParquet=false --num-executors 10 --driver-memory 7g --executor-memory 2g  --master yarn-client\n\nscala> sqlContext.sql(\"select count(*) from hudi_trips_mor_rt where datestr = '2016-10-02'\").show()\nscala> sqlContext.sql(\"select count(*) from hudi_trips_mor_rt where datestr = '2016-10-02'\").show()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For COPY_ON_WRITE tables, either Hive SerDe can be used by turning off ",(0,n.jsx)(t.code,{children:"spark.sql.hive.convertMetastoreParquet=false"})," as described above or Spark's built in support can be leveraged.\nIf using spark's built in support, additionally a path filter needs to be pushed into sparkContext as follows. This method retains Spark built-in optimizations for reading parquet files like vectorized reading on Hudi Hive tables."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'spark.sparkContext.hadoopConfiguration.setClass("mapreduce.input.pathFilter.class", classOf[org.apache.hudi.hadoop.HoodieROTablePathFilter], classOf[org.apache.hadoop.fs.PathFilter]);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"spark-datasource",children:"Spark Datasource"}),"\n",(0,n.jsxs)(t.p,{children:["The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi COPY_ON_WRITE tables can be queried via Spark datasource similar to how standard\ndatasources work (e.g: ",(0,n.jsx)(t.code,{children:"spark.read.parquet"}),"). Both snapshot querying and incremental querying are supported here. Typically spark jobs require adding ",(0,n.jsx)(t.code,{children:"--jars <path to jar>/hudi-spark-bundle_2.11-<hudi version>.jar"})," to classpath of drivers\nand executors. Alternatively, hudi-spark-bundle can also fetched via the ",(0,n.jsx)(t.code,{children:"--packages"})," options (e.g: ",(0,n.jsx)(t.code,{children:"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3"}),")."]}),"\n",(0,n.jsx)(t.h3,{id:"spark-incr-query",children:"Incremental query"}),"\n",(0,n.jsxs)(t.p,{children:["Of special interest to spark pipelines, is Hudi's ability to support incremental queries, like below. A sample incremental query, that will obtain all records written since ",(0,n.jsx)(t.code,{children:"beginInstantTime"}),", looks like below.\nThanks to Hudi's support for record level change streams, these incremental pipelines often offer 10x efficiency over batch counterparts, by only processing the changed records.\nThe following snippet shows how to obtain all records changed after ",(0,n.jsx)(t.code,{children:"beginInstantTime"})," and run some SQL on them."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:' Dataset<Row> hudiIncQueryDF = spark.read()\n     .format("org.apache.hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_INCREMENTAL_OPT_VAL())\n     .option(DataSourceReadOptions.BEGIN_INSTANTTIME_OPT_KEY(), <beginInstantTime>)\n     .option(DataSourceReadOptions.INCR_PATH_GLOB_OPT_KEY(), "/year=2020/month=*/day=*") // Optional, use glob pattern if querying certain partitions\n     .load(tablePath); // For incremental query, pass in the root/base path of table\n     \nhudiIncQueryDF.createOrReplaceTempView("hudi_trips_incremental")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For examples, refer to ",(0,n.jsx)(t.a,{href:"quick-start-guide#setup",children:"Setup spark-shell in quickstart"}),".\nPlease refer to ",(0,n.jsx)(t.a,{href:"/docs/configurations#spark-datasource-configs",children:"configurations"})," section, to view all datasource options."]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, ",(0,n.jsx)(t.code,{children:"HoodieReadClient"})," offers the following functionality using Hudi's implicit indexing."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"API"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"read(keys)"}),(0,n.jsx)(t.td,{children:"Read out the data corresponding to the keys as a DataFrame, using Hudi's own index for faster lookup"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filterExists()"}),(0,n.jsxs)(t.td,{children:["Filter out already existing records from the provided ",(0,n.jsx)(t.code,{children:"RDD[HoodieRecord]"}),". Useful for de-duplication"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"checkExists(keys)"}),(0,n.jsx)(t.td,{children:"Check if the provided keys exist in a Hudi table"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"presto",children:"Presto"}),"\n",(0,n.jsxs)(t.p,{children:["Presto is a popular query engine, providing interactive query performance. Presto currently supports snapshot queries on COPY_ON_WRITE and read optimized queries\non MERGE_ON_READ Hudi tables. This requires the ",(0,n.jsx)(t.code,{children:"hudi-presto-bundle"})," jar to be placed into ",(0,n.jsx)(t.code,{children:"<presto_install>/plugin/hive-hadoop2/"}),", across the installation."]}),"\n",(0,n.jsx)(t.h2,{id:"impala-34-or-later",children:"Impala (3.4 or later)"}),"\n",(0,n.jsx)(t.h3,{id:"snapshot-query",children:"Snapshot Query"}),"\n",(0,n.jsxs)(t.p,{children:["Impala is able to query Hudi Copy-on-write table as an ",(0,n.jsx)(t.a,{href:"https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/impala_tables#external_tables",children:"EXTERNAL TABLE"})," on HDFS."]}),"\n",(0,n.jsx)(t.p,{children:"To create a Hudi read optimized table on Impala:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Impala is able to take advantage of the physical partition structure to improve the query performance.\nTo create a partitioned table, the folder should follow the naming convention like ",(0,n.jsx)(t.code,{children:"year=2020/month=1"}),".\nImpala use ",(0,n.jsx)(t.code,{children:"="})," to separate partition name and partition value.",(0,n.jsx)(t.br,{}),"\n","To create a partitioned Hudi read optimized table on Impala:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nPARTITION BY (year int, month int, day int)\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\nALTER TABLE database.table_name RECOVER PARTITIONS;\n"})}),"\n",(0,n.jsx)(t.p,{children:"After Hudi made a new commit, refresh the Impala table to get the latest results."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"REFRESH database.table_name\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);