(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t){document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px",window.onresize=function(){document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px"}},188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),c=n.n(i),o=n(2),u=n(4),l=n(3),s=n(5),p=n(6),m=(n(103),n(9)),h=(n(104),n(50)),f=n(32),d=n(48),b=n(16),v=n(43),O=n.n(v),y=function(e){var t=e.url,n=e.data;return O.a.get(t,{params:n})},j=n(44),E=n.n(j);a.Component.prototype.$post=function(e){var t=e.url,n=e.data;return O.a.post(t,E.a.stringify(n))},a.Component.prototype.$get=y;var k={home:{getNavInfo:function(e){return function(t){y({url:"/api/home/home_page_head?c_platform_type=0&c_app_ver=6.0.0&c_upk="}).then(function(n){var a=n.data.tabs;e&&e(),t({type:"HOME_NAV_INFO",navs:a})})}},getBannerInfo:function(e){return function(t){y({url:"/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk="}).then(function(n){var a=n.data.floors[0].list;e&&e(),t({type:"HOME_BANNER_INFO",banners:a})})}},getSpecialsInfo:function(e){return function(t){y({url:e}).then(function(e){var n=e.data.floors,a=[];n.forEach(function(e){"46"===e.type&&(a=a.concat(e.list))}),t({type:"HOME_SPECIALS_INFO",specials:a})})}},removeSpecials:function(){return{type:"REMOVE_SPECIALS",specials:null}}},commons:{loginByUser:function(e){var t=e.username,n=e.password,a=e.success,r=e.fail;return function(e){setTimeout(function(){if("123"===t&&"456"===n)return e({type:"CHECK_USER_INFO",userInfo:{username:"\u4e8c\u72d7"}}),a&&a("\u7528\u6237\u767b\u5f55\u6210\u529f\uff01"),!1;r&&r("\u7528\u6237\u767b\u5f55\u5931\u8d25\uff01")},1e3)}},loginByPhone:function(e){var t=e.phone,n=e.code,a=e.success,r=e.fail;return function(e){setTimeout(function(){if("110"===t&&"456"===n)return e({type:"CHECK_USER_INFO",userInfo:{username:"\u4e8c\u72d7"}}),a&&a("\u624b\u673a\u767b\u5f55\u6210\u529f\uff01"),!1;r&&r("\u624b\u673a\u767b\u5f55\u5931\u8d25\uff01")},1e3)}},exit:function(){return{type:"CHECK_USER_INFO",userInfo:null}}}},g=function(e,t){return Object(d.b)(function(e){if(!t)return e;var n=t.states;if(!n)return e[t.reducer];var a={};return n.forEach(function(n){a[n]=e[t.reducer][n]}),a},function(e){if(!t){var n={};for(var a in k)n=Object(f.a)({},n,k[a]);return Object(b.b)(n,e)}return Object(b.b)(k[t.reducer],e)})(e)},C=n(193),_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(m.a)(n)),n.state={activeId:0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.navs)return this.initSwiper(),!1;this.props.getNavInfo(function(){setTimeout(function(){e.initSwiper()},0)})}},{key:"initSwiper",value:function(){this.navSwiper=new h.a(".home-navbar",{slidesPerView:"auto"})}},{key:"componentWillReceiveProps",value:function(e){var t=e.location.pathname,n=0;"/home/luxury"===t?n=0:"/home/play"===t&&(n=1),this.setState({activeId:parseInt(n)})}},{key:"handleClick",value:function(e){var t=e.currentTarget.getAttribute("index"),n=this.props.history.replace;switch(t){case"0":n("/home/luxury");break;case"1":n("/home/play")}}},{key:"renderSlide",value:function(){var e=this,t=this.props.navs;if(!t)return"";var n=this.state.activeId;return t.map(function(t,a){return r.a.createElement("div",{index:a,onClick:e.handleClick,key:t.codeId,className:"swiper-slide "+(n===a?"active":"")},r.a.createElement("span",null,t.title))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"swiper-container home-navbar"},r.a.createElement("div",{className:"swiper-wrapper"},this.renderSlide()))}}]),t}(a.Component),I=Object(C.a)(g(_,{reducer:"home",states:["navs"]})),N=function(e){return r.a.createElement("div",{className:"swiper-slide"},r.a.createElement("img",{width:"100%",src:e.item.img,alt:""}))},S=g(function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.banners)return this.initSwiper(),!1;this.props.getBannerInfo(function(){setTimeout(function(){e.initSwiper()},0)})}},{key:"initSwiper",value:function(){new h.a(".home-banner",{loop:!0,pagination:{el:".swiper-pagination"}})}},{key:"renderSlide",value:function(){var e=this.props.banners;return e?e.map(function(e,t){return r.a.createElement(N,{key:t,item:e})}):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"swiper-container home-banner"},r.a.createElement("div",{className:"swiper-wrapper"},this.renderSlide()),r.a.createElement("div",{className:"swiper-pagination"}))}}]),t}(a.Component),{reducer:"home",states:["banners"]}),w=n(94),x=(n(131),n(132),n(192)),T=g(function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.removeSpecials();var e=this.props.specialsName;"luxury"===e?this.props.getSpecialsInfo("/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk="):"play"===e&&this.props.getSpecialsInfo("/api/home/home_page?code=2&c_platform_type=0&c_app_ver=6.0.0&c_upk=")}},{key:"renderSpecials",value:function(){var e=this.props.specials;return e?e.map(function(e,t){return r.a.createElement("div",{className:"item",key:t},r.a.createElement("h2",{className:"title"},e.title),r.a.createElement("p",{className:"subtitle"},e.subTitle),r.a.createElement(x.a,{to:{pathname:"/list/listdetail",search:"title=".concat(e.title,"&subtitle=").concat(e.subTitle,"&url=").concat(e.img)}},r.a.createElement("img",{alt:"",width:"100%",src:e.img})))}):r.a.createElement("div",{style:{fontSize:"100px",textAlign:"center"}},r.a.createElement("i",{className:"fa fa-cog fa-spin"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"specials"},this.renderSpecials())}}]),t}(a.Component),{reducer:"home",states:["specials"]}),F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(T,{specialsName:"luxury"}))}}]),t}(a.Component),M=(n(133),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Play!!!",r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(T,{specialsName:"play"})))}}]),t}(a.Component)),P=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement("div",{style:{paddingTop:"1rem",height:"6.5rem"}},r.a.createElement(S,null)),r.a.createElement(w.a,{path:"/home/luxury",component:F}),r.a.createElement(w.a,{path:"/home/play",component:M}))}}]),t}(a.Component),R=(n(134),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{specialsName:"luxury"}))}}]),t}(a.Component)),A=(n(135),function(e){return function(t){function n(){return Object(o.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(u.a)(n,[{key:"handlerClick",value:function(){console.log(1)}},{key:"render",value:function(){return r.a.createElement(e,{handlerClick:this.handlerClick})}}]),n}(a.Component)}),B=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.handlerClick},"A!!!"))}}]),t}(a.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onDoubleClick:this.props.handlerClick},"B !!!"))}}]),t}(a.Component),D=A(B),U=A(H),L=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(U,null))}}]),t}(a.Component),V=(n(136),n(75),n(47)),W=n.n(V),z=(n(64),n(36)),K=n.n(z),J=(n(181),n(89),n(33)),$=n.n(J),q=g(function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){var t=this;this.props.loginByPhone({phone:this.phone.value,code:this.code.value,success:function(e){$.a.success(e,1)},fail:function(e){$.a.fail(e,1,function(){t.phone.value="",t.code.value=""})}}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{ref:function(t){return e.phone=t},name:"phone",placeholder:"\u624b\u673a\u53f7",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{ref:function(t){return e.code=t},name:"code",placeholder:"\u9a8c\u8bc1\u7801",type:"text"})),r.a.createElement("button",{type:"submit",className:"btn"},"\u767b\u5f55")))}}]),t}(a.Component),{reducer:"commons",states:["userInfo"]}),G=g(function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){var t=this;this.props.loginByUser({username:this.username.value,password:this.password.value,success:function(e){$.a.success(e,1)},fail:function(e){$.a.fail(e,1,function(){t.username.value="",t.password.value=""})}}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{ref:function(t){return e.username=t},name:"phone",placeholder:"\u7528\u6237",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{ref:function(t){return e.password=t},name:"code",placeholder:"\u5bc6\u7801",type:"password"})),r.a.createElement("button",{type:"submit",className:"btn"},"\u767b\u5f55")))}}]),t}(a.Component),{reducer:"commons",states:["userInfo"]}),Q=g(function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).login=n.login.bind(Object(m.a)(n)),n.state={loginType:"text"},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){this.props.login({username:"123",password:"456",success:function(e){},fail:function(e){alert(e)}})}},{key:"changeLoginType",value:function(){var e=this,t=this.state.loginType,n="\u8d26\u53f7\u5bc6\u7801\u767b\u5f55",a=q,i="user";"text"!==t&&(n="\u77ed\u4fe1\u5feb\u6377\u767b\u5f55",a=G,i="text");var c=function(){e.setState({loginType:i})};return r.a.createElement("div",{className:"content"},r.a.createElement(a,null),r.a.createElement("p",{onClick:c,className:"change-form"},n))}},{key:"render",value:function(){var e=this,t=this.state.loginType;return r.a.createElement("div",null,r.a.createElement(W.a,{mode:"light",icon:r.a.createElement(K.a,{type:"left"}),onLeftClick:function(){return e.props.history.replace("/home/luxury")}},"text"===t?"\u77ed\u4fe1\u5feb\u6377":"\u8d26\u53f7\u5bc6\u7801","\u767b\u5f55"),this.changeLoginType())}}]),t}(a.Component),{reducer:"commons",states:["userInfo"]}),X=(n(183),g(function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).exit=n.exit.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"exit",value:function(){this.props.exit()}},{key:"render",value:function(){return r.a.createElement("div",null,!this.props.userInfo||this.props.userInfo.username,r.a.createElement("button",{onClick:this.exit},"\u6ce8\u9500"))}}]),t}(a.Component),{reducer:"commons",states:["userInfo"]})),Y=g(function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.userInfo===this.props.userInfo&&"/mine"!==e.location.pathname||this.checkUserInfo(e)}},{key:"componentDidMount",value:function(){this.checkUserInfo()}},{key:"checkUserInfo",value:function(e){(e||this.props).userInfo?this.props.history.replace("/mine/user"):this.props.history.replace("/mine/login")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{path:"/mine/login",component:Q}),r.a.createElement(w.a,{path:"/mine/user",component:X}))}}]),t}(a.Component),{reducer:"commons",states:["userInfo"]}),Z=n(191),ee=(n(184),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderFooter",value:function(){return this.props.navs.map(function(e){return r.a.createElement(x.a,{activeClassName:"actived",key:e.id,to:{pathname:e.path},exact:e.exact},r.a.createElement("i",{className:"fa fa-"+e.icon}),r.a.createElement("span",null,e.title))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-footer"},this.renderFooter())}}]),t}(a.Component));ee.defaultProps={navs:[{id:1,path:"/home",icon:"home",title:"\u9996\u9875"},{id:2,path:"/list",icon:"list",title:"\u5217\u8868"},{id:3,path:"/buycar",icon:"shopping-bag",title:"\u8d2d\u7269\u888b"},{id:4,path:"/mine",icon:"globe",title:"\u6211\u7684"}]};var te=ee,ne=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.location.search.replace("?",""),n=E.a.parse(t);return r.a.createElement("div",null,r.a.createElement(W.a,{mode:"light",icon:r.a.createElement(K.a,{type:"left"}),onLeftClick:function(){return e.props.history.replace("/list")}},n.title),r.a.createElement("p",null,n.subtitle),r.a.createElement("img",{width:"100%",src:n.url,alt:""}))}}]),t}(a.Component),ae=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){"/home"===e.location.pathname&&e.history.replace("/home/luxury")}},{key:"componentDidMount",value:function(){this.props.history.replace("/home/luxury")}},{key:"renderRoute",value:function(){var e=this.props.navs;return r.a.createElement(Z.a,null,e.map(function(e){return r.a.createElement(w.a,{key:e.id,path:e.path,component:e.component,exact:e.exact})}))}},{key:"renderFooter",value:function(){var e=this.props.location.pathname;return!(["/mine/login"].indexOf(e)>-1)&&(!(e.indexOf("/list/")>-1)&&r.a.createElement(te,null))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.renderRoute(),this.renderFooter())}}]),t}(a.Component);ae.defaultProps={navs:[{id:1,path:"/home",component:P},{id:2,path:"/list/listdetail",component:ne},{id:3,path:"/list",component:R},{id:4,path:"/buycar",component:L},{id:5,path:"/mine",component:Y}]};var re=Object(C.a)(ae),ie=(n(185),n(186),n(190)),ce=(n(187),{userInfo:null}),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,n=Object(f.a)({},e);switch(t.type){case"CHECK_USER_INFO":n.userInfo=t.userInfo}return n},ue={navs:null,banners:null,specials:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,n=Object(f.a)({},e);switch(t.type){case"HOME_NAV_INFO":n.navs=t.navs;break;case"HOME_BANNER_INFO":n.banners=t.banners;break;case"HOME_SPECIALS_INFO":case"REMOVE_SPECIALS":n.specials=t.specials}return n},se=Object(b.c)({commons:oe,home:le}),pe=n(97),me=Object(b.d)(se,Object(b.a)(pe.a));c.a.render(r.a.createElement(d.a,{store:me},r.a.createElement(ie.a,null,r.a.createElement(re,null))),document.getElementById("root"))},98:function(e,t,n){e.exports=n(188)}},[[98,1,2]]]);
//# sourceMappingURL=main.427fab0f.chunk.js.map