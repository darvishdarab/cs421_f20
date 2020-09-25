(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(143)),i={id:"post",title:"Endpoint: HTTP Post",sidebar_label:"Endpoint: HTTP Post"},s={unversionedId:"readings/restful/post",id:"readings/restful/post",isDocsHomePage:!1,title:"Endpoint: HTTP Post",description:"By design, the POST request method requests that a web server accepts the data enclosed in the body of the request message, most likely for storing it. It is often used when uploading a file or when submitting a completed web form.",source:"@site/docs\\readings\\restful\\post.md",permalink:"/cs421_f20/docs/readings/restful/post",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/restful/post.md",sidebar_label:"Endpoint: HTTP Post",sidebar:"docs",previous:{title:"Endpoint: HTTP Get",permalink:"/cs421_f20/docs/readings/restful/get"},next:{title:"Postman",permalink:"/cs421_f20/docs/readings/restful/postman"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"from ",Object(o.b)("a",Object(r.a)({parentName:"h5"},{href:"https://en.wikipedia.org/wiki/POST_(HTTP)"}),"WIKIPEDIA"))),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"By design, the POST request method requests that a web server accepts the data enclosed in the body of the request message, most likely for storing it. It is often used when uploading a file or when submitting a completed web form."))),Object(o.b)("p",null,"In the MyBooksApp, we want to allow the user to enter her/his favorite authors and books into the app. These entries can be made (on a web form) and will be ",Object(o.b)("inlineCode",{parentName:"p"},"Post"),'ed to the server for processing (i.e., getting stored in the database). Let\'s throw in such an "add" server functionality for authors. We need a new post endpoint:'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),' post("/addauthor", (req, res) -> {\n    String name = req.queryParams("name");\n    int numOfBooks = Integer.parseInt(req.queryParams("numOfBooks"));\n    String nationality = req.queryParams("nationality");\n    Author a = new Author(name, numOfBooks, nationality);\n    new Sql2oAuthorDao(getSql2o()).add(a);\n    res.status(201);\n    res.type("application/json");\n    return new Gson().toJson(a.toString());\n});\n')),Object(o.b)("p",null,"Note how we first parse/read the ",Object(o.b)("em",{parentName:"p"},"post query parameters")," ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"numOfBooks")," and ",Object(o.b)("inlineCode",{parentName:"p"},"nationality")," from the received post request. Then, we use them to create a new\n",Object(o.b)("inlineCode",{parentName:"p"},"Author")," object before sending the object to ",Object(o.b)("inlineCode",{parentName:"p"},"AuthorDao")," to insert it into the ",Object(o.b)("inlineCode",{parentName:"p"},"Authors")," table for us. Next, we set the response status to ",Object(o.b)("inlineCode",{parentName:"p"},"201")," (i.e. success - item being successfully created.) Finally, we return the inserted author as a JSON (as a confirmation back to the client)."))}l.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);