"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[73756],{28453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>l});var i=t(96540);const o={},r=i.createContext(o);function n(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(r.Provider,{value:a},e.children)}},52676:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"precommit_validator","title":"Data Quality","description":"Data quality refers to the overall accuracy, completeness, consistency, and validity of data. Ensuring data quality is vital for accurate analysis and reporting, as well as for compliance with regulations and maintaining trust in your organization\'s data infrastructure.","source":"@site/versioned_docs/version-0.13.1/precommit_validator.md","sourceDirName":".","slug":"/precommit_validator","permalink":"/docs/0.13.1/precommit_validator","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/precommit_validator.md","tags":[],"version":"0.13.1","frontMatter":{"title":"Data Quality","keywords":["hudi","quality","expectations","pre-commit validator"]},"sidebar":"docs","previous":{"title":"Exporter","permalink":"/docs/0.13.1/snapshot_exporter"},"next":{"title":"Basic Configurations","permalink":"/docs/0.13.1/basic_configurations"}}');var o=t(74848),r=t(28453);const n={title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},l=void 0,s={},d=[{value:"SQL Query Single Result",id:"sql-query-single-result",level:2},{value:"SQL Query Equality",id:"sql-query-equality",level:2},{value:"SQL Query Inequality",id:"sql-query-inequality",level:2},{value:"Extend Custom Validator",id:"extend-custom-validator",level:2},{value:"Additional Monitoring with Notifications",id:"additional-monitoring-with-notifications",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Data quality refers to the overall accuracy, completeness, consistency, and validity of data. Ensuring data quality is vital for accurate analysis and reporting, as well as for compliance with regulations and maintaining trust in your organization's data infrastructure."}),"\n",(0,o.jsxs)(a.p,{children:["Hudi offers ",(0,o.jsx)(a.strong,{children:"Pre-Commit Validators"})," that allow you to ensure that your data meets certain data quality expectations as you are writing with DeltaStreamer or Spark Datasource writers."]}),"\n",(0,o.jsxs)(a.p,{children:["To configure pre-commit validators, use this setting ",(0,o.jsx)(a.code,{children:"hoodie.precommit.validators=<comma separated list of validator class names>"}),"."]}),"\n",(0,o.jsx)(a.p,{children:"Example:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:'spark.write.format("hudi")\n    .option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator")\n'})}),"\n",(0,o.jsx)(a.p,{children:"Today you can use any of these validators and even have the flexibility to extend your own:"}),"\n",(0,o.jsx)(a.h2,{id:"sql-query-single-result",children:"SQL Query Single Result"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQuerySingleResultPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator"})}),"\n",(0,o.jsx)(a.p,{children:"The SQL Query Single Result validator can be used to validate that a query on the table results in a specific value. This validator allows you to run a SQL query and abort the commit if it does not match the expected output."}),"\n",(0,o.jsxs)(a.p,{children:["Multiple queries can be separated by ",(0,o.jsx)(a.code,{children:";"})," delimiter. Include the expected result as part of the query separated by ",(0,o.jsx)(a.code,{children:"#"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["Syntax: ",(0,o.jsx)(a.code,{children:"query1#result1;query2#result2"})]}),"\n",(0,o.jsx)(a.p,{children:"Example:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:'// In this example, we set up a validator that expects there is no row with `col` column as `null`\n\nimport org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator").\n  option("hoodie.precommit.validators.single.value.sql.queries", "select count(*) from <TABLE_NAME> where col is null#0").\n  save(basePath)\n'})}),"\n",(0,o.jsx)(a.h2,{id:"sql-query-equality",children:"SQL Query Equality"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryEqualityPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator"})}),"\n",(0,o.jsx)(a.p,{children:"The SQL Query Equality validator runs a query before ingesting the data, then runs the same query after ingesting the data and confirms that both outputs match. This allows you to validate for equality of rows before and after the commit."}),"\n",(0,o.jsx)(a.p,{children:"This validator is useful when you want to verify that your query does not change a specific subset of the data. Some examples:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Validate that the number of null fields is the same before and after your query"}),"\n",(0,o.jsx)(a.li,{children:"Validate that there are no duplicate records after your query runs"}),"\n",(0,o.jsx)(a.li,{children:"Validate that you are only updating the data, and no inserts slip through"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Example:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:'// In this example, we set up a validator that expects no change of null rows with the new commit\n\nimport org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator").\n  option("hoodie.precommit.validators.equality.sql.queries", "select count(*) from <TABLE_NAME> where col is null").\n  save(basePath)\n'})}),"\n",(0,o.jsx)(a.h2,{id:"sql-query-inequality",children:"SQL Query Inequality"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryInequalityPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator"})}),"\n",(0,o.jsx)(a.p,{children:"The SQL Query Inquality validator runs a query before ingesting the data, then runs the same query after ingesting the data and confirms that both outputs DO NOT match. This allows you to confirm changes in the rows before and after the commit."}),"\n",(0,o.jsx)(a.p,{children:"Example:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:'// In this example, we set up a validator that expects a change of null rows with the new commit\n\nimport org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator").\n  option("hoodie.precommit.validators.inequality.sql.queries", "select count(*) from <TABLE_NAME> where col is null").\n  save(basePath)\n'})}),"\n",(0,o.jsx)(a.h2,{id:"extend-custom-validator",children:"Extend Custom Validator"}),"\n",(0,o.jsxs)(a.p,{children:["Users can also provide their own implementations by extending the abstract class ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SparkPreCommitValidator.java",children:"SparkPreCommitValidator"}),"\nand overriding this method"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-java",children:"void validateRecordsBeforeAndAfter(Dataset<Row> before, \n                                   Dataset<Row> after, \n                                   Set<String> partitionsAffected)\n"})}),"\n",(0,o.jsx)(a.h2,{id:"additional-monitoring-with-notifications",children:"Additional Monitoring with Notifications"}),"\n",(0,o.jsxs)(a.p,{children:["Hudi offers a ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/writing_data/#commit-notifications",children:"commit notification service"})," that can be configured to trigger notifications about write commits."]}),"\n",(0,o.jsx)(a.p,{children:"The commit notification service can be combined with pre-commit validators to send a notification when a commit fails a validation. This is possible by passing details about the validation as a custom value to the HTTP endpoint."})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);