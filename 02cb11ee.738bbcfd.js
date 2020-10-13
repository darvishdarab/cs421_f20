(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,h=l["".concat(r,".").concat(m)]||l[m]||d[m]||i;return a?o.a.createElement(h,b(b({ref:t},s),{},{components:a})):o.a.createElement(h,b({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),i=(a(0),a(155)),r={id:"hw3",title:"Homework 3"},b={unversionedId:"hw/hw3",id:"hw/hw3",isDocsHomePage:!1,title:"Homework 3",description:"You will be adding new API endpoints (to deliver new functionalities) in the MyBooksApp as well as writing some unit tests to make sure the endpoints work as expected.",source:"@site/docs\\hw\\hw3.md",permalink:"/cs421_f20/docs/hw/hw3",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/hw/hw3.md"},c=[{value:"Task",id:"task",children:[]},{value:"Submission",id:"submission",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You will be adding new API endpoints (to deliver new functionalities) in the MyBooksApp as well as writing some unit tests to make sure the endpoints work as expected."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Day"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Date"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Release"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Thu"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SEP 24")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Due"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fri"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OCT 2 @ 11pm (EST)")))),Object(i.b)("h2",{id:"task"},"Task"),Object(i.b)("p",null,"Grab a copy of homework 3 starter code, under ",Object(i.b)("inlineCode",{parentName:"p"},"hw3_starter")," folder, from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhu-oose/MyBooksApp"}),"MyBookApp repo")," on ",Object(i.b)("inlineCode",{parentName:"p"},"jhu-oose")," github organization. The current implemetation has a file named ",Object(i.b)("inlineCode",{parentName:"p"},"Server.java")," with a ",Object(i.b)("inlineCode",{parentName:"p"},"main")," function in it. You should be able to run ",Object(i.b)("inlineCode",{parentName:"p"},"Server.main")," to start ",Object(i.b)("em",{parentName:"p"},"SparkJava")," server. Currently, there are three functioning routes namely ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/authors")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/addauthor"),". Feel free to test them and see how they work to get warmed up! Your task is to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Similar to the existing ",Object(i.b)("inlineCode",{parentName:"p"},"/authors")," end point, add a new http ",Object(i.b)("em",{parentName:"p"},"get")," endpoint on a new route ",Object(i.b)("inlineCode",{parentName:"p"},"/books")," where the user can see a list of all the books. You need to use ",Object(i.b)("inlineCode",{parentName:"p"},"Sql2oBookDao.listAll()")," to fetch and list all the books from the ",Object(i.b)("inlineCode",{parentName:"p"},"Books")," table. Return the list of books as a JSON array similar to what we did on ",Object(i.b)("inlineCode",{parentName:"p"},"authors")," route.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Similar to the existing ",Object(i.b)("inlineCode",{parentName:"p"},"/addauthor")," route, define a new http ",Object(i.b)("em",{parentName:"p"},"post")," endpoint on a new route ",Object(i.b)("inlineCode",{parentName:"p"},"/addbook")," where the user can request to add a new book to the ",Object(i.b)("inlineCode",{parentName:"p"},"Books")," table. "),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Do not worry about the case where the supplied ",Object(i.b)("inlineCode",{parentName:"p"},"authorId")," parameter in the post request does not exist in the ",Object(i.b)("inlineCode",{parentName:"p"},"Authors")," table. The database will reject the insertion and that is fine! Though, if ",Object(i.b)("inlineCode",{parentName:"p"},"authorId")," value exists in the ",Object(i.b)("inlineCode",{parentName:"p"},"Authors")," table, the book insertion should take place successfully.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add a new route named ",Object(i.b)("inlineCode",{parentName:"p"},"/delauthor"),". This should receive the ",Object(i.b)("em",{parentName:"p"},"post")," request to remove an author from the ",Object(i.b)("inlineCode",{parentName:"p"},"authors")," table. The post request may only contain one peice of data: author's name. You can use your ",Object(i.b)("inlineCode",{parentName:"p"},"Sql2oAuthorDao.delete")," from previous homework to delete an author. "),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that an author's ",Object(i.b)("inlineCode",{parentName:"p"},"name")," must be unique, so author deletion will be performed based on ",Object(i.b)("inlineCode",{parentName:"p"},"name"),".")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add a new route named ",Object(i.b)("inlineCode",{parentName:"p"},"/delbook"),". This should receive the ",Object(i.b)("em",{parentName:"p"},"post")," request to remove a book from the ",Object(i.b)("inlineCode",{parentName:"p"},"Books")," table. The post request may only contain one peice of data: book's isbn. You can use your ",Object(i.b)("inlineCode",{parentName:"p"},"Sql2oBookDao.delete")," from previous homework to delete a book. "),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that a book's ",Object(i.b)("inlineCode",{parentName:"p"},"isbn")," must be unique, so book deletion will be performed based on ",Object(i.b)("inlineCode",{parentName:"p"},"isbn"),"."))),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Add all these new routes in ",Object(i.b)("inlineCode",{parentName:"p"},"Server.main")," function.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Utilize Junit and OkHttp to write new unit test cases in ",Object(i.b)("inlineCode",{parentName:"p"},"RESTAPITest.java")," class under ",Object(i.b)("inlineCode",{parentName:"p"},"src/test/java")," to make sure the newly added endpoints function properly. At the very least, you should write one test case for each of ",Object(i.b)("inlineCode",{parentName:"p"},"/books"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/addbook"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/delauthor"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"/delbook")," endpoints. "))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For ",Object(i.b)("inlineCode",{parentName:"p"},"/delauthor")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/delbook"),", you may not only rely on the returned http status code. Go a step further and make sure the query was executed successfully and had the expected effect. For instance, make sure the author was really deleted (if deleting an author)! "))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Feel free to write more unit tests and/or assertions in your existing test cases. For example, it would be very sensible to write multiple tests for deletion of authors or books, and then also make sure that ",Object(i.b)("em",{parentName:"p"},"ON CASCADE DELETE")," really works; that is deleting an author from ",Object(i.b)("inlineCode",{parentName:"p"},"authors")," table will remove all the books written by that author from the ",Object(i.b)("inlineCode",{parentName:"p"},"books")," table."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Ues method(s) with ",Object(i.b)("inlineCode",{parentName:"p"},"@BeforeClass"),"/",Object(i.b)("inlineCode",{parentName:"p"},"@Before")," annotations to set things up the way you want before tests are executed."))),Object(i.b)("h2",{id:"submission"},"Submission"),Object(i.b)("p",null,"In your group repo, create a new folder named ",Object(i.b)("inlineCode",{parentName:"p"},"homeworks"),". Under ",Object(i.b)("inlineCode",{parentName:"p"},"homeworks"),", create a subfolder named ",Object(i.b)("inlineCode",{parentName:"p"},"hw3"),". Push all your files under ",Object(i.b)("inlineCode",{parentName:"p"},"homeworks/hw3")," folder. Create a ",Object(i.b)("inlineCode",{parentName:"p"},"README.md")," in ",Object(i.b)("inlineCode",{parentName:"p"},"homeworks/hw3")," folder and include in it all the assumptions made, work done, etc. When finished, zip the ",Object(i.b)("inlineCode",{parentName:"p"},"hw3")," folder and submit it as a single file to Gradescope.    "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that you need to work collaboratively to finish the homework, but you will make one submission as a group."))))}p.isMDXComponent=!0}}]);