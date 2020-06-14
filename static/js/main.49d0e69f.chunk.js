(this["webpackJsonprecoil-v-data-hoc"]=this["webpackJsonprecoil-v-data-hoc"]||[]).push([[0],{101:function(e,t,n){e.exports=n(139)},106:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=(n(106),n(198)),u=n(195),i=n(21),s=n(176),d=n(179),f=n(181),m=n(57),b=n.n(m),p=n(79),g=n.n(p),v=n(180),j=n(182),O=n(196),E=function(e){var t=e.title,n=e.value,a=e.helperText,o=e.onIncrease,c=e.onDecrease;return r.a.createElement(s.a,{style:{width:"100%"}},r.a.createElement(d.a,{title:t}),r.a.createElement(v.a,null),r.a.createElement(l.a,{p:2,display:"flex",alignItems:"center"},r.a.createElement(l.a,{mr:1},r.a.createElement(f.a,{onClick:c,size:"small"},r.a.createElement(g.a,null)),r.a.createElement(j.a,null,"\xa0")),r.a.createElement(O.a,{variant:"outlined",size:"small",value:n,disabled:!0,helperText:a,fullWidth:!0}),r.a.createElement(l.a,{ml:1},r.a.createElement(f.a,{onClick:o,size:"small"},r.a.createElement(b.a,null)),r.a.createElement(j.a,null,"\xa0"))))},h=Object(a.createContext)({value:0,setValue:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return console.warn("CounterProvider not supplied")}}),x=function(e){var t=e.children,n=Object(a.useState)(0),o=Object(i.a)(n,2),c=o[0],l=o[1];return r.a.createElement(h.Provider,{value:{value:c,setValue:l}},t)},T=function(){var e=Object(a.useContext)(h).value,t=Object(a.useContext)(h).value%2?"odd":"even",n=function(){var e=Object(a.useContext)(h).setValue;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e((function(e){return e-t}))}}(),o=function(){var e=Object(a.useContext)(h).setValue;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e((function(e){return e+t}))}}();return r.a.createElement(E,{title:"Context Counter",value:e,helperText:"".concat(e," is ").concat(t),onIncrease:function(){return o(1)},onDecrease:function(){return n(1)}})},y=n(20),k=n(16),w=n.n(k),S=n(24),C=n(58),R=n(203);function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){return setTimeout((function(){return t()}),e)}))}function P(e){return{text:e,complete:!1,id:Object(R.a)()}}var I=[P("a"),P("b"),P("c"),P("d"),P("e"),P("f"),P("g"),P("h"),P("i"),P("j"),P("k"),P("l"),P("m"),P("n"),P("o"),P("p")],L=Object(C.a)((function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),c=Object(i.a)(o,2),l=c[0],u=c[1],s=Object(a.useState)(1),d=Object(i.a)(s,2),f=d[0],m=d[1],b=Object(a.useState)(10),p=Object(i.a)(b,2),g=p[0],v=p[1],j=Object(C.b)(),O=Object(i.a)(j,2),E=O[0],h=O[1],x=Object(C.b)(),T=Object(i.a)(x,2),k=T[0],R=T[1],L=Object(a.useState)(null),D=Object(i.a)(L,2),z=D[0],B=D[1],q=Object(a.useState)(I),W=Object(i.a)(q,2),F=W[0],U=W[1],H=Math.ceil(F.length/g),G=F.slice((f-1)*g,(f-1)*g+g),M=function(){var e=Object(S.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h.setLoading(),t){e.next=4;break}throw new Error("Text is required");case 4:return n=P(t),e.next=7,V(1e3);case 7:return U((function(e){return e.concat(n)})),r(""),h.setData(n),e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),h.setError(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(S.a)(w.a.mark((function e(t,n){var a,r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,R.setLoading(),-1!==(a=F.findIndex((function(e){return t===e})))){e.next=5;break}throw new Error("Todo not found");case 5:if("string"!==typeof n.text||n.text){e.next=7;break}throw new Error("Text is required");case 7:return r=Object(y.a)({},F[a],{},n),(o=F.slice(0))[a]=r,e.next=12,V(1e3);case 12:return U(o),J(),R.setData(r),e.abrupt("return",r);case 18:e.prev=18,e.t0=e.catch(0),R.setError(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){return B(null)};return{page:f,setPage:m,perPage:g,setPerPage:v,createText:n,setCreateText:r,updateText:l,setUpdateText:u,create:E,save:k,todoList:F,pagedTodoCount:H,pagedTodoList:G,updating:z,closeUpdate:J,updateTodo:function(e){u(e.text),B(e)},createTodo:M,removeTodo:function(e){return U((function(t){return t.filter((function(t){return e!==t}))})),e},toggleTodo:function(e){return U((function(t){return t.slice(0).map((function(t){return e!==t?t:Object(y.a)({},t,{complete:!t.complete})}))})),e},saveTodo:_}}));var D=n(184),z=n(183),B=function(e){var t=e.title,n=e.action,a=e.children,o=e.footer;return r.a.createElement(s.a,{style:{width:"100%"}},r.a.createElement(d.a,{title:t,action:n}),r.a.createElement(v.a,null),r.a.createElement(z.a,null,a),r.a.createElement(v.a,null),r.a.createElement(D.a,{style:{justifyContent:"flex-end"}},o))},q=n(201),W=n(186),F=n(185),U=n(188),H=n(187),G=n(82),M=n.n(G),_=n(81),J=n.n(_),N=function(e){var t=e.todo,n=e.toggleTodo,a=e.updateTodo,o=e.removeTodo;return r.a.createElement(F.a,{button:!0,onClick:function(){return n(t)},key:t.id},r.a.createElement(q.a,{checked:t.complete,onChange:function(){return n(t)}}),r.a.createElement(H.a,{primary:t.text,primaryTypographyProps:t.complete?{color:"secondary",style:{textDecoration:"line-through"}}:{}}),r.a.createElement(U.a,null,r.a.createElement(W.a,{onClick:function(){return a(t)}},r.a.createElement(J.a,null)),r.a.createElement(W.a,{onClick:function(){return o(t)}},r.a.createElement(M.a,null))))},$=n(83),A=n(189),K=function(e){var t=e.text,n=e.setText,a=e.createTodo,o=e.loading,c=e.error;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(t)}},r.a.createElement(l.a,{display:"flex",alignItems:"center"},r.a.createElement(O.a,{variant:"outlined",label:"Create new item",value:t,onChange:function(e){return n(e.target.value)},helperText:c,error:Boolean(c),size:"small"}),r.a.createElement(l.a,{ml:1},r.a.createElement(Q,{type:"submit",size:"small",color:"primary",loading:o},r.a.createElement(b.a,null)))))},Q=function(e){var t=e.disabled,n=e.loading,a=e.style,o=e.children,c=Object($.a)(e,["disabled","loading","style","children"]);return r.a.createElement(f.a,Object.assign({},c,{disabled:t||n,style:Object(y.a)({position:"relative"},a)}),n?r.a.createElement(A.a,{style:{position:"absolute",top:0,left:0,height:"100%",width:"100%"}}):null,o)},X=n(202),Y=n(190),Z=n(191),ee=n(192),te=n(193),ne=n(194),ae=function(e){var t=e.open,n=e.text,a=e.setText,o=e.saveText,c=e.onClose,u=e.loading,i=e.error;return r.a.createElement(X.a,{open:t,onClose:c,maxWidth:"sm",fullWidth:!0},r.a.createElement(Y.a,null,"Update item"),r.a.createElement(Z.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o(n)}},r.a.createElement(O.a,{variant:"outlined",value:n,onChange:function(e){return a(e.target.value)},helperText:i,error:Boolean(i),fullWidth:!0}))),r.a.createElement(ee.a,null,r.a.createElement(te.a,{variant:"contained",onClick:c},"Close"),r.a.createElement(l.a,{ml:1},r.a.createElement(te.a,{variant:"contained",color:"primary",onClick:function(){return o(n)},style:{position:"relative"},disabled:u},u?r.a.createElement(ne.a,{variant:"indeterminate",style:{position:"absolute",top:0,left:0,width:"100%"}}):null,"Save"))))},re=n(199),oe=function(){return r.a.createElement(L.Provider,null,r.a.createElement(L.Context.Consumer,null,(function(e){return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{title:"Context",action:r.a.createElement(K,{text:e.createText,setText:e.setCreateText,createTodo:e.createTodo,loading:e.create.loading,error:e.create.error}),footer:r.a.createElement(re.a,{page:e.page,count:e.pagedTodoCount,onChange:function(t,n){return e.setPage(n)}})},e.pagedTodoList.map((function(t){return r.a.createElement(N,{key:t.id,todo:t,toggleTodo:e.toggleTodo,updateTodo:e.updateTodo,removeTodo:e.removeTodo})}))),r.a.createElement(ae,{open:Boolean(e.updating),text:e.updateText,setText:e.setUpdateText,saveText:function(t){return e.saveTodo(e.updating,{text:t})},onClose:e.closeUpdate,loading:e.save.loading,error:e.save.error})):null})))},ce=n(6),le=Object(ce.atom)({key:"createText",default:""}),ue=Object(ce.atom)({key:"create",default:{loading:!1,data:null,error:""}}),ie=Object(ce.atom)({key:"updateText",default:""}),se=Object(ce.atom)({key:"save",default:{loading:!1,data:null,error:""}}),de=Object(ce.atom)({key:"updating",default:null}),fe=Object(ce.atom)({key:"todoList",default:I}),me=Object(ce.atom)({key:"page",default:1}),be=Object(ce.atom)({key:"perPage",default:10}),pe=Object(ce.selector)({key:"pagedTodoCountState",get:function(e){var t=e.get,n=t(be),a=t(fe);return Math.ceil(a.length/n)}}),ge=Object(ce.selector)({key:"pagedTodoListState",get:function(e){var t=e.get,n=t(me),a=t(be);return t(fe).slice((n-1)*a,(n-1)*a+a)}}),ve=function(){var e=Object(ce.useRecoilValue)(me),t=Object(ce.useRecoilValue)(le),n=Object(ce.useRecoilValue)(ue),a=Object(ce.useRecoilValue)(pe),o=Object(ce.useRecoilValue)(ge),c=Object(ce.useSetRecoilState)(me),l=Object(ce.useSetRecoilState)(le),u=function(){var e=Object(ce.useSetRecoilState)(fe),t=Object(ce.useSetRecoilState)(le),n=Object(ce.useSetRecoilState)(ue);return function(){var a=Object(S.a)(w.a.mark((function a(r){var o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,n({loading:!0,data:null,error:""}),r){a.next=4;break}throw new Error("Text is required");case 4:return o=P(r),a.next=7,V(1e3);case 7:return e((function(e){return e.concat(o)})),t(""),n({loading:!1,data:o,error:""}),a.abrupt("return",o);case 13:a.prev=13,a.t0=a.catch(0),n({loading:!1,data:null,error:a.t0.message});case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}(),i=function(){var e=Object(ce.useSetRecoilState)(ie),t=Object(ce.useSetRecoilState)(de);return function(n){e(n.text),t(n)}}(),s=function(){var e=Object(ce.useSetRecoilState)(fe);return function(t){return e((function(e){return e.slice(0).map((function(e){return t!==e?e:Object(y.a)({},e,{complete:!e.complete})}))})),t}}(),d=function(){var e=Object(ce.useSetRecoilState)(fe);return function(t){return e((function(e){return e.filter((function(e){return t!==e}))})),t}}();return r.a.createElement(B,{title:"Recoil",action:r.a.createElement(K,{text:t,setText:l,createTodo:u,loading:n.loading,error:n.error}),footer:r.a.createElement(re.a,{page:e,count:a,onChange:function(e,t){return c(t)}})},o.map((function(e){return r.a.createElement(N,{key:e.id,todo:e,toggleTodo:s,updateTodo:i,removeTodo:d})})))},je=function(){var e=Object(ce.useRecoilValue)(de),t=Object(ce.useRecoilValue)(ie),n=Object(ce.useRecoilValue)(se),a=Object(ce.useSetRecoilState)(ie),o=function(){var e=Object(ce.useRecoilValue)(fe),t=Object(ce.useSetRecoilState)(fe),n=Object(ce.useSetRecoilState)(de),a=Object(ce.useSetRecoilState)(se);return function(){var r=Object(S.a)(w.a.mark((function r(o,c){var l,u,i;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,a({loading:!0,data:null,error:""}),-1!==(l=e.findIndex((function(e){return o===e})))){r.next=5;break}throw new Error("Todo not found");case 5:if("string"!==typeof c.text||c.text){r.next=7;break}throw new Error("Text is required");case 7:return u=Object(y.a)({},e[l],{},c),(i=e.slice(0))[l]=u,r.next=12,V(1e3);case 12:return t(i),n(null),a({loading:!1,data:u,error:""}),r.abrupt("return",u);case 18:r.prev=18,r.t0=r.catch(0),a({loading:!1,data:null,error:r.t0.message});case 21:case"end":return r.stop()}}),r,null,[[0,18]])})));return function(e,t){return r.apply(this,arguments)}}()}(),c=function(){var e=Object(ce.useSetRecoilState)(de);return function(){e(null)}}();return r.a.createElement(ae,{open:Boolean(e),text:t,setText:a,saveText:function(t){return o(e,{text:t})},onClose:c,loading:n.loading,error:n.error})},Oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,null),r.a.createElement(je,null))},Ee=Object(ce.atom)({key:"counter",default:0}),he=Object(ce.selector)({key:"isEven",get:function(e){return(0,e.get)(Ee)%2?"odd":"even"}}),xe=function(){var e=Object(ce.useRecoilValue)(Ee),t=Object(ce.useRecoilValue)(he),n=function(){var e=Object(ce.useSetRecoilState)(Ee);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e((function(e){return e-t}))}}(),a=function(){var e=Object(ce.useSetRecoilState)(Ee);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e((function(e){return e+t}))}}();return r.a.createElement(E,{title:"Recoil Counter",value:e,helperText:"".concat(e," is ").concat(t),onIncrease:function(){return a(1)},onDecrease:function(){return n(1)}})},Te=n(8),ye=Object(Te.a)({key:"createText",default:""}),ke=Object(Te.a)({key:"create",default:{loading:!1,data:null,error:""}}),we=Object(Te.a)({key:"updateText",default:""}),Se=Object(Te.a)({key:"save",default:{loading:!1,data:null,error:""}}),Ce=Object(Te.a)({key:"updating",default:null}),Re=Object(Te.a)({key:"todoList",default:I}),Ve=Object(Te.a)({key:"page",default:1}),Pe=Object(Te.a)({key:"perPage",default:10}),Ie=Object(Te.b)({key:"pagedTodoCountState",get:function(e){var t=e.get,n=t(Pe),a=t(Re);return console.log("Get pagedTodoCountState"),Math.ceil(a.length/n)}}),Le=Object(Te.b)({key:"pagedTodoListState",get:function(e){var t=e.get,n=t(Ve),a=t(Pe),r=t(Re);return console.log("Get pagedTodoListState"),r.slice((n-1)*a,(n-1)*a+a)}}),De=function(){var e=Object(Te.d)(Ve),t=Object(Te.d)(ye),n=Object(Te.d)(ke),a=Object(Te.d)(Ie),o=Object(Te.d)(Le),c=Object(Te.c)(Ve),l=Object(Te.c)(ye),u=function(){var e=Object(Te.c)(Re),t=Object(Te.c)(ye),n=Object(Te.c)(ke);return function(){var a=Object(S.a)(w.a.mark((function a(r){var o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,n({loading:!0,data:null,error:""}),r){a.next=4;break}throw new Error("Text is required");case 4:return o=P(r),a.next=7,V(1e3);case 7:return t(""),n({loading:!1,data:o,error:""}),e((function(e){return e.concat(o)})),a.abrupt("return",o);case 13:a.prev=13,a.t0=a.catch(0),n({loading:!1,data:null,error:a.t0.message});case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}(),i=function(){var e=Object(Te.c)(we),t=Object(Te.c)(Ce);return function(n){e(n.text),t(n)}}(),s=function(){var e=Object(Te.c)(Re);return function(t){return e((function(e){return e.slice(0).map((function(e){return t!==e?e:Object(y.a)({},e,{complete:!e.complete})}))})),t}}(),d=function(){var e=Object(Te.c)(Re);return function(t){return e((function(e){return e.filter((function(e){return t!==e}))})),t}}();return r.a.createElement(B,{title:"Hawk",action:r.a.createElement(K,{text:t,setText:l,createTodo:u,loading:n.loading,error:n.error}),footer:r.a.createElement(re.a,{page:e,count:a,onChange:function(e,t){return c(t)}})},o.map((function(e){return r.a.createElement(N,{key:e.id,todo:e,toggleTodo:s,updateTodo:i,removeTodo:d})})))},ze=function(){var e=Object(Te.d)(Ce),t=Object(Te.d)(we),n=Object(Te.d)(Se),a=Object(Te.c)(we),o=function(){var e=Object(Te.d)(Re),t=Object(Te.c)(Re),n=Object(Te.c)(Ce),a=Object(Te.c)(Se);return function(){var r=Object(S.a)(w.a.mark((function r(o,c){var l,u,i;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,a({loading:!0,data:null,error:""}),-1!==(l=e.findIndex((function(e){return o===e})))){r.next=5;break}throw new Error("Todo not found");case 5:if("string"!==typeof c.text||c.text){r.next=7;break}throw new Error("Text is required");case 7:return u=Object(y.a)({},e[l],{},c),(i=e.slice(0))[l]=u,r.next=12,V(1e3);case 12:return t(i),n(null),a({loading:!1,data:u,error:""}),r.abrupt("return",u);case 18:r.prev=18,r.t0=r.catch(0),a({loading:!1,data:null,error:r.t0.message});case 21:case"end":return r.stop()}}),r,null,[[0,18]])})));return function(e,t){return r.apply(this,arguments)}}()}(),c=function(){var e=Object(Te.c)(Ce);return function(){e(null)}}();return r.a.createElement(ae,{open:Boolean(e),text:t,setText:a,saveText:function(t){return o(e,{text:t})},onClose:c,loading:n.loading,error:n.error})},Be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,null),r.a.createElement(ze,null))},qe=Object(Te.a)({key:"counter",default:0}),We=Object(Te.b)({key:"isEven",get:function(e){return(0,e.get)(qe)%2?"odd":"even"}}),Fe=function(){var e=Object(Te.d)(qe),t=Object(Te.d)(We),n=function(){var e=Object(Te.c)(qe);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e((function(e){return e-t}))}}(),a=function(){var e=Object(Te.c)(qe);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e((function(e){return e+t}))}}();return r.a.createElement(E,{title:"Hawk Counter",value:e,helperText:"".concat(e," is ").concat(t),onIncrease:function(){return a(1)},onDecrease:function(){return n(1)}})},Ue=n(25),He="linear-gradient(rgba(245, 0, 87, 0.8), rgba(63, 81, 181, 0.8))";var Ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/rphansen91/react-hawk",style:{position:"absolute",top:0,right:0}},r.a.createElement("img",{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149",className:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"})),r.a.createElement(l.a,{width:"100%",style:{padding:"4em 2em",background:He,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",boxSizing:"border-box"}},r.a.createElement(Ue.a,{variant:"h2",style:{color:"#fff"}},"Todo List"),r.a.createElement(Ue.a,{variant:"h4",style:{color:"#fff"}},"Context vs Recoil vs Hawk")),r.a.createElement(l.a,{p:3},r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,md:4},r.a.createElement(oe,null)),r.a.createElement(u.a,{item:!0,md:4},r.a.createElement(ce.RecoilRoot,null,r.a.createElement(Oe,null))),r.a.createElement(u.a,{item:!0,md:4},r.a.createElement(ce.RecoilRoot,null,r.a.createElement(Be,null))),r.a.createElement(u.a,{item:!0,md:4},r.a.createElement(x,null,r.a.createElement(T,null))),r.a.createElement(u.a,{item:!0,md:4},r.a.createElement(ce.RecoilRoot,null,r.a.createElement(xe,null))),r.a.createElement(u.a,{item:!0,md:4},r.a.createElement(Fe,null)))),r.a.createElement(l.a,{width:"100%",style:{paddingTop:"20%",background:He}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.49d0e69f.chunk.js.map