"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78159],{23604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"python-rust-quick-start-guide","title":"Python/Rust Quick Start (Hudi-rs)","description":"This guide will help you get started with Hudi-rs, the native Rust implementation for Apache Hudi with Python bindings. Learn how to install, set up, and perform basic operations using both Python and Rust interfaces.","source":"@site/versioned_docs/version-0.15.0/python-rust-quick-start-guide.md","sourceDirName":".","slug":"/python-rust-quick-start-guide","permalink":"/docs/0.15.0/python-rust-quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/python-rust-quick-start-guide.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Python/Rust Quick Start (Hudi-rs)","toc":true,"last_modified_at":"2024-11-28T04:53:57.000Z"},"sidebar":"docs","previous":{"title":"Flink Quick Start","permalink":"/docs/0.15.0/flink-quick-start-guide"},"next":{"title":"Docker Demo","permalink":"/docs/0.15.0/docker_demo"}}');var i=n(74848),a=n(28453);n(65537),n(79329);const s={title:"Python/Rust Quick Start (Hudi-rs)",toc:!0,last_modified_at:new Date("2024-11-28T04:53:57.000Z")},l=void 0,o={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Snapshot Query",id:"snapshot-query",level:3},{value:"Python",id:"python",level:4},{value:"Rust",id:"rust",level:4},{value:"Python",id:"python-1",level:4},{value:"Rust",id:"rust-1",level:4},{value:"Time-Travel Query",id:"time-travel-query",level:3},{value:"Python",id:"python-2",level:4},{value:"Rust",id:"rust-2",level:4},{value:"Incremental Query",id:"incremental-query",level:3},{value:"Python",id:"python-3",level:4},{value:"Rust",id:"rust-3",level:4},{value:"Query Engine Integration",id:"query-engine-integration",level:2},{value:"Table API",id:"table-api",level:3},{value:"File Group API",id:"file-group-api",level:3},{value:"Apache DataFusion",id:"apache-datafusion",level:3},{value:"Other Integrations",id:"other-integrations",level:3},{value:"Work with cloud storage",id:"work-with-cloud-storage",level:3},{value:"Python",id:"python-4",level:4},{value:"Rust",id:"rust-4",level:4},{value:"Contributing",id:"contributing",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This guide will help you get started with ",(0,i.jsx)(t.a,{href:"https://github.com/apache/hudi-rs",children:"Hudi-rs"}),", the native Rust implementation for Apache Hudi with Python bindings. Learn how to install, set up, and perform basic operations using both Python and Rust interfaces."]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# Python\npip install hudi\n\n# Rust\ncargo add hudi\n"})}),"\n",(0,i.jsx)(t.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["[!NOTE]\nThese examples expect a Hudi table exists at ",(0,i.jsx)(t.code,{children:"/tmp/trips_table"}),", created using\nthe ",(0,i.jsx)(t.a,{href:"/docs/quick-start-guide",children:"quick start guide"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"snapshot-query",children:"Snapshot Query"}),"\n",(0,i.jsx)(t.p,{children:"Snapshot query reads the latest version of the data from the table. The table API also accepts partition filters."}),"\n",(0,i.jsx)(t.h4,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from hudi import HudiTableBuilder\nimport pyarrow as pa\n\nhudi_table = HudiTableBuilder.from_base_uri("/tmp/trips_table").build()\nbatches = hudi_table.read_snapshot(filters=[("city", "=", "san_francisco")])\n\n# convert to PyArrow table\narrow_table = pa.Table.from_batches(batches)\nresult = arrow_table.select(["rider", "city", "ts", "fare"])\nprint(result)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"rust",children:"Rust"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'use hudi::error::Result;\nuse hudi::table::builder::TableBuilder as HudiTableBuilder;\nuse arrow::compute::concat_batches;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let hudi_table = HudiTableBuilder::from_base_uri("/tmp/trips_table").build().await?;\n    let batches = hudi_table.read_snapshot(&[("city", "=", "san_francisco")]).await?;\n    let batch = concat_batches(&batches[0].schema(), &batches)?;\n    let columns = vec!["rider", "city", "ts", "fare"];\n    for col_name in columns {\n        let idx = batch.schema().index_of(col_name).unwrap();\n        println!("{}: {}", col_name, batch.column(idx));\n    }\n    Ok(())\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["To run read-optimized (RO) query on Merge-on-Read (MOR) tables, set ",(0,i.jsx)(t.code,{children:"hoodie.read.use.read_optimized.mode"})," when creating the table."]}),"\n",(0,i.jsx)(t.h4,{id:"python-1",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'hudi_table = (\n    HudiTableBuilder\n    .from_base_uri("/tmp/trips_table")\n    .with_option("hoodie.read.use.read_optimized.mode", "true")\n    .build()\n)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"rust-1",children:"Rust"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'let hudi_table = \n    HudiTableBuilder::from_base_uri("/tmp/trips_table")\n    .with_option("hoodie.read.use.read_optimized.mode", "true")\n    .build().await?;\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"[!NOTE]\nCurrently reading MOR tables is limited to tables with Parquet data blocks."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"time-travel-query",children:"Time-Travel Query"}),"\n",(0,i.jsx)(t.p,{children:"Time-travel query reads the data at a specific timestamp from the table. The table API also accepts partition filters."}),"\n",(0,i.jsx)(t.h4,{id:"python-2",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'batches = (\n    hudi_table\n    .read_snapshot_as_of("20241231123456789", filters=[("city", "=", "san_francisco")])\n)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"rust-2",children:"Rust"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'let batches = \n    hudi_table\n    .read_snapshot_as_of("20241231123456789", &[("city", "=", "san_francisco")]).await?;\n'})}),"\n",(0,i.jsx)(t.h3,{id:"incremental-query",children:"Incremental Query"}),"\n",(0,i.jsx)(t.p,{children:"Incremental query reads the changed data from the table for a given time range."}),"\n",(0,i.jsx)(t.h4,{id:"python-3",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# read the records between t1 (exclusive) and t2 (inclusive)\nbatches = hudi_table.read_incremental_records(t1, t2)\n\n# read the records after t1\nbatches = hudi_table.read_incremental_records(t1)\n"})}),"\n",(0,i.jsx)(t.h4,{id:"rust-3",children:"Rust"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"// read the records between t1 (exclusive) and t2 (inclusive)\nlet batches = hudi_table.read_incremental_records(t1, Some(t2)).await?;\n\n// read the records after t1\nlet batches = hudi_table.read_incremental_records(t1, None).await?;\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["[!NOTE]\nCurrently the only supported format for the timestamp arguments is Hudi Timeline format: ",(0,i.jsx)(t.code,{children:"yyyyMMddHHmmssSSS"})," or ",(0,i.jsx)(t.code,{children:"yyyyMMddHHmmss"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"query-engine-integration",children:"Query Engine Integration"}),"\n",(0,i.jsx)(t.p,{children:"Hudi-rs provides APIs to support integration with query engines. The sections below highlight some commonly used APIs."}),"\n",(0,i.jsx)(t.h3,{id:"table-api",children:"Table API"}),"\n",(0,i.jsxs)(t.p,{children:["Create a Hudi table instance using its constructor or the ",(0,i.jsx)(t.code,{children:"TableBuilder"})," API."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Stage"}),(0,i.jsx)(t.th,{children:"API"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Query planning"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"get_file_slices()"})}),(0,i.jsx)(t.td,{children:"For snapshot query, get a list of file slices."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"get_file_slices_splits()"})}),(0,i.jsx)(t.td,{children:"For snapshot query, get a list of file slices in splits."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"get_file_slices_as_of()"})}),(0,i.jsx)(t.td,{children:"For time-travel query, get a list of file slices at a given time."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"get_file_slices_splits_as_of()"})}),(0,i.jsx)(t.td,{children:"For time-travel query, get a list of file slices in splits at a given time."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"get_file_slices_between()"})}),(0,i.jsx)(t.td,{children:"For incremental query, get a list of changed file slices between a time range."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Query execution"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"create_file_group_reader_with_options()"})}),(0,i.jsx)(t.td,{children:"Create a file group reader instance with the table instance's configs."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"file-group-api",children:"File Group API"}),"\n",(0,i.jsxs)(t.p,{children:["Create a Hudi file group reader instance using its constructor or the Hudi table API ",(0,i.jsx)(t.code,{children:"create_file_group_reader_with_options()"}),"."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Stage"}),(0,i.jsx)(t.th,{children:"API"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Query execution"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"read_file_slice()"})}),(0,i.jsx)(t.td,{children:"Read records from a given file slice; based on the configs, read records from only base file, or from base file and log files, and merge records based on the configured strategy."})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"apache-datafusion",children:"Apache DataFusion"}),"\n",(0,i.jsxs)(t.p,{children:["Enabling the ",(0,i.jsx)(t.code,{children:"hudi"})," crate with ",(0,i.jsx)(t.code,{children:"datafusion"})," feature will provide a ",(0,i.jsx)(t.a,{href:"https://datafusion.apache.org/",children:"DataFusion"}),"\nextension to query Hudi tables."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Add crate hudi with datafusion feature to your application to query a Hudi table."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cargo new my_project --bin && cd my_project\ncargo add tokio@1 datafusion@43\ncargo add hudi --features datafusion\n"})}),(0,i.jsxs)(t.p,{children:["Update ",(0,i.jsx)(t.code,{children:"src/main.rs"})," with the code snippet below then ",(0,i.jsx)(t.code,{children:"cargo run"}),"."]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'use std::sync::Arc;\n\nuse datafusion::error::Result;\nuse datafusion::prelude::{DataFrame, SessionContext};\nuse hudi::HudiDataSource;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let ctx = SessionContext::new();\n    let hudi = HudiDataSource::new_with_options(\n        "/tmp/trips_table",\n        [("hoodie.read.input.partitions", "5")]).await?;\n    ctx.register_table("trips_table", Arc::new(hudi))?;\n    let df: DataFrame = ctx.sql("SELECT * from trips_table where city = \'san_francisco\'").await?;\n    df.show().await?;\n    Ok(())\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"other-integrations",children:"Other Integrations"}),"\n",(0,i.jsx)(t.p,{children:"Hudi is also integrated with"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.getdaft.io/projects/docs/en/stable/integrations/hudi/",children:"Daft"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.ray.io/en/latest/data/api/doc/ray.data.read_hudi.html#ray.data.read_hudi",children:"Ray"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"work-with-cloud-storage",children:"Work with cloud storage"}),"\n",(0,i.jsxs)(t.p,{children:["Ensure cloud storage credentials are set properly as environment variables, e.g., ",(0,i.jsx)(t.code,{children:"AWS_*"}),", ",(0,i.jsx)(t.code,{children:"AZURE_*"}),", or ",(0,i.jsx)(t.code,{children:"GOOGLE_*"}),".\nRelevant storage environment variables will then be picked up. The target table's base uri with schemes such\nas ",(0,i.jsx)(t.code,{children:"s3://"}),", ",(0,i.jsx)(t.code,{children:"az://"}),", or ",(0,i.jsx)(t.code,{children:"gs://"})," will be processed accordingly."]}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, you can pass the storage configuration as options via Table APIs."}),"\n",(0,i.jsx)(t.h4,{id:"python-4",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from hudi import HudiTableBuilder\n\nhudi_table = (\n    HudiTableBuilder\n    .from_base_uri("s3://bucket/trips_table")\n    .with_option("aws_region", "us-west-2")\n    .build()\n)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"rust-4",children:"Rust"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'use hudi::table::builder::TableBuilder as HudiTableBuilder;\n\nasync fn main() -> Result<()> {\n    let hudi_table = \n        HudiTableBuilder::from_base_uri("s3://bucket/trips_table")\n        .with_option("aws_region", "us-west-2")\n        .build().await?;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsxs)(t.p,{children:["Check out the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/hudi-rs/blob/main/CONTRIBUTING.md",children:"contributing guide"})," for all the details about making contributions to the project."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}},65537:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),i=n(34164),a=n(65627),s=n(56347),l=n(50372),o=n(30604),d=n(11861),c=n(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[d,u]=b({queryString:n,groupId:i}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),f=(()=>{const e=d??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(d(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:u,onClick:c,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function v(e){const t=(0,x.A)();return(0,g.jsx)(_,{...e,children:u(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}}}]);