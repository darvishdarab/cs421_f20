(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{185:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return a?o.a.createElement(h,c(c({ref:t},s),{},{components:a})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},263:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/book_author_with_ids-d7f5d2333c4a70f115670c537d5b39c6.png"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),r=(a(0),a(185)),i={id:"books_authors_connect",title:"Connecting `Book` and `Author` classes",sidebar_label:"Connecting `Book` and `Author` Classes"},c={unversionedId:"readings/db/books_authors_connect",id:"readings/db/books_authors_connect",isDocsHomePage:!1,title:"Connecting `Book` and `Author` classes",description:"Since we have two separate (model) classes, we need to somehow tie the two together. We can acheive this by either making a reference to the Author class from the Book class or the other way around. Let us go with first one since in real world an author may have a large number of books but a book may not have many authors.",source:"@site/docs\\readings\\db\\books_authors_connect.md",slug:"/readings/db/books_authors_connect",permalink:"/cs421_f20/docs/readings/db/books_authors_connect",editUrl:"https://darvishdarab.github.io/cs421_f20/docs/readings/db/books_authors_connect.md",version:"current",sidebar_label:"Connecting `Book` and `Author` Classes"},l=[{value:"In terms of Table Relations",id:"in-terms-of-table-relations",children:[]}],s={rightToc:l};function b(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Since we have two separate (model) classes, we need to somehow tie the two together. We can acheive this by either making a reference to the ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," class from the ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," class or the other way around. Let us go with first one since in real world an author may have a large number of books but a book may not have many authors. "),Object(r.b)("p",null,"So far, we have had a field named ",Object(r.b)("inlineCode",{parentName:"p"},"author")," of type ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," class",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". But, these are POJO classes that are going to be mapped to a database. In order to facitilate this mapping, let us replace that with another field named ",Object(r.b)("inlineCode",{parentName:"p"},"authorId")," that will be used to reference an author. In particular, ",Object(r.b)("inlineCode",{parentName:"p"},"authorId")," in ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," will reference the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," in class ",Object(r.b)("inlineCode",{parentName:"p"},"Author"),". This results in the following ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," classes."),Object(r.b)("p",null,Object(r.b)("img",{src:a(263).default})),Object(r.b)("h2",{id:"in-terms-of-table-relations"},"In terms of Table Relations"),Object(r.b)("p",null,"Great! Now that we have our POJO classes in place, we need to map them into our SQLite database. With the current design we have, we need two tables named ",Object(r.b)("inlineCode",{parentName:"p"},"Books")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," where there is a many-to-one relationship between ",Object(r.b)("inlineCode",{parentName:"p"},"Books")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," tables. The only question is how do we connect these two tables? This leads us to concept of ",Object(r.b)("em",{parentName:"p"},"Foreign Key"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Foregin Key")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A foreign key is a column or group of columns in a relational database table that provides a link between two tables. A foreign key creates an ",Object(r.b)("em",{parentName:"p"},"inclusion dependency constraint"),", which in simple terms means the values of the foreign key attributes stored in the referencing table",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-2"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))," must exist in the referenced table.",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-3"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3"))))),Object(r.b)("p",null,"Now, let us (re)create our ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," table:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE IF NOT EXISTS Authors (id INTEGER PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE,\n                                    numOfBooks INTEGER, nationality VARCHAR(30));\n")),Object(r.b)("p",null,"Next, we create the ",Object(r.b)("inlineCode",{parentName:"p"},"Books")," table with a foreign key constraint:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE IF NOT EXISTS Books (id INTEGER PRIMARY KEY, title VARCHAR(200) NOT NULL, \n                isbn VARCHAR(14) NOT NULL UNIQUE, publisher VARCHAR(14), year INTEGER,\n                authorId INTEGER NOT NULL, FOREIGN KEY(authorId) REFERENCES Authors(id)\n                ON UPDATE CASCADE ON DELETE CASCADE);\n")),Object(r.b)("p",null,"Pay attention to the last two lines in particular. ",Object(r.b)("mark",null,"FOREIGN KEY(authorId) REFERENCES Author(id)")," states that ",Object(r.b)("inlineCode",{parentName:"p"},"authorId")," attribute in the current table (i.e., ",Object(r.b)("inlineCode",{parentName:"p"},"Books"),") references the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," column in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table. In (relational) database terminology, the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table is called the ",Object(r.b)("em",{parentName:"p"},"parent")," table and ",Object(r.b)("inlineCode",{parentName:"p"},"Books")," is the child ",Object(r.b)("em",{parentName:"p"},"table"),". "),Object(r.b)("p",null,"The last line decides what will happen to a row (or set of rows) in the ",Object(r.b)("inlineCode",{parentName:"p"},"Books")," table with a particular foreign key value (i.e., a particular ",Object(r.b)("inlineCode",{parentName:"p"},"authorId")," value) if we update or delete that ",Object(r.b)("inlineCode",{parentName:"p"},"id")," value in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table. ",Object(r.b)("mark",null,"ON UPDATE CASCADE")," means if a particular ",Object(r.b)("inlineCode",{parentName:"p"},"id")," value in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table is updated, the value is updated for all corresponding rows in the ",Object(r.b)("inlineCode",{parentName:"p"},"Books")," table too. Similarly, ",Object(r.b)("mark",null,"ON DELETE CASCADE")," means associated books in the ",Object(r.b)("inlineCode",{parentName:"p"},"Books"),' table will be deleted "on delete" of any particular ',Object(r.b)("inlineCode",{parentName:"p"},"id")," value in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authors")," table."),Object(r.b)("p",null,"Once the tables are created, we are ready to implement create, read, update, and delete (CRUD) operations for each of ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," entities."),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"For simplicity, our assumption here is that a book has only one author.",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-2"}),"In this context, the referencing table (i.e. the table that contains the foreign key constraint) is usually called the child table and the referenced table is called the parent table.",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-3"}),"It is out of the scope of this class to go into details of foreign keys and different kinds of relationships among entities (i.e. tables).\nAll you need to know is that a foreign key creates an explicit constraints among two tables such that: 1) all foreign key values stored in the child table must exist in the parent table, and 2) you can control what will happen to the records (i.e., rows) in the child table if we update or remove a referenced value(s) from the parent table.",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")))))}b.isMDXComponent=!0}}]);