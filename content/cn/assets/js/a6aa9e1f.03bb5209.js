/*! For license information please see a6aa9e1f.03bb5209.js.LICENSE.txt */
(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[37643],{42876:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var l=a(96540),r=a(44586),n=a(4533),s=a(3360),i=a(75489),o=a(21312);const m=function(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,o.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(i.A,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(o.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(i.A,{className:"pagination-nav__link",to:r},l.createElement("div",{className:"pagination-nav__label"},l.createElement(o.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(91211);const g=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:o}}=(0,r.A)(),{blogDescription:g,blogTitle:d,permalink:p}=t,u="/"===p?o:d;return l.createElement(n.A,{title:u,description:g,wrapperClassName:c.GN.wrapper.blogPages,pageClassName:c.GN.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:i},a.map((e=>{let{content:t}=e;return l.createElement(s.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(m,{metadata:t}))}},1335:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var l=a(96540),r=a(21312),n=a(58168),s=a(20053);const i="iconEdit_mS5F";const o=function(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var m=a(91211);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.GN.common.editThisPage},l.createElement(o,null),l.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5465:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var l=a(96540),r=a(20053),n=a(75489);const s="tag_WK-t",i="tagRegular_LXbV",o="tagWithCount_S5Zl";const m=function(e){const{permalink:t,name:a,count:m}=e;return l.createElement(n.A,{href:t,className:(0,r.A)(s,{[i]:!m,[o]:m})},a,m&&l.createElement("span",null,m))}},68234:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var l=a(96540),r=a(75489);const n=e=>{let{authors:t=[],className:a,withLink:n=!0}=e;const s=e=>l.createElement("span",{className:a,itemProp:"name"},e.name);return l.createElement(l.Fragment,null,t.map(((e,a)=>l.createElement("div",{key:a},l.createElement("div",null,e.name&&l.createElement("div",null,0!==a?a!==t.length-1?",":"and":"",n?l.createElement(r.A,{href:e.url,itemProp:"url"},s(e)):s(e)))))))}},4533:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var l=a(96540),r=a(20053),n=a(31232),s=a(75489);const i={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var o=a(21312);function m(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.A)(i.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.A)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:i.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))))}const c=function(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0,c="blog-list-page"===e.pageClassName,g="blog-tags-post-list-page"===e.pageClassName;return l.createElement(n.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(m,{sidebar:t})),l.createElement("main",{className:(0,r.A)("col",{"col--7":o,"col--9 col--offset-2":!o,row:c||g,"tags-post-list":g}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},3360:(e,t,a)=>{"use strict";a.d(t,{A:()=>v});var l=a(96540),r=a(20053),n=a(15680),s=a(21312),i=a(75489),o=a(86025),m=a(91211),c=a(23817),g=a(1335);const d={blogPostTitle:"blogPostTitle_RC3s",videoImage:"videoImage_nxqj",blogPostPageTitle:"blogPostPageTitle_bKZt",blogPostPageTile:"blogPostPageTile_BsLs",blogPostData:"blogPostData_A2Le",blogpostReadingTime:"blogpostReadingTime_Mwxf",tagsWrapperPostPage:"tagsWrapperPostPage_VdId",blogPostDetailsFull:"blogPostDetailsFull_2lop","blog-list-page":"blog-list-page_Jl5M",container:"container_EXwA",row:"row_DZ33",authorsList:"authorsList_svFt",authorsListLong:"authorsListLong_kl47",authorTimeTags:"authorTimeTags_oN88",tag:"tag_MgfY",tagPostPage:"tagPostPage_gnvv",postHeader:"postHeader_Ipb1",greyLink:"greyLink_9KrM",blogPostText:"blogPostText_jBA8",blogInfo:"blogInfo_1FPd",blogPostAuthorsList:"blogPostAuthorsList_dlEG"};var p=a(5465),u=a(68234),b=a(56347),h=a(46942),E=a.n(h);const v=function(e){const t=function(){const{selectMessage:e}=(0,m.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),a=(0,b.zy)(),{withBaseUrl:h}=(0,o.h)(),{children:v,frontMatter:P,assets:A,metadata:N,truncated:T,isBlogPostPage:f=!1}=e,{date:_,formattedDate:k,permalink:w,tags:L,readingTime:I,title:y,editUrl:x,authors:C}=N,F=A.image??P.image??"/assets/images/hudi-logo-medium.png",B=L.length>0,M=e=>{e&&window.open(e,"_blank","noopener noreferrer")};return l.createElement("article",{className:(0,r.A)({"blog-list-item":!f}),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=f?"h1":"h2";return l.createElement("header",{className:d.postHeader},l.createElement("div",null,!f&&F&&l.createElement("div",{className:"col blogThumbnail",itemProp:"blogThumbnail"},a.pathname.startsWith("/blog")?l.createElement(i.A,{itemProp:"url",to:w},l.createElement("img",{src:h(F,{absolute:!0}),className:"blog-image"})):l.createElement("img",{onClick:()=>M(P?.navigate),src:h(F,{absolute:!0}),className:E()(d.videoImage,"blog-image")})),l.createElement(e,{className:d.blogPostTitle,itemProp:"headline"},f?l.createElement(e,{className:d.blogPostPageTitle,itemProp:"headline"},y):a.pathname.startsWith("/blog")?l.createElement(i.A,{itemProp:"url",to:w},l.createElement(e,{className:d.blogPostTitle,itemProp:"headline"},y)):l.createElement(e,{onClick:()=>M(P?.navigate),className:d.blogPostTitle,itemProp:"headline"},y)),l.createElement("div",{className:(0,r.A)(d.blogInfo,"margin-top--sm margin-bottom--sm")},0===C.length?l.createElement("div",{className:(0,r.A)(d.authorTimeTags,"row 'margin-vert--md'")},l.createElement("time",{dateTime:_,itemProp:"datePublished"},k)):l.createElement(l.Fragment,null,f?l.createElement("div",{className:(0,r.A)(d.blogPostText,"row")},l.createElement("time",{dateTime:_,itemProp:"datePublished"},k),l.createElement(u.A,{authors:C,className:d.blogPostAuthorsList})):l.createElement("div",{className:(0,r.A)(d.authorTimeTags,"row 'margin-vert--md'")},l.createElement("time",{dateTime:_,itemProp:"datePublished"},k," by"),l.createElement(u.A,{authors:C,className:d.authorsList}))),f&&I&&l.createElement("div",{className:(0,r.A)(d.blogPostData,{[d.blogpostReadingTime]:!f})},l.createElement(l.Fragment,null,void 0!==I&&l.createElement(l.Fragment,null,t(I)))))),!!L.length&&l.createElement(l.Fragment,null,l.createElement("ul",{className:(0,r.A)(d.tags,d.authorTimeTags,"padding--none","margin-left--sm",{[d.tagsWrapperPostPage]:f})},L.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:(0,r.A)(d.tag,{[d.tagPostPage]:f})},l.createElement(p.A,{className:(0,r.A)(d.greyLink),name:t,permalink:a}))})))))})(),f&&l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(n.xA,{components:c.A},v)),(B||T)&&f&&x&&l.createElement("footer0",{className:(0,r.A)("row docusaurus-mt-lg",{[d.blogPostDetailsFull]:f})},l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.A,{editUrl:x}))))}},46942:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=s(e,n(a)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)l.call(e,a)&&e[a]&&(t=s(t,a));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);