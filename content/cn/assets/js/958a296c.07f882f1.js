"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[26882],{15680:(t,a,e)=>{e.d(a,{xA:()=>m,yg:()=>y});var n=e(96540);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),g=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},m=function(t){var a=g(t.components);return n.createElement(p.Provider,{value:a},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=g(e),d=l,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return e?n.createElement(y,i(i({ref:a},m),{},{components:e})):n.createElement(y,i({ref:a},m))}));function y(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[u]="string"==typeof t?t:l,i[1]=o;for(var g=2;g<r;g++)i[g]=e[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},53777:(t,a,e)=>{e.r(a),e.d(a,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=e(58168),l=(e(96540),e(15680));const r={title:"Post-commit Callback",keywords:["hudi","platform","commit","callback"]},i=void 0,o={unversionedId:"platform_services_post_commit_callback",id:"platform_services_post_commit_callback",title:"Post-commit Callback",description:"Apache Hudi provides the ability to post a callback notification about a write commit. This may be valuable if you need",source:"@site/docs/platform_services_post_commit_callback.md",sourceDirName:".",slug:"/platform_services_post_commit_callback",permalink:"/cn/docs/next/platform_services_post_commit_callback",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/platform_services_post_commit_callback.md",tags:[],version:"current",frontMatter:{title:"Post-commit Callback",keywords:["hudi","platform","commit","callback"]},sidebar:"docs",previous:{title:"Data Quality",permalink:"/cn/docs/next/precommit_validator"},next:{title:"AWS Glue Data Catalog",permalink:"/cn/docs/next/syncing_aws_glue_data_catalog"}},p=[{value:"HTTP Endpoints",id:"http-endpoints",children:[],level:2},{value:"Kafka Endpoints",id:"kafka-endpoints",children:[],level:2},{value:"Pulsar Endpoints",id:"pulsar-endpoints",children:[],level:2},{value:"Bring your own implementation",id:"bring-your-own-implementation",children:[],level:2}],g={toc:p},m="wrapper";function u(t){let{components:a,...e}=t;return(0,l.yg)(m,(0,n.A)({},g,e,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Apache Hudi provides the ability to post a callback notification about a write commit. This may be valuable if you need\nan event notification stream to take actions with other services after a Hudi write commit.\nYou can push a write commit callback notification into HTTP endpoints or to a Kafka server."),(0,l.yg)("h2",{id:"http-endpoints"},"HTTP Endpoints"),(0,l.yg)("p",null,"You can push a commit notification to an HTTP URL and can specify custom values by extending a callback class defined below."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Config"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TURN_CALLBACK_ON"),(0,l.yg)("td",{parentName:"tr",align:null},"Turn commit callback on/off"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"false (",(0,l.yg)("em",{parentName:"td"},"callbacks off"),")")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CALLBACK_HTTP_URL"),(0,l.yg)("td",{parentName:"tr",align:null},"Callback host to be sent along with callback messages"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"N/A")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CALLBACK_HTTP_TIMEOUT_IN_SECONDS"),(0,l.yg)("td",{parentName:"tr",align:null},"Callback timeout in seconds"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CALLBACK_CLASS_NAME"),(0,l.yg)("td",{parentName:"tr",align:null},"Full path of callback class and must be a subclass of HoodieWriteCommitCallback class, org.apache.hudi.callback.impl.HoodieWriteCommitHttpCallback by default"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"org.apache.hudi.callback.impl.HoodieWriteCommitHttpCallback")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CALLBACK_HTTP_API_KEY_VALUE"),(0,l.yg)("td",{parentName:"tr",align:null},"Http callback API key"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"hudi_write_commit_http_callback")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"kafka-endpoints"},"Kafka Endpoints"),(0,l.yg)("p",null,"You can push a commit notification to a Kafka topic so it can be used by other real time systems."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Config"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TOPIC"),(0,l.yg)("td",{parentName:"tr",align:null},"Kafka topic name to publish timeline activity into."),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"N/A")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"PARTITION"),(0,l.yg)("td",{parentName:"tr",align:null},"It may be desirable to serialize all changes into a single Kafka partition for providing strict ordering. By default, Kafka messages are keyed by table name, which guarantees ordering at the table level, but not globally (or when new partitions are added)"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"N/A")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"RETRIES"),(0,l.yg)("td",{parentName:"tr",align:null},"Times to retry the produce"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ACKS"),(0,l.yg)("td",{parentName:"tr",align:null},"kafka acks level, all by default to ensure strong durability"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"all")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOTSTRAP_SERVERS"),(0,l.yg)("td",{parentName:"tr",align:null},"Bootstrap servers of kafka cluster, to be used for publishing commit metadata"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"N/A")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"pulsar-endpoints"},"Pulsar Endpoints"),(0,l.yg)("p",null,"You can push a commit notification to a Pulsar topic so it can be used by other real time systems."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Config"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.broker.service.url"),(0,l.yg)("td",{parentName:"tr",align:null},"Server's Url of pulsar cluster to use to publish commit metadata."),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"N/A")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.topic"),(0,l.yg)("td",{parentName:"tr",align:null},"Pulsar topic name to publish timeline activity into"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"N/A")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.producer.route-mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Message routing logic for producers on partitioned topics."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"RoundRobinPartition")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.producer.pending-queue-size"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum size of a queue holding pending messages."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"1000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.producer.pending-total-size"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of pending messages across partitions."),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"50000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.producer.block-if-queue-full"),(0,l.yg)("td",{parentName:"tr",align:null},"When the queue is full, the method is blocked instead of an exception is thrown."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.producer.send-timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"The timeout in each sending to pulsar."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"30s")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.operation-timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration of waiting for completing an operation."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"30s")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.connection-timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration of waiting for a connection to a broker to be established."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"10s")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.request-timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration of waiting for completing a request."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"60s")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hoodie.write.commit.callback.pulsar.keepalive-interval"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration of keeping alive interval for each client broker connection."),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"30s")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"bring-your-own-implementation"},"Bring your own implementation"),(0,l.yg)("p",null,"You can extend the HoodieWriteCommitCallback class to implement your own way to asynchronously handle the callback\nof a successful write. Use this public API:"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/callback/HoodieWriteCommitCallback.java"},"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/callback/HoodieWriteCommitCallback.java")))}u.isMDXComponent=!0}}]);