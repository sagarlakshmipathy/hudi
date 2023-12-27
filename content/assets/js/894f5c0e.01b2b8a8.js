"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[6215],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(t),p=r,y=g["".concat(c,".").concat(p)]||g[p]||d[p]||o;return t?a.createElement(y,l(l({ref:n},u),{},{components:t})):a.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},42073:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},l=void 0,i={unversionedId:"syncing_aws_glue_data_catalog",id:"version-0.14.0/syncing_aws_glue_data_catalog",title:"AWS Glue Data Catalog",description:"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on HiveSyncTool",source:"@site/versioned_docs/version-0.14.0/syncing_aws_glue_data_catalog.md",sourceDirName:".",slug:"/syncing_aws_glue_data_catalog",permalink:"/docs/syncing_aws_glue_data_catalog",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/syncing_aws_glue_data_catalog.md",tags:[],version:"0.14.0",frontMatter:{title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},sidebar:"docs",previous:{title:"Streaming Ingestion",permalink:"/docs/hoodie_streaming_ingestion"},next:{title:"DataHub",permalink:"/docs/syncing_datahub"}},c=[{value:"Configurations",id:"configurations",children:[{value:"Running AWS Glue Catalog Sync for Spark DataSource",id:"running-aws-glue-catalog-sync-for-spark-datasource",children:[],level:4},{value:"Running AWS Glue Catalog Sync from EMR",id:"running-aws-glue-catalog-sync-from-emr",children:[],level:4}],level:3}],s={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on ",(0,r.kt)("inlineCode",{parentName:"p"},"HiveSyncTool"),"\n, ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool")," makes use of all the configurations that are taken by ",(0,r.kt)("inlineCode",{parentName:"p"},"HiveSyncTool"),"\nand send them to AWS Glue."),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"There is no additional configuration for using ",(0,r.kt)("inlineCode",{parentName:"p"},"AwsGlueCatalogSyncTool"),"; you just need to set it as one of the sync tool\nclasses for ",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieStreamer")," and everything configured as shown in ",(0,r.kt)("a",{parentName:"p",href:"syncing_metastore"},"Sync to Hive Metastore")," will\nbe passed along."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--sync-tool-classes org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool\n")),(0,r.kt)("h4",{id:"running-aws-glue-catalog-sync-for-spark-datasource"},"Running AWS Glue Catalog Sync for Spark DataSource"),(0,r.kt)("p",null,"To write a Hudi table to Amazon S3 and catalog it in AWS Glue Data Catalog, you can use the options mentioned in the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-hudi.html#aws-glue-programming-etl-format-hudi-write"},"AWS documentation")),(0,r.kt)("h4",{id:"running-aws-glue-catalog-sync-from-emr"},"Running AWS Glue Catalog Sync from EMR"),(0,r.kt)("p",null,"If you're running HiveSyncTool on an EMR cluster backed by Glue Data Catalog as external metastore, you can simply run the sync from command line like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /usr/lib/hudi/bin\n\n./run_sync_tool.sh --base-path s3://<bucket_name>/<prefix>/<table_name> --database <database_name> --table <table_name> --partitioned-by <column_name>\n")))}g.isMDXComponent=!0}}]);