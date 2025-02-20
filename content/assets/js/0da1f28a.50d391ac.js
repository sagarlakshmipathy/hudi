"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[28],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}},65537:(e,n,i)=>{i.d(n,{A:()=>w});var t=i(96540),r=i(34164),a=i(65627),s=i(56347),o=i(50372),l=i(30604),d=i(11861),c=i(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,a=u(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,h]=m({queryString:i,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(i);return[r,(0,t.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:r}),b=(()=>{const e=d??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=i(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(74848);function j(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,i=l.indexOf(n),r=o[i].value;r!==t&&(d(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:h,onClick:c,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:a}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(y,{...e,children:h(e.children)},String(n))}},75246:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"release-0.12.0","title":"Release 0.12.0","description":"Release 0.12.0 (docs)","source":"@site/releases/release-0.12.0.md","sourceDirName":".","slug":"/release-0.12.0","permalink":"/releases/release-0.12.0","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Release 0.12.0","sidebar_position":12,"layout":"releases","toc":true},"sidebar":"releases","previous":{"title":"Release 0.12.1","permalink":"/releases/release-0.12.1"},"next":{"title":"Release 0.11.1","permalink":"/releases/release-0.11.1"}}');var r=i(74848),a=i(28453);i(65537),i(79329);const s={title:"Release 0.12.0",sidebar_position:12,layout:"releases",toc:!0},o=void 0,l={},d=[{value:"Release 0.12.0 (docs)",id:"release-0120-docs",level:2},{value:"Long Term Support",id:"long-term-support",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Configuration Updates",id:"configuration-updates",level:3},{value:"API Updates",id:"api-updates",level:3},{value:"Fallback Partition",id:"fallback-partition",level:3},{value:"Bundle Updates",id:"bundle-updates",level:3},{value:"Release Highlights",id:"release-highlights",level:2},{value:"Presto-Hudi Connector",id:"presto-hudi-connector",level:3},{value:"Archival Beyond Savepoint",id:"archival-beyond-savepoint",level:3},{value:"File system based Lock Provider",id:"file-system-based-lock-provider",level:3},{value:"Deltastreamer Termination Strategy",id:"deltastreamer-termination-strategy",level:3},{value:"Spark 3.3 Support",id:"spark-33-support",level:3},{value:"Spark SQL Support Improvements",id:"spark-sql-support-improvements",level:3},{value:"Flink 1.15 Support",id:"flink-115-support",level:3},{value:"Flink Integration Improvements",id:"flink-integration-improvements",level:3},{value:"Performance Improvements",id:"performance-improvements",level:3},{value:"Known Regressions:",id:"known-regressions",level:2},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"release-0120-docs",children:[(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.12.0",children:"Release 0.12.0"})," (",(0,r.jsx)(n.a,{href:"/docs/0.12.0/quick-start-guide",children:"docs"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"long-term-support",children:"Long Term Support"}),"\n",(0,r.jsxs)(n.p,{children:["We aim to maintain 0.12 for a longer period of time and provide a stable release through the latest 0.12.x release for\nusers to migrate to.  The latest 0.12 release is ",(0,r.jsx)(n.a,{href:"/releases/release-0.12.3",children:"0.12.3"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,r.jsxs)(n.p,{children:["In this release, there have been a few API and configuration updates listed below that warranted a new table version.\nHence, the latest ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/bf86efef719b7760ea379bfa08c537431eeee09a/hudi-common/src/main/java/org/apache/hudi/common/table/HoodieTableVersion.java#L41",children:"table version"}),"\nis ",(0,r.jsx)(n.code,{children:"5"}),". For existing Hudi tables on older version, a one-time upgrade step will be executed automatically. Please take\nnote of the following updates before upgrading to Hudi 0.12.0."]}),"\n",(0,r.jsx)(n.h3,{id:"configuration-updates",children:"Configuration Updates"}),"\n",(0,r.jsx)(n.p,{children:"In this release, the default value for a few configurations have been changed. They are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hoodie.bulkinsert.sort.mode"}),": This config is used to determine mode for sorting records for bulk insert. Its default value has been changed from ",(0,r.jsx)(n.code,{children:"GLOBAL_SORT"})," to ",(0,r.jsx)(n.code,{children:"NONE"}),", which means no sorting is done and it matches ",(0,r.jsx)(n.code,{children:"spark.write.parquet()"})," in terms of overhead."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hoodie.datasource.hive_sync.partition_extractor_class"}),": This config is used to extract and transform partition value during Hive sync. Its default value has been changed from ",(0,r.jsx)(n.code,{children:"SlashEncodedDayPartitionValueExtractor"})," to ",(0,r.jsx)(n.code,{children:"MultiPartKeysValueExtractor"}),". If you relied on the previous default value (i.e., have not set it explicitly), you are required to set the config to ",(0,r.jsx)(n.code,{children:"org.apache.hudi.hive.SlashEncodedDayPartitionValueExtractor"}),". From this release, if this config is not set and Hive sync is enabled, then partition value extractor class will be ",(0,r.jsx)(n.strong,{children:"automatically inferred"})," on the basis of number of partition fields and whether or not hive style partitioning is enabled."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The following configs will be inferred, if not set manually, from other configs' values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"META_SYNC_BASE_FILE_FORMAT"}),": infer from ",(0,r.jsx)(n.code,{children:"org.apache.hudi.common.table.HoodieTableConfig.BASE_FILE_FORMAT"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"META_SYNC_ASSUME_DATE_PARTITION"}),": infer from ",(0,r.jsx)(n.code,{children:"org.apache.hudi.common.config.HoodieMetadataConfig.ASSUME_DATE_PARTITIONING"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"META_SYNC_DECODE_PARTITION"}),": infer from ",(0,r.jsx)(n.code,{children:"org.apache.hudi.common.table.HoodieTableConfig.URL_ENCODE_PARTITIONING"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"META_SYNC_USE_FILE_LISTING_FROM_METADATA"}),": infer from ",(0,r.jsx)(n.code,{children:"org.apache.hudi.common.config.HoodieMetadataConfig.ENABLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"api-updates",children:"API Updates"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"SparkKeyGeneratorInterface"}),", return type of the ",(0,r.jsx)(n.code,{children:"getRecordKey"})," API has been changed from String to UTF8String."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Before\nString getRecordKey(InternalRow row, StructType schema); \n\n\n// After\nUTF8String getRecordKey(InternalRow row, StructType schema); \n"})}),"\n",(0,r.jsx)(n.h3,{id:"fallback-partition",children:"Fallback Partition"}),"\n",(0,r.jsxs)(n.p,{children:["If partition field value was null, Hudi has a fallback mechanism instead of failing the write. Until 0.9.0,\n",(0,r.jsx)(n.code,{children:"__HIVE_DEFAULT_PARTITION__"}),"  was used as the fallback partition. After 0.9.0, due to some refactoring, fallback\npartition changed to ",(0,r.jsx)(n.code,{children:"default"}),". This default partition does not sit well with some of the query engines. So, we are\nswitching the fallback partition to ",(0,r.jsx)(n.code,{children:"__HIVE_DEFAULT_PARTITION__"}),"  from 0.12.0. We have added an upgrade step where in,\nwe fail the upgrade if the existing Hudi table has a partition named ",(0,r.jsx)(n.code,{children:"default"}),". Users are expected to rewrite the data\nin this partition to a partition named ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/0d0a4152cfd362185066519ae926ac4513c7a152/hudi-common/src/main/java/org/apache/hudi/common/util/PartitionPathEncodeUtils.java#L29",children:"__HIVE_DEFAULT_PARTITION__"}),".\nHowever, if you had intentionally named your partition as ",(0,r.jsx)(n.code,{children:"default"}),", you can bypass this using the config ",(0,r.jsx)(n.code,{children:"hoodie.skip.default.partition.validation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"bundle-updates",children:"Bundle Updates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hudi-aws-bundle"})," extracts away aws-related dependencies from hudi-utilities-bundle or hudi-spark-bundle. In order to use features such as Glue sync, Cloudwatch metrics reporter or DynamoDB lock provider, users need to provide hudi-aws-bundle jar along with hudi-utilities-bundle or hudi-spark-bundle jars."]}),"\n",(0,r.jsxs)(n.li,{children:["Spark 3.3 support is added; users who are on Spark 3.3 can use ",(0,r.jsx)(n.code,{children:"hudi-spark3.3-bundle"})," or ",(0,r.jsx)(n.code,{children:"hudi-spark3-bundle"})," (legacy bundle name)."]}),"\n",(0,r.jsxs)(n.li,{children:["Spark 3.2 will continue to be supported via ",(0,r.jsx)(n.code,{children:"hudi-spark3.2-bundle"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Spark 3.1 will continue to be supported via ",(0,r.jsx)(n.code,{children:"hudi-spark3.1-bundle"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Spark 2.4 will continue to be supported via ",(0,r.jsx)(n.code,{children:"hudi-spark2.4-bundle"})," or ",(0,r.jsx)(n.code,{children:"hudi-spark-bundle"})," (legacy bundle name)."]}),"\n",(0,r.jsxs)(n.li,{children:["Flink 1.15 support is added; users who are on Flink 1.15 can use ",(0,r.jsx)(n.code,{children:"hudi-flink1.15-bundle"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Flink 1.14 will continue to be supported via ",(0,r.jsx)(n.code,{children:"hudi-flink1.14-bundle"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Flink 1.13 will continue to be supported via ",(0,r.jsx)(n.code,{children:"hudi-flink1.13-bundle"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"release-highlights",children:"Release Highlights"}),"\n",(0,r.jsx)(n.h3,{id:"presto-hudi-connector",children:"Presto-Hudi Connector"}),"\n",(0,r.jsxs)(n.p,{children:["Since version 0.275 of PrestoDB, users can now leverage native Hudi connector to query Hudi table.\nIt is on par with Hudi support in the Hive connector. To learn more about the usage of the connector,\nplease checkout ",(0,r.jsx)(n.a,{href:"https://prestodb.io/docs/current/connector/hudi.html",children:"prestodb documentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"archival-beyond-savepoint",children:"Archival Beyond Savepoint"}),"\n",(0,r.jsxs)(n.p,{children:["Hudi supports savepoint and restore feature that is useful for backup and disaster recovery scenarios. More info can be\nfound ",(0,r.jsx)(n.a,{href:"https://hudi.apache.org/docs/disaster_recovery",children:"here"}),". Until 0.12.0, archival for a given table will not make\nprogress beyond the first savepointed commit. But there has been ask from the community to relax this constraint so that\nsome coarse grained commits can be retained in the active timeline and execute point in time queries. So, with 0.12.0,\nusers can now let archival proceed beyond savepoint commits by enabling ",(0,r.jsx)(n.code,{children:"hoodie.archive.beyond.savepoint"}),' write\nconfiguration. This unlocks new opportunities for Hudi users. For example, one can retain commits for years, by adding\none savepoint per day for older commits (lets say > 30 days). And query hudi table using "as.of.instant" with any older\nsavepointed commit. By this, Hudi does not need to retain every commit in the active timeline for older commits.']}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["However, if this feature is enabled, restore cannot be supported. This limitation would be relaxed in a future release\nand the development of this feature can be tracked in ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-4500",children:"HUDI-4500"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"file-system-based-lock-provider",children:"File system based Lock Provider"}),"\n",(0,r.jsxs)(n.p,{children:["For multiple writers using optimistic concurrency control, Hudi already supports lock providers based on\nZookeeper, Hive Metastore or Amazon DynamoDB. In this release, there is a new file system based lock provider. Unlike the\nneed for external systems in other lock providers, this implementation acquires/releases a lock based on atomic\ncreate/delete operations of the underlying file system. To use this lock provider, users need to set the following\nminimal configurations (please check the ",(0,r.jsx)(n.a,{href:"/docs/configurations#Locks-Configurations",children:"lock configuration"})," for a few\nother optional configs that can be used):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.FileSystemBasedLockProvider\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deltastreamer-termination-strategy",children:"Deltastreamer Termination Strategy"}),"\n",(0,r.jsxs)(n.p,{children:["Users can now configure a post-write termination strategy with deltastreamer ",(0,r.jsx)(n.code,{children:"continuous"})," mode if need be. For instance,\nusers can configure graceful shutdown if there is no new data from source for 5 consecutive times. Here is the interface\nfor the termination strategy."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"/**\n * Post write termination strategy for deltastreamer in continuous mode.\n */\npublic interface PostWriteTerminationStrategy {\n\n  /**\n   * Returns whether deltastreamer needs to be shutdown.\n   * @param scheduledCompactionInstantAndWriteStatuses optional pair of scheduled compaction instant and write statuses.\n   * @return true if deltastreamer has to be shutdown. false otherwise.\n   */\n  boolean shouldShutdown(Option<Pair<Option<String>, JavaRDD<WriteStatus>>> scheduledCompactionInstantAndWriteStatuses);\n\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Also, this might help in bootstrapping a new table. Instead of doing one bulk load or bulk_insert leveraging a large\ncluster for a large input of data, one could start deltastreamer on continuous mode and add a shutdown strategy to\nterminate, once all data has been bootstrapped. This way, each batch could be smaller and may not need a large cluster\nto bootstrap data. We have one concrete implementation out of the box, ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/0d0a4152cfd362185066519ae926ac4513c7a152/hudi-utilities/src/main/java/org/apache/hudi/utilities/deltastreamer/NoNewDataTerminationStrategy.java",children:"NoNewDataTerminationStrategy"}),".\nUsers can feel free to implement their own strategy as they see fit."]}),"\n",(0,r.jsx)(n.h3,{id:"spark-33-support",children:"Spark 3.3 Support"}),"\n",(0,r.jsxs)(n.p,{children:["Spark 3.3 support is added; users who are on Spark 3.3 can use ",(0,r.jsx)(n.code,{children:"hudi-spark3.3-bundle"})," or ",(0,r.jsx)(n.code,{children:"hudi-spark3-bundle"}),". Spark 3.2,\nSpark 3.1 and Spark 2.4 will continue to be supported. Please check the migration guide for ",(0,r.jsx)(n.a,{href:"#bundle-updates",children:"bundle updates"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"spark-sql-support-improvements",children:"Spark SQL Support Improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Support for upgrade, downgrade, bootstrap, clean, rollback and repair through ",(0,r.jsx)(n.code,{children:"Call Procedure"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:["Support for ",(0,r.jsx)(n.code,{children:"analyze table"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Support for ",(0,r.jsx)(n.code,{children:"Create/Drop/Show/Refresh Index"})," syntax through Spark SQL."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"flink-115-support",children:"Flink 1.15 Support"}),"\n",(0,r.jsxs)(n.p,{children:["Flink 1.15.x is integrated with Hudi, use profile param ",(0,r.jsx)(n.code,{children:"-Pflink1.15"})," when compiling the codes to adapt the version.\nAlternatively, use ",(0,r.jsx)(n.code,{children:"hudi-flink1.15-bundle"}),". Flink 1.14 and Flink 1.13 will continue to be supported. Please check the\nmigration guide for ",(0,r.jsx)(n.a,{href:"#bundle-updates",children:"bundle updates"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"flink-integration-improvements",children:"Flink Integration Improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data skipping"})," is supported for batch mode read, set up SQL option ",(0,r.jsx)(n.code,{children:"metadata.enabled"}),", ",(0,r.jsx)(n.code,{children:"hoodie.metadata.index.column.stats.enable"}),"  and ",(0,r.jsx)(n.code,{children:"read.data.skipping.enabled"})," as true to enable it."]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"HMS-based Flink catalog"})," is added with catalog identifier as ",(0,r.jsx)(n.code,{children:"hudi"}),". You can instantiate the catalog through API directly or use the ",(0,r.jsx)(n.code,{children:"CREATE CATALOG"}),"  syntax to create it. Specifies catalog option ",(0,r.jsx)(n.code,{children:"'mode' = 'hms'"}),"  to switch to the HMS catalog. By default, the catalog is in ",(0,r.jsx)(n.code,{children:"dfs"})," mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Async clustering"})," is supported for Flink ",(0,r.jsx)(n.code,{children:"INSERT"})," operation, set up SQL option ",(0,r.jsx)(n.code,{children:"clustering.schedule.enabled"})," and ",(0,r.jsx)(n.code,{children:"clustering.async.enabled"})," as true to enable it. When enabling this feature, a clustering sub-pipeline is scheduled asynchronously continuously to merge the small files continuously into larger ones."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"performance-improvements",children:"Performance Improvements"}),"\n",(0,r.jsx)(n.p,{children:"This version brings more improvements to make Hudi the most performant lake storage format. Some notable improvements are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Closed the performance gap in writing through Spark datasource vs sql. Previously, datasource writes were faster."}),"\n",(0,r.jsx)(n.li,{children:"All built-in key generators implement more performant Spark-specific APIs."}),"\n",(0,r.jsx)(n.li,{children:"Replaced UDF in bulk insert operation with RDD transformation to cut down serde cost."}),"\n",(0,r.jsx)(n.li,{children:"Optimized column stats index performance in data skipping."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["We recently benchmarked Hudi against TPC-DS workload.\nPlease check out ",(0,r.jsx)(n.a,{href:"/blog/2022/06/29/Apache-Hudi-vs-Delta-Lake-transparent-tpc-ds-lakehouse-performance-benchmarks",children:"our blog"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"known-regressions",children:"Known Regressions:"}),"\n",(0,r.jsxs)(n.p,{children:["We discovered a regression in Hudi 0.12 release related to Bloom\nIndex metadata persisted w/in Parquet footers ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-4992",children:"HUDI-4992"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Crux of the problem was that min/max statistics for the record keys were\ncomputed incorrectly during (Spark-specific) ",(0,r.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodiedatasourcewriterowwriterenable",children:"row-writing"}),"\nBulk Insert operation affecting ",(0,r.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/basic_configurations/#hoodiebloomindexprunebyranges",children:"Key Range Pruning flow"}),"\nw/in ",(0,r.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/faq/#how-do-i-configure-bloom-filter-when-bloomglobal_bloom-index-is-used",children:"Hoodie Bloom Index"}),'\ntagging sequence, resulting into updated records being incorrectly tagged\nas "inserts" and not as "updates", leading to duplicated records in the\ntable.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/6883",children:"PR#6883"})," addressing the problem is incorporated into\nHudi 0.12.1 release.*"]}),"\n",(0,r.jsx)(n.p,{children:"If all of the following is applicable to you:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Using Spark as an execution engine"}),"\n",(0,r.jsxs)(n.li,{children:["Using Bulk Insert (using ",(0,r.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodiedatasourcewriterowwriterenable",children:"row-writing"}),",\nenabled ",(0,r.jsx)(n.em,{children:"by default"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Using Bloom Index (with ",(0,r.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/basic_configurations/#hoodiebloomindexprunebyranges",children:"range-pruning"}),"\nenabled, enabled ",(0,r.jsx)(n.em,{children:"by default"}),') for "UPSERT" operations']}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Note: Default index type is SIMPLE. So, unless you have over-ridden the index type, you may not hit this issue."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Please consider one of the following potential remediations to avoid\ngetting duplicate records in your pipeline:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/basic_configurations/#hoodiebloomindexprunebyranges",children:"Disabling Bloom Index range-pruning"}),"\nflow (might\naffect performance of upsert operations)"]}),"\n",(0,r.jsx)(n.li,{children:"Upgrading to 0.12.1."}),"\n",(0,r.jsxs)(n.li,{children:["Making sure that the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/6883",children:"fix"})," is\nincluded in your custom artifacts (if you're building and using ones)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We also found another regression related to metadata table and timeline server interplay with streaming ingestion pipelines."}),"\n",(0,r.jsx)(n.p,{children:"The FileSystemView that Hudi maintains internally could go out of sync due to a occasional race conditions when table services are involved\n(compaction, clustering) and could result in updates and deletes routed to older file versions and hence resulting in missed updates and deletes."}),"\n",(0,r.jsx)(n.p,{children:"Here are the user-flows that could potentially be impacted with this."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This impacts pipelines using Deltastreamer in ",(0,r.jsx)(n.strong,{children:"continuous mode"})," (sync once is not impacted), Spark streaming, or if you have been directly\nusing write client across batches/commits instead of the standard ways to write to Hudi. In other words, batch writes should not be impacted."]}),"\n",(0,r.jsxs)(n.li,{children:["Among these write models, this could have an impact only when table services are enabled.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"COW: clustering enabled (inline or async)"}),"\n",(0,r.jsx)(n.li,{children:"MOR: compaction enabled (by default, inline or async)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Also, the impact is applicable only when metadata table is enabled, and timeline server is enabled (which are defaults as of 0.12.0)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Based on some production data, we expect this issue might impact roughly < 1% of updates to be missed, since its a race condition\nand table services are generally scheduled once every N commits. The percentage of update misses could be even less if the\nfrequency of table services is less."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-5863",children:"Here"})," is the jira for the issue of interest and the fix has already been landed in master.\n0.12.3 should have the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/8079",children:"fix"}),". Until we have a 0.12.3 release, we recommend you to disable metadata table\n(",(0,r.jsx)(n.code,{children:"hoodie.metadata.enable=false"}),") to mitigate the issue."]}),"\n",(0,r.jsxs)(n.p,{children:["We also discovered a regression for Flink streaming writer with the hive meta sync which is introduced by HUDI-3730, the refactoring to ",(0,r.jsx)(n.code,{children:"HiveSyncConfig"}),"\ncauses the Hive ",(0,r.jsx)(n.code,{children:"Resources"})," config objects leaking, which finally leads to an OOM exception for the JobManager if the streaming job runs continuously for weeks.\n0.12.3 should have the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/8050",children:"fix"}),". Until we have a 0.12.3 release, we recommend you to cherry-pick the fix to local\nif hive meta sync is required."]}),"\n",(0,r.jsx)(n.p,{children:"Sorry about the inconvenience caused."}),"\n",(0,r.jsx)(n.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,r.jsxs)(n.p,{children:["The raw release notes are available ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351209",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},79329:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(34164);const r={tabItem:"tabItem_Ymn6"};var a=i(74848);function s(e){let{children:n,hidden:i,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:i,children:n})}}}]);