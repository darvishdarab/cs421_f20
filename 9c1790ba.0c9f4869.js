(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),r=(n(0),n(143)),o={id:"okhttp",title:"Testing endpoints with OkHttp",sidebar_label:"Testing endpoints with OkHttp"},s={unversionedId:"readings/restful/okhttp",id:"readings/restful/okhttp",isDocsHomePage:!1,title:"Testing endpoints with OkHttp",description:"API testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.",source:"@site/docs\\readings\\restful\\okhttp.md",permalink:"/cs421_f20/docs/readings/restful/okhttp",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/restful/okhttp.md",sidebar_label:"Testing endpoints with OkHttp",sidebar:"docs",previous:{title:"Postman",permalink:"/cs421_f20/docs/readings/restful/postman"}},c=[{value:"Functional testing with OkHttp",id:"functional-testing-with-okhttp",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"API testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security."))),Object(r.b)("p",null,"When it comes to testing API endpoints, you can do this manually or automatically. Postman offers functionalities for both. There are also Java libraries that assist you with API testing. I personally prefer utilizing a lightweight http client library such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://square.github.io/okhttp/"}),"OkHttp")," for ",Object(r.b)("em",{parentName:"p"},"functional testing")," (in the form of unit tests), but use Postman for the other types of testings (e.g. reliability, performance etc.)."),Object(r.b)("h2",{id:"functional-testing-with-okhttp"},"Functional testing with OkHttp"),Object(r.b)("p",null,"Add the following dependency to your ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'com.squareup.okhttp3:okhttp:4.9.0'\n")),Object(r.b)("p",null,"Then, add a new JUnit class under ",Object(r.b)("inlineCode",{parentName:"p"},"test/java")," to test our end points. Let's call it ",Object(r.b)("inlineCode",{parentName:"p"},"RESTAPITest.java")," with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import okhttp3.*;\nimport org.junit.BeforeClass;\nimport org.junit.Test;\nimport java.io.IOException;\nimport java.sql.*;\nimport static org.junit.Assert.*;\n\npublic class RESTAPITest {\n\n    static OkHttpClient client;\n    @BeforeClass\n    public static void beforeClassTests() throws SQLException {\n        client = new OkHttpClient();\n    }\n\n    @Test\n    public void testListAuthors() throws IOException {\n        Request request = new Request.Builder()\n                .url("http://localhost:7000/authors")\n                .build();\n        Response response = client.newCall(request).execute();\n        assertEquals(200, response.code());\n    }\n\n    @Test\n    public void testAddAuthor() throws IOException {\n        RequestBody formBody = new FormBody.Builder()\n                .add("name", "Ernest Hemingway")\n                .add("numOfBooks", "25")\n                .add("nationality", "American")\n                .build();\n        Request request = new Request.Builder()\n                .url("http://localhost:7000/addauthor")\n                .post(formBody)\n                .build();\n        Response response = client.newCall(request).execute();\n        assertEquals(201, response.code());\n    }\n\n}\n')),Object(r.b)("p",null,"First, we need to make sure we instantiate a ",Object(r.b)("inlineCode",{parentName:"p"},"client")," from ",Object(r.b)("inlineCode",{parentName:"p"},"OkHttpClient")," class. We need to do this only once, before any tests are executed. Then we can compose requests and send them through via the instantiated client. Currently, we have two tests. The first one tests the ",Object(r.b)("inlineCode",{parentName:"p"},"authors")," API end point and the second one creates a new author in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table by sending a post request to the ",Object(r.b)("inlineCode",{parentName:"p"},"addauthor")," route."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Currently, we only rely on the returned status code to gain confidence the end points are working as expected. Ideally, you would want to add\nappropriate assertions on the returned content as well."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://square.github.io/okhttp/"}),"OkHttp")," website for various examples and detailed documentations."))))}l.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return n?i.a.createElement(m,s(s({ref:t},p),{},{components:n})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);