(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={label:"filter_label__3DTWP",input:"filter_input__1g0Wd"}},16:function(e,t,n){e.exports={enter:"App_enter__1qOvj",enterActive:"App_enterActive__2rr7g",exit:"App_exit__2W8aG",exitActive:"App_exitActive__2YMwq"}},2:function(e,t,n){e.exports={container:"phonebookForm_container__BTjM4",label:"phonebookForm_label__2x-nM",input:"phonebookForm_input__2IMMF",form:"phonebookForm_form__1RXFU",name:"phonebookForm_name__3GvZd",number:"phonebookForm_number__21GD7",btn:"phonebookForm_btn__CaLIf",enter:"phonebookForm_enter__3ETj-",enterActive:"phonebookForm_enterActive__25BGR",exit:"phonebookForm_exit__1iftJ",exitActive:"phonebookForm_exitActive__2S6Wl"}},21:function(e,t,n){e.exports={popup:"errorPopup_popup__1LU-F",enter:"errorPopup_enter__1A6xR",enterActive:"errorPopup_enterActive__LO9Qe",exit:"errorPopup_exit__ZiYjm",exitActive:"errorPopup_exitActive__3eRCO"}},22:function(e,t,n){e.exports={container:"container_container__3TiUU"}},23:function(e,t,n){e.exports={appear:"title_appear__1kiZt",appearActive:"title_appearActive__34wS0"}},3:function(e,t,n){e.exports={name:"contactList_name__3nM-v",number:"contactList_number__PxfHE",item:"contactList_item__1Zfmy",btn:"contactList_btn__277bu",enter:"contactList_enter__29KRA",enterActive:"contactList_enterActive__3ZojL",exit:"contactList_exit__2IyBh",exitActive:"contactList_exitActive__3LBAP"}},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(6),c=n.n(r),o=n(24),i=n(8),s=n(9),u=n(12),l=n(11),m=n(1),b=n.n(m),h=n(20),p=n(2),_=n.n(p),j=(n(18),n(21)),x=n.n(j);var d=function(e){var t=e.text;return Object(a.jsx)("div",{className:x.a.popup,children:Object(a.jsx)("h1",{children:t})})},f=n(35),v=n(19).v4,O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",errorName:!1,errorNumber:!1},e.nameInputId=v(),e.numberInputId=v(),e.handleSubmit=function(t){return t.preventDefault(),0===e.state.name.length?(e.setState({errorName:!0}),void setTimeout((function(){e.setState({errorName:!1})}),3e3)):0===e.state.number.length?(e.setState({errorNumber:!0}),void setTimeout((function(){e.setState({errorNumber:!1})}),3e3)):(e.props.onSubmit(e.state),void e.reset())},e.reset=function(){e.setState({name:"",number:""})},e.handleChange=function(t){e.setState(Object(h.a)({},t.currentTarget.name,t.currentTarget.value))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("div",{className:_.a.container,children:[Object(a.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:_.a.label,children:[" ",Object(a.jsx)("span",{className:_.a.name,children:"Name"}),Object(a.jsx)("input",{className:_.a.input,name:"name",type:"text",value:t,placeholder:"enter name",onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:_.a.label,children:[" ",Object(a.jsx)("span",{className:_.a.number,children:"Number"}),Object(a.jsx)("input",{className:_.a.input,name:"number",type:"number",value:n,placeholder:"enter number",onChange:this.handleChange})]}),Object(a.jsx)("button",{className:_.a.btn,type:"submit",children:"add contact"})]}),Object(a.jsx)(f.a,{in:this.state.errorName,unmountOnExit:!0,timeout:3e3,classNames:_.a,children:Object(a.jsx)(d,{text:"Please enter name"})}),Object(a.jsx)(f.a,{in:this.state.errorNumber,unmountOnExit:!0,timeout:3e3,classNames:_.a,children:Object(a.jsx)(d,{text:"Please enter number"})})]})}}]),n}(b.a.Component),N=n(3),A=n.n(N),S=n(36);var g=function(e){var t=e.arr,n=e.onDel;return Object(a.jsx)("div",{className:A.a.container,children:Object(a.jsx)(S.a,{component:"ul",children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(a.jsx)(f.a,{timeout:3e3,classNames:A.a,children:Object(a.jsxs)("li",{className:A.a.item,children:[Object(a.jsxs)("h3",{className:A.a.name,children:[r," : "]}),Object(a.jsx)("a",{className:A.a.number,href:c,children:c}),Object(a.jsx)("button",{className:A.a.btn,onClick:function(){n(t)},type:"button",children:"delite"})]})},t)}))})})},k=n(15),y=n.n(k),C=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:y.a.label,children:"Find contacts by name"}),Object(a.jsx)("input",{className:y.a.input,type:"text",value:t,placeholder:"find name",onChange:n})]})},F=n(22),L=n.n(F);var P=function(e){var t=e.children;return Object(a.jsx)("div",{className:L.a.container,children:t})},w=n(16),T=n.n(w),D=n(23),I=n.n(D),E=n(19).v4,M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",error:!1},e.handlerFormSubmit=function(t){var n={id:E(),name:t.name,number:t.number};if(e.findName(e.state.contacts,t).length>0)return e.setState({error:!0}),void setTimeout((function(){e.setState({error:!1})}),3e3);e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[n])}}))},e.handleFilter=function(t){e.setState({filter:t.currentTarget.value})},e.filterContact=function(){var t=e.state.filter.toLowerCase();return e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}))},e.handleDeliteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contact"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.contacts!==t.contacts&&localStorage.setItem("contact",JSON.stringify(this.state.contacts))}},{key:"findName",value:function(e,t){return e.filter((function(e){return e.name===t.name}))}},{key:"render",value:function(){var e=this.filterContact();return Object(a.jsxs)(P,{children:[Object(a.jsx)(f.a,{in:!0,classNames:I.a,timeout:500,appear:!0,unmountOnExit:!0,children:Object(a.jsx)("h1",{children:"Phonebook"})}),Object(a.jsx)(O,{onSubmit:this.handlerFormSubmit}),Object(a.jsx)(f.a,{in:this.state.contacts.length>0,classNames:T.a,timeout:250,unmountOnExit:!0,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{value:this.state.filter,onChange:this.handleFilter}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(g,{arr:e,onDel:this.handleDeliteContact})]})}),Object(a.jsx)(f.a,{in:this.state.error,timeout:250,classNames:T.a,unmountOnExit:!0,children:Object(a.jsx)(d,{text:"this contact already exists "})})]})}}]),n}(m.Component);n(33);c.a.render(Object(a.jsx)(M,{}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e4c984c3.chunk.js.map