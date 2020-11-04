(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||a;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(167)),o={id:"xss",title:"Cross site scripting",sidebar_label:"Cross Site Scripting"},s={unversionedId:"readings/security/xss",id:"readings/security/xss",isDocsHomePage:!1,title:"Cross site scripting",description:"Cross-site Scripting (XSS) is an injection attack too. This is a client-side attack that the attacker aims to execute malicious scripts in a web browser of the victim by including malicious code in a legitimate web page or web application.",source:"@site/docs\\readings\\security\\xss.md",permalink:"/cs421_f20/docs/readings/security/xss",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/security/xss.md",sidebar_label:"Cross Site Scripting",sidebar:"docs",previous:{title:"SQL injection",permalink:"/cs421_f20/docs/readings/security/injection"},next:{title:"Credentials storage",permalink:"/cs421_f20/docs/readings/security/credentials"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Cross-site Scripting (XSS) is an injection attack too. This is a client-side attack that the attacker aims to execute malicious scripts in a web browser of the victim by including malicious code in a legitimate web page or web application."),Object(a.b)("p",null,"Let's go back to our simple example. When a ",Object(a.b)("em",{parentName:"p"},"signed in")," user visits the homepage i.e. ",Object(a.b)("inlineCode",{parentName:"p"},"/"),", she is displayed with a page with textbox and a ",Object(a.b)("inlineCode",{parentName:"p"},"Search")," button where she can supposedly search among some content. To get a sense of how XSS work in its simplest form, go ahead and add a file named ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," under a new subfolder ",Object(a.b)("inlineCode",{parentName:"p"},"js")," under ",Object(a.b)("inlineCode",{parentName:"p"},"public"),", and write the following in it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'function keywordChanged() {\n    document.getElementById("keywordDisplay").innerHTML = "Keyword is " + document.getElementById("keyword").value;\n}\n')),Object(a.b)("p",null,"Then, add ",Object(a.b)("script",{src:"js/index.js"})," to ",Object(a.b)("inlineCode",{parentName:"p"},"index.html"),". Finally, add ",Object(a.b)("inlineCode",{parentName:"p"},'onchange="keywordChanged()"')," as a new attribute to the ",Object(a.b)("em",{parentName:"p"},"keyword")," text field. Whenever the keyword changes, the ",Object(a.b)("inlineCode",{parentName:"p"},"keywordChanged")," function gets called which is implemented in ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"keywordChanged"),' function displayes\n"keyword is " followed by whatever the user types in. This again all makes good sense, but what if a malocious user uses that textbox to enter some raw html content. Let\'s give it a try: type in the text box ',Object(a.b)("inlineCode",{parentName:"p"},'<a href="dangerous link">some keyword</a>'),". A link should show up on the page that could potentially redirect the user to a dangerous place if clicked."),Object(a.b)("p",null,"This is just a very simple example where a user can mess with what gets diplayed to himself/herself. Imagine that, however, this can turn into a powerful very dangerous type of attack if the script gets sent (and/or stored) in the server and rendered on other users's browsers."))}p.isMDXComponent=!0}}]);