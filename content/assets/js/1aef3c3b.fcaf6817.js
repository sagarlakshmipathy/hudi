"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[77261],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},85879:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"flink-quick-start-guide","title":"Flink Guide","description":"This guide provides an instruction for Flink Hudi integration. We can feel the unique charm of how Flink brings in the power of streaming into Hudi.","source":"@site/versioned_docs/version-0.10.1/flink-quick-start-guide.md","sourceDirName":".","slug":"/flink-quick-start-guide","permalink":"/docs/0.10.1/flink-quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/flink-quick-start-guide.md","tags":[],"version":"0.10.1","frontMatter":{"title":"Flink Guide","toc":true,"last_modified_at":"2020-08-12T07:19:57.000Z"},"sidebar":"docs","previous":{"title":"Spark Guide","permalink":"/docs/0.10.1/quick-start-guide"},"next":{"title":"Docker Demo","permalink":"/docs/0.10.1/docker_demo"}}');var s=i(74848),r=i(28453);const a={title:"Flink Guide",toc:!0,last_modified_at:new Date("2020-08-12T07:19:57.000Z")},o=void 0,l={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Setup",id:"setup",level:3},{value:"Step.1 download Flink jar",id:"step1-download-flink-jar",level:4},{value:"Step.2 start Flink cluster",id:"step2-start-flink-cluster",level:4},{value:"Step.3 start Flink SQL client",id:"step3-start-flink-sql-client",level:4},{value:"Insert Data",id:"insert-data",level:3},{value:"Query Data",id:"query-data",level:3},{value:"Update Data",id:"update-data",level:3},{value:"Streaming Query",id:"streaming-query",level:3},{value:"Delete Data",id:"deletes",level:3},{value:"Where To Go From Here?",id:"where-to-go-from-here",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This guide provides an instruction for Flink Hudi integration. We can feel the unique charm of how Flink brings in the power of streaming into Hudi.\nReading this guide, you can quickly start using Flink on Hudi, learn different modes for reading/writing Hudi by Flink:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quick Start"})," : Read ",(0,s.jsx)(n.a,{href:"#quick-start",children:"Quick Start"})," to get started quickly Flink sql client to write to(read from) Hudi."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configuration"})," : For ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/flink_configuration#global-configurations",children:"Global Configuration"}),", sets up through ",(0,s.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),". For per job configuration, sets up through ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/flink_configuration#table-options",children:"Table Option"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Writing Data"})," : Flink supports different modes for writing, such as ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/hoodie_deltastreamer#cdc-ingestion",children:"CDC Ingestion"}),", ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/hoodie_deltastreamer#bulk-insert",children:"Bulk Insert"}),", ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/hoodie_deltastreamer#index-bootstrap",children:"Index Bootstrap"}),", ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/hoodie_deltastreamer#changelog-mode",children:"Changelog Mode"})," and ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/hoodie_deltastreamer#append-mode",children:"Append Mode"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Querying Data"})," : Flink supports different modes for reading, such as ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/hoodie_deltastreamer#streaming-query",children:"Streaming Query"})," and ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/hoodie_deltastreamer#incremental-query",children:"Incremental Query"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tuning"})," : For write/read tasks, this guide gives some tuning suggestions, such as ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/flink_configuration#memory-optimization",children:"Memory Optimization"})," and ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/flink_configuration#write-rate-limit",children:"Write Rate Limit"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optimization"}),": Offline compaction is supported ",(0,s.jsx)(n.a,{href:"/docs/compaction#flink-offline-compaction",children:"Offline Compaction"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Query Engines"}),": Besides Flink, many other engines are integrated: ",(0,s.jsx)(n.a,{href:"/docs/syncing_metastore#flink-setup",children:"Hive Query"}),", ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/query_engine_setup#prestodb",children:"Presto Query"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["We use the ",(0,s.jsx)(n.a,{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/dev/table/sqlclient/",children:"Flink Sql Client"})," because it's a good\nquick start tool for SQL users."]}),"\n",(0,s.jsx)(n.h4,{id:"step1-download-flink-jar",children:"Step.1 download Flink jar"}),"\n",(0,s.jsxs)(n.p,{children:["Hudi works with Flink-1.13.x version. You can follow instructions ",(0,s.jsx)(n.a,{href:"https://flink.apache.org/downloads",children:"here"})," for setting up Flink.\nThe hudi-flink-bundle jar is archived with scala 2.11, so it\u2019s recommended to use flink 1.13.x bundled with scala 2.11."]}),"\n",(0,s.jsx)(n.h4,{id:"step2-start-flink-cluster",children:"Step.2 start Flink cluster"}),"\n",(0,s.jsx)(n.p,{children:"Start a standalone Flink cluster within hadoop environment.\nBefore you start up the cluster, we suggest to config the cluster as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["in ",(0,s.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),", add config option ",(0,s.jsx)(n.code,{children:"taskmanager.numberOfTaskSlots: 4"})]}),"\n",(0,s.jsxs)(n.li,{children:["in ",(0,s.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),", ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/flink_configuration#global-configurations",children:"add other global configurations according to the characteristics of your task"})]}),"\n",(0,s.jsxs)(n.li,{children:["in ",(0,s.jsx)(n.code,{children:"$FLINK_HOME/conf/workers"}),", add item ",(0,s.jsx)(n.code,{children:"localhost"})," as 4 lines so that there are 4 workers on the local cluster"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now starts the cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the Flink standalone cluster\n./bin/start-cluster.sh\n"})}),"\n",(0,s.jsx)(n.h4,{id:"step3-start-flink-sql-client",children:"Step.3 start Flink SQL client"}),"\n",(0,s.jsxs)(n.p,{children:["Hudi has a prepared bundle jar for Flink, which should be loaded in the Flink SQL Client when it starts up.\nYou can build the jar manually under path ",(0,s.jsx)(n.code,{children:"hudi-source-dir/packaging/hudi-flink-bundle"}),", or download it from the\n",(0,s.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/hudi/hudi-flink-bundle_2.11/",children:"Apache Official Repository"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Now starts the SQL CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j .../hudi-flink-bundle_2.1?-*.*.*.jar shell\n"})}),"\n",(0,s.jsxs)("div",{className:"notice--info",children:[(0,s.jsx)("h4",{children:"Please note the following: "}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"We suggest hadoop 2.9.x+ version because some of the object storage has filesystem implementation only after that"}),(0,s.jsx)("li",{children:"The flink-parquet and flink-avro formats are already packaged into the hudi-flink-bundle jar"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Setup table name, base path and operate using SQL for this guide.\nThe SQL CLI only executes the SQL line by line."}),"\n",(0,s.jsx)(n.h3,{id:"insert-data",children:"Insert Data"}),"\n",(0,s.jsxs)(n.p,{children:["Creates a Flink Hudi table first and insert data into the Hudi table using SQL ",(0,s.jsx)(n.code,{children:"VALUES"})," as below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- sets up the result mode to tableau to show the results directly in the CLI\nset execution.result-mode=tableau;\n\nCREATE TABLE t1(\n  uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${path}',\n  'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n\n-- insert data using values\nINSERT INTO t1 VALUES\n  ('id1','Danny',23,TIMESTAMP '1970-01-01 00:00:01','par1'),\n  ('id2','Stephen',33,TIMESTAMP '1970-01-01 00:00:02','par1'),\n  ('id3','Julian',53,TIMESTAMP '1970-01-01 00:00:03','par2'),\n  ('id4','Fabian',31,TIMESTAMP '1970-01-01 00:00:04','par2'),\n  ('id5','Sophia',18,TIMESTAMP '1970-01-01 00:00:05','par3'),\n  ('id6','Emma',20,TIMESTAMP '1970-01-01 00:00:06','par3'),\n  ('id7','Bob',44,TIMESTAMP '1970-01-01 00:00:07','par4'),\n  ('id8','Han',56,TIMESTAMP '1970-01-01 00:00:08','par4');\n"})}),"\n",(0,s.jsx)(n.h3,{id:"query-data",children:"Query Data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- query from the Hudi table\nselect * from t1;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This query provides snapshot querying of the ingested data.\nRefer to ",(0,s.jsx)(n.a,{href:"/docs/concepts#table-types--queries",children:"Table types and queries"})," for more info on all table types and query types supported."]}),"\n",(0,s.jsx)(n.h3,{id:"update-data",children:"Update Data"}),"\n",(0,s.jsx)(n.p,{children:"This is similar to inserting new data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- this would update the record with key 'id1'\ninsert into t1 values\n  ('id1','Danny',27,TIMESTAMP '1970-01-01 00:00:01','par1');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Notice that the save mode is now ",(0,s.jsx)(n.code,{children:"Append"}),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,s.jsx)(n.a,{href:"#query-data",children:"Querying"})," the data again will now show updated records. Each write operation generates a new ",(0,s.jsx)(n.a,{href:"/docs/concepts",children:"commit"}),"\ndenoted by the timestamp. Look for changes in ",(0,s.jsx)(n.code,{children:"_hoodie_commit_time"}),", ",(0,s.jsx)(n.code,{children:"age"})," fields for the same ",(0,s.jsx)(n.code,{children:"_hoodie_record_key"}),"s in previous commit."]}),"\n",(0,s.jsx)(n.h3,{id:"streaming-query",children:"Streaming Query"}),"\n",(0,s.jsx)(n.p,{children:"Hudi Flink also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's streaming querying and providing a start time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t1(\n  uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${path}',\n  'table.type' = 'MERGE_ON_READ',\n  'read.streaming.enabled' = 'true',  -- this option enable the streaming read\n  'read.start-commit' = '20210316134557', -- specifies the start commit instant time\n  'read.streaming.check-interval' = '4' -- specifies the check interval for finding new source commits, default 60s.\n);\n\n-- Then query the table in stream mode\nselect * from t1;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will give all changes that happened after the ",(0,s.jsx)(n.code,{children:"read.streaming.start-commit"})," commit. The unique thing about this\nfeature is that it now lets you author streaming pipelines on streaming or batch data source."]}),"\n",(0,s.jsx)(n.h3,{id:"deletes",children:"Delete Data"}),"\n",(0,s.jsx)(n.p,{children:"When consuming data in streaming query, Hudi Flink source can also accepts the change logs from the underneath data source,\nit can then applies the UPDATE and DELETE by per-row level. You can then sync a NEAR-REAL-TIME snapshot on Hudi for all kinds\nof RDBMS."}),"\n",(0,s.jsx)(n.h2,{id:"where-to-go-from-here",children:"Where To Go From Here?"}),"\n",(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"/docs/0.10.1/flink_configuration",children:"Flink Setup"})," how-to page for deeper dive into configuration settings."]}),"\n",(0,s.jsx)(n.p,{children:"If you are relatively new to Apache Hudi, it is important to be familiar with a few core concepts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/timeline",children:"Hudi Timeline"})," \u2013 How Hudi manages transactions and other table services"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"file_layouts",children:"Hudi File Layout"})," - How the files are laid out on storage"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/table_types",children:"Hudi Table Types"})," \u2013 ",(0,s.jsx)(n.code,{children:"COPY_ON_WRITE"})," and ",(0,s.jsx)(n.code,{children:"MERGE_ON_READ"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/table_types#query-types",children:"Hudi Query Types"})," \u2013 Snapshot Queries, Incremental Queries, Read-Optimized Queries"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'See more in the "Concepts" section of the docs.'}),"\n",(0,s.jsxs)(n.p,{children:["Take a look at recent ",(0,s.jsx)(n.a,{href:"/blog",children:"blog posts"})," that go in depth on certain topics or use cases."]}),"\n",(0,s.jsxs)(n.p,{children:["Hudi tables can be queried from query engines like Hive, Spark, Flink, Presto and much more. We have put together a\n",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VhNgUsxdrD0",children:"demo video"})," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,s.jsx)(n.a,{href:"/docs/docker_demo",children:"here"})," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,s.jsx)(n.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);