(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(98)),i={id:"good_design",title:"Design is hard!",sidebar_label:"Good Enough Design"},s={unversionedId:"readings/good_design",id:"readings/good_design",isDocsHomePage:!1,title:"Design is hard!",description:"Perfect design is overrated! In my opinion, you can only do it if you time travel to future!",source:"@site/docs\\readings\\good_enough.md",permalink:"/cs421_f20/docs/readings/good_design",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/good_enough.md",sidebar_label:"Good Enough Design",sidebar:"docs",previous:{title:"Extract Classes from Problem Description",permalink:"/cs421_f20/docs/readings/classes"},next:{title:"High Cohesion",permalink:"/cs421_f20/docs/readings/cohesion"}},c=[],l={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Perfect design is overrated! In my opinion, you can only do it if you time travel to future!\nThere are, of course, some design decisions that are easier to make. However, in practice and in most cases, there are always a few ",Object(a.b)("em",{parentName:"p"},"interesting")," and equally plausible alternative designs. Try not to spend a lot of time being torn over design options; pick one and start coding! You can always improve it later. "),Object(a.b)("p",null,'That said, be wary of delegating too much to your future self! When you are faced with a design decision, ask yourself: "what is the future cost of doing nothing today?" Every choice has a price. This "improve it now" versus "improve it later" dilemma always exists. The process perhaps becomes a bit easier when you learn about ',Object(a.b)("strong",{parentName:"p"},"Design principles"),"."),Object(a.b)("p",null,"The Design principles are the Commandments of OO Programming. We will next explore two fundamental principles about ",Object(a.b)("strong",{parentName:"p"},"cohesion")," and ",Object(a.b)("strong",{parentName:"p"},"coupling"),". ==The path to changeable and maintainable object-oriented software begins with classes that are highly cohesive and loosely coupled.=="))}p.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,g=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?o.a.createElement(g,s(s({ref:n},l),{},{components:t})):o.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);