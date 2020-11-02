(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{116:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(2),i=r(6),o=(r(0),r(167)),a={id:"dip",title:"Dependency inversion principle",sidebar_label:"Dependency Inversion Principle"},c={unversionedId:"readings/dp/dip",id:"readings/dp/dip",isDocsHomePage:!1,title:"Dependency inversion principle",source:"@site/docs\\readings\\dp\\dip.md",permalink:"/cs421_f20/docs/readings/dp/dip",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/dp/dip.md",sidebar_label:"Dependency Inversion Principle",sidebar:"docs",previous:{title:"Interface segregation principle",permalink:"/cs421_f20/docs/readings/dp/isp"},next:{title:"Refactoring",permalink:"/cs421_f20/docs/readings/dp/refactoring"}},p=[],d={rightToc:p};function s(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}))}s.isMDXComponent=!0},167:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return y}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),s=function(e){var n=i.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=t,y=u["".concat(a,".").concat(f)]||u[f]||l[f]||o;return r?i.a.createElement(y,c(c({ref:n},d),{},{components:r})):i.a.createElement(y,c({ref:n},d))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var d=2;d<o;d++)a[d]=r[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);