"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[54992],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var i=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?i.createElement(h,n(n({ref:t},c),{},{components:a})):i.createElement(h,n({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,n[1]=l;for(var s=2;s<o;s++)n[s]=a[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14173:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=a(58168),r=(a(96540),a(15680));const o={title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},n=void 0,l={unversionedId:"precommit_validator",id:"version-0.14.1/precommit_validator",title:"Data Quality",description:"Data quality refers to the overall accuracy, completeness, consistency, and validity of data. Ensuring data quality is vital for accurate analysis and reporting, as well as for compliance with regulations and maintaining trust in your organization's data infrastructure.",source:"@site/versioned_docs/version-0.14.1/precommit_validator.md",sourceDirName:".",slug:"/precommit_validator",permalink:"/cn/docs/precommit_validator",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/precommit_validator.md",tags:[],version:"0.14.1",frontMatter:{title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},sidebar:"docs",previous:{title:"Exporter",permalink:"/cn/docs/snapshot_exporter"},next:{title:"Basic Configurations",permalink:"/cn/docs/basic_configurations"}},u=[{value:"SQL Query Single Result",id:"sql-query-single-result",children:[],level:2},{value:"SQL Query Equality",id:"sql-query-equality",children:[],level:2},{value:"SQL Query Inequality",id:"sql-query-inequality",children:[],level:2},{value:"Extend Custom Validator",id:"extend-custom-validator",children:[],level:2},{value:"Additional Monitoring with Notifications",id:"additional-monitoring-with-notifications",children:[],level:2},{value:"Related Resources",id:"related-resources",children:[],level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,i.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Data quality refers to the overall accuracy, completeness, consistency, and validity of data. Ensuring data quality is vital for accurate analysis and reporting, as well as for compliance with regulations and maintaining trust in your organization's data infrastructure."),(0,r.yg)("p",null,"Hudi offers ",(0,r.yg)("strong",{parentName:"p"},"Pre-Commit Validators")," that allow you to ensure that your data meets certain data quality expectations as you are writing with Hudi Streamer or Spark Datasource writers."),(0,r.yg)("p",null,"To configure pre-commit validators, use this setting ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.precommit.validators=<comma separated list of validator class names>"),"."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'spark.write.format("hudi")\n    .option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator")\n')),(0,r.yg)("p",null,"Today you can use any of these validators and even have the flexibility to extend your own:"),(0,r.yg)("h2",{id:"sql-query-single-result"},"SQL Query Single Result"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQuerySingleResultPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator")),(0,r.yg)("p",null,"The SQL Query Single Result validator can be used to validate that a query on the table results in a specific value. This validator allows you to run a SQL query and abort the commit if it does not match the expected output."),(0,r.yg)("p",null,"Multiple queries can be separated by ",(0,r.yg)("inlineCode",{parentName:"p"},";")," delimiter. Include the expected result as part of the query separated by ",(0,r.yg)("inlineCode",{parentName:"p"},"#"),"."),(0,r.yg)("p",null,"Syntax: ",(0,r.yg)("inlineCode",{parentName:"p"},"query1#result1;query2#result2")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// In this example, we set up a validator that expects there is no row with `col` column as `null`\n\nimport org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator").\n  option("hoodie.precommit.validators.single.value.sql.queries", "select count(*) from <TABLE_NAME> where col is null#0").\n  save(basePath)\n')),(0,r.yg)("h2",{id:"sql-query-equality"},"SQL Query Equality"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryEqualityPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator")),(0,r.yg)("p",null,"The SQL Query Equality validator runs a query before ingesting the data, then runs the same query after ingesting the data and confirms that both outputs match. This allows you to validate for equality of rows before and after the commit."),(0,r.yg)("p",null,"This validator is useful when you want to verify that your query does not change a specific subset of the data. Some examples:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Validate that the number of null fields is the same before and after your query"),(0,r.yg)("li",{parentName:"ul"},"Validate that there are no duplicate records after your query runs"),(0,r.yg)("li",{parentName:"ul"},"Validate that you are only updating the data, and no inserts slip through")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// In this example, we set up a validator that expects no change of null rows with the new commit\n\nimport org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator").\n  option("hoodie.precommit.validators.equality.sql.queries", "select count(*) from <TABLE_NAME> where col is null").\n  save(basePath)\n')),(0,r.yg)("h2",{id:"sql-query-inequality"},"SQL Query Inequality"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryInequalityPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator")),(0,r.yg)("p",null,"The SQL Query Inquality validator runs a query before ingesting the data, then runs the same query after ingesting the data and confirms that both outputs DO NOT match. This allows you to confirm changes in the rows before and after the commit."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// In this example, we set up a validator that expects a change of null rows with the new commit\n\nimport org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator").\n  option("hoodie.precommit.validators.inequality.sql.queries", "select count(*) from <TABLE_NAME> where col is null").\n  save(basePath)\n')),(0,r.yg)("h2",{id:"extend-custom-validator"},"Extend Custom Validator"),(0,r.yg)("p",null,"Users can also provide their own implementations by extending the abstract class ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SparkPreCommitValidator.java"},"SparkPreCommitValidator"),"\nand overriding this method"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"void validateRecordsBeforeAndAfter(Dataset<Row> before, \n                                   Dataset<Row> after, \n                                   Set<String> partitionsAffected)\n")),(0,r.yg)("h2",{id:"additional-monitoring-with-notifications"},"Additional Monitoring with Notifications"),(0,r.yg)("p",null,"Hudi offers a ",(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/writing_data/#commit-notifications"},"commit notification service")," that can be configured to trigger notifications about write commits."),(0,r.yg)("p",null,"The commit notification service can be combined with pre-commit validators to send a notification when a commit fails a validation. This is possible by passing details about the validation as a custom value to the HTTP endpoint."),(0,r.yg)("h2",{id:"related-resources"},"Related Resources"),(0,r.yg)("h3",null,"Videos"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=KNzs9dj_Btc"},"Learn About Apache Hudi Pre Commit Validator with Hands on Lab"))))}d.isMDXComponent=!0}}]);