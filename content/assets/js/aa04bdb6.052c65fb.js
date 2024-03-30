"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[50827],{15680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>m});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,m=u["".concat(p,".").concat(c)]||u[c]||h[c]||r;return t?n.createElement(m,o(o({ref:a},l),{},{components:t})):n.createElement(m,o({ref:a},l))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42175:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(58168),i=(t(96540),t(15680));const r={version:"0.6.0",title:"Quick-Start Guide",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,s={unversionedId:"quick-start-guide",id:"version-0.6.0/quick-start-guide",title:"Quick-Start Guide",description:"This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through",source:"@site/versioned_docs/version-0.6.0/quick-start-guide.md",sourceDirName:".",slug:"/quick-start-guide",permalink:"/docs/0.6.0/quick-start-guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/quick-start-guide.md",tags:[],version:"0.6.0",frontMatter:{version:"0.6.0",title:"Quick-Start Guide",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.6.0/docs",next:{title:"Use Cases",permalink:"/docs/0.6.0/use_cases"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Insert data",id:"insert-data",children:[],level:2},{value:"Query data",id:"query-data",children:[],level:2},{value:"Update data",id:"update-data",children:[],level:2},{value:"Incremental query",id:"incremental-query",children:[],level:2},{value:"Point in time query",id:"point-in-time-query",children:[],level:2},{value:"Delete data",id:"deletes",children:[],level:2},{value:"Setup",id:"setup-1",children:[],level:2},{value:"Insert data",id:"insert-data-1",children:[],level:2},{value:"Query data",id:"query-data-1",children:[],level:2},{value:"Update data",id:"update-data-1",children:[],level:2},{value:"Incremental query",id:"incremental-query-1",children:[],level:2},{value:"Point in time query",id:"point-in-time-query-1",children:[],level:2},{value:"Delete data",id:"deletes",children:[],level:2},{value:"Where to go from here?",id:"where-to-go-from-here",children:[],level:2}],d={toc:p},l="wrapper";function u(e){let{components:a,...t}=e;return(0,i.yg)(l,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through\ncode snippets that allows you to insert and update a Hudi table of default table type:\n",(0,i.yg)("a",{parentName:"p",href:"/docs/concepts#copy-on-write-table"},"Copy on Write"),".\nAfter each write operation we will also show how to read the data both snapshot and incrementally."),(0,i.yg)("h1",{id:"scala-example"},"Scala example"),(0,i.yg)("h2",{id:"setup"},"Setup"),(0,i.yg)("p",null,"Hudi works with Spark-2.x versions. You can follow instructions ",(0,i.yg)("a",{parentName:"p",href:"https://spark.apache.org/downloads"},"here")," for setting up spark.\nFrom the extracted directory run spark-shell with Hudi as:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"// spark-shell\nspark-2.4.4-bin-hadoop2.7/bin/spark-shell \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.6.0,org.apache.spark:spark-avro_2.11:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,i.yg)("div",{className:"notice--info"},(0,i.yg)("h4",null,"Please note the following: "),(0,i.yg)("ul",null,(0,i.yg)("li",null,"spark-avro module needs to be specified in --packages as it is not included with spark-shell by default"),(0,i.yg)("li",null,"spark-avro and spark versions must match (we have used 2.4.4 for both above)"),(0,i.yg)("li",null,"we have used hudi-spark-bundle built for scala 2.11 since the spark-avro module used also depends on 2.11. If spark-avro_2.12 is used, correspondingly hudi-spark-bundle_2.12 needs to be used. "))),(0,i.yg)("p",null,"Setup table name, base path and a data generator to generate records for this guide."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nimport org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_trips_cow"\nval basePath = "file:///tmp/hudi_trips_cow"\nval dataGen = new DataGenerator\n')),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50"},"DataGenerator"),"\ncan generate sample inserts and updates based on the the sample trip schema ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57"},"here"),"\n{: .notice--info}"),(0,i.yg)("h2",{id:"insert-data"},"Insert data"),(0,i.yg)("p",null,"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"mode(Overwrite)")," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,i.yg)("inlineCode",{parentName:"p"},"/tmp/hudi_trips_cow/<region>/<country>/<city>/"),". We provided a record key\n(",(0,i.yg)("inlineCode",{parentName:"p"},"uuid")," in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),"), partition field (",(0,i.yg)("inlineCode",{parentName:"p"},"region/country/city"),") and combine logic (",(0,i.yg)("inlineCode",{parentName:"p"},"ts")," in\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,i.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"Modeling data stored in Hudi"),"\nand for info on ways to ingest data into Hudi, refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/writing_data"},"Writing Hudi Tables"),".\nHere we are using the default write operation : ",(0,i.yg)("inlineCode",{parentName:"p"},"upsert"),". If you have a workload without updates, you can also issue\n",(0,i.yg)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"bulk_insert")," operations which could be faster. To know more, refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/writing_data#write-operations"},"Write operations"),"\n{: .notice--info}"),(0,i.yg)("h2",{id:"query-data"},"Query data"),(0,i.yg)("p",null,"Load the data files into a DataFrame."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\n//load(basePath) use "/partitionKey=partitionValue" folder structure for Spark auto partition discovery\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n')),(0,i.yg)("p",null,"This query provides snapshot querying of the ingested data. Since our partition path (",(0,i.yg)("inlineCode",{parentName:"p"},"region/country/city"),") is 3 levels nested\nfrom base path we ve used ",(0,i.yg)("inlineCode",{parentName:"p"},'load(basePath + "/*/*/*/*")'),".\nRefer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/concepts#table-types--queries"},"Table types and queries")," for more info on all table types and query types supported.\n{: .notice--info}"),(0,i.yg)("h2",{id:"update-data"},"Update data"),(0,i.yg)("p",null,"This is similar to inserting new data. Generate updates to existing trips using the data generator, load into a DataFrame\nand write DataFrame into the hudi table."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval updates = convertToStringList(dataGen.generateUpdates(10))\nval df = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n')),(0,i.yg)("p",null,"Notice that the save mode is now ",(0,i.yg)("inlineCode",{parentName:"p"},"Append"),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,i.yg)("a",{parentName:"p",href:"#query-data"},"Querying")," the data again will now show updated trips. Each write operation generates a new ",(0,i.yg)("a",{parentName:"p",href:"/docs/concepts"},"commit"),"\ndenoted by the timestamp. Look for changes in ",(0,i.yg)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"rider"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"driver")," fields for the same ",(0,i.yg)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"s in previous commit.\n{: .notice--info}"),(0,i.yg)("h2",{id:"incremental-query"},"Incremental query"),(0,i.yg)("p",null,"Hudi also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's incremental querying and providing a begin time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case). "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\n// reload data\nspark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*").\n  createOrReplaceTempView("hudi_trips_snapshot")\n\nval commits = spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").map(k => k.getString(0)).take(50)\nval beginTime = commits(commits.length - 2) // commit time we are interested in\n\n// incrementally query data\nval tripsIncrementalDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n')),(0,i.yg)("p",null,"This will give all changes that happened after the beginTime commit with the filter of fare > 20.0. The unique thing about this\nfeature is that it now lets you author streaming pipelines on batch data.\n{: .notice--info}"),(0,i.yg)("h2",{id:"point-in-time-query"},"Point in time query"),(0,i.yg)("p",null,'Lets look at how to query data as of a specific time. The specific time can be represented by pointing endTime to a\nspecific commit time and beginTime to "000" (denoting earliest possible commit time). '),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval beginTime = "000" // Represents all commits > this time.\nval endTime = commits(commits.length - 2) // commit time we are interested in\n\n//incrementally query data\nval tripsPointInTimeDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  option(END_INSTANTTIME_OPT_KEY, endTime).\n  load(basePath)\ntripsPointInTimeDF.createOrReplaceTempView("hudi_trips_point_in_time")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from hudi_trips_point_in_time where fare > 20.0").show()\n')),(0,i.yg)("h2",{id:"deletes"},"Delete data"),(0,i.yg)("p",null,"Delete records for the HoodieKeys passed in."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\n// fetch total records count\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n// fetch two records to be deleted\nval ds = spark.sql("select uuid, partitionpath from hudi_trips_snapshot").limit(2)\n\n// issue deletes\nval deletes = dataGen.generateDeletes(ds.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2))\n\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"delete").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// run the same read query as above.\nval roAfterDeleteViewDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\n\nroAfterDeleteViewDF.registerTempTable("hudi_trips_snapshot")\n// fetch should return (total - 2) records\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n')),(0,i.yg)("p",null,"Note: Only ",(0,i.yg)("inlineCode",{parentName:"p"},"Append")," mode is supported for delete operation."),(0,i.yg)("p",null,"See the ",(0,i.yg)("a",{parentName:"p",href:"/docs/writing_data#deletes"},"deletion section")," of the writing data page for more details."),(0,i.yg)("h1",{id:"pyspark-example"},"Pyspark example"),(0,i.yg)("h2",{id:"setup-1"},"Setup"),(0,i.yg)("p",null,"Hudi works with Spark-2.x versions. You can follow instructions ",(0,i.yg)("a",{parentName:"p",href:"https://spark.apache.org/downloads"},"here")," for setting up spark.\nFrom the extracted directory run spark-shell with Hudi as:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# pyspark\nexport PYSPARK_PYTHON=$(which python3)\nspark-2.4.4-bin-hadoop2.7/bin/pyspark \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.6.0,org.apache.spark:spark-avro_2.11:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,i.yg)("div",{className:"notice--info"},(0,i.yg)("h4",null,"Please note the following: "),(0,i.yg)("ul",null,(0,i.yg)("li",null,"spark-avro module needs to be specified in --packages as it is not included with spark-shell by default"),(0,i.yg)("li",null,"spark-avro and spark versions must match (we have used 2.4.4 for both above)"),(0,i.yg)("li",null,"we have used hudi-spark-bundle built for scala 2.11 since the spark-avro module used also depends on 2.11. If spark-avro_2.12 is used, correspondingly hudi-spark-bundle_2.12 needs to be used. "))),(0,i.yg)("p",null,"Setup table name, base path and a data generator to generate records for this guide."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# pyspark\ntableName = "hudi_trips_cow"\nbasePath = "file:///tmp/hudi_trips_cow"\ndataGen = sc._jvm.org.apache.hudi.QuickstartUtils.DataGenerator()\n')),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50"},"DataGenerator"),"\ncan generate sample inserts and updates based on the the sample trip schema ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57"},"here"),"\n{: .notice--info}"),(0,i.yg)("h2",{id:"insert-data-1"},"Insert data"),(0,i.yg)("p",null,"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# pyspark\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n  'hoodie.table.name': tableName,\n  'hoodie.datasource.write.recordkey.field': 'uuid',\n  'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n  'hoodie.datasource.write.table.name': tableName,\n  'hoodie.datasource.write.operation': 'insert',\n  'hoodie.datasource.write.precombine.field': 'ts',\n  'hoodie.upsert.shuffle.parallelism': 2, \n  'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\"). \\\n  options(**hudi_options). \\\n  mode(\"overwrite\"). \\\n  save(basePath)\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"mode(Overwrite)")," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,i.yg)("inlineCode",{parentName:"p"},"/tmp/hudi_trips_cow/<region>/<country>/<city>/"),". We provided a record key\n(",(0,i.yg)("inlineCode",{parentName:"p"},"uuid")," in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),"), partition field (",(0,i.yg)("inlineCode",{parentName:"p"},"region/county/city"),") and combine logic (",(0,i.yg)("inlineCode",{parentName:"p"},"ts")," in\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,i.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"Modeling data stored in Hudi"),"\nand for info on ways to ingest data into Hudi, refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/writing_data"},"Writing Hudi Tables"),".\nHere we are using the default write operation : ",(0,i.yg)("inlineCode",{parentName:"p"},"upsert"),". If you have a workload without updates, you can also issue\n",(0,i.yg)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"bulk_insert")," operations which could be faster. To know more, refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/writing_data#write-operations"},"Write operations"),"\n{: .notice--info}"),(0,i.yg)("h2",{id:"query-data-1"},"Query data"),(0,i.yg)("p",null,"Load the data files into a DataFrame."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# pyspark\ntripsSnapshotDF = spark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*")\n# load(basePath) use "/partitionKey=partitionValue" folder structure for Spark auto partition discovery\n\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n')),(0,i.yg)("p",null,"This query provides snapshot querying of the ingested data. Since our partition path (",(0,i.yg)("inlineCode",{parentName:"p"},"region/country/city"),") is 3 levels nested\nfrom base path we ve used ",(0,i.yg)("inlineCode",{parentName:"p"},'load(basePath + "/*/*/*/*")'),".\nRefer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/concepts#table-types--queries"},"Table types and queries")," for more info on all table types and query types supported.\n{: .notice--info}"),(0,i.yg)("h2",{id:"update-data-1"},"Update data"),(0,i.yg)("p",null,"This is similar to inserting new data. Generate updates to existing trips using the data generator, load into a DataFrame\nand write DataFrame into the hudi table."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# pyspark\nupdates = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateUpdates(10))\ndf = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi"). \\\n  options(**hudi_options). \\\n  mode("append"). \\\n  save(basePath)\n')),(0,i.yg)("p",null,"Notice that the save mode is now ",(0,i.yg)("inlineCode",{parentName:"p"},"Append"),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,i.yg)("a",{parentName:"p",href:"#query-data"},"Querying")," the data again will now show updated trips. Each write operation generates a new ",(0,i.yg)("a",{parentName:"p",href:"/docs/concepts"},"commit"),"\ndenoted by the timestamp. Look for changes in ",(0,i.yg)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"rider"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"driver")," fields for the same ",(0,i.yg)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"s in previous commit.\n{: .notice--info}"),(0,i.yg)("h2",{id:"incremental-query-1"},"Incremental query"),(0,i.yg)("p",null,"Hudi also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's incremental querying and providing a begin time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case). "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# pyspark\n# reload data\nspark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*"). \\\n  createOrReplaceTempView("hudi_trips_snapshot")\n\ncommits = list(map(lambda row: row[0], spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").limit(50).collect()))\nbeginTime = commits[len(commits) - 2] # commit time we are interested in\n\n# incrementally query data\nincremental_read_options = {\n  \'hoodie.datasource.query.type\': \'incremental\',\n  \'hoodie.datasource.read.begin.instanttime\': beginTime,\n}\n\ntripsIncrementalDF = spark.read.format("hudi"). \\\n  options(**incremental_read_options). \\\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n')),(0,i.yg)("p",null,"This will give all changes that happened after the beginTime commit with the filter of fare > 20.0. The unique thing about this\nfeature is that it now lets you author streaming pipelines on batch data.\n{: .notice--info}"),(0,i.yg)("h2",{id:"point-in-time-query-1"},"Point in time query"),(0,i.yg)("p",null,'Lets look at how to query data as of a specific time. The specific time can be represented by pointing endTime to a\nspecific commit time and beginTime to "000" (denoting earliest possible commit time). '),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# pyspark\nbeginTime = \"000\" # Represents all commits > this time.\nendTime = commits[len(commits) - 2]\n\n# query point in time data\npoint_in_time_read_options = {\n  'hoodie.datasource.query.type': 'incremental',\n  'hoodie.datasource.read.end.instanttime': endTime,\n  'hoodie.datasource.read.begin.instanttime': beginTime\n}\n\ntripsPointInTimeDF = spark.read.format(\"hudi\"). \\\n  options(**point_in_time_read_options). \\\n  load(basePath)\n\ntripsPointInTimeDF.createOrReplaceTempView(\"hudi_trips_point_in_time\")\nspark.sql(\"select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from hudi_trips_point_in_time where fare > 20.0\").show()\n")),(0,i.yg)("h2",{id:"deletes"},"Delete data"),(0,i.yg)("p",null,"Delete records for the HoodieKeys passed in."),(0,i.yg)("p",null,"Note: Only ",(0,i.yg)("inlineCode",{parentName:"p"},"Append")," mode is supported for delete operation."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# pyspark\n# fetch total records count\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n# fetch two records to be deleted\nds = spark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").limit(2)\n\n# issue deletes\nhudi_delete_options = {\n  'hoodie.table.name': tableName,\n  'hoodie.datasource.write.recordkey.field': 'uuid',\n  'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n  'hoodie.datasource.write.table.name': tableName,\n  'hoodie.datasource.write.operation': 'delete',\n  'hoodie.datasource.write.precombine.field': 'ts',\n  'hoodie.upsert.shuffle.parallelism': 2, \n  'hoodie.insert.shuffle.parallelism': 2\n}\n\nfrom pyspark.sql.functions import lit\ndeletes = list(map(lambda row: (row[0], row[1]), ds.collect()))\ndf = spark.sparkContext.parallelize(deletes).toDF(['uuid', 'partitionpath']).withColumn('ts', lit(0.0))\ndf.write.format(\"hudi\"). \\\n  options(**hudi_delete_options). \\\n  mode(\"append\"). \\\n  save(basePath)\n\n# run the same read query as above.\nroAfterDeleteViewDF = spark. \\\n  read. \\\n  format(\"hudi\"). \\\n  load(basePath + \"/*/*/*/*\") \nroAfterDeleteViewDF.registerTempTable(\"hudi_trips_snapshot\")\n# fetch should return (total - 2) records\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n")),(0,i.yg)("p",null,"See the ",(0,i.yg)("a",{parentName:"p",href:"/docs/writing_data#deletes"},"deletion section")," of the writing data page for more details."),(0,i.yg)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,i.yg)("p",null,"You can also do the quickstart by ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi#building-apache-hudi-from-source"},"building hudi yourself"),",\nand using ",(0,i.yg)("inlineCode",{parentName:"p"},"--jars <path to hudi_code>/packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-*.*.*-SNAPSHOT.jar")," in the spark-shell command above\ninstead of ",(0,i.yg)("inlineCode",{parentName:"p"},"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.6.0"),". Hudi also supports scala 2.12. Refer ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi#build-with-scala-212"},"build with scala 2.12"),"\nfor more info."),(0,i.yg)("p",null,"Also, we used Spark here to show case the capabilities of Hudi. However, Hudi can support multiple table types/query types and\nHudi tables can be queried from query engines like Hive, Spark, Presto and much more. We have put together a\n",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VhNgUsxdrD0"},"demo video")," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,i.yg)("a",{parentName:"p",href:"/docs/docker_demo"},"here")," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/migration_guide"},"migration guide"),"."))}u.isMDXComponent=!0}}]);