(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{101:function(e,t,A){"use strict";A.r(t),A.d(t,"frontMatter",(function(){return o})),A.d(t,"metadata",(function(){return c})),A.d(t,"rightToc",(function(){return b})),A.d(t,"default",(function(){return i}));var n=A(2),r=A(6),a=(A(0),A(136)),o={id:"persist_objects_in_db",title:"Persist Objects in Databases",sidebar_label:"Persist Objects in Databases"},c={unversionedId:"readings/db/persist_objects_in_db",id:"readings/db/persist_objects_in_db",isDocsHomePage:!1,title:"Persist Objects in Databases",description:"So far, we set up and connected to our SQLite database, and ran SQL statements on it from our Java application. How can we use this arrangement to persist our application's data?",source:"@site/docs\\readings\\db\\persist_objects_in_db.md",permalink:"/cs421_f20/docs/readings/db/persist_objects_in_db",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/persist_objects_in_db.md",sidebar_label:"Persist Objects in Databases"},b=[{value:"Courses Table",id:"courses-table",children:[]}],s={rightToc:b};function i(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So far, we set up and connected to our SQLite database, and ran SQL statements on it from our Java application. How can we use this arrangement to persist our application's data?"),Object(a.b)("p",null,"As noted, relational databases, like SQLite, are structured around tables (similar to those in a document or spreadsheet). Each class in your Java application maps to a different table. The class name maps to the table name. Each property of the class (fields) map to a column in that table. Each object instance corresponds to a row in that table; it holds the values that describe a particular entry."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"In relational databases, we expect each record (row in a table) to be unique. If there is an attribute (column) that can uniquely identify each record, then we are good! That attribute can be identified as the ",Object(a.b)("strong",{parentName:"p"},"primary key")," for that table.",Object(a.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(a.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," If a table does not have a primary key, you must make one for it by assigning a unique identifier to each row. Usually, this is as simple as having a column that contains a number that increments every time you create a new record."))),Object(a.b)("p",null,"In SQLite, you get a primary key for free, called ",Object(a.b)("inlineCode",{parentName:"p"},"ROWID"),". This is in every SQLite table whether you ask for it or not. ROWID is assigned a value whenever you ",Object(a.b)("inlineCode",{parentName:"p"},"INSERT")," a row. If you include a column of type ",Object(a.b)("inlineCode",{parentName:"p"},"INTEGER PRIMARY KEY"),", that column points at (is an alias for) the automatic ",Object(a.b)("inlineCode",{parentName:"p"},"ROWID")," column."),Object(a.b)("h2",{id:"courses-table"},"Courses Table"),Object(a.b)("p",null,"When creating a table in SQLite, we can create a ",Object(a.b)("em",{parentName:"p"},"primary key")," ",Object(a.b)("inlineCode",{parentName:"p"},"id")," field for it as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE IF NOT EXISTS Books (id INTEGER PRIMARY KEY, title VARCHAR(150), isbn VARCHAR(14), \n                                  publisher VARCHAR(150), year INTEGER, author VARCHAR(100));\n")),Object(a.b)("p",null,"Accordingly, we must update the ",Object(a.b)("inlineCode",{parentName:"p"},"Book")," class to include an ",Object(a.b)("inlineCode",{parentName:"p"},"id")," field."),Object(a.b)("p",null,Object(a.b)("img",{src:A(223).default})),Object(a.b)("p",null,"Note that we do not provide the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," for ",Object(a.b)("inlineCode",{parentName:"p"},"Book")," (when we construct it). Instead, we let the RDBS generate it for us; we then use ",Object(a.b)("em",{parentName:"p"},"setter")," and ",Object(a.b)("em",{parentName:"p"},"getter")," methods to update/access the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," field."),Object(a.b)("div",{className:"footnotes"},Object(a.b)("hr",{parentName:"div"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"A primary key for a table could be a combination of several columns. This is called ",Object(a.b)("em",{parentName:"li"},"composite")," primary key.",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}i.isMDXComponent=!0},136:function(e,t,A){"use strict";A.d(t,"a",(function(){return d})),A.d(t,"b",(function(){return p}));var n=A(0),r=A.n(n);function a(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function c(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(Object(A),!0).forEach((function(t){a(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function b(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):c(c({},t),e)),A},d=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var A=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=i(A),f=n,p=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return A?r.a.createElement(p,c(c({ref:t},s),{},{components:A})):r.a.createElement(p,c({ref:t},s))}));function p(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=A.length,o=new Array(a);o[0]=f;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=A[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,A)}f.displayName="MDXCreateElement"},223:function(e,t,A){"use strict";A.r(t),t.default="data:image/png;base64,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"}}]);