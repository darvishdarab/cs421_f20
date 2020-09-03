(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),i=(a(0),a(136));const o={id:"git",title:"Git",sidebar_label:"Git for Version Control"},r={unversionedId:"readings/git",id:"readings/git",isDocsHomePage:!1,title:"Git",description:"Git is the world\u2019s most popular version control system.",source:"@site/docs\\readings\\git.md",permalink:"/cs421_f20/docs/readings/git",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/git.md",sidebar_label:"Git for Version Control",sidebar:"docs",previous:{title:" ",permalink:"/cs421_f20/docs/readings/bookclass"},next:{title:"GitHub",permalink:"/cs421_f20/docs/readings/github"}},c=[{value:"Git jargon",id:"git-jargon",children:[]},{value:"Install Git",id:"install-git",children:[]},{value:"Using Git Locally",id:"using-git-locally",children:[]},{value:"Summary of useful commands",id:"summary-of-useful-commands",children:[]}],s={rightToc:c};function b({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Git is the world\u2019s most popular version control system.\nIt can keep a complete history of the changes made to code,\nand revert back to old versions when needed. This feature comes handy when you want to make changes to code without losing the original."),Object(i.b)("p",null,"Git also facilitates synchronizing code between different people, thus making collaboration in a team very easy. This feature leads to increases productivity in particular in large software project that involves many developers."),Object(i.b)("h2",{id:"git-jargon"},"Git jargon"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Repository"),": A collection of files tracked by Git. The files that make up the content of this website is kept in a Git repository. We will make a repository for your homework, and one for your group project."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Commit"),': Git does not save any changes made to the files within your repository until you "commit" it. So, as a verb, it is the action of storing a new ',Object(i.b)("em",{parentName:"li"},"snapshot")," of the repository's state in the ",Object(i.b)("em",{parentName:"li"},"Git history"),'. When "commit" is used as a noun, it refers to a single point in the Git history.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Staging"),': Let\'s explain this one with an example; assume you made changes to 4 files within your repository, but you only want to commit 2 of them because the other 2 are buggy or not complete yet. How do you commit only 2? Well, you put them in the "staging area" after which you commit. So, staging a file means that you have marked it for a commit.')),Object(i.b)("h2",{id:"install-git"},"Install Git"),Object(i.b)("p",null,"Follow the instructions provided ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"here")," to setup Git on your laptop or personal computer."),Object(i.b)("h2",{id:"using-git-locally"},"Using Git Locally"),Object(i.b)("p",null,'Open terminal in Linux or MacOS, or "Git Bash" on Windows.'),Object(i.b)("h4",{id:"checking-if-git-is-installed"},"Checking if Git is installed"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git --version\n")),Object(i.b)("h4",{id:"tell-git-who-you-are"},"Tell Git who you are"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.email "you@example.com" \ngit config --global user.name "Your Name"\n')),Object(i.b)("h4",{id:"setting-up-and-starting-a-new-git-repo"},"Setting up and starting a new Git repo"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd path\\to\\your\\working\\directory # a bad working directory is your desktop!\nmkdir repository_name  # use a name of your choosing.\ncd repository_name\ngit init\n")),Object(i.b)("p",null,"Git is not tracking all changes within the folder ",Object(i.b)("inlineCode",{parentName:"p"},"repository_name")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are not comfortable with commands like ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," and ",Object(i.b)("inlineCode",{parentName:"p"},"mkdir"),", you may want to consider reading a little on the Unix/Linux command line. I recommend ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tutorials.ubuntu.com/tutorial/command-line-for-beginners#0"}),'"The Linux command line for beginners"')," by Ubuntu Tutorials (won't take an hour to complete it)."))),Object(i.b)("h4",{id:"adding-new-files-to-the-staging-area"},"Adding new files to the staging area"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"touch README.md # this command makes the file README.md in current directory\ngit status\n")),Object(i.b)("p",null,"You must get a list of ",Object(i.b)("strong",{parentName:"p"},"Untracked files"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git add .\ngit status\n")),Object(i.b)("p",null,'You must get a list of "Changes to be committed". By using ',Object(i.b)("inlineCode",{parentName:"p"},"git add .")," we added ",Object(i.b)("strong",{parentName:"p"},"all")," (un-staged) files in your repository in the staging area."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You don't need to use ",Object(i.b)("inlineCode",{parentName:"p"},"git status")," every time you interact with Git. I used it to show you what happens when you make a new file (before and after it is to the staging area)."))),Object(i.b)("h4",{id:"committing-the-files"},"Committing the files"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git commit -m "a message to commit with"\ngit status\n')),Object(i.b)("h4",{id:"checking-commit-history"},"Checking commit history"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git log\n")),Object(i.b)("p",null,"The first few lines represent files that were modified or added, the numbers after the commit field represent ",Object(i.b)("strong",{parentName:"p"},"the hash value of the commit")," (a unique string that identifies the commit). The Author and Date fields contain information about the author, time of commit, and the message the author sent with the commit."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Exercise")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Open ",Object(i.b)("inlineCode",{parentName:"p"},"README.md")," file in your favorite text editor. Add your name to it and then save the file. ",Object(i.b)("br",null),"\nHead back to the terminal and execute ",Object(i.b)("inlineCode",{parentName:"p"},"git status"),"; is Git smart enough to figure you've made a change to ",Object(i.b)("inlineCode",{parentName:"p"},"README.md"),"?",Object(i.b)("br",null),"\nFollow the commands above to add and commit the changes made to ",Object(i.b)("inlineCode",{parentName:"p"},"README.md")," to Git history.",Object(i.b)("br",null),"\nTry ",Object(i.b)("inlineCode",{parentName:"p"},"git log")," again; how many commits do you have?"))),Object(i.b)("h4",{id:"reverting-to-a-previous-commit"},"Reverting to a previous commit"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout specific-commit-id # the commit id is a hash value.\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Exercise")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Can you revert back the ",Object(i.b)("inlineCode",{parentName:"p"},"README.md")," file?"))),Object(i.b)("h2",{id:"summary-of-useful-commands"},"Summary of useful commands"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git add <filename(s)>"),": add files to the staging area to be included in the next commit",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git add .")," : adds all files"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'git commit -m "message"'),": take a snapshot of the repository and save it with a message about the changes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'git commit -am <filename(s)> "message"'),": add files and commit changes all in one"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git status"),"\xa0: print what is currently going on with the repository"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git log"),": print a history of all the commits that have been made",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git reflog"),": print a list of all the different references to commits"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git checkout <commit>"),": revert the working copy back to a given commit. Use it if you want to discard changes to un-staged file/s."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git reset --hard <commit>"),": reset the repository to a given commit. Use it if you want to undo staging of a modified file.")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'My "go to" place on learning Git (with many handy resources on using it):\n',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.git-tower.com/learn/"}),"git-tower.com/learn/")))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you don't like working with terminal to manage your git repository, you are in luck! There are several great software that provide a graphical user interface (GUI) for it. You may want to checkout\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gitkraken.com/"}),"gitkaraken"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sourcetreeapp.com/"}),"sourcetree"),", or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.git-tower.com/"}),"gittower"),".\nMoreover, IntelliJ has Git and GitHub plugins that makes it easy to manage your repository within the IDE. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/set-up-a-git-repository.html"}),"This")," will get you started!"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you still feel you need to to brush up on your basic Git & Github commands, I suggest watching ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=SWYqp7iY_Tc"}),"this")," half hour crash course video."))))}b.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=l(a),p=n,h=m["".concat(r,".").concat(p)]||m[p]||d[p]||o;return a?i.a.createElement(h,c(c({ref:t},b),{},{components:a})):i.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var b=2;b<o;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);