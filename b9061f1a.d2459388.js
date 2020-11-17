(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),o=(a(0),a(176));const i={id:"hw5",title:"Homework 5"},r={unversionedId:"hw/hw5",id:"hw/hw5",isDocsHomePage:!1,title:"Homework 5",description:"You will be working with CSS and JavaScript to improve the front-end of MyBooksApp.",source:"@site/docs\\hw\\hw5.md",permalink:"/cs421_f20/docs/hw/hw5",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/hw/hw5.md"},b=[{value:"Submission",id:"submission",children:[]}],c={rightToc:b};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You will be working with CSS and JavaScript to improve the front-end of MyBooksApp."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Day"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Date"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Release"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fri"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OCT 9")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Due"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fri"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OCT 16 @ 11pm (EST)")))),Object(o.b)("p",null,"Grab a copy of homework 5 starter code, under ",Object(o.b)("inlineCode",{parentName:"p"},"hw5_starter")," folder, from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhu-oose/MyBooksApp"}),"MyBookApp repo")," on ",Object(o.b)("inlineCode",{parentName:"p"},"jhu-oose")," github organization. In the starter code, we only have ",Object(o.b)("inlineCode",{parentName:"p"},"show all authors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"add author"),", but make sure to add your ",Object(o.b)("inlineCode",{parentName:"p"},"show all books")," and ",Object(o.b)("inlineCode",{parentName:"p"},"add book")," from hw4 before proceeding. In class, we applied some basic styling to our html pages in the MyBooksApp. We also warmed up with JavaScript to disallow empty user names and also added delete buttons for each author in the ",Object(o.b)("em",{parentName:"p"},"authors")," view. Your task is to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Write your own css file(s) to be applied to the html views of the MyBooksApp. You can be creative here! Show us your artsy genes! :). Though, it does not have to be anything sophisticated; at the very least, we ask you to write some basic styling for all the pages comparable to what we did in class. The css file we used in class is given as part of the starter code for your reference, but you should write your own css from scratch."),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You may not use any styling framework or library here. You need to write ",Object(o.b)("em",{parentName:"p"},"vanilla")," css.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Similar to what we did to add dedicated delete buttons to the ",Object(o.b)("inlineCode",{parentName:"p"},"authors")," view, add delete buttons for each book in the ",Object(o.b)("inlineCode",{parentName:"p"},"books")," view such that whenever a delete button is clicked, the corresponding book gets deleted from the ",Object(o.b)("inlineCode",{parentName:"p"},"Books")," table.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Currently, ",Object(o.b)("inlineCode",{parentName:"p"},"authors")," (and ",Object(o.b)("inlineCode",{parentName:"p"},"books"),") view only show a list of the authors where we can do deletion using the delete buttons. Let's improve these two views so we can do author/book insertion also. Update ",Object(o.b)("inlineCode",{parentName:"p"},"authors")," (and ",Object(o.b)("inlineCode",{parentName:"p"},"books"),") view so that empty text fileds are shown at the very bottom after all the displayed rows (i.e. html list items) where the user can type in authors (or books) info to be inserted into the table. Next to the text fields, there should be a little button similar to the delete buttons in shape, but in ",Object(o.b)("inlineCode",{parentName:"p"},"green")," color. The button text should be a checkmark. After a new author/book is added, the page should refresh showing the newly added author/book and the empty textfields and the add button at the bottom."),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can use the html code ",Object(o.b)("inlineCode",{parentName:"p"},"&#10004;")," to produce a checkmark."))),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use ",Object(o.b)("inlineCode",{parentName:"p"},'<input type="number" ...>')," for author's ",Object(o.b)("inlineCode",{parentName:"p"},"numofbooks")," and book's ",Object(o.b)("inlineCode",{parentName:"p"},"year")," text field. "))),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In the ",Object(o.b)("inlineCode",{parentName:"p"},"books")," view, you also need to collect author's info (name, naitonality and numOfBooks) in addition to the book's info to do the insertion.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Under the ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources/public/js"),", add a new file named ",Object(o.b)("inlineCode",{parentName:"p"},"validate.js"),". This file should be added to both ",Object(o.b)("inlineCode",{parentName:"p"},"authors.vm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"books.vm"),". In the previous step you wrote a builtin ",Object(o.b)("em",{parentName:"p"},"add")," functionality for both ",Object(o.b)("inlineCode",{parentName:"p"},"authors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"books")," views, but you did not do any input validation. Write JS code in ",Object(o.b)("inlineCode",{parentName:"p"},"validate.js")," to make sure that provided inputs are valid when adding an author/book:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For the author, make sure author ",Object(o.b)("inlineCode",{parentName:"li"},"name")," is valid. An author name is considered valid if it has at least two parts (separated by space(s)) and it does not have any special characters/digits in it. "),Object(o.b)("li",{parentName:"ul"},"For book, make sure the book's ",Object(o.b)("inlineCode",{parentName:"li"},"isbn")," is valid. A valid isbn is either isbn 10 which is 10 digits such as 1861972717, or isbn 13 which is 3 digits, dash, 10 digits such as 978-0451524935. Also, make sure that book ",Object(o.b)("inlineCode",{parentName:"li"},"title")," is not empty.",Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If an input is not valid, you should show a relevant/meaningful alert."))))))),Object(o.b)("h2",{id:"submission"},"Submission"),Object(o.b)("p",null,"Submit a single ",Object(o.b)("inlineCode",{parentName:"p"},".zip")," file to Gradescope. Th zip file should contain a folder named ",Object(o.b)("inlineCode",{parentName:"p"},"hw5")," that contains all your project files includeing a ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," file which includes all the assumptions made, work done, etc.      "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that you need to work collaboratively to finish the homework, but you will make one submission as a group. ",Object(o.b)("strong",{parentName:"p"},"All group members must contribute to the homework.")))))}s.isMDXComponent=!0},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,h=d["".concat(r,".").concat(m)]||d[m]||p[m]||i;return a?o.a.createElement(h,b(b({ref:t},s),{},{components:a})):o.a.createElement(h,b({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);