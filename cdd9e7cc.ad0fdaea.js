(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{155:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return l})),a.d(r,"metadata",(function(){return c})),a.d(r,"rightToc",(function(){return i})),a.d(r,"default",(function(){return s}));var t=a(3),n=a(7),o=(a(0),a(186)),l={id:"sparkjava",title:"SparkJava",sidebar_label:"SparkJava"},c={unversionedId:"readings/restful/sparkjava",id:"readings/restful/sparkjava",isDocsHomePage:!1,title:"SparkJava",description:"We will be using a free and open source Java web application development framework called SparkJava for building our REST API.",source:"@site/docs\\readings\\restful\\sparkjava.md",slug:"/readings/restful/sparkjava",permalink:"/cs421_f20/docs/readings/restful/sparkjava",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/restful/sparkjava.md",version:"current",sidebar_label:"SparkJava",sidebar:"docs",previous:{title:"Separation of client and server",permalink:"/cs421_f20/docs/readings/restful/api"},next:{title:"Lambda expressions",permalink:"/cs421_f20/docs/readings/restful/lambda"}},i=[{value:"Run a server locally!",id:"run-a-server-locally",children:[]}],p={rightToc:i};function s(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,a,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We will be using a free and open source Java web application development framework called ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"http://sparkjava.com/"}),"SparkJava")," for building our REST API."),Object(o.b)("p",null,"You need to add the following to the ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," clause of ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'com.sparkjava:spark-core:2.9.2'\n")),Object(o.b)("h2",{id:"run-a-server-locally"},"Run a server locally!"),Object(o.b)("p",null,"Running SparkJava is as easy as follows!"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'import static spark.Spark.*;\n\npublic class ApiServer {\n  public static void main(String[] args) {\n    final int PORT_NUM = 7000;\n    port(PORT_NUM);\n    get("/", (req, res) -> "Hello World");\n  }\n}\n')),Object(o.b)("p",null,"After running the ",Object(o.b)("inlineCode",{parentName:"p"},"ApiServer"),", point your browser to ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"http://localhost:7000/"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:7000/"))," to see the following message!"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-plain"}),"Hello World!\n")),Object(o.b)("p",null,"Notice the following statement"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'get("/", (req, res) -> "Hello World");\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"->")," is part of ",Object(o.b)("strong",{parentName:"p"},"Java's Lambda")," syntax. This syntax may be strange to you! If that is the case, read the next section (otherwise skip it)."))}s.isMDXComponent=!0},186:function(e,r,a){"use strict";a.d(r,"a",(function(){return u})),a.d(r,"b",(function(){return f}));var t=a(0),n=a.n(t);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var r=n.a.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):c(c({},r),e)),a},u=function(e){var r=s(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=t,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(f,c(c({ref:r},p),{},{components:a})):n.a.createElement(f,c({ref:r},p))}));function f(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var p=2;p<o;p++)l[p]=a[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);