"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[24704],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}},47079:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"release-1.0.0","title":"Release 1.0.0","description":"Release 1.0.0 (docs)","source":"@site/releases/release-1.0.0.md","sourceDirName":".","slug":"/release-1.0.0","permalink":"/cn/releases/release-1.0.0","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Release 1.0.0","sidebar_position":2,"layout":"releases","toc":true},"sidebar":"releases","previous":{"title":"Release 1.0.1","permalink":"/cn/releases/release-1.0.1"},"next":{"title":"Release 0.15.0","permalink":"/cn/releases/release-0.15.0"}}');var r=i(74848),s=i(28453);i(65537),i(79329);const a={title:"Release 1.0.0",sidebar_position:2,layout:"releases",toc:!0},o=void 0,l={},c=[{value:"Release 1.0.0 (docs)",id:"release-100-docs",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Bundle Updates",id:"bundle-updates",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Format changes",id:"format-changes",level:3},{value:"Timeline",id:"timeline",level:4},{value:"Log File Format",id:"log-file-format",level:4},{value:"Compatibility with Old Formats",id:"compatibility-with-old-formats",level:3},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"New Indices",id:"new-indices",level:3},{value:"Secondary Index",id:"secondary-index",level:4},{value:"Partition Stats Index",id:"partition-stats-index",level:4},{value:"Expression Index",id:"expression-index",level:4},{value:"Partial Updates",id:"partial-updates",level:3},{value:"Multiple Base File Formats in a single table",id:"multiple-base-file-formats-in-a-single-table",level:3},{value:"API Changes",id:"api-changes",level:3},{value:"Record Merger API",id:"record-merger-api",level:4},{value:"Positional Merging with Filegroup Reader",id:"positional-merging-with-filegroup-reader",level:4},{value:"Flink Enhancements",id:"flink-enhancements",level:3},{value:"Call to Action",id:"call-to-action",level:2},{value:"Known Regressions",id:"known-regressions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"release-100-docs",children:[(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/releases/tag/release-1.0.0",children:"Release 1.0.0"})," (",(0,r.jsx)(n.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Apache Hudi 1.0.0 is a major milestone release of Apache Hudi. This release contains significant format changes and new exciting features\nas we will see below."}),"\n",(0,r.jsx)(n.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,r.jsxs)(n.p,{children:["We encourage users to try the ",(0,r.jsx)(n.strong,{children:"1.0.0"})," features on new tables first. The 1.0 general availability (GA) release will\nsupport automatic table upgrades from 0.x versions while also ensuring full backward compatibility when reading 0.x\nHudi tables using 1.0, ensuring a seamless migration experience."]}),"\n",(0,r.jsxs)(n.p,{children:["This release comes with ",(0,r.jsx)(n.strong,{children:"backward compatible writes"})," i.e. 1.0.0 can write in both the table version 8 (latest) and older\ntable version 6 (corresponds to 0.14 & above) formats. Automatic upgrades for tables from 0.x versions are fully\nsupported, minimizing migration challenges. Until all the readers are upgraded, users can still deploy 1.0.0 binaries\nfor the writers and leverage backward compatible writes to continue writing the tables in the older format. Once the readers\nare fully upgraded, users can switch to the latest format through a config change. We recommend users to follow the upgrade\nsteps mentioned in the ",(0,r.jsx)(n.a,{href:"/docs/deployment#upgrading-to-100",children:"migration guide"})," to ensure a smooth transition."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Most things are seamlessly handled by the auto upgrade process, but there are some limitations. Please read through the\nlimitations of the upgrade downgrade process before proceeding to migrate. Please check the ",(0,r.jsx)(n.a,{href:"/docs/deployment#upgrading-to-100",children:"migration guide"}),"\nand ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-78/rfc-78.md#support-matrix-for-different-readers-and-writers",children:"RFC-78"})," for more details."]})}),"\n",(0,r.jsx)(n.h2,{id:"bundle-updates",children:"Bundle Updates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Same bundles supported in the ",(0,r.jsx)(n.a,{href:"release-0.15.0#new-spark-bundles",children:"0.15.0 release"})," are still supported."]}),"\n",(0,r.jsx)(n.li,{children:"New Flink Bundles to support Flink 1.19 and Flink 1.20."}),"\n",(0,r.jsx)(n.li,{children:"In this release, we have deprecated support for Spark 3.2 or lower version in Spark 3."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(n.h3,{id:"format-changes",children:"Format changes"}),"\n",(0,r.jsxs)(n.p,{children:["The main epic covering all the format changes is ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-6242",children:"HUDI-6242"}),", which is also\ncovered in the ",(0,r.jsx)(n.a,{href:"/tech-specs-1point0",children:"Hudi 1.0 tech specification"}),". The following are the main highlights with respect to format changes:"]}),"\n",(0,r.jsx)(n.h4,{id:"timeline",children:"Timeline"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The active and archived timeline dichotomy has been done away with a more scalable LSM tree based\ntimeline. The timeline layout is now more organized and efficient for time-range queries and scaling to infinite history."}),"\n",(0,r.jsxs)(n.li,{children:["As a result, timeline layout has been changed, and it has been moved to ",(0,r.jsx)(n.code,{children:".hoodie/timeline"})," directory under the base\npath of the table."]}),"\n",(0,r.jsxs)(n.li,{children:["There are changes to the timeline instant files as well:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"All commit metadata is serialized to Avro, allowing for future compatibility and uniformity in metadata across all\nactions."}),"\n",(0,r.jsx)(n.li,{children:"Instant files for completed actions now include a completion time."}),"\n",(0,r.jsxs)(n.li,{children:["Action for the pending clustering instant is now renamed to ",(0,r.jsx)(n.code,{children:"clustering"})," to make it distinct from other\n",(0,r.jsx)(n.code,{children:"replacecommit"})," actions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"log-file-format",children:"Log File Format"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In addition to the keys in the log file header, we also store record positions. Refer to the\nlatest ",(0,r.jsx)(n.a,{href:"/tech-specs-1point0#log-format",children:"spec"})," for more details. This allows us to do position-based merging (apart\nfrom key-based merging) and skip pages based on positions."]}),"\n",(0,r.jsx)(n.li,{children:"Log file name will now have the deltacommit instant time instead of base commit instant time."}),"\n",(0,r.jsx)(n.li,{children:"The new log file format also enables fast partial updates with low storage overhead."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"compatibility-with-old-formats",children:"Compatibility with Old Formats"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Backward Compatible writes:"})," Hudi 1.0 writes now support writing in both the table version 8 (latest) and older table version 6 (corresponds to 0.14 & above) formats, ensuring seamless\nintegration with existing setups."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Automatic upgrades"}),": for tables from 0.x versions are fully supported, minimizing migration challenges. We also recommend users first try migrating to 0.14 &\nabove, if you have advanced setups with multiple readers/writers/table services."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"concurrency-control",children:"Concurrency Control"}),"\n",(0,r.jsxs)(n.p,{children:["1.0.0 introduces ",(0,r.jsx)(n.strong,{children:"Non-Blocking Concurrency Control (NBCC)"}),", enabling multi-stream concurrent ingestion without\nconflict. This is a general-purpose concurrency model aimed at the stream processing or high-contention/frequent writing\nscenarios. In contrast to Optimistic Concurrency Control, where writers abort the transaction if there is a hint of\ncontention, this innovation allows multiple streaming writes to the same Hudi table without any overhead of conflict\nresolution, while keeping the semantics of event-time ordering found in streaming systems, along with asynchronous table\nservice such as compaction, archiving and cleaning."]}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about NBCC, refer to ",(0,r.jsx)(n.a,{href:"/blog/2024/12/06/non-blocking-concurrency-control",children:"this blog"})," which also includes a demo with Flink writers."]}),"\n",(0,r.jsx)(n.h3,{id:"new-indices",children:"New Indices"}),"\n",(0,r.jsx)(n.p,{children:"1.0.0 introduces new indices to the multi-modal indexing subsystem of Apache Hudi. These indices are designed to improve\nquery performance through partition pruning and further data skipping."}),"\n",(0,r.jsx)(n.h4,{id:"secondary-index",children:"Secondary Index"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"secondary index"})," allows users to create indexes on columns that are not part of record key columns in Hudi\ntables. It can be used to speed up queries with predicates on columns other than record key columns."]}),"\n",(0,r.jsx)(n.h4,{id:"partition-stats-index",children:"Partition Stats Index"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"partition stats index"})," aggregates statistics at the partition level for the columns for which it is enabled. This\nhelps in efficient partition pruning even for non-partition fields."]}),"\n",(0,r.jsx)(n.h4,{id:"expression-index",children:"Expression Index"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"expression index"})," enables efficient queries on columns derived from expressions. It can collect stats on columns\nderived from expressions without materializing them, and can be used to speed up queries with filters containing such\nexpressions."]}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about these indices, refer to the ",(0,r.jsx)(n.a,{href:"/docs/sql_queries#snapshot-query-with-index-acceleration",children:"SQL queries"})," docs."]}),"\n",(0,r.jsx)(n.h3,{id:"partial-updates",children:"Partial Updates"}),"\n",(0,r.jsx)(n.p,{children:"1.0.0 extends support for partial updates to Merge-on-Read tables, which allows users to update only a subset of columns\nin a record. This feature is useful when users want to update only a few columns in a record without rewriting the\nentire record."}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about partial updates, refer to the ",(0,r.jsx)(n.a,{href:"/docs/sql_dml#merge-into-partial-update",children:"SQL DML"})," docs."]}),"\n",(0,r.jsx)(n.h3,{id:"multiple-base-file-formats-in-a-single-table",children:"Multiple Base File Formats in a single table"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Support for multiple base file formats (e.g., ",(0,r.jsx)(n.strong,{children:"Parquet"}),", ",(0,r.jsx)(n.strong,{children:"ORC"}),", ",(0,r.jsx)(n.strong,{children:"HFile"}),") within a single Hudi table, allowing\ntailored formats for specific use cases like indexing and ML applications."]}),"\n",(0,r.jsx)(n.li,{children:"It is also useful when users want to switch from one file\nformat to another, e.g. from ORC to Parquet, without rewriting the whole table."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration:"})," Enable with ",(0,r.jsx)(n.code,{children:"hoodie.table.multiple.base.file.formats.enable"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about the format changes, refer to the ",(0,r.jsx)(n.a,{href:"/tech-specs-1point0",children:"Hudi 1.0 tech specification"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"api-changes",children:"API Changes"}),"\n",(0,r.jsx)(n.p,{children:"1.0.0 introduces several API changes, including:"}),"\n",(0,r.jsx)(n.h4,{id:"record-merger-api",children:"Record Merger API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HoodieRecordPayload"})," interface is deprecated in favor of the new ",(0,r.jsx)(n.code,{children:"HoodieRecordMerger"})," interface. Record merger is a\ngeneric interface that allows users to define custom logic for merging base file and log file records. This release\ncomes with a few out-of-the-box merge modes, which define how the base and log files are ordered in a file slice and\nfurther how different records with the same record key within that file slice are merged consistently to produce the\nsame deterministic results for snapshot queries, writers and table services. Specifically, there are three merge modes\nsupported as a table-level configuration:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"COMMIT_TIME_ORDERING"}),": Merging simply picks the record belonging to the latest write (commit time) as the merged\nresult."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"EVENT_TIME_ORDERING"}),": Merging picks the record with the highest value on a user specified ordering or precombine\nfield as the merged result."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CUSTOM"}),": Users can provide custom merger implementation to have better control over the merge logic."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Going forward, we recommend users to migrate and use the record merger APIs and not write new payload implementations."})}),"\n",(0,r.jsx)(n.h4,{id:"positional-merging-with-filegroup-reader",children:"Positional Merging with Filegroup Reader"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Position-Based Merging:"})," Offers an alternative to key-based merging, allowing for page skipping based on record\npositions. Enabled by default for Spark and Hive."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration:"})," Activate positional merging using ",(0,r.jsx)(n.code,{children:"hoodie.merge.use.record.positions=true"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The new reader has shown impressive performance gains for ",(0,r.jsx)(n.strong,{children:"partial updates"})," with key-based merging. For a MOR table of\nsize 1TB with 100 partitions and 80% random updates in subsequent commits, the new reader is ",(0,r.jsx)(n.strong,{children:"5.7x faster"})," for\nsnapshot queries with ",(0,r.jsx)(n.strong,{children:"70x reduced write amplification"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"flink-enhancements",children:"Flink Enhancements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Lookup Joins:"})," Flink now supports lookup joins, enabling table enrichment with external data sources."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Partition Stats Index Support:"})," As mentioned above, partition stats support is now available for Flink, bringing\nefficient partition pruning to streaming workloads."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Non-Blocking Concurrency Control:"})," NBCC is now available for Flink streaming writers, allowing for multi-stream\nconcurrent ingestion without conflict."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"call-to-action",children:"Call to Action"}),"\n",(0,r.jsx)(n.p,{children:"The 1.0.0 GA release is the culmination of extensive development, testing, and feedback. We invite you to upgrade and\nexperience the new features and enhancements."}),"\n",(0,r.jsx)(n.h2,{id:"known-regressions",children:"Known Regressions"}),"\n",(0,r.jsx)(n.p,{children:"We discovered a regression in Hudi 1.0.0 release for backwards compatible writer for MOR table.\nIt can silently deletes committed data after upgrade when new data is ingested to the table."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Avoid upgrading any existing table to 1.0.0 if you are using MOR table in 0.x. But you are good to upgrade to 1.0.1."})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},65537:(e,n,i)=>{i.d(n,{A:()=>y});var t=i(96540),r=i(34164),s=i(65627),a=i(56347),o=i(50372),l=i(30604),c=i(11861),d=i(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,s=u(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:i,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(i);return[r,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=i(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(74848);function w(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),r=o[i].value;r!==t&&(c(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:s}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(w,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(j,{...e,children:h(e.children)},String(n))}},79329:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var t=i(34164);const r={tabItem:"tabItem_Ymn6"};var s=i(74848);function a(e){let{children:n,hidden:i,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:i,children:n})}}}]);