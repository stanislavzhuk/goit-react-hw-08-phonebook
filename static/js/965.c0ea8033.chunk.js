"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[965],{4965:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var o,r,i,a,s=t(2791),c=t(6434),l=t(4227),d=function(n){return n.filter},u=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},f=function(n){return n.contacts.error},x=t(9439),h=t(168),m=t(4238),b=m.Z.form(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 4;\n  "]))),g=m.Z.label(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  width: 100%;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.14;\n  "]))),w=m.Z.input(i||(i=(0,h.Z)(["\n  padding: 8px 12px;\n\n  font-size: 18px;\n  line-height: 1.12;\n  \n  border: 2px solid #a75f06;\n  border-radius: 8px;\n  outline: 2px solid transparent;\n  outline-offset: -1px;\n  background-color: #e6f4f1;\n\n  transition: outline 300ms ease-in;\n\n  &:hover,\n  &:focus {\n    outline-color: #f5b05c;\n  }\n  "]))),v=m.Z.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  min-width: 150px;\n  margin-top: 24px;\n  padding: 8px 10px;\n\n  border: 2px solid #a75f06;\n  border-radius: 8px;\n  background-color: #e6f4f1;\n\n  font-size: 18px;\n  font-weight: 500;\n\n  cursor: pointer;\n\n  transition: border-color 300ms ease-in, background-color 300ms ease-in;\n  \n  :hover,\n  :focus {\n    border-color: #f5b05c;\n    background-color: #C0C0C0;\n  }\n  "]))),y=t(5264);y.Notify.init({borderRadius:"10px",timeout:4e3,clickToClose:!0,cssAnimationStyle:"zoom"});var C,Z,j,k,_,F,N,z,S=t(3329),A=function(){var n=(0,s.useState)(""),e=(0,x.Z)(n,2),t=e[0],o=e[1],r=(0,s.useState)(""),i=(0,x.Z)(r,2),a=i[0],d=i[1],p=(0,c.useDispatch)(),f=(0,c.useSelector)(u),h=function(n){var e=n.currentTarget,t=e.name,r=e.value;"name"===t&&o(r),"number"===t&&d(r)};return(0,S.jsxs)(b,{onSubmit:function(n){if(n.preventDefault(),f.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return function(n){return y.Notify.info("".concat(n," is already in contacts"))}(t);p((0,l.uK)({name:t,phone:a})),function(n){y.Notify.success("".concat(n," has been successfully added to the contact list"))}(t),o(""),d("")},children:[(0,S.jsxs)(g,{children:["Name",(0,S.jsx)(w,{type:"text",name:"name",value:t,onChange:h,pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter contact name",required:!0})]}),(0,S.jsxs)(g,{children:["Number",(0,S.jsx)(w,{type:"tel",name:"number",value:a,onChange:h,pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter contact number",required:!0})]}),(0,S.jsx)(v,{type:"submit",children:"Add contact"})]})},D=m.Z.li(C||(C=(0,h.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 8px;\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n\n  @media screen and (min-width: 768px) {\n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  }\n"]))),L=m.Z.div(Z||(Z=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 140px;\n\n  @media screen and (min-width: 376px) {\n    max-width: 300px;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 8px;\n    max-width: 600px;\n  }\n  "]))),E=m.Z.p(j||(j=(0,h.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #000;\n  line-height: calc(24 / 18);\n  "]))),q=m.Z.p(k||(k=(0,h.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #000;\n  line-height: calc(24 / 18);\n  "]))),$=m.Z.button(_||(_=(0,h.Z)(["\n  display: inline-block;\n  margin-bottom: 8px;\n\n\n  border: 2px solid #a75f06;\n  border-radius: 8px;\n  background-color: #e6f4f1;\n\n  font-size: 18px;\n  font-weight: 500;\n\n  cursor: pointer;\n\n  transition: border-color 300ms ease-in, background-color 300ms ease-in;\n  \n  :hover,\n  :focus {\n    border-color: #f5b05c;\n    background-color: #C0C0C0;\n  }\n  "]))),B=function(){var n=(0,c.useDispatch)(),e=(0,c.useSelector)(u),t=function(n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}((0,c.useSelector)(d).toLowerCase()),o=function(e){n((0,l.GK)(e)),y.Notify.success("Contact deleted successfully!")};return t.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,t=n.name,r=n.phone;return(0,S.jsxs)(D,{children:[(0,S.jsxs)(L,{children:[(0,S.jsxs)(E,{children:[t,":"]}),(0,S.jsx)(q,{children:r})]}),(0,S.jsx)($,{type:"button",onClick:function(){return o(e)},children:"Delete"})]},e)}))},I=m.Z.ul(F||(F=(0,h.Z)(["\n  max-height: 60vh;\n  min-height: 200px;\n  padding: 8px 12px;\n\n  list-style: none;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.14;\n  overflow: auto;\n\n  border: 2px solid #a75f06;\n  border-radius: 8px;\n  outline: 2px solid transparent;\n  outline-offset: -1px;\n  background-color: #e6f4f1;\n\n  transition: outline 300ms ease-in;\n\n  &:hover,\n  &:focus {\n    outline-color: #f5b05c;\n  }\n\n  &::-webkit-scrollbar {\n    width: 0;\n  }\n  "]))),J=function(){return(0,S.jsx)(I,{children:(0,S.jsx)(B,{})})},K=t(1331),M=m.Z.label(N||(N=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.14;\n  "]))),P=m.Z.input(z||(z=(0,h.Z)(["\n  margin: 4px 0 20px 0;\n  padding: 8px 12px;\n\n  font-size: 18px;\n  line-height: 1.12;\n  \n  border: 2px solid #a75f06;\n  border-radius: 8px;\n  outline: 2px solid transparent;\n  outline-offset: -1px;\n  background-color: #e6f4f1;\n\n  transition: outline 300ms ease-in;\n\n  &:hover,\n  &:focus {\n    outline-color: #f5b05c;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-bottom: 0;\n  }\n  "]))),T=function(){var n=(0,c.useDispatch)(),e=(0,c.useSelector)(d);return(0,S.jsxs)(M,{children:["Find contacts by name",(0,S.jsx)(P,{type:"text",name:"filter",value:e.filter,onChange:function(e){var t=e.target.value;n((0,K.a)(t))},pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter contact name",required:!0})]})},W=t(8808),G="Contacts_container__WzsIr",Q="Contacts_title__LxdN4",R="Contacts_titleContacts__XggQ5",X="Contacts_textInfo__piFWs",H=function(){var n=(0,c.useDispatch)();(0,s.useEffect)((function(){n((0,l.yF)())}),[n]);var e=(0,c.useSelector)(f),t=(0,c.useSelector)(u),o=(0,c.useSelector)(p);return(0,S.jsx)("div",{className:G,children:e?(0,S.jsx)("h2",{children:e}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("h1",{className:Q,children:"Phonebook"}),(0,S.jsx)(A,{}),o&&!e&&(0,S.jsx)(W.Z,{}),t.length?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("h2",{className:R,children:"Contacts"}),(0,S.jsx)(T,{}),(0,S.jsx)(J,{})]}):(0,S.jsx)("p",{className:X,children:"No any contacts"})]})})}}}]);
//# sourceMappingURL=965.c0ea8033.chunk.js.map