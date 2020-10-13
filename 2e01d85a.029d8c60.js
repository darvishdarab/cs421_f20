(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(155)),i={id:"user_stories",title:"User Story",sidebar_label:"User Story"},s={unversionedId:"readings/user_stories",id:"readings/user_stories",isDocsHomePage:!1,title:"User Story",description:"One of the most widely used ways of capturing requirements",source:"@site/docs\\readings\\user_stories.md",permalink:"/cs421_f20/docs/readings/user_stories",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/user_stories.md",sidebar_label:"User Story",sidebar:"docs",previous:{title:"GitHub",permalink:"/cs421_f20/docs/readings/github"},next:{title:"Project Backlog",permalink:"/cs421_f20/docs/readings/backlog"}},c=[{value:"User story checklist",id:"user-story-checklist",children:[]},{value:"Sample User Stories",id:"sample-user-stories",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One of the most widely used ways of capturing requirements\nin a format that's useful for engineers and customers are ",Object(o.b)("em",{parentName:"p"},"user stories"),".\nThe user stories are short concrete documents\nthat capture who a feature is for, what its value is,\nand how long it will take to build."),Object(o.b)("p",null,"User stories are written in a format called the ",Object(o.b)("strong",{parentName:"p"},"role-goal-benefit"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain"}),"As a <type of user>, I want <some goal or objective> so that <benefit/value>\n")),Object(o.b)("p",null,"The role-goal-benefit forces the customer/developer to really think about who is going to benefit from a feature, what they're trying to achieve, and why they want to achieve that.\nBy capturing a feature (functional requirement) in such a concrete way, it\ngives everyone an opportunity to really think about whether or not\na feature is really worthwhile and adds real concrete value to a product."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When we're thinking about user stories it's important not to feel constrained too much by the process.\nOne place that people find this constraining is in terms of role-goal-benefit. The role for our user stories don't always have to be human entities. They can also be back-end systems, third party servers, and other systems."))),Object(o.b)("h2",{id:"user-story-checklist"},"User story checklist"),Object(o.b)("p",null,"Getting user stories right is often\nchallenging, especially for newcomers.\nHere is a set of guidelines to help you write\neffective user stories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Keep them short, simple and independent from one another."),Object(o.b)("li",{parentName:"ul"},"Write from the perspective of the user."),Object(o.b)("li",{parentName:"ul"},"Make the value/benefit of the story clear - what is the reason for the story?"),Object(o.b)("li",{parentName:"ul"},"Describe one piece of functionality. If you must, break it into more stories"),Object(o.b)("li",{parentName:"ul"},"Write stories as a team.")),Object(o.b)("h2",{id:"sample-user-stories"},"Sample User Stories"),Object(o.b)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vRn_vg-3cgbduF4lH8KMlFaBpYv6-TxUBvN1NAA6-3KhgR6fpk4VjXe3-DoQm0AQNMalFPMP2WtR1VI/embed?start=false&loop=false&delayms=60000",frameborder:"0",width:"620",height:"375",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}))}u.isMDXComponent=!0}}]);