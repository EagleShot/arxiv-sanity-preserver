(this["webpackJsonpbioarxiv-app"]=this["webpackJsonpbioarxiv-app"]||[]).push([[0],{133:function(e,a,t){e.exports=t(167)},138:function(e,a,t){},167:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),l=t.n(i),o=(t(138),t(15)),c=t(16),s=t.n(c),m=t(36),u=t(37),p=t(38),d=t(29),h=t(42),f=t(41),g=t(230),E=t(221),b=t(215),v=t(225),w=t(220),y=t(228),C=t(205),k=t(219),O=t(224),j=t(74),x=t.n(j),N=t(56),S=t(206),F=t(212),R=t(216),I=t(77),W=t(84),q=t(3),T=t(18),D=t(213),B=t(214),L=t(170),P=t(231),M=t(209),_=t(208),A=t(112),z=t(109),U=t.n(z),V=t(87),Y=t.n(V),G=t(85),H=t.n(G),J=t(86),$=t.n(J),K=t(110),Q=t.n(K),X=t(111),Z=Object(X.a)({palette:{type:"light",primary:{main:"#003056",light:"#395983",dark:"#00062d",contrastText:"#FFFFFF"},secondary:{main:"#d1ffea",light:"#ffffff",dark:"9fccb8",contrastText:"#000000"},contrastThreshold:3,tonalOffset:.5,text:{primary:"#003056",secondary:"#395983",disabled:"#00062d"},divider:"rgba(3, 26, 38, 1)",background:{paper:"#d1ffea",default:"#000000"}},typography:{},shape:{},transitions:{},zIndex:{mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}}),ee=t(35),ae=t.n(ee);function te(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(m.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.post("http://localhost:5000/login",{method:["POST","GET"],headers:{"Content-Type":"application/json"},widthCredentials:!0,body:{username:a.username,password:a.password}}).then((function(e){return e.data.token?e.data.token:(alert("Invalid username or password."),null)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("/currentuser").then((function(e){return e}));case 2:return a=e.sent,console.log("USER DATA : ",a),e.abrupt("return",a.data.user);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return le.apply(this,arguments)}function le(){return(le=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("USER",a),e.next=3,ae.a.post("/requestfollow",{method:["POST"],headers:{"Content-Type":"application/json"},widthCredentials:!0,body:{toFollow:a}}).then((function(e){return e?e.data:null}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("/top",{params:{timefilter:"week",vfilter:"all"}}).then((function(e){return e?e.data:null}));case 2:return a=e.sent,console.log(a),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(){return r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(C.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")},me=t(106),ue=t.n(me),pe=t(73),de=t.n(pe),he=t(229),fe=t(207),ge=t(211),Ee=t(107),be=t.n(Ee),ve=t(108),we=t.n(ve),ye=t(169),Ce=t(210),ke=Object(S.a)((function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},root:{display:"flex"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(o.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),hide:{display:"none"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.light},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{color:e.palette.primary.dark,padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:e.palette.primary.dark},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(o.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(W.a)(Object(W.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"})}}));function Oe(){var e=ke(Z),a=r.a.useState(null),t=Object(I.a)(a,2),n=t[0],i=t[1],l=r.a.useState(null),c=Object(I.a)(l,2),s=c[0],m=c[1],u=r.a.useState(!1),p=Object(I.a)(u,2),d=p[0],h=p[1],f=Object(T.a)(),g=Boolean(n),E=Boolean(s),b=function(e){i(e.currentTarget)},v=function(){m(null)},w=function(){i(null),v()},y="primary-search-account-menu",C=r.a.createElement(A.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:w},r.a.createElement(_.a,{onClick:w},"Profile"),r.a.createElement(_.a,{onClick:w},"My account")),k=r.a.createElement(A.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:E,onClose:v},r.a.createElement(_.a,null,r.a.createElement(L.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(M.a,{badgeContent:4,color:"secondary"},r.a.createElement(H.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(_.a,null,r.a.createElement(L.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(M.a,{badgeContent:11,color:"secondary"},r.a.createElement($.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(_.a,{onClick:b},r.a.createElement(L.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(Y.a,null)),r.a.createElement("p",null,"Profile")),r.a.createElement(_.a,{onClick:ie},r.a.createElement(L.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu",color:"inherit"},r.a.createElement(ue.a,null)),r.a.createElement("p",null," Logout"))),O=r.a.createElement(he.a,{className:e.drawer,variant:"persistent",anchor:"left",open:d,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(L.a,{onClick:function(){h(!1)}},"rtl"===f.direction?r.a.createElement(be.a,null):r.a.createElement(we.a,null))),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(de.a,null)),r.a.createElement(P.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(fe.a,null,["Sort","Friends","Discussions","Library"].map((function(e,a){return r.a.createElement(ye.a,{button:!0,key:e},r.a.createElement(Ce.a,{primary:e}))}))),r.a.createElement(ge.a,null));return r.a.createElement(F.a,{theme:Z},r.a.createElement("div",{className:e.grow},r.a.createElement(D.a,{position:"static",className:Object(q.a)(e.appBar,Object(o.a)({},e.appBarShift,d))},r.a.createElement(B.a,null,r.a.createElement(L.a,{edge:"start",color:"inherit","aria-label":"open drawer",className:Object(q.a)(e.menuButton,d&&e.hide),onClick:function(){h(!0)}},r.a.createElement(U.a,null)),r.a.createElement(N.a,{className:e.title,variant:"h6",noWrap:!0},"Biorxiv Sanity Preserver"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(L.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(M.a,{badgeContent:4,color:"secondary"},r.a.createElement(H.a,null))),r.a.createElement(L.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(M.a,{badgeContent:17,color:"secondary"},r.a.createElement($.a,null))),r.a.createElement(L.a,{edge:"end","aria-label":"account of current user","aria-controls":y,"aria-haspopup":"true",onClick:b,color:"inherit"},r.a.createElement(Y.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(L.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},r.a.createElement(Q.a,null))))),k,C,O))}var je=t(45),xe=t(12),Ne=t(217),Se=t(218);function Fe(){return r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(C.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var Re=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Ie=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={last_name:"",first_name:"",email:"",institution:"",username:"",password:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(p.a)(t,[{key:"handleClick",value:function(e){ae.a.post("http://localhost:5000/signup",{method:"POST",headers:{"Content-Type":"application/json"},widthCredentials:!0,body:{first_name:this.state.first_name,last_name:this.state.last_name,institution:this.state.institution,email:this.state.email,username:this.state.username,password:this.state.password}}).then((function(e){})),this.props.history.push("/login")}},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(o.a)({},t,n))}},{key:"render",value:function(){var e=this;return r.a.createElement(F.a,{theme:Z},r.a.createElement(b.a,null),r.a.createElement(R.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ne.a,null,r.a.createElement(Se.a,{className:Re.paper},r.a.createElement(g.a,{className:Re.avatar},r.a.createElement(x.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:Re.form,noValidate:!0},r.a.createElement(k.a,{container:!0,spacing:2},r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{autoComplete:"fname",name:"first_name",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(a){return e.handleChange(a)}})),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"last_name",label:"Last Name",name:"last_name",autoComplete:"lname",onChange:function(a){return e.handleChange(a)}})),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"institution",label:"Institution",name:"institution",onChange:function(a){return e.handleChange(a)}})),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",onChange:function(a){return e.handleChange(a)}})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(a){return e.handleChange(a)}})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(a){return e.handleChange(a)}})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(w.a,{control:r.a.createElement(y.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(a){return e.handleClick(a)},className:Re.submit},"Sign Up"),r.a.createElement(k.a,{container:!0,justify:"flex-end"},r.a.createElement(k.a,{item:!0},r.a.createElement(C.a,{href:"#",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(O.a,{mt:5},r.a.createElement(Fe,null)))))}}]),t}(n.Component),We=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"A bare bones application!"),r.a.createElement("p",null,"My Token = ",window.token))},qe=t(222),Te=(je.a,qe.a,xe.a,xe.a,xe.a,xe.a,new(t(113).a),Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))),De=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(p.a)(t,[{key:"handleClick",value:function(){var e=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,te(this.state);case 3:e.sent&&this.props.history.push("/account/".concat(this.state.username).concat(localStorage.getItem("token")));case 5:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(o.a)({},t,n))}},{key:"render",value:function(){var e=this;return r.a.createElement(F.a,{theme:Z},r.a.createElement(b.a,null),r.a.createElement("div",null,r.a.createElement(Oe,null)),r.a.createElement(R.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ne.a,null,r.a.createElement(Se.a,{className:Te.paper},r.a.createElement(g.a,{className:Te.avatar},r.a.createElement(x.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:Te.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",type:"text",autoComplete:"username",autoFocus:!0,defaultValue:this.state.password,onChange:function(a){return e.handleChange(a)}}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"password",defaultValue:this.state.password,onChange:function(a){return e.handleChange(a)}}),r.a.createElement(w.a,{control:r.a.createElement(y.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(E.a,{onClick:function(a){return e.handleClick(a)},type:"button",fullWidth:!0,variant:"contained",color:"primary",className:Te.submit},"Sign In"),r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:!0},r.a.createElement(C.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(k.a,{item:!0},r.a.createElement(C.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(O.a,{mt:8},r.a.createElement(se,null)))))}}]),t}(n.Component);t(163),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(164);var Be=t(11),Le=t(226),Pe=t(223),Me=Object(S.a)((function(e){return{root:{display:"flex",maxWidth:"lg",flexDirection:"column"},avatar:{margin:e.spacing(1,1,1)},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Be.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Be.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})),_e=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={firstName:"",lastName:"",username:"",institution:"",email:"",followers:[],following:[],toFollow:""},n.followRequest=n.followRequest.bind(Object(d.a)(n)),n.setFollowRequest=n.setFollowRequest.bind(Object(d.a)(n)),n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){return re.apply(this,arguments)})().then((function(a){e.setState({firstName:a.firstName,lastName:a.lastName,username:a.username,institution:a.institution,email:a.email,followers:a.followers,following:a.following,toFollow:""})}))}},{key:"followRequest",value:function(e){e.preventDefault(),function(e){oe.apply(this,arguments)}(this.state.toFollow)}},{key:"setFollowRequest",value:function(e){e.preventDefault();var a=e.target,t=a.name,n=a.value;this.setState(Object(o.a)({},t,n))}},{key:"render",value:function(){var e=this;return r.a.createElement(F.a,{theme:Z},r.a.createElement(b.a,null),r.a.createElement("div",null,r.a.createElement(Oe,null)),r.a.createElement("div",null,r.a.createElement(Ne.a,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{direction:"row",item:!0},r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,sm:!0},r.a.createElement(Se.a,null,r.a.createElement(g.a,{className:Me.avatar}),r.a.createElement(N.a,{gutterBottom:!0,variant:"h5",component:"h5"},this.state.firstName," ",this.state.lastName),r.a.createElement(N.a,{variant:"body2",component:"p"},"Institution: ",this.state.institution),r.a.createElement(N.a,{variant:"body2",component:"p"},"E-mail: ",this.state.email))),r.a.createElement(k.a,{item:!0,sm:!0},r.a.createElement(Se.a,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,lg:!0},r.a.createElement(C.a,{href:"#",variant:"body2"},"Followers:"," ",this.state.followers?this.state.followers.length:0)),r.a.createElement(k.a,{item:!0,lg:!0},r.a.createElement(C.a,{href:"#",variant:"body2"},"Following:"," ",this.state.following?this.state.followers.length:0))),r.a.createElement(N.a,{gutterBottom:!0,variant:"h6",component:"h3"},"About"),r.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))))),r.a.createElement(Se.a,null,r.a.createElement("div",{className:Me.search},r.a.createElement(de.a,{className:Me.searchIcon}),r.a.createElement(P.a,{placeholder:"Search\u2026",name:"toFollow",classes:{root:Me.inputRoot,input:Me.inputInput},onChange:function(a){return e.setFollowRequest(a)},inputProps:{"aria-label":"search"}}),r.a.createElement(E.a,{onClick:function(a){return e.followRequest(a)},type:"button",fullWidth:!0,variant:"contained",color:"primary",className:Me.submit},"Request"))))),r.a.createElement(Ne.a,null,r.a.createElement(Le.a,{indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},r.a.createElement(Pe.a,{label:"Following"}),r.a.createElement(Pe.a,{label:"Followers"})))))}}]),t}(n.Component),Ae=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={papers:[]},n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){(function(){return ce.apply(this,arguments)})().then((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(Oe,null))}}]),t}(n.Component),ze=r.a.createElement(je.a,null,r.a.createElement(xe.c,null,r.a.createElement(xe.a,{path:"/main",component:Ae}),r.a.createElement(xe.a,{path:"/login",component:De}),r.a.createElement(xe.a,{path:"/signup",component:Ie}),r.a.createElement(xe.a,{path:"/account",component:_e}),r.a.createElement(xe.a,{component:We})));l.a.render(ze,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.a62c1cd4.chunk.js.map