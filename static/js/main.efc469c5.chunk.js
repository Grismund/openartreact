(this["webpackJsonpoa-react"]=this["webpackJsonpoa-react"]||[]).push([[0],{29:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(19),r=a.n(s),i=(a(29),a(40),a(41),a(42),a(15)),l=a(16),o=a(17),j=a(18),d=(a(43),a(9)),h=a(12),m=a(1);var u=function(){return Object(m.jsx)("footer",{className:"foots",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-4 col-sm-2 offset-1",children:[Object(m.jsx)("h5",{children:"Links"}),Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{className:"footer-links",to:"/home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{className:"footer-links",to:"/collections",children:"Collections"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{className:"footer-links",to:"/categories",children:"Categories"})})]})]}),Object(m.jsxs)("div",{className:"col-6 col-sm-5 text-center",children:[Object(m.jsx)("h5",{children:"Social"}),Object(m.jsx)("a",{className:"btn footer-links",href:"http://instagram.com/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:"fa fa-instagram"})}),Object(m.jsx)("a",{className:"btn footer-links",href:"http://facebook.com/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:"fa fa-facebook"})}),Object(m.jsx)("a",{className:"btn footer-links",href:"http://twitter.com/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:"fa fa-twitter"})}),Object(m.jsx)("a",{className:"btn footer-links",href:"http://youtube.com/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:"fa fa-youtube"})})]}),Object(m.jsx)("div",{className:"col-sm-4 text-center",children:Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsxs)("a",{role:"button",className:"btn btn-link footer-links",href:"tel:15555551234",children:[Object(m.jsx)("i",{className:"fa fa-phone footer-links"})," 1-555-555-1234"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("a",{role:"button",className:"btn btn-link footer-links",href:"mailto:thisemail@thisemail.com",children:[Object(m.jsx)("i",{className:"fa fa-envelope-o footer-links"})," thisemail@thisemail.com"]})})]})})]})})})},b=a(6),x=a(62),O=a(63),f=a(64),p=a(65),g=a(66),v=a(67),k=a(78),N=a(68),y=a(69),w=a(70),C=a(71),S=a(72),T=a(73);var F=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},c.toggleNav=c.toggleNav.bind(Object(b.a)(c)),c.toggleModal=c.toggleModal.bind(Object(b.a)(c)),c.handleLogin=c.handleLogin.bind(Object(b.a)(c)),c}return Object(l.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)(x.a,{light:!0,sticky:"top",color:"white",expand:"md",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(O.a,{onClick:this.toggleNav}),Object(m.jsx)(h.b,{className:"mr-auto, nav-link",to:"/home",children:Object(m.jsx)("img",{src:"assets/images/raw-logo.png",className:"logo",alt:"OpenArt Logo"})}),Object(m.jsx)(f.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(m.jsxs)(p.a,{navbar:!0,children:[Object(m.jsx)(g.a,{children:Object(m.jsx)(h.b,{className:"nav-link",to:"/home",children:"Home"})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(h.b,{className:"nav-link",to:"/collections",children:"Collections"})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(h.b,{className:"nav-link",to:"/categories",children:"Categories"})})]})}),Object(m.jsxs)("div",{className:"loginFixed",children:[Object(m.jsx)("span",{className:"navbar-text ml-auto",children:Object(m.jsxs)(v.a,{outline:!0,onClick:this.toggleModal,children:[Object(m.jsx)("i",{className:"fa fa-sign-in fa-lg"})," Login"]})}),Object(m.jsx)("span",{className:"navbar-text ml-auto"})]})]})}),Object(m.jsxs)(k.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(m.jsx)(N.a,{toggle:this.toggleModal,children:"Login"}),Object(m.jsx)(y.a,{children:Object(m.jsxs)(w.a,{onSubmit:this.handleLogin,children:[Object(m.jsxs)(C.a,{children:[Object(m.jsx)(S.a,{htmlFor:"username",children:"Username"}),Object(m.jsx)(T.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(S.a,{htmlFor:"password",children:"Password"}),Object(m.jsx)(T.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(m.jsx)(C.a,{check:!0,children:Object(m.jsxs)(S.a,{check:!0,children:[Object(m.jsx)(T.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(m.jsx)(v.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),a}(c.Component);var R=function(){return Object(m.jsx)(n.a.Fragment,{children:Object(m.jsx)("h1",{style:{padding:"250px"},children:"Custom Collections on Their Way!"})})},_=a(28),M=a(21),q=a.n(M),P=function(e){return 0===e.fetchedArt.length?Object(m.jsx)("div",{children:'"Nothing to see here...alter your search"'}):Object(m.jsx)(n.a.Fragment,{children:e.fetchedArt.map((function(e){return e.image_id?Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"card border-0 mb-4",children:[Object(m.jsx)("img",{className:"card-img",src:"https://www.artic.edu/iiif/2/".concat(e.image_id,"/full/843,/0/default.jpg"),alt:e.title}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"row searchResultCardText mx-0",children:Object(m.jsx)("div",{className:" h3",children:e.title})}),Object(m.jsx)("div",{className:"row searchResultCardText mx-0",children:Object(m.jsx)("div",{className:" h6",children:e.artist_title})}),Object(m.jsx)("div",{className:"row searchResultCardText mx-0",children:Object(m.jsx)("button",{className:"col-sm-3 col-md-6 btn btn-dark btn-block text-nowrap mr-auto",children:"Buy Prints"})})]})]})},e.id):null}))})},A=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:e.handleGetRequest,children:[Object(m.jsx)("input",{type:"text",name:"searchValue",autoComplete:"off",className:"h3 searchArt align-middle border-bottom",placeholder:"\uf002 Search",defaultValue:""}),Object(m.jsx)("button",{className:"col-xs-2 fa fa-arrow-right fa-2x btn text-secondary align-middle"})]})})};var G=function(e){return Object(m.jsx)(n.a.Fragment,{children:Object(m.jsxs)("nav",{className:"col-md-2 form-group",children:[Object(m.jsx)("h3",{className:"h3 ",children:"Medium"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{onChange:e.handleGetRequestCheck,name:"medium",className:"form-check-input",type:"radio",value:"",id:"mediumAll"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"mediumAll",children:"All Results"})]}),Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{onChange:e.handleGetRequestCheck,name:"medium",className:"form-check-input",type:"radio",value:"&query[term][artwork_type_id]=1",id:"mediumPainting"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"mediumPainting",children:"Painting"})]}),Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{onChange:e.handleGetRequestCheck,name:"medium",className:"form-check-input",type:"radio",value:"&query[term][artwork_type_id]=14",id:"mediumDrawing"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"mediumDrawing",children:"Drawing"})]}),Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{onChange:e.handleGetRequestCheck,name:"medium",className:"form-check-input",type:"radio",value:"&query[term][artwork_type_id]=3",id:"mediumSculpture"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"mediumSculpture",children:"Scultpure"})]}),Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{onChange:e.handleGetRequestCheck,name:"medium",className:"form-check-input",type:"radio",value:"&query[term][artwork_type_id]=2",id:"mediumPhotograpy"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"mediumPhotograpy",children:"Photography"})]})]})]})})},H=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!1,noSearchesYet:!0,fetchedArt:null,fetchedDetails:null,currentPage:1,postsPerPage:10,currentSearchTerm:null,medium:""},e.handleGetRequest=function(){var t=Object(_.a)(q.a.mark((function t(a){var c,n,s,r,i;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c=e.state.medium,console.log("Medium in state from search box"+e.state.medium),n=a.target.elements.searchValue.value,s="https://api.artic.edu/api/v1/artworks/search?q=".concat(n).concat(c,"&limit=50&fields=id,title,artist_title,medium_display,image_id"),t.next=7,fetch(s);case 7:return r=t.sent,e.setState({loading:!0}),t.next=11,r.json();case 11:i=t.sent,e.setState({loading:!1,noSearchesYet:!1,fetchedArt:i.data,currentSearchTerm:n}),console.log(n),console.log(e.state.fetchedArt),console.log(e.state.currentSearchTerm);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleGetRequestCheck=function(){var t=Object(_.a)(q.a.mark((function t(a){var c,n,s,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.target.value,console.log("Medium in state from radio"+e.state.medium),n="https://api.artic.edu/api/v1/artworks/search?q=".concat(e.state.currentSearchTerm).concat(c,"&limit=50&fields=id,title,artist_title,medium_display,image_id"),t.next=5,fetch(n);case 5:return s=t.sent,e.setState({loading:!0,medium:c}),t.next=9,s.json();case 9:r=t.sent,e.setState({loading:!1,noSearchesYet:!1,fetchedArt:r.data}),console.log(e.state.currentSearchTerm),console.log(e.state.fetchedArt);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(A,{handleGetRequest:this.handleGetRequest}),Object(m.jsx)(G,{handleGetRequestCheck:this.handleGetRequestCheck})]}),this.state.noSearchesYet?Object(m.jsx)("div",{children:"Enter a search term to get started . . ."}):Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(P,{fetchedArt:this.state.fetchedArt})})})]})}}]),a}(n.a.Component),L=H,E=a(20),D=a(35),I=a(74),Y=a(75),B=a(76),J=a(77),V=[{src:"assets/images/manet-l.JPG",altText:"painting by Manet",header:"Explore",caption:"Over 10,000 High Quality Works"},{src:"assets/images/turner-l.jpg",altText:"painting by turner",header:"Best of the Best",caption:"Famous Works Throughout History"},{src:"assets/images/twombly-l.jpg",altText:"painting by Twombly",header:"Collect",caption:"Save Your Favorites to Create Your Own Gallery",style:"dark"}],W=function(){var e=Object(c.useState)(0),t=Object(E.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(E.a)(s,2),i=r[0],l=r[1],o=function(){if(!i){var e=a===V.length-1?0:a+1;n(e)}},j=function(){if(!i){var e=0===a?V.length-1:a-1;n(e)}},d=V.map((function(e){return"dark"===e.style?Object(m.jsxs)(D.a,{onExiting:function(){return l(!0)},onExited:function(){return l(!1)},children:[Object(m.jsx)("img",{className:"img-fluid",src:e.src,alt:e.altText}),Object(m.jsx)(I.a,{className:"text-dark",captionText:e.caption,captionHeader:e.header})]},e.src):Object(m.jsxs)(D.a,{onExiting:function(){return l(!0)},onExited:function(){return l(!1)},children:[Object(m.jsx)("img",{className:"img-fluid",src:e.src,alt:e.altText}),Object(m.jsx)(I.a,{captionText:e.caption,captionHeader:e.header})]},e.src)}));return Object(m.jsxs)(Y.a,{activeIndex:a,next:o,previous:j,children:[Object(m.jsx)(B.a,{items:V,activeIndex:a,onClickHandler:function(e){i||n(e)}}),d,Object(m.jsx)(J.a,{direction:"prev",directionText:"Previous",onClickHandler:j}),Object(m.jsx)(J.a,{direction:"next",directionText:"Next",onClickHandler:o})]})},U=[{src:"assets/images/manet-xs.jpg",altText:"painting by Manet"},{src:"assets/images/turner-xs.jpg",altText:"painting by Turner"},{src:"assets/images/twombly-xs.jpg",altText:"painting by Twombly"}],z=function(){var e=Object(c.useState)(0),t=Object(E.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(E.a)(s,2),i=r[0],l=r[1],o=function(){if(!i){var e=a===U.length-1?0:a+1;n(e)}},j=function(){if(!i){var e=0===a?U.length-1:a-1;n(e)}},d=U.map((function(e){return Object(m.jsx)(D.a,{onExiting:function(){return l(!0)},onExited:function(){return l(!1)},children:Object(m.jsx)("img",{className:"img-fluid",src:e.src,alt:e.altText})},e.src)}));return Object(m.jsxs)(Y.a,{activeIndex:a,next:o,previous:j,children:[Object(m.jsx)(B.a,{items:U,activeIndex:a,onClickHandler:function(e){i||n(e)}}),d,Object(m.jsx)(J.a,{direction:"prev",directionText:"Previous",onClickHandler:j}),Object(m.jsx)(J.a,{direction:"next",directionText:"Next",onClickHandler:o})]})},Q=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={matches:window.matchMedia("(min-width: 576px)").matches,size:null},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.matchMedia("(min-width: 576px)").addEventListener("change",(function(t){return e.setState({matches:t.matches})}))}},{key:"render",value:function(){return console.log(this.state.matches),Object(m.jsxs)(n.a.Fragment,{children:[this.state.matches&&Object(m.jsx)(W,{}),!this.state.matches&&Object(m.jsx)(z,{})]})}}]),a}(n.a.Component),K=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)(F,{}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/home",component:Q}),Object(m.jsx)(d.b,{path:"/collections",component:R}),Object(m.jsx)(d.b,{path:"/categories",component:L}),Object(m.jsx)(d.a,{to:"/home"})]}),Object(m.jsx)(u,{})]})}}]),a}(c.Component),X=K,Z=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)(h.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(X,{})})})}}]),a}(c.Component),$=Z,ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)($,{})}),document.getElementById("root")),ee()}},[[61,1,2]]]);
//# sourceMappingURL=main.efc469c5.chunk.js.map