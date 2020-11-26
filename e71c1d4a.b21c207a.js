(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(185)),s={id:"lambda",title:"Lambda expressions",sidebar_label:"Lambda Expressions"},i={unversionedId:"readings/restful/lambda",id:"readings/restful/lambda",isDocsHomePage:!1,title:"Lambda expressions",description:"Setting the scene: anonymous classes!",source:"@site/docs\\readings\\restful\\lambda.md",slug:"/readings/restful/lambda",permalink:"/cs421_f20/docs/readings/restful/lambda",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/restful/lambda.md",version:"current",sidebar_label:"Lambda Expressions",sidebar:"docs",previous:{title:"SparkJava",permalink:"/cs421_f20/docs/readings/restful/sparkjava"},next:{title:"Endpoint: HTTP Get",permalink:"/cs421_f20/docs/readings/restful/get"}},c=[{value:"Setting the scene: anonymous classes!",id:"setting-the-scene-anonymous-classes",children:[]},{value:"Lambda expression",id:"lambda-expression",children:[]}],l={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setting-the-scene-anonymous-classes"},"Setting the scene: anonymous classes!"),Object(o.b)("p",null,"Lambdas are anonymous functions. They were added to Java since Java 8 was released. Lambdas can be used in any place a Single Abstract Method was used before."),Object(o.b)("p",null,"Let's showcase the use of Lambdas through a demo."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@SuppressWarnings("All")\npublic class LambdaDemo {\n\n  public static void main(String[] args) {\n\n  }\n\n  private static List<Author> getSampleAuthors() {\n    List<Author> authors = new ArrayList<>();\n    authors.add(new Author("Franz Kafka", 12, "Bohemian"));\n    authors.add(new Author("Sadegh Hedayat", 60, "Persian"));\n    authors.add(new Author("J. k. Rowling", 31, "British"));\n    return authors;\n  }\n}\n')),Object(o.b)("p",null,"We start with using anonymous inline classes."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"private static void usingAnonymousInlineClass() {\n    List<Author> authors = getSampleAuthors();\n    Collections.sort(authors, new Comparator<Author>() {\n        @Override\n        public int compare(Author a1, Author a2) {\n            return a1.getName().compareTo(a2.getName());\n        }\n    });\n\n    for (Author a: authors) {\n        System.out.println(a);\n    }\n}\n\n")),Object(o.b)("p",null,"Call ",Object(o.b)("inlineCode",{parentName:"p"},"usingAnonymousInlineClass")," in ",Object(o.b)("inlineCode",{parentName:"p"},"main")," and it must print out the sample authors sorted by name."),Object(o.b)("h2",{id:"lambda-expression"},"Lambda expression"),Object(o.b)("p",null,"An interface that only has one unimplemented abstract method is called ",Object(o.b)("em",{parentName:"p"},"functional interface")," in Java. In the example we saw above, ",Object(o.b)("inlineCode",{parentName:"p"},"Comparator")," is a functional interface as it only has one unimplemented asbstract method named ",Object(o.b)("inlineCode",{parentName:"p"},"compare")," that any ",Object(o.b)("em",{parentName:"p"},"implementing class")," must implement. We can use lambda expressions since Java 8 to implement a functional interface. In other words, we can just directly provide an implementation for the abstract method wherever a functional interface is expected. Alright, let's do the same thing we did above this time with a lambda function!"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"private static void usingLambdaInLongForm() {\n    List<Author> authors = getSampleAuthors();\n    Collections.sort(authors, (Author a1, Author a2) -> {\n        return a1.getName().compareTo(a2.getName());\n    });\n\n    for (Author a: author) {\n        System.out.println(a);\n    }\n}\n")),Object(o.b)("p",null,"The following is ",Object(o.b)("strong",{parentName:"p"},"syntax sugar")," for anonymous inline implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"Comparator"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"(Author c1, Author a2) -> {\n    return a1.getName().compareTo(a2.getName());\n}\n")),Object(o.b)("p",null,"You've used syntax sugar before: the ",Object(o.b)("em",{parentName:"p"},"enhanced for loop")," is syntax sugar for looping through the use of an iterator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Iterator<Author> it  = authors.iterator();\nwhile (it.hasNext()) {\n    Author a = it.next();\n    System.out.println(a);\n}\n")),Object(o.b)("p",null,"Bak to Lambdas, let's simplify our lambda expression:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"private static void usingLambdaInShortForm() {\n    List<Author> authors = getSampleAuthors();\n    Collections.sort(authors, (a1, a2) -> a1.getName().compareTo(a2.getName()));\n\n    authors.forEach(author -> System.out.println(author));\n}\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"You don't need to specify the data type of arguments."),Object(o.b)("li",{parentName:"ul"},"When the body of your lambda function is a single statement, you can eliminate the ",Object(o.b)("inlineCode",{parentName:"li"},"{")," ",Object(o.b)("inlineCode",{parentName:"li"},"}")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"return")," keyword.")))),Object(o.b)("p",null,"Also note the use of ",Object(o.b)("inlineCode",{parentName:"p"},"forEach")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"authors.forEach(author -> System.out.println(author));\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"References")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"}),"Lambda Expression")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html"}),"Functional Interface"))))))}b.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,d=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return a?r.a.createElement(d,i(i({ref:t},l),{},{components:a})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);