(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=(n(0),n(167));const r={id:"js2",title:"Accomplishing more with JS",sidebar_label:"Accomplishing more with JS"},i={unversionedId:"readings/front/js2",id:"readings/front/js2",isDocsHomePage:!1,title:"Accomplishing more with JS",description:"The power of JS and the myriad of things you can do with it in front-end development  goes well beyond a simple form validation. To get a better taste of JS, let's do a more interesting task and make MyBooksApp front-end a bit useful.",source:"@site/docs\\readings\\front\\js2.md",permalink:"/cs421_f20/docs/readings/front/js2",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/front/js2.md",sidebar_label:"Accomplishing more with JS",sidebar:"docs",previous:{title:"Adding logic using JavaScript",permalink:"/cs421_f20/docs/readings/front/js"},next:{title:"Continuous delivery with Heroku",permalink:"/cs421_f20/docs/readings/ci/cd"}},c=[],s={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The power of JS and the myriad of things you can do with it in front-end development  goes well beyond a simple form validation. To get a better taste of JS, let's do a more interesting task and make MyBooksApp front-end a bit useful. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TASK")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The goal here is to enhance the ",Object(o.b)("inlineCode",{parentName:"p"},"authors")," view by adding a little button labled ",Object(o.b)("strong",{parentName:"p"},"X")," next to each author. When the user clicks that button, a post request with author's name is sent to ",Object(o.b)("inlineCode",{parentName:"p"},"delauthor")," route on the server to delete that author. Then, the page will be reloaded updaing the front-end to show/confirm that the author was deleted sucessfully from the database."))),Object(o.b)("p",null,"Let's make it happen! First, make sure you have an active ",Object(o.b)("inlineCode",{parentName:"p"},"delauthor")," API endpoint in your server to accept post requests and delete the author from the ",Object(o.b)("inlineCode",{parentName:"p"},"Authors")," table based on ",Object(o.b)("inlineCode",{parentName:"p"},"name")," query param (i.e. author's name). Then, go to ",Object(o.b)("inlineCode",{parentName:"p"},"authors.vm")," and insert the following inside and at the end of the ",Object(o.b)("inlineCode",{parentName:"p"},"li")," tag."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<button type="button" class="$author.name">X</button>\n')),Object(o.b)("p",null,"So, it should now be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<li class="content author"><i>$author.name</i> ($author.nationality) has published $author.numOfBooks books. <button type="button" class="$author.name">X</button></li>\n')),Object(o.b)("p",null,"This will add a little X button next to each author. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note how we use the author's name to set ",Object(o.b)("inlineCode",{parentName:"p"},"class")," attribute of each button. This info makes it easy on the front-end side to delete the author whenever a delete button is clicked.    "))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is not the best idea to set class attribute to author's name, but for the purposes of this example, it should be fine."))),Object(o.b)("p",null,"Next, head to ",Object(o.b)("inlineCode",{parentName:"p"},"mybooksapp.css")," and add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"ol li button {\n    color: red;\n    border-radius: 50%;\n    font-weight: bold;\n    border: 2px solid red;\n}\n")),Object(o.b)("p",null,"Pay attention to how we set up the selector: it selects all ",Object(o.b)("inlineCode",{parentName:"p"},"button")," tags nested inside ",Object(o.b)("inlineCode",{parentName:"p"},"<li>")," tags nested inside ",Object(o.b)("inlineCode",{parentName:"p"},"ol")," tags. Note this is just one way of selecting the little delete buttons we have added, and you may very well be able to select them in some different way (indicating the flexibility that CSS offers!)."),Object(o.b)("p",null,"After that, create a file named ",Object(o.b)("inlineCode",{parentName:"p"},"delauthor.js")," under the ",Object(o.b)("inlineCode",{parentName:"p"},"src/resources/public/js")," folder with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function deleteAuthor(authorName) {\n    fetch('http://localhost:7000/delauthor?name=' + authorName, {\n            method: 'POST',\n        }\n    ).then(res => window.location.reload(true));\n}\n\nlet delButtons = document.querySelectorAll(\"li.author > button\")\nArray.prototype.forEach.call(delButtons, function(button) {\n    button.addEventListener('click', deleteAuthor.bind(null, button.className));\n});\n")),Object(o.b)("p",null,"And finally add ",Object(o.b)("inlineCode",{parentName:"p"},'<script src="js/delauthor.js"><\/script>')," to ",Object(o.b)("inlineCode",{parentName:"p"},"authors.vm")," before ",Object(o.b)("inlineCode",{parentName:"p"},"</body>")," (i.e. before ",Object(o.b)("inlineCode",{parentName:"p"},'#parse("public/templates/bottom.vm")'),")."),Object(o.b)("p",null,"In the JS code, we first get all the little buttons using ",Object(o.b)("inlineCode",{parentName:"p"},"querySelectorAll")," and selecting all ",Object(o.b)("inlineCode",{parentName:"p"},"button")," tags nested inside ",Object(o.b)("inlineCode",{parentName:"p"},"li")," tags with class name of ",Object(o.b)("inlineCode",{parentName:"p"},"author"),". Then, we add an event listener for the ",Object(o.b)("inlineCode",{parentName:"p"},"click")," event on each of the buttons so that whenever a delete button is clicked the ",Object(o.b)("inlineCode",{parentName:"p"},"deleteAuthor")," function is invoked and the corresponding author name is passed to it. Inside ",Object(o.b)("inlineCode",{parentName:"p"},"deleteAuthor"),", we send a post request, using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"Fetch API")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"delauthor")," route supplying the author name as a query param resulting in removal of the author with that name. Since the sending and processing of the post request can take a bit of time, once the response is ready we reload the page using ",Object(o.b)("inlineCode",{parentName:"p"},"window.location.reload(true)"),"."))}l.isMDXComponent=!0}}]);