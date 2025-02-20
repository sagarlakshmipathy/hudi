"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[65193],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}},64918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"syncing_xtable","title":"Apache XTable (incubating)","description":"Hudi (tables created from 0.14.0 onwards) supports syncing to Iceberg and/or Delta Lake with Apache XTable (incubating), providing users with the option to interoperate with other table formats like Delta Lake and Apache Iceberg.","source":"@site/versioned_docs/version-0.14.1/syncing_xtable.md","sourceDirName":".","slug":"/syncing_xtable","permalink":"/cn/docs/0.14.1/syncing_xtable","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/syncing_xtable.md","tags":[],"version":"0.14.1","frontMatter":{"title":"Apache XTable (incubating)","keywords":["xtable","hudi","delta-lake","iceberg","sync"]},"sidebar":"docs","previous":{"title":"Google BigQuery","permalink":"/cn/docs/0.14.1/gcp_bigquery"},"next":{"title":"Bootstrapping","permalink":"/cn/docs/0.14.1/migration_guide"}}');var i=n(74848),o=n(28453);const s={title:"Apache XTable (incubating)",keywords:["xtable","hudi","delta-lake","iceberg","sync"]},r=void 0,l={},c=[{value:"Interoperating with XTable",id:"interoperating-with-xtable",level:2},{value:"Installation",id:"installation",level:3},{value:"Syncing to XTable",id:"syncing-to-xtable",level:3},{value:"Hudi Streamer Extensions",id:"hudi-streamer-extensions",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Hudi (tables created from 0.14.0 onwards) supports syncing to Iceberg and/or Delta Lake with ",(0,i.jsx)(t.a,{href:"https://xtable.apache.org/",children:"Apache XTable (incubating)"}),", providing users with the option to interoperate with other table formats like Delta Lake and Apache Iceberg."]}),"\n",(0,i.jsx)(t.h2,{id:"interoperating-with-xtable",children:"Interoperating with XTable"}),"\n",(0,i.jsx)(t.p,{children:"If you have tables in one of the supported formats (Delta/Iceberg), you can use XTable to translate the existing metadata to read as a Hudi table and vice versa."}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["You can work with XTable by either building the jar from the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable",children:"source"})," or by downloading from ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable/packages/1986830",children:"GitHub packages"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"tip",children:(0,i.jsxs)(t.p,{children:["If you're using one of the JVM languages to work with Hudi/Delta/Iceberg, you can directly use XTable as a ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable/packages/1986830",children:"dependency"})," in your project.\nThis is highlighted in this ",(0,i.jsx)(t.a,{href:"https://xtable.apache.org/docs/demo/docker",children:"demo"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"syncing-to-xtable",children:"Syncing to XTable"}),"\n",(0,i.jsx)(t.p,{children:"Once you have the jar, you can simply run it against a Hudi/Delta/Iceberg table to add target table format metadata to the table.\nBelow is an example configuration to translate a Hudi table to Delta & Iceberg table."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",metastring:'md title="my_config.yaml"',children:"sourceFormat: HUDI\ntargetFormats:\n  - DELTA\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: path/to/hudi/table\n    tableName: tableName\n    partitionSpec: partition_field_name:VALUE\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"java -jar path/to/bundled-xtable.jar --datasetConfig path/to/my_config.yaml\n"})}),"\n",(0,i.jsx)(t.h3,{id:"hudi-streamer-extensions",children:"Hudi Streamer Extensions"}),"\n",(0,i.jsx)(t.p,{children:"If you want to use XTable with Hudi Streamer to sync each commit into other table formats, you have to"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-xtable/tree/main/hudi-support/extensions",children:"extensions jar"})," ",(0,i.jsx)(t.code,{children:"hudi-extensions-0.1.0-SNAPSHOT-bundled.jar"})," to your class path."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add ",(0,i.jsx)(t.code,{children:"org.apache.xtable.hudi.sync.OneTableSyncTool"})," to your list of sync classes"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Set the following configurations based on your preferences:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"'hoodie.onetable.formats.to.sync=ICEBERG,DELTA' \n'hoodie.onetable.target.metadata.retention.hr=168'\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For more examples, you can refer to the ",(0,i.jsx)(t.a,{href:"https://xtable.apache.org/docs/how-to",children:"XTable docs"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);