(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(136));const o={id:"code_reflect",title:"A Reflection on Implementation",sidebar_label:"A Reflection on Implementation"},i={unversionedId:"readings/db/code_reflect",id:"readings/db/code_reflect",isDocsHomePage:!1,title:"A Reflection on Implementation",description:"Recall how we need to fill in the attributes one by one using PreparedStatement:",source:"@site/docs\\readings\\db\\code_reflect.md",permalink:"/cs421_f20/docs/readings/db/code_reflect",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/code_reflect.md",sidebar_label:"A Reflection on Implementation"},c=[],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Recall how we need to fill in the attributes one by one using ",Object(a.b)("inlineCode",{parentName:"p"},"PreparedStatement"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// PRE: id of course is not set yet.\nBook b1 = new Book ("The Catcher in the Rye", "978-7543321724", \n                          "Little, Brown and Company", 1991, 1);\nPreparedStatement sql = "INSERT INTO Books (title, isbn, publisher, year, author) \n                         VALUES (?, ?, ?, ?, ?);";\npst = conn.prepareStatement(sql);\npst.setString(1, b1.getTitle());\npst.setString(2, b1.getIsbn());\npst.setString(3, b1.getPublisher());\npst.setInt(4, b1.getYear());\npst.setString(5, b1.getAuthorId());\npst.execute();\n')),Object(a.b)("p",null,"The above peice of code is, in a way, a ",Object(a.b)("em",{parentName:"p"},"mapping")," between a ",Object(a.b)("inlineCode",{parentName:"p"},"Book")," object and a ",Object(a.b)("strong",{parentName:"p"},"record")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"Books")," table. "),Object(a.b)("p",null,"To map an object into a record, it requires some work to ",Object(a.b)("em",{parentName:"p"},"get")," the value of each attribute and ",Object(a.b)("em",{parentName:"p"},"set")," it in the corresponding column in the table. Imagine if ",Object(a.b)("inlineCode",{parentName:"p"},"Books")," had many more fields; it seems like there must be a better way to map an object into a record (in a relational database); someone must have had this problem and thought of writing a library to solve this problem (at least as long as the fields - in a class - correspond directly to the columns in a table)! "),Object(a.b)("p",null,"Well, you will not be surprised to learn there exist libraries called ",Object(a.b)("strong",{parentName:"p"},"Object Relational Mapping (ORM)")," to solve this problem. We will next explore a simple ORM called Sql2o. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Inserting instance field values one by one into a SQL query is not only mechanical, but also fragile. If we add a new\nfield to the ",Object(a.b)("inlineCode",{parentName:"p"},"Book")," class, we need to modify the above parameterized statement to accommodate for the newly added parameter."))))}s.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);