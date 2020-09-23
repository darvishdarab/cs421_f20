(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=(a(0),a(143));const o={id:"gradle",title:"Dependency management with Gradle",sidebar_label:"Gradle"},i={unversionedId:"readings/gradle",id:"readings/gradle",isDocsHomePage:!1,title:"Dependency management with Gradle",description:"We're going to be doing a quick drive-by of a popular build automation tool called Gradle.",source:"@site/docs\\readings\\gradle.md",permalink:"/cs421_f20/docs/readings/gradle",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/gradle.md",sidebar_label:"Gradle",sidebar:"docs",previous:{title:"MyBooks App",permalink:"/cs421_f20/docs/readings/bookapp"},next:{title:" ",permalink:"/cs421_f20/docs/readings/bookclass"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We're going to be doing a quick drive-by of a popular ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_build_automation_software"}),"build automation tool")," called ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gradle.org/"}),"Gradle"),".\nBuild tools are used to automate the process of packaging up and\nshipping your code to your users.\nWhen working with teams, it is essential to have a standardized build tool. We are, however, going to narrow our focus on ",Object(r.b)("em",{parentName:"p"},"managing dependencies"),". "),Object(r.b)("p",null,"When building software applications, often you use tools and libraries written by other developers. These software programs are your application's ",Object(r.b)("em",{parentName:"p"},"dependencies")," since your software (or development flow) depends on it. For example, you have used ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://junit.org/junit5/"}),"JUnit")," in Data Structures for writing unit tests. JUnit is an open-source program written to facilitate test-driven development in Java. JUnit is a dependency for most homework in the Data Structures course. "),Object(r.b)("p",null,"When a dependency that you are using requires another library,\nthe required library becomes a ",Object(r.b)("em",{parentName:"p"},"transitive dependency"),".\nEssentially, what this means to you is that you also rely on that\nother dependency.\nAs your project becomes larger and the code more complex, you will need a tool to manage all the dependencies. Enters Gradle!\nNow remember that Gradle is first and foremost, a build tool. It does also a great job of managing dependencies. Adding a dependency with Gradle is as easy as adding a line to your ",Object(r.b)("em",{parentName:"p"},"build script"),"."),Object(r.b)("p",null,'The easiest way to create a new project that is all Gradle ready is by using the IntelliJ Gradle template. Follow these instruction on  "',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/getting-started-with-gradle.html"}),"Getting Started with Gradle"),'" to get a Gradle project up and running. If you have not already installed IntelliJ, please follow the instructions on "',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/installation-guide.html"}),"Install IntelliJ IDEA"),'" and "',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/run-for-the-first-time.html"}),"Run IntelliJ IDEA for the first time"),'."'),Object(r.b)("p",null,"Once done, open the ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," file in IntelliJ and find the following section:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"dependencies {\n    testCompile group: 'junit', name: 'junit', version: '4.12'\n}\n")),Object(r.b)("p",null,"As you have guessed, that single line inside the ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," ",Object(r.b)("em",{parentName:"p"},"block")," is all it takes to add JUnit to your project. When we later work with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://sparkjava.com/"}),"SparkJava"),", for example, to build a RESTful API, we will add the following line to the build script:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"compile 'com.sparkjava:spark-core:2.8.0'\n")),Object(r.b)("p",null,"You might be wondering about the syntax",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," of Gradle and, for instance, what ",Object(r.b)("inlineCode",{parentName:"p"},"compile")," and ",Object(r.b)("inlineCode",{parentName:"p"},"testCompile")," mean. We will not cover these in OOSE; if you want to learn more about Gradle, please consult its ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/userguide.html"}),"documentation"),"."),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"Gradle is a domain-specific language, or DSL, that is based heavily on the Groovy programming language. Groovy is a dynamic scripting language that runs on the Java Virtual Machine.",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}s.isMDXComponent=!0},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);