(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),r=(a(0),a(155));const o={id:"gson",title:"Implement POJO Persister With Gson",sidebar_label:"Basic POJO with Gson"},i={unversionedId:"readings/persistence/gson",id:"readings/persistence/gson",isDocsHomePage:!1,title:"Implement POJO Persister With Gson",description:"Storing data in key-value format has its advantages and disadvantages. For example, you can easily change the contents in a text editor. You can also easily make mistakes like misspelling a key. On a more general note, the Properties library class is particularly useful for those classes that contain a few attributes. It is difficult to use it to, for example, store a collection of objects. Moreover, the resulting data file is flat, which makes storing complex structures awkward (e.g. if there was a list of authors inside the Book class). Furthermore, through the use of Properties, the data types are not specified. It is, therefore, possible to edit the files and, for instance,  insert text where numbers should be. A potential solution is to store data in JSON format.",source:"@site/docs\\readings\\persistence\\gson.md",permalink:"/cs421_f20/docs/readings/persistence/gson",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/persistence/gson.md",sidebar_label:"Basic POJO with Gson",sidebar:"docs",previous:{title:"Implement a Key-Value Store Persister",permalink:"/cs421_f20/docs/readings/persistence/key_value_persister"},next:{title:"Relational Databases",permalink:"/cs421_f20/docs/readings/db/rdbms"}},s=[{value:"JSON",id:"json",children:[]},{value:"Google&#39;s Gson",id:"googles-gson",children:[]},{value:"Plain Old Java Object (POJO)",id:"plain-old-java-object-pojo",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Storing data in key-value format has its advantages and disadvantages. For example, you can easily change the contents in a text editor. You can also easily make mistakes like misspelling a key. On a more general note, the ",Object(r.b)("inlineCode",{parentName:"p"},"Properties")," library class is particularly useful for those classes that contain a few attributes. It is difficult to use it to, for example, store a collection of objects. Moreover, the resulting data file is ",Object(r.b)("strong",{parentName:"p"},"flat"),", which makes storing complex structures awkward (e.g. if there was a ",Object(r.b)("em",{parentName:"p"},"list of authors")," inside the ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," class). Furthermore, through the use of ",Object(r.b)("inlineCode",{parentName:"p"},"Properties"),", the data types are not specified. It is, therefore, possible to edit the files and, for instance,  insert text where numbers should be. A potential solution is to store data in ",Object(r.b)("strong",{parentName:"p"},"JSON")," format."),Object(r.b)("h2",{id:"json"},"JSON"),Object(r.b)("p",null,'JSON stands for "JavaScript Object Notation". It is a lightweight format for storing and transporting data, in particular when data is sent from a server to a browser. I recommend watching the (first half of the) following video to learn more about the JSON format. ',Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iiADhChRriM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(r.b)("h2",{id:"googles-gson"},"Google's Gson"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/google/gson"}),"Gson")," is a Java serialization/deserialization library (developed at Google) to convert Java Objects into JSON and back. To use it, add the following line to the ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," of your project (",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"implementation group: 'com.google.code.gson', name: 'gson', version: '2.8.6'\n")),Object(r.b)("h2",{id:"plain-old-java-object-pojo"},"Plain Old Java Object (POJO)"),Object(r.b)("p",null,"POJO is short for Plain Old Java Object; it's a cute way of referring to simple classes like ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," that are free of any special restriction or requirement that might be imposed by using a third-part library or a framework."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"POJO")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The term was coined by Martin Fowler",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),', Rebecca Parsons and Josh MacKenzie. In their own words: "we wondered why people were so against using regular objects in their systems and concluded that it was because simple objects lacked a fancy name. So we gave them one, and it\'s caught on very nicely."',Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-2"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))))),Object(r.b)("p",null,"Gson helps us to directly write a POGO to a file and read it back; it literally takes one statement to do so and as such it helps to reduce the amount of code you have to write:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package persistence;\nimport model.Author;\nimport com.google.gson.*;\n\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class GsonAuthorPersister implements Persister<Author> {\n\n    private final String STORE = "Author_gson.txt";\n    private final Gson gson;\n\n    public GsonAuthorPersister() {\n        gson = new Gson();\n    }\n\n\n\n    @Override\n    public void serialize(Author author) throws IOException {\n        FileWriter fw = new FileWriter(STORE);\n        gson.toJson(author, fw);\n        fw.close();\n    }\n\n    @Override\n    public Author deserialize() throws IOException {\n        FileReader fr = new FileReader(STORE);\n        Author author = gson.fromJson(fr, Author.class);\n        fr.close();\n        return author;\n    }\n}\n')),Object(r.b)("p",null,"Write and run a simple demo for this and check out the JSON file that stores the ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," object."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'Gson can do a lot! Feel free to explore its "',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/google/gson/blob/master/UserGuide.md"}),"User Guide"),'".'))),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)"}),"Martin Fowler"),' is known for his famous book "Refactorig" which is pretty popular in the software engineering community.',Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-2"}),Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.martinfowler.com/bliki/POJO.html"}),"https://www.martinfowler.com/bliki/POJO.html"),Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(u,s(s({ref:t},l),{},{components:a})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);