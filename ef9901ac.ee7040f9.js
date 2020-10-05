(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(151)),o={id:"sql",title:"Creating Content Using JDBC and SQL",sidebar_label:"Structured Query Language"},c={unversionedId:"readings/db/sql",id:"readings/db/sql",isDocsHomePage:!1,title:"Creating Content Using JDBC and SQL",description:'We will interact with relational databases using JDBC and the Structured Query Language (SQL). SQL is a domain specific language designed for updating and retrieving data in table-based databases. We will not cover it in class but you will likely need to use it. SQL is very easy and descriptive. In most cases, a simple Google search will be sufficient to find "how to" do something with SQL. My go-to place to lookup SQL syntax is https://www.w3schools.com/sql/.',source:"@site/docs\\readings\\db\\sql.md",permalink:"/cs421_f20/docs/readings/db/sql",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/sql.md",sidebar_label:"Structured Query Language",sidebar:"docs",previous:{title:"The Java Database Connectivity (JDBC) API",permalink:"/cs421_f20/docs/readings/db/jdbc"},next:{title:"Persist Objects in Databases",permalink:"/cs421_f20/docs/readings/db/persist_objects_in_db"}},s=[{value:"Create a table",id:"create-a-table",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'We will interact with relational databases using JDBC and the Structured Query Language (SQL). SQL is a domain specific language designed for updating and retrieving data in table-based databases. We will not cover it in class but you will likely need to use it. SQL is very easy and descriptive. In most cases, a simple Google search will be sufficient to find "how to" do something with SQL. My go-to place to lookup SQL syntax is ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/sql/"}),"https://www.w3schools.com/sql/"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are interested in learning more, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://sqlzoo.net/"}),"SQLZoo")," is one of the best and popular website for learning SQL online. For general knowledge, checkout ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/SQL"}),"SQL on Wikipedia"),"."))),Object(i.b)("p",null,"Recall, from previous section, that we have created a connection to our SQLite database through JDBC:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'final String URI = "jdbc:sqlite:./MyBookApps.db"; \nConnection conn = DriverManager.getConnection(URI);\n')),Object(i.b)("h2",{id:"create-a-table"},"Create a table"),Object(i.b)("p",null,"To create a table, we can execute the following SQL statement:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE IF NOT EXISTS Authors (id INTEGER PRIMARY KEY, \n       name VARCHAR(100) NOT NULL UNIQUE, numOfBooks INTEGER, nationality VARCHAR(30));\n")),Object(i.b)("p",null,"Notice SQL reads like English! There is really no need to explain it; is there?!"),Object(i.b)("p",null,"We can execute a SQL statement by (1) creating a ",Object(i.b)("inlineCode",{parentName:"p"},"Statement")," object and (2) invoking its ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," method, passing the SQL statement as an argument to it. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Statement st = conn.createStatement();\nString sql = "CREATE TABLE IF NOT EXISTS Authors (id INTEGER PRIMARY KEY, \n              name VARCHAR(100) NOT NULL UNIQUE, numOfBooks INTEGER, nationality VARCHAR(30));";\nst.execute(sql);\n')))}d.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);