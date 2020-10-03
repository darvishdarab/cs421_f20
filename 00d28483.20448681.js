(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(147)),o={id:"srs",title:"Software requirement specification",sidebar_label:"Software Requirement Specification"},s={unversionedId:"readings/srs",id:"readings/srs",isDocsHomePage:!1,title:"Software requirement specification",description:"A requirement is a single thing that the software has to do.",source:"@site/docs\\readings\\srs.md",permalink:"/cs421_f20/docs/readings/srs",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/srs.md",sidebar_label:"Software Requirement Specification",sidebar:"docs",previous:{title:"Build software that is needed",permalink:"/cs421_f20/docs/readings/build_software"},next:{title:"Wireframe",permalink:"/cs421_f20/docs/readings/wireframe"}},c=[{value:"The specification document",id:"the-specification-document",children:[]},{value:"Best Practices",id:"best-practices",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"requirement")," is a single thing that the software has to do.",Object(i.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(i.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),Object(i.b)("p",null,"Requirement specification involves defining the intended functionality of the software and potential constraints on its operation. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Step one in building your software project is to understand what the requirements are.",Object(i.b)("br",{parentName:"p"}),"\n","This phase is also called ",Object(i.b)("strong",{parentName:"p"},"Product Discovery"),"."))),Object(i.b)("h2",{id:"the-specification-document"},"The specification document"),Object(i.b)("p",null,"Make a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.google.com/document/d/1xsof7GoMBMUrotWfhQoi5YFlcOT0bSS93RN3pCJ-Ukw/edit?usp=sharing"}),"copy")," of a template for project requirement specification."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The specification of the software system is one of the most important\ndocuments to connect the customer and the engineering team.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When you're capturing the requirements for a software system, you want to\nmake sure that you write down all the requirements (not missing any\nfunctionality that the customer actually cared about). Moreover, make sure the\nrequirements are consistent with one another, jotted down precisely and\nas concise as possible.\n")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It is important to keep in mind that a software specification is an\nabstraction of what the system will end up being at the end.\nWhen you start implementing the system and get down to the lower\nlevel details, you'll realize that there are problems with the initial\nspecification. That's okay; in fact there are often things that you couldn't\nactually have figured out in advance."))),Object(i.b)("h2",{id:"best-practices"},"Best Practices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Software projects involving several people start out with very different impressions on how the app should be structured.\nYour primary goal is to expand on and unify those visions into one cohesive vision.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This happens through extensive discussing, questioning, sketching, ... All parties involved need to be at the table: management, developers, customers, ..."))),Object(i.b)("div",{className:"footnotes"},Object(i.b)("hr",{parentName:"div"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",Object(r.a)({parentName:"ol"},{id:"fn-1"}),"In systems engineering and requirements engineering, ",Object(i.b)("em",{parentName:"li"},"functional")," requirements define what a system is supposed to do and ",Object(i.b)("em",{parentName:"li"},"non-functional")," requirements define how a system is supposed to be. In OOSE, requirement means ",Object(i.b)("strong",{parentName:"li"},"functional")," requirement. ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0}}]);