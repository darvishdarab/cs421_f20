(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(185)),o={id:"reuse",title:"Template reuse",sidebar_label:"Template Reuse"},l={unversionedId:"readings/mvc/reuse",id:"readings/mvc/reuse",isDocsHomePage:!1,title:"Template reuse",description:"Overview",source:"@site/docs\\readings\\mvc\\reuse.md",slug:"/readings/mvc/reuse",permalink:"/cs421_f20/docs/readings/mvc/reuse",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/mvc/reuse.md",version:"current",sidebar_label:"Template Reuse"},c=[{value:"Overview",id:"overview",children:[]},{value:"Template inclusion",id:"template-inclusion",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Many part of html files could be duplicates and repeated over and over in all html files; As a principle, code duplication is something we want to avoid.\nWe can identify such parts and factor them out into separate velocity file(s). Any files that needs those parts can then import them with ",Object(i.b)("inlineCode",{parentName:"p"},"#parse")," directive. The ",Object(i.b)("inlineCode",{parentName:"p"},"#parse")," script element allows the template designer to import a local file that contains VTL. Velocity will parse the VTL and render the template specified."),Object(i.b)("h2",{id:"template-inclusion"},"Template inclusion"),Object(i.b)("p",null,"Apache Velocity, as well as most other templating languages,\noffer a way to reuse templates."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Template reuse may come under the name of template reuse, or template inheritance, or template inclusion.\nIt means the ability to embed part of a template into another one."))),Object(i.b)("p",null,"Let's look at ",Object(i.b)("inlineCode",{parentName:"p"},"authors.vm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!doctype html>\n<html lang="en">\n<head>\n    \x3c!-- Required meta tags --\x3e\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <title>Authors List</title>\n</head>\n<body>\n    #if ($authors)\n        <h1>List of the authors of your favorite books:</h1>\n        <div class="divContents">\n            <ol>\n                <p>\n                    #foreach($author in $authors )\n                        <li class="content author"><i>$author.name</i> ($author.nationality) has published $author.numOfBooks books.</li>\n                    #end\n                </p>\n            </ol>\n        </div>\n    #end\n</body>\n</html>\n')),Object(i.b)("p",null,"This is a very small file, but still there are parts that are going to be repeated in any other template files we will add later. Alright, let's create\na new file ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/resources/public/templates/top.vm")," with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <title>$title</title>\n</head>\n<body>\n')),Object(i.b)("p",null,"Next, create ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/resources/public/templates/bottom.vm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"</body>\n</html>\n")),Object(i.b)("p",null,"Finally, update ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/resources/public/templates/authors.vm")," as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'#set( $title = "Authors List" )\n#parse("public/templates/top.vm")\n\n#if ($authors)\n<h1>List of the authors of your favorite books:</h1>\n<div class="divContents">\n    <ol>\n    <p>\n        #foreach($author in $authors )\n            <li class="content author"><i>$author.name</i> ($author.nationality) has published $author.numOfBooks books.</li>\n        #end\n        </p>\n    </ol>\n</div>\n#end\n#parse("public/templates/bottom.vm")\n')),Object(i.b)("p",null,"As you can see, we import ",Object(i.b)("inlineCode",{parentName:"p"},"top.vm")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bottom.vm")," into ",Object(i.b)("inlineCode",{parentName:"p"},"authors.vm"),". Also, pay attention how we use/refer a varibale that is defined in ",Object(i.b)("inlineCode",{parentName:"p"},"authors.vm")," in ",Object(i.b)("inlineCode",{parentName:"p"},"top.vm")," "),Object(i.b)("p",null,"Rerun the ",Object(i.b)("inlineCode",{parentName:"p"},"Server.main")," again and make sure our ",Object(i.b)("em",{parentName:"p"},"refactoring")," has not introduced any error; everything must work as before!"))}p.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);