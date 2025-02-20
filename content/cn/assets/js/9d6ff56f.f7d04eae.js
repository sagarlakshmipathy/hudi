"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[70267],{28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var s=o(96540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}},70848:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"cloud","title":"\u4e91\u50a8\u5b58","description":"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5","source":"@site/i18n/cn/docusaurus-plugin-content-docs/current/cloud.md","sourceDirName":".","slug":"/cloud","permalink":"/cn/docs/next/cloud","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/cloud.md","tags":[],"version":"current","frontMatter":{"title":"\u4e91\u50a8\u5b58","keywords":["hudi","aws","gcp","oss","azure","cloud"],"summary":"In this page, we introduce how Hudi work with different Cloud providers.","toc":true,"last_modified_at":"2019-06-17T01:59:57.000Z","language":"cn"},"sidebar":"docs","previous":{"title":"\u914d\u7f6e","permalink":"/cn/docs/next/configurations"},"next":{"title":"S3 \u6587\u4ef6\u7cfb\u7edf","permalink":"/cn/docs/next/s3_hoodie"}}');var t=o(74848),i=o(28453);const r={title:"\u4e91\u50a8\u5b58",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2019-06-17T01:59:57.000Z"),language:"cn"},c=void 0,d={},l=[{value:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",id:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",level:2}];function u(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",children:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5"}),"\n",(0,t.jsx)(n.p,{children:"\u65e0\u8bba\u4f7f\u7528RDD/WriteClient API\u8fd8\u662f\u6570\u636e\u6e90\uff0c\u4ee5\u4e0b\u4fe1\u606f\u90fd\u6709\u52a9\u4e8e\u914d\u7f6e\u5bf9\u4e91\u5b58\u50a8\u7684\u8bbf\u95ee\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/cn/docs/s3_hoodie",children:"AWS S3"})," ",(0,t.jsx)("br",{}),"\nS3\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/cn/docs/gcs_hoodie",children:"Google Cloud Storage"})," ",(0,t.jsx)("br",{}),"\nGCS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/cn/docs/oss_hoodie",children:"Alibaba Cloud OSS"})," ",(0,t.jsx)("br",{}),"\n\u963f\u91cc\u4e91\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/cn/docs/azure_hoodie",children:"Microsoft Azure"})," ",(0,t.jsx)("br",{}),"\nAzure\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/cn/docs/cos_hoodie",children:"Tencent Cloud Object Storage"})," ",(0,t.jsx)("br",{}),"\nCOS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/cn/docs/ibm_cos_hoodie",children:"IBM Cloud Object Storage"})," ",(0,t.jsx)("br",{}),"\nIBM Cloud Object Storage\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"bos_hoodie",children:"Baidu Cloud Object Storage"})," ",(0,t.jsx)("br",{}),"\n\u767e\u5ea6BOS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);