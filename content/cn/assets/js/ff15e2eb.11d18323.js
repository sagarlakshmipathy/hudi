"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[22501],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(g,s(s({ref:a},u),{},{components:t})):r.createElement(g,s({ref:a},u))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57358:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=t(58168),n=(t(96540),t(15680));t(3593),t(26982);const l={title:"Release 0.14.1",sidebar_position:2,layout:"releases",toc:!0,last_modified_at:new Date("2023-05-25T21:00:00.000Z")},s=void 0,i={unversionedId:"release-0.14.1",id:"release-0.14.1",title:"Release 0.14.1",description:"Release 0.14.1 (docs)",source:"@site/releases/release-0.14.1.md",sourceDirName:".",slug:"/release-0.14.1",permalink:"/cn/releases/release-0.14.1",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Release 0.14.1",sidebar_position:2,layout:"releases",toc:!0,last_modified_at:"2023-05-25T21:00:00.000Z"},sidebar:"releases",previous:{title:"Download",permalink:"/cn/releases/download"},next:{title:"Release 1.0.0-beta1",permalink:"/cn/releases/release-1.0.0-beta1"}},o=[{value:"Release 0.14.1 (docs)",id:"release-0141-docs",children:[],level:2},{value:"Migration Guide",id:"migration-guide",children:[{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2},{value:"Known Regressions",id:"known-regressions",children:[],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],c={toc:o},u="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"release-0141-docs"},(0,n.yg)("a",{parentName:"h2",href:"https://github.com/apache/hudi/releases/tag/release-0.14.1"},"Release 0.14.1")," (",(0,n.yg)("a",{parentName:"h2",href:"/docs/quick-start-guide"},"docs"),")"),(0,n.yg)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"This release (0.14.1) does not introduce any new table version, thus no migration is needed if you are on 0.14.0."),(0,n.yg)("li",{parentName:"ul"},"If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,n.yg)("a",{parentName:"li",href:"/releases/release-0.6.0"},"0.6.0"),",\n",(0,n.yg)("a",{parentName:"li",href:"/releases/release-0.9.0"},"0.9.0"),", ",(0,n.yg)("a",{parentName:"li",href:"/releases/release-0.10.0"},"0.10.0"),",\n",(0,n.yg)("a",{parentName:"li",href:"/releases/release-0.11.0"},"0.11.0"),", ",(0,n.yg)("a",{parentName:"li",href:"/releases/release-0.12.0"},"0.12.0"),", ",(0,n.yg)("a",{parentName:"li",href:"/releases/release-0.13.0"},"0.13.0"),", and\n",(0,n.yg)("a",{parentName:"li",href:"/releases/release-0.14.0"},"0.14.0"))),(0,n.yg)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.yg)("p",null,"0.14.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"DeltaStreamer"),(0,n.yg)("li",{parentName:"ul"},"Spark SQL"),(0,n.yg)("li",{parentName:"ul"},"Spark datasource writer"),(0,n.yg)("li",{parentName:"ul"},"Table services"),(0,n.yg)("li",{parentName:"ul"},"Meta Syncs"),(0,n.yg)("li",{parentName:"ul"},"Flink engine"),(0,n.yg)("li",{parentName:"ul"},"Unit, functional, integration tests and CI")),(0,n.yg)("h2",{id:"known-regressions"},"Known Regressions"),(0,n.yg)("p",null,"We discovered a regression in Hudi 0.14.1 release related to Complex Key gen when record key consists of one field.\nIt can silently ingest duplicates if table is upgraded from previous versions."),(0,n.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.yg)("div",{parentName:"div",className:"admonition-heading"},(0,n.yg)("h5",{parentName:"div"},(0,n.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.yg)("div",{parentName:"div",className:"admonition-content"},(0,n.yg)("p",{parentName:"div"},"Avoid upgrading any existing table to 0.14.1 if you are using ComplexKeyGenerator and number of fields in record key is 1."))),(0,n.yg)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,n.yg)("p",null,"The raw release notes are available ",(0,n.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12353493"},"here")),(0,n.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.yg)("div",{parentName:"div",className:"admonition-heading"},(0,n.yg)("h5",{parentName:"div"},(0,n.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.yg)("div",{parentName:"div",className:"admonition-content"},(0,n.yg)("p",{parentName:"div"},"0.14.1 release also contains all the new features and bug fixes from 0.14.0, of which the release notes are ",(0,n.yg)("a",{parentName:"p",href:"/releases/release-0.14.0"},"here")))))}d.isMDXComponent=!0},26982:(e,a,t)=>{t.d(a,{A:()=>n});var r=t(96540);const n=function(e){let{children:a,hidden:t,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},3593:(e,a,t)=>{t.d(a,{A:()=>p});var r=t(58168),n=t(96540),l=t(92303),s=t(48555);const i=function(){const e=(0,n.useContext)(s.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=t(91211),c=t(20053);const u={tabItem:"tabItem_vU9c"};function d(e){const{lazy:a,block:t,defaultValue:l,values:s,groupId:d,className:p}=e,m=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=s??m.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),f=(0,o.XI)(g,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??m.find((e=>e.props.default))?.props.value??m[0]?.props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=i(),[b,N]=(0,n.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.a_)();if(null!=d){const e=h[d];null!=e&&e!==b&&g.some((a=>a.value===e))&&N(e)}const O=e=>{const a=e.currentTarget,t=w.indexOf(a),r=g[t].value;r!==b&&(x(a),N(r),null!=d&&v(d,r))},k=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]||w[w.length-1];break}}a?.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":t},p)},g.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:b===a?0:-1,"aria-selected":b===a,key:a,ref:e=>w.push(e),onKeyDown:k,onFocus:O,onClick:O},l,{className:(0,c.A)("tabs__item",u.tabItem,l?.className,{"tabs__item--active":b===a})}),t??a)}))),a?(0,n.cloneElement)(m.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==b})))))}function p(e){const a=(0,l.A)();return n.createElement(d,(0,r.A)({key:String(a)},e))}}}]);