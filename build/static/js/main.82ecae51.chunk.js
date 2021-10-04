(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(18),a=n.n(r),c=n(3),s=n.n(c),o=n(5),u=n(4),i=n(6),l=n.n(i),d=n(1),b=n(0),f=function(e){var t=e.search,n=e.setSearch;return Object(b.jsxs)("div",{children:["Filter shown with"," ",Object(b.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}})]})},j=function(e){var t=e.message;return null===t?null:Object(b.jsxs)("div",{className:"message message--success",children:[t,Object(b.jsx)("br",{})]})},m=function(e){var t=e.message;return null===t?null:Object(b.jsx)("div",{className:"message message--error",children:t})},h=function(e){var t=e.addName,n=e.newName,r=e.setNewName,a=e.newNumber,c=e.setNewNumber;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:["name:"," ",Object(b.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}})]}),Object(b.jsxs)("div",{children:["number:"," ",Object(b.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},p=n(9),O="api/persons",v=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(p.a)(Object(p.a)({},t),{},{id:Math.round(1e4*Math.random())}),n=l.a.post(O,t),e.abrupt("return",n.then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("".concat(O,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("".concat(O,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g={getAll:function(){return l.a.get(O).then((function(e){return e.data}))},createContact:v,deleteContact:x,updateContact:w},N=function(e){var t=e.person,n=e.persons,r=e.setPersons,a=e.setErrorMessage;return Object(b.jsxs)("div",{children:[t.name," ",t.number," ",Object(b.jsx)("button",{id:t.id,onClick:function(){window.confirm("Are you sure you want to delete ".concat(t.name,"'s contact info?"))&&(console.log(t.id),g.deleteContact(t.id).then((function(e){console.log(e),r(n.filter((function(e){return e.id!==t.id})))})).catch((function(e){a("Information of ".concat(t.name," has already been removed from server")),setTimeout((function(){return a(null)}),5e3)})))},children:"delete"})]})},y=function(e){var t=e.persons,n=e.search,r=e.setPersons,a=e.setErrorMessage;return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(b.jsx)(N,{person:e,setPersons:r,persons:t,setErrorMessage:a})}))},C=function(){var e=Object(d.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(d.useState)(""),c=Object(u.a)(a,2),i=c[0],l=c[1],p=Object(d.useState)(""),O=Object(u.a)(p,2),v=O[0],x=O[1],w=Object(d.useState)(""),N=Object(u.a)(w,2),C=N[0],k=N[1],S=Object(d.useState)(null),E=Object(u.a)(S,2),M=E[0],P=E[1],T=Object(d.useState)(null),A=Object(u.a)(T,2),D=A[0],I=A[1],J=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("This event is ",t),console.log(n.filter((function(e){return e.name===i}))),n.some((function(e){return e.name===i}))?(console.log(i),window.confirm("".concat(i," is already added to phonebook. Do you want to update their phone number?"))&&(a=n.find((function(e){return e.name===i})).id,g.updateContact(a,{name:i,number:v}).then((function(e){r(n.filter((function(t){return t.id!==e.id})).concat(e)),P("Successfully updated ".concat(e.name)),setTimeout((function(){P(null)}),5e3)})))):(c={name:i,number:v},g.createContact(c).then((function(e){r(n.concat(e)),P("Successfully added ".concat(e.name)),setTimeout((function(){P(null)}),5e3),l(""),x("")})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){g.getAll().then((function(e){r(e)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(j,{message:M}),Object(b.jsx)(m,{message:D}),Object(b.jsx)(f,{search:C,setSearch:k}),Object(b.jsx)("h2",{children:"add a new"}),Object(b.jsx)(h,{addName:J,newName:i,setNewName:l,newNumber:v,setNewNumber:x}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(y,{persons:n,search:C,setPersons:r,setErrorMessage:I})]})};n(44);a.a.render(Object(b.jsx)(C,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.82ecae51.chunk.js.map