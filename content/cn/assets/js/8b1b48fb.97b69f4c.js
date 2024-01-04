"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19266:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));a(26396),a(58215);const i={title:"Release 0.11.1",sidebar_position:10,layout:"releases",toc:!0,last_modified_at:new Date("2022-06-20T06:30:00.000Z")},s="[Release 0.11.1](https://github.com/apache/hudi/releases/tag/release-0.11.1) ([docs](/docs/quick-start-guide))",l={unversionedId:"release-0.11.1",id:"release-0.11.1",title:"Release 0.11.1",description:"Migration Guide",source:"@site/releases/release-0.11.1.md",sourceDirName:".",slug:"/release-0.11.1",permalink:"/cn/releases/release-0.11.1",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Release 0.11.1",sidebar_position:10,layout:"releases",toc:!0,last_modified_at:"2022-06-20T06:30:00.000Z"},sidebar:"releases",previous:{title:"Release 0.12.0",permalink:"/cn/releases/release-0.12.0"},next:{title:"Release 0.11.0",permalink:"/cn/releases/release-0.11.0"}},o=[{value:"Migration Guide",id:"migration-guide",children:[],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Addressing Performance Regression in 0.11.0",id:"addressing-performance-regression-in-0110",children:[],level:3},{value:"Key generator for Spark SQL",id:"key-generator-for-spark-sql",children:[],level:3},{value:"Query with Schema evolution",id:"query-with-schema-evolution",children:[],level:3},{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2},{value:"Known Regressions",id:"known-regressions",children:[],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],u={toc:o},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-0111-docs"},(0,r.kt)("a",{parentName:"h1",href:"https://github.com/apache/hudi/releases/tag/release-0.11.1"},"Release 0.11.1")," (",(0,r.kt)("a",{parentName:"h1",href:"/docs/quick-start-guide"},"docs"),")"),(0,r.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This release (0.11.1) does not introduce any new table version, thus no migration is needed if you are on 0.11.0."),(0,r.kt)("li",{parentName:"ul"},"If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.6.0#migration-guide-for-this-release"},"0.6.0"),",\n",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.9.0#migration-guide-for-this-release"},"0.9.0"),", ",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.10.0#migration-guide"},"0.10.0"),", and\n",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.11.0#migration-guide"},"0.11.0"),".")),(0,r.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,r.kt)("h3",{id:"addressing-performance-regression-in-0110"},"Addressing Performance Regression in 0.11.0"),(0,r.kt)("p",null,"In 0.11.0 release, with the newly added support for Spark SQL features, the following performance regressions were\ninadvertently introduced:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Partition pruning for some of the COW tables is not applied properly"),(0,r.kt)("li",{parentName:"ul"},"Spark SQL query caching (which caches parsed and resolved queries) was not working correctly resulting in additional"),(0,r.kt)("li",{parentName:"ul"},"overhead to re-analyze the query every time when it's executed (listing the table contents, etc.)")),(0,r.kt)("p",null,"All of these issues have been addressed in 0.11.1 and are validated to be resolved by benchmarking the set of changes\non TPC-DS against 0.10.1."),(0,r.kt)("h3",{id:"key-generator-for-spark-sql"},"Key generator for Spark SQL"),(0,r.kt)("p",null,"Prior to this release, Spark SQL uses a different default key generator compared with data source writers, which brings\nin confusion and errors.  In 0.11.1, Spark SQL now aligns with the data source to use the same logic for determining\nthe key generator."),(0,r.kt)("h3",{id:"query-with-schema-evolution"},"Query with Schema evolution"),(0,r.kt)("p",null,"Due to necessary changes in addressing the performance regression in 0.11.0, when reading a Hudi table with Schema\nEvolution feature enabled, the query must have the config ",(0,r.kt)("inlineCode",{parentName:"p"},"hoodie.schema.on.read.enable")," to be explicitly set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\nto ensure proper schema resolution and data reading."),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("p",null,"0.11.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DeltaStreamer"),(0,r.kt)("li",{parentName:"ul"},"Table config"),(0,r.kt)("li",{parentName:"ul"},"Table services"),(0,r.kt)("li",{parentName:"ul"},"Metadata table"),(0,r.kt)("li",{parentName:"ul"},"Spark SQL support"),(0,r.kt)("li",{parentName:"ul"},"Spark, GCP bundles"),(0,r.kt)("li",{parentName:"ul"},"Presto support"),(0,r.kt)("li",{parentName:"ul"},"Hive Sync and Meta Sync"),(0,r.kt)("li",{parentName:"ul"},"Flink engine"),(0,r.kt)("li",{parentName:"ul"},"Unit, functional, integration tests and CI")),(0,r.kt)("h2",{id:"known-regressions"},"Known Regressions"),(0,r.kt)("p",null,"We discovered a regression in Hudi 0.11.1 release related to metadata table and timeline server interplay with streaming ingestion pipelines."),(0,r.kt)("p",null,"The FileSystemView that Hudi maintains internally could go out of sync due to a occasional race conditions when table services are involved\n(compaction, clustering) and could result in updates and deletes routed to older file versions and hence resulting in missed updates and deletes."),(0,r.kt)("p",null,"Here are the user-flows that could potentially be impacted with this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This impacts pipelines using Deltastreamer in ",(0,r.kt)("strong",{parentName:"li"},"continuous mode")," (sync once is not impacted), Spark streaming, or if you have been directly\nusing write client across batches/commits instead of the standard ways to write to Hudi. In other words, batch writes should not be impacted."),(0,r.kt)("li",{parentName:"ul"},"Among these write models, this could have an impact only when table services are enabled.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"COW: clustering enabled (inline or async)"),(0,r.kt)("li",{parentName:"ul"},"MOR: compaction enabled (by default, inline or async)"))),(0,r.kt)("li",{parentName:"ul"},"Also, the impact is applicable only when metadata table is enabled, and timeline server is enabled (which are defaults as of 0.12.1)")),(0,r.kt)("p",null,"Based on some production data, we expect this issue might impact roughly < 1% of updates to be missed, since its a race condition\nand table services are generally scheduled once every N commits. The percentage of update misses could be even less if the\nfrequency of table services is less."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-5863"},"Here")," is the jira for the issue of interest and the fix has already been landed in master.\n0.12.3 should have the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/8079"},"fix"),". Until we have a 0.12.3 release, we recommend you to disable metadata table\n(",(0,r.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.enable=false"),") to mitigate the issue."),(0,r.kt)("p",null,"Sorry about the inconvenience caused."),(0,r.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,r.kt)("p",null,"The raw release notes are available ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351597"},"here")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"0.11.1 release also contains all the new features and bug fixes from 0.11.0, of which the release notes are ",(0,r.kt)("a",{parentName:"p",href:"/releases/release-0.11.0"},"here")))))}d.isMDXComponent=!0},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),i=a(72389),s=a(79443);const l=function(){const e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=a(53810),u=a(86010);const c={tabItem:"tabItem_vU9c"};function d(e){const{lazy:t,block:a,defaultValue:i,values:s,groupId:d,className:p}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=s??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.lx)(m,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0]?.props.value;if(null!==g&&!m.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=l(),[k,y]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,o.o5)();if(null!=d){const e=v[d];null!=e&&e!==k&&m.some((t=>t.value===e))&&y(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),n=m[a].value;n!==k&&(N(t),y(n),null!=d&&b(d,n))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},p)},m.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:O,onClick:O},i,{className:(0,u.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);