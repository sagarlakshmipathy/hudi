"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9891],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34621:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(58168),i=(r(96540),r(15680));const a={title:"Tuning Guide",keywords:["hudi","tuning","performance"],last_modified_at:new Date("2021-09-29T19:59:57.000Z")},o="Tuning Guide",s={unversionedId:"tuning-guide",id:"version-0.13.1/tuning-guide",title:"Tuning Guide",description:"To get a better understanding of where your Hudi jobs is spending its time, use a tool like YourKit Java Profiler, to obtain heap dumps/flame graphs.",source:"@site/versioned_docs/version-0.13.1/tuning-guide.md",sourceDirName:".",slug:"/tuning-guide",permalink:"/docs/0.13.1/tuning-guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/tuning-guide.md",tags:[],version:"0.13.1",frontMatter:{title:"Tuning Guide",keywords:["hudi","tuning","performance"],last_modified_at:"2021-09-29T19:59:57.000Z"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/0.13.1/troubleshooting"},next:{title:"Cloud Storage",permalink:"/docs/0.13.1/cloud"}},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"tuning-guide"},"Tuning Guide"),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Profiling Tip")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"To get a better understanding of where your Hudi jobs is spending its time, use a tool like ",(0,i.yg)("a",{parentName:"p",href:"https://www.yourkit.com/download/"},"YourKit Java Profiler"),", to obtain heap dumps/flame graphs."))),(0,i.yg)("p",null,"Writing data via Hudi happens as a Spark job and thus general rules of spark debugging applies here too. Below is a list of things to keep in mind, if you are looking to improving performance or reliability."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Input Parallelism")," : By default, Hudi tends to over-partition input (i.e ",(0,i.yg)("inlineCode",{parentName:"p"},"withParallelism(1500)"),"), to ensure each Spark partition stays within the 2GB limit for inputs upto 500GB. Bump this up accordingly if you have larger inputs. We recommend having shuffle parallelism ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.[insert|upsert|bulkinsert].shuffle.parallelism")," such that its atleast input_data_size/500MB"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Off-heap memory")," : Hudi writes parquet files and that needs good amount of off-heap memory proportional to schema width. Consider setting something like ",(0,i.yg)("inlineCode",{parentName:"p"},"spark.executor.memoryOverhead")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"spark.driver.memoryOverhead"),", if you are running into such failures."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Spark Memory")," : Typically, hudi needs to be able to read a single file into memory to perform merges or compactions and thus the executor memory should be sufficient to accomodate this. In addition, Hoodie caches the input to be able to intelligently place data and thus leaving some ",(0,i.yg)("inlineCode",{parentName:"p"},"spark.memory.storageFraction")," will generally help boost performance."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Sizing files"),": Set ",(0,i.yg)("inlineCode",{parentName:"p"},"limitFileSize")," above judiciously, to balance ingest/write latency vs number of files & consequently metadata overhead associated with it."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Timeseries/Log data")," : Default configs are tuned for database/nosql changelogs where individual record sizes are large. Another very popular class of data is timeseries/event/log data that tends to be more volumnious with lot more records per partition. In such cases consider tuning the bloom filter accuracy via ",(0,i.yg)("inlineCode",{parentName:"p"},".bloomFilterFPP()/bloomFilterNumEntries()")," to achieve your target index look up time. Also, consider making a key that is prefixed with time of the event, which will enable range pruning & significantly speeding up index lookup."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"GC Tuning"),": Please be sure to follow garbage collection tuning tips from Spark tuning guide to avoid OutOfMemory errors. ","[Must]"," Use G1/CMS Collector. Sample CMS Flags to add to spark.executor.extraJavaOptions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"-XX:NewSize=1g -XX:SurvivorRatio=2 -XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:CMSInitiatingOccupancyFraction=70 -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintTenuringDistribution -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"OutOfMemory Errors"),": If it keeps OOMing still, reduce spark memory conservatively: ",(0,i.yg)("inlineCode",{parentName:"p"},"spark.memory.fraction=0.2, spark.memory.storageFraction=0.2")," allowing it to spill rather than OOM. (reliably slow vs crashing intermittently)"),(0,i.yg)("p",null,"Below is a full working production config"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"spark.driver.extraClassPath /etc/hive/conf\nspark.driver.extraJavaOptions -XX:+PrintTenuringDistribution -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintGCTimeStamps -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\nspark.driver.maxResultSize 2g\nspark.driver.memory 4g\nspark.executor.cores 1\nspark.executor.extraJavaOptions -XX:+PrintFlagsFinal -XX:+PrintReferenceGC -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintAdaptiveSizePolicy -XX:+UnlockDiagnosticVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\nspark.executor.id driver\nspark.executor.instances 300\nspark.executor.memory 6g\nspark.rdd.compress true\n \nspark.kryoserializer.buffer.max 512m\nspark.serializer org.apache.spark.serializer.KryoSerializer\nspark.shuffle.service.enabled true\nspark.sql.hive.convertMetastoreParquet false\nspark.submit.deployMode cluster\nspark.task.cpus 1\nspark.task.maxFailures 4\n \nspark.driver.memoryOverhead 1024\nspark.executor.memoryOverhead 3072\nspark.yarn.max.executor.failures 100\n")))}m.isMDXComponent=!0}}]);