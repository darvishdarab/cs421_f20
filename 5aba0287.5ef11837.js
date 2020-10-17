(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{156:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?a.a.createElement(h,s(s({ref:n},c),{},{components:t})):a.a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(156)),o={id:"bookclass",title:" ",sidebar_label:"Book Class"},s={unversionedId:"readings/bookclass",id:"readings/bookclass",isDocsHomePage:!1,title:" ",description:"The Book class",source:"@site/docs\\readings\\bookclass.md",permalink:"/cs421_f20/docs/readings/bookclass",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/bookclass.md",sidebar_label:"Book Class",sidebar:"docs",previous:{title:"Dependency management with Gradle",permalink:"/cs421_f20/docs/readings/gradle"},next:{title:" ",permalink:"/cs421_f20/docs/readings/authorclass"}},l=[],c={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"the-book-class"},"The ",Object(i.b)("inlineCode",{parentName:"h1"},"Book")," class"),Object(i.b)("p",null,"Once you have created a Gradle Java project in IntelliJ, you are ready to start developing the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"docs/readings/bookapp"}),"MyBooksApp"),". Our first step is to make a simple ",Object(i.b)("inlineCode",{parentName:"p"},"Book")," class!"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"package model;\n\nimport java.util.Objects;\n\npublic class Book {\n\n    private String title;\n    private String isbn;\n    private String publisher;\n    private int year;\n    private Author author;\n\n    public Book(String title, String isbn, String publisher, int year, Author author) {\n        this.title = title;\n        this.isbn = isbn;\n        this.publisher = publisher;\n        this.year = year;\n        this.author = author;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n\n    public String getIsbn() {\n        return isbn;\n    }\n\n    public String getPublisher() {\n        return publisher;\n    }\n\n    public int getYear() {\n        return year;\n    }\n\n    public Author getAuthor() {\n        return author;\n    }\n\n    public void setTitle(String title) {\n        this.title = title;\n    }\n\n    public void setIsbn(String isbn) {\n        this.isbn = isbn;\n    }\n\n    public void setPublisher(String publisher) {\n        this.publisher = publisher;\n    }\n\n    public void setYear(int year) {\n        this.year = year;\n    }\n\n    public void setAuthor(Author author) {\n        this.author = author;\n    }\n\n    @Override\n    public String toString() {\n        return \"Book{            \n                title='\" + title + '\\'' +\n                \", isbn='\" + isbn + '\\'' +\n                \", publisher='\" + publisher + '\\'' +\n                \", year=\" + year +\n                \", author=\" + author.toString()\n                '}';\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Book book = (Book) o;\n        return  year == book.year &&\n                title.equals(book.title) &&\n                isbn.equals(book.isbn) &&\n                publisher.equals(book.publisher) &&\n                author.equals(book.author);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(title, isbn, publisher, year, author);\n    }\n}\n")),Object(i.b)("p",null,"Notice ",Object(i.b)("inlineCode",{parentName:"p"},"Book")," has a number of fields: ",Object(i.b)("inlineCode",{parentName:"p"},"title"),", ",Object(i.b)("inlineCode",{parentName:"p"},"isbn"),", ",Object(i.b)("inlineCode",{parentName:"p"},"publisher"),", ",Object(i.b)("inlineCode",{parentName:"p"},"year"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"author"),". All the other instance member methods are generated automatically by IntelliJ (custom constructor, setters & getters, ",Object(i.b)("inlineCode",{parentName:"p"},"toString"),", ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," and ",Object(i.b)("inlineCode",{parentName:"p"},"hashCode"),")."),Object(i.b)("p",null,"You should store the ",Object(i.b)("inlineCode",{parentName:"p"},"Book")," class in a ",Object(i.b)("em",{parentName:"p"},"package")," called ",Object(i.b)("inlineCode",{parentName:"p"},"model"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Java Packages")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A package in Java is used to group related classes much like a folder in a file directory. By convention, package names are written in lower case."))),Object(i.b)("p",null,"Keep in mind that Gradle is opinionated about how your project must be structured. Although you can change the default structure, we advise that you keep on to it. You must, therefore, place your source code in ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/java")," and tests in ",Object(i.b)("inlineCode",{parentName:"p"},"src/test/java"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-plain"}),".\n\u251c\u2500\u2500 build.gradle\n\u251c\u2500\u2500 gradle\n\u251c\u2500\u2500 settings.gradle\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 main\n    \u2502   \u2514\u2500\u2500 java\n    \u2502       \u2514\u2500\u2500 model\n    \u2502           \u2514\u2500\u2500 Book.java\n    \u2514\u2500\u2500 test\n        \u2514\u2500\u2500 java\n            \u2514\u2500\u2500 model\n                \u2514\u2500\u2500 BookTest.java\n")))}b.isMDXComponent=!0}}]);