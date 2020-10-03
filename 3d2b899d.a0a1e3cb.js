(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,O=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(O,c(c({ref:t},l),{},{components:n})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(147)),o={id:"ooad",title:"Object-Oriented Analysis & Design",sidebar_label:"Object-Oriented Analysis & Design"},c={unversionedId:"readings/ooad",id:"readings/ooad",isDocsHomePage:!1,title:"Object-Oriented Analysis & Design",description:"Object-oriented analysis and design (OOAD) is a software engineering approach that models a system as a group of interacting objects.",source:"@site/docs\\readings\\ooad.md",permalink:"/cs421_f20/docs/readings/ooad",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/ooad.md",sidebar_label:"Object-Oriented Analysis & Design",sidebar:"docs",previous:{title:"Object-Oriented Programming",permalink:"/cs421_f20/docs/readings/oop"},next:{title:"Unified Modeling Language",permalink:"/cs421_f20/docs/readings/uml"}},s=[],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Object-oriented analysis and design (OOAD) is a software engineering approach that models a system as a group of interacting objects.\xa0"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Objects must model the behavior and state relevant to the system being implemented. Only certain properties and behavior are relevant; identifying what is relevant is a key part of OOAD."))),Object(i.b)("p",null,"OOAD involves:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Analysis"),", or ",Object(i.b)("em",{parentName:"li"},"problem modeling"),", in which the problem is described and represented."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Design"),", or ",Object(i.b)("em",{parentName:"li"},"solution modeling"),", in which a solution to the problem is discovered and represented."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Implementation"),", in which the code that makes up the working system is written and tested.")),Object(i.b)("p",null,'In a traditional plan-driven model (like "Waterfall") these steps are taken in order and in turn. In an agile software development model, the ',Object(i.b)("em",{parentName:"p"},"incremental approach")," to development is taken where at each ",Object(i.b)("em",{parentName:"p"},"cycle")," (iteration), you analyze ",Object(i.b)("em",{parentName:"p"},"a little"),", design ",Object(i.b)("em",{parentName:"p"},"a little")," and then code ",Object(i.b)("em",{parentName:"p"},"a little"),". At the end of the cycle, you receive feedback and respond to changes."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The analyze-a-little, design-a-little, code-a-little cycle is what we expect you to employ through project iterations."))))}d.isMDXComponent=!0}}]);