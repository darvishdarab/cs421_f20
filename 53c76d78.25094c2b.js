(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{167:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||r;return a?o.a.createElement(m,s(s({ref:t},l),{},{components:a})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),o=(a(0),a(167));const r={id:"db",title:"Database in the cloud",sidebar_label:"Database in the Cloud"},i={unversionedId:"readings/ci/db",id:"readings/ci/db",isDocsHomePage:!1,title:"Database in the cloud",description:"Heroku does not play well with SQLite",source:"@site/docs\\readings\\ci\\db.md",permalink:"/cs421_f20/docs/readings/ci/db",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/ci/db.md",sidebar_label:"Database in the Cloud",sidebar:"docs",previous:{title:"Continuous delivery with Heroku",permalink:"/cs421_f20/docs/readings/ci/cd"},next:{title:"Continuous integration with Github Actions",permalink:"/cs421_f20/docs/readings/ci/ci"}},s=[{value:"Heroku does not play well with SQLite",id:"heroku-does-not-play-well-with-sqlite",children:[]},{value:"PostgreSQL database",id:"postgresql-database",children:[]},{value:"PostgreSQL Add-on",id:"postgresql-add-on",children:[]},{value:"Deploy",id:"deploy",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"heroku-does-not-play-well-with-sqlite"},"Heroku does not play well with SQLite"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"SQLite is serverless, runs in memory, and backs up its data in small files on disk that are easily created and moved around. While easy to use, SQLite is not intended as a ",Object(o.b)("em",{parentName:"p"},"production grade")," database. In particular, SQLite will not play well with Heroku because Heroku uses ",Object(o.b)("em",{parentName:"p"},"an ephemeral filesystem"),"; you can write to it, and you can read from it, but the contents will be cleared periodically. If you were to use SQLite on Heroku, you would lose your entire database at least once every 24 hours!"))),Object(o.b)("h2",{id:"postgresql-database"},"PostgreSQL database"),Object(o.b)("p",null,"Heroku provides production grade ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.heroku.com/postgres"}),"PostgreSQL")," databases as a service. PostgreSQL database can be used by any language and framework, and it is very easy to connect your Java App to it;\nyou'll need to change your JDBC driver but probably not much else."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Even though SQL is the standard language to use with SQL-based relational databases such as SQLite, PostgreSQL, MySQL etc., each of these DBMSs may have their ",Object(o.b)("em",{parentName:"p"},"dialect")," of SQL. This at times may affect how you would need to write/set up your SQL queries. "))),Object(o.b)("p",null,"First, add the JDBC driver for PostgreSQL to your project dependencies: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'org.postgresql:postgresql:42.2.17'\n")),Object(o.b)("p",null,"Also, add ",Object(o.b)("inlineCode",{parentName:"p"},"SQLite")," as follows (in case the app is run locally):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'org.xerial:sqlite-jdbc:3.32.3.2'\n")),Object(o.b)("p",null,"Let's write a sample code to demonstrate the process of connecting to Heroku Postgres. Here is the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," method from last reading; I added a call to ",Object(o.b)("inlineCode",{parentName:"p"},"workWithDatabase()")," at the end:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    port(getHerokuAssignedPort());\n    get("/", (req, res) -> "Hi Heroku!");\n    workWithDatabase();\n}\n')),Object(o.b)("p",null,"Here is the implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"workWithDatabase()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'private static void workWithDatabase(){\n    try (Connection conn = getConnection()) {\n        String sql = "";\n\n        if ("SQLite".equalsIgnoreCase(conn.getMetaData().getDatabaseProductName())) { // running locally\n            sql = "CREATE TABLE IF NOT EXISTS Authors (id INTEGER PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE," +\n                    " numOfBooks INTEGER, nationality VARCHAR(30));";\n        }\n        else {\n            sql = "CREATE TABLE IF NOT EXISTS Authors (id serial PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE," +\n                    " numOfBooks INTEGER, nationality VARCHAR(30));";\n        }\n\n        Statement st = conn.createStatement();\n        st.execute(sql);\n\n        sql = "INSERT INTO Authors(name, numOfBooks, nationality) VALUES (\'Leo Tolstoy\', 12, \'Russian\');";\n        st.execute(sql);\n\n    } catch (URISyntaxException | SQLException e) {\n        e.printStackTrace();\n    }\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"workWithDatabase")," is a very simple example of using JDBC to (1) establish a ",Object(o.b)("em",{parentName:"p"},"Connection")," to a SQL database and (2) execute two SQL statements to create a table and insert a record into it. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In the above code, note how we first decide which DBMS we are working with (SQLite or PostgreSQL) to set up our table creation accordingly; ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/9.1/datatype-numeric.html"}),Object(o.b)("inlineCode",{parentName:"a"},"serial"))," is Postgres way of creating an ",Object(o.b)("em",{parentName:"p"},"autoincrement")," integer column."))),Object(o.b)("p",null,"Note the use of ",Object(o.b)("inlineCode",{parentName:"p"},"getConnection()")," method; here is the implementation for it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'private static Connection getConnection() throws URISyntaxException, SQLException {\n    String databaseUrl = System.getenv("DATABASE_URL");\n    if (databaseUrl == null) {\n        // Not on Heroku, so use SQLite\n        return DriverManager.getConnection("jdbc:sqlite:./MyBooksApp.db");\n    }\n\n    URI dbUri = new URI(databaseUrl);\n\n    String username = dbUri.getUserInfo().split(":")[0];\n    String password = dbUri.getUserInfo().split(":")[1];\n    String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + \':\'\n            + dbUri.getPort() + dbUri.getPath() + "?sslmode=require";\n\n    return DriverManager.getConnection(dbUrl, username, password);\n}\n\n')),Object(o.b)("p",null,"When we were working with SQLite, we used a URI like ",Object(o.b)("inlineCode",{parentName:"p"},"jdbc:sqlite:./MyBooksAoo.db")," to instantiate a JDBC connection in your code. Heroku puts the URI of the PostgreSQL database in a ",Object(o.b)("em",{parentName:"p"},"environment variable")," ",Object(o.b)("inlineCode",{parentName:"p"},"DATABASE_URL"),". We can directly get the ",Object(o.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," in code.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," for the Heroku Postgres follows the below convention"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain"}),"postgres://<username>:<password>@<host>:<port>/<dbname>\n")),Object(o.b)("p",null,"However, the Postgres JDBC driver uses the following convention:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain"}),"jdbc:postgresql://<host>:<port>/<dbname>?user=<username>&password=<password>\n")),Object(o.b)("p",null,"The code in ",Object(o.b)("inlineCode",{parentName:"p"},"getConnection()")," converts the Heroku ",Object(o.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," into a JDBC URI."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The example above uses SQLite when you are not on Heroku and PostgreSQL database when you are on Heroku. This is only for demonstration purposes. ",Object(o.b)("strong",{parentName:"p"},"It is important that you use the same database in production as in development.")," So, if you are going to deploy your app on Heroku, you will need to install the PostgreSQL database locally. You can download and lean about Postgres ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/download/"}),"here"),"."))),Object(o.b)("h2",{id:"postgresql-add-on"},"PostgreSQL Add-on"),Object(o.b)("p",null,"Before you deploy your app to Heroku, you need to create the Heroku Postgres add-on for your app using the Heroku CLI; open the terminal at the root directory of your Java project and type the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ heroku addons:create heroku-postgresql\n")),Object(o.b)("h2",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"Finally, run the following command to deploy your app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ ./gradlew build deployHeroku\n")),Object(o.b)("p",null,"To checkout the Postgres database provisioned for your app (and its content) you can use Heroku CLI. Learn more on this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/heroku-postgresql#using-the-cli"}),"here"),". Alternatively, install PostgreSQL locally and connect it to Heroku Postgres following the instructions ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/heroku-postgresql#local-setup"}),"here"),"."))}l.isMDXComponent=!0}}]);