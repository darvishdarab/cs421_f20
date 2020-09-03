(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{118:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return l}));var n=t(2),i=t(6),r=(t(0),t(136)),o={id:"rdbms",title:"Relational Databases",sidebar_label:"Relational Databases"},s={unversionedId:"readings/db/rdbms",id:"readings/db/rdbms",isDocsHomePage:!1,title:"Relational Databases",description:"For simple applications, it is fine to persist data - to store stuff - directly to disk as text files.",source:"@site/docs\\readings\\db\\rdbms.md",permalink:"/cs421_f20/docs/readings/db/rdbms",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/rdbms.md",sidebar_label:"Relational Databases"},c=[{value:"Relational Database Management Systems (RDBMS)",id:"relational-database-management-systems-rdbms",children:[]},{value:"SQLite",id:"sqlite",children:[]}],b={rightToc:c};function l(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For simple applications, it is fine to persist data - to store stuff - directly to disk as text files.\nHowever, when building larger applications, in particular for use by more than one person, file-based persistence can cause problems:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sharing can cause data loss or lead to security problems"),Object(r.b)("li",{parentName:"ul"},"having multiple files can result in data redundancy and inconsistency"),Object(r.b)("li",{parentName:"ul"},"querying files is difficult in particular in case of concurrent access")),Object(r.b)("p",null,"The solution is to use a ",Object(r.b)("em",{parentName:"p"},"database")," (together with a Database Management System)."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"What is a database?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A database is a shared collection of related\xa0data."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"What is a Database Management System?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Database Management Systems (DBMS) provide a convenient environment to create, secure and maintain databases. Moreover, DBMS provide an API for users to (efficiently) retrieve and store information from/to database."))),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"relational database"),' is a data model that stores the data as "a collection of inter-related ',Object(r.b)("em",{parentName:"p"},"relations")," (or ",Object(r.b)("strong",{parentName:"p"},"tables"),')."\nIt is, probably, the most popular and widely used ',Object(r.b)("em",{parentName:"p"},"type")," of database.",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),"\nThe relationship between data (which is captured by the relationship between tables) is a kind of meta-data (data about data) which further adds value to the application of this data model."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Table")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Relational databases are made up of tables. A\xa0table\xa0is a collection of related data held in a tabular format where"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Each row is unique and represents a ",Object(r.b)("em",{parentName:"li"},"record"),"."),Object(r.b)("li",{parentName:"ul"},"Each column has a unique name and represents an ",Object(r.b)("em",{parentName:"li"},"attribute"),"."),Object(r.b)("li",{parentName:"ul"},"Column values are of the same kind."),Object(r.b)("li",{parentName:"ul"},"The sequence of columns/rows is insignificant.")))),Object(r.b)("h2",{id:"relational-database-management-systems-rdbms"},"Relational Database Management Systems (RDBMS)"),Object(r.b)("p",null,"RDBMS are software services that facilitate working with relational databases. Over the decades, many RDBMS have been developed for different uses. Each BDMS is tuned to best provide certain features (such as performance, scalability, simplicity, etc.).\nEvery RDBMS provides an application programming interface (API) for user to work with the database. The API is commonly in form of a querying language that conforms (in most parts) to the standard ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/SQL"}),"Structured Querying Language (SQL)"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'For brevity, from this point on, I use the term "database" to refer to a (relational) database together with its (R)DBMS application (server).'))),Object(r.b)("h2",{id:"sqlite"},"SQLite"),Object(r.b)("p",null,"SQLite is a simple database which can store all its tables in one file on the disk - so let's use it! You can install it (add it as a dependency to your project) by adding the following line to the ",Object(r.b)("inlineCode",{parentName:"p"},"dependency")," block in ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"compile group: 'org.xerial', name: 'sqlite-jdbc', version: '3.32.3'\n")),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"Other database types are often referred to as ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/NoSQL"}),"NoSQL databases"),".",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0},136:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),l=function(e){var a=i.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=l(e.components);return i.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},p=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=l(t),p=n,u=d["".concat(o,".").concat(p)]||d[p]||m[p]||r;return t?i.a.createElement(u,s(s({ref:a},b),{},{components:t})):i.a.createElement(u,s({ref:a},b))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<r;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);