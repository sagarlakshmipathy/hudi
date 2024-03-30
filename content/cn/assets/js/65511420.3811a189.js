"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[32875],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(h,s(s({ref:t},g),{},{components:n})):a.createElement(h,s({ref:t},g))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(58168),i=(n(96540),n(15680));const r={title:"Asynchronous Clustering using Hudi",excerpt:"How to setup Hudi for asynchronous clustering",author:"codope",category:"blog",image:"/assets/images/blog/clustering/example_perf_improvement.png",tags:["design","clustering","apache hudi"]},s=void 0,o={permalink:"/cn/blog/2021/08/23/async-clustering",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-23-async-clustering.md",source:"@site/blog/2021-08-23-async-clustering.md",title:"Asynchronous Clustering using Hudi",description:"In one of the previous blog posts, we introduced a new",date:"2021-08-23T00:00:00.000Z",formattedDate:"August 23, 2021",tags:[{label:"design",permalink:"/cn/blog/tags/design"},{label:"clustering",permalink:"/cn/blog/tags/clustering"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:6.055,truncated:!0,authors:[{name:"codope"}],prevItem:{title:"Building an ExaByte-level Data Lake Using Apache Hudi at ByteDance",permalink:"/cn/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance"},nextItem:{title:"Reliable ingestion from AWS S3 using Hudi",permalink:"/cn/blog/2021/08/23/s3-events-source"}},l={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Clustering Strategies",id:"clustering-strategies",children:[{value:"Plan Strategy",id:"plan-strategy",children:[],level:3},{value:"Execution Strategy",id:"execution-strategy",children:[],level:3},{value:"Update Strategy",id:"update-strategy",children:[],level:3}],level:2},{value:"Asynchronous Clustering",id:"asynchronous-clustering",children:[{value:"HoodieClusteringJob",id:"hoodieclusteringjob",children:[],level:3},{value:"HoodieDeltaStreamer",id:"hoodiedeltastreamer",children:[],level:3},{value:"Spark Structured Streaming",id:"spark-structured-streaming",children:[],level:3}],level:2},{value:"Conclusion and Future Work",id:"conclusion-and-future-work",children:[],level:2}],g={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In one of the ",(0,i.yg)("a",{parentName:"p",href:"/blog/2021/01/27/hudi-clustering-intro"},"previous blog")," posts, we introduced a new\nkind of table service called clustering to reorganize data for improved query performance without compromising on\ningestion speed. We learnt how to setup inline clustering. In this post, we will discuss what has changed since then and\nsee how asynchronous clustering can be setup using HoodieClusteringJob as well as DeltaStreamer utility."),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"On a high level, clustering creates a plan based on a configurable strategy, groups eligible files based on specific\ncriteria and then executes the plan. Hudi supports ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing"},"multi-writers")," which provides\nsnapshot isolation between multiple table services, thus allowing writers to continue with ingestion while clustering\nruns in the background. For a more detailed overview of the clustering architecture please check out the previous blog\npost."),(0,i.yg)("h2",{id:"clustering-strategies"},"Clustering Strategies"),(0,i.yg)("p",null,"As mentioned before, clustering plan as well as execution depends on configurable strategy. These strategies can be\nbroadly classified into three types: clustering plan strategy, execution strategy and update strategy."),(0,i.yg)("h3",{id:"plan-strategy"},"Plan Strategy"),(0,i.yg)("p",null,"This strategy comes into play while creating clustering plan. It helps to decide what file groups should be clustered.\nLet's look at different plan strategies that are available with Hudi. Note that these strategies are easily pluggable\nusing this ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/configurations#hoodieclusteringplanstrategyclass"},"config"),"."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"SparkSizeBasedClusteringPlanStrategy"),": It selects file slices based on\nthe ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/configurations/#hoodieclusteringplanstrategysmallfilelimit"},"small file limit"),"\nof base files and creates clustering groups upto max file size allowed per group. The max size can be specified using\nthis ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/configurations/#hoodieclusteringplanstrategymaxbytespergroup"},"config"),". This\nstrategy is useful for stitching together medium-sized files into larger ones to reduce lot of files spread across\ncold partitions."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"SparkRecentDaysClusteringPlanStrategy"),": It looks back previous 'N' days partitions and creates a plan that will\ncluster the 'small' file slices within those partitions. This is the default strategy. It could be useful when the\nworkload is predictable and data is partitioned by time."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"SparkSelectedPartitionsClusteringPlanStrategy"),": In case you want to cluster only specific partitions within a range,\nno matter how old or new are those partitions, then this strategy could be useful. To use this strategy, one needs\nto set below two configs additionally (both begin and end partitions are inclusive):")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.clustering.plan.strategy.cluster.begin.partition\nhoodie.clustering.plan.strategy.cluster.end.partition\n")),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"All the strategies are partition-aware and the latter two are still bound by the size limits of the first strategy."))),(0,i.yg)("h3",{id:"execution-strategy"},"Execution Strategy"),(0,i.yg)("p",null,"After building the clustering groups in the planning phase, Hudi applies execution strategy, for each group, primarily\nbased on sort columns and size. The strategy can be specified using this ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/configurations/#hoodieclusteringexecutionstrategyclass"},"config"),"."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"SparkSortAndSizeExecutionStrategy")," is the default strategy. Users can specify the columns to sort the data by, when\nclustering using\nthis ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/configurations/#hoodieclusteringplanstrategysortcolumns"},"config"),". Apart from\nthat, we can also set ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/configurations/#hoodieparquetmaxfilesize"},"max file size"),"\nfor the parquet files produced due to clustering. The strategy uses bulk insert to write data into new files, in which\ncase, Hudi implicitly uses a partitioner that does sorting based on specified columns. In this way, the strategy changes\nthe data layout in a way that not only improves query performance but also balance rewrite overhead automatically."),(0,i.yg)("p",null,"Now this strategy can be executed either as a single spark job or multiple jobs depending on number of clustering groups\ncreated in the planning phase. By default, Hudi will submit multiple spark jobs and union the results. In case you want\nto force Hudi to use single spark job, set the execution strategy\nclass ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/configurations/#hoodieclusteringexecutionstrategyclass"},"config"),"\nto ",(0,i.yg)("inlineCode",{parentName:"p"},"SingleSparkJobExecutionStrategy"),"."),(0,i.yg)("h3",{id:"update-strategy"},"Update Strategy"),(0,i.yg)("p",null,"Currently, clustering can only be scheduled for tables/partitions not receiving any concurrent updates. By default,\nthe ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/configurations/#hoodieclusteringupdatesstrategy"},"config for update strategy")," is\nset to ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"SparkRejectUpdateStrategy")),". If some file group has updates during clustering then it will reject updates and\nthrow an exception. However, in some use-cases updates are very sparse and do not touch most file groups. The default\nstrategy to simply reject updates does not seem fair. In such use-cases, users can set the config to ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"SparkAllowUpdateStrategy")),"."),(0,i.yg)("p",null,"We discussed the critical strategy configurations. All other configurations related to clustering are\nlisted ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/configurations/#Clustering-Configs"},"here"),". Out of this list, a few\nconfigurations that will be very useful are:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Config key"),(0,i.yg)("th",{parentName:"tr",align:null},"Remarks"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"hoodie.clustering.async.enabled")),(0,i.yg)("td",{parentName:"tr",align:null},"Enable running of clustering service, asynchronously as writes happen on the table."),(0,i.yg)("td",{parentName:"tr",align:null},"False")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"hoodie.clustering.async.max.commits")),(0,i.yg)("td",{parentName:"tr",align:null},"Control frequency of async clustering by specifying after how many commits clustering should be triggered."),(0,i.yg)("td",{parentName:"tr",align:null},"4")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"hoodie.clustering.preserve.commit.metadata")),(0,i.yg)("td",{parentName:"tr",align:null},"When rewriting data, preserves existing _hoodie_commit_time. This means users can run incremental queries on clustered data without any side-effects."),(0,i.yg)("td",{parentName:"tr",align:null},"False")))),(0,i.yg)("h2",{id:"asynchronous-clustering"},"Asynchronous Clustering"),(0,i.yg)("p",null,"Previously, we have seen how users\ncan ",(0,i.yg)("a",{parentName:"p",href:"/blog/2021/01/27/hudi-clustering-intro#setting-up-clustering"},"setup inline clustering"),".\nAdditionally, users can\nleverage ",(0,i.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob"},"HoodieClusteringJob"),"\nto setup 2-step asynchronous clustering."),(0,i.yg)("h3",{id:"hoodieclusteringjob"},"HoodieClusteringJob"),(0,i.yg)("p",null,"With the release of Hudi version 0.9.0, we can schedule as well as execute clustering in the same step. We just need to\nspecify the ",(0,i.yg)("inlineCode",{parentName:"p"},"\u2014mode")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"-m")," option. There are three modes:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"schedule"),": Make a clustering plan. This gives an instant which can be passed in execute mode."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"execute"),": Execute a clustering plan at given instant which means --instant-time is required here."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"scheduleAndExecute"),": Make a clustering plan first and execute that plan immediately.")),(0,i.yg)("p",null,"Note that to run this job while the original writer is still running, please enable multi-writing:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\n")),(0,i.yg)("p",null,"A sample spark-submit command to setup HoodieClusteringJob is as below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieClusteringJob \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clusteringjob.properties \\\n--mode scheduleAndExecute \\\n--base-path /path/to/hudi_table/basePath \\\n--table-name hudi_table_schedule_clustering \\\n--spark-memory 1g\n")),(0,i.yg)("p",null,"A sample ",(0,i.yg)("inlineCode",{parentName:"p"},"clusteringjob.properties")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.clustering.async.enabled=true\nhoodie.clustering.async.max.commits=4\nhoodie.clustering.plan.strategy.target.file.max.bytes=1073741824\nhoodie.clustering.plan.strategy.small.file.limit=629145600\nhoodie.clustering.execution.strategy.class=org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy\nhoodie.clustering.plan.strategy.sort.columns=column1,column2\n")),(0,i.yg)("h3",{id:"hoodiedeltastreamer"},"HoodieDeltaStreamer"),(0,i.yg)("p",null,"This brings us to our users' favorite utility in Hudi. Now, we can trigger asynchronous clustering with DeltaStreamer.\nJust set the ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.clustering.async.enabled")," config to true and specify other clustering config in properties file\nwhose location can be pased as ",(0,i.yg)("inlineCode",{parentName:"p"},"\u2014props")," when starting the deltastreamer (just like in the case of HoodieClusteringJob)."),(0,i.yg)("p",null,"A sample spark-submit command to setup HoodieDeltaStreamer is as below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"spark-submit \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clustering_kafka.properties \\\n--schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n--source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n--source-ordering-field impresssiontime \\\n--table-type COPY_ON_WRITE \\\n--target-base-path /path/to/hudi_table/basePath \\\n--target-table impressions_cow_cluster \\\n--op INSERT \\\n--hoodie-conf hoodie.clustering.async.enabled=true \\\n--continuous\n")),(0,i.yg)("h3",{id:"spark-structured-streaming"},"Spark Structured Streaming"),(0,i.yg)("p",null,"We can also enable asynchronous clustering with Spark structured streaming sink as shown below. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val commonOpts = Map(\n   "hoodie.insert.shuffle.parallelism" -> "4",\n   "hoodie.upsert.shuffle.parallelism" -> "4",\n   DataSourceWriteOptions.RECORDKEY_FIELD.key -> "_row_key",\n   DataSourceWriteOptions.PARTITIONPATH_FIELD.key -> "partition",\n   DataSourceWriteOptions.PRECOMBINE_FIELD.key -> "timestamp",\n   HoodieWriteConfig.TBL_NAME.key -> "hoodie_test"\n)\n\ndef getAsyncClusteringOpts(isAsyncClustering: String, \n                           clusteringNumCommit: String, \n                           executionStrategy: String):Map[String, String] = {\n   commonOpts + (DataSourceWriteOptions.ASYNC_CLUSTERING_ENABLE.key -> isAsyncClustering,\n           HoodieClusteringConfig.ASYNC_CLUSTERING_MAX_COMMITS.key -> clusteringNumCommit,\n           HoodieClusteringConfig.EXECUTION_STRATEGY_CLASS_NAME.key -> executionStrategy\n   )\n}\n\ndef initStreamingWriteFuture(hudiOptions: Map[String, String]): Future[Unit] = {\n   val streamingInput = // define the source of streaming\n   Future {\n      println("streaming starting")\n      streamingInput\n              .writeStream\n              .format("org.apache.hudi")\n              .options(hudiOptions)\n              .option("checkpointLocation", basePath + "/checkpoint")\n              .mode(Append)\n              .start()\n              .awaitTermination(10000)\n      println("streaming ends")\n   }\n}\n\ndef structuredStreamingWithClustering(): Unit = {\n   val df = //generate data frame\n   val hudiOptions = getClusteringOpts("true", "1", "org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy")\n   val f1 = initStreamingWriteFuture(hudiOptions)\n   Await.result(f1, Duration.Inf)\n}\n')),(0,i.yg)("h2",{id:"conclusion-and-future-work"},"Conclusion and Future Work"),(0,i.yg)("p",null,"In this post, we discussed different clustering strategies and how to setup asynchronous clustering. The story is not\nover yet and future work entails:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support clustering with updates."),(0,i.yg)("li",{parentName:"ul"},"CLI tools to support clustering.")),(0,i.yg)("p",null,"Please follow this ",(0,i.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-1042"},"JIRA")," to learn more about active development on\nthis issue. We look forward to contributions from the community. Hope you enjoyed this post. Put your Hudi on and keep\nstreaming!"))}p.isMDXComponent=!0}}]);