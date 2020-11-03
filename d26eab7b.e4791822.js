(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{140:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=(r(0),r(167));const o={id:"http",title:"HTTP vs. HTTPS",sidebar_label:"HTTP vs. HTTPS"},i={unversionedId:"readings/security/http",id:"readings/security/http",isDocsHomePage:!1,title:"HTTP vs. HTTPS",description:"We have already breifly talked about Hypertext Transfer Protocol (HTTP): HTTP is one of the foundations of world wide web and at its most basic, it is a an application layer (in the OSI model) protocol that allows for the communication between client and server in our app. It is commonly used to send user requests via the browser to the server as well as transfer data from a web server to a browser in order to allow users to view web pages.",source:"@site/docs\\readings\\security\\http.md",permalink:"/cs421_f20/docs/readings/security/http",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/security/http.md",sidebar_label:"HTTP vs. HTTPS",sidebar:"docs",previous:{title:"Credentials storage",permalink:"/cs421_f20/docs/readings/security/credentials"},next:{title:"Design principles",permalink:"/cs421_f20/docs/readings/dp/dp"}},s=[{value:"HTTPS On SparkJava",id:"https-on-sparkjava",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We have already breifly talked about Hypertext Transfer Protocol (HTTP): HTTP is one of the foundations of world wide web and at its most basic, it is a an application layer (in the OSI model) protocol that allows for the communication between client and server in our app. It is commonly used to send user requests via the browser to the server as well as transfer data from a web server to a browser in order to allow users to view web pages."),Object(a.b)("p",null,"HTTPS stands for Hypertext Transfer Protocol Secure. The problem with the regular HTTP protocol is that the information that flows from server to browser or vice versa is not encrypted, which means it can be easily stolen. HTTPS protocols remedy this by using an SSL (secure sockets layer) certificate, which helps create a secure encrypted connection between the server and the browser, thereby protecting potentially sensitive information from being stolen as it is transferred between the server and the browser."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"SSL Certificate")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"An SSL (Secure Sockets Layer) certificate is a digital certificate (a small data file) that authenticates the identity of a website and encrypts information sent to the server using SSL technology. An SSL certificate serves two purposes:"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"It authenticates the identity of the website (this guarantees visitors that they\u2019re not on a bogus site)"),Object(a.b)("li",{parentName:"ul"},"It encrypts the data that\u2019s being transmitted")))),Object(a.b)("h3",{id:"https-on-sparkjava"},"HTTPS On SparkJava"),Object(a.b)("p",null,"It is possible to use HTTPS with SparkJava. You need to call ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://sparkjava.com/documentation#embedded-web-server"}),Object(a.b)("inlineCode",{parentName:"a"},"secure"))," method before setting up your routes to set the SSL certificate. Before you do so though, you will need to generate a certificate. You could do so in various ways/formats e.g. using ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.openssl.org/"}),Object(a.b)("inlineCode",{parentName:"a"},"openssl")),". Generating and properly configuring SSL certificates is beyond the scope of this class, but if you'd intend to enable/utilize HTTPS for your app on Heroku, you could start ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/ssl-certificate-self"}),"here"),"."))}l.isMDXComponent=!0},167:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);