"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[63332],{28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(96540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}},42565:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/write_path_cluster-be0852db2158784de03bfc6d4a864d14.png"},84952:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"write_operations","title":"Write Operations","description":"It may be helpful to understand the different write operations supported by Hudi and how best to leverage them. These operations","source":"@site/docs/write_operations.md","sourceDirName":".","slug":"/write_operations","permalink":"/cn/docs/next/write_operations","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/write_operations.md","tags":[],"version":"current","frontMatter":{"title":"Write Operations","summary":"In this page, we describe the different write operations in Hudi.","toc":true,"last_modified_at":null},"sidebar":"docs","previous":{"title":"Storage Layouts","permalink":"/cn/docs/next/storage_layouts"},"next":{"title":"Table & Query Types","permalink":"/cn/docs/next/table_types"}}');var r=i(74848),n=i(28453);const o={title:"Write Operations",summary:"In this page, we describe the different write operations in Hudi.",toc:!0,last_modified_at:null},a=void 0,d={},l=[{value:"Operation Types",id:"operation-types",level:2},{value:"UPSERT",id:"upsert",level:3},{value:"INSERT",id:"insert",level:3},{value:"BULK_INSERT",id:"bulk_insert",level:3},{value:"DELETE",id:"delete",level:3},{value:"BOOTSTRAP",id:"bootstrap",level:3},{value:"INSERT_OVERWRITE",id:"insert_overwrite",level:3},{value:"INSERT_OVERWRITE_TABLE",id:"insert_overwrite_table",level:3},{value:"DELETE_PARTITION",id:"delete_partition",level:3},{value:"Configs",id:"configs",level:2},{value:"Write path",id:"write-path",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"It may be helpful to understand the different write operations supported by Hudi and how best to leverage them. These operations\ncan be chosen/changed across writes issued against the table. Each write operation maps to an action type on the\ntimeline."}),"\n",(0,r.jsx)(t.p,{children:"At its core, Hudi provides a high-performance storage engine that efficiently implements these operations, on top of the timeline and\nthe storage format. Write operations can be classified into two types, for ease of understanding."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Batch/Bulk operations"}),": Without functionality provided by Hudi, the most common way for writing data relies on overwriting entire\ntables and/or partitions entirely every few hours. For e.g. a job computing aggregates for the given week, will scan the entire data\nperiodically and recompute the results from scratch and publish output by an ",(0,r.jsx)(t.code,{children:"insert_overwrite"}),' operation. Hudi supports all such\nbulk or typical "batch processing" write operations, while providing atomicity and other storage features discussed here.']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Incremental operations"}),": However, Hudi is purpose built to change this processing model into a more incremental approach, as illustrated\nbelow. To do so, the storage engine implements incremental write operations that excel at applying incremental changes to a table. For e.g.\nthe same processing can be now performed by just obtaining changed records from upstream system or a Hudi incremental query, and then directly\nupdating the aggregates on the target table only for specific records that changed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("figure",{children:(0,r.jsx)("img",{className:"docimage",src:i(98897).A,alt:"incr-vs-batch-writes.png"})}),"\n",(0,r.jsx)(t.h2,{id:"operation-types",children:"Operation Types"}),"\n",(0,r.jsx)(t.h3,{id:"upsert",children:"UPSERT"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": ",(0,r.jsx)(t.em,{children:"Incremental"}),", ",(0,r.jsx)(t.strong,{children:"Action"}),": ",(0,r.jsx)(t.em,{children:"COMMIT (CoW), DELTA_COMMIT (MoR)"})]}),"\n",(0,r.jsx)(t.p,{children:"This is the default operation where the input records are first tagged as inserts or updates by looking up the index.\nThe records are ultimately written after heuristics are run to determine how best to pack them on storage to optimize for things like file sizing.\nThis operation is recommended for use-cases like database change capture where the input almost certainly contains updates. The target table will never show duplicates."}),"\n",(0,r.jsx)(t.h3,{id:"insert",children:"INSERT"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": ",(0,r.jsx)(t.em,{children:"Incremental"}),", ",(0,r.jsx)(t.strong,{children:"Action"}),": ",(0,r.jsx)(t.em,{children:"COMMIT (CoW), DELTA_COMMIT (MoR)"})]}),"\n",(0,r.jsx)(t.p,{children:"This operation is very similar to upsert in terms of heuristics/file sizing but completely skips the index lookup step. Thus, it can be a lot faster than upserts\nfor use-cases like log de-duplication (in conjunction with options to filter duplicates mentioned below) by skipping the index tagging step. This is also suitable\nfor use-cases where the table can tolerate duplicates, but just need the transactional writes/incremental query/storage management capabilities of Hudi."}),"\n",(0,r.jsx)(t.h3,{id:"bulk_insert",children:"BULK_INSERT"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": ",(0,r.jsx)(t.em,{children:"Batch"}),", ",(0,r.jsx)(t.strong,{children:"Action"}),": ",(0,r.jsx)(t.em,{children:"COMMIT (CoW), DELTA_COMMIT (MoR)"})]}),"\n",(0,r.jsx)(t.p,{children:"Both upsert and insert operations keep input records in memory to speed up storage heuristics computations faster (among other things) and thus can be cumbersome for\ninitial loading/bootstrapping large amount of data at first. Bulk insert provides the same semantics as insert, while implementing a sort-based data writing algorithm, which can scale very well for several hundred TBs\nof initial load. However, this just does a best-effort job at sizing files vs guaranteeing file sizes like inserts/upserts do."}),"\n",(0,r.jsx)(t.h3,{id:"delete",children:"DELETE"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": ",(0,r.jsx)(t.em,{children:"Incremental"}),", ",(0,r.jsx)(t.strong,{children:"Action"}),": ",(0,r.jsx)(t.em,{children:"COMMIT (CoW), DELTA_COMMIT (MoR)"})]}),"\n",(0,r.jsx)(t.p,{children:"Hudi supports implementing two types of deletes on data stored in Hudi tables, by enabling the user to specify a different record payload implementation."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Soft Deletes"})," : Retain the record key and just null out the values for all the other fields.\nThis can be achieved by ensuring the appropriate fields are nullable in the table schema and simply upserting the table after setting these fields to null."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Hard Deletes"})," : This method entails completely eradicating all evidence of a record from the table, including any duplicates. There are three distinct approaches to accomplish this:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Using DataSource, set ",(0,r.jsx)(t.code,{children:'"hoodie.datasource.write.operation"'})," to ",(0,r.jsx)(t.code,{children:'"delete"'}),". This will remove all the records in the DataSet being submitted."]}),"\n",(0,r.jsxs)(t.li,{children:["Using DataSource, set ",(0,r.jsx)(t.code,{children:"PAYLOAD_CLASS_OPT_KEY"})," to ",(0,r.jsx)(t.code,{children:'"org.apache.hudi.EmptyHoodieRecordPayload"'}),". This will remove all the records in the DataSet being submitted."]}),"\n",(0,r.jsxs)(t.li,{children:["Using DataSource or Hudi Streamer, add a column named ",(0,r.jsx)(t.code,{children:"_hoodie_is_deleted"})," to DataSet. The value of this column must be set to ",(0,r.jsx)(t.code,{children:"true"})," for all the records to be deleted and either ",(0,r.jsx)(t.code,{children:"false"})," or left null for any records which are to be upserted."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"bootstrap",children:"BOOTSTRAP"}),"\n",(0,r.jsxs)(t.p,{children:["Hudi supports migrating your existing large tables into a Hudi table using the ",(0,r.jsx)(t.code,{children:"bootstrap"})," operation. There are a couple of ways to approach this. Please refer to\n",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/migration_guide",children:"bootstrapping page"})," for more details."]}),"\n",(0,r.jsx)(t.h3,{id:"insert_overwrite",children:"INSERT_OVERWRITE"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": ",(0,r.jsx)(t.em,{children:"Batch"}),", ",(0,r.jsx)(t.strong,{children:"Action"}),": ",(0,r.jsx)(t.em,{children:"REPLACE_COMMIT (CoW + MoR)"})]}),"\n",(0,r.jsxs)(t.p,{children:["This operation is used to rerwrite the all the partitions that are present in the input. This operation can be faster\nthan ",(0,r.jsx)(t.code,{children:"upsert"})," for batch ETL jobs, that are recomputing entire target partitions at once (as opposed to incrementally\nupdating the target tables). This is because, we are able to bypass indexing, precombining and other repartitioning\nsteps in the upsert write path completely. This comes in handy if you are doing any backfill or any such type of use-cases."]}),"\n",(0,r.jsx)(t.h3,{id:"insert_overwrite_table",children:"INSERT_OVERWRITE_TABLE"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": ",(0,r.jsx)(t.em,{children:"Batch"}),", ",(0,r.jsx)(t.strong,{children:"Action"}),": ",(0,r.jsx)(t.em,{children:"REPLACE_COMMIT (CoW + MoR)"})]}),"\n",(0,r.jsx)(t.p,{children:"This operation can be used to overwrite the entire table for whatever reason. The Hudi cleaner will eventually clean up\nthe previous table snapshot's file groups asynchronously based on the configured cleaning policy. This operation is much\nfaster than issuing explicit deletes."}),"\n",(0,r.jsx)(t.h3,{id:"delete_partition",children:"DELETE_PARTITION"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": ",(0,r.jsx)(t.em,{children:"Batch"}),", ",(0,r.jsx)(t.strong,{children:"Action"}),": ",(0,r.jsx)(t.em,{children:"REPLACE_COMMIT (CoW + MoR)"})]}),"\n",(0,r.jsxs)(t.p,{children:["In addition to deleting individual records, Hudi supports deleting entire partitions in bulk using this operation.\nDeletion of specific partitions can be done using the config\n",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcewritepartitionstodelete",children:(0,r.jsx)(t.code,{children:"hoodie.datasource.write.partitions.to.delete"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"configs",children:"Configs"}),"\n",(0,r.jsxs)(t.p,{children:["Here are the basic configs relevant to the write operations types mentioned above. Please refer to ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations#Write-Options",children:"Write Options"})," for more Spark based configs and ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Flink-Options",children:"Flink options"})," for Flink based configs."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Spark based configs:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.datasource.write.operation"}),(0,r.jsx)(t.td,{children:"upsert (Optional)"}),(0,r.jsxs)(t.td,{children:["Whether to do upsert, insert or bulk_insert for the write operation. Use bulk_insert to load new data into a table, and there on use upsert/insert. bulk insert uses a disk based write path to scale to load large inputs without need to cache it.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: OPERATION"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.datasource.write.precombine.field"}),(0,r.jsx)(t.td,{children:"ts (Optional)"}),(0,r.jsxs)(t.td,{children:["Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: PRECOMBINE_FIELD"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.combine.before.insert"}),(0,r.jsx)(t.td,{children:"false (Optional)"}),(0,r.jsxs)(t.td,{children:["When inserted records share same key, controls whether they should be first combined (i.e de-duplicated) before writing to storage.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: COMBINE_BEFORE_INSERT"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.datasource.write.insert.drop.duplicates"}),(0,r.jsx)(t.td,{children:"false (Optional)"}),(0,r.jsxs)(t.td,{children:["If set to true, records from the incoming dataframe will not overwrite existing records with the same key during the write operation. This config is deprecated as of 0.14.0. Please use hoodie.datasource.insert.dup.policy instead.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: INSERT_DROP_DUPS"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.bulkinsert.sort.mode"}),(0,r.jsx)(t.td,{children:"NONE (Optional)"}),(0,r.jsxs)(t.td,{children:["org.apache.hudi.execution.bulkinsert.BulkInsertSortMode: Modes for sorting records during bulk insert. ",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"NONE(default)"}),": No sorting. Fastest and matches ",(0,r.jsx)(t.code,{children:"spark.write.parquet()"})," in number of files and overhead."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"GLOBAL_SORT"}),": This ensures best file sizes, with lowest memory overhead at cost of sorting."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"PARTITION_SORT"}),": Strikes a balance by only sorting within a Spark RDD partition, still keeping the memory overhead of writing low. File sizing is not as good as ",(0,r.jsx)(t.code,{children:"GLOBAL_SORT"}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"PARTITION_PATH_REPARTITION"}),": This ensures that the data for a single physical partition in the table is written by the same Spark executor. This should only be used when input data is evenly distributed across different partition paths. If data is skewed (most records are intended for a handful of partition paths among all) then this can cause an imbalance among Spark executors."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"PARTITION_PATH_REPARTITION_AND_SORT"}),": This ensures that the data for a single physical partition in the table is written by the same Spark executor. This should only be used when input data is evenly distributed across different partition paths. Compared to ",(0,r.jsx)(t.code,{children:"PARTITION_PATH_REPARTITION"}),", this sort mode does an additional step of sorting the records based on the partition path within a single Spark partition, given that data for multiple physical partitions can be sent to the same Spark partition and executor. If data is skewed (most records are intended for a handful of partition paths among all) then this can cause an imbalance among Spark executors."]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: BULK_INSERT_SORT_MODE"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.bootstrap.base.path"}),(0,r.jsxs)(t.td,{children:["N/A ",(0,r.jsx)(t.strong,{children:"(Required)"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Applicable only when"})," operation type is ",(0,r.jsx)(t.code,{children:"bootstrap"}),". Base path of the dataset that needs to be bootstrapped as a Hudi table",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: BASE_PATH"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Since Version: 0.6.0"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.bootstrap.mode.selector"}),(0,r.jsx)(t.td,{children:"org.apache.hudi.client.bootstrap.selector.MetadataOnlyBootstrapModeSelector (Optional)"}),(0,r.jsxs)(t.td,{children:["Selects the mode in which each file/partition in the bootstrapped dataset gets bootstrapped",(0,r.jsx)("br",{}),"Possible values:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.MetadataOnlyBootstrapModeSelector"}),": In this mode, the full record data is not copied into Hudi therefore it avoids full cost of rewriting the dataset. Instead, 'skeleton' files containing just the corresponding metadata columns are added to the Hudi table. Hudi relies on the data in the original table and will face data-loss or corruption if files in the original table location are deleted or modified."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.FullRecordBootstrapModeSelector"}),": In this mode, the full record data is copied into hudi and metadata columns are added. A full record bootstrap is functionally equivalent to a bulk-insert. After a full record bootstrap, Hudi will function properly even if the original table is modified or deleted."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector"}),": A bootstrap selector which employs bootstrap mode by specified partitions."]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: MODE_SELECTOR_CLASS_NAME"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Since Version: 0.6.0"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoodie.datasource.write.partitions.to.delete"}),(0,r.jsxs)(t.td,{children:["N/A ",(0,r.jsx)(t.strong,{children:"(Required)"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Applicable only when"})," operation type is ",(0,r.jsx)(t.code,{children:"delete_partition"}),". Comma separated list of partitions to delete. Allows use of wildcard *",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"Config Param: PARTITIONS_TO_DELETE"})]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Flink based configs:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"write.operation"}),(0,r.jsx)(t.td,{children:"upsert (Optional)"}),(0,r.jsxs)(t.td,{children:["The write operation, that this write should do",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"Config Param: OPERATION"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"precombine.field"}),(0,r.jsx)(t.td,{children:"ts (Optional)"}),(0,r.jsxs)(t.td,{children:["Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"Config Param: PRECOMBINE_FIELD"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"write.precombine"}),(0,r.jsx)(t.td,{children:"false (Optional)"}),(0,r.jsxs)(t.td,{children:["Flag to indicate whether to drop duplicates before insert/upsert. By default these cases will accept duplicates, to gain extra performance: 1) insert operation; 2) upsert for MOR table, the MOR table deduplicate on reading",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"Config Param: PRE_COMBINE"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"write.bulk_insert.sort_input"}),(0,r.jsx)(t.td,{children:"true (Optional)"}),(0,r.jsxs)(t.td,{children:["Whether to sort the inputs by specific fields for bulk insert tasks, default true",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"Config Param: WRITE_BULK_INSERT_SORT_INPUT"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"write.bulk_insert.sort_input.by_record_key"}),(0,r.jsx)(t.td,{children:"false (Optional)"}),(0,r.jsxs)(t.td,{children:["Whether to sort the inputs by record keys for bulk insert tasks, default false",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"Config Param: WRITE_BULK_INSERT_SORT_INPUT_BY_RECORD_KEY"})]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"write-path",children:"Write path"}),"\n",(0,r.jsx)(t.p,{children:"The following is an inside look on the Hudi write path and the sequence of events that occur during a write."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/configurations#hoodiecombinebeforeinsert",children:"Deduping"})," : First your input records may have duplicate keys within the same batch and duplicates need to be combined or reduced by key."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"indexes",children:"Index Lookup"})," : Next, an index lookup is performed to try and match the input records to identify which file groups they belong to."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"file_sizing",children:"File Sizing"}),": Then, based on the average size of previous commits, Hudi will make a plan to add enough records to a small file to get it close to the configured maximum limit."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"storage_layouts",children:"Partitioning"}),": We now arrive at partitioning where we decide what file groups certain updates and inserts will be placed in or if new file groups will be created"]}),"\n",(0,r.jsxs)(t.li,{children:["Write I/O ",":Now"," we actually do the write operations which is either creating a new base file, appending to the log file,\nor versioning an existing base file."]}),"\n",(0,r.jsxs)(t.li,{children:["Update ",(0,r.jsx)(t.a,{href:"indexes",children:"Index"}),": Now that the write is performed, we will go back and update the index."]}),"\n",(0,r.jsxs)(t.li,{children:["Commit: Finally we commit all of these changes atomically. (",(0,r.jsx)(t.a,{href:"platform_services_post_commit_callback",children:"Post-commit callback"})," can be configured.)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"cleaning",children:"Clean"})," (if needed): Following the commit, cleaning is invoked if needed."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"compaction",children:"Compaction"}),": If you are using MOR tables, compaction will either run inline, or be scheduled asynchronously"]}),"\n",(0,r.jsxs)(t.li,{children:["Archive : Lastly, we perform an archival step which moves old ",(0,r.jsx)(t.a,{href:"timeline",children:"timeline"})," items to an archive folder."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Here is a diagramatic representation of the flow."}),"\n",(0,r.jsx)("figure",{children:(0,r.jsx)("img",{className:"docimage",src:i(42565).A,alt:"hudi_write_path_cluster.png"})}),"\n",(0,r.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsx)("h3",{children:"Videos"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://youtu.be/94DPKkzDm-8",children:"Insert | Update | Delete On Datalake (S3) with Apache Hudi and glue Pyspark"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://youtu.be/hK1G7CPBL2M",children:"Insert|Update|Read|Write|SnapShot| Time Travel |incremental Query on Apache Hudi datalake (S3)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=AuZoREO8_zs",children:"Apache Hudi Bulk Insert Sort Modes a summary of two incredible blogs"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},98897:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/incr-vs-batch-writes-b6483703765573054118d17411685a8c.png"}}]);