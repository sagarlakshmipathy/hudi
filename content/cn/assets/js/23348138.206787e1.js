"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[57155],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),g=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=g(n),c=r,u=p["".concat(m,".").concat(c)]||p[c]||s[c]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51742:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(58168),r=(n(96540),n(15680));const l={title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:new Date("2022-04-27T19:59:57.000Z")},o=void 0,i={unversionedId:"schema_evolution",id:"version-0.14.0/schema_evolution",title:"Schema Evolution",description:"Schema evolution is an essential aspect of data management, and Hudi supports schema evolution on write out-of-the-box,",source:"@site/versioned_docs/version-0.14.0/schema_evolution.md",sourceDirName:".",slug:"/schema_evolution",permalink:"/cn/docs/0.14.0/schema_evolution",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/schema_evolution.md",tags:[],version:"0.14.0",frontMatter:{title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:"2022-04-27T19:59:57.000Z"},sidebar:"docs",previous:{title:"Write Operations",permalink:"/cn/docs/0.14.0/write_operations"},next:{title:"Key Generation",permalink:"/cn/docs/0.14.0/key_generation"}},m=[{value:"Schema Evolution on Write",id:"schema-evolution-on-write",children:[],level:2},{value:"Schema Evolution on read",id:"schema-evolution-on-read",children:[{value:"Adding Columns",id:"adding-columns",children:[],level:3},{value:"Altering Columns",id:"altering-columns",children:[],level:3},{value:"Deleting Columns",id:"deleting-columns",children:[],level:3},{value:"Renaming columns",id:"renaming-columns",children:[],level:3}],level:2},{value:"Schema Evolution in Action",id:"schema-evolution-in-action",children:[],level:2}],g={toc:m},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Schema evolution is an essential aspect of data management, and Hudi supports schema evolution on write out-of-the-box,\nand experimental support for schema evolution on read. This page will discuss the schema evolution support in Hudi."),(0,r.yg)("h2",{id:"schema-evolution-on-write"},"Schema Evolution on Write"),(0,r.yg)("p",null,"Hudi supports backwards-compatible schema evolution scenarios out of the box, such as adding a nullable field or promoting a field's datatype."),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"We recommend employing this approach as much as possible. This is a practical and efficient way to evolve schemas, proven at large-scale\ndata lakes at companies like Uber, Walmart, and LinkedIn. It is also implemented at scale by vendors like Confluent for streaming data.\nGiven the continuous nature of streaming data, there are no boundaries to define a schema change that can be incompatible with\nthe previous schema (e.g., renaming a column).   "))),(0,r.yg)("p",null,"Furthermore, the evolved schema is queryable across high-performance engines like Presto and Spark SQL without additional overhead for column ID translations or\ntype reconciliations. The following table summarizes the schema changes compatible with different Hudi table types."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Schema Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"COW"),(0,r.yg)("th",{parentName:"tr",align:"left"},"MOR"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a new nullable column at root level at the end"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Yes")," means that a write with evolved schema succeeds and a read following the write succeeds to read entire dataset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a new nullable column to inner struct (at the end)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a new complex type field with default (map and array)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a new nullable column and change the ordering of fields"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Write succeeds but read fails if the write with evolved schema updated only some of the base files but not all. Currently, Hudi does not maintain a schema registry with history of changes across base files. Nevertheless, if the upsert touched all base files then the read will succeed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a custom nullable Hudi meta column, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"_hoodie_meta_col")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Promote datatype from ",(0,r.yg)("inlineCode",{parentName:"td"},"int")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"long")," for a field at root level"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"For other types, Hudi supports promotion as specified in ",(0,r.yg)("a",{parentName:"td",href:"http://avro.apache.org/docs/current/spec#Schema+Resolution"},"Avro schema resolution"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Promote datatype from ",(0,r.yg)("inlineCode",{parentName:"td"},"int")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"long")," for a nested field"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Promote datatype from ",(0,r.yg)("inlineCode",{parentName:"td"},"int")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"long")," for a complex type (value of map or array)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a new non-nullable column at root level at the end"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"},"In case of MOR table with Spark data source, write succeeds but read fails. As a ",(0,r.yg)("strong",{parentName:"td"},"workaround"),", you can make the field nullable.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a new non-nullable column to inner struct (at the end)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Change datatype from ",(0,r.yg)("inlineCode",{parentName:"td"},"long")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"int")," for a nested field"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Change datatype from ",(0,r.yg)("inlineCode",{parentName:"td"},"long")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"int")," for a complex type (value of map or array)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"},"No"),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"schema-evolution-on-read"},"Schema Evolution on read"),(0,r.yg)("p",null,"There are often scenarios where it's desirable to have the ability to evolve the schema more flexibly.\nFor example,"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Columns (including nested columns) can be added, deleted, modified, and moved."),(0,r.yg)("li",{parentName:"ol"},"Renaming of columns (including nested columns)."),(0,r.yg)("li",{parentName:"ol"},"Add, delete, or perform operations on nested columns of the Array type.")),(0,r.yg)("p",null,"Hudi has experimental support for allowing backward incompatible schema evolution scenarios on write while resolving\nit during read time. To enable this feature, ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.schema.on.read.enable=true")," needs to be set on the writer config (Datasource) or table property (SQL)."),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Hudi versions > 0.11 and Spark versions > 3.1.x, and 3.2.1 are required. For Spark 3.2.1 and above,\n",(0,r.yg)("inlineCode",{parentName:"p"},"spark.sql.catalog.spark_catalog")," must also be set. If schema on read is enabled, it cannot be disabled again\nsince the table would have accepted such schema changes already."))),(0,r.yg)("h3",{id:"adding-columns"},"Adding Columns"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- add columns\nALTER TABLE tableName ADD COLUMNS(col_spec[, col_spec ...])\n")),(0,r.yg)("p",null,"Column specification consists of five field, next to each other. "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"col_name"),(0,r.yg)("td",{parentName:"tr",align:"left"},"name of the new column. To add sub-column col1 to a nested map type column member map<string, struct<n: string, a: int>>, set this field to member.value.col1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"col_type"),(0,r.yg)("td",{parentName:"tr",align:"left"},"type of the new column.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"nullable"),(0,r.yg)("td",{parentName:"tr",align:"left"},"whether or not the new column allows null values. (optional)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"comment"),(0,r.yg)("td",{parentName:"tr",align:"left"},"comment of the new column. (optional)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"col_position"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The position where the new column is added. The value can be ",(0,r.yg)("em",{parentName:"td"},"FIRST")," or ",(0,r.yg)("em",{parentName:"td"},"AFTER origin_col"),". If it is set to ",(0,r.yg)("em",{parentName:"td"},"FIRST"),", the new column will be added before the first column of the table. If it is set to ",(0,r.yg)("em",{parentName:"td"},"AFTER origin_col"),", the new column will be added after the original column.  ",(0,r.yg)("em",{parentName:"td"},"FIRST")," can be used only when new sub-columns are added to nested columns and not in top-level columns. There are no restrictions on the usage of ",(0,r.yg)("em",{parentName:"td"},"AFTER"),".")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE h0 ADD COLUMNS(ext0 string);\nALTER TABLE h0 ADD COLUMNS(new_col int not null comment 'add new column' AFTER col1);\nALTER TABLE complex_table ADD COLUMNS(col_struct.col_name string comment 'add new column to a struct col' AFTER col_from_col_struct);\n")),(0,r.yg)("h3",{id:"altering-columns"},"Altering Columns"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... alter column\nALTER TABLE tableName ALTER [COLUMN] col_old_name TYPE column_type [COMMENT] col_comment[FIRST|AFTER] column_name\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameter Description")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"tableName"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Table name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"col_old_name"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Name of the column to be altered.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"column_type"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Type of the target column.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"col_comment"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Optional comments on the altered column.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"column_name"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The new position to place the altered column. For example, ",(0,r.yg)("em",{parentName:"td"},"AFTER")," ",(0,r.yg)("strong",{parentName:"td"},"column_name")," indicates that the target column is placed after ",(0,r.yg)("strong",{parentName:"td"},"column_name"),".")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--- Changing the column type\nALTER TABLE table1 ALTER COLUMN a.b.c TYPE bigint\n\n--- Altering other attributes\nALTER TABLE table1 ALTER COLUMN a.b.c COMMENT 'new comment'\nALTER TABLE table1 ALTER COLUMN a.b.c FIRST\nALTER TABLE table1 ALTER COLUMN a.b.c AFTER x\nALTER TABLE table1 ALTER COLUMN a.b.c DROP NOT NULL\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"column type change")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source\\Target"),(0,r.yg)("th",{parentName:"tr",align:null},"long"),(0,r.yg)("th",{parentName:"tr",align:null},"float"),(0,r.yg)("th",{parentName:"tr",align:null},"double"),(0,r.yg)("th",{parentName:"tr",align:null},"string"),(0,r.yg)("th",{parentName:"tr",align:null},"decimal"),(0,r.yg)("th",{parentName:"tr",align:null},"date"),(0,r.yg)("th",{parentName:"tr",align:null},"int"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")))),(0,r.yg)("h3",{id:"deleting-columns"},"Deleting Columns"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... drop columns\nALTER TABLE tableName DROP COLUMN|COLUMNS cols\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 DROP COLUMN a.b.c\nALTER TABLE table1 DROP COLUMNS a.b.c, x, y\n")),(0,r.yg)("h3",{id:"renaming-columns"},"Renaming columns"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- alter table ... rename column\nALTER TABLE tableName RENAME COLUMN old_columnName TO new_columnName\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 RENAME COLUMN a.b.c TO x\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"When using hive metastore, please disable  ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.metastore.disallow.incompatible.col.type.changes")," if you encounter this error:\n",(0,r.yg)("inlineCode",{parentName:"p"},"The following columns have types incompatible with the existing columns in their respective positions"),"."))),(0,r.yg)("h2",{id:"schema-evolution-in-action"},"Schema Evolution in Action"),(0,r.yg)("p",null,"Let us walk through an example to demonstrate the schema evolution support in Hudi. In the below example, we are going to add a new string field and change the datatype of a field from int to long."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'scala> :paste \nimport org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.spark.sql.types._\nimport org.apache.spark.sql.Row\n\nval tableName = "hudi_trips_cow"\nval basePath = "file:///tmp/hudi_trips_cow"\nval schema = StructType( Array(\n     StructField("rowId", StringType,true),\n     StructField("partitionId", StringType,true),\n     StructField("preComb", LongType,true),\n     StructField("name", StringType,true),\n     StructField("versionId", StringType,true),\n     StructField("intToLong", IntegerType,true)\n))\n        \n        \nval data1 = Seq(Row("row_1", "part_0", 0L, "bob", "v_0", 0),\n                Row("row_2", "part_0", 0L, "john", "v_0", 0),\n                Row("row_3", "part_0", 0L, "tom", "v_0", 0))\n        \nvar dfFromData1 = spark.createDataFrame(data1, schema)\ndfFromData1.write.format("hudi").\n   options(getQuickstartWriteConfigs).\n   option(PRECOMBINE_FIELD.key, "preComb").\n   option(RECORDKEY_FIELD.key, "rowId").\n   option(PARTITIONPATH_FIELD.key, "partitionId").\n   option("hoodie.index.type","SIMPLE").\n   option(TBL_NAME.key, tableName).\n   mode(Overwrite).\n   save(basePath)\n\nvar tripsSnapshotDF1 = spark.read.format("hudi").load(basePath + "/*/*")\ntripsSnapshotDF1.createOrReplaceTempView("hudi_trips_snapshot")\n\nctrl+D\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|      int|   null|\n    +--------------------+---------+-------+\n    \nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong from hudi_trips_snapshot").show()\n    +-----+-----------+-------+----+---------+---------+\n    |rowId|partitionId|preComb|name|versionId|intToLong|\n    +-----+-----------+-------+----+---------+---------+\n    |row_3|     part_0|      0| tom|      v_0|        0|\n    |row_2|     part_0|      0|john|      v_0|        0|\n    |row_1|     part_0|      0| bob|      v_0|        0|\n    +-----+-----------+-------+----+---------+---------+\n\n// In the new schema, we are going to add a String field and \n// change the datatype `intToLong` field from  int to long.\nscala> :paste \nval newSchema = StructType( Array(\n    StructField("rowId", StringType,true),\n    StructField("partitionId", StringType,true),\n    StructField("preComb", LongType,true),\n    StructField("name", StringType,true),\n    StructField("versionId", StringType,true),\n    StructField("intToLong", LongType,true),\n    StructField("newField", StringType,true)\n))\n\nval data2 = Seq(Row("row_2", "part_0", 5L, "john", "v_3", 3L, "newField_1"),\n               Row("row_5", "part_0", 5L, "maroon", "v_2", 2L, "newField_1"),\n               Row("row_9", "part_0", 5L, "michael", "v_2", 2L, "newField_1"))\n\nvar dfFromData2 = spark.createDataFrame(data2, newSchema)\ndfFromData2.write.format("hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD.key, "preComb").\n    option(RECORDKEY_FIELD.key, "rowId").\n    option(PARTITIONPATH_FIELD.key, "partitionId").\n    option("hoodie.index.type","SIMPLE").\n    option(TBL_NAME.key, tableName).\n    mode(Append).\n    save(basePath)\n\nvar tripsSnapshotDF2 = spark.read.format("hudi").load(basePath + "/*/*")\ntripsSnapshotDF2.createOrReplaceTempView("hudi_trips_snapshot")\n\nCtrl + D\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|   bigint|   null|\n    |            newField|   string|   null|\n    +--------------------+---------+-------+\n\n\nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong, newField from hudi_trips_snapshot").show()\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |rowId|partitionId|preComb|   name|versionId|intToLong|  newField|\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |row_3|     part_0|      0|    tom|      v_0|        0|      null|\n    |row_2|     part_0|      5|   john|      v_3|        3|newField_1|\n    |row_1|     part_0|      0|    bob|      v_0|        0|      null|\n    |row_5|     part_0|      5| maroon|      v_2|        2|newField_1|\n    |row_9|     part_0|      5|michael|      v_2|        2|newField_1|\n    +-----+-----------+-------+-------+---------+---------+----------+\n\n')))}p.isMDXComponent=!0}}]);