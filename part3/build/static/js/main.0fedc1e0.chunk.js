(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(13),r=n.n(i),s=n(14),d=n(15),c=n(17),m=n(16),u=n(2),o=n.n(u),l=function(e){var t=e.reminders,n=e.deleteReminder;return Object(a.jsxs)("div",{children:[new Date(t.timestamp).toLocaleString()," \xa0\xa0 ",t.name," ",Object(a.jsx)("button",{onClick:n,children:"Delete"})]})},h=function(e){return Object(a.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(a.jsxs)("div",{children:["Name: \xa0",Object(a.jsx)("input",{value:e.nameValue,onChange:e.nameOnChange})]}),Object(a.jsxs)("div",{children:["Date: \xa0\xa0\xa0",Object(a.jsx)("input",{value:e.dateValue,onChange:e.dateOnChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"Add"})})]})},j=n(3),b=n.n(j),f=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).addReminder=function(e){if(e.preventDefault(),isNaN(new Date(a.state.newDate).getTime()))alert("Invalid date!");else if(a.state.reminders.some((function(e){return a.state.newName===e.name})))alert(a.state.newName+" already exists");else{var t={name:a.state.newName,timestamp:new Date(a.state.newDate)};b.a.post("/api/reminders",t).then((function(e){a.setState({reminders:a.state.reminders.concat(e.data),newName:"",newDate:""})}))}},a.deleteReminder=function(e){return function(){window.confirm("Do you really want to delete this?")&&b.a.delete("/api/reminders/".concat(e)).then((function(t){a.setState({reminders:a.state.reminders.filter((function(t){return e!==t.id}))})}))}},a.handleNameChange=function(e){a.setState({newName:e.target.value})},a.handleDateChange=function(e){a.setState({newDate:e.target.value})},a.state={reminders:[],newName:"",newDate:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/reminders").then((function(t){e.setState({reminders:t.data})}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Reminders"}),Object(a.jsx)(h,{onSubmit:this.addReminder,nameValue:this.state.newName,nameOnChange:this.handleNameChange,dateValue:this.state.newDate,dateOnChange:this.handleDateChange}),Object(a.jsx)("h2",{children:"At time:"}),Object(a.jsx)("ul",{children:this.state.reminders.map((function(t,n){return Object(a.jsx)(l,{reminders:t,deleteReminder:e.deleteReminder(t.id)},n)}))})]})}}]),n}(o.a.Component);r.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0fedc1e0.chunk.js.map