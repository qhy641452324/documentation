(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),o=t("u9kb"),l=t("aOgs"),i=t("q1tI"),r=t.n(i),c=t("7ljp"),p=t("pD55"),s=t("8Aig"),b=t("ReZb"),m=t("GCVy"),d=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},n))};var g=function(e){var n=e.children;return r.a.createElement("strong",null,n)},h=t("gnlW"),j=t("mwnC"),f=t("/Rw0"),O=t("dVM4"),k=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var n=e.items,t=e.depth;return r.a.createElement(k,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(w,{items:e.items,depth:t+1}):null)})))}w.defaultProps={depth:0};var y=w,N=t("MfeC");function C(e){var n=N.a.getPath(e.location.pathname),t=N.a.getVariantAndPage(e.root,n);if(!t)return null;var a=N.a.getVariantsForPage(e.root,t.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},l)))}C.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=C,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),W=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,i=t.frontmatter,k=i.title,w=i.description,C=i.status,G=i.source,A=i.additionalContributors,T=void 0===A?[]:A,z=N.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:m.a,Prompt:u,PromptReply:g,Screenshot:h.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:k,description:w}),r.a.createElement(s.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},k),w))),null!=z?r.a.createElement(I,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),t.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(y,{items:t.tableOfContents.items})):null,r.a.createElement(W,null,C||G?r.a.createElement(o.k,{mb:3,alignItems:"center"},C?r.a.createElement(O.a,{status:C}):null,r.a.createElement(o.e,{mx:"auto"}),G?r.a.createElement(f.a,{href:G}):null):null,t.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(y,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(d.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(T.map((function(e){return{login:e}})))}))))))}},bGtx:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),o=(t("q1tI"),t("7ljp")),l=t("O6H6"),i={},r={_frontmatter:i},c=l.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",null,"Description"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Workspaces")," is a generic term that refers to the set of features in the\nnpm cli that provides support to managing multiple packages from your local\nfile system from within a singular top-level, root package."),Object(o.b)("p",null,"This set of features makes up for a much more streamlined workflow handling\nlinked packages from the local file system. Automating the linking process\nas part of ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," and avoiding manually having to use ",Object(o.b)("inlineCode",{parentName:"p"},"npm link")," in\norder to add references to packages that should be symlinked into the current\n",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(o.b)("p",null,"We also refer to these packages being auto-symlinked during ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," as a\nsingle ",Object(o.b)("strong",{parentName:"p"},"workspace"),", meaning it's a nested package within the current local\nfile system that is explicitly defined in the ",Object(o.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/package-json#workspaces"},Object(o.b)("inlineCode",{parentName:"a"},"package.json")),"\n",Object(o.b)("inlineCode",{parentName:"p"},"workspaces")," configuration."),Object(o.b)("h3",null,"Defining workspaces"),Object(o.b)("p",null,"Workspaces are usually defined via the ",Object(o.b)("inlineCode",{parentName:"p"},"workspaces")," property of the\n",Object(o.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/package-json#workspaces"},Object(o.b)("inlineCode",{parentName:"a"},"package.json"))," file, e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-workspaces-powered-project",\n  "workspaces": [\n    "packages/a"\n  ]\n}\n')),Object(o.b)("p",null,"Given the above ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," example living at a current working\ndirectory ",Object(o.b)("inlineCode",{parentName:"p"},".")," that contains a folder named ",Object(o.b)("inlineCode",{parentName:"p"},"packages/a")," that itself contains\na ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," inside it, defining a Node.js package, e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n")),Object(o.b)("p",null,"The expected result once running ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," in this current working\ndirectory ",Object(o.b)("inlineCode",{parentName:"p"},".")," is that the folder ",Object(o.b)("inlineCode",{parentName:"p"},"packages/a")," will get symlinked to the\n",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder of the current working dir."),Object(o.b)("p",null,"Below is a post ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," example, given that same previous example\nstructure of files and folders:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},".\n+-- node_modules\n|  `-- packages/a -> ../packages/a\n+-- package-lock.json\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n")),Object(o.b)("h3",null,"Getting started with workspaces"),Object(o.b)("p",null,"You may automate the required steps to define a new workspace using\n",Object(o.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-init"},"npm init"),". For example in a project that already has a\n",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," defined you can run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm init -w ./packages/a\n")),Object(o.b)("p",null,"This command will create the missing folders and a new ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"\nfile (if needed) while also making sure to properly configure the\n",Object(o.b)("inlineCode",{parentName:"p"},'"workspaces"')," property of your root project ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("h3",null,"Adding dependencies to a workspace"),Object(o.b)("p",null,"It's possible to directly add/remove/update dependencies of your workspaces\nusing the ",Object(o.b)("a",{parentName:"p",href:"/cli/v8/using-npm/config#workspace"},Object(o.b)("inlineCode",{parentName:"a"},"workspace")," config"),"."),Object(o.b)("p",null,"For example, assuming the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n   `-- b\n       `-- package.json\n")),Object(o.b)("p",null,"If you want to add a dependency named ",Object(o.b)("inlineCode",{parentName:"p"},"abbrev")," from the registry as a\ndependency of your workspace ",Object(o.b)("strong",{parentName:"p"},"a"),", you may use the workspace config to tell\nthe npm installer that package should be added as a dependency of the provided\nworkspace:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install abbrev -w a\n")),Object(o.b)("p",null,"Note: other installing commands such as ",Object(o.b)("inlineCode",{parentName:"p"},"uninstall"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ci"),", etc will also\nrespect the provided ",Object(o.b)("inlineCode",{parentName:"p"},"workspace")," configuration."),Object(o.b)("h3",null,"Using workspaces"),Object(o.b)("p",null,"Given the ",Object(o.b)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_all_together"},"specifities of how Node.js handles module resolution")," it's possible to consume any defined workspace\nby its declared ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(o.b)("inlineCode",{parentName:"p"},"name"),". Continuing from the example defined\nabove, let's also create a Node.js script that will require the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace-a"),"\nexample module, e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"// ./workspace-a/index.js\nmodule.exports = 'a'\n\n// ./lib/index.js\nconst moduleA = require('workspace-a')\nconsole.log(moduleA) // -> a\n")),Object(o.b)("p",null,"When running it with:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"node lib/index.js")),Object(o.b)("p",null,"This demonstrates how the nature of ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," resolution allows for\n",Object(o.b)("strong",{parentName:"p"},"workspaces")," to enable a portable workflow for requiring each ",Object(o.b)("strong",{parentName:"p"},"workspace"),"\nin such a way that is also easy to ",Object(o.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-publish"},"publish")," these\nnested workspaces to be consumed elsewhere."),Object(o.b)("h3",null,"Running commands in the context of workspaces"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace")," configuration option to run commands in the context\nof a configured workspace."),Object(o.b)("p",null,"Following is a quick example on how to use the ",Object(o.b)("inlineCode",{parentName:"p"},"npm run")," command in the context\nof nested workspaces. For a project containing multiple workspaces, e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n   `-- b\n       `-- package.json\n")),Object(o.b)("p",null,"By running a command using the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace")," option, it's possible to run the\ngiven command in the context of that specific workspace. e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm run test --workspace=a\n")),Object(o.b)("p",null,"This will run the ",Object(o.b)("inlineCode",{parentName:"p"},"test")," script defined within the\n",Object(o.b)("inlineCode",{parentName:"p"},"./packages/a/package.json")," file."),Object(o.b)("p",null,"Please note that you can also specify this argument multiple times in the\ncommand-line in order to target multiple workspaces, e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm run test --workspace=a --workspace=b\n")),Object(o.b)("p",null,"It's also possible to use the ",Object(o.b)("inlineCode",{parentName:"p"},"workspaces")," (plural) configuration option to\nenable the same behavior but running that command in the context of ",Object(o.b)("strong",{parentName:"p"},"all"),"\nconfigured workspaces. e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm run test --workspaces\n")),Object(o.b)("p",null,"Will run the ",Object(o.b)("inlineCode",{parentName:"p"},"test")," script in both ",Object(o.b)("inlineCode",{parentName:"p"},"./packages/a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"./packages/b"),"."),Object(o.b)("p",null,"Commands will be run in each workspace in the order they appear in your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "workspaces": [ "packages/a", "packages/b" ]\n}\n')),Object(o.b)("p",null,"Order of run is different with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "workspaces": [ "packages/b", "packages/a" ]\n}\n')),Object(o.b)("h3",null,"Ignoring missing scripts"),Object(o.b)("p",null,"It is not required for all of the workspaces to implement scripts run with the ",Object(o.b)("inlineCode",{parentName:"p"},"npm run")," command."),Object(o.b)("p",null,"By running the command with the ",Object(o.b)("inlineCode",{parentName:"p"},"--if-present")," flag, npm will ignore workspaces missing target script."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm run test --workspaces --if-present\n")),Object(o.b)("h3",null,"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-run-script"},"npm run-script")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/using-npm/config"},"config"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-using-npm-workspaces-md-1cfd45c051701c502bce.js.map