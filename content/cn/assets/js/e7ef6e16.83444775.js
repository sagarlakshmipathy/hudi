"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[28920],{28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}},66717:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"write_operations","title":"Write Operations","description":"It may be helpful to understand the different write operations of Hudi and how best to leverage them. These operations","source":"@site/versioned_docs/version-0.11.1/write_operations.md","sourceDirName":".","slug":"/write_operations","permalink":"/cn/docs/0.11.1/write_operations","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/write_operations.md","tags":[],"version":"0.11.1","frontMatter":{"title":"Write Operations","summary":"In this page, we describe the different write operations in Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Metadata Table","permalink":"/cn/docs/0.11.1/metadata"},"next":{"title":"Schema Evolution","permalink":"/cn/docs/0.11.1/schema_evolution"}}');var s=n(74848),r=n(28453);const o={title:"Write Operations",summary:"In this page, we describe the different write operations in Hudi.",toc:!0,last_modified_at:null},l=void 0,a={},d=[{value:"Operation Types",id:"operation-types",level:2},{value:"UPSERT",id:"upsert",level:3},{value:"INSERT",id:"insert",level:3},{value:"BULK_INSERT",id:"bulk_insert",level:3},{value:"DELETE",id:"delete",level:3},{value:"Writing path",id:"writing-path",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["It may be helpful to understand the different write operations of Hudi and how best to leverage them. These operations\ncan be chosen/changed across each commit/deltacommit issued against the table. See the ",(0,s.jsx)(i.a,{href:"/docs/writing_data",children:"How To docs on Writing Data"}),"\nto see more examples."]}),"\n",(0,s.jsx)(i.h2,{id:"operation-types",children:"Operation Types"}),"\n",(0,s.jsx)(i.h3,{id:"upsert",children:"UPSERT"}),"\n",(0,s.jsx)(i.p,{children:"This is the default operation where the input records are first tagged as inserts or updates by looking up the index.\nThe records are ultimately written after heuristics are run to determine how best to pack them on storage to optimize for things like file sizing.\nThis operation is recommended for use-cases like database change capture where the input almost certainly contains updates. The target table will never show duplicates."}),"\n",(0,s.jsx)(i.h3,{id:"insert",children:"INSERT"}),"\n",(0,s.jsx)(i.p,{children:"This operation is very similar to upsert in terms of heuristics/file sizing but completely skips the index lookup step. Thus, it can be a lot faster than upserts\nfor use-cases like log de-duplication (in conjunction with options to filter duplicates mentioned below). This is also suitable for use-cases where the table can tolerate duplicates, but just\nneed the transactional writes/incremental pull/storage management capabilities of Hudi."}),"\n",(0,s.jsx)(i.h3,{id:"bulk_insert",children:"BULK_INSERT"}),"\n",(0,s.jsx)(i.p,{children:"Both upsert and insert operations keep input records in memory to speed up storage heuristics computations faster (among other things) and thus can be cumbersome for\ninitial loading/bootstrapping a Hudi table at first. Bulk insert provides the same semantics as insert, while implementing a sort-based data writing algorithm, which can scale very well for several hundred TBs\nof initial load. However, this just does a best-effort job at sizing files vs guaranteeing file sizes like inserts/upserts do."}),"\n",(0,s.jsx)(i.h3,{id:"delete",children:"DELETE"}),"\n",(0,s.jsx)(i.p,{children:"Hudi supports implementing two types of deletes on data stored in Hudi tables, by enabling the user to specify a different record payload implementation."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Soft Deletes"})," : Retain the record key and just null out the values for all the other fields.\nThis can be achieved by ensuring the appropriate fields are nullable in the table schema and simply upserting the table after setting these fields to null."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Hard Deletes"})," : A stronger form of deletion is to physically remove any trace of the record from the table. This can be achieved in 3 different ways.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Using DataSource, set ",(0,s.jsx)(i.code,{children:"OPERATION_OPT_KEY"})," to ",(0,s.jsx)(i.code,{children:"DELETE_OPERATION_OPT_VAL"}),". This will remove all the records in the DataSet being submitted."]}),"\n",(0,s.jsxs)(i.li,{children:["Using DataSource, set ",(0,s.jsx)(i.code,{children:"PAYLOAD_CLASS_OPT_KEY"})," to ",(0,s.jsx)(i.code,{children:'"org.apache.hudi.EmptyHoodieRecordPayload"'}),". This will remove all the records in the DataSet being submitted."]}),"\n",(0,s.jsxs)(i.li,{children:["Using DataSource or DeltaStreamer, add a column named ",(0,s.jsx)(i.code,{children:"_hoodie_is_deleted"})," to DataSet. The value of this column must be set to ",(0,s.jsx)(i.code,{children:"true"})," for all the records to be deleted and either ",(0,s.jsx)(i.code,{children:"false"})," or left null for any records which are to be upserted."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"writing-path",children:"Writing path"}),"\n",(0,s.jsx)(i.p,{children:"The following is an inside look on the Hudi write path and the sequence of events that occur during a write."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/configurations#hoodiecombinebeforeinsert",children:"Deduping"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"First your input records may have duplicate keys within the same batch and duplicates need to be combined or reduced by key."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"indexing",children:"Index Lookup"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Next, an index lookup is performed to try and match the input records to identify which file groups they belong to."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/file_sizing",children:"File Sizing"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Then, based on the average size of previous commits, Hudi will make a plan to add enough records to a small file to get it close to the configured maximum limit."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"file_layouts",children:"Partitioning"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"We now arrive at partitioning where we decide what file groups certain updates and inserts will be placed in or if new file groups will be created"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Write I/O","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Now we actually do the write operations which is either creating a new base file, appending to the log file,\nor versioning an existing base file."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Update ",(0,s.jsx)(i.a,{href:"indexing",children:"Index"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Now that the write is performed, we will go back and update the index."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Commit","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Finally we commit all of these changes atomically. (A ",(0,s.jsx)(i.a,{href:"writing_data#commit-notifications",children:"callback notification"})," is exposed)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"hoodie_cleaner",children:"Clean"})," (if needed)","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Following the commit, cleaning is invoked if needed."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/compaction",children:"Compaction"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"If you are using MOR tables, compaction will either run inline, or be scheduled asynchronously"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Archive","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Lastly, we perform an archival step which moves old ",(0,s.jsx)(i.a,{href:"/docs/timeline",children:"timeline"})," items to an archive folder."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);