"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[28627],{15680:(e,i,n)=>{n.d(i,{xA:()=>u,yg:()=>h});var t=n(96540);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var i=t.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},u=function(e){var i=c(e.components);return t.createElement(s.Provider,{value:i},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},g=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?t.createElement(h,r(r({ref:i},u),{},{components:n})):t.createElement(h,r({ref:i},u))}));function h(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19135:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const o={title:"Employing correct configurations for Hudi's cleaner table service",excerpt:"Ensuring isolation between Hudi writers and readers using `HoodieCleaner.java`",author:"pratyakshsharma",category:"blog",image:"/assets/images/blog/hoodie-cleaner/Initial_timeline.png",tags:["how-to","cleaner","apache hudi"]},r=void 0,l={permalink:"/cn/blog/2021/06/10/employing-right-configurations-for-hudi-cleaner",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-06-10-employing-right-configurations-for-hudi-cleaner.md",source:"@site/blog/2021-06-10-employing-right-configurations-for-hudi-cleaner.md",title:"Employing correct configurations for Hudi's cleaner table service",description:"Apache Hudi provides snapshot isolation between writers and readers. This is made possible by Hudi\u2019s MVCC concurrency model. In this blog, we will explain how to employ the right configurations to manage multiple file versions. Furthermore, we will discuss mechanisms available to users on how to maintain just the required number of old file versions so that long running readers do not fail.",date:"2021-06-10T00:00:00.000Z",formattedDate:"June 10, 2021",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"cleaner",permalink:"/cn/blog/tags/cleaner"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:6.55,truncated:!0,authors:[{name:"pratyakshsharma"}],prevItem:{title:"Part1: Query apache hudi dataset in an amazon S3 data lake with amazon athena : Read optimized queries",permalink:"/cn/blog/2021/07/16/Query-apache-hudi-dataset-in-an-amazon-S3-data-lake-with-amazon-athena-Read-optimized-queries"},nextItem:{title:"Apache Hudi: How Uber gets data a ride to its destination",permalink:"/cn/blog/2021/06/04/Apache-Hudi-How-Uber-gets-data-a-ride-to-its-destination"}},s={authorsImageUrls:[void 0]},c=[{value:"Reclaiming space and keeping your data lake storage costs in check",id:"reclaiming-space-and-keeping-your-data-lake-storage-costs-in-check",children:[],level:3},{value:"Problem Statement",id:"problem-statement",children:[],level:3},{value:"Deeper dive into Hudi Cleaner",id:"deeper-dive-into-hudi-cleaner",children:[],level:3},{value:"Cleaning Policies",id:"cleaning-policies",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Configurations",id:"configurations",children:[],level:3},{value:"Run command",id:"run-command",children:[],level:3},{value:"Future Scope",id:"future-scope",children:[],level:3}],u={toc:c},d="wrapper";function p(e){let{components:i,...o}=e;return(0,a.yg)(d,(0,t.A)({},u,o,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apache Hudi provides snapshot isolation between writers and readers. This is made possible by Hudi\u2019s MVCC concurrency model. In this blog, we will explain how to employ the right configurations to manage multiple file versions. Furthermore, we will discuss mechanisms available to users on how to maintain just the required number of old file versions so that long running readers do not fail. "),(0,a.yg)("h3",{id:"reclaiming-space-and-keeping-your-data-lake-storage-costs-in-check"},"Reclaiming space and keeping your data lake storage costs in check"),(0,a.yg)("p",null,"Hudi provides different table management services to be able to manage your tables on the data lake. One of these services is called the ",(0,a.yg)("strong",{parentName:"p"},"Cleaner"),". As you write more data to your table, for every batch of updates received, Hudi can either generate a new version of the data file with updates applied to records (COPY_ON_WRITE) or write these delta updates to a log file, avoiding rewriting newer version of an existing file (MERGE_ON_READ). In such situations, depending on the frequency of your updates, the number of file versions of log files can grow indefinitely. If your use-cases do not require keeping an infinite history of these versions, it is imperative to have a process that reclaims older versions of the data. This is Hudi\u2019s cleaner service."),(0,a.yg)("h3",{id:"problem-statement"},"Problem Statement"),(0,a.yg)("p",null,"In a data lake architecture, it is a very common scenario to have readers and writers concurrently accessing the same table. As the Hudi cleaner service periodically reclaims older file versions, scenarios arise where a long running query might be accessing a file version that is deemed to be reclaimed by the cleaner. Here, we need to employ the correct configs to ensure readers (aka queries) don\u2019t fail."),(0,a.yg)("h3",{id:"deeper-dive-into-hudi-cleaner"},"Deeper dive into Hudi Cleaner"),(0,a.yg)("p",null,"To deal with the mentioned scenario, lets understand the  different cleaning policies that Hudi offers and the corresponding properties that need to be configured. Options are available to schedule cleaning asynchronously or synchronously. Before going into more details, we would like to explain a few underlying concepts:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Hudi base file"),": Columnar file which consists of final data after compaction. A base file\u2019s name follows the following naming convention: ",(0,a.yg)("inlineCode",{parentName:"li"},"<fileId>_<writeToken>_<instantTime>.parquet"),". In subsequent writes of this file, file id remains the same and commit time gets updated to show the latest version. This also implies any particular version of a record, given its partition path, can be uniquely located using the file id and instant time. "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"File slice"),": A file slice consists of the base file and any log files consisting of the delta, in case of MERGE_ON_READ table type."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Hudi File Group"),": Any file group in Hudi is uniquely identified by the partition path and the  file id that the files in this group have as part of their name. A file group consists of all the file slices in a particular partition path. Also any partition path can have multiple file groups.")),(0,a.yg)("h3",{id:"cleaning-policies"},"Cleaning Policies"),(0,a.yg)("p",null,"Hudi cleaner currently supports below cleaning policies:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"KEEP_LATEST_COMMITS"),": This is the default policy. This is a temporal cleaning policy that ensures the effect of having lookback into all the changes that happened in the last X commits. Suppose a writer is ingesting data  into a Hudi dataset every 30 minutes and the longest running query can take 5 hours to finish, then the user should retain atleast the last 10 commits. With such a configuration, we ensure that the oldest version of a file is kept on disk for at least 5 hours, thereby preventing the longest running query from failing at any point in time. Incremental cleaning is also possible using this policy."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"KEEP_LATEST_FILE_VERSIONS"),": This policy has the effect of keeping N number of file versions irrespective of time. This policy is useful when it is known how many MAX versions of the file does one want to keep at any given time. To achieve the same behaviour as before of preventing long running queries from failing, one should do their calculations based on data patterns. Alternatively, this policy is also useful if a user just wants to maintain 1 latest version of the file.")),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Suppose a user is ingesting data into a hudi dataset of type COPY_ON_WRITE every 30 minutes as shown below:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Initial timeline",src:n(26738).A}),"\n",(0,a.yg)("em",{parentName:"p"},"Figure1: Incoming records getting ingested into a hudi dataset every 30 minutes")),(0,a.yg)("p",null,"The figure shows a particular partition on DFS where commits and corresponding file versions are color coded. 4 different file groups are created in this partition as depicted by fileGroup1, fileGroup2, fileGroup3 and fileGroup4. File group corresponding to fileGroup2 has records ingested from all the 5 commits, while the group corresponding to fileGroup4 has records from the latest 2 commits only."),(0,a.yg)("p",null,"Suppose the user uses the below configs for cleaning:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"hoodie.cleaner.policy=KEEP_LATEST_COMMITS\nhoodie.cleaner.commits.retained=2\n")),(0,a.yg)("p",null,"Cleaner selects the versions of files to be cleaned by taking care of the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Latest version of a file should not be cleaned."),(0,a.yg)("li",{parentName:"ul"},"The commit times of the last 2 (configured) + 1 commits are determined. In Figure1, ",(0,a.yg)("inlineCode",{parentName:"li"},"commit 10:30")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"commit 10:00")," correspond to the latest 2 commits in the timeline. One extra commit is included because the time window for retaining commits is essentially equal to the longest query run time. So if the longest query takes 1 hour to finish, and ingestion happens every 30 minutes, you need to retain last 2 commits since 2*30 = 60 (1 hour). At this point of time, the longest query can still be using files written in 3rd commit in reverse order. Essentially this means if a query started executing after ",(0,a.yg)("inlineCode",{parentName:"li"},"commit 9:30"),", it will still be running when clean action is triggered right after ",(0,a.yg)("inlineCode",{parentName:"li"},"commit 10:30")," as in Figure2. "),(0,a.yg)("li",{parentName:"ul"},"Now for any file group, only those file slices are scheduled for cleaning which are not savepointed (another Hudi table service) and whose commit time is less than the 3rd commit (",(0,a.yg)("inlineCode",{parentName:"li"},"commit 9:30")," in figure below) in reverse order.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Retain latest commits",src:n(67594).A}),"\n",(0,a.yg)("em",{parentName:"p"},"Figure2: Files corresponding to latest 3 commits are retained")),(0,a.yg)("p",null,"Now, suppose the user uses the below configs for cleaning:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"hoodie.cleaner.policy=KEEP_LATEST_FILE_VERSIONS\nhoodie.cleaner.fileversions.retained=1\n")),(0,a.yg)("p",null,"Cleaner does the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For any file group, latest version (including any for pending compaction) of file slices are kept and the rest are scheduled for cleaning. Clearly as shown in Figure3, if clean action is triggered right after ",(0,a.yg)("inlineCode",{parentName:"li"},"commit 10:30"),", the cleaner will simply leave the latest version in every file group and delete the rest.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Retain latest versions",src:n(57173).A}),"\n",(0,a.yg)("em",{parentName:"p"},"Figure3: Latest file version in every file group is retained")),(0,a.yg)("h3",{id:"configurations"},"Configurations"),(0,a.yg)("p",null,"You can find the details about all the possible configurations along with the default values ",(0,a.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#compaction-configs"},"here"),"."),(0,a.yg)("h3",{id:"run-command"},"Run command"),(0,a.yg)("p",null,"Hudi's cleaner table service can be run as a separate process or along with your data ingestion. As mentioned earlier, it basically cleans up any stale/old files lying around. In case you want to run it along with ingesting data, configs are available which enable you to run it ",(0,a.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#withAsyncClean"},"synchronously or asynchronously"),". You can use the below command for running the cleaner independently:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"[hoodie]$ spark-submit --class org.apache.hudi.utilities.HoodieCleaner \\\n  --props s3:///temp/hudi-ingestion-config/kafka-source.properties \\\n  --target-base-path s3:///temp/hudi \\\n  --spark-master yarn-cluster\n")),(0,a.yg)("p",null,"In case you wish to run the cleaner service asynchronously with writing, please configure the below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"hoodie.clean.automatic=true\nhoodie.clean.async=true\n")),(0,a.yg)("p",null,"Further you can use ",(0,a.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/deployment#cli"},"Hudi CLI")," for managing your Hudi dataset. CLI provides the below commands for cleaner service:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"cleans show")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"clean showpartitions")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"cleans run"))),(0,a.yg)("p",null,"You can find more details and the relevant code for these commands in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-cli/src/main/java/org/apache/hudi/cli/commands/CleansCommand.java"},(0,a.yg)("inlineCode",{parentName:"a"},"org.apache.hudi.cli.commands.CleansCommand")," class"),". "),(0,a.yg)("h3",{id:"future-scope"},"Future Scope"),(0,a.yg)("p",null,"Work is currently going on for introducing a new cleaning policy based on time elapsed. This will help in achieving a consistent retention throughout regardless of how frequently ingestion happens. You may track the progress ",(0,a.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-349"},"here"),"."),(0,a.yg)("p",null,"We hope this blog gives you an idea about how to configure the Hudi cleaner and the supported cleaning policies. Please visit the ",(0,a.yg)("a",{parentName:"p",href:"https://hudi.apache.org/blog"},"blog section")," for a deeper understanding of various Hudi concepts. Cheers!"))}p.isMDXComponent=!0},26738:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/Initial_timeline-fd0812aa0c22d797d2192745d103bc41.png"},67594:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/Retain_latest_commits-e387b7c19e4ee4d9cbef7b0bb0466983.png"},57173:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/Retain_latest_versions-723f83313beb86b46c9cd1fcb8ea0b25.png"}}]);