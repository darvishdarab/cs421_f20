(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(185)),o={id:"isp",title:"Interface segregation principle",sidebar_label:"Interface Segregation Principle"},c={unversionedId:"readings/dp/isp",id:"readings/dp/isp",isDocsHomePage:!1,title:"Interface segregation principle",description:"A class that implements an interface shouldn't be forced to implement methods it does not use.",source:"@site/docs\\readings\\dp\\isp.md",slug:"/readings/dp/isp",permalink:"/cs421_f20/docs/readings/dp/isp",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/dp/isp.md",version:"current",sidebar_label:"Interface Segregation Principle",sidebar:"docs",previous:{title:"Liskov substitution principle",permalink:"/cs421_f20/docs/readings/dp/lsp"},next:{title:"Dependency inversion principle",permalink:"/cs421_f20/docs/readings/dp/dip"}},s=[],p={rightToc:s};function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Principle")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A class that implements an interface shouldn't be forced to implement methods it does not use."))),Object(r.b)("p",null,"The Interface Segregation Principle is, in a way, the same as Single Responsibility Principle, only for interfaces. It essentially says: "),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"An interface should describe one set of behaviors. In other words, ",Object(r.b)("strong",{parentName:"p"},"keep interfaces small"),'; break down a "fat" interface into several more refined interfaces.  '))),Object(r.b)("p",null,"Here is an example: imagine your software application integrates with AWS cloud computing provider. You came up with the following design, inspired by the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/cs421_f20/docs/readings/dp/ocp"}),"Open/Closed Principle"),":"),Object(r.b)("p",null,Object(r.b)("img",{src:n(309).default})),Object(r.b)("p",null,"You thought with this design your application is open for extension (when time comes to add another cloud computing provider) and close for modification (since you would not have to mess with the ",Object(r.b)("inlineCode",{parentName:"p"},"Amazon")," class that implements AWS, your current cloud computing provider). As you have anticipated, in later iterations, you add support for Dropbox to your application. The class diagram then looks like this:"),Object(r.b)("p",null,Object(r.b)("img",{src:n(310).default})),Object(r.b)("p",null,"The problem, however, is that Dropbox does not provide the broad spectrum of behaviours declared in your ",Object(r.b)("inlineCode",{parentName:"p"},"CloudProvider"),". So, if a client calls ",Object(r.b)("inlineCode",{parentName:"p"},"getCDNAddress"),Object(r.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," on an object of type ",Object(r.b)("inlineCode",{parentName:"p"},"Dropbox")," for instance, you would have to let them know this feature is not supported by ",Object(r.b)("inlineCode",{parentName:"p"},"Dropbox"),".",Object(r.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-2"}),Object(r.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))," "),Object(r.b)("p",null,"A better design would look like the following:"),Object(r.b)("p",null,Object(r.b)("img",{src:n(311).default})),Object(r.b)("p",null,"In this example, one bloated interface (",Object(r.b)("inlineCode",{parentName:"p"},"CloudProvider"),") is broken down into a set of more granular interfaces (",Object(r.b)("inlineCode",{parentName:"p"}," CloudHostingProvider"),", ",Object(r.b)("inlineCode",{parentName:"p"},"CDNProvider"),", ",Object(r.b)("inlineCode",{parentName:"p"},"CloudStorageProvider"),"). "),Object(r.b)("p",null,"Similar to the Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the adverse effect of required changes by splitting the software into multiple, independent parts. "),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Case in point")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"By following this principle, you prevent bloated interfaces that define methods for multiple responsibilities. As explained in the Single Responsibility Principle, you should avoid interfaces with multiple responsibilities because they change often and make your software hard to maintain."))),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-1"}),"CDN is short for ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Content_delivery_network"}),"Content Delivery Network"),".",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(r.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-2"}),"A common approach is to throw ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/UnsupportedOperationException.html"}),Object(r.b)("inlineCode",{parentName:"a"},"UnsupportedOperationException")),".",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,f=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},309:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/isp01-9bf5a0b1fd1dc862726574ce5bb2b306.png"},310:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/isp02-afe39bf7b88949823c1bc6fb32a6bf68.png"},311:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/isp03-57e9d994b666ca09f81aa18994bd843b.png"}}]);