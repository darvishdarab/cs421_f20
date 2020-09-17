(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(136));const i={id:"serialization",title:"Persist data with serialization",sidebar_label:"Data Serialization"},o={unversionedId:"readings/persistence/serialization",id:"readings/persistence/serialization",isDocsHomePage:!1,title:"Persist data with serialization",description:"Adding persistence to application means storing data so that data persists beyond",source:"@site/docs\\readings\\persistence\\serialization.md",permalink:"/cs421_f20/docs/readings/persistence/serialization",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/persistence/serialization.md",sidebar_label:"Data Serialization",sidebar:"docs",previous:{title:"Low Coupling",permalink:"/cs421_f20/docs/readings/coupling"},next:{title:"Implement a Key-Value Store Persister",permalink:"/cs421_f20/docs/readings/persistence/key_value_persister"}},s=[],c={rightToc:s};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Adding ",Object(r.b)("strong",{parentName:"p"},"persistence")," to application means storing data so that data ",Object(r.b)("em",{parentName:"p"},"persists")," beyond\nthe lifetime of the application execution. Typically, for this to happen, we need to to write (i.e. store) data in a ",Object(r.b)("em",{parentName:"p"},"non-volatile")," storage."),Object(r.b)("p",null,"The easiest way to go is perhaps to save data to (plain text) files.\nLet's try that as a way of warming up to Java's syntax! Make a new package, ",Object(r.b)("inlineCode",{parentName:"p"},"persistence")," and add the following interface to it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n * A simple interface for writing object persister.\n * @param <T> base data type.\n */\npublic interface Persister<T> {\n  /**\n   * Write out a single object instance to a file.\n   * @param item To be stored in a file\n   * @throws IOException when something goes wrong with serialization.\n   */\n  void serialize(T item) throws IOException;\n\n  /**\n   * Reading a single object instance from a file.\n   * @return the item read from file.\n   * @throws IOException when something goes wrong with serialization.\n   */\n  T deserialize() throws IOException;\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Serialization")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When persisting data, you usually access the data in memory and write it out as a ",Object(r.b)("strong",{parentName:"p"},"series of bytes")," to some storage or transmission medium (a file on disk), one after the other. This is called ",Object(r.b)("em",{parentName:"p"},"serializing"),", and the reverse process is ",Object(r.b)("em",{parentName:"p"},"deserializing"),"."))),Object(r.b)("p",null,'Let\'s now implement a "persister" for the ',Object(r.b)("inlineCode",{parentName:"p"},"Author")," class:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"AuthorPersister.java","AuthorPersister.java":!0}),'package persistence;\n\nimport model.Author;\n\nimport java.io.FileWriter;\nimport java.io.BufferedWriter;\nimport java.io.FileReader;\nimport java.io.BufferedReader;\nimport java.io.IOException;\n\n\npublic class AuthorPersister implements Persister<Author> {\n\n    private final static String STORE =  "Author.txt";\n\n    public void serialize(Author author) throws IOException {\n        FileWriter fw = new FileWriter(STORE);\n        BufferedWriter bw = new BufferedWriter(fw);\n\n        bw.write(author.getName());\n        bw.newLine();\n        bw.write(author.getNumOfBooks());\n        bw.newLine();\n        bw.write(author.getNationality());\n        bw.newLine();\n\n        bw.close();\n    }\n\n    public Author deserialize() throws IOException {\n        FileReader fr = new FileReader(STORE);\n        BufferedReader br = new BufferedReader(fr);\n\n        String name = br.readLine();\n        int numOfBooks = Integer.parseInt(br.readLine());\n        String nationality = br.readLine();\n\n        return new Author(name, numOfBooks, nationality);\n    }\n}\n')),Object(r.b)("p",null,"You can give it a try:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Persister<Author> p = AuthorPersister();\nAuthor a1, a2;\na1 = new Author("J.D Salinger", 8, "American");\np.serialize(a1);\na2 = p.deserialize();\nSystem.out.println(a2);\n')),Object(r.b)("p",null,"The output must be "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Author{name='J.D Salinger', numOfBooks=8, nationality='American'}\n")),Object(r.b)("p",null,"Moreover, if you open the ",Object(r.b)("inlineCode",{parentName:"p"},"Author.txt")," file, it must contain:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"J.D Salinger\n8\nAmerican\n")))}l.isMDXComponent=!0}}]);