(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),o=(a(0),a(147));const i={id:"hw4",title:"Homework 4"},r={unversionedId:"hw/hw4",id:"hw/hw4",isDocsHomePage:!1,title:"Homework 4",description:"You will be adding new views in the MyBooksApp by rendering simple HTML pages using Apache Velocity template engine. You will also practice with http cookies.",source:"@site/docs\\hw\\hw4.md",permalink:"/cs421_f20/docs/hw/hw4",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/hw/hw4.md"},c=[{value:"Task",id:"task",children:[]},{value:"Submission",id:"submission",children:[]}],s={rightToc:c};function b({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You will be adding new views in the MyBooksApp by rendering simple HTML pages using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://velocity.apache.org/"}),"Apache Velocity")," template engine. You will also practice with http cookies."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Day"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Date"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Release"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fri"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OCT 2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Due"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fri"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OCT 9 @ 11pm (EST)")))),Object(o.b)("h2",{id:"task"},"Task"),Object(o.b)("p",null,"Grab a copy of homework 4 starter code, under ",Object(o.b)("inlineCode",{parentName:"p"},"hw4_starter")," folder, from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhu-oose/MyBooksApp"}),"MyBookApp repo")," on ",Object(o.b)("inlineCode",{parentName:"p"},"jhu-oose")," github organization. The current implemetation has a file named ",Object(o.b)("inlineCode",{parentName:"p"},"Server.java")," with a ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function in it. You should be able to run ",Object(o.b)("inlineCode",{parentName:"p"},"Server.main")," to start ",Object(o.b)("em",{parentName:"p"},"SparkJava")," server. Now, point your browser to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:7000/"}),"http://localhost:7000/")," to see the login page. On the login page, there is a text field for entering a username and a dropdown list that allows selecting from among a few color options. Once you enter a user and press ",Object(o.b)("inlineCode",{parentName:"p"},"Submit"),", you will be redirected to the front page where you see a welcome message and two links ",Object(o.b)("inlineCode",{parentName:"p"},"Show all authors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Add author"),". Your task is to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Similar to the existing ",Object(o.b)("inlineCode",{parentName:"p"},"Show all authors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Add author")," links, add a new link ",Object(o.b)("inlineCode",{parentName:"p"},"Show all books"),". When the user clicks it, he/she should be taken to ",Object(o.b)("inlineCode",{parentName:"p"},"/books")," view where a list of all books, fetched from the ",Object(o.b)("inlineCode",{parentName:"p"},"Books")," table, are displayed. "),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To fetch the books, you should use your ",Object(o.b)("inlineCode",{parentName:"p"},"Sql2oBookDAO.listAll"),".")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add another link in the front page titled ",Object(o.b)("inlineCode",{parentName:"p"},"Add book"),". When the user clicks this link, he/she should be taken to ",Object(o.b)("inlineCode",{parentName:"p"},"/addbook")," view where an HTMLL form is dispalyed with a submit button titled ",Object(o.b)("inlineCode",{parentName:"p"},"Add")," to collect user input for a new book as well as a new author. When the button is pressed, first the author should be inserted into the ",Object(o.b)("inlineCode",{parentName:"p"},"Authors")," table. Then the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of the inserted author must be used to insert the book into the ",Object(o.b)("inlineCode",{parentName:"p"},"Books")," table. If the author already exists in the table (i.e. an author with the same exact name already exists), then no author insertion must be done. Though, the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of the author must be retrieved and used for the book insertion."),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To do the insertions, you must make use of ",Object(o.b)("inlineCode",{parentName:"p"},"Sql2oBookDao.add")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Sql2oAuthorDao.add"),"."))),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Ideally, author insertion and book insertion must be executed as a single ",Object(o.b)("em",{parentName:"p"},"transaction"),". A transaction is a sequence of operations performed (using one or more SQL statements) on a database as a single logical unit of work. If the author is inserted successfully, but book insertaion fails, then we will end up with the author added to the ",Object(o.b)("inlineCode",{parentName:"p"},"Authors")," table, but the book not inserted into the ",Object(o.b)("inlineCode",{parentName:"p"},"Books")," table. Executing both of these queries as one transaction makes sure either both the author and book are added successfully or none of them is added. For this homework, you do NOT need to implement ",Object(o.b)("inlineCode",{parentName:"p"},"addbook")," as a transaction (since transactions are out of the scope this class), but if you feel like going the extra step (to accomplish this task in a more proper way), go for it! You can start ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aaberg/sql2o/wiki/Transactions"}),"here"),".")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the login page, the user has a chance to select a color along with entering the user name. Right now, we do not do anything with this color selection, but it does get passed as a query param in the post request to ",Object(o.b)("inlineCode",{parentName:"p"},"/"),". You should read this query param when receving/processing the post request and use it to change the color of the welcome message on the front page. Also, you need to set a session cookie on the response named ",Object(o.b)("inlineCode",{parentName:"p"},"color")," with value whatever color that has been chosen by the user. As long as the cookie is in effect (i.e. session), the server should read this cookie and set the color of the welcome message accordingly."),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Setting the color")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For now, you can change the color of the welcome message by adding a style attribute to the ",Object(o.b)("inlineCode",{parentName:"p"},"h1")," tag and setting the color attribute e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'<h1 style="color: blue">Welcome to MyBooks App</h1>')," sets the color of the heading to ",Object(o.b)("inlineCode",{parentName:"p"},"blue"),"."))))),Object(o.b)("h2",{id:"submission"},"Submission"),Object(o.b)("p",null,"Submit a single ",Object(o.b)("inlineCode",{parentName:"p"},".zip")," file to Gradescope. Th zip file should contain a folder named ",Object(o.b)("inlineCode",{parentName:"p"},"hw4")," that contains all your project files includeing a ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," file which includes all the assumptions made, work done, etc.      "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that you need to work collaboratively to finish the homework, but you will make one submission as a group. ",Object(o.b)("strong",{parentName:"p"},"All group members must contribute to the homework.")))))}b.isMDXComponent=!0},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=n,m=p["".concat(r,".").concat(h)]||p[h]||d[h]||i;return a?o.a.createElement(m,c(c({ref:t},b),{},{components:a})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var b=2;b<i;b++)r[b]=a[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);