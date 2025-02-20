"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[10181],{19120:A=>{A.exports=JSON.parse('{"permalink":"/blog/2020/04/27/apache-hudi-apache-zepplin","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-04-27-apache-hudi-apache-zepplin.md","source":"@site/blog/2020-04-27-apache-hudi-apache-zepplin.md","title":"Apache Hudi Support on Apache Zeppelin","description":"1. Introduction","date":"2020-04-27T00:00:00.000Z","tags":[{"inline":true,"label":"how-to","permalink":"/blog/tags/how-to"},{"inline":true,"label":"apache zeppelin","permalink":"/blog/tags/apache-zeppelin"},{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"}],"readingTime":2.23,"hasTruncateMarker":true,"authors":[{"name":"leesf","key":null,"page":null}],"frontMatter":{"title":"Apache Hudi Support on Apache Zeppelin","excerpt":"Integrating HUDI\'s real-time and read-optimized query capabilities into Apache Zeppelin\u2019s notebook","author":"leesf","category":"blog","tags":["how-to","apache zeppelin","apache hudi"]},"unlisted":false,"prevItem":{"title":"Monitor Hudi metrics with Datadog","permalink":"/blog/2020/05/28/monitoring-hudi-metrics-with-datadog"},"nextItem":{"title":"Export Hudi datasets as a copy or as different formats","permalink":"/blog/2020/03/22/exporting-hudi-datasets"}}')},19619:(A,e,g)=>{g.d(e,{A:()=>i});const i="data:image/png;base64,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ECBAgAABAgQIECBAgAABAgQInCWg0HgWn8YECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEHlNAofEx192sCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJwloNB4Fp/GBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBB5TQKHxMdfdrAkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAicJaDQeBafxgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQeU0Ch8THX3awJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQInCWg0HgWn8YECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEHlNAofEx192sCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJwlcFKh8e3bt40vBmJADIgBMSAGxIAYEANiQAyIATEgBsSAGBADYkAMiAExIAbEgBgQA2LgcWPgpELjWaVNjQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ+OwFFBo/+yU0AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKvL6DQ+PrmrkiAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEDgsxeYLzT+7W9N86c/+WIgBsSAGBADYkAMiAExIAbEgBgQA2JADIgBMXCbMRD+/8qLAAECBAgQIEDgagLzhcbwBvqLL3wxEANiQAyIATEgBsSAGBADYkAMiAExIAbEgBi4zRgI/3/lRYAAAQIECBAgcDWBg4XG//3xj7f5F2v+ktC6iAExIAbEgBgQA2JADIgBMSAGxIAYEANi4CFjIP5/VSj+hvX3IkCAAAECBAgQuJrAwUKjN2xXWxsXJkCAAAECBAgQIECAAAECBAgQmBIIBUaFxikZ+wgQIECAAAECryqg0Piq3C5GgAABAgQIECBAgAABAgQIECBwtoBC49mEOiBAgAABAgQIvITAxQqNnz59at6/f9/s9/vmxx9/9MVADIgBMSAGxIAYEANiQAyIATEgBl41BkI+GvLSkJ96XU5A/u//PM79f5+TflcVGi/3S61nAgQIECBAgMARAhcpNIYk46effmrevXvX/P7770cMx6kECBAgQIAAAQIECBAgQOBlBEI+GvLSkJ8qNr6Mad2L/L8W8fMpAif9rio0nkKtDQECBAgQ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CBAgQIAAAQIECBAgQIAAgVsXGBUa371713z69OnWx218BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhcUWBUaPz111+b8OVFgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBOYFRofG///1v8/79+1hsdGfjHJv9BAgQIECAAGbB6jIAAAQ5SURBVAECBAgQIECAAAECBAgQIECAAAECBB5bYFRoDByh2BjuagyPUX379q0vBmJADIgBMSAGxIAYEANiQAyIATEgBsSAGBADYkAMiAExIAbEgBgQA2JADBQxMFlofOzaq9kTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIHBIQKHxkJDjBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMBBQaRyR2ECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBwSECh8ZCQ4wQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIjAQUGkckdhAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcEhAofGQkOMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIwEFBpHJHYQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIHBIQKHxkJDjBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMBBQaRyR2ECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBwSECh8ZCQ4wQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIjAQUGkckdhAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcEhAofGQkOMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIwEFBpHJHYQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIHBIQKHxkJDjBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMBBQaRyR2ECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBwSECh8ZCQ4wQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIjAQUGkckdhAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcEhAofGQkOMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIwEFBpHJHYQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIHBIQKHxkJDjBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMBBQaRyR2ECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBwSECh8ZCQ4wQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIjAQUGkckdhAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcEhAofGQkOMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIwEFBpHJHYQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIHBIQKHxkJDjBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMBBQaRyR2ECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBwSOD/AYYuAvdRX99hAAAAAElFTkSuQmCC"},28453:(A,e,g)=>{g.d(e,{R:()=>n,x:()=>E});var i=g(96540);const t={},a=i.createContext(t);function n(A){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function E(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:n(A.components),i.createElement(a.Provider,{value:e},A.children)}},55813:(A,e,g)=>{g.d(e,{A:()=>i});const i=g.p+"assets/images/read_optimized_view-f86557dfea584b97e869ec2d1aa9a46e.png"},78685:(A,e,g)=>{g.d(e,{A:()=>i});const i=g.p+"assets/images/spark_real_time_view-1b76ee7a1e9e884439da562f46d95f57.png"},79199:(A,e,g)=>{g.r(e),g.d(e,{assets:()=>B,contentTitle:()=>E,default:()=>r,frontMatter:()=>n,metadata:()=>i,toc:()=>Q});var i=g(19120),t=g(74848),a=g(28453);const n={title:"Apache Hudi Support on Apache Zeppelin",excerpt:"Integrating HUDI's real-time and read-optimized query capabilities into Apache Zeppelin\u2019s notebook",author:"leesf",category:"blog",tags:["how-to","apache zeppelin","apache hudi"]},E=void 0,B={authorsImageUrls:[void 0]},Q=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Achieve the effect",id:"2-achieve-the-effect",level:2},{value:"2.1 Hive",id:"21-hive",level:3},{value:"2.1.1 Read optimized view",id:"211-read-optimized-view",level:3},{value:"2.1.2 Real-time view",id:"212-real-time-view",level:3},{value:"2.2 Spark SQL",id:"22-spark-sql",level:3},{value:"2.2.1 Read optimized view",id:"221-read-optimized-view",level:3},{value:"2.2.2 Real-time view",id:"222-real-time-view",level:3},{value:"3. Common problems",id:"3-common-problems",level:2},{value:"3.1 Hudi package adaptation",id:"31-hudi-package-adaptation",level:3},{value:"3.2 Parquet jar package adaptation",id:"32-parquet-jar-package-adaptation",level:3},{value:"3.3 Spark Interpreter adaptation",id:"33-spark-interpreter-adaptation",level:3},{value:"4. Hudi incremental view",id:"4-hudi-incremental-view",level:2}];function C(A){const e={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(e.p,{children:"Apache Zeppelin is a web-based notebook that provides interactive data analysis. It is convenient for you to make beautiful documents that can be data-driven, interactive, and collaborative, and supports multiple languages, including Scala (using Apache Spark), Python (Apache Spark), SparkSQL, Hive, Markdown, Shell, and so on. Hive and SparkSQL currently support querying Hudi\u2019s read-optimized view and real-time view. So in theory, Zeppelin\u2019s notebook should also have such query capabilities."}),"\n",(0,t.jsx)(e.h2,{id:"2-achieve-the-effect",children:"2. Achieve the effect"}),"\n",(0,t.jsx)(e.h3,{id:"21-hive",children:"2.1 Hive"}),"\n",(0,t.jsx)(e.h3,{id:"211-read-optimized-view",children:"2.1.1 Read optimized view"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Read Optimized View",src:g(55813).A+"",width:"1845",height:"950"})}),"\n",(0,t.jsx)(e.h3,{id:"212-real-time-view",children:"2.1.2 Real-time view"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Real-time View",src:g(89355).A+"",width:"1845",height:"956"})}),"\n",(0,t.jsx)(e.h3,{id:"22-spark-sql",children:"2.2 Spark SQL"}),"\n",(0,t.jsx)(e.h3,{id:"221-read-optimized-view",children:"2.2.1 Read optimized view"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Read Optimized View",src:g(99019).A+"",width:"1833",height:"449"})}),"\n",(0,t.jsx)(e.h3,{id:"222-real-time-view",children:"2.2.2 Real-time view"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Real-time View",src:g(78685).A+"",width:"1833",height:"432"})}),"\n",(0,t.jsx)(e.h2,{id:"3-common-problems",children:"3. Common problems"}),"\n",(0,t.jsx)(e.h3,{id:"31-hudi-package-adaptation",children:"3.1 Hudi package adaptation"}),"\n",(0,t.jsx)(e.p,{children:"Zeppelin will load the packages under lib by default when starting. For external dependencies such as Hudi, it is suitable to be placed directly under zeppelin / lib to avoid Hive or Spark SQL not finding the corresponding Hudi dependency on the cluster."}),"\n",(0,t.jsx)(e.h3,{id:"32-parquet-jar-package-adaptation",children:"3.2 Parquet jar package adaptation"}),"\n",(0,t.jsx)(e.p,{children:"The parquet version of the Hudi package is 1.10, and the current parquet version of the CDH cluster is 1.9, so when executing the Hudi table query, many jar package conflict errors will be reported."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Solution"}),": upgrade the parquet package to 1.10 in the spark / jars directory of the node where zepeelin is located.\n",(0,t.jsx)(e.strong,{children:"Side effects"}),": The tasks of saprk jobs other than zeppelin assigned to the cluster nodes of parquet 1.10 may fail.\n",(0,t.jsx)(e.strong,{children:"Suggestions"}),": Clients other than zeppelin will also have jar conflicts. Therefore, it is recommended to fully upgrade the spark jar, parquet jar and related dependent jars of the cluster to better adapt to Hudi\u2019s capabilities."]}),"\n",(0,t.jsx)(e.h3,{id:"33-spark-interpreter-adaptation",children:"3.3 Spark Interpreter adaptation"}),"\n",(0,t.jsx)(e.p,{children:"The same SQL using Spark SQL query on Zeppelin will have more records than the hive query."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Cause of the problem"}),": When reading and writing Parquet tables to the Hive metastore, Spark SQL will use the Parquet SerDe (SerDe: Serialize / Deserilize for short) for Spark serialization and deserialization, not the Hive\u2019s SerDe, because Spark SQL\u2019s own SerDe has better performance."]}),"\n",(0,t.jsx)(e.p,{children:"This causes Spark SQL to only query Hudi\u2019s pipeline records, not the final merge result."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Solution"}),": set ",(0,t.jsx)(e.code,{children:"spark.sql.hive.convertMetastoreParquet=false"})]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Method 1"}),": Edit properties directly on the page**\n",(0,t.jsx)(e.img,{src:g(19619).A+"",width:"1818",height:"105"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Method 2"}),": Edit ",(0,t.jsx)(e.code,{children:"zeppelin / conf / interpreter.json"})," and add**"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"spark.sql.hive.convertMetastoreParquet": {\n  "name": "spark.sql.hive.convertMetastoreParquet",\n  "value": false,\n  "type": "checkbox"\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"4-hudi-incremental-view",children:"4. Hudi incremental view"}),"\n",(0,t.jsx)(e.p,{children:"For Hudi incremental view, currently only supports pulling by writing Spark code. Considering that Zeppelin has the ability to execute code and shell commands directly on the notebook, later consider packaging these notebooks to query Hudi incremental views in a way that supports SQL."})]})}function r(A={}){const{wrapper:e}={...(0,a.R)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(C,{...A})}):C(A)}},89355:(A,e,g)=>{g.d(e,{A:()=>i});const i=g.p+"assets/images/real_time_view-101973743bcb2dccb6e7cd4aa411aa73.png"},99019:(A,e,g)=>{g.d(e,{A:()=>i});const i=g.p+"assets/images/spark_read_optimized_view-3aeb662ab165a9702e1d73ee495107ec.png"}}]);