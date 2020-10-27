(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),o=(a(0),a(160));const r={id:"cd",title:"Continuous delivery with Heroku",sidebar_label:"Continuous Delivery with Heroku"},i={unversionedId:"readings/ci/cd",id:"readings/ci/cd",isDocsHomePage:!1,title:"Continuous delivery with Heroku",description:"Continuous Delivery (or Continuous Deployment, or CD) is a software engineering approach in which software functionalities are delivered frequently through automated deployments.",source:"@site/docs\\readings\\ci\\cd.md",permalink:"/cs421_f20/docs/readings/ci/cd",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/ci/cd.md",sidebar_label:"Continuous Delivery with Heroku",sidebar:"docs",previous:{title:"Accomplishing more with JS",permalink:"/cs421_f20/docs/readings/front/js2"},next:{title:"Database in the cloud",permalink:"/cs421_f20/docs/readings/ci/db"}},c=[{value:"Deploying SparkJava on Heroku",id:"deploying-sparkjava-on-heroku",children:[{value:"Build a simple SparkJava App",id:"build-a-simple-sparkjava-app",children:[]},{value:"Prepare to deploy",id:"prepare-to-deploy",children:[]},{value:"Heroku Gradle Plugin",id:"heroku-gradle-plugin",children:[]},{value:"Making SparkJava Listen on the Correct Port",id:"making-sparkjava-listen-on-the-correct-port",children:[]},{value:"Heroku &amp; Git",id:"heroku--git",children:[]},{value:"Deploy",id:"deploy",children:[]}]}],l={rightToc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Continuous Delivery (or Continuous Deployment, or CD) is a software engineering approach in which software functionalities are delivered frequently through automated deployments. "))),Object(o.b)("p",null,"We will be using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.heroku.com/"}),"Heroku"),", a platform as a service (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Platform_as_a_service"}),"PaaS"),") based on a managed container system, with integrated data services, for deploying and running software applications. Heroku is primed for continuous delivery.",Object(o.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," It is, in a nutshell, a cloud application platform that lets you deploy your server online. By taking care of most things related to deployment, it makes it easy to get your application up and running."),Object(o.b)("h2",{id:"deploying-sparkjava-on-heroku"},"Deploying SparkJava on Heroku"),Object(o.b)("p",null,"Before we get started, you must:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a free Heroku account (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://signup.heroku.com/dc"}),"sign up"),")"),Object(o.b)("li",{parentName:"ul"},"Install the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://toolbelt.heroku.com/"}),"Heroku CLI"))),Object(o.b)("h3",{id:"build-a-simple-sparkjava-app"},"Build a simple SparkJava App"),Object(o.b)("p",null,"Create a new Gradle Java project ",Object(o.b)("inlineCode",{parentName:"p"},"herokuDemo")," in IntelliJ and add the following dependencies to it"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'org.slf4j:slf4j-simple:2.0.0-alpha1'\nimplementation 'com.sparkjava:spark-core:2.9.2'\n")),Object(o.b)("p",null,"Create the following Java class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class Application {\n  final static int PORT = 7000;  \n  \n  public static void main(String[] args) {\n    port(PORT);\n    get("/", (req, res) -> "Hi Heroku!");\n  }\n}\n')),Object(o.b)("p",null,"You can run this application and point your browser to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:7000/"}),Object(o.b)("inlineCode",{parentName:"a"},"http://localhost:7000/"))," to see the ",Object(o.b)("inlineCode",{parentName:"p"},"Hi Heroku!")," message!"),Object(o.b)("h3",{id:"prepare-to-deploy"},"Prepare to deploy"),Object(o.b)("p",null,"We want to package our SparkJava application as a single executable file that can be run on Heroku. We are going to make a ",Object(o.b)("em",{parentName:"p"},"fat")," ",Object(o.b)("inlineCode",{parentName:"p"},"JAR")," file",Object(o.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-2"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))," for this purpose. A fat JAR contains your application and all the dependencies needed to run your application. "),Object(o.b)("p",null,"Gradle is able to package your Java application into a JAR file but, by default, it does so without including the project dependencies.\nWe can overwrite the default behavior by adding a few lines to the project's ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"jar {\n    manifest {\n        attributes 'Main-Class' : 'Application'\n    }\n    from {\n        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }\n    }\n}\n")),Object(o.b)("p",null,"Now you can run Gradle's ",Object(o.b)("inlineCode",{parentName:"p"},"jar")," task: open the terminal at the root directory of your Java project and type the following command:",Object(o.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-3"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ ./gradlew build jar\n")),Object(o.b)("p",null,"Once the process is finished, you can find your newly packaged JAR file in the ",Object(o.b)("inlineCode",{parentName:"p"},"build/libs")," directory. Verify that the archive is valid by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ java -jar build/libs/HerokuDemo-1.0-SNAPSHOT.jar\n")),Object(o.b)("h3",{id:"heroku-gradle-plugin"},"Heroku Gradle Plugin"),Object(o.b)("p",null,"To deploy Gradle based JVM applications directly to Heroku, we will use a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/heroku/heroku-gradle"}),"heroku-gradle plugin"),". Add the plugin to your ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),'plugins {\n    id "com.heroku.sdk.heroku-gradle" version "2.0.0"\n}\n')),Object(o.b)("p",null,"Moreover, you need to add a configuration for the heroku-gradle plugin; add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),'heroku {\n    jdkVersion = 1.8\n    processTypes(\n        web: "java -jar build/libs/HerokuDemo-1.0-SNAPSHOT.jar"\n    )\n}\n')),Object(o.b)("h3",{id:"making-sparkjava-listen-on-the-correct-port"},"Making SparkJava Listen on the Correct Port"),Object(o.b)("p",null,"When we deployed SparkJava locally, we used the ",Object(o.b)("inlineCode",{parentName:"p"},"7000")," port on ",Object(o.b)("inlineCode",{parentName:"p"},"localhost"),". Heroku assigns your application a new port every time you deploy it, so we have to get this port and tell SparkJava to use it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'  final int PORT = 7000;  \n  private static int getHerokuAssignedPort() {\n    String herokuPort = System.getenv("PORT");\n    if (herokuPort != null) {\n      return Integer.parseInt(herokuPort);\n    }\n    return PORT;\n  }\n  \n  public static void main(String[] args) {\n    port(getHerokuAssignedPort());\n    get("/", (req, res) -> "Hi Heroku!");\n  }\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A single app runs in different environments, for example on your development machine when developing the app and on the cloud (e.g. Heroku) in production. Although you run the same exact code, but the environments usually (almost always!) have their own environment-specific configurations. An app\u2019s environment-specific configuration can be stored in environment variables (and not in the app\u2019s source code). In the above code, we get the value of ",Object(o.b)("inlineCode",{parentName:"p"},"PORT")," env variable since Heroku automatically sets that env variable value when running an app. Thus, we can use that to decide if the app is currently running on Heroku or not."))),Object(o.b)("h3",{id:"heroku--git"},"Heroku & Git"),Object(o.b)("p",null,"Heroku is deeply integrated with the Git workflow. However, ",Object(o.b)("inlineCode",{parentName:"p"},"heroku-gradle")," plugin that we listed under ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," is used to deploy Gradle-based JVM applications directly to Heroku without pushing to a Git repository."),Object(o.b)("h3",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"Before deployment, you must create a Heroku app using the Heroku CLI; open the terminal at the root directory of your Java project and type the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"heroku login\n")),Object(o.b)("p",null,"It will allow you to login to your Heroku account (via your browser if you want). Next, try:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ heroku create\n")),Object(o.b)("p",null,"This will create a new Heroku app with a random unique name (e.g. boiling-stream-95315) for your application."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'You "create" the app once, before deploying for the ',Object(o.b)("em",{parentName:"p"},"first")," time."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You must have Heroku CLI installed in order for these commands to work!"))),Object(o.b)("p",null,"Next, open your ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle")," file and add the following under ",Object(o.b)("inlineCode",{parentName:"p"},"heroku"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),'appName="boiling-stream-95315"\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that you must replace the above using whatever name Heroku has assigned to your app."))),Object(o.b)("p",null,"Then, run the following command:",Object(o.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-4"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-4",className:"footnote-ref"}),"4"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ ./gradlew build deployHeroku\n")),Object(o.b)("p",null,"If all goes well, you will get a message that looks like this"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"> Task :deployHeroku\n-----\x3e Packaging application...\n       - including: build\\classes\\java\\main\\Application.class\n       - including: build\\libs\\HerokuDemo-1.0-SNAPSHOT.jar\n       - including: build\\tmp\\jar\\MANIFEST.MF\n-----\x3e Creating build...\n       - file: C:\\Users\\Ali\\AppData\\Local\\Temp\\heroku-deploy1390958216981099847source-blob.tgz\n       - size: 2MB\n-----\x3e Uploading build...\n       - success\n-----\x3e Deploying...\nremote: \nremote: -----\x3e heroku-gradle app detected\nremote: -----\x3e Installing JDK 1.8... done\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote: \nremote: -----\x3e Compressing...\nremote:        Done: 53.6M\nremote: -----\x3e Launching...\nremote:        Released v10\nremote:        https://boiling-stream-95315.herokuapp.com/ deployed to Heroku\nremote: \n-----\x3e Done\n\nDeprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.\nUse '--warning-mode all' to show the individual deprecation warnings.\nSee https://docs.gradle.org/6.3/userguide/command_line_interface.html#sec:command_line_warnings\n\nBUILD SUCCESSFUL in 12s\n1 actionable task: 1 executed\n\nPublishing a build scan to scans.gradle.com requires accepting the Gradle Terms of Service defined at https://gradle.com/terms-of-service. Do you accept these terms? [yes, no] yes\n\nGradle Terms of Service accepted.\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note when deploying, it may ask you a yes/no question (as indicated above): you need to say ",Object(o.b)("inlineCode",{parentName:"p"},"yes")," to that!"))),Object(o.b)("p",null,"You can point your browser to the URL of your Heroku application. For example, the example above is deployed at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://boiling-stream-95315.herokuapp.com/"}),"https://boiling-stream-95315.herokuapp.com/"),"."),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"Read more about Continuous Delivery on Heroku at ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.heroku.com/continuous-delivery"}),"https://www.heroku.com/continuous-delivery"),".",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(o.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-2"}),"JAR stands for Java ARchive. It is used for aggregating many Java files into one. It is the preferred way to bundle a Java application. Read more on ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/jar/jarGuide.html"}),"Oracle's website"),".",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),Object(o.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-3"}),"You can also run this ",Object(o.b)("em",{parentName:"li"},"task")," in IntelliJ from the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.jetbrains.com/help/idea/jetgradle-tool-window.html"}),"Gradle Tool Window"),Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")),Object(o.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-4"}),"You can configure IntelliJ to run this ",Object(o.b)("em",{parentName:"li"},"task")," by following the instructions ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/deploying-java-applications-to-heroku-from-eclipse-or-intellij-idea#deploying-from-intellij-idea"}),"here"),".",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-4",className:"footnote-backref"}),"\u21a9")))))}p.isMDXComponent=!0},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return a?o.a.createElement(m,c(c({ref:t},p),{},{components:a})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);