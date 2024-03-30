"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[95565],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>h});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,h=p["".concat(s,".").concat(u)]||p[u]||g[u]||o;return a?t.createElement(h,r(r({ref:n},d),{},{components:a})):t.createElement(h,r({ref:n},d))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5893:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(58168),i=(a(96540),a(15680));const o={title:"Cleaning",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},r=void 0,l={unversionedId:"hoodie_cleaner",id:"hoodie_cleaner",title:"Cleaning",description:"Background",source:"@site/docs/hoodie_cleaner.md",sourceDirName:".",slug:"/hoodie_cleaner",permalink:"/cn/docs/next/hoodie_cleaner",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/hoodie_cleaner.md",tags:[],version:"current",frontMatter:{title:"Cleaning",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Metadata Indexing",permalink:"/cn/docs/next/metadata_indexing"},next:{title:"Rollback Mechanism",permalink:"/cn/docs/next/rollbacks"}},s=[{value:"Background",id:"background",children:[{value:"Cleaning Retention Policies",id:"cleaning-retention-policies",children:[],level:3},{value:"Configs",id:"configs",children:[],level:3},{value:"Ways to trigger Cleaning",id:"ways-to-trigger-cleaning",children:[{value:"Inline",id:"inline",children:[],level:4},{value:"Async",id:"async",children:[],level:4},{value:"Run independently",id:"run-independently",children:[],level:4},{value:"CLI",id:"cli",children:[],level:4}],level:3}],level:2},{value:"Related Resources",id:"related-resources",children:[],level:2}],c={toc:s},d="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"background"},"Background"),(0,i.yg)("p",null,"Cleaning is a table service employed by Hudi to reclaim space occupied by older versions of data and keep storage costs\nin check. Apache Hudi provides snapshot isolation between writers and readers by managing multiple versioned files with ",(0,i.yg)("strong",{parentName:"p"},"MVCC"),"\nconcurrency. These file versions provide history and enable time travel and rollbacks, but it is important to manage\nhow much history you keep to balance your costs. Cleaning service plays a crucial role in manging the tradeoff between\nretaining long history of data and the associated storage costs.  "),(0,i.yg)("p",null,"Hudi enables ",(0,i.yg)("a",{parentName:"p",href:"/docs/configurations/#hoodiecleanautomatic"},"Automatic Hudi cleaning")," by default. Cleaning is invoked\nimmediately after each commit, to delete older file slices. It's recommended to leave this enabled to ensure metadata\nand data storage growth is bounded. Cleaner can also be scheduled after every few commits instead of after every commit by\nconfiguring ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodiecleanmaxcommits"},"hoodie.clean.max.commits"),"."),(0,i.yg)("h3",{id:"cleaning-retention-policies"},"Cleaning Retention Policies"),(0,i.yg)("p",null,"When cleaning old files, you should be careful not to remove files that are being actively used by long running queries."),(0,i.yg)("p",null,"For spark based:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.cleaner.policy"),(0,i.yg)("td",{parentName:"tr",align:null},"KEEP_LATEST_COMMITS (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"org.apache.hudi.common.model.HoodieCleaningPolicy: Cleaning policy to be used. ",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: CLEANER_POLICY"))))),(0,i.yg)("p",null,"The corresponding config for Flink based engine is ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#cleanpolicy"},(0,i.yg)("inlineCode",{parentName:"a"},"clean.policy")),"."),(0,i.yg)("p",null,"Hudi cleaner currently supports the below cleaning policies to keep a certain number of commits or file versions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"KEEP_LATEST_COMMITS"),": This is the default policy. This is a temporal cleaning policy that ensures the effect of\nhaving lookback into all the changes that happened in the last X commits. Suppose a writer is ingesting data\ninto a Hudi dataset every 30 minutes and the longest running query can take 5 hours to finish, then the user should\nretain atleast the last 10 commits. With such a configuration, we ensure that the oldest version of a file is kept on\ndisk for at least 5 hours, thereby preventing the longest running query from failing at any point in time. Incremental\ncleaning is also possible using this policy.\nNumber of commits to retain can be configured by ",(0,i.yg)("a",{parentName:"p",href:"https://analytics.google.com/analytics/web/#/p300324801/reports/intelligenthome"},(0,i.yg)("inlineCode",{parentName:"a"},"hoodie.cleaner.commits.retained")),".\nThe corresponding Flink related config is ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#cleanretain_commits"},(0,i.yg)("inlineCode",{parentName:"a"},"clean.retain_commits")),". ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"KEEP_LATEST_FILE_VERSIONS"),": This policy has the effect of keeping N number of file versions irrespective of time.\nThis policy is useful when it is known how many MAX versions of the file does one want to keep at any given time.\nTo achieve the same behaviour as before of preventing long running queries from failing, one should do their calculations\nbased on data patterns. Alternatively, this policy is also useful if a user just wants to maintain 1 latest version of the file.\nNumber of file versions to retain can be configured by ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#hoodiecleanerfileversionsretained"},(0,i.yg)("inlineCode",{parentName:"a"},"hoodie.cleaner.fileversions.retained")),".\nThe corresponding Flink related config is ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#cleanretain_file_versions"},(0,i.yg)("inlineCode",{parentName:"a"},"clean.retain_file_versions")),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"KEEP_LATEST_BY_HOURS"),": This policy clean up based on hours.It is simple and useful when knowing that you want to\nkeep files at any given time. Corresponding to commits with commit times older than the configured number of hours to\nbe retained are cleaned. Currently you can configure by parameter ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#hoodiecleanerhoursretained"},(0,i.yg)("inlineCode",{parentName:"a"},"hoodie.cleaner.hours.retained")),".\nThe corresponding Flink related config is ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#cleanretain_hours"},(0,i.yg)("inlineCode",{parentName:"a"},"clean.retain_hours")),"."))),(0,i.yg)("h3",{id:"configs"},"Configs"),(0,i.yg)("p",null,"For details about all possible configurations and their default values see the ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations/#Clean-Configs"},"configuration docs"),".\nFor Flink related configs refer ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations/#FLINK_SQL"},"here"),"."),(0,i.yg)("h3",{id:"ways-to-trigger-cleaning"},"Ways to trigger Cleaning"),(0,i.yg)("h4",{id:"inline"},"Inline"),(0,i.yg)("p",null,"By default, in Spark based writing, cleaning is run inline after every commit using the default policy of ",(0,i.yg)("inlineCode",{parentName:"p"},"KEEP_LATEST_COMMITS"),". It's recommended\nto keep this enabled, to ensure metadata and data storage growth is bounded. To enable this, users do not have to set any configs. Following are the relevant basic configs."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.clean.automatic"),(0,i.yg)("td",{parentName:"tr",align:null},"true (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"When enabled, the cleaner table service is invoked immediately after each commit, to delete older file slices. It's recommended to enable this, to ensure metadata and data storage growth is bounded.",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: AUTO_CLEAN"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.cleaner.commits.retained"),(0,i.yg)("td",{parentName:"tr",align:null},"10 (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Number of commits to retain, without cleaning. This will be retained for num_of_commits * time_between_commits (scheduled). This also directly translates into how much data retention the table supports for incremental queries.",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: CLEANER_COMMITS_RETAINED"))))),(0,i.yg)("h4",{id:"async"},"Async"),(0,i.yg)("p",null,"In case you wish to run the cleaner service asynchronously along with writing, please enable the ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodiecleanasync"},(0,i.yg)("inlineCode",{parentName:"a"},"hoodie.clean.async"))," as shown below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"hoodie.clean.automatic=true\nhoodie.clean.async=true\n")),(0,i.yg)("p",null,"For Flink based writing, this is the default mode of cleaning. Please refer to ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#cleanasyncenabled"},(0,i.yg)("inlineCode",{parentName:"a"},"clean.async.enabled"))," for details."),(0,i.yg)("h4",{id:"run-independently"},"Run independently"),(0,i.yg)("p",null,"Hoodie Cleaner can also be run as a separate process. Following is the command for running the cleaner independently:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` --help\n        Usage: <main class> [options]\n        Options:\n        --help, -h\n\n        --hoodie-conf\n        Any configuration that can be set in the properties file (using the CLI\n        parameter "--props") can also be passed command line using this\n        parameter. This can be repeated\n        Default: []\n        --props\n        path to properties file on localfs or dfs, with configurations for\n        hoodie client for cleaning\n        --spark-master\n        spark master to use.\n        Default: local[2]\n        * --target-base-path\n        base path for the hoodie table to be cleaner.\n')),(0,i.yg)("p",null,"Some examples to run the cleaner.",(0,i.yg)("br",{parentName:"p"}),"\n","Keep the latest 10 commits"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_COMMITS \\\n  --hoodie-conf hoodie.cleaner.commits.retained=10 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"Keep the latest 3 file versions"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_FILE_VERSIONS \\\n  --hoodie-conf hoodie.cleaner.fileversions.retained=3 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"Clean commits older than 24 hours"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_BY_HOURS \\\n  --hoodie-conf hoodie.cleaner.hours.retained=24 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"Note: The parallelism takes the min value of number of partitions to clean and ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.cleaner.parallelism"),"."),(0,i.yg)("h4",{id:"cli"},"CLI"),(0,i.yg)("p",null,"You can also use ",(0,i.yg)("a",{parentName:"p",href:"/docs/cli"},"Hudi CLI")," to run Hoodie Cleaner."),(0,i.yg)("p",null,"CLI provides the below commands for cleaner service:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cleans show")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"clean showpartitions")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cleans run"))),(0,i.yg)("p",null,"Example of cleaner keeping the latest 10 commits"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"cleans run --sparkMaster local --hoodieConfigs hoodie.cleaner.policy=KEEP_LATEST_COMMITS hoodie.cleaner.commits.retained=3 hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"You can find more details and the relevant code for these commands in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-cli/src/main/java/org/apache/hudi/cli/commands/CleansCommand.java"},(0,i.yg)("inlineCode",{parentName:"a"},"org.apache.hudi.cli.commands.CleansCommand"))," class. "),(0,i.yg)("h2",{id:"related-resources"},"Related Resources"),(0,i.yg)("h3",null,"Videos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://youtu.be/mUvRhJDoO3w"},"Cleaner Service: Save up to 40% on data lake storage costs | Hudi Labs")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=CEzgFtmVjx4"},"Efficient Data Lake Management with Apache Hudi Cleaner: Benefits of Scheduling Data Cleaning #1")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RbBF9Ys2GqM"},"Efficient Data Lake Management with Apache Hudi Cleaner: Benefits of Scheduling Data Cleaning #2"))))}p.isMDXComponent=!0}}]);