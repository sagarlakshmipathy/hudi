"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[51237],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}},66631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"schema_evolution","title":"Schema Evolution","description":"Schema evolution is a very important aspect of data management.","source":"@site/versioned_docs/version-0.10.0/schema_evolution.md","sourceDirName":".","slug":"/schema_evolution","permalink":"/cn/docs/0.10.0/schema_evolution","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/schema_evolution.md","tags":[],"version":"0.10.0","frontMatter":{"title":"Schema Evolution","keywords":["hudi","incremental","batch","stream","processing","schema","evolution"],"summary":"In this page, we will discuss schema evolution support in Hudi.","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Write Operations","permalink":"/cn/docs/0.10.0/write_operations"},"next":{"title":"Key Generation","permalink":"/cn/docs/0.10.0/key_generation"}}');var o=n(74848),a=n(28453);const i={title:"Schema Evolution",keywords:["hudi","incremental","batch","stream","processing","schema","evolution"],summary:"In this page, we will discuss schema evolution support in Hudi.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},s=void 0,d={},l=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Schema evolution is a very important aspect of data management.\nHudi supports common schema evolution scenarios, such as adding a nullable field or promoting a datatype of a field, out-of-the-box.\nFurthermore, the evolved schema is queryable across engines, such as Presto, Hive and Spark SQL.\nThe following table presents a summary of the types of schema changes compatible with different Hudi table types."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Schema Change"}),(0,o.jsx)(t.th,{children:"COW"}),(0,o.jsx)(t.th,{children:"MOR"}),(0,o.jsx)(t.th,{children:"Remarks"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Add a new nullable column at root level at the end"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"Yes"})," means that a write with evolved schema succeeds and a read following the write succeeds to read entire dataset."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Add a new nullable column to inner struct (at the end)"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Add a new complex type field with default (map and array)"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Add a new nullable column and change the ordering of fields"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"Write succeeds but read fails if the write with evolved schema updated only some of the base files but not all. Currently, Hudi does not maintain a schema registry with history of changes across base files. Nevertheless, if the upsert touched all base files then the read will succeed."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Add a custom nullable Hudi meta column, e.g. ",(0,o.jsx)(t.code,{children:"_hoodie_meta_col"})]}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Promote datatype from ",(0,o.jsx)(t.code,{children:"int"})," to ",(0,o.jsx)(t.code,{children:"long"})," for a field at root level"]}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsxs)(t.td,{children:["For other types, Hudi supports promotion as specified in ",(0,o.jsx)(t.a,{href:"http://avro.apache.org/docs/current/spec#Schema+Resolution",children:"Avro schema resolution"}),"."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Promote datatype from ",(0,o.jsx)(t.code,{children:"int"})," to ",(0,o.jsx)(t.code,{children:"long"})," for a nested field"]}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Promote datatype from ",(0,o.jsx)(t.code,{children:"int"})," to ",(0,o.jsx)(t.code,{children:"long"})," for a complex type (value of map or array)"]}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{children:"Yes"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Add a new non-nullable column at root level at the end"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsxs)(t.td,{children:["In case of MOR table with Spark data source, write succeeds but read fails. As a ",(0,o.jsx)(t.strong,{children:"workaround"}),", you can make the field nullable."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Add a new non-nullable column to inner struct (at the end)"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Change datatype from ",(0,o.jsx)(t.code,{children:"long"})," to ",(0,o.jsx)(t.code,{children:"int"})," for a nested field"]}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Change datatype from ",(0,o.jsx)(t.code,{children:"long"})," to ",(0,o.jsx)(t.code,{children:"int"})," for a complex type (value of map or array)"]}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"Let us walk through an example to demonstrate the schema evolution support in Hudi.\nIn the below example, we are going to add a new string field and change the datatype of a field from int to long."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'Welcome to\n    ____              __\n    / __/__  ___ _____/ /__\n    _\\ \\/ _ \\/ _ `/ __/  \'_/\n    /___/ .__/\\_,_/_/ /_/\\_\\   version 3.1.2\n    /_/\n\n    Using Scala version 2.12.10 (OpenJDK 64-Bit Server VM, Java 1.8.0_292)\n    Type in expressions to have them evaluated.\n    Type :help for more information.\n\nscala> import org.apache.hudi.QuickstartUtils._\nimport org.apache.hudi.QuickstartUtils._\n\nscala> import scala.collection.JavaConversions._\nimport scala.collection.JavaConversions._\n\nscala> import org.apache.spark.sql.SaveMode._\nimport org.apache.spark.sql.SaveMode._\n\nscala> import org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceReadOptions._\n\nscala> import org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\n\nscala> import org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nscala> import org.apache.spark.sql.types._\nimport org.apache.spark.sql.types._\n\nscala> import org.apache.spark.sql.Row\nimport org.apache.spark.sql.Row\n\nscala> val tableName = "hudi_trips_cow"\n    tableName: String = hudi_trips_cow\nscala> val basePath = "file:///tmp/hudi_trips_cow"\n    basePath: String = file:///tmp/hudi_trips_cow\nscala> val schema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", IntegerType,true)\n    | ))\n    schema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,IntegerType,true))\n    \nscala> val data1 = Seq(Row("row_1", "part_0", 0L, "bob", "v_0", 0),\n    |                Row("row_2", "part_0", 0L, "john", "v_0", 0),\n    |                Row("row_3", "part_0", 0L, "tom", "v_0", 0))\n    data1: Seq[org.apache.spark.sql.Row] = List([row_1,part_0,0,bob,v_0,0], [row_2,part_0,0,john,v_0,0], [row_3,part_0,0,tom,v_0,0])\n\nscala> var dfFromData1 = spark.createDataFrame(data1, schema)\nscala> dfFromData1.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD.key, "preComb").\n    |   option(RECORDKEY_FIELD.key, "rowId").\n    |   option(PARTITIONPATH_FIELD.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TBL_NAME.key, tableName).\n    |   mode(Overwrite).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF1 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF1: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 9 more fields]\n\nscala> tripsSnapshotDF1.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|      int|   null|\n    +--------------------+---------+-------+\n    \nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong from hudi_trips_snapshot").show()\n    +-----+-----------+-------+----+---------+---------+\n    |rowId|partitionId|preComb|name|versionId|intToLong|\n    +-----+-----------+-------+----+---------+---------+\n    |row_3|     part_0|      0| tom|      v_0|        0|\n    |row_2|     part_0|      0|john|      v_0|        0|\n    |row_1|     part_0|      0| bob|      v_0|        0|\n    +-----+-----------+-------+----+---------+---------+\n\n// In the new schema, we are going to add a String field and \n// change the datatype `intToLong` field from  int to long.\nscala> val newSchema = StructType( Array(\n    | StructField("rowId", StringType,true),\n    | StructField("partitionId", StringType,true),\n    | StructField("preComb", LongType,true),\n    | StructField("name", StringType,true),\n    | StructField("versionId", StringType,true),\n    | StructField("intToLong", LongType,true),\n    | StructField("newField", StringType,true)\n    | ))\n    newSchema: org.apache.spark.sql.types.StructType = StructType(StructField(rowId,StringType,true), StructField(partitionId,StringType,true), StructField(preComb,LongType,true), StructField(name,StringType,true), StructField(versionId,StringType,true), StructField(intToLong,LongType,true), StructField(newField,StringType,true))\n\nscala> val data2 = Seq(Row("row_2", "part_0", 5L, "john", "v_3", 3L, "newField_1"),\n    |                Row("row_5", "part_0", 5L, "maroon", "v_2", 2L, "newField_1"),\n    |                Row("row_9", "part_0", 5L, "michael", "v_2", 2L, "newField_1"))\n    data2: Seq[org.apache.spark.sql.Row] = List([row_2,part_0,5,john,v_3,3,newField_1], [row_5,part_0,5,maroon,v_2,2,newField_1], [row_9,part_0,5,michael,v_2,2,newField_1])\n\nscala> var dfFromData2 = spark.createDataFrame(data2, newSchema)\nscala> dfFromData2.write.format("hudi").\n    |   options(getQuickstartWriteConfigs).\n    |   option(PRECOMBINE_FIELD.key, "preComb").\n    |   option(RECORDKEY_FIELD.key, "rowId").\n    |   option(PARTITIONPATH_FIELD.key, "partitionId").\n    |   option("hoodie.index.type","SIMPLE").\n    |   option(TBL_NAME.key, tableName).\n    |   mode(Append).\n    |   save(basePath)\n\nscala> var tripsSnapshotDF2 = spark.read.format("hudi").load(basePath + "/*/*")\n    tripsSnapshotDF2: org.apache.spark.sql.DataFrame = [_hoodie_commit_time: string, _hoodie_commit_seqno: string ... 10 more fields]\n\nscala> tripsSnapshotDF2.createOrReplaceTempView("hudi_trips_snapshot")\n\nscala> spark.sql("desc hudi_trips_snapshot").show()\n    +--------------------+---------+-------+\n    |            col_name|data_type|comment|\n    +--------------------+---------+-------+\n    | _hoodie_commit_time|   string|   null|\n    |_hoodie_commit_seqno|   string|   null|\n    |  _hoodie_record_key|   string|   null|\n    |_hoodie_partition...|   string|   null|\n    |   _hoodie_file_name|   string|   null|\n    |               rowId|   string|   null|\n    |         partitionId|   string|   null|\n    |             preComb|   bigint|   null|\n    |                name|   string|   null|\n    |           versionId|   string|   null|\n    |           intToLong|   bigint|   null|\n    |            newField|   string|   null|\n    +--------------------+---------+-------+\n\n\nscala> spark.sql("select rowId, partitionId, preComb, name, versionId, intToLong, newField from hudi_trips_snapshot").show()\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |rowId|partitionId|preComb|   name|versionId|intToLong|  newField|\n    +-----+-----------+-------+-------+---------+---------+----------+\n    |row_3|     part_0|      0|    tom|      v_0|        0|      null|\n    |row_2|     part_0|      5|   john|      v_3|        3|newField_1|\n    |row_1|     part_0|      0|    bob|      v_0|        0|      null|\n    |row_5|     part_0|      5| maroon|      v_2|        2|newField_1|\n    |row_9|     part_0|      5|michael|      v_2|        2|newField_1|\n    +-----+-----------+-------+-------+---------+---------+----------+\n\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);