"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[81770],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(96540);const o={},a=n.createContext(o);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:r},e.children)}},80422:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"encryption","title":"Encryption","description":"Since Hudi 0.11.0, Spark 3.2 support has been added and accompanying that, Parquet 1.12 has been included, which brings encryption feature to Hudi. In this section, we will show a guide on how to enable encryption in Hudi tables.","source":"@site/versioned_docs/version-0.14.0/encryption.md","sourceDirName":".","slug":"/encryption","permalink":"/docs/0.14.0/encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/encryption.md","tags":[],"version":"0.14.0","frontMatter":{"title":"Encryption","keywords":["hudi","security"],"summary":"This section offers an overview of encryption feature in Hudi","toc":true,"last_modified_at":"2022-02-14T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Metrics","permalink":"/docs/0.14.0/metrics"},"next":{"title":"Troubleshooting","permalink":"/docs/0.14.0/troubleshooting"}}');var o=t(74848),a=t(28453);const i={title:"Encryption",keywords:["hudi","security"],summary:"This section offers an overview of encryption feature in Hudi",toc:!0,last_modified_at:new Date("2022-02-14T19:59:57.000Z")},s=void 0,c={},p=[{value:"Encrypt Copy-on-Write tables",id:"encrypt-copy-on-write-tables",level:2},{value:"Note",id:"note",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Since Hudi 0.11.0, Spark 3.2 support has been added and accompanying that, Parquet 1.12 has been included, which brings encryption feature to Hudi. In this section, we will show a guide on how to enable encryption in Hudi tables."}),"\n",(0,o.jsx)(r.h2,{id:"encrypt-copy-on-write-tables",children:"Encrypt Copy-on-Write tables"}),"\n",(0,o.jsx)(r.p,{children:"First, make sure Hudi Spark 3.2 bundle jar is used."}),"\n",(0,o.jsx)(r.p,{children:"Then, set the following Parquet configurations to make data written to Hudi COW tables encrypted."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'// Activate Parquet encryption, driven by Hadoop properties\r\njsc.hadoopConfiguration().set("parquet.crypto.factory.class", "org.apache.parquet.crypto.keytools.PropertiesDrivenCryptoFactory")\r\n// Explicit master keys (base64 encoded) - required only for mock InMemoryKMS\r\njsc.hadoopConfiguration().set("parquet.encryption.kms.client.class" , "org.apache.parquet.crypto.keytools.mocks.InMemoryKMS")\r\njsc.hadoopConfiguration().set("parquet.encryption.key.list", "k1:AAECAwQFBgcICQoLDA0ODw==, k2:AAECAAECAAECAAECAAECAA==")\r\n// Write encrypted dataframe files. \r\n// Column "rider" will be protected with master key "key2".\r\n// Parquet file footers will be protected with master key "key1"\r\njsc.hadoopConfiguration().set("parquet.encryption.footer.key", "k1")\r\njsc.hadoopConfiguration().set("parquet.encryption.column.keys", "k2:rider")\r\n    \r\nspark.read().format("org.apache.hudi").load("path").show();\n'})}),"\n",(0,o.jsx)(r.p,{children:"Here is an example."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'JavaSparkContext jsc = new JavaSparkContext(spark.sparkContext());\r\njsc.hadoopConfiguration().set("parquet.crypto.factory.class", "org.apache.parquet.crypto.keytools.PropertiesDrivenCryptoFactory");\r\njsc.hadoopConfiguration().set("parquet.encryption.kms.client.class" , "org.apache.parquet.crypto.keytools.mocks.InMemoryKMS");\r\njsc.hadoopConfiguration().set("parquet.encryption.footer.key", "k1");\r\njsc.hadoopConfiguration().set("parquet.encryption.column.keys", "k2:rider");\r\njsc.hadoopConfiguration().set("parquet.encryption.key.list", "k1:AAECAwQFBgcICQoLDA0ODw==, k2:AAECAAECAAECAAECAAECAA==");\r\n\r\nQuickstartUtils.DataGenerator dataGen = new QuickstartUtils.DataGenerator();\r\nList<String> inserts = convertToStringList(dataGen.generateInserts(3));\r\nDataset<Row> inputDF1 = spark.read().json(jsc.parallelize(inserts, 1));\r\ninputDF1.write().format("org.apache.hudi")\r\n    .option("hoodie.table.name", "encryption_table")\r\n    .option("hoodie.upsert.shuffle.parallelism","2")\r\n    .option("hoodie.insert.shuffle.parallelism","2")\r\n    .option("hoodie.delete.shuffle.parallelism","2")\r\n    .option("hoodie.bulkinsert.shuffle.parallelism","2")\r\n    .mode(SaveMode.Overwrite)\r\n    .save("path");\r\n\r\nspark.read().format("org.apache.hudi").load("path").select("rider").show();\n'})}),"\n",(0,o.jsx)(r.p,{children:"Reading the table works if configured correctly"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"+---------+\r\n|rider    |\r\n+---------+\r\n|rider-213|\r\n|rider-213|\r\n|rider-213|\r\n+---------+\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Read more from ",(0,o.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/sql-data-sources-parquet.html#columnar-encryption",children:"Spark docs"})," and ",(0,o.jsx)(r.a,{href:"https://github.com/apache/parquet-format/blob/master/Encryption.md",children:"Parquet docs"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"note",children:"Note"}),"\n",(0,o.jsx)(r.p,{children:"This feature is currently only available for COW tables due to only Parquet base files present there."})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);