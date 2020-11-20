(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(185)),o={id:"jdbc",title:"The Java Database Connectivity (JDBC) API",sidebar_label:"The Java Database Connectivity (JDBC) API"},c={unversionedId:"readings/db/jdbc",id:"readings/db/jdbc",isDocsHomePage:!1,title:"The Java Database Connectivity (JDBC) API",description:"Java Database Connectivity (JDBC) is an application programming interface (API) which defines how a client may access a database. JDBC is like a bridge between a Java application and a database.",source:"@site/docs\\readings\\db\\jdbc.md",slug:"/readings/db/jdbc",permalink:"/cs421_f20/docs/readings/db/jdbc",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/jdbc.md",version:"current",sidebar_label:"The Java Database Connectivity (JDBC) API",sidebar:"docs",previous:{title:"Relational Databases",permalink:"/cs421_f20/docs/readings/db/rdbms"},next:{title:"Creating Content Using JDBC and SQL",permalink:"/cs421_f20/docs/readings/db/sql"}},s=[],b={rightToc:s};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Java Database Connectivity (JDBC) is an application programming interface (API) which defines how a client may access a database. JDBC is like a bridge between a Java application and a database."),Object(r.b)("p",null,Object(r.b)("img",{src:a(292).default})),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"sqlite-jdbc")," library (which we've added as a dependency) includes both the (SQLite) database system and its JDBC driver",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," (to connect JDBC to the database)."),Object(r.b)("p",null,"It is very easy to connect to a SQLite database: "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import java.sql.*;\n\npublic class Main {\n  public static void main(String[] args) throws SQLException {\n    final String URI = "jdbc:sqlite:./MyBooksApp.db"; \n    Connection conn = DriverManager.getConnection(URI);\n\n    // do something with the connection\n\n    conn.close();\n  }\n}\n')),Object(r.b)("p",null,"The application above will connect to a SQLite database file ",Object(r.b)("inlineCode",{parentName:"p"},"MybooksApp.db")," (it will create it if it does not exist).\nWhen creating a ",Object(r.b)("em",{parentName:"p"},"connection"),", you provide an argument that specifies the database that you want to connect to. This argument is called a ",Object(r.b)("strong",{parentName:"p"},"Universal Resource Identifier (URI)"),". A URI includes the application interface (",Object(r.b)("inlineCode",{parentName:"p"},"jdbc"),"), the RDBMS (",Object(r.b)("inlineCode",{parentName:"p"},"sqlite"),"), where to find the database (the host and path, ",Object(r.b)("inlineCode",{parentName:"p"},"./MybooksApp.db")," in the aforementioned example), and any other connection parameters required (such as login details). Note: different parts of URI is separated by a colon."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Common problems")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When you run the code above, typically, if you get an error, it will be something like this:\n",Object(r.b)("inlineCode",{parentName:"p"},'Exception in thread "main" java.sql.SQLException: No suitable driver found'),".\nMake sure ",Object(r.b)("inlineCode",{parentName:"p"},"sqlite-jdbc")," library is added to your application, check for spelling mistakes and that it has the right path.\nAlso, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/search?q=sqlite+jdbc+driver+installation"}),"stackoverflow")," is your troubleshooting friend!"))),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"JDBC is a set of interfaces; the interfaces are implemented by a database vendor's JDBC driver class. When you add the dependency for a database, it typically includes an application or data server as well as a JDBC driver that assists you to connect to the database in your Java application. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}d.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=d(a),u=n,m=l["".concat(o,".").concat(u)]||l[u]||p[u]||r;return a?i.a.createElement(m,c(c({ref:t},b),{},{components:a})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},292:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/jdbc-b56f22932c17065dd130df67bee45bb0.png"}}]);