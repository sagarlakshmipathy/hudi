"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[57760],{13738:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/build-your-first-hudi-lakehouse-12-19-diagram-7bec1745b0437f71e86e4ab659bee730.jpg"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var i=a(96540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}},46380:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/12/19/Build-Your-First-Hudi-Lakehouse-with-AWS-Glue-and-AWS-S3","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-12-19-Build-Your-First-Hudi-Lakehouse-with-AWS-Glue-and-AWS-S3.md","source":"@site/blog/2022-12-19-Build-Your-First-Hudi-Lakehouse-with-AWS-Glue-and-AWS-S3.md","title":"Build Your First Hudi Lakehouse with AWS S3 and AWS Glue","description":"/assets/images/blog/DataCouncil.jpg","date":"2022-12-19T00:00:00.000Z","tags":[{"inline":true,"label":"how-to","permalink":"/blog/tags/how-to"},{"inline":true,"label":"use-case","permalink":"/blog/tags/use-case"},{"inline":true,"label":"apache hudi","permalink":"/blog/tags/apache-hudi"},{"inline":true,"label":"aws s3","permalink":"/blog/tags/aws-s-3"},{"inline":true,"label":"aws glue","permalink":"/blog/tags/aws-glue"}],"readingTime":1.26,"hasTruncateMarker":false,"authors":[{"name":"Nadine Farah","key":null,"page":null}],"frontMatter":{"title":"Build Your First Hudi Lakehouse with AWS S3 and AWS Glue","excerpt":"Follow this tutorial on building your first hudi lakehouse with AWS S3 & AWS Glue","author":"Nadine Farah","category":"blog","image":"/assets/images/blog/DataCouncil.jpg","tags":["how-to","use-case","apache hudi","aws s3","aws glue"]},"unlisted":false,"prevItem":{"title":"Apache Hudi 2022 - A year in Review","permalink":"/blog/2022/12/29/Apache-Hudi-2022-A-Year-In-Review"},"nextItem":{"title":"Run Apache Hudi at scale on AWS","permalink":"/blog/2022/12/01/Run-apache-hudi-at-scale-on-aws"}}')},54236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var i=a(46380),s=a(74848),n=a(28453);const o={title:"Build Your First Hudi Lakehouse with AWS S3 and AWS Glue",excerpt:"Follow this tutorial on building your first hudi lakehouse with AWS S3 & AWS Glue",author:"Nadine Farah",category:"blog",image:"/assets/images/blog/DataCouncil.jpg",tags:["how-to","use-case","apache hudi","aws s3","aws glue"]},l="Build Your First Hudi Lakehouse with AWS S3 and AWS Glue",r={authorsImageUrls:[void 0]},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Questions",id:"questions",level:2}];function h(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"/assets/images/blog/DataCouncil.jpg",src:a(74358).A+"",width:"1200",height:"602"})}),"\n",(0,s.jsxs)(t.p,{children:["Soumil Shah is a Hudi community champion building ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/@SoumilShah/playlists",children:"YouTube content"})," so developers can easily get started incorporating a ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"lakehouse"})," into their data infrastructure. In this ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=5zF4jc_3rFs&list=PLL2hlSFBmWwwbMpcyMjYuRn8cN99gFSY6",children:"video"}),", Soumil shows you how to get started with AWS Glue, AWS S3, Hudi and Athena."]}),"\n",(0,s.jsx)(t.p,{children:"In this tutorial, you\u2019ll learn how to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Create and configure AWS Glue"}),"\n",(0,s.jsx)(t.li,{children:"Create a Hudi Table"}),"\n",(0,s.jsx)(t.li,{children:"Create a Spark Data Frame"}),"\n",(0,s.jsx)(t.li,{children:"Add data to the Hudi Table"}),"\n",(0,s.jsx)(t.li,{children:"Query data via Athena"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"/assets/images/blog/build-your-first-hudi-lakehouse-12-19-diagram.jpg",src:a(13738).A+"",width:"5185",height:"3085"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 1"}),": Users in this architecture purchase things from online retailers and generate an order transaction that is kept in DynamoDB."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 2"}),": The raw data layer stores the order transaction data that is fed into the data lake. To accomplish this, enable Kinesis Data Streams for DynamoDB, and we will stream real-time transactions from DynamoDB into kinesis data streams, process the streaming data with lambda, and insert the data into the next kinesis stream, where a glue streaming job will process and insert the data into Apache Hudi Transaction data lake."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 3"}),": Users can build dashboards and derive insights using QuickSight."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["To get started on building this data app, follow the YouTube video on\n",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=5zF4jc_3rFs&list=PLL2hlSFBmWwwbMpcyMjYuRn8cN99gFSY6&",children:"Build Datalakes on S3 and Glue with Apache HUDI"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Follow the the ",(0,s.jsx)(t.a,{href:"https://drive.google.com/file/d/1W-E_SupsoI8VZWGtq5d7doxdWdNDPEoj/view",children:"step-by-step instructions"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Apply the ",(0,s.jsx)(t.a,{href:"https://github.com/soumilshah1995/dynamodb-hudi-stream-project",children:"code source"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"questions",children:"Questions"}),"\n",(0,s.jsxs)(t.p,{children:["If you run into blockers doing this tutorial, please reach out on the Apache Hudi community and tag ",(0,s.jsx)(t.strong,{children:"soumilshah1995"})," to help debug."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},74358:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/DataCouncil-04dfc7a9001968f04689ba9fda4dbaab.jpg"}}]);