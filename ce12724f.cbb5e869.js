(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||a;return r?o.a.createElement(d,u(u({ref:t},l),{},{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(119));const a={id:"group_creation",title:" "},i={unversionedId:"group_creation",id:"group_creation",isDocsHomePage:!1,title:" ",description:"Group Registration",source:"@site/docs\\group_creation.md",permalink:"/cs421_f20/docs/group_creation",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/group_creation.md"},u=[],c={rightToc:u};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"group-registration"},"Group Registration"),Object(o.b)("p",null,"You must register your group using the form below:"),Object(o.b)("form",{method:"POST",action:"https://roboose.herokuapp.com/roboose/groups"},Object(o.b)("fieldset",{markdown:"1"},Object(o.b)("legend",null,"Group Registration"),Object(o.b)("label",null,Object(o.b)("strong",null,"Group Identifier"),Object(o.b)("input",{type:"text",name:"identifier",required:!0,pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),Object(o.b)("small",null,"This must be a valid GitHub identifier: it may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen. Don\u2019t include an `@` sign at the beginning\u2014this isn\u2019t a mention. You may choose an identifier related to your project if you already decided on one. Or you may just choose a name for your group, for example, `power-oosers`."),Object(o.b)("label",null,Object(o.b)("strong",null,"Group Members GitHub Identifiers:")),Object(o.b)("label",null,Object(o.b)("input",{type:"text",name:"members[]",required:!0,pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),Object(o.b)("label",null,Object(o.b)("input",{type:"text",name:"members[]",required:!0,pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),Object(o.b)("label",null,Object(o.b)("input",{type:"text",name:"members[]",placeholder:"(Optional)",pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),Object(o.b)("label",null,Object(o.b)("input",{type:"text",name:"members[]",placeholder:"(Optional)",pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),Object(o.b)("label",null,Object(o.b)("input",{type:"text",name:"members[]",placeholder:"(Optional)",pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),Object(o.b)("label",null,Object(o.b)("input",{type:"text",name:"members[]",placeholder:"(Optional)",pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),Object(o.b)("small",null,"These must be the GitHub identifiers of registered students. Don\u2019t include an `@` sign at the beginning\u2014this isn\u2019t a mention. GitHub identifiers **do not** start with `2020-student-spring-`. Groups must have 5 or 6 members."),Object(o.b)("label",null,Object(o.b)("button",null,"Register")))),Object(o.b)("p",null,"!!! warning\nDon\u2019t submit this form multiple times."),Object(o.b)("p",null,"!!! tip\nIf you run into problems, send a private message on Piazza. Include all the information from the form above."),Object(o.b)("p",null,"!!! note\nAfter you register your group, the group members are invited to a GitHub Team, which grants you access to your group's repository. You\u2019ll use this repository throughout the course to submit iterations, receive reviews, communicate with your advisor, and so forth."))}l.isMDXComponent=!0}}]);