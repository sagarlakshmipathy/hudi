"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[48733],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}},61781:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"syncing_metastore","title":"Hive Metastore","description":"Hive Metastore is an","source":"@site/docs/syncing_metastore.md","sourceDirName":".","slug":"/syncing_metastore","permalink":"/cn/docs/next/syncing_metastore","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/syncing_metastore.md","tags":[],"version":"current","frontMatter":{"title":"Hive Metastore","keywords":["hudi","hive","sync"]},"sidebar":"docs","previous":{"title":"DataHub","permalink":"/cn/docs/next/syncing_datahub"},"next":{"title":"Google BigQuery","permalink":"/cn/docs/next/gcp_bigquery"}}');var o=i(74848),r=i(28453);const s={title:"Hive Metastore",keywords:["hudi","hive","sync"]},a=void 0,d={},c=[{value:"Spark Data Source example",id:"spark-data-source-example",level:2},{value:"Query using HiveQL",id:"query-using-hiveql",level:3},{value:"Use partition extractor properly",id:"use-partition-extractor-properly",level:3},{value:"Hive Sync Tool",id:"hive-sync-tool",level:2},{value:"Hive Sync Configuration",id:"hive-sync-configuration",level:3},{value:"Sync modes",id:"sync-modes",level:3},{value:"HMS",id:"hms",level:4},{value:"JDBC",id:"jdbc",level:4},{value:"HIVEQL",id:"hiveql",level:4},{value:"Flink Setup",id:"flink-setup",level:2},{value:"Install",id:"install",level:3},{value:"Hive Environment",id:"hive-environment",level:3},{value:"Sync Template",id:"sync-template",level:3},{value:"Query",id:"query",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/Hive/AdminManual+Metastore+Administration",children:"Hive Metastore"})," is an\nRDBMS-backed service from Apache Hive that acts as a catalog for your data warehouse or data lake. It can store all the\nmetadata about the tables, such as partitions, columns, column types, etc. One can sync the Hudi table metadata to the\nHive metastore as well. This unlocks the capability to query Hudi tables not only through Hive but also using\ninteractive query engines such as Presto and Trino. In this document, we will go through different ways to sync the Hudi\ntable to Hive metastore."]}),"\n",(0,o.jsx)(n.h2,{id:"spark-data-source-example",children:"Spark Data Source example"}),"\n",(0,o.jsxs)(n.p,{children:["Prerequisites: setup hive metastore properly and configure the Spark installation to point to the hive metastore by placing ",(0,o.jsx)(n.code,{children:"hive-site.xml"})," under ",(0,o.jsx)(n.code,{children:"$SPARK_HOME/conf"})]}),"\n",(0,o.jsx)(n.p,{children:"Assume that"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"hiveserver2 is running at port 10000"}),"\n",(0,o.jsx)(n.li,{children:"metastore is running at port 9083"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Then start a spark-shell with Hudi spark bundle jar as a dependency (refer to Quickstart example)"}),"\n",(0,o.jsx)(n.p,{children:"We can run the following script to create a sample hudi table and sync it to hive."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:'// spark-shell\nimport org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.spark.sql.types._\nimport org.apache.spark.sql.Row\n\n\nval databaseName = "my_db"\nval tableName = "hudi_cow"\nval basePath = "/user/hive/warehouse/hudi_cow"\n\nval schema = StructType(Array(\nStructField("rowId", StringType,true),\nStructField("partitionId", StringType,true),\nStructField("preComb", LongType,true),\nStructField("name", StringType,true),\nStructField("versionId", StringType,true),\nStructField("toBeDeletedStr", StringType,true),\nStructField("intToLong", IntegerType,true),\nStructField("longToInt", LongType,true)\n))\n\nval data0 = Seq(Row("row_1", "2021/01/01",0L,"bob","v_0","toBeDel0",0,1000000L), \n               Row("row_2", "2021/01/01",0L,"john","v_0","toBeDel0",0,1000000L), \n               Row("row_3", "2021/01/02",0L,"tom","v_0","toBeDel0",0,1000000L))\n\nvar dfFromData0 = spark.createDataFrame(data0,schema)\n\ndfFromData0.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.precombine.field", "preComb").\n  option("hoodie.datasource.write.recordkey.field", "rowId").\n  option("hoodie.datasource.write.partitionpath.field", "partitionId").\n  option("hoodie.database.name", databaseName).\n  option("hoodie.table.name", tableName).\n  option("hoodie.datasource.write.table.type", "COPY_ON_WRITE").\n  option("hoodie.datasource.write.operation", "upsert").\n  option("hoodie.datasource.write.hive_style_partitioning","true").\n  option("hoodie.datasource.meta.sync.enable", "true").\n  option("hoodie.datasource.hive_sync.mode", "hms").\n  option("hoodie.datasource.hive_sync.metastore.uris", "thrift://hive-metastore:9083").\n  mode(Overwrite).\n  save(basePath)\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["If prefer to use JDBC instead of HMS sync mode, omit ",(0,o.jsx)(n.code,{children:"hoodie.datasource.hive_sync.metastore.uris"})," and configure these instead"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"hoodie.datasource.hive_sync.mode=jdbc\nhoodie.datasource.hive_sync.jdbcurl=<e.g., jdbc:hive2://hiveserver:10000>\nhoodie.datasource.hive_sync.username=<username>\nhoodie.datasource.hive_sync.password=<password>\n"})})]}),"\n",(0,o.jsx)(n.h3,{id:"query-using-hiveql",children:"Query using HiveQL"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"beeline -u jdbc:hive2://hiveserver:10000/my_db \n  --hiveconf hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat \n  --hiveconf hive.stats.autogather=false\n  \nBeeline version 1.2.1.spark2 by Apache Hive\n0: jdbc:hive2://hiveserver:10000> show tables;\n+-----------+--+\n| tab_name  |\n+-----------+--+\n| hudi_cow  |\n+-----------+--+\n1 row selected (0.531 seconds)\n0: jdbc:hive2://hiveserver:10000> select * from hudi_cow limit 1;\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n| hudi_cow._hoodie_commit_time  | hudi_cow._hoodie_commit_seqno  | hudi_cow._hoodie_record_key  | hudi_cow._hoodie_partition_path  |                         hudi_cow._hoodie_file_name                         | hudi_cow.rowid  | hudi_cow.precomb  | hudi_cow.name  | hudi_cow.versionid  | hudi_cow.tobedeletedstr  | hudi_cow.inttolong  | hudi_cow.longtoint  | hudi_cow.partitionid  |\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n| 20220120090023631             | 20220120090023631_1_2          | row_1                        | partitionId=2021/01/01           | 0bf9b822-928f-4a57-950a-6a5450319c83-0_1-24-314_20220120090023631.parquet  | row_1           | 0                 | bob            | v_0                 | toBeDel0                 | 0                   | 1000000             | 2021/01/01            |\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n1 row selected (5.475 seconds)\n0: jdbc:hive2://hiveserver:10000>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"use-partition-extractor-properly",children:"Use partition extractor properly"}),"\n",(0,o.jsxs)(n.p,{children:["When sync to hive metastore, partition values are extracted using ",(0,o.jsx)(n.code,{children:"hoodie.datasource.hive_sync.partition_value_extractor"}),". Before 0.12, this is by default set to\n",(0,o.jsx)(n.code,{children:"org.apache.hudi.hive.SlashEncodedDayPartitionValueExtractor"})," and users usually need to overwrite this manually. Since 0.12, the default value is changed to a more\ngeneric ",(0,o.jsx)(n.code,{children:"org.apache.hudi.hive.MultiPartKeysValueExtractor"})," which extracts partition values using ",(0,o.jsx)(n.code,{children:"/"})," as the separator."]}),"\n",(0,o.jsxs)(n.p,{children:["In case of using some key generator like ",(0,o.jsx)(n.code,{children:"TimestampBasedKeyGenerator"}),", the partition values can be in form of ",(0,o.jsx)(n.code,{children:"yyyy/MM/dd"}),". This is usually undesirable to have the\npartition values extracted as multiple parts like ",(0,o.jsx)(n.code,{children:"[yyyy, MM, dd]"}),". Users can set ",(0,o.jsx)(n.code,{children:"org.apache.hudi.hive.SinglePartPartitionValueExtractor"})," to extract the partition\nvalues as ",(0,o.jsx)(n.code,{children:"yyyy-MM-dd"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["When the table is not partitioned, ",(0,o.jsx)(n.code,{children:"org.apache.hudi.hive.NonPartitionedExtractor"})," should be set. And this is automatically inferred from partition fields configs,\nso users may not need to set it manually. Similarly, if hive-style partitioning is used for the table, then ",(0,o.jsx)(n.code,{children:"org.apache.hudi.hive.HiveStylePartitionValueExtractor"}),"\nwill be inferred and set automatically."]}),"\n",(0,o.jsx)(n.h2,{id:"hive-sync-tool",children:"Hive Sync Tool"}),"\n",(0,o.jsxs)(n.p,{children:["Writing data with ",(0,o.jsx)(n.a,{href:"/docs/writing_data",children:"DataSource"})," writer or ",(0,o.jsx)(n.a,{href:"/docs/hoodie_streaming_ingestion",children:"HoodieStreamer"})," supports syncing of the table's latest schema to Hive metastore, such that queries can pick up new columns and partitions.\nIn case, it's preferable to run this from commandline or in an independent jvm, Hudi provides a ",(0,o.jsx)(n.code,{children:"HiveSyncTool"}),", which can be invoked as below,\nonce you have built the hudi-hive module. Following is how we sync the above Datasource Writer written table to Hive metastore."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"cd hudi-hive\n./run_sync_tool.sh  --jdbc-url jdbc:hive2://hiveserver:10000 --user hive --pass hive --partitioned-by partition --base-path <basePath> --database default --table <tableName>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Starting with Hudi 0.5.1 version read optimized version of merge-on-read tables are suffixed '_ro' by default. For backwards compatibility with older Hudi versions, an optional HiveSyncConfig - ",(0,o.jsx)(n.code,{children:"--skip-ro-suffix"}),", has been provided to turn off '_ro' suffixing if desired. Explore other hive sync options using the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"cd hudi-hive\n./run_sync_tool.sh\n [hudi-hive]$ ./run_sync_tool.sh --help\n"})}),"\n",(0,o.jsx)(n.h3,{id:"hive-sync-configuration",children:"Hive Sync Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Please take a look at the arguments that can be passed to ",(0,o.jsx)(n.code,{children:"run_sync_tool"})," in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/hudi-sync/hudi-hive-sync/src/main/java/org/apache/hudi/hive/HiveSyncConfig.java",children:"HiveSyncConfig"}),".\nAmong them, following are the required arguments:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Parameter(names = {"--database"}, description = "name of the target database in Hive", required = true);\n@Parameter(names = {"--table"}, description = "name of the target table in Hive", required = true);\n@Parameter(names = {"--base-path"}, description = "Basepath of Hudi table to sync", required = true);\n'})}),"\n",(0,o.jsx)(n.p,{children:"Corresponding datasource options for the most commonly used hive sync configs are as follows:"}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsxs)(n.p,{children:["In the table below ",(0,o.jsx)(n.strong,{children:"(N/A)"})," means there is no default value set."]})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"HiveSyncConfig"}),(0,o.jsx)(n.th,{children:"DataSourceWriteOption"}),(0,o.jsx)(n.th,{children:"Default Value"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--database"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.database"}),(0,o.jsx)(n.td,{children:"default"}),(0,o.jsx)(n.td,{children:"Name of the target database in Hive metastore"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--table"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.table"}),(0,o.jsx)(n.td,{children:"(N/A)"}),(0,o.jsx)(n.td,{children:"Name of the target table in Hive. Inferred from the table name in Hudi table config if not specified."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--user"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.username"}),(0,o.jsx)(n.td,{children:"hive"}),(0,o.jsx)(n.td,{children:"Username for hive metastore"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--pass"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.password"}),(0,o.jsx)(n.td,{children:"hive"}),(0,o.jsx)(n.td,{children:"Password for hive metastore"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--jdbc-url"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.jdbcurl"}),(0,o.jsx)(n.td,{children:"jdbc:hive2://localhost:10000"}),(0,o.jsxs)(n.td,{children:["Hive server url if using ",(0,o.jsx)(n.code,{children:"jdbc"})," mode to sync"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--sync-mode"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.mode"}),(0,o.jsx)(n.td,{children:"(N/A)"}),(0,o.jsxs)(n.td,{children:["Mode to choose for Hive ops. Valid values are ",(0,o.jsx)(n.code,{children:"hms"}),", ",(0,o.jsx)(n.code,{children:"jdbc"})," and ",(0,o.jsx)(n.code,{children:"hiveql"}),". More details in the following section."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--partitioned-by"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.partition_fields"}),(0,o.jsx)(n.td,{children:"(N/A)"}),(0,o.jsx)(n.td,{children:"Comma-separated column names in the table to use for determining hive partition."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--partition-value-extractor"}),(0,o.jsx)(n.td,{children:"hoodie.datasource.hive_sync.partition_extractor_class"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"org.apache.hudi.hive.MultiPartKeysValueExtractor"})}),(0,o.jsxs)(n.td,{children:["Class which implements ",(0,o.jsx)(n.code,{children:"PartitionValueExtractor"})," to extract the partition values. Inferred automatically depending on the partition fields specified."]})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"sync-modes",children:"Sync modes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"HiveSyncTool"})," supports three modes, namely ",(0,o.jsx)(n.code,{children:"HMS"}),", ",(0,o.jsx)(n.code,{children:"HIVEQL"}),", ",(0,o.jsx)(n.code,{children:"JDBC"}),", to connect to Hive metastore server.\nThese modes are just three different ways of executing DDL against Hive. Among these modes, JDBC or HMS is preferable over\nHIVEQL, which is mostly used for running DML rather than DDL."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["All these modes assume that hive metastore has been configured and the corresponding properties set in\n",(0,o.jsx)(n.code,{children:"hive-site.xml"})," configuration file. Additionally, if you're using spark-shell/spark-sql to sync Hudi table to Hive then\nthe ",(0,o.jsx)(n.code,{children:"hive-site.xml"})," file also needs to be placed under ",(0,o.jsx)(n.code,{children:"<SPARK_HOME>/conf"})," directory."]})}),"\n",(0,o.jsx)(n.h4,{id:"hms",children:"HMS"}),"\n",(0,o.jsxs)(n.p,{children:["HMS mode uses the hive metastore client to sync Hudi table using thrift APIs directly.\nTo use this mode, pass ",(0,o.jsx)(n.code,{children:"--sync-mode=hms"})," to ",(0,o.jsx)(n.code,{children:"run_sync_tool"})," and set ",(0,o.jsx)(n.code,{children:"--use-jdbc=false"}),".\nAdditionally, if you are using remote metastore, then ",(0,o.jsx)(n.code,{children:"hive.metastore.uris"})," need to be set in hive-site.xml configuration file.\nOtherwise, the tool assumes that metastore is running locally on port 9083 by default."]}),"\n",(0,o.jsx)(n.h4,{id:"jdbc",children:"JDBC"}),"\n",(0,o.jsx)(n.p,{children:"This mode uses the JDBC specification to connect to the hive metastore."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Parameter(names = {"--jdbc-url"}, description = "Hive jdbc connect url");\n'})}),"\n",(0,o.jsx)(n.h4,{id:"hiveql",children:"HIVEQL"}),"\n",(0,o.jsxs)(n.p,{children:["HQL is Hive's own SQL dialect.\nThis mode simply uses the Hive QL's ",(0,o.jsx)(n.a,{href:"https://github.com/apache/hive/blob/master/ql/src/java/org/apache/hadoop/hive/ql/Driver.java",children:"driver"})," to execute DDL as HQL command.\nTo use this mode, pass ",(0,o.jsx)(n.code,{children:"--sync-mode=hiveql"})," to ",(0,o.jsx)(n.code,{children:"run_sync_tool"})," and set ",(0,o.jsx)(n.code,{children:"--use-jdbc=false"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"flink-setup",children:"Flink Setup"}),"\n",(0,o.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,o.jsxs)(n.p,{children:["Now you can git clone Hudi master branch to test Flink hive sync. The first step is to install Hudi to get ",(0,o.jsx)(n.code,{children:"hudi-flink1.1x-bundle-0.x.x.jar"}),".\n",(0,o.jsx)(n.code,{children:"hudi-flink-bundle"})," module pom.xml sets the scope related to hive as ",(0,o.jsx)(n.code,{children:"provided"})," by default. If you want to use hive sync, you need to use the\nprofile ",(0,o.jsx)(n.code,{children:"flink-bundle-shade-hive"})," during packaging. Executing command below to install:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Maven install command\nmvn install -DskipTests -Drat.skip=true -Pflink-bundle-shade-hive2\n\n# For hive1, you need to use profile -Pflink-bundle-shade-hive1\n# For hive3, you need to use profile -Pflink-bundle-shade-hive3 \n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Hive1.x can only synchronize metadata to hive, but cannot use hive query now. If you need to query, you can use spark to query hive table."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If using hive profile, you need to modify the hive version in the profile to your hive cluster version (Only need to modify the hive version in this profile).\nThe location of this ",(0,o.jsx)(n.code,{children:"pom.xml"})," is ",(0,o.jsx)(n.code,{children:"packaging/hudi-flink-bundle/pom.xml"}),", and the corresponding profile is at the bottom of this file."]})}),"\n",(0,o.jsx)(n.h3,{id:"hive-environment",children:"Hive Environment"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Import ",(0,o.jsx)(n.code,{children:"hudi-hadoop-mr-bundle"})," into hive. Creating ",(0,o.jsx)(n.code,{children:"auxlib/"})," folder under the root directory of hive, and moving ",(0,o.jsx)(n.code,{children:"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar"})," into ",(0,o.jsx)(n.code,{children:"auxlib"}),".\n",(0,o.jsx)(n.code,{children:"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar"})," is at ",(0,o.jsx)(n.code,{children:"packaging/hudi-hadoop-mr-bundle/target"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When Flink sql client connects hive metastore remotely, ",(0,o.jsx)(n.code,{children:"hive metastore"})," and ",(0,o.jsx)(n.code,{children:"hiveserver2"})," services need to be enabled, and the port number need to\nbe set correctly. Command to turn on the services:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Enable hive metastore and hiveserver2\nnohup ./bin/hive --service metastore &\nnohup ./bin/hive --service hiveserver2 &\n\n# While modifying the jar package under auxlib, you need to restart the service.\n"})}),"\n",(0,o.jsx)(n.h3,{id:"sync-template",children:"Sync Template"}),"\n",(0,o.jsxs)(n.p,{children:["Flink hive sync now supports two hive sync mode, ",(0,o.jsx)(n.code,{children:"hms"})," and ",(0,o.jsx)(n.code,{children:"jdbc"}),". ",(0,o.jsx)(n.code,{children:"hms"})," mode only needs to configure metastore uris. For\nthe ",(0,o.jsx)(n.code,{children:"jdbc"})," mode, the JDBC attributes and metastore uris both need to be configured. The options template is as below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"-- hms mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  -- If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'hms',        -- Required. Setting hive sync mode to hms, default hms. (Before 0.13, the default sync mode was jdbc.)\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083' -- Required. The port need set on hive-site.xml\n);\n\n\n-- jdbc mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  --If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'jdbc',       -- Required. Setting hive sync mode to jdbc, default hms. (Before 0.13, the default sync mode was jdbc.)\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083', -- Required. The port need set on hive-site.xml\n  'hive_sync.jdbc_url'='jdbc:hive2://${ip}:10000',    -- required, hiveServer port\n  'hive_sync.table'='${table_name}',                  -- required, hive table name\n  'hive_sync.db'='${db_name}',                        -- required, hive database name\n  'hive_sync.username'='${user_name}',                -- required, JDBC username\n  'hive_sync.password'='${password}'                  -- required, JDBC password\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,o.jsx)(n.p,{children:"While using hive beeline query, you need to enter settings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"set hive.input.format = org.apache.hudi.hadoop.hive.HoodieCombineHiveInputFormat;\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);