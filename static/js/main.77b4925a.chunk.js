(this["webpackJsonppacketsss-web"]=this["webpackJsonppacketsss-web"]||[]).push([[0],{146:function(e,t,s){},507:function(e,t,s){},510:function(e,t,s){},511:function(e,t,s){},512:function(e,t,s){},513:function(e,t,s){},514:function(e,t,s){},516:function(e,t,s){},518:function(e,t,s){},519:function(e,t,s){},520:function(e,t,s){},521:function(e,t,s){"use strict";s.r(t);var a=s(526),c=s(36),n=s.n(c),i=s(6),o=s(8),r=s(2),l=s(37),j=s(49),d=s(137),b=s(133),u=s(523),m=s(524),p=s(527),h=s(525),O=s(528),x=s(32),f=(s(146),s(129)),g=s.n(f),N=s(17),y=s(130),w=s.n(y),k=s(1);function v(e){e.preventDefault()}var _=2e3,S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function I(e){var t=e.split("-");return"".concat(S[parseInt(t[1],10)-1]," ").concat(t[2],", ").concat(t[0])}function T(){return Object(k.jsx)(w.a,{style:{position:"relative",zIndex:-999},params:{particles:{color:{value:"#000000"},collisions:{enable:!0},number:{value:300,density:{enable:!0,value_area:2500}},line_linked:{enable:!1,opacity:.03},move:{direction:"none",outMode:"bounce",random:!0,speed:1},size:{random:!0,value:2},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{detect_on:"window",events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})}function P(){var e=Object(N.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var C=g.a.create({baseURL:"http://127.0.0.1:8000",timeout:5e3,headers:{"Content-Type":"application/json",accept:"application/json",authorization:"Token ".concat(document.cookie.split("=")[1])}});function E(e){return document.cookie?Object(k.jsxs)("div",{style:{paddingLeft:"50px"},children:["Hi,\xa0\xa0",Object(k.jsx)("a",{style:{textDecoration:"none",fontSize:25,color:"black"},href:"#/settings/",children:e?e.username:null})]}):Object(k.jsx)(b.a,{href:"#/login/",className:"fork-btn-inner",children:Object(k.jsx)(u.a,{children:Object(k.jsx)(m.a,{children:"Login Here"})})})}function B(){var e="Token ".concat(document.cookie.split("=")[1]);Object(r.useEffect)((function(){document.cookie&&C.get("/api/users/").then((function(e){N(e.data[0])}))}),[e]);var t=Object(r.useState)(!1),s=Object(o.a)(t,2),a=s[0],c=s[1],n=Object(r.useState)(!1),i=Object(o.a)(n,2),b=i[0],u=i[1],m=Object(r.useState)(),f=Object(o.a)(m,2),g=f[0],N=f[1];return window.addEventListener("scroll",(function(){window.scrollY>=20?u(!0):u(!1)})),Object(k.jsx)("div",{className:"top",children:Object(k.jsx)(p.a,{expanded:a,fixed:"top",expand:"md",className:b?"sticky":"navbar",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){c(!a)}}),Object(k.jsx)("a",{className:"topClickable",href:"https://github.com/packetsss",children:Object(k.jsx)("i",{className:"topIcon fab fa-github-square"})}),Object(k.jsx)("a",{className:"topClickable",href:"https://www.linkedin.com/in/paul-pan001/",children:Object(k.jsx)("i",{className:"topIcon fab fa-linkedin"})}),Object(k.jsx)("a",{className:"topClickable",href:"https://www.facebook.com/paul.pan.94849/",children:Object(k.jsx)("i",{className:"topIcon fab fa-facebook-square"})}),Object(k.jsx)("a",{className:"topClickable",href:"https://twitter.com/pyj2001",children:Object(k.jsx)("i",{className:"topIcon fab fa-twitter-square"})}),Object(k.jsx)("a",{className:"topClickable",href:"https://www.instagram.com/_popaz/",children:Object(k.jsx)("i",{className:"topIcon fab fa-instagram-square"})}),Object(k.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(k.jsxs)(O.a,{defaultActiveKey:"#home",children:[Object(k.jsx)(O.a.Item,{children:Object(k.jsxs)(O.a.Link,{as:l.b,to:"/",onClick:function(){return c(!1)},children:[Object(k.jsx)(x.f,{style:{marginBottom:"2px"}})," ","HOME"]})}),Object(k.jsx)(O.a.Item,{children:Object(k.jsxs)(O.a.Link,{as:l.b,to:"/about",onClick:function(){return c(!1)},children:[Object(k.jsx)(x.h,{style:{marginBottom:"2px"}})," ","ABOUT"]})}),Object(k.jsx)(O.a.Item,{children:Object(k.jsxs)(O.a.Link,{as:l.b,to:"/projects",onClick:function(){return c(!1)},children:[Object(k.jsx)(x.e,{style:{marginBottom:"2px"}})," ","PROJECTS"]})}),Object(k.jsx)(O.a.Item,{children:Object(k.jsxs)(O.a.Link,{as:l.b,to:"/posts",onClick:function(){return c(!1)},children:[Object(k.jsx)(d.a,{style:{marginBottom:"2px"}})," ","POSTS"]})}),Object(k.jsx)(O.a.Item,{children:Object(k.jsxs)(O.a.Link,{as:l.b,to:"/write",onClick:function(){return c(!1)},children:[Object(k.jsx)(j.a,{style:{marginBottom:"2px"}})," ","WRITE"]})}),Object(k.jsx)("div",{className:"fork-btn",children:E(g)})]})})]})})})}s(507);var A=s(138),L=s.n(A);function D(){return Object(k.jsx)(L.a,{options:{strings:["Machine Learning Enthusiast","Web Developer","Banana Eater","Open Source Contributor","Game Developer"],autoStart:!0,loop:!0,deleteSpeed:50}})}function z(){return Object(k.jsx)(h.a,{fluid:!0,className:"home",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(T,{}),Object(k.jsxs)("div",{className:"homeTitles",children:[Object(k.jsx)("span",{className:"homeTitleLarge",children:"Hi there, I am Paul Pan"}),Object(k.jsx)("span",{className:"homeTitleSmall",children:Object(k.jsx)(D,{})})]})]})})}var q=s(18),F=s.n(q),U=s(41),M=s(67),R=(s(508),s(23)),W=s.n(R);s(510);function H(){return(H=Object(U.a)(F.a.mark((function e(t,s,a){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.put("/api/posts/".concat(t,"/"),s).then((function(e){R.store.addNotification({title:"Edit Success!",message:"You've successfully updated your post",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__bounceIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t,s){return e?Object(k.jsx)("textarea",{required:!0,className:"form-control z-depth-1",style:{whiteSpace:"pre-wrap"},onChange:t,defaultValue:s,rows:s.length/50,placeholder:"Please enter something at least..."}):s}function J(e,t,s,a,c){return(t||s)&&(a.title=t?t.target.value:a.title,a.description=s?s.target.value:a.description,function(e,t,s){H.apply(this,arguments)}(e,{title:a.title,description:a.description,owner_id:a.owner_id},c)),[a.title,a.description]}function Y(e){var t="Token ".concat(document.cookie.split("=")[1]);Object(r.useEffect)((function(){document.cookie||window.location.replace("#/login")}),[]),Object(r.useEffect)((function(){C.get("/api/users/").then((function(e){y(e.data[0])})).catch((function(e){return console.log(e)}))}),[t]),Object(r.useEffect)((function(){C.get("/api/posts/".concat(e.match.params.id)).then((function(e){P(e.data)})).catch((function(e){return console.log(e)}))}),[t,e.match.params.id]);var s=Object(r.useState)(!1),a=Object(o.a)(s,2),c=a[0],n=a[1],i=Object(r.useState)(),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(r.useState)(),p=Object(o.a)(b,2),O=p[0],x=p[1],f=Object(r.useState)(),g=Object(o.a)(f,2),N=g[0],y=g[1],w=Object(r.useState)(),_=Object(o.a)(w,2),S=_[0],P=_[1];return S&&N?Object(k.jsxs)(h.a,{fluid:!0,className:"single",children:[Object(k.jsx)(T,{}),Object(k.jsxs)(h.a,{className:"singlePostWrapper",children:[Object(k.jsx)(u.a,{children:Object(k.jsx)("img",{className:"singlePostImg",src:"https://picsum.photos/1400/400",alt:"post cover"})}),Object(k.jsxs)("form",{onSubmit:function(s){v(s),n(!c),S.owner_name=N.username;var a=J(e.match.params.id,j,O,S,t),i=Object(o.a)(a,2);S.title=i[0],S.description=i[1]},children:[Object(k.jsxs)(u.a,{className:"singlePostTitle",children:[Object(k.jsx)(m.a,{}),Object(k.jsx)(m.a,{className:"col-md-8",children:G(c,d,S.title)}),N&&N.id===S.owner_id?Object(k.jsx)(m.a,{className:"singlePostEdit",children:c?Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{type:"submit",className:"singlePostIcon far fa-check-square"}),Object(k.jsx)("i",{className:"singlePostIcon far fa-window-close",onClick:function(){return n(!c)}})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return n(!c)}}),Object(k.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:function(){return function(e,t){Object(M.confirmAlert)({title:"Confirm to delete",message:"Are you sure to delete this post?",buttons:[{label:"Yes",onClick:function(){C.delete("/api/posts/".concat(e.match.params.id,"/")).then((function(e){window.location.replace("#/posts"),window.location.reload()}))}},{label:"No",onClick:function(){return null}}]})}(e)}})]})}):Object(k.jsx)(m.a,{})]}),Object(k.jsxs)(m.a,{className:"singlePostInfo",children:[Object(k.jsxs)(u.a,{className:"singlePostAuthor",children:["Author:\xa0",Object(k.jsx)("b",{children:N.username})]}),Object(k.jsx)(u.a,{className:"singlePostDate",children:I(S.date)})]}),Object(k.jsx)(m.a,{children:Object(k.jsxs)("p",{className:"singlePostDesc",children:["\u2003",G(c,x,S.description)]})})]})]})]}):Object(k.jsx)(h.a,{})}s(511);function K(){var e=Object(r.useState)(),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(r.useState)(),n=Object(o.a)(c,2),i=n[0],l=n[1],j=Object(r.useState)(),d=Object(o.a)(j,2),b=d[0],u=d[1],m=Object(r.useState)(-1),p=Object(o.a)(m,2),O=p[0],x=p[1],f="Token ".concat(document.cookie.split("=")[1]);return Object(r.useEffect)((function(){document.cookie||(window.location.replace("#/login"),window.location.reload()),-1!==O&&setTimeout((function(){window.location.replace("#/post/".concat(O))}),_),C.get("/api/users/").then((function(e){a(e.data[0])})).catch((function(e){return console.log(e)}))}),[O,f]),s?Object(k.jsxs)(h.a,{className:"write",children:[Object(k.jsx)(T,{}),Object(k.jsx)("img",{className:"writeImg",src:"https://picsum.photos/1200/400",alt:""}),Object(k.jsxs)("form",{className:"writeForm",onSubmit:function(e){var t;v(e),t={title:i.target.value,description:b.target.value,owner_id:s.id,owner_name:s.username},C.post("/api/posts/",t).then((function(e){R.store.addNotification({title:"Publish Success!",message:"Congratulations on completing this post",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__bounceIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}}),x(e.data.id)})).catch((function(e){R.store.addNotification({title:"Publish Success!",message:"Congratulations on completing this post",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__bounceIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}})}))},children:[Object(k.jsxs)("div",{className:"writeFormGroup",children:[Object(k.jsx)("label",{htmlFor:"fileInput",children:Object(k.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(k.jsx)("input",{id:"fileInput",type:"file",style:{display:"none"}}),Object(k.jsx)("input",{required:!0,className:"writeInput",placeholder:"Title",type:"text",autoFocus:!0,onChange:l})]}),Object(k.jsx)("div",{className:"writeFormGroup",children:Object(k.jsx)("textarea",{required:!0,className:"writeInput writeText",placeholder:"Tell your story...",autoFocus:!0,onChange:u})}),Object(k.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]}):Object(k.jsx)("div",{})}s(512);var V=s(38),X=s(139);function Q(e){return Object(k.jsxs)(V.a,{className:"project-card-view",children:[Object(k.jsx)(V.a.Img,{variant:"top",src:e.imgPath,alt:"card-img"}),Object(k.jsxs)(V.a.Body,{children:[Object(k.jsx)(V.a.Title,{children:e.title}),Object(k.jsx)(V.a.Text,{style:{textAlign:"justify",fontFamily:"Varela Round",fontSize:"15px"},children:e.description}),Object(k.jsx)("br",{}),Object(k.jsxs)(b.a,{variant:"primary",href:e.link?e.link:e.clickAble?e.clickAble.link:"",target:"_blank",style:{position:"absolute",bottom:12},children:[Object(k.jsx)(X.a,{})," \xa0",e.link?e.isBlog?"View Blog":"View Project":e.clickAble?e.clickAble.text:""]})]})]})}var Z=s.p+"static/media/pool_kick.1dda2452.gif",$=s.p+"static/media/pool_solver.2e12cba6.gif",ee=s.p+"static/media/chatbot.8e9e433d.jpg",te=s.p+"static/media/image_editor.3eb63aae.gif",se=s.p+"static/media/sudoku.08887751.gif";function ae(){return Object(k.jsxs)(h.a,{fluid:!0,className:"project-section",children:[Object(k.jsx)(T,{}),Object(k.jsxs)(h.a,{children:[Object(k.jsxs)("h1",{className:"project-heading",children:["My Recent ",Object(k.jsx)("strong",{className:"purple",children:"Works "})]}),Object(k.jsx)("p",{style:{color:"white"},children:"Here are a few projects I've worked on recently."}),Object(k.jsxs)(u.a,{style:{justifyContent:"center",paddingBottom:"10px"},children:[Object(k.jsx)(m.a,{md:4,className:"project-card",children:Object(k.jsx)(Q,{imgPath:$,isBlog:!1,title:"Pool Game Solver",description:"A realistic pool game simulator built using pygame and pymunk with extra support for reinforcement learning model training. The genetic algorithm (GA) was implemented to solve the pool game environment.",link:"https://github.com/packetsss/youtube-projects/tree/main/pool-game"})}),Object(k.jsx)(m.a,{md:4,className:"project-card",children:Object(k.jsx)(Q,{imgPath:ee,isBlog:!1,title:"Discord Bot",description:"A Chat bot deployed in Packetsss's discord server that is capable of doing conversation, translation, summarization , text generation, image classification, image generation and etc. Created using discord.py and pre-trained transformer models.\xa0\xa0",clickAble:{text:"Join Here",link:"https://discord.gg/nDKKffMMjB"}})}),Object(k.jsx)(m.a,{md:4,className:"project-card",children:Object(k.jsx)(Q,{imgPath:Z,isBlog:!1,title:"AI Pool Assist",description:"An AI using computer vision and object detection as table and billiard ball locator, and visualizing aiming path for pool cue and balls. A search algorithm is implemented to find the best shot for the current player.",link:"https://github.com/packetsss/pool-player"})}),Object(k.jsx)(m.a,{md:4,className:"project-card",children:Object(k.jsx)(Q,{imgPath:te,isBlog:!1,title:"Image Editor",description:"A Image Editor that provides useful editing features such as crop, rotate, change brightness, auto sharpen, auto bypass censorship, face detection, and etc.",link:"https://github.com/packetsss/Image-Editor"})}),Object(k.jsx)(m.a,{md:4,className:"project-card",children:Object(k.jsx)(Q,{imgPath:se,isBlog:!1,title:"Sudoku Solver",description:"A Sudoku Solver using back tracking and additional optimizations that solves any Sudoku puzzles in 2 seconds. A GUI is also implemented as a ease of use.",link:"https://github.com/packetsss/Sudoku-Solver"})})]})]})]})}s(513);function ce(e){var t,s,a=(t=200,s=800,Math.floor(Math.random()*(s-t)+t));return e.post?Object(k.jsxs)("div",{className:"post",children:[Object(k.jsxs)("a",{href:"#/post/"+e.post.id,style:{textDecoration:"none",color:"black"},children:[Object(k.jsx)("img",{className:"postImg",src:"https://picsum.photos/".concat(a),alt:""}),Object(k.jsxs)("div",{className:"postInfo",children:[Object(k.jsx)("div",{className:"postCategories"}),Object(k.jsx)("span",{className:"postTitle",children:e.post.title}),Object(k.jsx)("span",{className:"postDate",children:I(e.post.date)})]})]}),Object(k.jsx)("p",{className:"postDesc",children:e.post.description})]}):null}function ne(e){try{return e.map((function(e){return Object(k.jsx)(m.a,{children:Object(k.jsx)(ce,{post:e})},e.id)}))}catch(t){return function(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var s=e[t].split("=");document.cookie=s[0]+"=;expires=Thu, 21 Sep 1979 00:00:01 UTC;"}}()}}function ie(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],c="Token ".concat(document.cookie.split("=")[1]);return Object(r.useEffect)((function(){document.cookie||(window.location.replace("#/login"),window.location.reload()),C.get("/api/posts/").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}),[c]),s?Object(k.jsxs)(h.a,{className:"posts",children:[Object(k.jsx)(T,{}),ne(s)]}):Object(k.jsx)(h.a,{})}s(514);function oe(){R.store.addNotification({title:"Logout Success!",message:"You have successfully logged out",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__bounceIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}}),document.cookie.split(";").forEach((function(e){document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString()+";path=/")})),setTimeout((function(){window.location.replace("#/"),window.location.reload()}),_)}function re(){return Object(r.useEffect)((function(){document.cookie||(window.location.replace("#/login"),window.location.reload())})),Object(k.jsxs)(h.a,{className:"settings",children:[Object(k.jsx)(T,{}),Object(k.jsxs)("div",{className:"settingsWrapper",children:[Object(k.jsxs)("div",{className:"settingsTitle",children:[Object(k.jsx)("span",{className:"settingsTitleUpdate",children:"Update Your Account"}),Object(k.jsx)("span",{className:"settingsTitleDelete",children:Object(k.jsx)("a",{href:"/",children:"Delete Account"})})]}),Object(k.jsxs)("form",{className:"settingsForm",onSubmit:v,children:[Object(k.jsx)("label",{children:"ONLY THE LOGOUT BUTTON WORKS FOR NOW //Profile Picture"}),Object(k.jsxs)("div",{className:"settingsPP",children:[Object(k.jsx)("img",{src:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:""}),Object(k.jsxs)("label",{htmlFor:"fileInput",children:[Object(k.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})," "]}),Object(k.jsx)("input",{id:"fileInput",type:"file",style:{display:"none"},className:"settingsPPInput"})]}),Object(k.jsx)("label",{children:"Username"}),Object(k.jsx)("input",{type:"text",placeholder:"Safak",name:"name"}),Object(k.jsx)("label",{children:"Email"}),Object(k.jsx)("input",{type:"email",placeholder:"safak@gmail.com",name:"email"}),Object(k.jsx)("label",{children:"Password"}),Object(k.jsx)("input",{type:"password",placeholder:"Password",name:"password"}),Object(k.jsx)("button",{className:"btn btn-secondary settingsSubmitButton",type:"submit",children:"Update"}),Object(k.jsx)("button",{className:"btn btn-warning settingsLogoutButton",onClick:oe,children:"Logout"})]})]})]})}var le=s(529);s(515),s(516),s(517);function je(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(r.useState)(""),n=Object(o.a)(c,2),i=n[0],l=n[1],j=Object(le.a)(["myToken"]),d=Object(o.a)(j,2),b=d[0],u=d[1];function m(){return(m=Object(U.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.post("/auth/",t).then((function(e){R.store.addNotification({title:"Login Success!",message:"Welcome",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__bounceIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}}),u("myToken",e.data.token,{path:"/"})})).catch((function(e){R.store.addNotification({title:"Login Failed!",message:"Please check your username and password and try again",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__shakeX"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){document.cookie&&!s&&window.location.replace("#/posts"),b.myToken&&setTimeout((function(){window.location.replace("#/posts"),window.location.reload()}),_)}),[b.myToken,s]),Object(k.jsxs)("div",{children:[Object(k.jsx)(T,{}),Object(k.jsxs)("div",{className:"login",children:[Object(k.jsx)("span",{className:"loginTitle",children:"Login"}),Object(k.jsxs)("form",{className:"loginForm",onSubmit:function(e){v(e),function(e){m.apply(this,arguments)}({username:s,password:i})},children:[Object(k.jsx)("label",{children:"Username"}),Object(k.jsx)("input",{required:!0,className:"loginInput",type:"text",placeholder:"Enter your username...",value:s,onChange:function(e){return a(e.target.value)}}),Object(k.jsx)("label",{children:"Password"}),Object(k.jsx)("input",{required:!0,className:"loginInput",type:"password",placeholder:"Enter your password...",value:i,onChange:function(e){return l(e.target.value)}}),Object(k.jsx)("button",{type:"submit",className:"loginButton",children:"Login"})]}),Object(k.jsxs)("div",{style:{marginTop:"5px",fontSize:14,zIndex:0},children:["Don't have an account? ",Object(k.jsx)("a",{href:"#/register/",children:"Sign Up"})]})]})]})}s(518);var de=s(140),be=s(45),ue=s(72);function me(){return Object(k.jsx)(V.a,{className:"quote-card-view",children:Object(k.jsx)(V.a.Body,{children:Object(k.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(k.jsxs)("p",{style:{textAlign:"justify"},children:["A student at UC San Diego who love Machine Learning and always looking forward to learn new stuff.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"Apart from coding, these are some other activities I enjoys doing!"]}),Object(k.jsxs)("ul",{children:[Object(k.jsxs)("li",{className:"about-activity",children:[Object(k.jsx)(j.b,{})," Eating bananas"]}),Object(k.jsxs)("li",{className:"about-activity",children:[Object(k.jsx)(j.b,{})," Eating more bananas"]}),Object(k.jsxs)("li",{className:"about-activity",children:[Object(k.jsx)(j.b,{})," Eating even more bananas"]})]}),Object(k.jsx)("p",{style:{marginBlockEnd:0,color:"#be9656"},children:'"I also eat code. Beep. Beep"'}),Object(k.jsx)("footer",{className:"blockquote-footer",children:Object(k.jsx)("i",{style:{color:"#be9656"},children:"Packetsss"})}),Object(k.jsx)(xe,{})]})})})}function pe(){return Object(k.jsxs)(u.a,{style:{justifyContent:"center",paddingBottom:"50px"},children:[Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(ue.b,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(ue.a,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(ue.c,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:numpy"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:pandas"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(be.c,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(be.d,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:opencv"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:openaigym"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:numba"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:qt"})})]})}function he(){return Object(k.jsxs)(u.a,{style:{justifyContent:"center",paddingBottom:"10px"},children:[Object(k.jsxs)("h1",{className:"project-heading",style:{paddingBottom:"20px"},children:["Total ",Object(k.jsx)("strong",{className:"purple",children:"Contributions"})]}),Object(k.jsx)(de.a,{username:"packetsss",blockSize:20,blockMargin:3,theme:{background:"transparent",text:"#ffffff",level4:"#875503",level3:"#b07515",level2:"#dea549",level1:"#ffcd7d",level0:"#fff5e6"},fontSize:16})]})}function Oe(){return Object(k.jsxs)(u.a,{style:{justifyContent:"center",paddingBottom:"50px"},children:[Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(be.b,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(be.e,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)(be.a,{})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:git"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:docker"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:mysql"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:postman"})}),Object(k.jsx)(m.a,{xs:4,md:2,className:"tech-icons",children:Object(k.jsx)("span",{className:"iconify","data-icon":"simple-icons:heroku"})})]})}function xe(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(r.useState)("lol"),n=Object(o.a)(c,2),i=n[0],l=n[1];return Object(k.jsx)("div",{children:Object(k.jsx)("button",{onClick:function(){a(s+1),l(i+"ol")},className:"btn btn-success",children:0===s?i:"".concat(i," x ").concat(s)})})}var fe=s.p+"static/media/my_pic_2.22a009c7.gif";var ge=function(){return Object(k.jsxs)(h.a,{fluid:!0,className:"about-section",children:[Object(k.jsx)(T,{}),Object(k.jsxs)(h.a,{children:[Object(k.jsxs)(u.a,{style:{justifyContent:"center",padding:"10px"},children:[Object(k.jsxs)(m.a,{md:7,style:{justifyContent:"center",paddingTop:"30px"},children:[Object(k.jsxs)("h1",{style:{fontSize:"2.1em",paddingBottom:"20px"},children:["Knowing Who ",Object(k.jsx)("strong",{className:"purple",children:"I AM"})]}),Object(k.jsx)(me,{})]}),Object(k.jsx)(m.a,{md:5,style:{paddingTop:"120px",paddingBottom:"50px"},className:"about-img",children:Object(k.jsx)("img",{src:fe,alt:"about",width:"300",className:"tech-icons"})})]}),Object(k.jsxs)("h1",{className:"project-heading",children:["Professional ",Object(k.jsx)("strong",{className:"purple",children:"Skillset "})]}),Object(k.jsx)(pe,{}),Object(k.jsxs)("h1",{className:"project-heading",children:["Development ",Object(k.jsx)("strong",{className:"purple",children:"Tools"})]}),Object(k.jsx)(Oe,{}),Object(k.jsx)(he,{})]})]})};s(519);function Ne(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(r.useState)(""),n=Object(o.a)(c,2),i=n[0],l=n[1],j=Object(r.useState)(""),d=Object(o.a)(j,2),b=d[0],u=d[1],m=Object(r.useState)(!1),p=Object(o.a)(m,2),h=p[0],O=p[1];function x(){return(x=Object(U.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.post("/api/users/",t).then((function(e){R.store.addNotification({title:"Register Success!",message:"Welcome",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__bounceIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}}),O(!h)})).catch((function(e){R.store.addNotification({title:"Register Failed!",message:"This username is not available",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__shakeX"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:_,onScreen:!0}})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){document.cookie&&window.location.replace("#/posts"),h&&setTimeout((function(){window.location.replace("#/login")}),_)}),[h]),Object(k.jsxs)("div",{children:[Object(k.jsx)(T,{}),Object(k.jsxs)("div",{className:"register",children:[Object(k.jsx)("span",{className:"registerTitle",children:"Register"}),Object(k.jsxs)("form",{className:"registerForm",onSubmit:function(e){v(e),function(e){x.apply(this,arguments)}({username:s,email:i,password:b})},children:[Object(k.jsx)("label",{children:"*Username"}),Object(k.jsx)("input",{required:!0,className:"registerInput",type:"text",placeholder:"Enter your username...",value:s,onChange:function(e){return a(e.target.value)}}),Object(k.jsx)("label",{children:"*Email"}),Object(k.jsx)("input",{required:!0,type:"email",className:"registerInput",placeholder:"Enter your email...",value:i,onChange:function(e){return l(e.target.value)}}),Object(k.jsx)("label",{children:"*Password"}),Object(k.jsx)("input",{required:!0,className:"registerInput",type:"password",placeholder:"Enter your password...",value:b,onChange:function(e){return u(e.target.value)}}),Object(k.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(k.jsxs)("div",{style:{marginTop:"5px",fontSize:14,zIndex:0},children:["Already have an account? ",Object(k.jsx)("a",{href:"#/login/",children:"Login"})]})]})]})}s(520);function ye(){var e=(new Date).getFullYear();return Object(k.jsx)(h.a,{fluid:!0,className:"footer",children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(m.a,{md:"4",className:"footer-copyright",children:Object(k.jsx)("h3",{children:"Designed and Developed by Paul Pan"})}),Object(k.jsx)(m.a,{md:"4",className:"footer-copyright",children:Object(k.jsxs)("h3",{children:["Copyright \xa9 ",e," Packetsss"]})}),Object(k.jsx)(m.a,{md:"4",className:"footer-body",children:Object(k.jsxs)("ul",{className:"footer-icons",children:[Object(k.jsx)("li",{className:"social-icons",children:Object(k.jsx)("a",{href:"https://github.com/packetsss",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(x.b,{})})}),Object(k.jsx)("li",{className:"social-icons",children:Object(k.jsx)("a",{href:"https://www.linkedin.com/in/paul-pan001/",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(x.d,{})})}),Object(k.jsx)("li",{className:"social-icons",children:Object(k.jsx)("a",{href:"https://www.facebook.com/paul.pan.94849/",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(x.a,{})})}),Object(k.jsx)("li",{className:"social-icons",children:Object(k.jsx)("a",{href:"https://twitter.com/pyj2001",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(x.g,{})})}),Object(k.jsx)("li",{className:"social-icons",children:Object(k.jsx)("a",{href:"https://www.instagram.com/_popaz/",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)(x.c,{})})})]})})]})})}var we=function(){return document.documentElement.style.setProperty("--animate-duration",".5s"),Object(k.jsxs)(l.a,{basename:"/",children:[Object(k.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(k.jsx)(W.a,{}),Object(k.jsx)(P,{}),Object(k.jsx)(B,{}),Object(k.jsxs)(N.c,{children:[Object(k.jsx)(N.a,{exact:!0,path:"/",children:Object(k.jsx)(z,{})}),Object(k.jsx)(N.a,{exact:!0,path:"/about",children:Object(k.jsx)(ge,{})}),Object(k.jsx)(N.a,{exact:!0,path:"/projects",children:Object(k.jsx)(ae,{})}),Object(k.jsx)(N.a,{exact:!0,path:"/register",children:Object(k.jsx)(Ne,{})}),Object(k.jsx)(N.a,{exact:!0,path:"/login",children:Object(k.jsx)(je,{})}),Object(k.jsx)(N.a,{exact:!0,path:"/post/:id",render:function(e){return Object(k.jsx)(Y,Object(i.a)({},e))}}),Object(k.jsx)(N.a,{exact:!0,path:"/posts",children:Object(k.jsx)(ie,{})}),Object(k.jsx)(N.a,{exact:!0,path:"/write",children:Object(k.jsx)(K,{})}),Object(k.jsx)(N.a,{exact:!0,path:"/settings",children:Object(k.jsx)(re,{})})]})]}),Object(k.jsx)(ye,{})]})};n.a.render(Object(k.jsx)(a.a,{children:Object(k.jsx)(we,{})}),document.getElementById("root"))}},[[521,1,2]]]);
//# sourceMappingURL=main.77b4925a.chunk.js.map