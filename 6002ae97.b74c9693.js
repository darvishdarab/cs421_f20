(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(176)),i={id:"html",title:"HTML",sidebar_label:"HTML"},c={unversionedId:"readings/front/html",id:"readings/front/html",isDocsHomePage:!1,title:"HTML",description:"Tags and attributes are the basis of an HTML page. Tags are used to indicate or mark up the start and end of an HTML element. Tags come inside",source:"@site/docs\\readings\\front\\html.md",permalink:"/cs421_f20/docs/readings/front/html",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/front/html.md",sidebar_label:"HTML",sidebar:"docs",previous:{title:"Front-end development",permalink:"/cs421_f20/docs/readings/front/front"},next:{title:"CSS",permalink:"/cs421_f20/docs/readings/front/css"}},s=[{value:"Main parts of an HTML page",id:"main-parts-of-an-html-page",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tags and attributes are the basis of an HTML page. Tags are used to indicate or mark up the start and end of an HTML element. Tags come inside\nangle brackets. To close a tag, we need to add ",Object(o.b)("inlineCode",{parentName:"p"},"/")," before the tag name. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"<h1>")," is a tag used to produce a heading title with large size on the page, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"<h1>This is a large title</h1>"),". Tags can be nested, but must be closed in order in which they were opened, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"<strong><em>This is an important note!</em></strong>")),Object(o.b)("p",null,"Attributes go inside tags and provide additional information/settings about the tag, e.g. in ",Object(o.b)("inlineCode",{parentName:"p"},'<img src="mydog.jpg" alt="A photo of my dog."></img>'),", ",Object(o.b)("inlineCode",{parentName:"p"},"img")," is the tag and ",Object(o.b)("inlineCode",{parentName:"p"},"src")," ",Object(o.b)("inlineCode",{parentName:"p"},"alt")," are its attributes: ",Object(o.b)("inlineCode",{parentName:"p"},"src")," is the location of the image to be loaded into the page and ",Object(o.b)("inlineCode",{parentName:"p"},"alt")," specifes an alternate peice of text in case the image cannot be loaded. You can open and close a tag at once: e.g. in ",Object(o.b)("inlineCode",{parentName:"p"},'<img src="mydog.jpg" alt="A photo of my dog." />')),Object(o.b)("h3",{id:"main-parts-of-an-html-page"},"Main parts of an HTML page"),Object(o.b)("p",null,"An HTML page typically starts with ",Object(o.b)("inlineCode",{parentName:"p"},"<!DOCTYPE html>")," indicating that this is a HTML5 (i.e. version 5) page. An HTML page can be broken down into two main parts: ",Object(o.b)("inlineCode",{parentName:"p"},"head")," and ",Object(o.b)("inlineCode",{parentName:"p"},"body"),". The title of page is set in the head part, and it containt meta data about the page and information that can be useful for search engines. ",Object(o.b)("inlineCode",{parentName:"p"},"body"),", not so surprisingly, contains the page content. This is what we had for front page of ",Object(o.b)("inlineCode",{parentName:"p"},"MyBoosksApp"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <title>$title</title>\n</head>\n<body>\n<h1>Welcome to MyBooks App</h1>\n<div class="divContents indexLinkWrapper">\n    <p><a class="content indexLink" href="/authors">Show all authors</a></p>\n    <p><a class="content indexLink" href="/addauthor">Add author</a></p>\n</div>\n</body>\n</html>\n')),Object(o.b)("p",null,"To learn more on HTML, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML"}),"MDN web docs")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/html/"}),"w3schools")," are great resources."))}l.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);