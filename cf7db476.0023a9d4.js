(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var o=t(2),a=t(6),r=(t(0),t(136)),i={id:"design_reflect",title:"Do we have a Good Design?",sidebar_label:"Do we have a Good Design?"},s={unversionedId:"readings/db/design_reflect",id:"readings/db/design_reflect",isDocsHomePage:!1,title:"Do we have a Good Design?",description:"Remember we talked about two properties of a good design: high cohesion and low coupling. So far, we only have one POJO class",source:"@site/docs\\readings\\db\\design_reflect.md",permalink:"/cs421_f20/docs/readings/db/design_reflect",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/design_reflect.md",sidebar_label:"Do we have a Good Design?"},c=[{value:"Introducing the <code>Author</code> class",id:"introducing-the-author-class",children:[]}],l={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Remember we talked about two properties of a good design: ",Object(r.b)("em",{parentName:"p"},"high cohesion")," and ",Object(r.b)("em",{parentName:"p"},"low coupling"),". So far, we only have one POJO class\nnamed ",Object(r.b)("inlineCode",{parentName:"p"},"Book"),". Is the ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," class a highly cohesive class? Looking at the class fields, all fields are mostly directly related to\nthe concept of a book except the ",Object(r.b)("inlineCode",{parentName:"p"},"author")," field. What if we later on, as we develop our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"docs/readings/bookapp"}),"MyBooksApp")," further, decide to store additional information about book authors such as author's number of published books, author's nationality etc. We can reasonably argue that storing ",Object(r.b)("inlineCode",{parentName:"p"},"author")," information (such as author's name) directly inside the ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," class decreases its cohesion."),Object(r.b)("h2",{id:"introducing-the-author-class"},"Introducing the ",Object(r.b)("inlineCode",{parentName:"h2"},"Author")," class"),Object(r.b)("p",null,"In fact, if we read the description of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"docs/readings/bookapp"}),"MyBooksApp")," closely, it says the app should allow its users to view authors separately. So, let's go ahead and create a new POJO class named ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," under the ",Object(r.b)("inlineCode",{parentName:"p"},"model")," package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"package model;\n\nimport java.util.Objects;\n\npublic class Author {\n    \n    private String name;\n    private int numOfBooks;\n    private String nationality;\n\n    public Author(String name, int numOfBooks, String nationality) {\n        this.name = name;\n        this.numOfBooks = numOfBooks;\n        this.nationality = nationality;\n    }\n\n    \n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getNumOfBooks() {\n        return numOfBooks;\n    }\n\n    public void setNumOfBooks(int numOfBooks) {\n        this.numOfBooks = numOfBooks;\n    }\n\n    public String getNationality() {\n        return nationality;\n    }\n\n    public void setNationality(String nationality) {\n        this.nationality = nationality;\n    }\n\n    @Override\n    public String toString() {\n        return \"Author{\n                name='\" + name + '\\'' +\n                \", numOfBooks=\" + numOfBooks +\n                \", nationality='\" + nationality + '\\'' +\n                '}';\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Author author = (Author) o;\n        return  numOfBooks == author.numOfBooks &&\n                name.equals(author.name) &&\n                nationality.equals(author.nationality);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(name, numOfBooks, nationality);\n    }\n}\n")))}u.isMDXComponent=!0},136:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);