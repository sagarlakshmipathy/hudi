"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[29635],{28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>c});var t=n(96540);const s={},o=t.createContext(s);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:a},e.children)}},88234:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"syncing_aws_glue_data_catalog","title":"AWS Glue Data Catalog","description":"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on HiveSyncTool","source":"@site/versioned_docs/version-1.0.1/syncing_aws_glue_data_catalog.md","sourceDirName":".","slug":"/syncing_aws_glue_data_catalog","permalink":"/docs/syncing_aws_glue_data_catalog","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.1/syncing_aws_glue_data_catalog.md","tags":[],"version":"1.0.1","frontMatter":{"title":"AWS Glue Data Catalog","keywords":["hudi","aws","glue","sync"]},"sidebar":"docs","previous":{"title":"File Sizing","permalink":"/docs/file_sizing"},"next":{"title":"DataHub","permalink":"/docs/syncing_datahub"}}');var s=n(74848),o=n(28453);const i={title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},c=void 0,l={},r=[{value:"Configurations",id:"configurations",level:2},{value:"Avoid creating excessive versions",id:"avoid-creating-excessive-versions",level:3},{value:"Glue Data Catalog specific configs",id:"glue-data-catalog-specific-configs",level:3},{value:"Other references",id:"other-references",level:2},{value:"Running AWS Glue Catalog Sync for Spark DataSource",id:"running-aws-glue-catalog-sync-for-spark-datasource",level:3},{value:"Running AWS Glue Catalog Sync from EMR",id:"running-aws-glue-catalog-sync-from-emr",level:3}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on ",(0,s.jsx)(a.code,{children:"HiveSyncTool"}),"\n, ",(0,s.jsx)(a.code,{children:"org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool"})," makes use of all the configurations that are taken by ",(0,s.jsx)(a.code,{children:"HiveSyncTool"}),"\nand send them to AWS Glue."]}),"\n",(0,s.jsx)(a.h2,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsxs)(a.p,{children:["Most of the configurations for ",(0,s.jsx)(a.code,{children:"AwsGlueCatalogSyncTool"})," are shared with ",(0,s.jsx)(a.code,{children:"HiveSyncTool"}),". The example showed in\n",(0,s.jsx)(a.a,{href:"syncing_metastore",children:"Sync to Hive Metastore"})," can be used as is for sync with Glue Data Catalog, provided that the hive metastore\nURL (either JDBC or thrift URI) can proxied to Glue Data Catalog, which is usually done within AWS EMR or Glue job environment."]}),"\n",(0,s.jsx)(a.p,{children:"For Hudi streamer, users can set"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"--sync-tool-classes org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool\n"})}),"\n",(0,s.jsx)(a.p,{children:"For Spark data source writers, users can set"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"hoodie.meta.sync.client.tool.class=org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool\n"})}),"\n",(0,s.jsx)(a.h3,{id:"avoid-creating-excessive-versions",children:"Avoid creating excessive versions"}),"\n",(0,s.jsx)(a.p,{children:"Tables stored in Glue Data Catalog are versioned. And by default, every Hudi commit triggers a sync operation if enabled, regardless of having relevant metadata changes.\nThis can lead to too many versions kept in the catalog and eventually failing the sync operation."}),"\n",(0,s.jsx)(a.p,{children:"Meta-sync can be set to conditional - only sync when there are schema change or partition change. This can avoid creating\nexcessive versions in the catalog. Users can enable it by setting"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"hoodie.datasource.meta_sync.condition.sync=true\n"})}),"\n",(0,s.jsx)(a.h3,{id:"glue-data-catalog-specific-configs",children:"Glue Data Catalog specific configs"}),"\n",(0,s.jsx)(a.p,{children:"Sync to Glue Data Catalog can be optimized with other configs like"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"hoodie.datasource.meta.sync.glue.all_partitions_read_parallelism\nhoodie.datasource.meta.sync.glue.changed_partitions_read_parallelism\nhoodie.datasource.meta.sync.glue.partition_change_parallelism\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/glue/latest/dg/partition-indexes.html",children:"Partition indexes"})," can also be used by setting"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"hoodie.datasource.meta.sync.glue.partition_index_fields.enable\nhoodie.datasource.meta.sync.glue.partition_index_fields\n"})}),"\n",(0,s.jsx)(a.h2,{id:"other-references",children:"Other references"}),"\n",(0,s.jsx)(a.h3,{id:"running-aws-glue-catalog-sync-for-spark-datasource",children:"Running AWS Glue Catalog Sync for Spark DataSource"}),"\n",(0,s.jsxs)(a.p,{children:["To write a Hudi table to Amazon S3 and catalog it in AWS Glue Data Catalog, you can use the options mentioned in the\n",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-hudi.html#aws-glue-programming-etl-format-hudi-write",children:"AWS documentation"})]}),"\n",(0,s.jsx)(a.h3,{id:"running-aws-glue-catalog-sync-from-emr",children:"Running AWS Glue Catalog Sync from EMR"}),"\n",(0,s.jsx)(a.p,{children:"If you're running HiveSyncTool on an EMR cluster backed by Glue Data Catalog as external metastore, you can simply run the sync from command line like below:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"cd /usr/lib/hudi/bin\n\n./run_sync_tool.sh --base-path s3://<bucket_name>/<prefix>/<table_name> --database <database_name> --table <table_name> --partitioned-by <column_name>\n"})})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);