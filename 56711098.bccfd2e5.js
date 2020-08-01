(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(104));const i={id:"serialization",title:"Persist data with serialization",sidebar_label:"Data Serialization"},o={unversionedId:"readings/serialization",id:"readings/serialization",isDocsHomePage:!1,title:"Persist data with serialization",description:"Adding persistence to application means storing data so that data persists beyond",source:"@site/docs\\readings\\serialization.md",permalink:"/cs421_f20/docs/readings/serialization",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/serialization.md",sidebar_label:"Data Serialization",sidebar:"docs",previous:{title:" ",permalink:"/cs421_f20/docs/readings/bookclass"},next:{title:"Implement a Key-Value Store Persister",permalink:"/cs421_f20/docs/readings/key_value_persister"}},s=[],c={rightToc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Adding ",Object(a.b)("strong",{parentName:"p"},"persistence")," to application means storing data so that data ",Object(a.b)("em",{parentName:"p"},"persists")," beyond\nthe lifetime of the application execution."),Object(a.b)("p",null,"The easiest way to achieve this is perhaps to save data to (plain text) files.\nLet's try that as a way of warming up to Java's syntax! Make a new package, ",Object(a.b)("inlineCode",{parentName:"p"},"persistence")," and add the following interface to it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"/**\n * A simple interface for writing object persister.\n * @param <T> base data type.\n */\npublic interface Persister<T> {\n  /**\n   * Write out a single object instance to a file.\n   * @param item To be stored in a file\n   * @throws IOException when something goes wrong with serialization.\n   */\n  void serialize(T item) throws IOException;\n\n  /**\n   * Reading a single object instance from a file.\n   * @return the item read from file.\n   * @throws IOException when something goes wrong with serialization.\n   */\n  T deserialize() throws IOException;\n}\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Serialization")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"When persisting data, you usually access the data in memory and write it out as a ",Object(a.b)("strong",{parentName:"p"},"series of bytes")," to some storage or transmission medium (a file on disk), one after the other. This is called ",Object(a.b)("em",{parentName:"p"},"serializing"),", and the reverse process is ",Object(a.b)("em",{parentName:"p"},"deserializing"),"."))),Object(a.b)("p",null,"Let's now implement ",Object(a.b)("inlineCode",{parentName:"p"},"Persister")," for the `Book`` class:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class BookPersister implements Persister<Book> {\n\n  private final static String STORE =  "Book.txt";\n\n  @Override\n  public void serialize(Book book) throws IOException {\n    FileWriter fw = new FileWriter(STORE);\n    BufferedWriter bw = new BufferedWriter(fw);\n\n    bw.write(book.getId());\n    bw.newLine();\n    bw.write(book.getTitle());\n    bw.newLine();\n    bw.write(book.getIsbn());\n    bw.newLine();\n    bw.write(book.getPublisher());\n    bw.newLine();\n    bw.write(Integer.toString(book.getYear()));\n    bw.newLine();\n    bw.write(book.getAuthor());\n    bw.newLine();\n\n    bw.close();\n  }\n\n  @Override\n  public Book deserialize() throws IOException {\n    FileReader fr = new FileReader(STORE);\n    BufferedReader br = new BufferedReader(fr);\n\n    String title = br.readLine();\n    String Isbn = br.readLine();\n    String publisher = br.readLine();\n    int year = Integer.parseInt(br.readLine());\n    String author = br.readLine();\n\n    br.close();\n\n    return new Book(title, Isbn, publisher, year, author);\n  }\n\n}\n')),Object(a.b)("p",null,"You can give it a try:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'Persister<Book> p = BookPersister();\nBook b1, b2;\nb1 = new Book("The Catcher in the Rye", "978-7543321724", "Little, Brown and Company", 1991, "J.D Salinger");\np.serialize(b1);\nb2 = p.deserialize();\nSystem.out.println(b2);\n')),Object(a.b)("p",null,"The output must be ",Object(a.b)("inlineCode",{parentName:"p"},"Book{title='The Catcher in the Rye', isbn='978-7543321724', publisher='Little, Brown and Company', year=1991, author='J.D Salinger'}"),".\nMoreover, if you open the ",Object(a.b)("inlineCode",{parentName:"p"},"Book.txt")," file, it must contain:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-plain"}),"The Catcher in the Rye\n978-7543321724\nLittle, Brown and Company\n1991\nJ.D Salinger\n")))}l.isMDXComponent=!0}}]);