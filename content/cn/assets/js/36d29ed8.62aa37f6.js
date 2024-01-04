"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[67084],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=l,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=function(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(72389),i=a(79443);const o=function(){const e=(0,l.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var d=a(53810),s=a(86010);const p={tabItem:"tabItem_vU9c"};function u(e){const{lazy:t,block:a,defaultValue:r,values:i,groupId:u,className:m}=e,c=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=i??c.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,d.lx)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===r?r:r??c.find((e=>e.props.default))?.props.value??c[0]?.props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=o(),[v,f]=(0,l.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:y}=(0,d.o5)();if(null!=u){const e=g[u];null!=e&&e!==v&&k.some((t=>t.value===e))&&f(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==v&&(y(t),f(n),null!=u&&b(u,n))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}t?.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:E,onClick:E},r,{className:(0,s.Z)("tabs__item",p.tabItem,r?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,l.cloneElement)(c.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},c.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},11849:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));a(26396),a(58215);const r={title:"SQL DDL",summary:"In this page, we discuss using SQL DDL commands with Hudi",toc:!0,last_modified_at:null},i=void 0,o={unversionedId:"sql_ddl",id:"version-0.14.0/sql_ddl",title:"SQL DDL",description:"This page describes support for creating and altering tables using SQL across various engines.",source:"@site/versioned_docs/version-0.14.0/sql_ddl.md",sourceDirName:".",slug:"/sql_ddl",permalink:"/cn/docs/0.14.0/sql_ddl",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/sql_ddl.md",tags:[],version:"0.14.0",frontMatter:{title:"SQL DDL",summary:"In this page, we discuss using SQL DDL commands with Hudi",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Record Payload",permalink:"/cn/docs/0.14.0/record_payload"},next:{title:"SQL DML",permalink:"/cn/docs/0.14.0/sql_dml"}},d=[{value:"Spark SQL",id:"spark-sql",children:[{value:"Create table",id:"create-table",children:[],level:3},{value:"Create non-partitioned table",id:"create-non-partitioned-table",children:[],level:3},{value:"Create partitioned table",id:"create-partitioned-table",children:[],level:3},{value:"Create table with record keys and ordering fields",id:"create-table-with-record-keys-and-ordering-fields",children:[],level:3},{value:"Create table from an external location",id:"create-table-from-an-external-location",children:[],level:3},{value:"Create Table As Select (CTAS)",id:"create-table-as-select-ctas",children:[],level:3},{value:"Setting Hudi configs",id:"setting-hudi-configs",children:[{value:"Using set command",id:"using-set-command",children:[],level:4},{value:"Using table properties",id:"using-table-properties",children:[],level:4}],level:3},{value:"Table Properties",id:"table-properties",children:[{value:"Passing Lock Providers for Concurrent Writers",id:"passing-lock-providers-for-concurrent-writers",children:[],level:4},{value:"Enabling Column Stats / Record Level Index for the table",id:"enabling-column-stats--record-level-index-for-the-table",children:[],level:4}],level:3},{value:"Spark Alter Table",id:"spark-alter-table",children:[],level:3},{value:"Modifying Table Properties",id:"modifying-table-properties",children:[],level:3},{value:"Alter config options",id:"alter-config-options",children:[],level:3},{value:"Show and drop partitions",id:"show-and-drop-partitions",children:[],level:3},{value:"Caveats",id:"caveats",children:[],level:3}],level:2},{value:"Flink",id:"flink",children:[{value:"Create Catalog",id:"create-catalog",children:[{value:"Options",id:"options",children:[],level:4}],level:3},{value:"Create Table",id:"create-table-1",children:[],level:3},{value:"Alter Table",id:"alter-table",children:[],level:3}],level:2},{value:"Supported Types",id:"supported-types",children:[],level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page describes support for creating and altering tables using SQL across various engines. "),(0,l.kt)("h2",{id:"spark-sql"},"Spark SQL"),(0,l.kt)("h3",{id:"create-table"},"Create table"),(0,l.kt)("p",null,"You can create tables using standard CREATE TABLE syntax, which supports partitioning and passing table properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db_name.]table_name\n  [(col_name data_type [COMMENT col_comment], ...)]\n  [COMMENT table_comment]\n  [PARTITIONED BY (col_name, ...)]\n  [ROW FORMAT row_format]\n  [STORED AS file_format]\n  [LOCATION path]\n  [TBLPROPERTIES (property_name=property_value, ...)]\n  [AS select_statement];\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"NOTE:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For users running this tutorial locally and have a Spark-Hive(HMS) integration in their environment: If you use\n",(0,l.kt)("inlineCode",{parentName:"p"},"default")," database or if you don't provide ",(0,l.kt)("inlineCode",{parentName:"p"},"[LOCATION path]")," with the DDL statement, Spark will return\n",(0,l.kt)("inlineCode",{parentName:"p"},"java.io.IOException: Mkdirs failed to create file:/user/hive/warehouse/hudi_table/.hoodie")," error.\nTo get around this, you can follow either of the two options mentioned below:"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Create a database i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE hudidb;")," and use it i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"USE hudidb;")," before running the DDL statement."),(0,l.kt)("li",{parentName:"ol"},"Or provide a path using ",(0,l.kt)("inlineCode",{parentName:"li"},"LOCATION")," keyword to persist the data with the DDL statement.")))),(0,l.kt)("h3",{id:"create-non-partitioned-table"},"Create non-partitioned table"),(0,l.kt)("p",null,"Creating a non-partitioned table is as simple as creating a regular table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- create a Hudi table\nCREATE TABLE IF NOT EXISTS hudi_table (\n  id INT,\n  name STRING,\n  price DOUBLE\n) USING hudi;\n")),(0,l.kt)("h3",{id:"create-partitioned-table"},"Create partitioned table"),(0,l.kt)("p",null,"A partitioned table can be created by adding a ",(0,l.kt)("inlineCode",{parentName:"p"},"partitioned by")," clause. Partitioning helps to organize the data into multiple folders\nbased on the partition columns. It can also help speed up queries and index lookups by limiting the amount of metadata, index and data scanned."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS hudi_table_partitioned (\n  id BIGINT,\n  name STRING,\n  dt STRING,\n  hh STRING\n) USING hudi\nTBLPROPERTIES (\n  type = 'cow'\n)\nPARTITIONED BY (dt);\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'You can also create a table partitioned by multiple fields by supplying comma-separated field names. For, e.g., "partitioned by dt, hh"'))),(0,l.kt)("h3",{id:"create-table-with-record-keys-and-ordering-fields"},"Create table with record keys and ordering fields"),(0,l.kt)("p",null,"As discussed ",(0,l.kt)("a",{parentName:"p",href:"/docs/quick-start-guide#keys"},"here"),", tables track each record in the table using a record key. Hudi auto-generated a highly compressed\nkey for each new record in the examples so far. If you want to use an existing field as the key, you can set the ",(0,l.kt)("inlineCode",{parentName:"p"},"primaryKey")," option.\nTypically, this is also accompanied by configuring a ",(0,l.kt)("inlineCode",{parentName:"p"},"preCombineField")," option to deal with out-of-order data and potential\nduplicate records with the same key in the incoming writes."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can choose multiple fields as primary keys for a given table on a need basis. For eg, \"primaryKey = 'id, name'\", and\nthis materializes a composite key of the two fields, which can be useful for exploring the table."))),(0,l.kt)("p",null,"Here is an example of creating a table using both options. Typically, a field that denotes the time of the event or\nfact, e.g., order creation time, event generation time etc., is used as the ",(0,l.kt)("em",{parentName:"p"},"preCombineField"),". Hudi resolves multiple versions\nof the same record by ordering based on this field when queries are run on the table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS hudi_table_keyed (\n  id INT,\n  name STRING,\n  price DOUBLE,\n  ts BIGINT\n) USING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  primaryKey = 'id',\n  preCombineField = 'ts'\n);\n")),(0,l.kt)("h3",{id:"create-table-from-an-external-location"},"Create table from an external location"),(0,l.kt)("p",null,"Often, Hudi tables are created from streaming writers like the ",(0,l.kt)("a",{parentName:"p",href:"/docs/hoodie_streaming_ingestion#hudi-streamer"},"streamer tool"),", which\nmay later need some SQL statements to run on them. You can create an External table using the ",(0,l.kt)("inlineCode",{parentName:"p"},"location")," statement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hudi_table_external\nUSING hudi\nLOCATION 'file:///tmp/hudi_table/';\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You don't need to specify the schema and any properties except the partitioned columns if they exist. Hudi can automatically\nrecognize the schema and configurations."))),(0,l.kt)("h3",{id:"create-table-as-select-ctas"},"Create Table As Select (CTAS)"),(0,l.kt)("p",null,"Hudi supports CTAS(Create table as select) to support initial loads into Hudi tables. To ensure this is done efficiently,\neven for large loads, CTAS uses ",(0,l.kt)("strong",{parentName:"p"},"bulk insert")," as the write operation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# create managed parquet table\nCREATE TABLE parquet_table\nUSING parquet\nLOCATION 'file:///tmp/parquet_dataset/';\n\n# CTAS by loading data into Hudi table\nCREATE TABLE hudi_table_ctas\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  preCombineField = 'ts'\n)\nPARTITIONED BY (dt)\nAS SELECT * FROM parquet_table;\n")),(0,l.kt)("p",null,"You can create a non-partitioned table as well"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# create managed parquet table\nCREATE TABLE parquet_table\nUSING parquet\nLOCATION 'file:///tmp/parquet_dataset/';\n\n# CTAS by loading data into Hudi table\nCREATE TABLE hudi_table_ctas\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  preCombineField = 'ts'\n)\nAS SELECT * FROM parquet_table;\n")),(0,l.kt)("p",null,"If you prefer explicitly setting the record keys, you can do so by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"primaryKey")," config in table properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hudi_table_ctas\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  primaryKey = 'id'\n)\nPARTITIONED BY (dt)\nAS\nSELECT 1 AS id, 'a1' AS name, 10 AS price, 1000 AS dt;\n")),(0,l.kt)("p",null,"You can also use CTAS to copy data across external locations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# create managed parquet table\nCREATE TABLE parquet_table\nUSING parquet\nLOCATION 'file:///tmp/parquet_dataset/*.parquet';\n\n# CTAS by loading data into hudi table\nCREATE TABLE hudi_table_ctas\nUSING hudi\nLOCATION 'file:///tmp/hudi/hudi_tbl/'\nTBLPROPERTIES (\n  type = 'cow'\n)\nAS SELECT * FROM parquet_table;\n")),(0,l.kt)("h3",{id:"setting-hudi-configs"},"Setting Hudi configs"),(0,l.kt)("p",null,"There are different ways you can pass the configs for a given hudi table. "),(0,l.kt)("h4",{id:"using-set-command"},"Using set command"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("strong",{parentName:"p"},"set")," command to set any of Hudi's write configs. This will apply to operations across the whole spark session."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set hoodie.insert.shuffle.parallelism = 100;\nset hoodie.upsert.shuffle.parallelism = 100;\nset hoodie.delete.shuffle.parallelism = 100;\n")),(0,l.kt)("h4",{id:"using-table-properties"},"Using table properties"),(0,l.kt)("p",null,"You can also configure table options when creating a table. This will be applied only for the table and override any SET command values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS tableName (\n  colName1 colType1,\n  colName2 colType2,\n  ...\n) USING hudi\nTBLPROPERTIES (\n  primaryKey = '${colName1}',\n  type = 'cow',\n  ${hoodie.config.key1} = '${hoodie.config.value1}',\n  ${hoodie.config.key2} = '${hoodie.config.value2}',\n  ....\n);\n\ne.g.\nCREATE TABLE IF NOT EXISTS hudi_table (\n  id BIGINT,\n  name STRING,\n  price DOUBLE\n) USING hudi\nTBLPROPERTIES (\n  primaryKey = 'id',\n  type = 'cow',\n  hoodie.cleaner.fileversions.retained = '20',\n  hoodie.keep.max.commits = '20'\n);\n")),(0,l.kt)("h3",{id:"table-properties"},"Table Properties"),(0,l.kt)("p",null,"Users can set table properties while creating a table. The important table properties are discussed below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"cow"),(0,l.kt)("td",{parentName:"tr",align:null},"The table type to create. ",(0,l.kt)("inlineCode",{parentName:"td"},"type = 'cow'")," creates a COPY-ON-WRITE table, while ",(0,l.kt)("inlineCode",{parentName:"td"},"type = 'mor'")," creates a MERGE-ON-READ table. Same as ",(0,l.kt)("inlineCode",{parentName:"td"},"hoodie.datasource.write.table.type"),". More details can be found ",(0,l.kt)("a",{parentName:"td",href:"/docs/table_types"},"here"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primaryKey"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"The primary key field names of the table separated by commas. Same as ",(0,l.kt)("inlineCode",{parentName:"td"},"hoodie.datasource.write.recordkey.field"),". If this config is ignored, hudi will auto-generate primary keys. If explicitly set, primary key generation will honor user configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"preCombineField"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The pre-combine field of the table. It is used for resolving the final version of the record among multiple versions. Generally, ",(0,l.kt)("inlineCode",{parentName:"td"},"event time")," or another similar column will be used for ordering purposes. Hudi will be able to handle out-of-order data using the preCombine field value.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"primaryKey"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"preCombineField"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," and other properties are case-sensitive. "))),(0,l.kt)("h4",{id:"passing-lock-providers-for-concurrent-writers"},"Passing Lock Providers for Concurrent Writers"),(0,l.kt)("p",null,"Hudi requires a lock provider to support concurrent writers or asynchronous table services. Users can pass these table\nproperties into ",(0,l.kt)("em",{parentName:"p"},"TBLPROPERTIES")," as well. Below is an example for a Zookeeper based configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'-- Properties to use Lock configurations to support Multi Writers\nTBLPROPERTIES(\n  hoodie.write.lock.zookeeper.url = "zookeeper",\n  hoodie.write.lock.zookeeper.port = "2181",\n  hoodie.write.lock.zookeeper.lock_key = "tableName",\n  hoodie.write.lock.provider = "org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider",\n  hoodie.write.concurrency.mode = "optimistic_concurrency_control",\n  hoodie.write.lock.zookeeper.base_path = "/tableName"\n)\n')),(0,l.kt)("h4",{id:"enabling-column-stats--record-level-index-for-the-table"},"Enabling Column Stats / Record Level Index for the table"),(0,l.kt)("p",null,"Hudi provides the ability to leverage rich metadata and index about the table, speed up DMLs and queries.\nFor e.g: collection of column statistics can be enabled to perform quick data skipping or a record-level index can be used to perform fast updates or point lookups\nusing the following table properties."),(0,l.kt)("p",null,"For more, see ",(0,l.kt)("a",{href:"/docs/configurations/#Metadata-Configs"},"Metadata Configurations")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"TBLPROPERTIES(\n  'hoodie.metadata.index.column.stats.enable' = 'true'\n  'hoodie.metadata.record.index.enable' = 'true' \n)\n")),(0,l.kt)("h3",{id:"spark-alter-table"},"Spark Alter Table"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Alter table name\nALTER TABLE oldTableName RENAME TO newTableName;\n\n-- Alter table add columns\nALTER TABLE tableIdentifier ADD COLUMNS(colAndType [, colAndType]);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--rename to:\nALTER TABLE hudi_table RENAME TO hudi_table_renamed;\n\n--add column:\nALTER TABLE hudi_table ADD COLUMNS(remark STRING);\n")),(0,l.kt)("h3",{id:"modifying-table-properties"},"Modifying Table Properties"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... set|unset\nALTER TABLE tableIdentifier SET|UNSET TBLPROPERTIES (table_property = 'property_value');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE hudi_table SET TBLPROPERTIES (hoodie.keep.max.commits = '10');\nALTER TABLE hudi_table SET TBLPROPERTIES (\"note\" = \"don't drop this table\");\n\nALTER TABLE hudi_table UNSET TBLPROPERTIES IF EXISTS (hoodie.keep.max.commits);\nALTER TABLE hudi_table UNSET TBLPROPERTIES IF EXISTS ('note');\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Currently, trying to change the column type may throw an error ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE CHANGE COLUMN is not supported for changing column colName with oldColType to colName with newColType."),", due to an ",(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/SPARK-21823"},"open SPARK issue")))),(0,l.kt)("h3",{id:"alter-config-options"},"Alter config options"),(0,l.kt)("p",null,"You can also alter the write config for a table by the ",(0,l.kt)("strong",{parentName:"p"},"ALTER TABLE SET SERDEPROPERTIES")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... set|unset\nALTER TABLE tableName SET SERDEPROPERTIES ('property' = 'property_value');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," ALTER TABLE hudi_table SET SERDEPROPERTIES ('key1' = 'value1');\n")),(0,l.kt)("h3",{id:"show-and-drop-partitions"},"Show and drop partitions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Show partitions\nSHOW PARTITIONS tableIdentifier;\n\n-- Drop partition\nALTER TABLE tableIdentifier DROP PARTITION ( partition_col_name = partition_col_val [ , ... ] );\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--Show partition:\nSHOW PARTITIONS hudi_table;\n\n--Drop partition\uff1a\nALTER TABLE hudi_table DROP PARTITION (dt='2021-12-09', hh='10');\n")),(0,l.kt)("h3",{id:"caveats"},"Caveats"),(0,l.kt)("p",null,"Hudi currently has the following limitations when using Spark SQL, to create/alter tables."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER TABLE ... RENAME TO ...")," is not supported when using AWS Glue Data Catalog as hive metastore as Glue itself does\nnot support table renames. "),(0,l.kt)("li",{parentName:"ul"},"A new Hudi table created by Spark SQL will by default set ",(0,l.kt)("inlineCode",{parentName:"li"},"hoodie.datasource.write.hive_style_partitioning=true"),", for ease\nof use. This can be overridden using table properties.")),(0,l.kt)("h2",{id:"flink"},"Flink"),(0,l.kt)("h3",{id:"create-catalog"},"Create Catalog"),(0,l.kt)("p",null,"The catalog helps to manage the SQL tables, the table can be shared among sessions if the catalog persists the table definitions.\nFor ",(0,l.kt)("inlineCode",{parentName:"p"},"hms")," mode, the catalog also supplements the hive syncing options."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hoodie_catalog\n  WITH (\n    'type'='hudi',\n    'catalog.path' = '${catalog default root path}',\n    'hive.conf.dir' = '${directory where hive-site.xml is located}',\n    'mode'='hms' -- supports 'dfs' mode that uses the DFS backend for table DDLs persistence\n  );\n")),(0,l.kt)("h4",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"catalog.path")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Default path for the catalog's table storage, the path is used to infer the table path automatically, the default table path: ",(0,l.kt)("inlineCode",{parentName:"td"},"${catalog.path}/${db_name}/${table_name}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default-database")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"default database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hive.conf.dir")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory where hive-site.xml is located, only valid in ",(0,l.kt)("inlineCode",{parentName:"td"},"hms")," mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"dfs"),(0,l.kt)("td",{parentName:"tr",align:null},"Supports ",(0,l.kt)("inlineCode",{parentName:"td"},"hms")," mode that uses HMS to persist the table options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table.external")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create the external table, only valid in ",(0,l.kt)("inlineCode",{parentName:"td"},"hms")," mode")))),(0,l.kt)("h3",{id:"create-table-1"},"Create Table"),(0,l.kt)("p",null,"The following is an example of creating a Flink table. Read the ",(0,l.kt)("a",{parentName:"p",href:"/docs/flink-quick-start-guide"},"Flink Quick Start")," guide for more examples."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hudi_table2(\n  id int, \n  name string, \n  price double\n)\nWITH (\n'connector' = 'hudi',\n'path' = 's3://bucket-name/hudi/',\n'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, default is COPY_ON_WRITE\n);\n")),(0,l.kt)("h3",{id:"alter-table"},"Alter Table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tableA RENAME TO tableB;\n")),(0,l.kt)("h2",{id:"supported-types"},"Supported Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Spark"),(0,l.kt)("th",{parentName:"tr",align:null},"Hudi"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varchar"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numeric"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")))))}u.isMDXComponent=!0}}]);