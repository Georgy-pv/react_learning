(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[5],{228:function(e,a,t){e.exports={formControl:"formsControls_formControl__O9qF4",error:"formsControls_error__2mgha",formAllError:"formsControls_formAllError__26MDX"}},229:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return u}));var n=t(242),r=t(0),s=t.n(r),o=t(228),i=t.n(o),c=t(108),l=function(e){return function(a){var t=a.input,r=a.meta,o=Object(n.a)(a,["input","meta"]),c=r.touched&&r.error;return s.a.createElement("div",{className:"".concat(i.a.formControl," ").concat(c?i.a.error:"")},s.a.createElement(e,Object.assign({},t,o)),c&&s.a.createElement("span",null,r.error))}},u=function(e,a,t,n,r,o){return s.a.createElement("div",{className:""},s.a.createElement(c.a,Object.assign({validate:n,component:t,name:a,placeholder:e},r))," ",o)}},231:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var n=function(e){if(!e)return"This is Require Field"},r=function(e){return function(a){if(a&&a.length>e)return"Max length is ".concat(e," symbols")}}},232:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(33),r=t(34),s=t(36),o=t(35),i=t(0),c=t.n(i),l=t(6),u=t(21),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(s.a)(i,a);var t=Object(o.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),i}(c.a.Component);return Object(u.b)(m)(a)}},234:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1hjnO",dialogsItems:"Dialogs_dialogsItems__2rPfP",active:"Dialogs_active__1E41I",dialog:"Dialogs_dialog__2hH4z",messages:"Dialogs_messages__2nF01",message:"Dialogs_message__35Xxh"}},303:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(234),o=t.n(s),i=t(15),c=function(e){return r.a.createElement("div",null,r.a.createElement(i.b,{activeClassName:o.a.active,className:o.a.dialog,to:"/dialogs/"+e.id},e.name))},l=function(e){return r.a.createElement("div",{className:o.a.message},e.message)},u=t(74),m=t(108),d=t(109),g=t(229),f=t(231),b=Object(f.a)(100),E=Object(g.a)("textarea"),_=Object(d.a)({form:"dialogAddmessage"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(m.a,{component:E,validate:[f.b,b],name:"newMessageText",placeholder:"Enter your message"}),r.a.createElement("button",null,"Send M"))})),p=function(e){return r.a.createElement("div",{className:o.a.dialogs},r.a.createElement("div",{className:o.a.dialogsItems},e.dialogsElements),r.a.createElement("div",{className:o.a.messages},e.messagesElements,r.a.createElement("div",{className:"add_massege"},r.a.createElement(_,{onSubmit:function(a){e.sendMassege(a.newMessageText)}}))))},v=t(21),h=t(232),O=t(19);a.default=Object(O.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage,dialogsElements:e.dialogsPage.dialogsData.map((function(e){return r.a.createElement(c,{key:e.id,name:e.name,id:e.id})})),messagesElements:e.dialogsPage.messagesData.map((function(e){return r.a.createElement(l,{key:e.id,message:e.message})}))}}),(function(e){return{sendMassege:function(a){var t=Object(u.b)(a);e(t)}}})),h.a)(p)}}]);
//# sourceMappingURL=5.c025a4ca.chunk.js.map