"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[79739],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}},49400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"writing_data","title":"Batch Writes","description":"Spark DataSource API","source":"@site/versioned_docs/version-0.15.0/writing_data.md","sourceDirName":".","slug":"/writing_data","permalink":"/docs/0.15.0/writing_data","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/writing_data.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Batch Writes","keywords":["hudi","incremental","batch","processing"],"last_modified_at":"2024-03-13T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"SQL DML","permalink":"/docs/0.15.0/sql_dml"},"next":{"title":"Streaming Writes","permalink":"/docs/0.15.0/writing_tables_streaming_writes"}}');var a=n(74848),i=n(28453),o=n(65537),s=n(79329);const l={title:"Batch Writes",keywords:["hudi","incremental","batch","processing"],last_modified_at:new Date("2024-03-13T19:59:57.000Z")},d=void 0,c={},h=[{value:"Spark DataSource API",id:"spark-datasource-api",level:2},{value:"Insert Overwrite Table",id:"insert-overwrite-table",level:3},{value:"Insert Overwrite",id:"insert-overwrite",level:3},{value:"Deletes",id:"deletes",level:3},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"Java Client",id:"java-client",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"spark-datasource-api",children:"Spark DataSource API"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"hudi-spark"})," module offers the DataSource API to write a Spark DataFrame into a Hudi table."]}),"\n",(0,a.jsx)(t.p,{children:"There are a number of options available:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"HoodieWriteConfig"})}),":"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TABLE_NAME"})," ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"DataSourceWriteOptions"})}),":"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"RECORDKEY_FIELD"}),": Primary key field(s). Record keys uniquely identify a record/row within each partition. If one wants to have a global uniqueness, there are two options. You could either make the dataset non-partitioned, or, you can leverage Global indexes to ensure record keys are unique irrespective of the partition path. Record keys can either be a single column or refer to multiple columns. ",(0,a.jsx)(t.code,{children:"KEYGENERATOR_CLASS_OPT_KEY"})," property should be set accordingly based on whether it is a simple or complex key. For eg: ",(0,a.jsx)(t.code,{children:'"col1"'})," for simple field, ",(0,a.jsx)(t.code,{children:'"col1,col2,col3,etc"'})," for complex field. Nested fields can be specified using the dot notation eg: ",(0,a.jsx)(t.code,{children:"a.b.c"}),". ",(0,a.jsx)("br",{}),"\nDefault value: ",(0,a.jsx)(t.code,{children:'"uuid"'}),(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"PARTITIONPATH_FIELD"}),": Columns to be used for partitioning the table. To prevent partitioning, provide empty string as value eg: ",(0,a.jsx)(t.code,{children:'""'}),". Specify partitioning/no partitioning using ",(0,a.jsx)(t.code,{children:"KEYGENERATOR_CLASS_OPT_KEY"}),". If partition path needs to be url encoded, you can set ",(0,a.jsx)(t.code,{children:"URL_ENCODE_PARTITIONING_OPT_KEY"}),". If synchronizing to hive, also specify using ",(0,a.jsx)(t.code,{children:"HIVE_PARTITION_EXTRACTOR_CLASS_OPT_KEY."}),(0,a.jsx)("br",{}),"\nDefault value: ",(0,a.jsx)(t.code,{children:'"partitionpath"'}),(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"PRECOMBINE_FIELD"}),": When two records within the same batch have the same key value, the record with the largest value from the field specified will be choosen. If you are using default payload of OverwriteWithLatestAvroPayload for HoodieRecordPayload (",(0,a.jsx)(t.code,{children:"WRITE_PAYLOAD_CLASS"}),"), an incoming record will always takes precendence compared to the one in storage ignoring this ",(0,a.jsx)(t.code,{children:"PRECOMBINE_FIELD_OPT_KEY"}),". ",(0,a.jsx)("br",{}),"\nDefault value: ",(0,a.jsx)(t.code,{children:'"ts"'}),(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"OPERATION"}),": The ",(0,a.jsx)(t.a,{href:"/docs/write_operations",children:"write operations"})," to use.",(0,a.jsx)("br",{}),"\nAvailable values:",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.code,{children:'"upsert"'})," (default), ",(0,a.jsx)(t.code,{children:'"bulk_insert"'}),", ",(0,a.jsx)(t.code,{children:'"insert"'}),", ",(0,a.jsx)(t.code,{children:'"delete"'})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TABLE_TYPE"}),": The ",(0,a.jsx)(t.a,{href:"/docs/concepts#table-types",children:"type of table"})," to write to. Note: After the initial creation of a table, this value must stay consistent when writing to (updating) the table using the Spark ",(0,a.jsx)(t.code,{children:"SaveMode.Append"})," mode.",(0,a.jsx)("br",{}),"\nAvailable values:",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.a,{href:"/docs/concepts#copy-on-write-table",children:(0,a.jsx)(t.code,{children:"COW_TABLE_TYPE_OPT_VAL"})})," (default), ",(0,a.jsx)(t.a,{href:"/docs/concepts#merge-on-read-table",children:(0,a.jsx)(t.code,{children:"MOR_TABLE_TYPE_OPT_VAL"})})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"KEYGENERATOR_CLASS_NAME"}),": Refer to ",(0,a.jsx)(t.a,{href:"/docs/key_generation",children:"Key Generation"})," section below."]}),"\n",(0,a.jsxs)(t.p,{children:["Example:\nUpsert a DataFrame, specifying the necessary field names for ",(0,a.jsx)(t.code,{children:"recordKey => _row_key"}),", ",(0,a.jsx)(t.code,{children:"partitionPath => partition"}),", and ",(0,a.jsx)(t.code,{children:"precombineKey => timestamp"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'inputDF.write()\n       .format("hudi")\n       .options(clientOpts) //Where clientOpts is of type Map[String, String]. clientOpts can include any other options necessary.\n       .option("hoodie.datasource.write.recordkey.field", "_row_key")\n       .option("hoodie.datasource.write.partitionpath.field", "partition")\n       .option("hoodie.datasource.write.precombine.field"(), "timestamp")\n       .option("hoodie.table.name", tableName)\n       .mode(SaveMode.Append)\n       .save(basePath);\n'})}),"\n",(0,a.jsxs)(o.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"},{label:"SparkSQL",value:"sparksql"}],children:[(0,a.jsxs)(s.A,{value:"scala",children:[(0,a.jsx)(t.p,{children:"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'// spark-shell\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", tableName).\n  mode(Overwrite).\n  save(basePath)\n'})}),(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"mode(Overwrite)"})," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,a.jsx)(t.code,{children:"/tmp/hudi_trips_cow/<region>/<country>/<city>/"}),". We provided a record key\n(",(0,a.jsx)(t.code,{children:"uuid"})," in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/6f9b02decb5bb2b83709b1b6ec04a97e4d102c11/hudi-spark-datasource/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L60",children:"schema"}),"), partition field (",(0,a.jsx)(t.code,{children:"region/country/city"}),") and combine logic (",(0,a.jsx)(t.code,{children:"ts"})," in\n",(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/6f9b02decb5bb2b83709b1b6ec04a97e4d102c11/hudi-spark-datasource/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L60",children:"schema"}),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,a.jsx)(t.a,{href:"faq_general/#how-do-i-model-the-data-stored-in-hudi",children:"Modeling data stored in Hudi"}),"\nand for info on ways to ingest data into Hudi, refer to ",(0,a.jsx)(t.a,{href:"/docs/hoodie_streaming_ingestion",children:"Writing Hudi Tables"}),".\nHere we are using the default write operation : ",(0,a.jsx)(t.code,{children:"upsert"}),". If you have a workload without updates, you can also issue\n",(0,a.jsx)(t.code,{children:"insert"})," or ",(0,a.jsx)(t.code,{children:"bulk_insert"})," operations which could be faster. To know more, refer to ",(0,a.jsx)(t.a,{href:"/docs/write_operations",children:"Write operations"})]})})]}),(0,a.jsxs)(s.A,{value:"python",children:[(0,a.jsx)(t.p,{children:"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# pyspark\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n    'hoodie.table.name': tableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': tableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\").\n    options(**hudi_options).\n    mode(\"overwrite\").\n    save(basePath)\n"})}),(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"mode(Overwrite)"})," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,a.jsx)(t.code,{children:"/tmp/hudi_trips_cow/<region>/<country>/<city>/"}),". We provided a record key\n(",(0,a.jsx)(t.code,{children:"uuid"})," in ",(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/2e6e302efec2fa848ded4f88a95540ad2adb7798/hudi-spark-datasource/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L60",children:"schema"}),"), partition field (",(0,a.jsx)(t.code,{children:"region/country/city"}),") and combine logic (",(0,a.jsx)(t.code,{children:"ts"})," in\n",(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/2e6e302efec2fa848ded4f88a95540ad2adb7798/hudi-spark-datasource/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L60",children:"schema"}),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,a.jsx)(t.a,{href:"faq_general/#how-do-i-model-the-data-stored-in-hudi",children:"Modeling data stored in Hudi"}),"\nand for info on ways to ingest data into Hudi, refer to ",(0,a.jsx)(t.a,{href:"/docs/hoodie_streaming_ingestion",children:"Writing Hudi Tables"}),".\nHere we are using the default write operation : ",(0,a.jsx)(t.code,{children:"upsert"}),". If you have a workload without updates, you can also issue\n",(0,a.jsx)(t.code,{children:"insert"})," or ",(0,a.jsx)(t.code,{children:"bulk_insert"})," operations which could be faster. To know more, refer to ",(0,a.jsx)(t.a,{href:"/docs/write_operations",children:"Write operations"})]})})]}),(0,a.jsxs)(s.A,{value:"sparksql",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"insert into h0 select 1, 'a1', 20;\n\n-- insert static partition\ninsert into h_p0 partition(dt = '2021-01-02') select 1, 'a1';\n\n-- insert dynamic partition\ninsert into h_p0 select 1, 'a1', dt;\n\n-- insert dynamic partition\ninsert into h_p1 select 1 as id, 'a1', '2021-01-03' as dt, '19' as hh;\n\n-- insert overwrite table\ninsert overwrite table h0 select 1, 'a1', 20;\n\n-- insert overwrite table with static partition\ninsert overwrite h_p0 partition(dt = '2021-01-02') select 1, 'a1';\n\n-- insert overwrite table with dynamic partition\n  insert overwrite table h_p1 select 2 as id, 'a2', '2021-01-03' as dt, '19' as hh;\n"})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTICE"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Insert mode : Hudi supports two insert modes when inserting data to a table with primary key(we call it pk-table as followed):",(0,a.jsx)("br",{}),"\nUsing ",(0,a.jsx)(t.code,{children:"strict"})," mode, insert statement will keep the primary key uniqueness constraint for COW table which do not allow\nduplicate records. If a record already exists during insert, a HoodieDuplicateKeyException will be thrown\nfor COW table. For MOR table, updates are allowed to existing record.",(0,a.jsx)("br",{}),"\nUsing ",(0,a.jsx)(t.code,{children:"non-strict"})," mode, hudi uses the same code path used by ",(0,a.jsx)(t.code,{children:"insert"})," operation in spark data source for the pk-table. ",(0,a.jsx)("br",{}),"\nOne can set the insert mode by using the config: ",(0,a.jsx)(t.strong,{children:"hoodie.sql.insert.mode"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Bulk Insert : By default, hudi uses the normal insert operation for insert statements. Users can set ",(0,a.jsx)(t.strong,{children:"hoodie.sql.bulk.insert.enable"}),"\nto true to enable the bulk insert for insert statement."]}),"\n"]}),"\n"]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["Checkout ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators",children:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators"})," for various key generator options, like Timestamp based,\ncomplex, custom, NonPartitioned Key gen, etc."]}),"\n",(0,a.jsx)(t.h3,{id:"insert-overwrite-table",children:"Insert Overwrite Table"}),"\n",(0,a.jsxs)(t.p,{children:["Generate some new trips, overwrite the table logically at the Hudi metadata level. The Hudi cleaner will eventually\nclean up the previous table snapshot's file groups. This can be faster than deleting the older table and recreating\nin ",(0,a.jsx)(t.code,{children:"Overwrite"})," mode."]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"SparkSQL",value:"sparksql"}],children:[(0,a.jsx)(s.A,{value:"scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  show(10, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.operation","insert_overwrite_table").\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now, from query before.\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  show(10, false)\n\n'})})}),(0,a.jsxs)(s.A,{value:"sparksql",children:[(0,a.jsxs)(t.p,{children:["The insert overwrite non-partitioned table sql statement will convert to the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"insert_overwrite_table"})})," operation.\ne.g."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"insert overwrite table h0 select 1, 'a1', 20;\n"})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"insert-overwrite",children:"Insert Overwrite"}),"\n",(0,a.jsxs)(t.p,{children:["Generate some new trips, overwrite the all the partitions that are present in the input. This operation can be faster\nthan ",(0,a.jsx)(t.code,{children:"upsert"})," for batch ETL jobs, that are recomputing entire target partitions at once (as opposed to incrementally\nupdating the target tables). This is because, we are able to bypass indexing, precombining and other repartitioning\nsteps in the upsert write path completely."]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"SparkSQL",value:"sparksql"}],children:[(0,a.jsx)(s.A,{value:"scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.\n  read.json(spark.sparkContext.parallelize(inserts, 2)).\n  filter("partitionpath = \'americas/united_states/san_francisco\'")\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.operation","insert_overwrite").\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now for San Francisco alone, from query before.\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n'})})}),(0,a.jsxs)(s.A,{value:"sparksql",children:[(0,a.jsxs)(t.p,{children:["The insert overwrite partitioned table sql statement will convert to the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"insert_overwrite"})})," operation.\ne.g."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"insert overwrite table h_p1 select 2 as id, 'a2', '2021-01-03' as dt, '19' as hh;\n"})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"deletes",children:"Deletes"}),"\n",(0,a.jsxs)(t.p,{children:["Hudi supports implementing two types of deletes on data stored in Hudi tables, by enabling the user to specify a different record payload implementation.\nFor more info refer to ",(0,a.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/x/6IqvC",children:"Delete support in Hudi"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Soft Deletes"})," : Retain the record key and just null out the values for all the other fields.\nThis can be achieved by ensuring the appropriate fields are nullable in the table schema and simply upserting the table after setting these fields to null.\nNote that soft deletes are always persisted in storage and never removed, but all values are set to nulls.\nSo for GDPR or other compliance reasons, users should consider doing hard deletes if record key and partition path\ncontain PII."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'// fetch two records for soft deletes\nval softDeleteDs = spark.sql("select * from hudi_trips_snapshot").limit(2)\n\n// prepare the soft deletes by ensuring the appropriate fields are nullified\nval nullifyColumns = softDeleteDs.schema.fields.\n  map(field => (field.name, field.dataType.typeName)).\n  filter(pair => (!HoodieRecord.HOODIE_META_COLUMNS.contains(pair._1)\n    && !Array("ts", "uuid", "partitionpath").contains(pair._1)))\n\nval softDeleteDf = nullifyColumns.\n  foldLeft(softDeleteDs.drop(HoodieRecord.HOODIE_META_COLUMNS: _*))(\n    (ds, col) => ds.withColumn(col._1, lit(null).cast(col._2)))\n\n// simply upsert the table after setting these fields to null\nsoftDeleteDf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.operation", "upsert").\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", tableName).\n  mode(Append).\n  save(basePath)\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Hard Deletes"})," : A stronger form of deletion is to physically remove any trace of the record from the table. This can be achieved in 3 different ways."]}),"\n"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Using Datasource, set ",(0,a.jsx)(t.code,{children:'"hoodie.datasource.write.operation"'})," to ",(0,a.jsx)(t.code,{children:'"delete"'}),". This will remove all the records in the DataSet being submitted."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Example, first read in a dataset:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'val roViewDF = spark.\n        read.\n        format("org.apache.hudi").\n        load(basePath + "/*/*/*/*")\nroViewDF.createOrReplaceTempView("hudi_ro_table")\nspark.sql("select count(*) from hudi_ro_table").show() // should return 10 (number of records inserted above)\nval riderValue = spark.sql("select distinct rider from hudi_ro_table").show()\n// copy the value displayed to be used in next step\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now write a query of which records you would like to delete:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:"val df = spark.sql(\"select uuid, partitionPath from hudi_ro_table where rider = 'rider-213'\")\n"})}),"\n",(0,a.jsx)(t.p,{children:"Lastly, execute the deletion of these records:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'val deletes = dataGen.generateDeletes(df.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2));\ndf.write.format("org.apache.hudi").\noptions(getQuickstartWriteConfigs).\noption("hoodie.datasource.write.operation","delete").\noption("hoodie.datasource.write.precombine.field", "ts").\noption("hoodie.datasource.write.recordkey.field", "uuid").\noption("hoodie.datasource.write.partitionpath.field", "partitionpath").\noption("hoodie.table.name", tableName).\nmode(Append).\nsave(basePath);\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Using DataSource, set ",(0,a.jsx)(t.code,{children:"PAYLOAD_CLASS_OPT_KEY"})," to ",(0,a.jsx)(t.code,{children:'"org.apache.hudi.EmptyHoodieRecordPayload"'}),". This will remove all the records in the DataSet being submitted."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This example will remove all the records from the table that exist in the DataSet ",(0,a.jsx)(t.code,{children:"deleteDF"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:' deleteDF // dataframe containing just records to be deleted\n   .write().format("org.apache.hudi")\n   .option(...) // Add HUDI options like record-key, partition-path and others as needed for your setup\n   // specify record_key, partition_key, precombine_fieldkey & usual params\n   .option(DataSourceWriteOptions.PAYLOAD_CLASS_OPT_KEY, "org.apache.hudi.EmptyHoodieRecordPayload")\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["Using DataSource or DeltaStreamer, add a column named ",(0,a.jsx)(t.code,{children:"_hoodie_is_deleted"})," to DataSet. The value of this column must be set to ",(0,a.jsx)(t.code,{children:"true"})," for all the records to be deleted and either ",(0,a.jsx)(t.code,{children:"false"})," or left null for any records which are to be upserted."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Let's say the original schema is:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "type":"record",\n  "name":"example_tbl",\n  "fields":[{\n     "name": "uuid",\n     "type": "String"\n  }, {\n     "name": "ts",\n     "type": "string"\n  },  {\n     "name": "partitionPath",\n     "type": "string"\n  }, {\n     "name": "rank",\n     "type": "long"\n  }\n]}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Make sure you add ",(0,a.jsx)(t.code,{children:"_hoodie_is_deleted"})," column:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "type":"record",\n  "name":"example_tbl",\n  "fields":[{\n     "name": "uuid",\n     "type": "String"\n  }, {\n     "name": "ts",\n     "type": "string"\n  },  {\n     "name": "partitionPath",\n     "type": "string"\n  }, {\n     "name": "rank",\n     "type": "long"\n  }, {\n    "name" : "_hoodie_is_deleted",\n    "type" : "boolean",\n    "default" : false\n  }\n]}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Then any record you want to delete you can mark ",(0,a.jsx)(t.code,{children:"_hoodie_is_deleted"})," as true:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{"ts": 0.0, "uuid": "19tdb048-c93e-4532-adf9-f61ce6afe10", "rank": 1045, "partitionpath": "americas/brazil/sao_paulo", "_hoodie_is_deleted" : true}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"concurrency-control",children:"Concurrency Control"}),"\n",(0,a.jsxs)(t.p,{children:["Following is an example of how to use ",(0,a.jsx)(t.code,{children:"optimistic_concurrency_control"})," via Spark DataSource API."]}),"\n",(0,a.jsxs)(t.p,{children:["Read more in-depth details about concurrency control in the ",(0,a.jsx)(t.a,{href:"/docs/concurrency_control",children:"concurrency control concepts"})," section."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'inputDF.write.format("hudi")\n       .options(getQuickstartWriteConfigs)\n       .option("hoodie.datasource.write.precombine.field", "ts")\n       .option("hoodie.cleaner.policy.failed.writes", "LAZY")\n       .option("hoodie.write.concurrency.mode", "optimistic_concurrency_control")\n       .option("hoodie.write.lock.zookeeper.url", "zookeeper")\n       .option("hoodie.write.lock.zookeeper.port", "2181")\n       .option("hoodie.write.lock.zookeeper.lock_key", "test_table")\n       .option("hoodie.write.lock.zookeeper.base_path", "/test")\n       .option("hoodie.datasource.write.recordkey.field", "uuid")\n       .option("hoodie.datasource.write.partitionpath.field", "partitionpath")\n       .option("hoodie.table.name", tableName)\n       .mode(Overwrite)\n       .save(basePath)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"java-client",children:"Java Client"}),"\n",(0,a.jsxs)(t.p,{children:["We can use plain java to write to hudi tables. To use Java client we can refere ",(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-examples/hudi-examples-java/src/main/java/org/apache/hudi/examples/java/HoodieJavaWriteClientExample.java",children:"here"})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),i=n(65627),o=n(56347),s=n(50372),l=n(30604),d=n(11861),c=n(78749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,h]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),x=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(d(t),o(a))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:h,onClick:c,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(w,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}}}]);