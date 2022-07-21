(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{202:function(e,t,s){},203:function(e,t,s){},204:function(e,t,s){},205:function(e,t,s){},206:function(e,t,s){},207:function(e,t,s){},208:function(e,t,s){},209:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(75),r=s.n(n),i=s(3),o=s(7),l=s(2),j=s(8),d=s.n(j),b=s(13),h=s(10),u=s(6),m=s(17),O=s(0),x=u.b().shape({AccountNo:u.a().typeError("Enter an Account number").min(1e15,"Enter a valid number").max(1e16,"Enter a valid number").required("Account number is required"),Password:u.d().required()});var p=function(){var e,t,s=Object(c.useContext)(E),a=s.isValid,n=s.setisValid,r=Object(c.useContext)(P),i=(r.userDetails,r.setUserDetails),j=Object(h.d)({resolver:Object(m.a)(x)}),u=j.register,p=j.handleSubmit,v=j.formState.errors,f=Object(l.f)();return Object(c.useEffect)((function(){a&&f("/Home")}),[a]),Object(O.jsx)("div",{className:"parent",style:{minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"account",style:{justifyContent:"center"},children:[Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{className:"px-2",children:"Login"}),Object(O.jsxs)("form",{className:"create-box",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onSubmit:p((function(e){console.log(e),d.a.post("https://bank-react.herokuapp.com/login",e).then((function(e){e.data.message?(console.log(e.data.message),alert("Login credentials must match")):(alert("Authentication Successfull"),localStorage.setItem("bankDetails",e.data[0].acc_no),n(!0),i(e.data[0]))}))})),children:[Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h5",{children:"Account No."}),Object(O.jsx)("input",Object(b.a)({type:"number",placeholder:"Enter 12 digit Account number"},u("AccountNo"))),Object(O.jsx)("span",{role:"alert",children:null===(e=v.AccountNo)||void 0===e?void 0:e.message})]}),Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h5",{children:"Password"}),Object(O.jsx)("input",Object(b.a)({type:"password",autoComplete:"off"},u("Password"))),Object(O.jsx)("span",{role:"alert",children:null===(t=v.Password)||void 0===t?void 0:t.message})]}),Object(O.jsx)("div",{className:"text-box mt-4",children:Object(O.jsx)("button",{type:"submit",className:"input",children:"Submit"})})]})]}),Object(O.jsxs)("div",{className:"or",children:[Object(O.jsx)("hr",{className:"first-hr"}),Object(O.jsx)("h6",{className:"mx-2",children:"OR"}),Object(O.jsx)("hr",{className:"second-hr"})]}),Object(O.jsx)(o.b,{to:"/Create",style:{width:"100%"},children:Object(O.jsx)("div",{className:"other-btn",children:"Create"})})]})})},v={inputs:[{label:"Full Name",name:"Username",type:"text",placeholder:"eg. John Doe"},{label:"Email",name:"Email",type:"text",placeholder:"eg. Johndoe12@gmail.com"},{label:"Mobile No.",name:"Phone",type:"number",placeholder:"eg. 91223 44556"},{label:"Password",name:"Password",type:"password"},{label:"Password Again",name:"Password_Second",type:"password"},{label:"Amount to be Deposited",name:"Amount",type:"number",placeholder:"Max 50000"}]};var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],n=u.b().shape({Username:u.d().required(),Email:u.d().email().required(),Phone:u.a().typeError("Enter a valid Phone number").min(1e9,"Enter a valid number").max(9999999999,"Enter a valid number").required("A phone number is required"),Password:u.d().required(),Password_Second:u.d().oneOf([u.c("Password"),null],"Passwords must match").required(),Amount:u.a().typeError("Enter a valid Amount").max(5e4,"Cannot Deposit over 50000").required()}),r=Object(h.d)({resolver:Object(m.a)(n)}),j=r.register,x=r.handleSubmit,p=r.formState.errors;Object(c.useEffect)((function(){d.a.get("https://bank-react.herokuapp.com/transactTo").then((function(e){var t;console.log(e.data);var s=null===(t=e.data)||void 0===t?void 0:t.map((function(e){return e.acc_no}));a(s)}))}),[]);var f=function(){return Math.floor(1e15+9e15*Math.random())},g=Object(l.f)();return Object(O.jsx)("div",{className:"parent",style:{minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"account",style:{justifyContent:"center"},children:[Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{className:"px-2",children:"Create"}),Object(O.jsxs)("form",{className:"create-box",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onSubmit:x((function(e){e.image="https://res.cloudinary.com/shubham4538/image/upload/v1655829691/React-bank/Blank/blank-profile_b5is0b.png";for(var t=f();s.includes(t);)t=f();e.acc_no=t,d.a.post("https://bank-react.herokuapp.com/create",e).then((function(e){e.data.err?alert("Creation Failed :("):(alert("Details Submitted Successfully"),localStorage.setItem("bankDetails",e.data[0].acc_no),g("/Home"))}))})),children:[v.inputs.map((function(e,t){var s;return Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h5",{children:e.label}),Object(O.jsx)("input",Object(b.a)(Object(b.a)({type:e.type,name:e.name,placeholder:e.placeholder},j("".concat(e.name))),{},{autoComplete:"off"})),Object(O.jsx)("span",{role:"alert",children:null===(s=p[e.name])||void 0===s?void 0:s.message})]},t)})),Object(O.jsx)("div",{className:"text-box mt-4",children:Object(O.jsx)("button",{type:"submit",className:"input",children:"Submit"})})]})]}),Object(O.jsxs)("div",{className:"or",children:[Object(O.jsx)("hr",{className:"first-hr"}),Object(O.jsx)("h6",{className:"mx-2",children:"OR"}),Object(O.jsx)("hr",{className:"second-hr"})]}),Object(O.jsx)(o.b,{to:"/Login",style:{width:"100%"},children:Object(O.jsx)("div",{className:"other-btn",children:"Login"})})]})})};s(43),s(202),s(203);var g=function(e){var t=e.userDetails,s=e.setSidebar,a=e.sidebar,n=Object(l.e)().pathname,r=Object(c.useContext)(_),i="";return t&&t.acc_no&&(i="XXXX XXXX XXXX "+(i=t.acc_no.toString()).substring(i.length-4)),document.onclick=function(e){"sidebar"!==e.target.id&&"userdp"!==e.target.className&&s(!1)},Object(O.jsxs)("div",{id:"sidebar",className:a?"sidebar show":"sidebar",children:[Object(O.jsxs)("div",{id:"sidebar",className:"side-user",children:[t?Object(O.jsx)("img",{src:t.image,onError:r,className:"userdp side-image"}):"",i]}),Object(O.jsxs)("div",{className:"side-info",children:[Object(O.jsx)(o.b,{to:"/Home",onClick:function(){return s(!1)},className:n.includes("/Home")?"active":"",children:Object(O.jsxs)("div",{className:"side-info-each",children:[Object(O.jsx)("h4",{children:"Home"}),Object(O.jsx)("i",{className:"far fa-money-bill"})]})}),Object(O.jsx)(o.b,{to:"/Settings",onClick:function(){return s(!1)},className:n.includes("/Settings")?"active":"",children:Object(O.jsxs)("div",{className:"side-info-each",children:[Object(O.jsx)("h4",{children:"Settings"}),Object(O.jsx)("i",{className:"far fa-gear"})]})}),Object(O.jsxs)("div",{onClick:function(){s(!1),window.confirm("Are you sure you want to Log Out ?")&&(localStorage.removeItem("bankDetails"),window.location.reload())},className:"side-info-each",children:[Object(O.jsx)("h4",{children:"Log Out"}),Object(O.jsx)("i",{className:"fas fa-power-off"})]})]})]})};var N=function(e){var t=e.userDetails,s=e.isValid,a=Object(c.useState)(!1),n=Object(i.a)(a,2),r=n[0],j=n[1],d=Object(l.e)(),b=Object(c.useContext)(_),h=d.pathname,u="";return u=s?Object(O.jsx)("img",{onClick:function(){return j(!r)},src:null===t||void 0===t?void 0:t.image,onError:b,className:"userdp",style:{width:"40px",height:"40px",margin:"7px"}}):Object(O.jsx)(o.b,{to:"/Login",children:Object(O.jsx)("div",{className:"btn",children:"Login"})}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[s?Object(O.jsx)(g,{sidebar:r,setSidebar:j,userDetails:t,isValid:s}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("div",{className:r?"side-back back":"side-back"})]}),Object(O.jsxs)("nav",{className:"navigation-bar",children:[Object(O.jsx)("img",{src:"./logo.png",className:"logo",alt:""}),Object(O.jsx)("h4",{style:{color:"#fff"},children:h.includes("/Home")?"Home":h.includes("/Transactions")?"Transactions":h.includes("/Transfer")?"Transfer":h.includes("/Settings")?"Settings":h.includes("/Deposit")?"Deposit":""}),u]})]})},y=u.b().shape({to:u.a().required("Select an Account Number!").typeError("Select an Account Number!"),Amount:u.a().required().typeError("Enter an Amount")});var w=function(){var e,t,s=Object(c.useContext)(E).isValid,a=Object(c.useContext)(P).userDetails,n=Object(c.useState)([]),r=Object(i.a)(n,2),o=r[0],l=r[1];Object(c.useEffect)((function(){d.a.get("https://bank-react.herokuapp.com/transactTo").then((function(e){l(e.data)}))}),[]);var j=Object(h.d)({resolver:Object(m.a)(y)}),u=j.register,x=j.handleSubmit,p=j.formState.errors,v=null===o||void 0===o?void 0:o.filter((function(e){if(e.acc_no!==a.acc_no)return e.acc_no=parseInt(e.acc_no),e}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:a,isValid:s}),Object(O.jsx)("div",{className:"parent",children:Object(O.jsx)("div",{className:"account",children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{children:"Money Transfer"}),Object(O.jsxs)("form",{onSubmit:x((function(e){e.from=a.acc_no,console.log(typeof a.acc_no),e.time=Date(),e.transaction="sent",console.log(e),d.a.post("https://bank-react.herokuapp.com/transfer",e).then((function(e){e.data.err?alert(e.data.err):(alert("Transfer Successful !!!"),window.location.reload())}))})),className:"create-box",children:[Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h5",{children:"Account"}),Object(O.jsxs)("select",Object(b.a)(Object(b.a)({name:"account",id:"account"},u("to")),{},{style:{height:"fit-content"},children:[Object(O.jsx)("option",{hidden:!0,value:"",children:"Select"}),null===v||void 0===v?void 0:v.map((function(e,t){return Object(O.jsx)("option",{value:e.acc_no,children:e.acc_no},t)}))]})),Object(O.jsx)("span",{children:null===(e=p.to)||void 0===e?void 0:e.message})]}),Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h5",{children:"Amount"}),Object(O.jsx)("input",Object(b.a)({type:"number"},u("Amount"))),Object(O.jsx)("span",{children:null===(t=p.Amount)||void 0===t?void 0:t.message})]}),Object(O.jsx)("div",{className:"text-box mt-4",children:Object(O.jsx)("button",{type:"submit",className:"input",children:"Transfer"})})]})]})})})]})};var S=function(){var e=Object(c.useContext)(E).isValid,t=Object(c.useContext)(P),s=t.userDetails,a=(t.setUserDetails,Object(c.useState)([])),n=Object(i.a)(a,2),r=n[0],o=n[1],l=Object(c.useState)([]),j=Object(i.a)(l,2),b=j[0],h=j[1];return Object(c.useEffect)((function(){d.a.get("https://bank-react.herokuapp.com/transactTo").then((function(e){o(e.data)})),s.transactions&&h(JSON.parse(s.transactions))}),[s]),e?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:s,isValid:e}),Object(O.jsx)("div",{className:"parent",style:{height:"90vh",overflow:"auto"},children:Object(O.jsxs)("div",{className:"account",style:{width:"700px",minWidth:"500px"},children:[Object(O.jsxs)("h5",{className:"mt-2",children:["Transaction data for Account of ",s.Username]}),Object(O.jsx)("div",{className:"transaction-scroll",children:Object(O.jsx)("div",{className:"transaction-box",children:0!==b.length?b.map((function(e,t){return Object(O.jsxs)("div",{className:e.to?"transaction back-to":"transaction back-from",children:[Object(O.jsxs)("div",{className:"trans-left",children:[Object(O.jsx)("div",{className:"trans-image",children:r.map((function(t,s){if(t.acc_no===e.from||t.acc_no===e.to)return Object(O.jsx)("img",{className:"userdp",src:t.image},s)}))}),Object(O.jsxs)("div",{className:"trans-details",children:[Object(O.jsx)("div",{className:"trans-account",children:e.to||e.from}),r.map((function(t,s){if(t.acc_no===e.from||t.acc_no===e.to)return Object(O.jsx)("div",{className:"trans-name",children:(e.to?"To ":"From ")+t.Username},s)}))]})]}),e.to?Object(O.jsxs)("div",{className:"trans-right to",children:["-",e.amount]}):Object(O.jsxs)("div",{className:"trans-right from",children:["+",e.amount]})]},t)})):Object(O.jsx)("div",{style:{alignSelf:"center",padding:"10px",fontSize:"20px",fontWeight:600,color:"#5d5d5d"},children:"No Transactions yet..."})})})]})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:s,isValid:e}),Object(O.jsx)("h1",{children:"You Need to Login First !!!"})]})};var k=function(){var e,t,s=Object(c.useContext)(E).isValid,a=Object(c.useContext)(P).userDetails,n=u.b().shape({Password:u.d().required("Enter Password!"),Amount:u.a().typeError("Enter an Amount").max(5e3).required()}),r=Object(h.d)({resolver:Object(m.a)(n)}),i=r.register,o=r.handleSubmit,l=r.formState.errors;return s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:a,isValid:s}),Object(O.jsx)("div",{className:"parent",children:Object(O.jsx)("div",{className:"account",children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{className:"legend",children:"Deposit Amount"}),Object(O.jsxs)("div",{className:"create-box",children:[Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h5",{children:"Enter Password"}),Object(O.jsx)("input",Object(b.a)({type:"password",name:"Password"},i("Password"))),Object(O.jsx)("span",{children:null===(e=l.Password)||void 0===e?void 0:e.message})]}),Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h5",{children:"Amount To Deposit"}),Object(O.jsx)("input",Object(b.a)({type:"number",placeholder:"Max: 5000",name:"Amount"},i("Amount"))),Object(O.jsx)("span",{children:null===(t=l.Amount)||void 0===t?void 0:t.message})]}),Object(O.jsx)("div",{className:"text-box mt-4",children:Object(O.jsx)("button",{type:"submit",className:"input",onClick:o((function(e){a.password===e.Password?(e.number=a.acc_no,console.log(e),d.a.post("https://bank-react.herokuapp.com/deposit",e).then((function(e){alert(e.data),window.location.reload()}))):alert("Incorrect password")})),children:"Submit"})})]})]})})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:a,isValid:s}),Object(O.jsx)("h1",{children:"You Need to Login First !!!"})]})};s(204),s(205),s(206),s(207),s(208);var C=function(){var e=Object(c.useContext)(E).isValid;return Object(c.useContext)(P).userDetails,e?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"parent",style:{alignItems:"center !important",minHeight:"100vh !important"},children:Object(O.jsxs)("div",{className:"account",children:[Object(O.jsx)("h1",{children:"Already Logged In !!!"}),Object(O.jsx)(o.b,{to:"/Home",children:Object(O.jsxs)("div",{children:["Welcome ",Object(O.jsx)("i",{className:"far fa-arrow-right"})," "]})})]})})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"parent",style:{alignItems:"center",minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"account",children:[Object(O.jsx)("h1",{className:"m-3",children:"React Bank"}),Object(O.jsx)(o.b,{to:"/Login",children:Object(O.jsx)("div",{className:"btn",children:"Login"})}),Object(O.jsx)(o.b,{to:"/Create",children:Object(O.jsx)("div",{className:"create",children:"Create"})})]})})})};var D=function(){var e=Object(c.useContext)(E).isValid,t=Object(c.useContext)(P).userDetails,s=Object(c.useContext)(_);return e?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:t,isValid:e}),Object(O.jsx)("div",{className:"parent",children:Object(O.jsxs)("div",{className:"account-page",children:[Object(O.jsxs)("div",{className:"personal-info",children:[Object(O.jsxs)("div",{className:"personal-info-left",children:[Object(O.jsx)("img",{className:"userdp",src:t.image,onError:s}),Object(O.jsx)("h3",{children:t.Username}),Object(O.jsx)("div",{children:t.email}),Object(O.jsx)("div",{children:t.mobile})]}),Object(O.jsxs)("div",{className:"personal-info-right",children:[Object(O.jsx)("h4",{children:"Account Balance"}),Object(O.jsxs)("h1",{children:["\u20b9",t.acc_bal]})]})]}),Object(O.jsxs)("div",{className:"account-info",children:[Object(O.jsx)(o.b,{to:"/Transactions",children:Object(O.jsx)("div",{className:"transactions",children:Object(O.jsx)("h4",{children:"Transactions"})})}),Object(O.jsx)(o.b,{to:"/Transfer",children:Object(O.jsx)("div",{className:"transfer",children:Object(O.jsx)("h4",{children:"Transfer"})})}),Object(O.jsx)(o.b,{to:"/Deposit",children:Object(O.jsx)("div",{className:"amount",children:Object(O.jsx)("h4",{children:"Deposit"})})})]})]})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:t,isValid:e}),Object(O.jsx)("h1",{children:"You Need to Login First !!!"})]})};var A=function(){var e=Object(c.useContext)(E).isValid,t=Object(c.useContext)(P).userDetails,s=Object(c.useContext)(_),a=Object(c.useState)(!1),n=Object(i.a)(a,2),r=n[0],o=n[1],l=Object(c.useState)([]),j=Object(i.a)(l,2),b=j[0],h=j[1],u=Object(c.useState)(),m=Object(i.a)(u,2),x=m[0],p=m[1],v=Object(c.useState)(),f=Object(i.a)(v,2),g=f[0],y=f[1],w=Object(c.useState)(!1),S=Object(i.a)(w,2),k=S[0],C=S[1];Object(c.useEffect)((function(){d.a.get("https://bank-react.herokuapp.com/imageFiles").then((function(e){h(e.data.resources)}))}),[]);var D=function(){document.getElementById("file").click()},A=function(){!function(e){new Promise((function(t,s){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return s(e)}})).then((function(e){var s={user:t.Username,change:"image",base:e};d.a.post("https://bank-react.herokuapp.com/imageUpdate",JSON.stringify(s),{headers:{"Content-Type":"application/json"}}).then((function(e){e.data.success?(alert(e.data.success),window.location.reload()):alert(e.data.error)}))}))}(x)},F=function(e){var s=e.target.src;console.log(s);var c={user:t.Username,change:"image",value:s};d.a.post("https://bank-react.herokuapp.com/setting",c).then((function(){window.location.reload()}))};return e?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:t,isValid:e}),Object(O.jsx)("div",{className:"parent",style:{height:"90vh",overflow:"auto"},children:Object(O.jsx)("div",{className:"account",children:Object(O.jsxs)("div",{className:"settings-parent",children:[Object(O.jsx)("h1",{className:"my-2",children:"Settings"}),Object(O.jsxs)("div",{className:"settings",children:[Object(O.jsxs)("div",{className:"change-photo setting",children:[Object(O.jsx)("h5",{children:"Change Profile"}),Object(O.jsxs)("div",{className:"change-photo-title",children:[Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)("img",{className:"userdp",src:t.image,onError:s}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"Change Profile Picture for"}),Object(O.jsx)("div",{children:t.Username})]})]}),Object(O.jsx)("i",{className:r?"fas fa-angle-up":"fas fa-angle-down",style:{marginRight:"15px",cursor:"pointer"},onClick:function(){o(!r)}}),Object(O.jsxs)("div",{className:r?"image-drop-down show-image":"image-drop-down",children:[Object(O.jsx)("h6",{className:"ms-2",children:"Select from these"}),Object(O.jsx)("div",{children:b.map((function(e,t){return Object(O.jsx)("img",{src:e.secure_url,className:"user-images",onClick:F},t)}))}),Object(O.jsxs)("div",{className:"file-box",children:[Object(O.jsx)("input",{type:"file",name:"File",id:"file",accept:"image",onChange:function(e){p(e.target.files[0]),y(URL.createObjectURL(e.target.files[0])),C(!0)}}),k?x.type.includes("image")?Object(O.jsxs)("div",{className:"file-name",children:[Object(O.jsx)("h6",{children:x.name}),Object(O.jsxs)("button",{className:"buttons ms-2",onClick:A,children:[Object(O.jsx)("img",{src:g,alt:"",style:{width:"30px"}}),"Update"]})]}):Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)("button",{className:"buttons me-2",onClick:D,children:"Browse"}),Object(O.jsx)("h6",{style:{color:"red"},children:"*Select only Image files"})]}):Object(O.jsx)("button",{className:"buttons",onClick:D,children:"Browse"})]})]})]})]}),Object(O.jsxs)("div",{className:"change-password setting",children:[Object(O.jsx)("h5",{children:"Change Password"}),Object(O.jsx)("div",{children:"You can change the Password of your account here anytime whenever needed"})]}),Object(O.jsxs)("div",{className:"about-account setting",children:[Object(O.jsx)("h5",{children:"Change About"}),Object(O.jsx)("div",{children:"You can change the about of your account here anytime whenever needed"})]}),Object(O.jsxs)("div",{className:"change-username setting",children:[Object(O.jsx)("h5",{children:"Change Username"}),Object(O.jsx)("div",{children:"You can change the Username of your account here anytime whenever needed"})]}),Object(O.jsxs)("div",{className:"change-password setting",children:[Object(O.jsx)("h5",{children:"Change Password"}),Object(O.jsx)("div",{children:"You can change the Password of your account here anytime whenever needed"})]}),Object(O.jsxs)("div",{className:"about-account setting",children:[Object(O.jsx)("h5",{children:"Change About"}),Object(O.jsx)("div",{children:"You can change the about of your account here anytime whenever needed"})]}),Object(O.jsxs)("div",{className:"change-username setting",children:[Object(O.jsx)("h5",{children:"Change Username"}),Object(O.jsx)("div",{children:"You can change the Username of your account here anytime whenever needed"})]})]})]})})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{userDetails:t,isValid:e}),Object(O.jsx)("h1",{children:"You Need to Login First !!!"})]})},E=a.a.createContext(),P=a.a.createContext(),_=a.a.createContext();var F=function(){var e=localStorage.getItem("bankDetails"),t=Object(c.useState)({}),s=Object(i.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(!1),j=Object(i.a)(r,2),b=j[0],h=j[1];return Object(c.useEffect)((function(){null!==e&&d.a.post("https://bank-react.herokuapp.com/userDetails",{username:e}).then((function(e){e.data.err?console.log("err"):(n(e.data.details[0]),h(!0))}))}),[]),Object(O.jsx)(E.Provider,{value:{isValid:b,setisValid:h},children:Object(O.jsx)(_.Provider,{value:function(e){e.target.src="https://res.cloudinary.com/shubham4538/image/upload/v1655829691/React-bank/Blank/blank-profile_b5is0b.png"},children:Object(O.jsx)(P.Provider,{value:{userDetails:a,setUserDetails:n},children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,element:Object(O.jsx)(C,{})}),Object(O.jsx)(l.a,{path:"/Login",element:Object(O.jsx)(p,{})}),Object(O.jsx)(l.a,{path:"/Create",element:Object(O.jsx)(f,{})}),Object(O.jsx)(l.a,{path:"/Deposit",element:Object(O.jsx)(k,{})}),Object(O.jsx)(l.a,{path:"/Home",element:Object(O.jsx)(D,{})}),Object(O.jsx)(l.a,{path:"/Transfer",element:Object(O.jsx)(w,{})}),Object(O.jsx)(l.a,{path:"/Transactions",element:Object(O.jsx)(S,{})}),Object(O.jsx)(l.a,{path:"/Settings",element:Object(O.jsx)(A,{})})]})})})})})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root"))},43:function(e,t,s){}},[[209,1,2]]]);
//# sourceMappingURL=main.ad287cfe.chunk.js.map