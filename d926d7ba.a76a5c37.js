(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),i=(n(0),n(186));const c={id:"lsp",title:"Liskov substitution principle",sidebar_label:"Liskov Substitution Principle"},r={unversionedId:"readings/dp/lsp",id:"readings/dp/lsp",isDocsHomePage:!1,title:"Liskov substitution principle",description:"When extending a class, consider that you should be able to pass objects of the subclass in place of objects of the parent class without breaking the client code.",source:"@site/docs\\readings\\dp\\lsp.md",slug:"/readings/dp/lsp",permalink:"/cs421_f20/docs/readings/dp/lsp",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/dp/lsp.md",version:"current",sidebar_label:"Liskov Substitution Principle",sidebar:"docs",previous:{title:"Open-Closed principle",permalink:"/cs421_f20/docs/readings/dp/ocp"},next:{title:"Interface segregation principle",permalink:"/cs421_f20/docs/readings/dp/isp"}},o=[],s={rightToc:o};function b({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Principle")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When extending a class, consider that you should be able to pass objects of the subclass in place of objects of the parent class without breaking the client code."))),Object(i.b)("p",null,"I've stated this principle informally; if you look it up on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Liskov_substitution_principle"}),"Wikipedia")," for instance, you will find formal descriptions such as"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Let ",Object(i.b)("inlineCode",{parentName:"p"},"\u03d5(x)")," be a property provable about objects ",Object(i.b)("inlineCode",{parentName:"p"},"x")," of type ",Object(i.b)("inlineCode",{parentName:"p"},"T"),". Then ",Object(i.b)("inlineCode",{parentName:"p"},"\u03d5(y)")," should be true for objects ",Object(i.b)("inlineCode",{parentName:"p"},"y")," of type ",Object(i.b)("inlineCode",{parentName:"p"},"S")," where ",Object(i.b)("inlineCode",{parentName:"p"},"S")," is a sub-type of ",Object(i.b)("inlineCode",{parentName:"p"},"T"),"."))),Object(i.b)("p",null,"All this, is a fancy way of saying that every subclass/derived class should be substitutable for their base/parent class. In other words, a subclass ",Object(i.b)("strong",{parentName:"p"},"should not break the expectations")," (",Object(i.b)("em",{parentName:"p"},"code contracts"),") set by its super-class.",Object(i.b)("sup",Object(a.a)({parentName:"p"},{id:"fnref-1"}),Object(i.b)("a",Object(a.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),Object(i.b)("p",null,"Let's see an example to better understand the Liskov Substitution Principle (LSP). Consider the following implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"Rectangle")," class. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Rectangle {\n    private int width;\n    private int height;\n\n    public void setWidth(int width) {  this.width = width; }\n    public void setHeight(int height) {  this.height = height; }\n    public int getArea() { return width*height; }\n}\n")),Object(i.b)("p",null,"Since a square is a rectangle (mathematically speaking), we decide to implement ",Object(i.b)("inlineCode",{parentName:"p"},"Square")," as a subclass of ",Object(i.b)("inlineCode",{parentName:"p"},"Rectangle"),". We override ",Object(i.b)("inlineCode",{parentName:"p"},"setWidth")," and ",Object(i.b)("inlineCode",{parentName:"p"},"setHeight")," and we can reuse the implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"getArea"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Square extends Rectangle {\n\n    @Override\n    public void setWidth(int width) {  \n        super.setWidth(width); \n        super.setHeight(width);\n    }\n\n    @Override\n    public void setHeight(int height) {  \n        super.setWidth(height); \n        super.setHeight(height);\n    }\n}\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"With this overriding of ",Object(i.b)("inlineCode",{parentName:"p"},"setWidth")," and ",Object(i.b)("inlineCode",{parentName:"p"},"setHeight")," -- to set both dimensions to the same value -- instances of ",Object(i.b)("inlineCode",{parentName:"p"},"Square")," remain mathematically valid squares. "))),Object(i.b)("p",null,"The bad news is that making ",Object(i.b)("inlineCode",{parentName:"p"},"Square")," a subtype of ",Object(i.b)("inlineCode",{parentName:"p"},"Rectangle")," violates the Liskov Substitution Principle. Here is why:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"void clientMethod(Rectangle rect) {\n    rect.setWidth(5);\n    rect.setHeight(4);\n    assert rect.getArea() == 20;\n}\n")),Object(i.b)("p",null,"LSP is violated because if we pass an object of ",Object(i.b)("inlineCode",{parentName:"p"},"Square")," to ",Object(i.b)("inlineCode",{parentName:"p"},"clientMethod")," (which we can since ",Object(i.b)("inlineCode",{parentName:"p"},"Square")," is a subtype of ",Object(i.b)("inlineCode",{parentName:"p"},"Rectangle"),") the assertion in ",Object(i.b)("inlineCode",{parentName:"p"},"clientMethod")," will fail. In other words, the expected behavior of super type is not maintained."),Object(i.b)("p",null,"So what is the solution? Well, you can simply make two separate classes: ",Object(i.b)("inlineCode",{parentName:"p"},"Rectangle")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Square"),"."),Object(i.b)("p",null,Object(i.b)("img",{src:n(313).default})),Object(i.b)("p",null,"You could use ",Object(i.b)("em",{parentName:"p"},"composition")," to ",Object(i.b)("em",{parentName:"p"},"reuse")," the code in ",Object(i.b)("inlineCode",{parentName:"p"},"Rectangle"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Square {\n    private Rectangle rectangle;\n\n    public void setSideLength(int side) {\n        rectangle.setHeight(side);\n        rectangle.setWidth(side);\n    }\n\n    public int getArea() { return rectangle.getArea(); } \n}\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Case in point")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"LSP is all about well-designed inheritance. If you cannot substitute your baseclass with a subclass without things going wrong, then it means you used inheritance incorrectly. "),Object(i.b)("li",{parentName:"ul"},"Inheritance seems like a cool idea; you get to ",Object(i.b)("em",{parentName:"li"},"create a hierarchy of types")," and ",Object(i.b)("em",{parentName:"li"},"reuse your code"),". But, it\u2019s easy to abuse inheritance. So, don't overdo it; especially consider ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Composition_over_inheritance"}),"composition over inheritance"),"!")))),Object(i.b)("div",{className:"footnotes"},Object(i.b)("hr",{parentName:"div"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",Object(a.a)({parentName:"ol"},{id:"fn-1"}),'A closely related principle in software development is called "',Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Design_by_contract"}),"Design by contract"),'". ',Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}b.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,u=l["".concat(r,".").concat(m)]||l[m]||d[m]||c;return n?i.a.createElement(u,o(o({ref:t},b),{},{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var b=2;b<c;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},313:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/lsp01-a8e306ce976b5ad049fe9fc1fe4a6587.png"}}]);