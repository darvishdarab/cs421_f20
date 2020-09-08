(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{136:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return t?a.a.createElement(d,s(s({ref:n},l),{},{components:t})):a.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(136)),i={id:"authorclass",title:" ",sidebar_label:"Author Class"},s={unversionedId:"readings/authorclass",id:"readings/authorclass",isDocsHomePage:!1,title:" ",description:"The Author class",source:"@site/docs\\readings\\authorclass.md",permalink:"/cs421_f20/docs/readings/authorclass",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/authorclass.md",sidebar_label:"Author Class",sidebar:"docs",previous:{title:" ",permalink:"/cs421_f20/docs/readings/bookclass"},next:{title:"Git",permalink:"/cs421_f20/docs/readings/git"}},c=[],l={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"the-author-class"},"The ",Object(o.b)("inlineCode",{parentName:"h1"},"Author")," class"),Object(o.b)("p",null,"Similar to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"docs/readings/bookclass"}),"Book")," class, we need an ",Object(o.b)("inlineCode",{parentName:"p"},"Author")," class too. Place ",Object(o.b)("inlineCode",{parentName:"p"},"Author.java")," in the same ",Object(o.b)("inlineCode",{parentName:"p"},"model")," package:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"package model;\n\nimport java.util.Objects;\n\npublic class Author {\n    \n    private String name;\n    private int numOfBooks;\n    private String nationality;\n\n    public Author(String name, int numOfBooks, String nationality) {\n        this.name = name;\n        this.numOfBooks = numOfBooks;\n        this.nationality = nationality;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getNumOfBooks() {\n        return numOfBooks;\n    }\n\n    public void setNumOfBooks(int numOfBooks) {\n        this.numOfBooks = numOfBooks;\n    }\n\n    public String getNationality() {\n        return nationality;\n    }\n\n    public void setNationality(String nationality) {\n        this.nationality = nationality;\n    }\n\n    @Override\n    public String toString() {\n        return \"Author{\n                name='\" + name + '\\'' +\n                \", numOfBooks=\" + numOfBooks +\n                \", nationality='\" + nationality + '\\'' +\n                '}';\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Author author = (Author) o;\n        return  numOfBooks == author.numOfBooks &&\n                name.equals(author.name) &&\n                nationality.equals(author.nationality);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(name, numOfBooks, nationality);\n    }\n}\n\n")),Object(o.b)("p",null,"As you can see, an author has three fields: ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"numOfBooks"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"nationality"),"; all the other instance member methods can be generated automatically by IntelliJ (custom constructor, setters & getters, ",Object(o.b)("inlineCode",{parentName:"p"},"toString"),", ",Object(o.b)("inlineCode",{parentName:"p"},"equals")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hashCode"),")."))}u.isMDXComponent=!0}}]);