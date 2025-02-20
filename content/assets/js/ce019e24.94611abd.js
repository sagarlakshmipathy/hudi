"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[77174],{28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var a=i(96540);const l={},n=a.createContext(l);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(n.Provider,{value:t},e.children)}},37529:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"rollbacks","title":"Auto Rollbacks","description":"Your pipelines could fail due to numerous reasons like crashes, valid bugs in the code, unavailability of any external","source":"@site/versioned_docs/version-1.0.0/rollbacks.md","sourceDirName":".","slug":"/rollbacks","permalink":"/docs/1.0.0/rollbacks","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.0/rollbacks.md","tags":[],"version":"1.0.0","frontMatter":{"title":"Auto Rollbacks","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Indexing","permalink":"/docs/1.0.0/metadata_indexing"},"next":{"title":"Marker Mechanism","permalink":"/docs/1.0.0/markers"}}');var l=i(74848),n=i(28453);const r={title:"Auto Rollbacks",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},o=void 0,s={},c=[{value:"Handling partially failed commits",id:"handling-partially-failed-commits",level:3},{value:"Rolling back partially failed commits for a single writer",id:"rolling-back-partially-failed-commits-for-a-single-writer",level:3},{value:"Rolling back of partially failed commits w/ multi-writers",id:"rolling-back-of-partially-failed-commits-w-multi-writers",level:3},{value:"Heartbeats",id:"heartbeats",level:4},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Your pipelines could fail due to numerous reasons like crashes, valid bugs in the code, unavailability of any external\nthird-party system (like a lock provider), or user could kill the job midway to change some properties. A well-designed\nsystem should detect such partially failed commits, ensure dirty data is not exposed to the queries, and clean them up.\nHudi's rollback mechanism takes care of cleaning up such failed writes."}),"\n",(0,l.jsx)(t.p,{children:'Hudi\u2019s timeline forms the core for reader and writer isolation. If a commit has not transitioned to complete as per the\nhudi timeline, the readers will ignore the data from the respective write. And so partially failed writes are never read\nby any readers (for all query types). But the curious question is, how is the partially written data eventually deleted?\nDoes it require manual command to be executed from time to time or should it be automatically handled by the system? This\npage presents insights on how "rollback" in Hudi can automatically clean up handling partially failed writes without\nmanual input from users.'}),"\n",(0,l.jsx)(t.h3,{id:"handling-partially-failed-commits",children:"Handling partially failed commits"}),"\n",(0,l.jsxs)(t.p,{children:["Hudi has a lot of platformization built in so as to ease the operationalization of ",(0,l.jsx)(t.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"lakehouse"}),' tables. One such feature\nis the automatic cleanup of partially failed commits. Users don\u2019t need to run any additional commands to clean up dirty\ndata or the data produced by failed commits. If you continue to write to hudi tables, one of your future commits will\ntake care of cleaning up older data that failed midway during a write/commit. We call this cleanup of a failed commit a\n"rollback". A rollback will revert everything about a commit, including deleting data and removal from the timeline.\nAdditionally, the restore operation utilizes a series rollbacks to undo completed commits.']}),"\n",(0,l.jsx)(t.p,{children:"Let\u2019s zoom in a bit and understand how such cleanups happen and the challenges involved in such cleaning when\nmulti-writers are involved."}),"\n",(0,l.jsx)(t.h3,{id:"rolling-back-partially-failed-commits-for-a-single-writer",children:"Rolling back partially failed commits for a single writer"}),"\n",(0,l.jsx)(t.p,{children:"In case of single writer model, the rollback logic is fairly straightforward. Every action in Hudi's timeline goes\nthrough 3 states, namely requested, inflight and completed. Whenever a new commit starts, hudi checks the timeline\nfor any actions/commits that is not yet committed and that refers to partially failed commit. So, immediately rollback\nis triggered and all dirty data is cleaned up followed by cleaning up the commit instants from the timeline."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.img,{alt:"An example illustration of single writer rollbacks",src:i(95929).A+"",width:"3598",height:"2099"}),"\n",(0,l.jsx)(t.em,{children:"Figure 1: single writer with eager rollbacks"})]}),"\n",(0,l.jsx)(t.h3,{id:"rolling-back-of-partially-failed-commits-w-multi-writers",children:"Rolling back of partially failed commits w/ multi-writers"}),"\n",(0,l.jsx)(t.p,{children:"The challenging part is when multi-writers are invoked. Just because a commit is still non-completed as per the\ntimeline, it does not mean current writer (new) can assume that it's a partially failed commit. Because, there could be\na concurrent writer that\u2019s currently making progress. Hudi has been designed to not have any centralized server\nrunning always and in such a case Hudi has an ingenious way to deduce such partially failed writes."}),"\n",(0,l.jsx)(t.h4,{id:"heartbeats",children:"Heartbeats"}),"\n",(0,l.jsx)(t.p,{children:"We are leveraging heartbeats to our rescue here. Each commit will keep emitting heartbeats from the start of the\nwrite until its completion. During rollback deduction, Hudi checks for heartbeat timeouts for all ongoing or incomplete\ncommits and detects partially failed commits on such timeouts. For any ongoing commits, the heartbeat should not\nhave elapsed the timeout. For example, if a commit\u2019s heartbeat is not updated for 10+ mins, we can safely assume the\noriginal writer has failed/crashed and is the incomplete commit is safe to clean up. So, the rollbacks in case of\nmulti-writers are lazy and is not eager as we saw with single writer model. But it is still automatic and users don\u2019t\nneed to execute any explicit command to trigger such cleanup of failed writes. When such lazy rollback kicks in, both\ndata files and timeline files for the failed writes are deleted."}),"\n",(0,l.jsx)(t.p,{children:"Hudi employs a simple yet effective heartbeat mechanism to notify that a commit is still making progress. A heartbeat\nfile is created for every commit under \u201c.hoodie/.heartbeat/\u201d (for eg, \u201c.hoodie/.heartbeat/20230819183853177\u201d).\nThe writer will start a background thread which will keep updating this heartbeat file at a regular cadence to refresh\nthe last modification time of the file. So, checking for last modification time of the heartbeat file gives us\ninformation whether the writer that started the commit of interest is still making progress or not. On completion of\nthe commit, the heartbeat file is deleted. Or if the write failed midway, the last modification time of the heartbeat\nfile is no longer updated, so other writers can deduce the failed write after a period of time elapses."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.img,{alt:"An example illustration of multi writer rollbacks",src:i(78292).A+"",width:"3819",height:"2955"}),"\n",(0,l.jsx)(t.em,{children:"Figure 2: multi-writer with lazy cleaning of failed commits"})]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsx)("h3",{children:"Videos"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Vi25q4vzogs",children:"How to Rollback to Previous Checkpoint during Disaster in Apache Hudi using Glue 4.0 Demo"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},78292:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/rollback2_new-43ff68c4c2dfd94e6a52437f39d29c6e.png"},95929:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/Rollback_1-c87400434eae44437bd9734b62665a83.png"}}]);