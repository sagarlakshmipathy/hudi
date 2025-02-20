"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[20951],{2376:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"timeline","title":"Timeline","description":"At its core, Hudi maintains a timeline which is a log of all actions performed on the table at different instants of time that helps provide instantaneous views of the table,","source":"@site/versioned_docs/version-0.14.1/timeline.md","sourceDirName":".","slug":"/timeline","permalink":"/docs/0.14.1/timeline","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/timeline.md","tags":[],"version":"0.14.1","frontMatter":{"title":"Timeline","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Docker Demo","permalink":"/docs/0.14.1/docker_demo"},"next":{"title":"Table & Query Types","permalink":"/docs/0.14.1/table_types"}}');var s=i(74848),a=i(28453);const o={title:"Timeline",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},r=void 0,l={},c=[{value:"Actions",id:"actions",level:3},{value:"States",id:"states",level:3},{value:"Active and Archived timeline",id:"active-and-archived-timeline",level:3},{value:"LSM Timeline",id:"lsm-timeline",level:4},{value:"Archival Configs",id:"archival-configs",level:3},{value:"Spark write client configs",id:"spark-write-client-configs",level:4},{value:"Flink Options",id:"flink-options",level:4}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["At its core, Hudi maintains a ",(0,s.jsx)(t.code,{children:"timeline"})," which is a log of all actions performed on the table at different ",(0,s.jsx)(t.code,{children:"instants"})," of time that helps provide instantaneous views of the table,\nwhile also efficiently supporting retrieval of data in the order of arrival. A Hudi instant consists of the following components"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Instant action"})," : Type of action performed on the table"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Instant time"})," : Instant time is typically a timestamp (e.g: 20190117010349), which monotonically increases in the order of action's begin time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"state"})," : current state of the instant"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Hudi guarantees that the actions performed on the timeline are atomic & timeline consistent based on the instant time.\nAtomicity is achieved by relying on the atomic puts to the underlying storage to move the write operations through various states in the timeline.\nThis is achieved on the underlying DFS (in the case of S3/Cloud Storage, by an atomic PUT operation) and can be observed by files of the pattern ",(0,s.jsx)(t.code,{children:"<instant>.<action>.<state>"})," in Hudi\u2019s timeline."]}),"\n",(0,s.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(t.p,{children:"Key actions performed include"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"COMMITS"})," - A commit denotes an ",(0,s.jsx)(t.strong,{children:"atomic write"})," of a batch of records into a table."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CLEANS"})," - Background activity that gets rid of older versions of files in the table, that are no longer needed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"DELTA_COMMIT"})," - A delta commit refers to an ",(0,s.jsx)(t.strong,{children:"atomic write"})," of a batch of records into a  MergeOnRead type table, where some/all of the data could be just written to delta logs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"COMPACTION"})," - Background activity to reconcile differential data structures within Hudi e.g: moving updates from row based log files to columnar formats. Internally, compaction manifests as a special commit on the timeline"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ROLLBACK"})," - Indicates that a commit/delta commit was unsuccessful & rolled back, removing any partial files produced during such a write"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SAVEPOINT"}),' - Marks certain file groups as "saved", such that cleaner will not delete them. It helps restore the table to a point on the timeline, in case of disaster/data recovery scenarios.']}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"states",children:"States"}),"\n",(0,s.jsx)(t.p,{children:"Any given instant can be\nin one of the following states"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"REQUESTED"})," - Denotes an action has been scheduled, but has not initiated"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"INFLIGHT"})," - Denotes that the action is currently being performed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"COMPLETED"})," - Denotes completion of an action on the timeline"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["All the actions in requested/inflight states are stored in the active timeline as files named ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.em,{children:"<begin_instant_time>.<action_type>.<requested|inflight>"})}),". Completed actions are stored along with a time that denotes when the action was completed, in a file named ",(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.em,{children:"<begin_instant_time>"}),"<completion_instant_time>.<action_type>._"]}),"."]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:i(20969).A,alt:"hudi_timeline.png"})}),"\n",(0,s.jsxs)(t.p,{children:["Example above shows upserts happenings between 10:00 and 10:20 on a Hudi table, roughly every 5 mins, leaving commit metadata on the Hudi timeline, along\nwith other background cleaning/compactions. One key observation to make is that the commit time indicates the ",(0,s.jsx)(t.code,{children:"arrival time"})," of the data (10:20AM), while the actual data\norganization reflects the actual time or ",(0,s.jsx)(t.code,{children:"event time"}),", the data was intended for (hourly buckets from 07:00). These are two key concepts when reasoning about tradeoffs between latency and completeness of data."]}),"\n",(0,s.jsx)(t.p,{children:"When there is late arriving data (data intended for 9:00 arriving >1 hr late at 10:20), we can see the upsert producing new data into even older time buckets/folders.\nWith the help of the timeline, an incremental query attempting to get all new data that was committed successfully since 10:00 hours, is able to very efficiently consume\nonly the changed files without say scanning all the time buckets > 07:00."}),"\n",(0,s.jsx)(t.h3,{id:"active-and-archived-timeline",children:"Active and Archived timeline"}),"\n",(0,s.jsx)(t.p,{children:"Hudi divides the entire timeline into active and archived timeline. As the name suggests active timeline is consulted all\nthe time to serve metadata on valid data files and to ensure reads on the timeline does not incur unnecessary latencies\nas timeline grows, the active timeline needs to be bounded on the metadata (timeline instants) it can serve. To ensure this,\nafter certain thresholds the archival kicks in to move older timeline events to the archived timeline. In general, archival\ntimeline is never contacted for regular operations of the table and is merely used for book-keeping and debugging purposes.\nAny instants seen under \u201c.hoodie\u201d directory refers to active timeline and those archived goes into \u201c.hoodie/archived\u201d folder."}),"\n",(0,s.jsx)(t.h4,{id:"lsm-timeline",children:"LSM Timeline"}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned above, active timeline has limited log history to be fast, while archived timeline is expensive to access\nduring reads or writes, especially with high write throughput. To overcome this limitation, Hudi introduced the LSM (\nlog-structured merge) tree based timeline. Completed actions, their plans and completion metadata are stored in a more\nscalable LSM tree based archived timeline organized in an ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"archived"})})," storage location under the ",(0,s.jsx)(t.code,{children:".hoodie"})," metadata\npath. The new timeline format is enabled by default and going forward, we will refer to the archived timeline as LSM\ntimeline. It consists of Apache Parquet files with action instant data and bookkeeping metadata files, in the following\nmanner."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"/.hoodie/archived/ \t\t\t\t\t\n\u251c\u2500\u2500 _version_                               <-- stores the manifest version that is current\n\u251c\u2500\u2500 manifest_1                              <-- manifests store list of files in timeline\n\u251c\u2500\u2500 manifest_2                              <-- compactions, cleaning, writes produce new manifest files\n\u251c\u2500\u2500 ...                                      \n\u251c\u2500\u2500 manifest_<N>                            <-- there can be many manifest files at any given time\n\u251c\u2500\u2500 <min_time>_<max_time>_<level>.parquet   <-- files storing actual action details\n"})}),"\n",(0,s.jsx)(t.p,{children:"One can read more about the details of LSM timeline in Hudi 1.0 specs. To understand it better, here is an example."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:i(91140).A,alt:"lsm_tree.png"})}),"\n",(0,s.jsxs)(t.p,{children:["In the above figure, each level is a tree sorted by instant times. We can see that for a bunch of commits the metadata\nis stored in a parquet file. As and when more commits are accumulated, they get compacted and pushed down to lower level\nof the tree. Each new operation to the timeline yields a new snapshot version. The advantage of such a structure is that\nwe can keep the top level in memory, and still load the remaining levels efficiently from the disk if we need to walk\nback longer history. The LSM timeline compaction frequency is controlled by",(0,s.jsx)(t.code,{children:"hoodie.timeline.compaction.batch.size"})," i.e.\nfor every ",(0,s.jsx)(t.em,{children:"N"})," parquet files in the current level, they are merged and flush as a compacted file in the next level."]}),"\n",(0,s.jsx)(t.h3,{id:"archival-configs",children:"Archival Configs"}),"\n",(0,s.jsx)(t.p,{children:"Basic configurations that control archival."}),"\n",(0,s.jsx)(t.h4,{id:"spark-write-client-configs",children:"Spark write client configs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.keep.max.commits"}),(0,s.jsx)(t.td,{children:"30 (Optional)"}),(0,s.jsx)(t.td,{children:"Archiving service moves older entries from timeline into an archived log after each write, to keep the metadata overhead constant, even as the table size grows. This config controls the maximum number of instants to retain in the active timeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.keep.min.commits"}),(0,s.jsx)(t.td,{children:"20 (Optional)"}),(0,s.jsx)(t.td,{children:"Similar to hoodie.keep.max.commits, but controls the minimum number of instants to retain in the active timeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.timeline.compaction.batch.size"}),(0,s.jsx)(t.td,{children:"10 (Optional)"}),(0,s.jsx)(t.td,{children:"Controls the number of parquet files to compact in a single compaction run at the current level of the LSM tree."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["For more advanced configs refer ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Archival-Configs-advanced-configs",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"flink-options",children:"Flink Options"}),"\n",(0,s.jsx)(t.p,{children:"Flink jobs using the SQL can be configured through the options in WITH clause. The actual datasource level configs are listed below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"archive.max_commits"}),(0,s.jsx)(t.td,{children:"50 (Optional)"}),(0,s.jsxs)(t.td,{children:["Max number of commits to keep before archiving older commits into a sequential log, default 50",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"Config Param: ARCHIVE_MAX_COMMITS"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"archive.min_commits"}),(0,s.jsx)(t.td,{children:"40 (Optional)"}),(0,s.jsxs)(t.td,{children:["Min number of commits to keep before archiving older commits into a sequential log, default 40",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"Config Param: ARCHIVE_MIN_COMMITS"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.timeline.compaction.batch.size"}),(0,s.jsx)(t.td,{children:"10 (Optional)"}),(0,s.jsx)(t.td,{children:"Controls the number of parquet files to compact in a single compaction run at the current level of the LSM tree."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Refer ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Flink-Options",children:"here"})," for more details."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},20969:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/hudi_timeline-bf5d8c5e59180434796d82af2b783e6c.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}},91140:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/lsm_tree-0a069798a1196c1c71330abcb7ff3581.png"}}]);