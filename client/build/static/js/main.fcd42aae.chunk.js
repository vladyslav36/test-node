(this["webpackJsonpnode-test-client"]=this["webpackJsonpnode-test-client"]||[]).push([[0],{25:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=(n(25),n(6)),o=n(4),u=n.n(o),l=n(8),j=n(20),d=n(3),b=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(d.a)(Object(d.a)({},t),{},{transactions:t.transactions.filter((function(t){return t._id!==e.payload}))});case"ADD_TRANSACTION":return Object(d.a)(Object(d.a)({},t),{},{transactions:[].concat(Object(j.a)(t.transactions),[e.payload])});case"GET_TRANSACTIONS":return Object(d.a)(Object(d.a)({},t),{},{loading:!1,transactions:e.payload});case"TRANSACTION_ERROR":return Object(d.a)(Object(d.a)({},t),{},{error:e.payload});default:return t}},p=n(9),O=n.n(p),x=n(0),h={transactions:[],error:null,loading:!0},f=Object(a.createContext)(h),m=function(t){var e=t.children,n=Object(a.useReducer)(b,h),r=Object(i.a)(n,2),c=r[0],s=r[1];function o(){return(o=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/api/v1/transactions");case 3:e=t.sent,s({type:"GET_TRANSACTIONS",payload:e.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function j(){return(j=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.delete("/api/v1/transactions/".concat(e));case 3:s({type:"DELETE_TRANSACTION",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,O.a.post("/api/v1/transactions",e,n);case 4:a=t.sent,s({type:"ADD_TRANSACTION",payload:a.data.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(x.jsx)(f.Provider,{value:{transactions:c.transactions,error:c.error,loading:c.loading,getTransactions:function(){return o.apply(this,arguments)},deleteTransaction:function(t){return j.apply(this,arguments)},addTransaction:function(t){return d.apply(this,arguments)}},children:e})},v=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(0),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(a.useContext)(f).addTransaction;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Add new transaction"}),Object(x.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:+o};l(e)},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{htmlFor:"text",children:"Text"}),Object(x.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},id:"text",placeholder:"Enter text..."})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(x.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(x.jsx)("input",{type:"number",id:"amount",value:o,onChange:function(t){return u(t.target.value)},placeholder:"Enter amount..."})]}),Object(x.jsx)("button",{className:"btn",type:"submit",children:"Add transaction"})]})]})},T=function(){var t=Object(a.useContext)(f).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2),e=t<0?"-":"";return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:"Your balance"}),Object(x.jsxs)("h1",{children:[e,"$",Math.abs(t)]})]})},y=function(){return Object(x.jsx)("div",{children:"Expense Tracker"})},N=function(){var t=Object(a.useContext)(f).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(x.jsxs)("div",{className:"inc-exp-container",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Income"}),Object(x.jsxs)("p",{className:"money plus",children:["+$",e]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Expense"}),Object(x.jsxs)("p",{className:"money minus",children:["-$",n]})]})]})},A=function(t){var e=t.transaction,n=e.amount>0?"+":"-",r=Object(a.useContext)(f).deleteTransaction;return Object(x.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(x.jsxs)("span",{children:[n,"$",Math.abs(e.amount)]}),Object(x.jsx)("button",{className:"delete-btn",onClick:function(){return r(e._id)},children:"x"})]})},R=function(){var t=Object(a.useContext)(f),e=t.transactions,n=t.getTransactions;return Object(a.useEffect)((function(){n()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"History"}),Object(x.jsx)("ul",{id:"list",className:"list",children:e.map((function(t){return Object(x.jsx)(A,{transaction:t},t._id)}))})]})};var C=function(){return Object(x.jsxs)(m,{children:[Object(x.jsx)(y,{}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(T,{}),Object(x.jsx)(N,{}),Object(x.jsx)(R,{}),Object(x.jsx)(v,{})]})]})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.fcd42aae.chunk.js.map