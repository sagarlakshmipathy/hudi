"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78037],{28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>d});var i=o(96540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},81530:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"gcp_bigquery","title":"Google BigQuery","description":"Hudi tables can be queried from Google Cloud BigQuery as external tables. As of","source":"@site/versioned_docs/version-0.12.3/gcp_bigquery.md","sourceDirName":".","slug":"/gcp_bigquery","permalink":"/docs/0.12.3/gcp_bigquery","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/gcp_bigquery.md","tags":[],"version":"0.12.3","frontMatter":{"title":"Google BigQuery","keywords":["hudi","gcp","bigquery"],"summary":"Introduce BigQuery integration in Hudi."},"sidebar":"docs","previous":{"title":"Hive Metastore","permalink":"/docs/0.12.3/syncing_metastore"},"next":{"title":"Bootstrapping","permalink":"/docs/0.12.3/migration_guide"}}');var n=o(74848),r=o(28453);const s={title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},d=void 0,a={},c=[{value:"Configurations",id:"configurations",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Hudi tables can be queried from ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/bigquery",children:"Google Cloud BigQuery"})," as external tables. As of\nnow, the Hudi-BigQuery integration only works for hive-style partitioned Copy-On-Write tables."]}),"\n",(0,n.jsx)(t.h2,{id:"configurations",children:"Configurations"}),"\n",(0,n.jsxs)(t.p,{children:["Hudi uses ",(0,n.jsx)(t.code,{children:"org.apache.hudi.gcp.bigquery.BigQuerySyncTool"})," to sync tables. It works with ",(0,n.jsx)(t.code,{children:"HoodieDeltaStreamer"})," via\nsetting sync tool class. A few BigQuery-specific configurations are required."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Config"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"hoodie.gcp.bigquery.sync.project_id"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The target Google Cloud project"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"hoodie.gcp.bigquery.sync.dataset_name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"BigQuery dataset name; create before running the sync tool"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"hoodie.gcp.bigquery.sync.dataset_location"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Region info of the dataset; same as the GCS bucket that stores the Hudi table"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"hoodie.gcp.bigquery.sync.source_uri"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A wildcard path pattern pointing to the first level partition; make sure to include the partition key."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"hoodie.gcp.bigquery.sync.source_uri_prefix"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["The common prefix of the ",(0,n.jsx)(t.code,{children:"source_uri"}),", usually it's the path to the Hudi table, trailing slash does not matter."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"hoodie.gcp.bigquery.sync.base_path"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The usual basepath config for Hudi table."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Refer to ",(0,n.jsx)(t.code,{children:"org.apache.hudi.gcp.bigquery.BigQuerySyncConfig"})," for the complete configuration list."]}),"\n",(0,n.jsx)(t.p,{children:"In addition to the BigQuery-specific configs, set the following Hudi configs to write the Hudi table in the desired way."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"hoodie.datasource.write.hive_style_partitioning = 'true'\nhoodie.datasource.write.drop.partition.columns  = 'true'\nhoodie.partition.metafile.use.base.format       = 'true'\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["Below shows an example for running ",(0,n.jsx)(t.code,{children:"BigQuerySyncTool"})," with ",(0,n.jsx)(t.code,{children:"HoodieDeltaStreamer"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"spark-submit --master yarn \\\n--packages com.google.cloud:google-cloud-bigquery:2.10.4 \\\n--jars /opt/hudi-gcp-bundle-0.12.1.jar \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/opt/hudi-utilities-bundle_2.12-0.12.1.jar \\\n--target-base-path gs://my-hoodie-table/path \\\n--target-table mytable \\\n--table-type COPY_ON_WRITE \\\n--base-file-format PARQUET \\\n# ... other deltastreamer options\n--enable-sync \\\n--sync-tool-classes org.apache.hudi.gcp.bigquery.BigQuerySyncTool \\\n--hoodie-conf hoodie.deltastreamer.source.dfs.root=gs://my-source-data/path \\\n--hoodie-conf hoodie.gcp.bigquery.sync.project_id=hudi-bq \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_name=rxusandbox \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_location=asia-southeast1 \\\n--hoodie-conf hoodie.gcp.bigquery.sync.table_name=mytable \\\n--hoodie-conf hoodie.gcp.bigquery.sync.base_path=gs://rxusandbox/testcases/stocks/data/target/${NOW} \\\n--hoodie-conf hoodie.gcp.bigquery.sync.partition_fields=year,month,day \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri=gs://my-hoodie-table/path/year=* \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri_prefix=gs://my-hoodie-table/path/ \\\n--hoodie-conf hoodie.gcp.bigquery.sync.use_file_listing_from_metadata=true \\\n--hoodie-conf hoodie.gcp.bigquery.sync.assume_date_partitioning=false \\\n--hoodie-conf hoodie.datasource.hive_sync.mode=jdbc \\\n--hoodie-conf hoodie.datasource.hive_sync.jdbcurl=jdbc:hive2://localhost:10000 \\\n--hoodie-conf hoodie.datasource.hive_sync.skip_ro_suffix=true \\\n--hoodie-conf hoodie.datasource.hive_sync.ignore_exceptions=false \\\n--hoodie-conf hoodie.datasource.hive_sync.database=mydataset \\\n--hoodie-conf hoodie.datasource.hive_sync.table=mytable \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=mykey \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=year,month,day \\\n--hoodie-conf hoodie.datasource.write.precombine.field=ts \\\n--hoodie-conf hoodie.datasource.write.keygenerator.type=COMPLEX \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.write.drop.partition.columns=true \\\n--hoodie-conf hoodie.partition.metafile.use.base.format=true \\\n--hoodie-conf hoodie.metadata.enable=true \\\n"})}),"\n",(0,n.jsx)(t.p,{children:"After run, the sync tool will create 2 tables and 1 view in the target dataset in BigQuery. The tables and the view\nshare the same name prefix, which is taken from the Hudi table name. Query the view for the same results as querying the\nCopy-on-Write Hudi table."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);