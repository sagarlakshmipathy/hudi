"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[41867],{1591:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/hudi_jxm_metrics-477d99943f7bc84f9063e4ce2787cc6c.png"},19830:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"metrics","title":"Metrics","description":"In this section, we will introduce the MetricsReporter and HoodieMetrics in Hudi. You can view the metrics-related configurations here.","source":"@site/versioned_docs/version-0.13.1/metrics.md","sourceDirName":".","slug":"/metrics","permalink":"/docs/0.13.1/metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/metrics.md","tags":[],"version":"0.13.1","frontMatter":{"title":"Metrics","keywords":["hudi","administration","operation","devops","metrics"],"summary":"This section offers an overview of metrics in Hudi","toc":true,"last_modified_at":"2020-06-20T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"CLI","permalink":"/docs/0.13.1/cli"},"next":{"title":"Encryption","permalink":"/docs/0.13.1/encryption"}}');var o=r(74848),s=r(28453);const n={title:"Metrics",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:new Date("2020-06-20T19:59:57.000Z")},d=void 0,c={},a=[{value:"MetricsReporter",id:"metricsreporter",level:2},{value:"JmxMetricsReporter",id:"jmxmetricsreporter",level:3},{value:"Configurations",id:"configurations",level:4},{value:"Demo",id:"demo",level:4},{value:"MetricsGraphiteReporter",id:"metricsgraphitereporter",level:3},{value:"Configurations",id:"configurations-1",level:4},{value:"Demo",id:"demo-1",level:4},{value:"DatadogMetricsReporter",id:"datadogmetricsreporter",level:3},{value:"Configurations",id:"configurations-2",level:4},{value:"Demo",id:"demo-2",level:4},{value:"PrometheusMetricsReporter",id:"prometheusmetricsreporter",level:3},{value:"AWS CloudWatchReporter",id:"aws-cloudwatchreporter",level:3},{value:"UserDefinedMetricsReporter",id:"userdefinedmetricsreporter",level:3},{value:"Configurations",id:"configurations-3",level:4},{value:"Demo",id:"demo-3",level:4},{value:"HoodieMetrics",id:"hoodiemetrics",level:2},{value:"List of metrics:",id:"list-of-metrics",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["In this section, we will introduce the ",(0,o.jsx)(i.code,{children:"MetricsReporter"})," and ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," in Hudi. You can view the metrics-related configurations ",(0,o.jsx)(i.a,{href:"configurations#METRICS",children:"here"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"metricsreporter",children:"MetricsReporter"}),"\n",(0,o.jsxs)(i.p,{children:["MetricsReporter provides APIs for reporting ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," to user-specified backends. Currently, the implementations include InMemoryMetricsReporter, JmxMetricsReporter, MetricsGraphiteReporter and DatadogMetricsReporter. Since InMemoryMetricsReporter is only used for testing, we will introduce the other three implementations."]}),"\n",(0,o.jsx)(i.h3,{id:"jmxmetricsreporter",children:"JmxMetricsReporter"}),"\n",(0,o.jsx)(i.p,{children:"JmxMetricsReporter is an implementation of JMX reporter, which used to report JMX metrics."}),"\n",(0,o.jsx)(i.h4,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"JmxMetricsReporter"}),". More detailed configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#Metrics-Configurations-for-Jmx",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=JMX\nhoodie.metrics.jmx.host=192.168.0.106\nhoodie.metrics.jmx.port=4001\n"})}),"\n",(0,o.jsx)(i.h4,{id:"demo",children:"Demo"}),"\n",(0,o.jsx)(i.p,{children:"As configured above, JmxMetricsReporter will started JMX server on port 4001. We can start a jconsole to connect to 192.168.0.106:4001. Below is an illustration of monitoring Hudi JMX metrics through jconsole."}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(1591).A,alt:"hudi_jxm_metrics.png"})}),"\n",(0,o.jsx)(i.h3,{id:"metricsgraphitereporter",children:"MetricsGraphiteReporter"}),"\n",(0,o.jsxs)(i.p,{children:["MetricsGraphiteReporter is an implementation of Graphite reporter, which connects to a Graphite server, and send ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," to it."]}),"\n",(0,o.jsx)(i.h4,{id:"configurations-1",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"MetricsGraphiteReporter"}),". More detaile configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#Metrics-Configurations-for-Graphite",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=GRAPHITE\nhoodie.metrics.graphite.host=192.168.0.106\nhoodie.metrics.graphite.port=2003\nhoodie.metrics.graphite.metric.prefix=<your metrics prefix>\n"})}),"\n",(0,o.jsx)(i.h4,{id:"demo-1",children:"Demo"}),"\n",(0,o.jsx)(i.p,{children:"As configured above, assuming a Graphite server is running on host 192.168.0.106 and port 2003, a running Hudi job will connect and report metrics data to it. Below is an illustration of monitoring hudi metrics through Graphite."}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(49290).A,alt:"hudi_graphite_metrics.png"})}),"\n",(0,o.jsx)(i.h3,{id:"datadogmetricsreporter",children:"DatadogMetricsReporter"}),"\n",(0,o.jsx)(i.p,{children:"DatadogMetricsReporter is an implementation of Datadog reporter.\nA reporter which publishes metric values to Datadog monitoring service via Datadog HTTP API."}),"\n",(0,o.jsx)(i.h4,{id:"configurations-2",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"DatadogMetricsReporter"}),". More detailed configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#Metrics-Configurations-for-Datadog-reporter",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=DATADOG\nhoodie.metrics.datadog.api.site=EU # or US\nhoodie.metrics.datadog.api.key=<your api key>\nhoodie.metrics.datadog.metric.prefix=<your metrics prefix>\n"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"hoodie.metrics.datadog.api.site"})," will set the Datadog API site, which determines whether the requests will be sent to api.datadoghq.eu (EU) or api.datadoghq.com (US). Set this according to your Datadog account settings."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"hoodie.metrics.datadog.api.key"})," will set the api key."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"hoodie.metrics.datadog.metric.prefix"})," will help segregate metrics by setting different prefixes for different jobs. Note that it will use ",(0,o.jsx)(i.code,{children:"."})," to delimit the prefix and the metric name. For example, if the prefix is set to ",(0,o.jsx)(i.code,{children:"foo"}),", then ",(0,o.jsx)(i.code,{children:"foo."})," will be prepended to the metric name."]}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"demo-2",children:"Demo"}),"\n",(0,o.jsxs)(i.p,{children:["In this demo, we ran a ",(0,o.jsx)(i.code,{children:"HoodieDeltaStreamer"})," job with ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," turned on and other configurations set properly."]}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(37988).A,alt:"hudi_datadog_metrics.png"})}),"\n",(0,o.jsx)(i.p,{children:"As shown above, we were able to collect Hudi's action-related metrics like"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.commit.totalScanTime"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.clean.duration"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.index.lookup.duration"})}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["as well as ",(0,o.jsx)(i.code,{children:"HoodieDeltaStreamer"}),"-specific metrics"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.deltastreamer.duration"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"<prefix>.<table name>.deltastreamer.hiveSyncDuration"})}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"prometheusmetricsreporter",children:"PrometheusMetricsReporter"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://prometheus.io/",children:"Prometheus"})," is an open source systems monitoring and alerting toolkit.\nPrometheus has a ",(0,o.jsx)(i.a,{href:"https://prometheus.io/docs/practices/pushing/",children:"PushGateway"})," that Apache Hudi can leverage for metrics reporting.\nFollow ",(0,o.jsx)(i.a,{href:"https://prometheus.io/docs/introduction/first_steps/",children:"Prometheus documentation"})," for basic setup instructions."]}),"\n",(0,o.jsx)(i.p,{children:"Similar to other supported reporters, the following attributes are required to enable pushgateway reporters:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-scala",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=PROMETHEUS_PUSHGATEWAY\n"})}),"\n",(0,o.jsx)(i.p,{children:"The following properties are used to configure the address and port number of pushgateway. The default address is\nlocalhost, and the default port is 9091"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-scala",children:"hoodie.metrics.pushgateway.host=xxxx\nhoodie.metrics.pushgateway.port=9091\n"})}),"\n",(0,o.jsx)(i.p,{children:"You can configure whether to delete the monitoring information from pushgateway at the end of the task, the default is true"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-scala",children:"hoodie.metrics.pushgateway.delete.on.shutdown=false\n"})}),"\n",(0,o.jsx)(i.p,{children:"You can configure the task name prefix and whether a random suffix is required. The default is true"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-scala",children:"hoodie.metrics.pushgateway.job.name=xxxx\nhoodie.metrics.pushgateway.random.job.name.suffix=false\n"})}),"\n",(0,o.jsx)(i.h3,{id:"aws-cloudwatchreporter",children:"AWS CloudWatchReporter"}),"\n",(0,o.jsxs)(i.p,{children:["Hudi supports publishing metrics to Amazon CloudWatch. It can be configured by setting ",(0,o.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodiemetricsreportertype",children:(0,o.jsx)(i.code,{children:"hoodie.metrics.reporter.type"})}),"\nto \u201cCLOUDWATCH\u201d. Static AWS credentials to be used can be configured using\n",(0,o.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodieawsaccesskey",children:(0,o.jsx)(i.code,{children:"hoodie.aws.access.key"})}),",\n",(0,o.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodieawssecretkey",children:(0,o.jsx)(i.code,{children:"hoodie.aws.secret.key"})}),",\n",(0,o.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodieawssessiontoken",children:(0,o.jsx)(i.code,{children:"hoodie.aws.session.token"})})," properties.\nIn the absence of static AWS credentials being configured, ",(0,o.jsx)(i.code,{children:"DefaultAWSCredentialsProviderChain"})," will be used to get\ncredentials by checking environment properties. Additional Amazon CloudWatch reporter specific properties that can be\ntuned are in the ",(0,o.jsx)(i.code,{children:"HoodieMetricsCloudWatchConfig"})," class."]}),"\n",(0,o.jsx)(i.h3,{id:"userdefinedmetricsreporter",children:"UserDefinedMetricsReporter"}),"\n",(0,o.jsx)(i.p,{children:"Allows users to define a custom metrics reporter."}),"\n",(0,o.jsx)(i.h4,{id:"configurations-3",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["The following is an example of ",(0,o.jsx)(i.code,{children:"UserDefinedMetricsReporter"}),". More detailed configurations can be referenced ",(0,o.jsx)(i.a,{href:"configurations#Metrics-Configurations",children:"here"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-properties",children:"hoodie.metrics.on=true\nhoodie.metrics.reporter.class=test.TestUserDefinedMetricsReporter\n"})}),"\n",(0,o.jsx)(i.h4,{id:"demo-3",children:"Demo"}),"\n",(0,o.jsx)(i.p,{children:"In this simple demo, TestMetricsReporter will print all gauges every 10 seconds"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:'public static class TestUserDefinedMetricsReporter \n    extends AbstractUserDefinedMetricsReporter {\n  private static final Logger log = LogManager.getLogger(DummyMetricsReporter.class);\n\n  private ScheduledExecutorService exec = Executors.newScheduledThreadPool(1, r -> {\n      Thread t = Executors.defaultThreadFactory().newThread(r);\n      t.setDaemon(true);\n      return t;\n  });\n\n  public TestUserDefinedMetricsReporter(Properties props, MetricRegistry registry) {\n    super(props, registry);\n  }\n\n  @Override\n  public void start() {\n    exec.schedule(this::report, 10, TimeUnit.SECONDS);\n  }\n\n  @Override\n  public void report() {\n    this.getRegistry().getGauges().forEach((key, value) -> \n      log.info("key: " + key + " value: " + value.getValue().toString()));\n  }\n\n  @Override\n  public Closeable getReporter() {\n    return null;\n  }\n\n  @Override\n  public void stop() {\n    exec.shutdown();\n  }\n}\n'})}),"\n",(0,o.jsx)(i.h2,{id:"hoodiemetrics",children:"HoodieMetrics"}),"\n",(0,o.jsxs)(i.p,{children:["Once the Hudi writer is configured with the right table and environment for ",(0,o.jsx)(i.code,{children:"HoodieMetrics"}),", it produces the following ",(0,o.jsx)(i.code,{children:"HoodieMetrics"}),", that aid in debugging hudi tables"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Commit Duration"})," - The amount of time it took to successfully commit a batch of records"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Rollback Duration"})," - Similarly, the amount of time taken to undo partial data left over by a failed commit (rollback happens automatically after a failing write)"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"File Level metrics"})," - Shows the amount of new files added, versions, deleted (cleaned) in each commit"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Record Level Metrics"})," - Total records inserted/updated etc per commit"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Partition Level metrics"})," - number of partitions upserted (super useful to understand sudden spikes in commit duration)"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["These ",(0,o.jsx)(i.code,{children:"HoodieMetrics"})," can then be plotted on a standard tool like grafana. Below is a sample commit duration chart."]}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:r(46264).A,alt:"hudi_commit_duration.png"})}),"\n",(0,o.jsx)(i.h2,{id:"list-of-metrics",children:"List of metrics:"}),"\n",(0,o.jsx)(i.p,{children:"The below metrics are available in all timeline operations that involves a commit such as deltacommit, compaction, clustering and rollback."}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Name"}),(0,o.jsx)(i.th,{children:"Description"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"commitFreshnessInMs"}),(0,o.jsx)(i.td,{children:"Milliseconds from the commit end time and the maximum event time of the incoming records"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"commitLatencyInMs"}),(0,o.jsx)(i.td,{children:"Milliseconds from the commit end time and the minimum event time of incoming records"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"commitTime"}),(0,o.jsx)(i.td,{children:"Time of commit in epoch milliseconds"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"duration"}),(0,o.jsx)(i.td,{children:"Total time taken for the commit/rollback in milliseconds"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"numFilesDeleted"}),(0,o.jsx)(i.td,{children:"Number of files deleted during a clean/rollback"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"numFilesFinalized"}),(0,o.jsx)(i.td,{children:"Number of files finalized in a write"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalBytesWritten"}),(0,o.jsx)(i.td,{children:"Bytes written in a HoodieCommit"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalCompactedRecordsUpdated"}),(0,o.jsx)(i.td,{children:"Number of records updated in a compaction operation"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalCreateTime"}),(0,o.jsx)(i.td,{children:"Time taken for file creation during a Hoodie Insert operation"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalFilesInsert"}),(0,o.jsx)(i.td,{children:"Number of newly written files in a HoodieCommit"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalFilesUpdate"}),(0,o.jsx)(i.td,{children:"Number of files updated in a HoodieCommit"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalInsertRecordsWritten"}),(0,o.jsx)(i.td,{children:"Number of records inserted or converted to updates(for small file handling) in a HoodieCommit"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalLogFilesCompacted"}),(0,o.jsx)(i.td,{children:"Number of log files under a base file in a file group compacted"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalLogFilesSize"}),(0,o.jsx)(i.td,{children:"Total size in bytes of all log files under a base file in a file group"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalPartitionsWritten"}),(0,o.jsx)(i.td,{children:"Number of partitions that took writes in a HoodieCommit"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalRecordsWritten"}),(0,o.jsx)(i.td,{children:"Number of records written in a HoodieCommit. For inserts, it is the total numbers of records inserted. And for updates, it the total number of records in the file."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalScanTime"}),(0,o.jsx)(i.td,{children:"Time taken for reading and merging logblocks in a log file"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalUpdateRecordsWritten"}),(0,o.jsx)(i.td,{children:"Number of records that got changed in a HoodieCommit"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"totalUpsertTime"}),(0,o.jsx)(i.td,{children:"Time taken for Hoodie Merge"})]})]})]}),"\n",(0,o.jsx)(i.p,{children:"These metrics can be found at org.apache.hudi.metrics.HoodieMetrics and referenced from\norg.apache.hudi.common.model.HoodieCommitMetadata and org.apache.hudi.common.model.HoodieWriteStat"})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>n,x:()=>d});var t=r(96540);const o={},s=t.createContext(o);function n(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(s.Provider,{value:i},e.children)}},37988:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/2020-05-28-datadog-metrics-demo-fff08d34cd7ef2473f16e9b48dd66793.png"},46264:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/hudi_commit_duration-64b7b65fc946ab2d6b69ffdf6f5bb9b0.png"},49290:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/hudi_graphite_metrics-095040421628091f1e447e385189aa5d.png"}}]);