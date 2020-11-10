(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(188),i=a(177),c=a(179),o=a(180);var s=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var m=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n,i;function c(){const c=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){let a=0,n=!1;for(i=document.getElementsByClassName(e);a<i.length&&!n;){const e=i[a],{href:o}=e,s=decodeURIComponent(o.substring(o.indexOf("#")+1));c.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}})},d=a(189);var u=function(){const{siteConfig:{title:e}}=Object(i.a)(),t=(()=>{const e=Object(d.useActivePlugin)();if(!e)throw new Error("DocVersionCallout is only supposed to be used on docs-related routes");return e.pluginId})(),a=Object(d.useActiveVersion)(t),{latestDocSuggestion:n,latestVersionSuggestion:r}=Object(d.useDocVersionSuggestions)(t);if(!r)return l.a.createElement(l.a.Fragment,null);const c=a.name,s=null!=n?n:(m=r).docs.find(e=>e.id===m.mainDocId);var m;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"next"===c?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,c)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,"v",c),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(o.a,{to:s.path},"latest version"))," ","(",r.name,")."))},g=a(178),E=a(62),v=a.n(E);function p({headings:e}){return m("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:v.a.tableOfContents},l.a.createElement(h,{headings:e})))}function h({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(h,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:o}=e,{metadata:m}=o,{description:d,title:E,permalink:h,editUrl:f,lastUpdatedAt:b,lastUpdatedBy:_,version:N}=m,{frontMatter:{image:w,keywords:y,hide_title:k,hide_table_of_contents:C}}=o,O=E?`${E} | ${n}`:n,j=Object(c.a)(w,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,O),l.a.createElement("meta",{property:"og:title",content:O}),d&&l.a.createElement("meta",{name:"description",content:d}),d&&l.a.createElement("meta",{property:"og:description",content:d}),y&&y.length&&l.a.createElement("meta",{name:"keywords",content:y.join(",")}),w&&l.a.createElement("meta",{property:"og:image",content:j}),w&&l.a.createElement("meta",{property:"twitter:image",content:j}),w&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),h&&l.a.createElement("meta",{property:"og:url",content:a+h}),h&&l.a.createElement("link",{rel:"canonical",href:a+h})),l.a.createElement("div",{className:Object(g.a)("container padding-vert--lg",v.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(g.a)("col",{[v.a.docItemCol]:!C})},l.a.createElement(u,null),l.a.createElement("div",{className:v.a.docItemContainer},l.a.createElement("article",null,N&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N)),!k&&l.a.createElement("header",null,l.a.createElement("h1",{className:v.a.docTitle},E)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null))),(f||b||_)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},f&&l.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(b||_)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",b&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*b).toISOString(),className:v.a.docLastUpdatedAt},new Date(1e3*b).toLocaleDateString()),_&&" "),_&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,_)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:m})))),!C&&o.rightToc&&l.a.createElement(p,{headings:o.rightToc}))))}}}]);