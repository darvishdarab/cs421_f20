(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(167)),i={id:"cookies",title:"HTTP cookies",sidebar_label:"HTTP Cookies"},s={unversionedId:"readings/cookies",id:"readings/cookies",isDocsHomePage:!1,title:"HTTP cookies",description:"Enter your username",source:"@site/docs\\readings\\cookies.md",permalink:"/cs421_f20/docs/readings/cookies",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/cookies.md",sidebar_label:"HTTP Cookies",sidebar:"docs",previous:{title:"Add an author",permalink:"/cs421_f20/docs/readings/mvc/addauthor"},next:{title:"Front-end development",permalink:"/cs421_f20/docs/readings/front/front"}},c=[{value:"Enter your username",id:"enter-your-username",children:[]},{value:"Where are my cookies?",id:"where-are-my-cookies",children:[]},{value:"Back to MyBooksApp",id:"back-to-mybooksapp",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"enter-your-username"},"Enter your username"),Object(r.b)("p",null,"Let's toy with the idea of having users login to MyBooksApp. For now, we just ask for their username and welcome them! Before we dive into this, we\nneed to learn about HTTP cookies!"),Object(r.b)("h2",{id:"where-are-my-cookies"},"Where are my cookies?"),Object(r.b)("p",null,"In order to capture the username from the user, we use HTTP Post. Then, we redirect that information to HTTP Get. We can do this by capturing ",Object(r.b)("inlineCode",{parentName:"p"},'req.queryParams("username");')," and store it in our web-server application. It would be, however, an anti-pattern! HTTP is meant to be ",Object(r.b)("em",{parentName:"p"},"stateless")," (server should not care about the state of the client, e.g. if client is signed in or not). The generally accepted way to make HTTP appear to be stateful is by storing little bits of data (that are stored on the client) and send on each request to the server. These are called ",Object(r.b)("strong",{parentName:"p"},"cookies"),". "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"HTTP Cookie (from ",Object(r.b)("a",Object(a.a)({parentName:"h5"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"MDN docs"),")")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"An HTTP cookie (web cookie, browser cookie) is a small piece of data, usually in the form of a randomly encoded text file, that a server sends to the user's web browser. The browser may store it and send it back with later requests to the same server. Typically, it's used to tell if two requests came from the same browser \u2014 keeping a user logged-in, for example. It remembers stateful information for the stateless HTTP protocol."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"from ",Object(r.b)("a",Object(a.a)({parentName:"h5"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"MDN docs"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Cookies are mainly used for three purposes:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Session management: Logins, shopping carts, game scores, or anything else the server should remember"),Object(r.b)("li",{parentName:"ul"},"Personalization: User preferences, themes, and other settings"),Object(r.b)("li",{parentName:"ul"},"Tracking: Recording and analyzing user behavior")))),Object(r.b)("h2",{id:"back-to-mybooksapp"},"Back to MyBooksApp"),Object(r.b)("p",null,"Now, with that intro, let us add a http post endpoint on ",Object(r.b)("inlineCode",{parentName:"p"},"/")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'post("/", (req, res) -> {\n        String username = req.queryParams("username");\n        res.cookie("username", username);\n        res.redirect("/");\n        return null;\n    });\n')),Object(r.b)("p",null,"As you can see, anytime a post request with a ",Object(r.b)("inlineCode",{parentName:"p"},"username")," is provided to the homepage, a cookie is set on the response that sentm back to the client. The client will include this cookie in all its future requests to the server."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You browser should include the ",Object(r.b)("inlineCode",{parentName:"p"},"username")," cookie automatically in all future requests, so you should need not to do anything further about this!"))),Object(r.b)("p",null,"Now, instead of ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," that we currently use, let us add ",Object(r.b)("inlineCode",{parentName:"p"},"index.vm")," under ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/reources/public/templates")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'#set( $title = "Welcome Page" )\n#parse("public/templates/top.vm")\n\n#if($username)\n<h1>Welcome to MyBooks App $username</h1>\n<div class="divContents indexLinkWrapper">\n    <p><a class="content indexLink" href="/authors">Show all authors</a></p>\n    <p><a class="content indexLink" href="/addauthor">Add author</a></p>\n</div>\n#else\n<h1>Please login first!</h1>\n<form action="/" method="post">\n    <input type="text" placeholder="username" name="username"/>\n    <button>Sign in</button>\n</form>\n#end\n\n#parse("public/templates/bottom.vm")\n')),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"index.vm")," we check to see if ",Object(r.b)("inlineCode",{parentName:"p"},"username")," cookie is supplied or not. If not, we show the login HTML ",Object(r.b)("em",{parentName:"p"},"form"),". Otherwise, we show the front page."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"HTML ",Object(r.b)("inlineCode",{parentName:"p"},"form")," is a construct to collect data from user. An HTML form contains form elements: text fields, checkboxes, radio buttons, submit buttons, and more."))),Object(r.b)("p",null,"Finally, we need to update our http get endpoint on ",Object(r.b)("inlineCode",{parentName:"p"},"/")," route:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'get("/", (req, res) -> {\n        Map<String, Object> model = new HashMap<>();\n        if (req.cookie("username") != null)\n            model.put("username", req.cookie("username"));\n        return new ModelAndView(model, "public/templates/index.vm");\n    }, new VelocityTemplateEngine());\n')),Object(r.b)("p",null,"Here, we check if the ",Object(r.b)("inlineCode",{parentName:"p"},"username")," cookie is set in which case we make it part of the model to be passed into ",Object(r.b)("inlineCode",{parentName:"p"},"index.vm"),"."),Object(r.b)("p",null,"Now, if you point your browser to MyBooksApp ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:7000/"}),"homepage"),", you should be prompted first to enter a username. Once, you do that, you\nshould be able to see the front page with the two links in it."))}b.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?o.a.createElement(u,s(s({ref:t},l),{},{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);