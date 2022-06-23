(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{"8rTe":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("O6H6"),i={},r={_frontmatter:i},c=o.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"note"},Object(l.b)("span",{className:"bold"},"Note:")," You must be using npm version 2 or greater to use scopes. To upgrade to the latest version of npm, on the command line, run ",Object(l.b)("code",{className:"highlighter-rouge"},"npm install npm@latest -g")),Object(l.b)("p",null,"When you sign up for an npm user account or create an organization, you are granted a scope that matches your user or organization name. You can use this scope as a namespace for related packages."),Object(l.b)("p",null,"A scope allows you to create a package with the same name as a package created by another user or organization without conflict."),Object(l.b)("p",null,"When listed as a dependent in a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file, scoped packages are preceded by their scope name. The scope name is everything between the ",Object(l.b)("inlineCode",{parentName:"p"},"@")," and the slash:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},'"npm" scope:'))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"@npm/package-name\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},'"npmcorp" scope:'))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"@npmcorp/package-name\n")),Object(l.b)("p",null,'To create and publish public scoped packages, see "',Object(l.b)("a",{parentName:"p",href:"creating-and-publishing-scoped-public-packages"},"Creating and publishing scoped public packages"),'".'),Object(l.b)("p",null,'To create and publish private scoped packages, see "',Object(l.b)("a",{parentName:"p",href:"creating-and-publishing-private-packages"},"Creating and publishing private packages"),'".'),Object(l.b)("h2",null,"Scopes and package visibility"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Unscoped packages are always public."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"about-private-packages"},"Private packages")," are always scoped."),Object(l.b)("li",{parentName:"ul"},"Scoped packages are private by default; you must pass a command-line flag when publishing to make them public.")),Object(l.b)("p",null,'For more information on package scope and visibility, see "',Object(l.b)("a",{parentName:"p",href:"package-scope-access-level-and-visibility"},"Package scope, access level, and visibility"),'".'))}s.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),o=a("aOgs"),i=a("q1tI"),r=a.n(i),c=a("7ljp"),s=a("pD55"),p=a("8Aig"),m=a("ReZb"),u=a("GCVy"),b=a("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),O=a("dVM4"),k=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,a=e.depth;return r.a.createElement(k,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:a+1}):null)})))}E.defaultProps={depth:0};var v=E,j=a("MfeC");function w(e){var t=j.a.getPath(e.location.pathname),a=j.a.getVariantAndPage(e.root,t);if(!a)return null;var n=j.a.getVariantsForPage(e.root,a.page),o=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},o)))}w.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,N=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,k=i.title,E=i.description,w=i.status,T=i.source,W=i.additionalContributors,H=void 0===W?[]:W,P=j.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:u.a,Prompt:d,PromptReply:g,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:k,description:E}),r.a.createElement(p.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},k),E))),null!=P?r.a.createElement(S,null,r.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:n})):null),a.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:a.tableOfContents.items})):null,r.a.createElement(z,null,w||T?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(O.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),T?r.a.createElement(y.a,{href:T}):null):null,a.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(H.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-introduction-to-packages-and-modules-about-scopes-mdx-ceb3635b83d2214c35c5.js.map