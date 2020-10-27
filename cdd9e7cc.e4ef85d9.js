(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{135:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var a=t(2),n=(t(0),t(160));const o={id:"sparkjava",title:"SparkJava",sidebar_label:"SparkJava"},l={unversionedId:"readings/restful/sparkjava",id:"readings/restful/sparkjava",isDocsHomePage:!1,title:"SparkJava",description:"We will be using a free and open source Java web application development framework called SparkJava for building our REST API.",source:"@site/docs\\readings\\restful\\sparkjava.md",permalink:"/cs421_f20/docs/readings/restful/sparkjava",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/restful/sparkjava.md",sidebar_label:"SparkJava",sidebar:"docs",previous:{title:"Separation of client and server",permalink:"/cs421_f20/docs/readings/restful/api"},next:{title:"Lambda expressions",permalink:"/cs421_f20/docs/readings/restful/lambda"}},c=[{value:"Run a server locally!",id:"run-a-server-locally",children:[]}],i={rightToc:c};function p({components:e,...r}){return Object(n.b)("wrapper",Object(a.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"We will be using a free and open source Java web application development framework called ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://sparkjava.com/"}),"SparkJava")," for building our REST API."),Object(n.b)("p",null,"You need to add the following to the ",Object(n.b)("inlineCode",{parentName:"p"},"dependencies")," clause of ",Object(n.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'com.sparkjava:spark-core:2.9.2'\n")),Object(n.b)("h2",{id:"run-a-server-locally"},"Run a server locally!"),Object(n.b)("p",null,"Running SparkJava is as easy as follows!"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import static spark.Spark.*;\n\npublic class ApiServer {\n  public static void main(String[] args) {\n    final int PORT_NUM = 7000;\n    port(PORT_NUM);\n    get("/", (req, res) -> "Hello World");\n  }\n}\n')),Object(n.b)("p",null,"After running the ",Object(n.b)("inlineCode",{parentName:"p"},"ApiServer"),", point your browser to ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:7000/"}),Object(n.b)("inlineCode",{parentName:"a"},"http://localhost:7000/"))," to see the following message!"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Hello World!\n")),Object(n.b)("p",null,"Notice the following statement"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'get("/", (req, res) -> "Hello World");\n')),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"->")," is part of ",Object(n.b)("strong",{parentName:"p"},"Java's Lambda")," syntax. This syntax may be strange to you! If that is the case, read the next section (otherwise skip it)."))}p.isMDXComponent=!0},160:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),s=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return t?n.a.createElement(f,c(c({ref:r},p),{},{components:t})):n.a.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);