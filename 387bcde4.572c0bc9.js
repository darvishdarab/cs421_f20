(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),i=(n(0),n(156));const o={id:"ci",title:"Continuous integration with Github Actions",sidebar_label:"Continuous Integration with Github Actions"},r={unversionedId:"readings/ci/ci",id:"readings/ci/ci",isDocsHomePage:!1,title:"Continuous integration with Github Actions",description:"Continuous Integration (CI) is a software development practice where developers integrate code into a shared repository frequently, ideally several times a day! Among the benefits of this practice is that you can detect errors quickly and resolve them more easily. Watch this 6 mins video for an intro to CI.",source:"@site/docs\\readings\\ci\\ci.md",permalink:"/cs421_f20/docs/readings/ci/ci",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/ci/ci.md",sidebar_label:"Continuous Integration with Github Actions",sidebar:"docs",previous:{title:"Database in the cloud",permalink:"/cs421_f20/docs/readings/ci/db"}},c=[{value:"Build Pipeline",id:"build-pipeline",children:[]},{value:"Creating a Build Pipeline with Github Actions",id:"creating-a-build-pipeline-with-github-actions",children:[{value:"Procfile",id:"procfile",children:[]}]}],s={rightToc:c};function l({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Continuous Integration")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Continuous Integration (CI) is a software development practice where developers ",Object(i.b)("em",{parentName:"p"},"integrate")," code into a shared repository ",Object(i.b)("strong",{parentName:"p"},"frequently"),", ideally several times a day! Among the benefits of this practice is that you can detect errors quickly and resolve them more easily. Watch ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=1er2cjUq1UI"}),"this")," 6 mins video for an intro to CI."))),Object(i.b)("h2",{id:"build-pipeline"},"Build Pipeline"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A build pipeline is a set of steps that move code from development to production. "))),Object(i.b)("p",null,'In modern software development, the build pipeline is often automated. That means, for instance, when you commit and push your code into the repository, a cascade of actions will be triggered that include "compiling the code," "executing tests," etc., which eventually result in deploying (software) artifacts. Automated build pipelines are great for implementing ',Object(i.b)("strong",{parentName:"p"},"continuous integration")," workflows for software. "),Object(i.b)("p",null,"In this reading, we'll look at building a simple build pipeline using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/actions"}),"Github Actions"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Github Actions")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Previously, we used ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.org/"}),"Travis CI"),' as our cloud-based continuous integration tool in this class. However, Github released Github Actions in November 2019 to public. Github Actions "is an API for cause and effect on GitHub: orchestrate any workflow, based on any event, while GitHub manages the execution, provides rich feedback, and secures every step along the way." Since Github Actions is integrated directly into Github, is easy/starightforward to set up, and offers lots of automationa flexibility, we focus on it in the class but feel free to explore other alternatives such as Travis.'))),Object(i.b)("h2",{id:"creating-a-build-pipeline-with-github-actions"},"Creating a Build Pipeline with Github Actions"),Object(i.b)("p",null,"In order to utilize Github Actions, you need to setup a ",Object(i.b)("inlineCode",{parentName:"p"},".yml")," configuration file. Create a folder named ",Object(i.b)("inlineCode",{parentName:"p"},".github")," in the root of your project. Then, create a subdirectory inside it named ",Object(i.b)("inlineCode",{parentName:"p"},"workflows"),". Inside ",Object(i.b)("inlineCode",{parentName:"p"},"workflows")," folder, create a file named ",Object(i.b)("inlineCode",{parentName:"p"},"main.yml")," and paste the following content in it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'# This workflow will build a Java project with Gradle\n# For more information see: https://help.github.com/actions/language-and-framework-guides/building-and-testing-java-with-gradle\nname: Java CI/CD with Gradle and Deploy to Heroku\n\non:\n  push:\n    branches: [ master ]\n  pull_request:\n    branches: [ master ]\n\njobs:\n  build:\n\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v2\n      - name: Set up JDK 1.8\n        uses: actions/setup-java@v1\n        with:\n          java-version: 1.8\n      - name: Grant execute permission for gradlew\n        run: chmod +x gradlew\n      - name: Build with Gradle\n        run: ./gradlew build jar\n      - name: Commit to the repo\n        uses: EndBug/add-and-commit@v4.4.0\n      - name: Deploy to Heroku\n        uses: AkhileshNS/heroku-deploy@v3.5.7\n        with:\n          heroku_api_key: ${{secrets.HEROKU_API_KEY}}\n          heroku_app_name: "boiling-stream-95315" #Provide your unique app name here\n          heroku_email: "abc@def.com" #Provide your Heroku email address here\n')),Object(i.b)("p",null,"In this file, we specify a set of events and triggers. In our case, we are inetersted in ",Object(i.b)("inlineCode",{parentName:"p"},"push"),"es to as well as ",Object(i.b)("inlineCode",{parentName:"p"},"pull requests")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch. Upon either of these events, a set of ",Object(i.b)("inlineCode",{parentName:"p"},"jobs")," are triggered where each job in return is comprised of ",Object(i.b)("em",{parentName:"p"},"actions"),". These are listed under ",Object(i.b)("inlineCode",{parentName:"p"},"steps"),". We first checkout the content of the repo so that it is available to our workflow. Then, we set up a Java environment in the requested Github runner machine (i.e. ubuntu). Next, we make sure ",Object(i.b)("inlineCode",{parentName:"p"},"gradlew")," is executable by running ",Object(i.b)("inlineCode",{parentName:"p"},"chmod +x gradlew")," before using it to build a fresh fat-jar file out of our project. Once, the jar file is produced, we commit the workspace back to our repo and finally we deploy to Heroku from there. "),Object(i.b)("p",null,"Furthermore, we need to authorize Github so that it can deploy to our Heroku account on our behalf. This is done by setting up a Github secret: First, go to your Heroku account and go to ",Object(i.b)("em",{parentName:"p"},"Account Settings"),". Scroll to the bottom until you see API Key. Copy this key and go to your project's repository on GitHub. In your repo, go to ",Object(i.b)("em",{parentName:"p"},"Settings")," -> ",Object(i.b)("em",{parentName:"p"},"Secrets")," and click on ",Object(i.b)("em",{parentName:"p"},"New Secret"),". Then enter ",Object(i.b)("inlineCode",{parentName:"p"},"HEROKU_API_KEY")," as the name and paste the copied API Key as the value. Also, make sure the heroku app name as well as your heroku email are set correctly in the yaml file."),Object(i.b)("h3",{id:"procfile"},"Procfile"),Object(i.b)("p",null,"Since we are not using Gradle-Heroku plugin to deploy the app, we must tell Heroku how to run our application after it is deployed by Github Actions. To this aim, you need to add a file named ",Object(i.b)("inlineCode",{parentName:"p"},"Procfile")," to the root of your application directory with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"web: java -jar build/libs/HerokuDemo-1.0-SNAPSHOT.jar\n")),Object(i.b)("p",null,"Now, try making a new push to your repo. If things are set up correctly and work as expected, upon the push, the Github Actions should execute all the steps and push a fresh build to Heroku. "))}l.isMDXComponent=!0}}]);