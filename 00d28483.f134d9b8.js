(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=(n(0),n(126));const i={id:"srs",title:"Software requirement specification",sidebar_label:"Software Requirement Specification"},o={unversionedId:"readings/srs",id:"readings/srs",isDocsHomePage:!1,title:"Software requirement specification",description:"A requirement is a single thing that the software has to do.",source:"@site/docs\\readings\\srs.md",permalink:"/cs421_f20/docs/readings/srs",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/srs.md",sidebar_label:"Software Requirement Specification",sidebar:"docs",previous:{title:"Build software that is needed",permalink:"/cs421_f20/docs/readings/build_software"},next:{title:"Software Process Models",permalink:"/cs421_f20/docs/readings/software_process"}},c=[{value:"The specification document",id:"the-specification-document",children:[]},{value:"Best Practices",id:"best-practices",children:[]},{value:"Sample Project Specification",id:"sample-project-specification",children:[]}],s={rightToc:c};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"requirement")," is a single thing that the software has to do.",Object(r.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),Object(r.b)("p",null,"Requirement specification involves defining the intended functionality of the software and potential constraints on its operation. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Step one in building your software project is to understand what the requirements are.",Object(r.b)("br",{parentName:"p"}),"\n","This phase is also called ",Object(r.b)("strong",{parentName:"p"},"Product Discovery"),"."))),Object(r.b)("h2",{id:"the-specification-document"},"The specification document"),Object(r.b)("p",null,"Make a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/document/d/1xsof7GoMBMUrotWfhQoi5YFlcOT0bSS93RN3pCJ-Ukw/edit?usp=sharing"}),"copy")," of a template for project requirement specification."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The specification of the software system is one of the most important\ndocuments to connect the customer and the engineering team.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When you're capturing the requirements for a software system, you want to\nmake sure that you write down all the requirements (not missing any\nfunctionality that the customer actually cared about). Moreover, make sure the\nrequirements are consistent with one another, jotted down precisely and\nas concise as possible.\n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"It is important to keep in mind that a software specification is an\nabstraction of what the system will end up being at the end.\nWhen you start implementing the system and get down to the lower\nlevel details, you'll realize that there are problems with the initial\nspecification. That's okay; in fact there are often things that you couldn't\nactually have figured out in advance."))),Object(r.b)("h2",{id:"best-practices"},"Best Practices"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Software projects involving several people start out with very different impressions on how the app should be structured.\nYour primary goal is to expand on and unify those visions into one cohesive vision.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"This happens through extensive discussing, questioning, sketching, ... All parties involved need to be at the table: management, developers, customers, ..."))),Object(r.b)("h2",{id:"sample-project-specification"},"Sample Project Specification"),Object(r.b)("p",null,"During lecture, we have produced a specification document for the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),'"Gateway Signup App"')),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-1"}),"In systems engineering and requirements engineering, ",Object(r.b)("em",{parentName:"li"},"functional")," requirements define what a system is supposed to do and ",Object(r.b)("em",{parentName:"li"},"non-functional")," requirements define how a system is supposed to be. In OOSE, requirement means ",Object(r.b)("strong",{parentName:"li"},"functional")," requirement. ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}p.isMDXComponent=!0}}]);