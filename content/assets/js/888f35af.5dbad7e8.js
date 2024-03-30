"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59940],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(h,o(o({ref:a},d),{},{components:t})):n.createElement(h,o({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30261:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));t(3593),t(26982);const i={title:"Release 1.0.0-beta1",sidebar_position:3,layout:"releases",toc:!0},o=void 0,l={unversionedId:"release-1.0.0-beta1",id:"release-1.0.0-beta1",title:"Release 1.0.0-beta1",description:"Release 1.0.0-beta1 (docs)",source:"@site/releases/release-1.0.0-beta1.md",sourceDirName:".",slug:"/release-1.0.0-beta1",permalink:"/releases/release-1.0.0-beta1",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Release 1.0.0-beta1",sidebar_position:3,layout:"releases",toc:!0},sidebar:"releases",previous:{title:"Release 0.14.1",permalink:"/releases/release-0.14.1"},next:{title:"Release 0.13.1",permalink:"/releases/release-0.13.1"}},s=[{value:"Release 1.0.0-beta1 (docs)",id:"release-100-beta1-docs",children:[],level:2},{value:"Migration Guide",id:"migration-guide",children:[],level:2},{value:"Highlights",id:"highlights",children:[{value:"Format changes",id:"format-changes",children:[{value:"Timeline",id:"timeline",children:[],level:4},{value:"Log File Format",id:"log-file-format",children:[],level:4},{value:"Multiple base file formats",id:"multiple-base-file-formats",children:[],level:4}],level:3},{value:"Concurrency Control",id:"concurrency-control",children:[],level:3},{value:"Functional Index",id:"functional-index",children:[],level:3},{value:"API changes",id:"api-changes",children:[{value:"Record Merger API",id:"record-merger-api",children:[],level:4},{value:"New FileGroup Reader",id:"new-filegroup-reader",children:[],level:4}],level:3}],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],c={toc:s},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"release-100-beta1-docs"},(0,r.yg)("a",{parentName:"h2",href:"https://github.com/apache/hudi/releases/tag/release-1.0.0-beta1"},"Release 1.0.0-beta1")," (",(0,r.yg)("a",{parentName:"h2",href:"/docs/next/quick-start-guide"},"docs"),")"),(0,r.yg)("p",null,"Apache Hudi 1.0.0-beta1 is the first beta release of Apache Hudi. This release is meant for early adopters to try\nout the new features and provide feedback. The release is not meant for production use."),(0,r.yg)("h2",{id:"migration-guide"},"Migration Guide"),(0,r.yg)("p",null,"This release contains major format changes as we will see in highlights below. We encourage users to try out the\n",(0,r.yg)("strong",{parentName:"p"},"1.0.0-beta1")," features on new tables. The 1.0 general availability (GA) release will support automatic table upgrades\nfrom 0.x versions, while also ensuring full backward compatibility when reading 0.x Hudi tables using 1.0, ensuring a\nseamless migration experience. "),(0,r.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Given that timeline format and log file format has changed in this ",(0,r.yg)("strong",{parentName:"p"},"beta release"),", it is recommended not to attempt to do\nrolling upgrades from older versions to this release. "))),(0,r.yg)("h2",{id:"highlights"},"Highlights"),(0,r.yg)("h3",{id:"format-changes"},"Format changes"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6242"},"HUDI-6242")," is the main epic covering all the format changes proposals,\nwhich are also partly covered in the ",(0,r.yg)("a",{parentName:"p",href:"/tech-specs-1point0"},"Hudi 1.0 tech specification"),". The following are the main\nchanges in this release:"),(0,r.yg)("h4",{id:"timeline"},"Timeline"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Now all commit metadata is serialized to avro. This allows us to add new fields in the future without breaking\ncompatibility and also maintain uniformity in metadata across all actions."),(0,r.yg)("li",{parentName:"ul"},"All completed commit metadata file name will also have completion time. All the actions in requested/inflight states\nare stored in the active timeline as files named <begin",(0,r.yg)("em",{parentName:"li"},"instant_time>.<action_type>.<requested|inflight>. Completed\nactions are stored along with a time that denotes when the action was completed, in a file named <\nbegin_instant_time>"),"<completion_instant_time>.<action_type>. This allows us to implement file slicing for non-blocking\nconcurrecy control."),(0,r.yg)("li",{parentName:"ul"},"Completed actions, their plans and completion metadata are stored in a more\nscalable ",(0,r.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Log-structured_merge-tree"},"LSM tree")," based timeline organized in an *\n*",(0,r.yg)("em",{parentName:"li"},"archived"),"** storage location under the .hoodie metadata path. It consists of Apache Parquet files with action\ninstant data and bookkeeping metadata files, in the following manner. Checkout ",(0,r.yg)("a",{parentName:"li",href:"/docs/next/timeline#lsm-timeline"},"timeline")," docs for more details.")),(0,r.yg)("h4",{id:"log-file-format"},"Log File Format"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In addition to the fields in the log file header, we also store record positions. Refer to the\nlatest ",(0,r.yg)("a",{parentName:"li",href:"/tech-specs-1point0#log-format"},"spec")," for more details. This allows us to do\nposition-based merging (apart from key-based merging) and skip pages based on positions."),(0,r.yg)("li",{parentName:"ul"},"Log file name will now have the deltacommit instant time instead of base commit instant time.")),(0,r.yg)("h4",{id:"multiple-base-file-formats"},"Multiple base file formats"),(0,r.yg)("p",null,"Now you can have multiple base files formats in a Hudi table. Even the same filegroup can have multiple base file\nformats. We need to set a table config ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.table.multiple.base.file.formats.enable")," to use this feature. And\nwhenever we need to change the format, then just specify the format in the ",(0,r.yg)("inlineCode",{parentName:"p"},'hoodie.base.file.format"')," config. Currently,\nonly Parquet, Orc and HFile formats are supported. This unlocks multiple benefits including choosing file format\nsuitable to index, and supporting emerging formats for ML/AI. "),(0,r.yg)("h3",{id:"concurrency-control"},"Concurrency Control"),(0,r.yg)("p",null,"A new concurrency control mode called ",(0,r.yg)("inlineCode",{parentName:"p"},"NON_BLOCKING_CONCURRENCY_CONTROL")," is introduced in this release, where unlike\nOCC, multiple writers can operate on the table with non-blocking conflict resolution. The writers can write into the\nsame file group with the conflicts resolved automatically by the query reader and the compactor. The new concurrency\nmode is currently available for preview in version 1.0.0-beta only. You can read more about it under\nsection ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/concurrency_control#non-blocking-concurrency-control-mode-experimental"},"Model C: Multi-writer"),". A complete example with multiple\nFlink streaming writers is available ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/sql_dml#non-blocking-concurrency-control-experimental"},"here"),". You\ncan follow the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-66/rfc-66.md"},"RFC")," and\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6640"},"JIRA")," for more details."),(0,r.yg)("h3",{id:"functional-index"},"Functional Index"),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/00ece7bce0a4a8d0019721a28049723821e01842/rfc/rfc-63/rfc-63.md"},"functional index"),"\nis an index on a function of a column. It is a new addition to Hudi's ",(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2022/05/17/Introducing-Multi-Modal-Index-for-the-Lakehouse-in-Apache-Hudi"},"multi-modal indexing"),"\nsubsystem which provides faster access method and also absorbs partitioning as part of the indexing system. Now you can\nsimply create and drop index using SQL syntax as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create Index\nCREATE INDEX [IF NOT EXISTS] index_name ON [TABLE] table_name \n[USING index_type] \n(column_name1 [OPTIONS(key1=value1, key2=value2, ...)], column_name2 [OPTIONS(key1=value1, key2=value2, ...)], ...) \n[OPTIONS (key1=value1, key2=value2, ...)]\n\n-- Drop Index\nDROP INDEX [IF EXISTS] index_name ON [TABLE] table_name\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"index_name")," is the name of the index to be created or dropped."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"table_name")," is the name of the table on which the index is created or dropped."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"index_type")," is the type of the index to be created. Currently, only ",(0,r.yg)("inlineCode",{parentName:"li"},"files"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"column_stats")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"bloom_filters")," is supported."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"column_name")," is the name of the column on which the index is created."),(0,r.yg)("li",{parentName:"ul"},"Both index and column on which the index is created can be qualified with some options in the form of key-value pairs.")),(0,r.yg)("p",null,"To see some examples of creating and using a functional index, please checkout the Spark SQL DDL\ndocs ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/sql_ddl#create-index"},"here"),". You can follow\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-63/rfc-63.md"},"RFC")," and\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-512"},"JIRA")," to keep track of ongoing work on this feature."),(0,r.yg)("h3",{id:"api-changes"},"API changes"),(0,r.yg)("h4",{id:"record-merger-api"},"Record Merger API"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieRecordPayload")," interface was deprecated in favor of the new ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieRecordMerger")," interface in version 0.13.0.\nThe new interface has been further enhanced to support all kinds of merging operations. In particular, the new interface\nsupports partial merge and support custom checks before flushing merged records to disk. Please check\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/3a1d4fb03b1ab8e3cf27073053a4fab0a56a26d2/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordMerger.java"},"javadoc"),"\nof the API for more details."),(0,r.yg)("h4",{id:"new-filegroup-reader"},"New FileGroup Reader"),(0,r.yg)("p",null,"In addition to key-based merging of records in log files with base files for queries on MOR table, we have implemented\nposition-based merging and skipping pages based on positions. The new reader has shown impressive performance gains for\n",(0,r.yg)("strong",{parentName:"p"},"partial updates")," with key-based merging. For a MOR table of size 1TB with 100 partitions and 80% random updates in\nsubsequent commits, the new reader is ",(0,r.yg)("strong",{parentName:"p"},"5.7x faster")," for snapshot queries with ",(0,r.yg)("strong",{parentName:"p"},"70x reduced write amplification"),".\nHowever, for position-based merging, the gains are yet to be realized as filter pushdown support\nis ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/10030"},"in progress"),". The new reader is enabled by default for all new tables.\nFollowing configs are used to control the reader:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# enabled by default\nhoodie.file.group.reader.enabled=true\nhoodie.datasource.read.use.new.parquet.file.format=true\n# need to enable position-based merging if required\nhoodie.merge.use.record.positions=true\n")),(0,r.yg)("p",null,"Few things to note for the new reader:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It is only applicable to COW or MOR tables with base files in Parquet format."),(0,r.yg)("li",{parentName:"ul"},"Only snapshot queries for COW table, and snapshot queries and read-optimized queries for MOR table are supported."),(0,r.yg)("li",{parentName:"ul"},"Currently, the reader will not be able to push down the data filters to scan. It is recommended to use key-based\nmerging for now.")),(0,r.yg)("p",null,"You can follow ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6243"},"HUDI-6243"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6722"},"HUDI-6722")," to keep track of ongoing work related to reader/writer\nAPI changes and performance improvements."),(0,r.yg)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,r.yg)("p",null,"The raw release notes are available ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351210"},"here"),"."))}u.isMDXComponent=!0},26982:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(96540);const r=function(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},3593:(e,a,t)=>{t.d(a,{A:()=>p});var n=t(58168),r=t(96540),i=t(92303),o=t(48555);const l=function(){const e=(0,r.useContext)(o.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(91211),c=t(20053);const d={tabItem:"tabItem_vU9c"};function u(e){const{lazy:a,block:t,defaultValue:i,values:o,groupId:u,className:p}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=o??m.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),g=(0,s.XI)(h,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??m.find((e=>e.props.default))?.props.value??m[0]?.props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=l(),[v,w]=(0,r.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:k}=(0,s.a_)();if(null!=u){const e=y[u];null!=e&&e!==v&&h.some((a=>a.value===e))&&w(e)}const x=e=>{const a=e.currentTarget,t=N.indexOf(a),n=h[t].value;n!==v&&(k(a),w(n),null!=u&&b(u,n))},O=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}a?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":t},p)},h.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,key:a,ref:e=>N.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,c.A)("tabs__item",d.tabItem,i?.className,{"tabs__item--active":v===a})}),t??a)}))),a?(0,r.cloneElement)(m.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==v})))))}function p(e){const a=(0,i.A)();return r.createElement(u,(0,n.A)({key:String(a)},e))}}}]);