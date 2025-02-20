"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[34877],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}},46479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"disaster_recovery","title":"Disaster Recovery","description":"Disaster Recovery is very much mission-critical for any software. Especially when it comes to data systems, the impact could be very serious","source":"@site/versioned_docs/version-0.13.0/disaster_recovery.md","sourceDirName":".","slug":"/disaster_recovery","permalink":"/docs/0.13.0/disaster_recovery","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/disaster_recovery.md","tags":[],"version":"0.13.0","frontMatter":{"title":"Disaster Recovery","toc":true},"sidebar":"docs","previous":{"title":"File Sizing","permalink":"/docs/0.13.0/file_sizing"},"next":{"title":"Exporter","permalink":"/docs/0.13.0/snapshot_exporter"}}');var s=t(74848),a=t(28453);const i={title:"Disaster Recovery",toc:!0},o=void 0,l={},h=[{value:"Savepoint",id:"savepoint",level:2},{value:"Restore",id:"restore",level:2},{value:"Runbook",id:"runbook",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Disaster Recovery is very much mission-critical for any software. Especially when it comes to data systems, the impact could be very serious\nleading to delay in business decisions or even wrong business decisions at times. Apache Hudi has two operations to assist you in recovering\ndata from a previous state: ",(0,s.jsx)(n.code,{children:"savepoint"})," and ",(0,s.jsx)(n.code,{children:"restore"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"savepoint",children:"Savepoint"}),"\n",(0,s.jsxs)(n.p,{children:["As the name suggest, ",(0,s.jsx)(n.code,{children:"savepoint"})," saves the table as of the commit time, so that it lets you restore the table to this\nsavepoint at a later point in time if need be. Care is taken to ensure cleaner will not clean up any files that are savepointed.\nOn similar lines, savepoint cannot be triggered on a commit that is already cleaned up. In simpler terms, this is synonymous\nto taking a backup, just that we don't make a new copy of the table, but just save the state of the table elegantly so that\nwe can restore it later when in need."]}),"\n",(0,s.jsx)(n.h2,{id:"restore",children:"Restore"}),"\n",(0,s.jsx)(n.p,{children:"This operation lets you restore your table to one of the savepoint commit. This operation cannot be undone (or reversed) and so care\nshould be taken before doing a restore. Hudi will delete all data files and commit files (timeline files) greater than the\nsavepoint commit to which the table is being restored. You should pause all writes to the table when performing\na restore since they are likely to fail while the restore is in progress. Also, reads could also fail since snapshot queries\nwill be hitting latest files which has high possibility of getting deleted with restore."}),"\n",(0,s.jsx)(n.h2,{id:"runbook",children:"Runbook"}),"\n",(0,s.jsxs)(n.p,{children:["Savepoint and restore can only be triggered from ",(0,s.jsx)(n.code,{children:"hudi-cli"}),". Let's walk through an example of how one can take savepoint\nand later restore the state of the table."]}),"\n",(0,s.jsxs)(n.p,{children:["Let's create a hudi table via ",(0,s.jsx)(n.code,{children:"spark-shell"})," and trigger a batch of inserts."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_trips_cow"\nval basePath = "file:///tmp/hudi_trips_cow"\nval dataGen = new DataGenerator\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's add four more batches of inserts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'for (_ <- 1 to 4) {\n  val inserts = convertToStringList(dataGen.generateInserts(10))\n  val df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n  df.write.format("hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Append).\n    save(basePath)\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Total record count should be 50."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'val tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath)\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select count(partitionpath, uuid) from  hudi_trips_snapshot").show()\n\n+--------------------------+\n|count(partitionpath, uuid)|\n+--------------------------+\n|                        50|\n+--------------------------+\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Important:",type:"danger",children:(0,s.jsxs)(n.p,{children:["If you're facing ",(0,s.jsx)(n.code,{children:'java.lang.IllegalArgumentException: For input string: "null"'})," exception, it means that you may need to\nmanually set the ",(0,s.jsx)(n.code,{children:"LEGACY_PARQUET_NANOS_AS_LONG"})," to ",(0,s.jsx)(n.code,{children:"false"})," i.e. add ",(0,s.jsx)(n.code,{children:"--conf 'spark.hadoop.spark.sql.legacy.parquet.nanosAsLong=false'"}),"\nto your spark configuration while starting the spark session. For more information, read ",(0,s.jsx)(n.a,{href:"https://github.com/apache/hudi/issues/8061",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Let's take a look at the timeline after 5 batches of inserts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ls -ltr /tmp/hudi_trips_cow/.hoodie \ntotal 128\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's trigger a savepoint as of the latest commit. Savepoint can only be done via ",(0,s.jsx)(n.code,{children:"hudi-cli"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"./hudi-cli.sh\n\nconnect --path /tmp/hudi_trips_cow/\ncommits show\nset --conf SPARK_HOME=<SPARK_HOME>\nsavepoint create --commit 20220128160245447 --sparkMaster local[2]\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"NOTE:",type:"note",children:(0,s.jsx)(n.p,{children:"Make sure you replace 20220128160245447 with the latest commit in your table."})}),"\n",(0,s.jsx)(n.p,{children:"Let's check the timeline after savepoint."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ls -ltr /tmp/hudi_trips_cow/.hoodie\ntotal 136\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:05 20220128160245447.savepoint.inflight\n-rw-r--r--  1 nsb  wheel  1168 Jan 28 16:05 20220128160245447.savepoint\n"})}),"\n",(0,s.jsx)(n.p,{children:"You could notice that savepoint meta files are added which keeps track of the files that are part of the latest table snapshot."}),"\n",(0,s.jsx)(n.p,{children:"Now, let's continue adding three more batches of inserts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'for (_ <- 1 to 3) {\n  val inserts = convertToStringList(dataGen.generateInserts(10))\n  val df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n  df.write.format("hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Append).\n    save(basePath)\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Total record count will be 80 since we have done 8 batches in total. (5 until savepoint and 3 after savepoint)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'val tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath)\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select count(partitionpath, uuid) from  hudi_trips_snapshot").show()\n+--------------------------+\n|count(partitionpath, uuid)|\n+--------------------------+\n|                        80|\n+--------------------------+\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Let's say something bad happened, and you want to restore your table to an older snapshot. As we called out earlier, we can\ntrigger restore only from ",(0,s.jsx)(n.code,{children:"hudi-cli"}),". And do remember to bring down all of your writer processes while doing a restore."]}),"\n",(0,s.jsx)(n.p,{children:"Let's checkout timeline once, before we trigger the restore."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ls -ltr /tmp/hudi_trips_cow/.hoodie\ntotal 208\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:05 20220128160245447.savepoint.inflight\n-rw-r--r--  1 nsb  wheel  1168 Jan 28 16:05 20220128160245447.savepoint\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:06 20220128160620557.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:06 20220128160620557.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:06 20220128160620557.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:06 20220128160627501.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:06 20220128160627501.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:06 20220128160627501.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:06 20220128160630785.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:06 20220128160630785.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:06 20220128160630785.commit\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you are continuing in the same ",(0,s.jsx)(n.code,{children:"hudi-cli"})," session, you can just execute ",(0,s.jsx)(n.code,{children:"refresh"})," so that table state gets refreshed to\nits latest state. If not, connect to the table again."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./hudi-cli.sh\n\nconnect --path /tmp/hudi_trips_cow/\ncommits show\nset --conf SPARK_HOME=<SPARK_HOME>\nsavepoints show\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551 SavepointTime     \u2551\n\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n\u2551 20220128160245447 \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\nsavepoint rollback --savepoint 20220128160245447 --sparkMaster local[2]\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"NOTE:",type:"note",children:(0,s.jsx)(n.p,{children:"Make sure you replace 20220128160245447 with the latest savepoint in your table."})}),"\n",(0,s.jsx)(n.p,{children:"Hudi table should have been restored to the savepointed commit 20220128160245447. Both data files and timeline files should have\nbeen deleted."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ls -ltr /tmp/hudi_trips_cow/.hoodie\ntotal 152\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:05 20220128160245447.savepoint.inflight\n-rw-r--r--  1 nsb  wheel  1168 Jan 28 16:05 20220128160245447.savepoint\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:07 20220128160732437.restore.inflight\n-rw-r--r--  1 nsb  wheel  4152 Jan 28 16:07 20220128160732437.restore\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's check the total record count in the table. Should match the records we had, just before we triggered the savepoint."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'val tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath)\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select count(partitionpath, uuid) from  hudi_trips_snapshot").show()\n+--------------------------+\n|count(partitionpath, uuid)|\n+--------------------------+\n|                        50|\n+--------------------------+\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As you could see, entire table state is restored back to the commit which was savepointed. Users can choose to trigger savepoint\nat regular cadence and keep deleting older savepoints when new ones are created. ",(0,s.jsx)(n.code,{children:"hudi-cli"})," has a command ",(0,s.jsx)(n.code,{children:"savepoint delete"}),"\nto assist in deleting a savepoint. Please do remember that cleaner may not clean the files that are savepointed. And so users\nshould ensure they delete the savepoints from time to time. If not, the storage reclamation may not happen."]}),"\n",(0,s.jsx)(n.p,{children:"Note: Savepoint and restore for MOR table is available only from 0.11."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);