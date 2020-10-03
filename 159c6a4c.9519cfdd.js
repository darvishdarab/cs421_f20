(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(u,s(s({ref:t},b),{},{components:a})):r.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=(a(0),a(147));const o={id:"get",title:"Endpoint: HTTP Get",sidebar_label:"Endpoint: HTTP Get"},i={unversionedId:"readings/restful/get",id:"readings/restful/get",isDocsHomePage:!1,title:"Endpoint: HTTP Get",description:"Our first task is simple:",source:"@site/docs\\readings\\restful\\get.md",permalink:"/cs421_f20/docs/readings/restful/get",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/restful/get.md",sidebar_label:"Endpoint: HTTP Get",sidebar:"docs",previous:{title:"Lambda expressions",permalink:"/cs421_f20/docs/readings/restful/lambda"},next:{title:"Endpoint: HTTP Post",permalink:"/cs421_f20/docs/readings/restful/post"}},s=[{value:"Get set up!",id:"get-set-up",children:[]},{value:"HTTP content type and statuses",id:"http-content-type-and-statuses",children:[]}],c={rightToc:s};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Our first task is simple:\nIf client access ",Object(r.b)("inlineCode",{parentName:"p"},"SERVER_URL/authors"),", it will ",Object(r.b)("inlineCode",{parentName:"p"},"Get")," a ",Object(r.b)("strong",{parentName:"p"},"list of authors"),". Note that ",Object(r.b)("inlineCode",{parentName:"p"},"SERVER_URL")," for now is port ",Object(r.b)("inlineCode",{parentName:"p"},"7000")," on ",Object(r.b)("strong",{parentName:"p"},"localhost")," (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://127.0.0.1:7000/"}),Object(r.b)("inlineCode",{parentName:"a"},"http://127.0.0.1:7000/")),") on your computer. "),Object(r.b)("p",null,"Here is a code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args)  {\n    // set port number and ignite SparkJava\n    final int PORT_NUM = 7000;\n    port(PORT_NUM);\n\n    get("/", (req, res) -> "Welcome to MyBooksApp");\n    get("/authors", (req, res) -> {\n        String results = new Gson().toJson(new Sql2oAuthorDao(getSql2o()).listAll());\n        res.type("application/json");\n        return results;\n    });\n\n}\n')),Object(r.b)("p",null,"Each of the above ",Object(r.b)("inlineCode",{parentName:"p"},"get")," function calls  defines an api endpoint and is called a ",Object(r.b)("em",{parentName:"p"},"route"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'We will use JSON to transfer data between server and client so "the list of authors" will be a JSON Array.'))),Object(r.b)("h2",{id:"get-set-up"},"Get set up!"),Object(r.b)("p",null,"In addition to starting the (local) server we must the MyBooksApp database and the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table, specifically, into our author Data Access Object (i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"AuthorsDao"),"). That is what we did with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"new Sql2oAuthorDao(getSql2o()).listAll()\n")),Object(r.b)("p",null,"Note the call to the helper method ",Object(r.b)("inlineCode",{parentName:"p"},"getSql2o()")," to get a new instance of Sql2o to the ",Object(r.b)("inlineCode",{parentName:"p"},"MyBooksApp")," database."),Object(r.b)("p",null,"Here is the implemetation of ",Object(r.b)("inlineCode",{parentName:"p"},"getSql2o")," helper method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'private static Sql2o getSql2o() {\n    final String URI = "jdbc:sqlite:./MyBooksApp.db";\n    final String USERNAME = "";\n    final String PASSWORD = "";\n    return new Sql2o(URI, USERNAME, PASSWORD);\n}\n')),Object(r.b)("p",null,"We pass the ",Object(r.b)("inlineCode",{parentName:"p"},"Sql2o")," object that this helper method returns to the constructor of the ",Object(r.b)("inlineCode",{parentName:"p"},"Sql2oAuthorDao")," class."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order for the above code to work, the ",Object(r.b)("inlineCode",{parentName:"p"},"MybooksApp")," database should exist with a valid ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table in it (and ideally some rows in the table). For more info on how to create a databse and tables, and insert rows into them, refer to the previous readings under ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"docs/readings/db/sql"}),"Persistence with Databases")," section."))),Object(r.b)("p",null,"Once we have the list of authors from the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table, we use the ",Object(r.b)("inlineCode",{parentName:"p"},"toJson")," method of ",Object(r.b)("inlineCode",{parentName:"p"},"Gson")," to convert them into a JSON array of authors and store\nthem into a string. We covered JSON and Gson ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"docs/readings/persistence/gson"}),"here"),"."),Object(r.b)("p",null,"Next, we need to set the content type of our ",Object(r.b)("em",{parentName:"p"},"http response")," as well as the response ",Object(r.b)("em",{parentName:"p"},"status"),". Since we are returning the data in JSON format, we set it accordingly, and we also set the status to ",Object(r.b)("inlineCode",{parentName:"p"},"200")," to indicate success:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'res.type("application/json");\nres.status(200);\n')),Object(r.b)("p",null,"Eventually, we return the ",Object(r.b)("inlineCode",{parentName:"p"},"results"),"."),Object(r.b)("h2",{id:"http-content-type-and-statuses"},"HTTP content type and statuses"),Object(r.b)("p",null,"You can see a full list of different MIME types ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"}),"here"),". Also, the following table shows different http status codes and their meaning:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200 (OK)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the standard response for successful HTTP requests.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"201 (CREATED)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the standard response for an HTTP request that resulted in an item being successfully created.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"204 (NO CONTENT)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the standard response for successful HTTP requests, where nothing is being returned in the response body.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400 (BAD REQUEST)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The request cannot be processed because of bad request syntax, excessive size, or another client error.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"403 (FORBIDDEN)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The client does not have permission to access this resource.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"404 (NOT FOUND)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The resource could not be found at this time. It is possible it was deleted, or does not exist yet.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"500 (INTERNAL SERVER ERROR)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The generic answer for an unexpected failure if there is no more specific information available.")))),Object(r.b)("p",null,"If you run the application and point your browser to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://127.0.0.1:7000/authors"}),Object(r.b)("inlineCode",{parentName:"a"},"http://127.0.0.1:7000/authors")),", you must see a list of authors in JSON array format, something like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain"}),'[{id: 1, name: "George Orwell", numOfBooks: 13, nationality: "British"}, {id: 2, name: "Franz Kafka", numOfBooks: 16, nationality: "Bohemian"}]\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can use a browser extension like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en"}),"JSON Formatter")," to ",Object(r.b)("em",{parentName:"p"},"prettify")," the output into a more readable one."))))}b.isMDXComponent=!0}}]);