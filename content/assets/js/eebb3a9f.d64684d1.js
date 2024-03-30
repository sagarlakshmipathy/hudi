"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8900],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>g});var n=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(g,a(a({ref:t},d),{},{components:o})):n.createElement(g,a({ref:t},d))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},90072:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(58168),i=(o(96540),o(15680));const r={title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,last_modified_at:new Date("2021-03-19T19:59:57.000Z")},a=void 0,l={unversionedId:"concurrency_control",id:"version-0.13.1/concurrency_control",title:"Concurrency Control",description:"In this section, we will cover Hudi's concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the DeltaStreamer tool as well as",source:"@site/versioned_docs/version-0.13.1/concurrency_control.md",sourceDirName:".",slug:"/concurrency_control",permalink:"/docs/0.13.1/concurrency_control",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/concurrency_control.md",tags:[],version:"0.13.1",frontMatter:{title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,last_modified_at:"2021-03-19T19:59:57.000Z"},sidebar:"docs",previous:{title:"Key Generation",permalink:"/docs/0.13.1/key_generation"},next:{title:"Record Payload",permalink:"/docs/0.13.1/record_payload"}},s=[{value:"Supported Concurrency Controls",id:"supported-concurrency-controls",children:[],level:2},{value:"Single Writer Guarantees",id:"single-writer-guarantees",children:[],level:2},{value:"Multi Writer Guarantees",id:"multi-writer-guarantees",children:[],level:2},{value:"Enabling Multi Writing",id:"enabling-multi-writing",children:[],level:2},{value:"Datasource Writer",id:"datasource-writer",children:[],level:2},{value:"DeltaStreamer",id:"deltastreamer",children:[],level:2},{value:"Best Practices when using Optimistic Concurrency Control",id:"best-practices-when-using-optimistic-concurrency-control",children:[],level:2},{value:"Disabling Multi Writing",id:"disabling-multi-writing",children:[],level:2},{value:"Caveats",id:"caveats",children:[],level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In this section, we will cover Hudi's concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the ",(0,i.yg)("a",{parentName:"p",href:"#deltastreamer"},"DeltaStreamer")," tool as well as\nusing the ",(0,i.yg)("a",{parentName:"p",href:"#datasource-writer"},"Hudi datasource"),"."),(0,i.yg)("h2",{id:"supported-concurrency-controls"},"Supported Concurrency Controls"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"MVCC")," : Hudi table services such as compaction, cleaning, clustering leverage Multi Version Concurrency Control to provide snapshot isolation\nbetween multiple table service writers and readers. Additionally, using MVCC, Hudi provides snapshot isolation between an ingestion writer and multiple concurrent readers.\nWith this model, Hudi supports running any number of table service jobs concurrently, without any concurrency conflict.\nThis is made possible by ensuring that scheduling plans of such table services always happens in a single writer mode to ensure no conflict and avoids race conditions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[NEW]"," OPTIMISTIC CONCURRENCY")," : Write operations such as the ones described above (UPSERT, INSERT) etc, leverage optimistic concurrency control to enable multiple ingestion writers to\nthe same Hudi Table. Hudi supports ",(0,i.yg)("inlineCode",{parentName:"p"},"file level OCC"),", i.e., for any 2 commits (or writers) happening to the same table, if they do not have writes to overlapping files being changed, both writers are allowed to succeed.\nThis feature is currently ",(0,i.yg)("em",{parentName:"p"},"experimental")," and requires either Zookeeper or HiveMetastore to acquire locks."))),(0,i.yg)("p",null,"It may be helpful to understand the different guarantees provided by ",(0,i.yg)("a",{parentName:"p",href:"/docs/write_operations/"},"write operations")," via Hudi datasource or the delta streamer."),(0,i.yg)("h2",{id:"single-writer-guarantees"},"Single Writer Guarantees"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"UPSERT Guarantee"),": The target table will NEVER show duplicates."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"INSERT Guarantee"),": The target table wilL NEVER have duplicates if ",(0,i.yg)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"BULK_INSERT Guarantee"),": The target table will NEVER have duplicates if ",(0,i.yg)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"INCREMENTAL PULL Guarantee"),": Data consumption and checkpoints are NEVER out of order.")),(0,i.yg)("h2",{id:"multi-writer-guarantees"},"Multi Writer Guarantees"),(0,i.yg)("p",null,"With multiple writers using OCC, some of the above guarantees change as follows"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"UPSERT Guarantee"),": The target table will NEVER show duplicates."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"INSERT Guarantee"),": The target table MIGHT have duplicates even if ",(0,i.yg)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"BULK_INSERT Guarantee"),": The target table MIGHT have duplicates even if ",(0,i.yg)("a",{parentName:"li",href:"/docs/configurations#hoodiedatasourcewriteinsertdropduplicates"},"dedup")," is enabled."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"INCREMENTAL PULL Guarantee"),": Data consumption and checkpoints MIGHT be out of order due to multiple writer jobs finishing at different times.")),(0,i.yg)("h2",{id:"enabling-multi-writing"},"Enabling Multi Writing"),(0,i.yg)("p",null,"The following properties are needed to be set properly to turn on optimistic concurrency control."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=<lock-provider-classname>\n")),(0,i.yg)("p",null,"There are 4 different lock providers that require different configurations to be set."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"FileSystem"))," based lock provider"),(0,i.yg)("p",null,"FileSystem based lock provider supports multiple writers cross different jobs/applications based on atomic create/delete operations of the underlying filesystem."),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"FileSystem based lock provider is not supported with cloud storage like S3 or GCS."))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.FileSystemBasedLockProvider\nhoodie.write.lock.filesystem.path (optional)\nhoodie.write.lock.filesystem.expire (optional)\n")),(0,i.yg)("p",null,"When using the FileSystem based lock provider, by default, the lock file will store into ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.base.path"),"+",(0,i.yg)("inlineCode",{parentName:"p"},"/.hoodie/lock"),". You may use a custom folder to store the lock file by specifying ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.write.lock.filesystem.path"),"."),(0,i.yg)("p",null,"In case the lock cannot release during job crash, you can set ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.write.lock.filesystem.expire")," (lock will never expire by default). You may also delete lock file manually in such situation."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Zookeeper"))," based lock provider"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url\nhoodie.write.lock.zookeeper.port\nhoodie.write.lock.zookeeper.lock_key\nhoodie.write.lock.zookeeper.base_path\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"HiveMetastore"))," based lock provider"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.hive.transaction.lock.HiveMetastoreBasedLockProvider\nhoodie.write.lock.hivemetastore.database\nhoodie.write.lock.hivemetastore.table\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"The HiveMetastore URI's are picked up from the hadoop configuration file loaded during runtime.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Amazon DynamoDB"))," based lock provider"),(0,i.yg)("p",null,"Amazon DynamoDB based lock provides a simple way to support multi writing across different clusters.  You can refer to the\n",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#DynamoDB-based-Locks-Configurations"},"DynamoDB based Locks Configurations"),"\nsection for the details of each related configuration knob."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.aws.transaction.lock.DynamoDBBasedLockProvider\nhoodie.write.lock.dynamodb.table (required)\nhoodie.write.lock.dynamodb.partition_key (optional)\nhoodie.write.lock.dynamodb.region (optional)\nhoodie.write.lock.dynamodb.endpoint_url (optional)\nhoodie.write.lock.dynamodb.billing_mode (optional)\n")),(0,i.yg)("p",null,"When using the DynamoDB-based lock provider, the name of the DynamoDB table acting as the lock table for Hudi is\nspecified by the config ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.write.lock.dynamodb.table"),". This DynamoDB table is automatically created by Hudi, so you\ndon't have to create the table yourself. If you want to use an existing DynamoDB table, make sure that an attribute with\nthe name ",(0,i.yg)("inlineCode",{parentName:"p"},"key")," is present in the table.  The ",(0,i.yg)("inlineCode",{parentName:"p"},"key")," attribute should be the partition key of the DynamoDB table. The\nconfig ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.write.lock.dynamodb.partition_key")," specifies the value to put for the ",(0,i.yg)("inlineCode",{parentName:"p"},"key")," attribute (not the attribute\nname), which is used for the lock on the same table. By default, ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.write.lock.dynamodb.partition_key")," is set to\nthe table name, so that multiple writers writing to the same table share the same lock. If you customize the name, make\nsure it's the same across multiple writers."),(0,i.yg)("p",null,"Also, to set up the credentials for accessing AWS resources, customers can pass the following props to Hudi jobs:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.aws.access.key\nhoodie.aws.secret.key\nhoodie.aws.session.token\n")),(0,i.yg)("p",null,"If not configured, Hudi falls back to use ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"."),(0,i.yg)("p",null,"IAM policy for your service instance will need to add the following permissions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid":"DynamoDBLocksTable",\n  "Effect": "Allow",\n  "Action": [\n    "dynamodb:CreateTable",\n    "dynamodb:DeleteItem",\n    "dynamodb:DescribeTable",\n    "dynamodb:GetItem",\n    "dynamodb:PutItem",\n    "dynamodb:Scan",\n    "dynamodb:UpdateItem"\n  ],\n  "Resource": "arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}"\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"TableName")," : same as ",(0,i.yg)("inlineCode",{parentName:"li"},"hoodie.write.lock.dynamodb.partition_key")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Region"),": same as ",(0,i.yg)("inlineCode",{parentName:"li"},"hoodie.write.lock.dynamodb.region"))),(0,i.yg)("p",null,"AWS SDK dependencies are not bundled with Hudi from v0.10.x and will need to be added to your classpath.\nAdd the following Maven packages (check the latest versions at time of install):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"com.amazonaws:dynamodb-lock-client\ncom.amazonaws:aws-java-sdk-dynamodb\ncom.amazonaws:aws-java-sdk-core\n")),(0,i.yg)("h2",{id:"datasource-writer"},"Datasource Writer"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"hudi-spark")," module offers the DataSource API to write (and read) a Spark DataFrame into a Hudi table."),(0,i.yg)("p",null,"Following is an example of how to use optimistic_concurrency_control via spark datasource"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'inputDF.write.format("hudi")\n       .options(getQuickstartWriteConfigs)\n       .option(PRECOMBINE_FIELD_OPT_KEY, "ts")\n       .option("hoodie.cleaner.policy.failed.writes", "LAZY")\n       .option("hoodie.write.concurrency.mode", "optimistic_concurrency_control")\n       .option("hoodie.write.lock.zookeeper.url", "zookeeper")\n       .option("hoodie.write.lock.zookeeper.port", "2181")\n       .option("hoodie.write.lock.zookeeper.lock_key", "test_table")\n       .option("hoodie.write.lock.zookeeper.base_path", "/test")\n       .option(RECORDKEY_FIELD_OPT_KEY, "uuid")\n       .option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath")\n       .option(TABLE_NAME, tableName)\n       .mode(Overwrite)\n       .save(basePath)\n')),(0,i.yg)("h2",{id:"deltastreamer"},"DeltaStreamer"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," utility (part of hudi-utilities-bundle) provides ways to ingest from different sources such as DFS or Kafka, with the following capabilities."),(0,i.yg)("p",null,"Using optimistic_concurrency_control via delta streamer requires adding the above configs to the properties file that can be passed to the\njob. For example below, adding the configs to kafka-source.properties file and passing them to deltastreamer will enable optimistic concurrency.\nA deltastreamer job can then be triggered as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n")),(0,i.yg)("h2",{id:"best-practices-when-using-optimistic-concurrency-control"},"Best Practices when using Optimistic Concurrency Control"),(0,i.yg)("p",null,"Concurrent Writing to Hudi tables requires acquiring a lock with either Zookeeper or HiveMetastore. Due to several reasons you might want to configure retries to allow your application to acquire the lock. "),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Network connectivity or excessive load on servers increasing time for lock acquisition resulting in timeouts"),(0,i.yg)("li",{parentName:"ol"},"Running a large number of concurrent jobs that are writing to the same hudi table can result in contention during lock acquisition can cause timeouts"),(0,i.yg)("li",{parentName:"ol"},"In some scenarios of conflict resolution, Hudi commit operations might take upto 10's of seconds while the lock is being held. This can result in timeouts for other jobs waiting to acquire a lock.")),(0,i.yg)("p",null,"Set the correct native lock provider client retries. NOTE that sometimes these settings are set on the server once and all clients inherit the same configs. Please check your settings before enabling optimistic concurrency."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.lock.wait_time_ms\nhoodie.write.lock.num_retries\n")),(0,i.yg)("p",null,"Set the correct hudi client retries for Zookeeper & HiveMetastore. This is useful in cases when native client retry settings cannot be changed. Please note that these retries will happen in addition to any native client retries that you may have set. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.lock.client.wait_time_ms\nhoodie.write.lock.client.num_retries\n")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Setting the right values for these depends on a case by case basis; some defaults have been provided for general cases.")),(0,i.yg)("h2",{id:"disabling-multi-writing"},"Disabling Multi Writing"),(0,i.yg)("p",null,"Remove the following settings that were used to enable multi-writer or override with default values."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=single_writer\nhoodie.cleaner.policy.failed.writes=EAGER\n")),(0,i.yg)("h2",{id:"caveats"},"Caveats"),(0,i.yg)("p",null,"If you are using the ",(0,i.yg)("inlineCode",{parentName:"p"},"WriteClient")," API, please note that multiple writes to the table need to be initiated from 2 different instances of the write client.\nIt is NOT recommended to use the same instance of the write client to perform multi writing."))}p.isMDXComponent=!0}}]);