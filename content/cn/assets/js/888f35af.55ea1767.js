"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59940],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}},65537:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),i=t(65627),s=t(56347),o=t(50372),l=t(30604),c=t(11861),d=t(78749);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,h]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function w(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(w,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:h(e.children)},String(n))}},79329:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},90077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"release-1.0.0-beta1","title":"Release 1.0.0-beta1","description":"Release 1.0.0-beta1 (docs)","source":"@site/releases/release-1.0.0-beta1.md","sourceDirName":".","slug":"/release-1.0.0-beta1","permalink":"/cn/releases/release-1.0.0-beta1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Release 1.0.0-beta1","sidebar_position":5,"layout":"releases","toc":true},"sidebar":"releases","previous":{"title":"Release 1.0.0-beta2","permalink":"/cn/releases/release-1.0.0-beta2"},"next":{"title":"Release 0.14.0","permalink":"/cn/releases/release-0.14.0"}}');var r=t(74848),i=t(28453);t(65537),t(79329);const s={title:"Release 1.0.0-beta1",sidebar_position:5,layout:"releases",toc:!0},o=void 0,l={},c=[{value:"Release 1.0.0-beta1 (docs)",id:"release-100-beta1-docs",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Format changes",id:"format-changes",level:3},{value:"Timeline",id:"timeline",level:4},{value:"Log File Format",id:"log-file-format",level:4},{value:"Multiple base file formats",id:"multiple-base-file-formats",level:4},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"Functional Index",id:"functional-index",level:3},{value:"API changes",id:"api-changes",level:3},{value:"Record Merger API",id:"record-merger-api",level:4},{value:"New FileGroup Reader",id:"new-filegroup-reader",level:4},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"release-100-beta1-docs",children:[(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/releases/tag/release-1.0.0-beta1",children:"Release 1.0.0-beta1"})," (",(0,r.jsx)(n.a,{href:"/docs/next/quick-start-guide",children:"docs"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Apache Hudi 1.0.0-beta1 is the first beta release of Apache Hudi. This release is meant for early adopters to try\nout the new features and provide feedback. The release is not meant for production use."}),"\n",(0,r.jsx)(n.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,r.jsxs)(n.p,{children:["This release contains major format changes as we will see in highlights below. We encourage users to try out the\n",(0,r.jsx)(n.strong,{children:"1.0.0-beta1"})," features on new tables. The 1.0 general availability (GA) release will support automatic table upgrades\nfrom 0.x versions, while also ensuring full backward compatibility when reading 0.x Hudi tables using 1.0, ensuring a\nseamless migration experience."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Given that timeline format and log file format has changed in this ",(0,r.jsx)(n.strong,{children:"beta release"}),", it is recommended not to attempt to do\nrolling upgrades from older versions to this release."]})}),"\n",(0,r.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(n.h3,{id:"format-changes",children:"Format changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-6242",children:"HUDI-6242"})," is the main epic covering all the format changes proposals,\nwhich are also partly covered in the ",(0,r.jsx)(n.a,{href:"/tech-specs-1point0",children:"Hudi 1.0 tech specification"}),". The following are the main\nchanges in this release:"]}),"\n",(0,r.jsx)(n.h4,{id:"timeline",children:"Timeline"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Now all commit metadata is serialized to avro. This allows us to add new fields in the future without breaking\ncompatibility and also maintain uniformity in metadata across all actions."}),"\n",(0,r.jsx)(n.li,{children:"All completed commit metadata file name will also have completion time. All the actions in requested/inflight states\nare stored in the active timeline as files named <begin_instant_time>.<action_type>.<requested|inflight>. Completed\nactions are stored along with a time that denotes when the action was completed, in a file named <\nbegin_instant_time>_<completion_instant_time>.<action_type>. This allows us to implement file slicing for non-blocking\nconcurrecy control."}),"\n",(0,r.jsxs)(n.li,{children:["Completed actions, their plans and completion metadata are stored in a more\nscalable ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Log-structured_merge-tree",children:"LSM tree"})," based timeline organized in an *\n",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.em,{children:"archived"})}),"* storage location under the .hoodie metadata path. It consists of Apache Parquet files with action\ninstant data and bookkeeping metadata files, in the following manner. Checkout ",(0,r.jsx)(n.a,{href:"/docs/next/timeline#lsm-timeline-history",children:"timeline"})," docs for more details."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"log-file-format",children:"Log File Format"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In addition to the fields in the log file header, we also store record positions. Refer to the\nlatest ",(0,r.jsx)(n.a,{href:"/tech-specs-1point0#log-format",children:"spec"})," for more details. This allows us to do\nposition-based merging (apart from key-based merging) and skip pages based on positions."]}),"\n",(0,r.jsx)(n.li,{children:"Log file name will now have the deltacommit instant time instead of base commit instant time."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"multiple-base-file-formats",children:"Multiple base file formats"}),"\n",(0,r.jsxs)(n.p,{children:["Now you can have multiple base files formats in a Hudi table. Even the same filegroup can have multiple base file\nformats. We need to set a table config ",(0,r.jsx)(n.code,{children:"hoodie.table.multiple.base.file.formats.enable"})," to use this feature. And\nwhenever we need to change the format, then just specify the format in the ",(0,r.jsx)(n.code,{children:'hoodie.base.file.format"'})," config. Currently,\nonly Parquet, Orc and HFile formats are supported. This unlocks multiple benefits including choosing file format\nsuitable to index, and supporting emerging formats for ML/AI."]}),"\n",(0,r.jsx)(n.h3,{id:"concurrency-control",children:"Concurrency Control"}),"\n",(0,r.jsxs)(n.p,{children:["A new concurrency control mode called ",(0,r.jsx)(n.code,{children:"NON_BLOCKING_CONCURRENCY_CONTROL"})," is introduced in this release, where unlike\nOCC, multiple writers can operate on the table with non-blocking conflict resolution. The writers can write into the\nsame file group with the conflicts resolved automatically by the query reader and the compactor. The new concurrency\nmode is currently available for preview in version 1.0.0-beta only. You can read more about it under\nsection ",(0,r.jsx)(n.a,{href:"/docs/next/concurrency_control#non-blocking-concurrency-control",children:"Model C: Multi-writer"}),". A complete example with multiple\nFlink streaming writers is available ",(0,r.jsx)(n.a,{href:"/docs/next/sql_dml#non-blocking-concurrency-control-experimental",children:"here"}),". You\ncan follow the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-66/rfc-66.md",children:"RFC"})," and\nthe ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-6640",children:"JIRA"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"functional-index",children:"Functional Index"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/00ece7bce0a4a8d0019721a28049723821e01842/rfc/rfc-63/rfc-63.md",children:"functional index"}),"\nis an index on a function of a column. It is a new addition to Hudi's ",(0,r.jsx)(n.a,{href:"https://hudi.apache.org/blog/2022/05/17/Introducing-Multi-Modal-Index-for-the-Lakehouse-in-Apache-Hudi",children:"multi-modal indexing"}),"\nsubsystem which provides faster access method and also absorbs partitioning as part of the indexing system. Now you can\nsimply create and drop index using SQL syntax as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- Create Index\nCREATE INDEX [IF NOT EXISTS] index_name ON [TABLE] table_name \n[USING index_type] \n(column_name1 [OPTIONS(key1=value1, key2=value2, ...)], column_name2 [OPTIONS(key1=value1, key2=value2, ...)], ...) \n[OPTIONS (key1=value1, key2=value2, ...)]\n\n-- Drop Index\nDROP INDEX [IF EXISTS] index_name ON [TABLE] table_name\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"index_name"})," is the name of the index to be created or dropped."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"table_name"})," is the name of the table on which the index is created or dropped."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"index_type"})," is the type of the index to be created. Currently, only ",(0,r.jsx)(n.code,{children:"files"}),", ",(0,r.jsx)(n.code,{children:"column_stats"})," and ",(0,r.jsx)(n.code,{children:"bloom_filters"})," is supported."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"column_name"})," is the name of the column on which the index is created."]}),"\n",(0,r.jsx)(n.li,{children:"Both index and column on which the index is created can be qualified with some options in the form of key-value pairs."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To see some examples of creating and using a functional index, please checkout the Spark SQL DDL\ndocs ",(0,r.jsx)(n.a,{href:"/docs/next/sql_ddl#create-index",children:"here"}),". You can follow\nthe ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-63/rfc-63.md",children:"RFC"})," and\nthe ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-512",children:"JIRA"})," to keep track of ongoing work on this feature."]}),"\n",(0,r.jsx)(n.h3,{id:"api-changes",children:"API changes"}),"\n",(0,r.jsx)(n.h4,{id:"record-merger-api",children:"Record Merger API"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"HoodieRecordPayload"})," interface was deprecated in favor of the new ",(0,r.jsx)(n.code,{children:"HoodieRecordMerger"})," interface in version 0.13.0.\nThe new interface has been further enhanced to support all kinds of merging operations. In particular, the new interface\nsupports partial merge and support custom checks before flushing merged records to disk. Please check\nthe ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/3a1d4fb03b1ab8e3cf27073053a4fab0a56a26d2/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordMerger.java",children:"javadoc"}),"\nof the API for more details."]}),"\n",(0,r.jsx)(n.h4,{id:"new-filegroup-reader",children:"New FileGroup Reader"}),"\n",(0,r.jsxs)(n.p,{children:["In addition to key-based merging of records in log files with base files for queries on MOR table, we have implemented\nposition-based merging and skipping pages based on positions. The new reader has shown impressive performance gains for\n",(0,r.jsx)(n.strong,{children:"partial updates"})," with key-based merging. For a MOR table of size 1TB with 100 partitions and 80% random updates in\nsubsequent commits, the new reader is ",(0,r.jsx)(n.strong,{children:"5.7x faster"})," for snapshot queries with ",(0,r.jsx)(n.strong,{children:"70x reduced write amplification"}),".\nHowever, for position-based merging, the gains are yet to be realized as filter pushdown support\nis ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/10030",children:"in progress"}),". The new reader is enabled by default for all new tables.\nFollowing configs are used to control the reader:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# enabled by default\nhoodie.file.group.reader.enabled=true\nhoodie.datasource.read.use.new.parquet.file.format=true\n# need to enable position-based merging if required\nhoodie.merge.use.record.positions=true\n"})}),"\n",(0,r.jsx)(n.p,{children:"Few things to note for the new reader:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"It is only applicable to COW or MOR tables with base files in Parquet format."}),"\n",(0,r.jsx)(n.li,{children:"Only snapshot queries for COW table, and snapshot queries and read-optimized queries for MOR table are supported."}),"\n",(0,r.jsx)(n.li,{children:"Currently, the reader will not be able to push down the data filters to scan. It is recommended to use key-based\nmerging for now."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can follow ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-6243",children:"HUDI-6243"}),"\nand ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-6722",children:"HUDI-6722"})," to keep track of ongoing work related to reader/writer\nAPI changes and performance improvements."]}),"\n",(0,r.jsx)(n.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,r.jsxs)(n.p,{children:["The raw release notes are available ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351210",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);