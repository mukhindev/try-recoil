(this["webpackJsonptry-recoil"]=this["webpackJsonptry-recoil"]||[]).push([[0],{77:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n(10),i=n.n(o),r=n(14),l=(n(77),n(39)),d=n(6),s=n(65),u=n(115),j=n(126),b=n(127),f=n(128),p=n(83),O=n(132),g=n(131),m=n(50),x=n(129),h=n(130),v=n(125),y=n(118),T=n(120),S=n(133),k=n(122),N=n(123),C=n(121),D=n(124);!function(e){e.TodoState="todoState"}(a||(a={}));var I,F=Object(r.b)({key:a.TodoState,default:[{id:1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u0430",completed:!1},{id:2,title:"\u041f\u043e\u0447\u0438\u043d\u0438\u0442\u044c \u043a\u0440\u0430\u043d",completed:!1},{id:3,title:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u043e\u043c",completed:!1},{id:4,title:"\u041f\u043e\u0441\u0430\u0434\u0438\u0442\u044c \u0434\u0435\u0440\u0435\u0432\u043e",completed:!1},{id:5,title:"\u0412\u044b\u0441\u043f\u0430\u0442\u044c\u0441\u044f",completed:!1}]});!function(e){e.IndexedTodoState="indexedTodoState"}(I||(I={}));var J=Object(r.c)({key:I.IndexedTodoState,get:function(e){return(0,e.get)(F).reduce((function(e,t){return e[t.id]=t,e}),{})}}),L=n(9),w=Object(u.a)((function(e){return{todo:{"&:hover":{backgroundColor:e.palette.grey}}}})),B=function(e){var t,n=e.todo,a=e.onToggle,c=e.onDelete,o=w(),i=n.id,l=n.title,d=(null===(t=Object(r.e)(J)[i])||void 0===t?void 0:t.completed)||!1,s="checkbox-list-label-".concat(i);return Object(L.jsxs)(y.a,{className:o.todo,role:void 0,dense:!0,button:!0,onClick:function(){a(i,!d)},children:[Object(L.jsx)(T.a,{children:Object(L.jsx)(S.a,{edge:"start",color:"primary",checked:d,tabIndex:-1,inputProps:{"aria-labelledby":s},disableRipple:!0})}),Object(L.jsx)(k.a,{id:s,primary:l}),Object(L.jsx)(N.a,{children:Object(L.jsx)(C.a,{edge:"end","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",size:"small",onClick:function(){c(i)},children:Object(L.jsx)(D.a,{fontSize:"small",color:"error"})})})]},i)},E=function(e){var t=e.todos,n=e.onToggle,a=e.onDelete;return Object(L.jsx)(v.a,{children:t.map((function(e){return Object(L.jsx)(B,{todo:e,onToggle:n,onDelete:a},e.id)}))})},P=Object(s.a)({palette:{primary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0",contrastText:"#fff"},secondary:{light:"#ff6659",main:"#d32f2f",dark:"#9a0007",contrastText:"#fff"}}}),z=Object(u.a)((function(e){return{app:{background:e.palette.background.default,height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},paper:{width:"100%",maxWidth:e.breakpoints.values.sm,margin:e.spacing(4),display:"flex",flexDirection:"column"},completedButtons:{alignSelf:"center",margin:e.spacing(2)},addTodoField:{margin:e.spacing(2)},completedLabel:{paddingTop:e.spacing(2),paddingLeft:e.spacing(2),borderTop:"1px solid ".concat(e.palette.divider)}}})),K=function(){var e=z(),t=Object(r.d)(F),n=Object(d.a)(t,2),a=n[0],o=n[1],i=Object(r.e)(J),s=Object(c.useState)([]),u=Object(d.a)(s,2),v=u[0],y=u[1],T=Object(c.useState)([]),S=Object(d.a)(T,2),k=S[0],N=S[1],C=Object(c.useState)(!1),D=Object(d.a)(C,2),I=D[0],w=D[1],B=Object(c.useState)(0),K=Object(d.a)(B,2),R=K[0],W=K[1],q=Object(c.useState)(""),A=Object(d.a)(q,2),G=A[0],H=A[1];!function(e,t,n){Object(c.useEffect)((function(){var n=setTimeout(e,t);return function(){return clearTimeout(n)}}),n)}((function(){var e=a.filter((function(e){return!e.completed})),t=a.filter((function(e){return e.completed}));y(e),N(t)}),R,[a]);var M=function(e,t){var n=a.indexOf(i[e]),c=JSON.parse(JSON.stringify(a));c[n].completed=t,o(c),W(v.find((function(e){return e.id===c[n].id}))?2e3:0)},Q=function(e){var t=a.indexOf(i[e]),n=JSON.parse(JSON.stringify(a));n.splice(t,1),o(n),W(0)};return Object(L.jsx)(j.a,{theme:P,children:Object(L.jsx)("div",{className:e.app,children:Object(L.jsxs)(b.a,{className:e.paper,children:[Object(L.jsxs)(f.a,{className:e.completedButtons,color:"primary","aria-label":"\u0412\u0438\u0434",children:[Object(L.jsx)(p.a,{variant:"contained",color:I?"default":"primary",disabled:!k.length,onClick:function(){return w(!1)},children:Object(L.jsx)(x.a,{})}),Object(L.jsx)(p.a,{variant:"contained",color:I?"primary":"default",disabled:!k.length,onClick:function(){return w(!0)},children:Object(L.jsx)(h.a,{})})]}),Object(L.jsx)(E,{todos:v,onToggle:M,onDelete:Q}),Object(L.jsx)(O.a,{className:e.addTodoField,placeholder:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430",onKeyDown:function(e){var t;if("Enter"===e.key&&G){var n={id:(null===(t=a[a.length-1])||void 0===t?void 0:t.id)+1||1,title:G,completed:!1};o([].concat(Object(l.a)(a),[n])),H(""),W(0)}},value:G,onInput:function(e){H(e.target.value)}}),Object(L.jsxs)(g.a,{in:I&&!!k.length,timeout:"auto",unmountOnExit:!0,children:[Object(L.jsx)(m.a,{className:e.completedLabel,children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"}),Object(L.jsx)(E,{todos:k,onToggle:M,onDelete:Q})]})]})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(L.jsx)(r.a,{children:Object(L.jsx)(K,{})}),document.getElementById("root")),R()}},[[82,1,2]]]);
//# sourceMappingURL=main.b8db2bf4.chunk.js.map