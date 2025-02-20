"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[40588],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},65537:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(96540),a=n(34164),i=n(65627),s=n(56347),o=n(50372),l=n(30604),u=n(11861),c=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=u??f;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function _(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function k(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,w.jsx)(v,{...t,...e}),(0,w.jsx)(_,{...t,...e})]})}function x(e){const t=(0,g.A)();return(0,w.jsx)(k,{...e,children:d(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},98908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"writing_tables_streaming_writes","title":"Streaming Writes","description":"Spark Streaming","source":"@site/versioned_docs/version-1.0.1/writing_tables_streaming_writes.md","sourceDirName":".","slug":"/writing_tables_streaming_writes","permalink":"/docs/writing_tables_streaming_writes","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.1/writing_tables_streaming_writes.md","tags":[],"version":"1.0.1","frontMatter":{"title":"Streaming Writes","keywords":["hudi","spark","flink","streaming","processing"],"last_modified_at":"2024-03-13T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Batch Writes","permalink":"/docs/writing_data"},"next":{"title":"SQL Queries","permalink":"/docs/sql_queries"}}');var a=n(74848),i=n(28453),s=n(65537),o=n(79329);const l={title:"Streaming Writes",keywords:["hudi","spark","flink","streaming","processing"],last_modified_at:new Date("2024-03-13T19:59:57.000Z")},u=void 0,c={},d=[{value:"Spark Streaming",id:"spark-streaming",level:2},{value:"Related Resources",id:"related-resources",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"spark-streaming",children:"Spark Streaming"}),"\n",(0,a.jsx)(t.p,{children:"You can write Hudi tables using spark's structured streaming."}),"\n",(0,a.jsxs)(s.A,{groupId:"programming-language",defaultValue:"python",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,a.jsx)(o.A,{value:"scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'// spark-shell\n// prepare to stream write to new table\nimport org.apache.spark.sql.streaming.Trigger\n\nval streamingTableName = "hudi_trips_cow_streaming"\nval baseStreamingPath = "file:///tmp/hudi_trips_cow_streaming"\nval checkpointLocation = "file:///tmp/checkpoints/hudi_trips_cow_streaming"\n\n// create streaming df\nval df = spark.readStream.\n        format("hudi").\n        load(basePath)\n\n// write stream to new hudi table\ndf.writeStream.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", streamingTableName).\n  outputMode("append").\n  option("path", baseStreamingPath).\n  option("checkpointLocation", checkpointLocation).\n  trigger(Trigger.Once()).\n  start()\n\n'})})}),(0,a.jsx)(o.A,{value:"python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# pyspark\n# prepare to stream write to new table\nstreamingTableName = \"hudi_trips_cow_streaming\"\nbaseStreamingPath = \"file:///tmp/hudi_trips_cow_streaming\"\ncheckpointLocation = \"file:///tmp/checkpoints/hudi_trips_cow_streaming\"\n\nhudi_streaming_options = {\n    'hoodie.table.name': streamingTableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': streamingTableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\n# create streaming df\ndf = spark.readStream \n    .format(\"hudi\") \n    .load(basePath)\n\n# write stream to new hudi table\ndf.writeStream.format(\"hudi\") \n    .options(**hudi_streaming_options) \n    .outputMode(\"append\") \n    .option(\"path\", baseStreamingPath) \n    .option(\"checkpointLocation\", checkpointLocation) \n    .trigger(once=True) \n    .start()\n\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsx)("h3",{children:"Blogs"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.onehouse.ai/blog/intro-to-hudi-and-flink",children:"An Introduction to the Hudi and Flink Integration"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://medium.com/@simpsons/bulk-insert-sort-modes-with-apache-hudi-c781e77841bc",children:"Bulk Insert Sort Modes with Apache Hudi"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);