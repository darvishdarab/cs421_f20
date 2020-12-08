(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(186)),i={id:"addauthor",title:"Add an author",sidebar_label:"Add an Author"},d={unversionedId:"readings/mvc/addauthor",id:"readings/mvc/addauthor",isDocsHomePage:!1,title:"Add an author",description:"Now, let's implement a new view to facilitate adding authors. Add the following route to Server.main:",source:"@site/docs\\readings\\mvc\\addauthor.md",slug:"/readings/mvc/addauthor",permalink:"/cs421_f20/docs/readings/mvc/addauthor",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/mvc/addauthor.md",version:"current",sidebar_label:"Add an Author",sidebar:"docs",previous:{title:"Template reuse",permalink:"/cs421_f20/docs/readings/mvc/reuse"},next:{title:"HTTP cookies",permalink:"/cs421_f20/docs/readings/cookies"}},c=[],l={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now, let's implement a new view to facilitate adding authors. Add the following route to ",Object(o.b)("inlineCode",{parentName:"p"},"Server.main"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'get("/addauthor", (req, res) -> {\n            Map<String, Object> model = new HashMap<String, Object>();\n            return new ModelAndView(model, "public/templates/addauthor.vm");\n    }, new VelocityTemplateEngine());\n')),Object(o.b)("p",null,"Next, we need to implement a http post endpoint for the ",Object(o.b)("inlineCode",{parentName:"p"},"/addauthor")," route:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'post("/addauthor", (req, res) -> {\n        Map<String, Object> model = new HashMap<String, Object>();\n        String name = req.queryParams("name");\n        int numOfBooks = Integer.parseInt(req.queryParams("numOfBooks"));\n        String nationality = req.queryParams("nationality");\n        Author author = new Author(name, numOfBooks, nationality);\n        try {\n            int id = new Sql2oAuthorDao(sql2o).add(author);\n            if (id > 0) {\n                model.put("added", "true");\n            }\n            else {\n                model.put("failedAdd", "true");\n            }\n        }\n        catch (DaoException ex) {\n            model.put("failedAdd", "true");\n        }\n\n        ModelAndView mdl = new ModelAndView(model, "public/templates/addauthor.vm");\n        return new VelocityTemplateEngine().render(mdl);\n    });\n')),Object(o.b)("p",null,"On this endpoint, we first parse the query parameters to create an author object which we insert into ",Object(o.b)("inlineCode",{parentName:"p"},"Authors")," table using our ",Object(o.b)("inlineCode",{parentName:"p"},"Sql2oAuthorDao.add"),". Then, we check if the author was inserted successfully in which case, in our model, we set ",Object(o.b)("inlineCode",{parentName:"p"},"added")," flag to ",Object(o.b)("inlineCode",{parentName:"p"},"ture"),". Otherwise, we set ",Object(o.b)("inlineCode",{parentName:"p"},"failedAdd")," to true. These\nflags are then used in ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources/templates/addauthor.vm")," to show appropriate messages to the user. The following is the content of ",Object(o.b)("inlineCode",{parentName:"p"},"addauthor.vm")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'#set($title = "Add Author")\n#parse("public/templates/top.vm")\n\n#if($added)\n<h2>Author was successfully added!</h2>\n<br />\n#end\n\n#if($failedAdd)\n<h2>Failed to add the Author!</h2>\n<br />\n#end\n\n<h2>Add a new Author</h2>\n<form action="/addauthor" method="post" class="content" id="formAddAuthor">\n    <div>\n        <label for="name">Name: </label>\n        <input type="text" name="name" placeholder="name" id="name" required>\n    </div>\n    <div>\n        <label for="nationality">Nationality: </label>\n        <input type="text" name="nationality" placeholder="nationality" id="nationality" />\n    </div>\n    <div>\n        <label for="numOfBooks">Number of books: </label>\n        <input type="number" name="numOfBooks" placeholder="1" id="numOfBooks" min="1" max="200"/>\n    </div>\n    <br />\n    <input type="submit" value="Add" id="submitAddAuthor" />\n</form>\n\n#parse("public/templates/bottom.vm")\n')),Object(o.b)("p",null,"Now, point your browser to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:7000/addauthor"}),Object(o.b)("inlineCode",{parentName:"a"},"/addauthor"))," route and try to add an author."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Controller Code")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You might have noticed our ",Object(o.b)("inlineCode",{parentName:"p"},"Server.main()")," is getting very long. In general, ",Object(o.b)("inlineCode",{parentName:"p"},"Server.main()"),' is not the best place to receive http requests and process them. It would be sensible to move the "controller" code somewhere else. One viable approach is to introduce a new Java package named ',Object(o.b)("inlineCode",{parentName:"p"},"controller")," under ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java")," and create class(es) that contain controller code. Then, we just receive http requests in the ",Object(o.b)("inlineCode",{parentName:"p"},"Server")," class, but then we ",Object(o.b)("em",{parentName:"p"},"route")," those requests to suitable function(s) in the controller classes."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To get more details on Apache Velocity, refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://velocity.apache.org/engine/1.7/user-guide"}),"user guide"),"."))))}s.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(b,d(d({ref:t},l),{},{components:n})):r.a.createElement(b,d({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);