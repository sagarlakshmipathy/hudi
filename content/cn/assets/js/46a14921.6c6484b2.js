"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[91449],{28453:(e,r,a)=>{a.d(r,{R:()=>l,x:()=>i});var n=a(96540);const t={},s=n.createContext(t);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(s.Provider,{value:r},e.children)}},65537:(e,r,a)=>{a.d(r,{A:()=>y});var n=a(96540),t=a(34164),s=a(65627),l=a(56347),i=a(50372),o=a(30604),u=a(11861),c=a(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:a}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:a,attributes:n,default:t}}=e;return{value:r,label:a,attributes:n,default:t}}))}(a);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function f(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:a}=e;const t=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})}),[s,t])]}function m(e){const{defaultValue:r,queryString:a=!1,groupId:t}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[u,d]=p({queryString:a,groupId:t}),[m,b]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,c.Dv)(a);return[t,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),v=(()=>{const e=u??m;return f({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function g(e){let{className:r,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,a=o.indexOf(r),t=i[a].value;t!==n&&(u(r),l(t))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;r=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;r=o[a]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},r),children:i.map((e=>{let{value:r,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...s,className:(0,t.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===r}),children:a??r},r)}))})}function j(e){let{lazy:r,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function w(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function y(e){const r=(0,b.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(r))}},68954:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"release-1.0.1","title":"Release 1.0.1","description":"Release 1.0.1 (docs)","source":"@site/releases/release-1.0.1.md","sourceDirName":".","slug":"/release-1.0.1","permalink":"/cn/releases/release-1.0.1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Release 1.0.1","sidebar_position":1,"layout":"releases","toc":true,"last_modified_at":"2024-02-10T21:00:00.000Z"},"sidebar":"releases","previous":{"title":"Download","permalink":"/cn/releases/download"},"next":{"title":"Release 1.0.0","permalink":"/cn/releases/release-1.0.0"}}');var t=a(74848),s=a(28453);a(65537),a(79329);const l={title:"Release 1.0.1",sidebar_position:1,layout:"releases",toc:!0,last_modified_at:new Date("2024-02-10T21:00:00.000Z")},i=void 0,o={},u=[{value:"Release 1.0.1 (docs)",id:"release-101-docs",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function c(e){const r={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h2,{id:"release-101-docs",children:[(0,t.jsx)(r.a,{href:"https://github.com/apache/hudi/releases/tag/release-1.0.1",children:"Release 1.0.1"})," (",(0,t.jsx)(r.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,t.jsx)(r.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"This release (1.0.1) does not introduce any new table version, thus no migration is needed if you are on 1.0.0."}),"\n",(0,t.jsxs)(r.li,{children:["If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,t.jsx)(r.a,{href:"/releases/release-0.6.0",children:"0.6.0"}),",\n",(0,t.jsx)(r.a,{href:"/releases/release-0.9.0",children:"0.9.0"}),", ",(0,t.jsx)(r.a,{href:"/releases/release-0.10.0",children:"0.10.0"}),",\n",(0,t.jsx)(r.a,{href:"/releases/release-0.11.0",children:"0.11.0"}),", ",(0,t.jsx)(r.a,{href:"/releases/release-0.12.0",children:"0.12.0"}),", ",(0,t.jsx)(r.a,{href:"/releases/release-0.13.0",children:"0.13.0"}),",\n",(0,t.jsx)(r.a,{href:"/releases/release-0.14.0",children:"0.14.0"})," and ",(0,t.jsx)(r.a,{href:"/releases/release-1.0.0",children:"1.0.0"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,t.jsx)(r.p,{children:"1.0.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"DeltaStreamer"}),"\n",(0,t.jsx)(r.li,{children:"Spark SQL"}),"\n",(0,t.jsx)(r.li,{children:"Spark datasource writer"}),"\n",(0,t.jsx)(r.li,{children:"Table services"}),"\n",(0,t.jsx)(r.li,{children:"Backwards compatible writer"}),"\n",(0,t.jsx)(r.li,{children:"Flink engine"}),"\n",(0,t.jsx)(r.li,{children:"Unit, functional, integration tests and CI"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,t.jsxs)(r.p,{children:["The raw release notes are available ",(0,t.jsx)(r.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12355195",children:"here"})]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["1.0.1 release also contains all the new features and bug fixes from 1.0.0, of which the release notes are ",(0,t.jsx)(r.a,{href:"/releases/release-1.0.0",children:"here"})]})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},79329:(e,r,a)=>{a.d(r,{A:()=>l});a(96540);var n=a(34164);const t={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:r,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,l),hidden:a,children:r})}}}]);