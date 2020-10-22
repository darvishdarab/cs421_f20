(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(156));const o={id:"code_reflect",title:"A Reflection on Implementation",sidebar_label:"A Reflection on Implementation"},i={unversionedId:"readings/db/code_reflect",id:"readings/db/code_reflect",isDocsHomePage:!1,title:"A Reflection on Implementation",description:"Recall how we need to fill in the attributes one by one using PreparedStatement:",source:"@site/docs\\readings\\db\\code_reflect.md",permalink:"/cs421_f20/docs/readings/db/code_reflect",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/code_reflect.md",sidebar_label:"A Reflection on Implementation",sidebar:"docs",previous:{title:"CRUD operations in Data Access Object (DAO)",permalink:"/cs421_f20/docs/readings/db/dao"},next:{title:"Object Relational Mapping (ORM)",permalink:"/cs421_f20/docs/readings/db/orm"}},c=[],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Recall how we need to fill in the attributes one by one using ",Object(r.b)("inlineCode",{parentName:"p"},"PreparedStatement"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Author a = new Author ("Franz Kafka", 16, "Czechoslovakian");\nString sql = "INSERT INTO Authors (id, name, numOfBooks, nationality)" +\n                          "VALUES (NULL, ?, ?, ?);";\nPreparedStatement pst = conn.prepareStatement(sql);\npst.setString(1, a.getName());\npst.setString(2, String.valueOf(a.getNumOfBooks()));\npst.setString(3, a.getNationality());\npst.execute();\n')),Object(r.b)("p",null,"The above peice of code is, in a way, a ",Object(r.b)("em",{parentName:"p"},"mapping")," between an ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," object and a ",Object(r.b)("strong",{parentName:"p"},"record")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table. "),Object(r.b)("p",null,"To map an object into a record, it requires some work to ",Object(r.b)("em",{parentName:"p"},"get")," the value of each attribute and ",Object(r.b)("em",{parentName:"p"},"set")," it in the corresponding column in the table. Imagine if ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," had many more fields; it seems like there must be a better way to map an object into a record (in a relational database); someone must have had this problem and thought of writing a library to solve this problem (at least as long as the fields - in a class - correspond directly to the columns in a table)! "),Object(r.b)("p",null,"Well, you will not be surprised to learn there exist libraries called ",Object(r.b)("strong",{parentName:"p"},"Object Relational Mapping (ORM)")," to solve this problem. We will next explore a simple ORM called Sql2o. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Inserting instance field values one by one into a SQL query is not only mechanical, but also fragile. If we add a new\nfield to the ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," class, we need to modify the above parameterized statement to accommodate for the newly added parameter."))))}s.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);