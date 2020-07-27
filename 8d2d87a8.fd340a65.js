(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(2),i=a(6),o=(a(0),a(88)),r={id:"github",title:"GitHub",sidebar_label:"GitHub for Project Management"},c={unversionedId:"readings/github",id:"readings/github",isDocsHomePage:!1,title:"GitHub",description:"Before we get into GitHub, I'm going to emphasize the fact that Git and GitHub are not the same! Git is a version control system, whereas GitHub is a repository hosting service and a collaboration platform. Okay, now let\u2019s get started.",source:"@site/docs\\readings\\github.md",permalink:"/cs421_f20/docs/readings/github",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/github.md",sidebar_label:"GitHub for Project Management",sidebar:"docs",previous:{title:"Git",permalink:"/cs421_f20/docs/readings/git"},next:{title:"Book App",permalink:"/cs421_f20/docs/readings/bookapp"}},b=[{value:"What you need to know",id:"what-you-need-to-know",children:[{value:"Remote Repository",id:"remote-repository",children:[]},{value:"Merging",id:"merging",children:[]},{value:"Branching",id:"branching",children:[]},{value:"GitHub Issues",id:"github-issues",children:[]},{value:"GitHub Forks",id:"github-forks",children:[]},{value:"Pull Request",id:"pull-request",children:[]}]}],s={rightToc:b};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before we get into GitHub, I'm going to emphasize the fact that Git and GitHub are not the same! Git is a version control system, whereas GitHub is a repository hosting service and a collaboration platform. Okay, now let\u2019s get started."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You need to create an account on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/"}),"github.com")," (if you don't already have one)."))),Object(o.b)("h2",{id:"what-you-need-to-know"},"What you need to know"),Object(o.b)("p",null,"We will be using GitHub extensively for this course; to host your projects, as a platform for you to collaborate on, to provide you with feedback on your work, etc. "),Object(o.b)("p",null,"You must ",Object(o.b)("strong",{parentName:"p"},"understand (and use) the GitHub Flow")," which entails:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Communicating in issues"),Object(o.b)("li",{parentName:"ul"},"Creating branches (for adding/updating features)"),Object(o.b)("li",{parentName:"ul"},"Using pull request to introduce changes"),Object(o.b)("li",{parentName:"ul"},"Merging changes")),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),'"TODO"')),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"GitHub has a collection of learning resources known as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://lab.github.com/"}),"Learning Lab"),". You ",Object(o.b)("strong",{parentName:"p"},"must")," take and complete ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://lab.github.com/githubtraining/introduction-to-github"}),"Introduction to GitHub")," (it is hands-on and takes about half an hour)."))),Object(o.b)("p",null,"In what follows, I provide a summary of useful concepts and commands."),Object(o.b)("h3",{id:"remote-repository"},"Remote Repository"),Object(o.b)("p",null,'Any version of a repository that is not stored locally on a device is called a "',Object(o.b)("strong",{parentName:"p"},"remote"),'". (So, GitHub is a service for you to host ',Object(o.b)("em",{parentName:"p"},"remote"),' repositories). "',Object(o.b)("strong",{parentName:"p"},"Origin"),'" is used to refer to the "remote" from which the local repository was originally downloaded from.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git clone <url>"),": take a repository stored on a server (like GitHub) and downloads it"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git push"),": push any local changes (commits) to a remote server",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"push")," only after you staged and committed the changes"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git fetch"),": download all of the latest commits from a remote to a local device"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git pull"),": pull any remote changes from a remote server to a local computer")),Object(o.b)("h3",{id:"merging"},"Merging"),Object(o.b)("p",null,"When combining different versions of code, e.g. using\xa0",Object(o.b)("inlineCode",{parentName:"p"},"git pull"),", a ",Object(o.b)("strong",{parentName:"p"},"merge conflict")," can occur if the different versions have different data in the same location. Git will try to take care of merging automatically, but if two users edit, for example, the same line, a merge conflict will have to be manually resolved."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Resolve merge conflict")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To resolve a merge conflict, simply locally remove all lines and code that are not wanted and push the results."))),Object(o.b)("p",null,"When working in a team, it is the responsibility of the person who ",Object(o.b)("em",{parentName:"p"},"pushed")," their code last (and thus triggered the conflict) to resolve it."),Object(o.b)("h3",{id:"branching"},"Branching"),Object(o.b)("p",null,"Branching is a feature of Git that allows a project to move in multiple different directions simultaneously. There is one\xa0",Object(o.b)("inlineCode",{parentName:"p"},"master"),"\xa0branch that is always usable, but any number of new branches can be created to develop new features. Once ready, these branches can then be merged back into\xa0",Object(o.b)("inlineCode",{parentName:"p"},"master"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When working in a Git repository,\xa0",Object(o.b)("inlineCode",{parentName:"p"},"HEAD"),'\xa0refers to the current branch being worked on. When a different branch is "checked out", the\xa0',Object(o.b)("inlineCode",{parentName:"p"},"HEAD"),"\xa0changes to indicate the new working branch."))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When merging a branch back into\xa0master, there is the possibility for merge conflicts to arise. "))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"git branch"),": list all the branches currently in a repository")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"git branch <name>"),": create a new branch called\xa0",Object(o.b)("inlineCode",{parentName:"p"},"name"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"git checkout <name>"),": switch current working branch to\xa0",Object(o.b)("inlineCode",{parentName:"p"},"name"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"git merge <name>"),": merge branch\xa0",Object(o.b)("inlineCode",{parentName:"p"},"name"),"\xa0into current working branch (normally\xa0",Object(o.b)("inlineCode",{parentName:"p"},"master"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"git merge origin/master"),": merge\xa0",Object(o.b)("inlineCode",{parentName:"p"},"origin/master"),", which is the remote version of a repository normally downloaded with\xa0",Object(o.b)("inlineCode",{parentName:"p"},"git fetch"),", into the local, preexisting\xa0",Object(o.b)("inlineCode",{parentName:"p"},"master"),"\xa0branch"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that\xa0",Object(o.b)("inlineCode",{parentName:"p"},"git pull"),"\xa0is equivalent to running\xa0",Object(o.b)("inlineCode",{parentName:"p"},"git fetch"),"\xa0and then\xa0",Object(o.b)("inlineCode",{parentName:"p"},"git merge origin/master")))),Object(o.b)("h3",{id:"github-issues"},"GitHub Issues"),Object(o.b)("p",null,"Most software projects have a bug tracker of some kind. GitHub's tracker is called ",Object(o.b)("strong",{parentName:"p"},"Issues"),", and has its own section in every repository. Although it was originally intended to track bugs, Issues are now used to keep track of enhancements, product road-map, for planning, feature requests, etc. Issues is at the heart of GitHub and acts as kind of chatroom/forum/email where all members of your team can communicate about your software project. "),Object(o.b)("h3",{id:"github-forks"},"GitHub Forks"),Object(o.b)("p",null,'A "fork" of a repository is an entirely separate repository which is copy of the original repository.\nA forked repository can be managed and modified like any other, all without affecting the original copy.'),Object(o.b)("p",null,'Open source projects are often developed using forks. There will be one central version of the software which contributors will fork and improve on, and when they want these changes to be merged into the central repository, they submit a "pull request".'),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We will not be using forks in this course."))),Object(o.b)("h3",{id:"pull-request"},"Pull Request"),Object(o.b)("p",null,"A pull request can be made to merge a branch of a repository with another branch of the same repository or even a different repository. Pull requests are a good way to get feedback on changes from collaborators on the same project."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'Forks, issues amd "pull requests" are all GitHub specific features.'))))}l.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,h=m["".concat(r,".").concat(d)]||m[d]||p[d]||o;return a?i.a.createElement(h,c(c({ref:t},s),{},{components:a})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);