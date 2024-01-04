"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[41718],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(f,s(s({ref:r},c),{},{components:t})):a.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85509:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const o={title:"Transformers",toc:!0},s=void 0,i={unversionedId:"transforms",id:"version-0.14.1/transforms",title:"Transformers",description:"Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.",source:"@site/versioned_docs/version-0.14.1/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/docs/transforms",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/transforms.md",tags:[],version:"0.14.1",frontMatter:{title:"Transformers",toc:!0},sidebar:"docs",previous:{title:"Cleaning",permalink:"/docs/hoodie_cleaner"},next:{title:"Rollback Mechanism",permalink:"/docs/rollbacks"}},l=[{value:"SQL Query Transformer",id:"sql-query-transformer",children:[],level:3},{value:"SQL File Transformer",id:"sql-file-transformer",children:[],level:3},{value:"Flattening Transformer",id:"flattening-transformer",children:[],level:3},{value:"Chained Transformer",id:"chained-transformer",children:[],level:3},{value:"AWS DMS Transformer",id:"aws-dms-transformer",children:[],level:3},{value:"Custom Transformer Implementation",id:"custom-transformer-implementation",children:[],level:3},{value:"Related Resources",id:"related-resources",children:[],level:2}],u={toc:l},c="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.\nThere are several ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform"},"out-of-the-box"),"\ntransformers available and you can build your own custom transformer class as well."),(0,n.kt)("h3",{id:"sql-query-transformer"},"SQL Query Transformer"),(0,n.kt)("p",null,"You can pass a SQL Query to be executed during write."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.SqlQueryBasedTransformer\n--hoodie-conf hoodie.streamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n")),(0,n.kt)("h3",{id:"sql-file-transformer"},"SQL File Transformer"),(0,n.kt)("p",null,"You can specify a File with a SQL script to be executed during write. The SQL file is configured with this hoodie property:\nhoodie.streamer.transformer.sql.file"),(0,n.kt)("p",null,'The query should reference the source as a table named "\\<SRC',">",'"'),(0,n.kt)("p",null,"The final sql statement result is used as the write payload."),(0,n.kt)("p",null,"Example Spark SQL Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CACHE TABLE tmp_personal_trips AS\nSELECT * FROM <SRC> WHERE trip_type='personal_trips';\n\nSELECT * FROM tmp_personal_trips;\n")),(0,n.kt)("h3",{id:"flattening-transformer"},"Flattening Transformer"),(0,n.kt)("p",null,"This transformer can flatten nested objects. It flattens the nested fields in the incoming records by prefixing\ninner-fields with outer-field and _ in a nested fashion. Currently flattening of arrays is not supported."),(0,n.kt)("p",null,"An example schema may look something like the below where name is a nested field of StructType in the original source"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"age as intColumn,address as stringColumn,name.first as name_first,name.last as name_last, name.middle as name_middle\n")),(0,n.kt)("p",null,"Set the config as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer\n")),(0,n.kt)("h3",{id:"chained-transformer"},"Chained Transformer"),(0,n.kt)("p",null,"If you wish to use multiple transformers together, you can use the Chained transformers to pass multiple to be executed sequentially."),(0,n.kt)("p",null,"Example below first flattens the incoming records and then does sql projection based on the query specified:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer,org.apache.hudi.utilities.transform.SqlQueryBasedTransformer   \n--hoodie-conf hoodie.streamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n")),(0,n.kt)("h3",{id:"aws-dms-transformer"},"AWS DMS Transformer"),(0,n.kt)("p",null,"This transformer is specific for AWS DMS data. It adds ",(0,n.kt)("inlineCode",{parentName:"p"},"Op")," field with value ",(0,n.kt)("inlineCode",{parentName:"p"},"I")," if the field is not present."),(0,n.kt)("p",null,"Set the config as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.AWSDmsTransformer\n")),(0,n.kt)("h3",{id:"custom-transformer-implementation"},"Custom Transformer Implementation"),(0,n.kt)("p",null,"You can write your own custom transformer by extending ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform"},"this class")),(0,n.kt)("h2",{id:"related-resources"},"Related Resources"),(0,n.kt)("h3",null,"Videos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=AprlZ8hGdJo"},"Learn about Apache Hudi Transformers with Hands on Lab")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/DH3LEaPG6ss"},"Apache Hudi with DBT Hands on Lab.Transform Raw Hudi tables with DBT and Glue Interactive Session"))))}m.isMDXComponent=!0}}]);