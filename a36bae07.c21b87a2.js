(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return f}));var a=n(2),r=n(6),i=(n(0),n(136)),b={id:"persist_objects_in_db",title:"Persist Objects in Databases",sidebar_label:"Persist Objects in Databases"},o={unversionedId:"readings/db/persist_objects_in_db",id:"readings/db/persist_objects_in_db",isDocsHomePage:!1,title:"Persist Objects in Databases",description:"So far, we set up and connected to our SQLite database, and ran SQL statements on it from our Java application. How can we use this arrangement to persist our application's data?",source:"@site/docs\\readings\\db\\persist_objects_in_db.md",permalink:"/cs421_f20/docs/readings/db/persist_objects_in_db",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/persist_objects_in_db.md",sidebar_label:"Persist Objects in Databases"},c=[{value:"Authors Table",id:"authors-table",children:[]}],s={rightToc:c};function f(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,b,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"So far, we set up and connected to our SQLite database, and ran SQL statements on it from our Java application. How can we use this arrangement to persist our application's data?"),Object(i.b)("p",null,"As noted, relational databases, like SQLite, are structured around tables (similar to those in a document or spreadsheet). Each class in your Java application maps to a different table. The class name maps to the table name. Each property of the class (fields) map to a column in that table. Each object instance corresponds to a row in that table; it holds the values that describe a particular entry."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In relational databases, we expect each record (row in a table) to be unique. If there is an attribute (column) that can uniquely identify each record, then we are good! That attribute can be identified as the ",Object(i.b)("strong",{parentName:"p"},"primary key")," for that table.",Object(i.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-1"}),Object(i.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," If a table does not have a primary key, you must make one for it by assigning a unique identifier to each row. Usually, this is as simple as having a column that contains a number that increments every time you create a new record."))),Object(i.b)("p",null,"In SQLite, you get a primary key for free, called ",Object(i.b)("inlineCode",{parentName:"p"},"ROWID"),". This is in every SQLite table whether you ask for it or not. ROWID is assigned a value whenever you ",Object(i.b)("inlineCode",{parentName:"p"},"INSERT")," a row. If you include a column of type ",Object(i.b)("inlineCode",{parentName:"p"},"INTEGER PRIMARY KEY"),", that column points at (is an alias for) the automatic ",Object(i.b)("inlineCode",{parentName:"p"},"ROWID")," column."),Object(i.b)("h2",{id:"authors-table"},"Authors Table"),Object(i.b)("p",null,"When creating a table in SQLite, we can create a ",Object(i.b)("em",{parentName:"p"},"primary key")," ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field for it as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE IF NOT EXISTS Authors (id INTEGER PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE,\n                                    int numOfBooks, nationality VARCHAR(100));\n")),Object(i.b)("p",null,"Accordingly, we must update the ",Object(i.b)("inlineCode",{parentName:"p"},"Author")," class to include an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field."),Object(i.b)("p",null,Object(i.b)("img",{src:n(223).default})),Object(i.b)("p",null,"Note that we do not provide the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," for ",Object(i.b)("inlineCode",{parentName:"p"},"Author")," (when we construct it). Instead, we let the RDBS generate it for us; we then use ",Object(i.b)("em",{parentName:"p"},"setter")," and ",Object(i.b)("em",{parentName:"p"},"getter")," methods to update/access the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field."),Object(i.b)("div",{className:"footnotes"},Object(i.b)("hr",{parentName:"div"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-1"}),"A primary key for a table could be a combination of several columns. This is called ",Object(i.b)("em",{parentName:"li"},"composite")," primary key.",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}f.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),f=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=f(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=f(n),l=a,m=p["".concat(b,".").concat(l)]||p[l]||d[l]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var s=2;s<i;s++)b[s]=n[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);