(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1413:function(e,a,t){"use strict";t.r(a);var n=t(17),l=t(10),s=t(11),r=t(13),i=t(12),m=t(14),c=t(0),o=t.n(c),d=t(16),u=t(2),h=t(4),f=t.n(h),p=t(33),b=t(6),g=t(7),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,m=new Array(s),c=0;c<s;c++)m[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(m)))).state={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1},t.handleChange=function(e){t.setState(b.a.set(Object(n.a)({},t.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"canBeSubmitted",value:function(){var e=this.state,a=e.email,t=e.password,n=e.passwordConfirm,l=e.acceptTermsConditions;return a.length>0&&t.length>0&&t.length>3&&t===n&&l}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.name,n=a.email,l=a.password,s=a.passwordConfirm,r=a.acceptTermsConditions;return o.a.createElement("div",{className:f()(e.root,"flex flex-col flex-auto flex-no-shrink p-24 md:flex-row md:p-0")},o.a.createElement("div",{className:f()(e.intro,"flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")},o.a.createElement(g.b,{animation:"transition.expandIn"},o.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),o.a.createElement(g.b,{animation:"transition.slideUpIn",delay:300},o.a.createElement(u.hb,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to the FUSE!")),o.a.createElement(g.b,{delay:400},o.a.createElement(u.hb,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis."))),o.a.createElement(g.b,{animation:{translateX:[0,"100%"]}},o.a.createElement(u.d,{className:f()(e.card,"mx-auto m-16 md:m-0")},o.a.createElement(u.f,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},o.a.createElement(u.hb,{variant:"h6",className:"md:w-full mb-32"},"CREATE AN ACCOUNT"),o.a.createElement("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full"},o.a.createElement(u.eb,{className:"mb-16",label:"Name",autoFocus:!0,type:"name",name:"name",value:t,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(u.eb,{className:"mb-16",label:"Email",type:"email",name:"email",value:n,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(u.eb,{className:"mb-16",label:"Password",type:"password",name:"password",value:l,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(u.eb,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:s,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(u.w,{className:"items-center"},o.a.createElement(u.x,{control:o.a.createElement(u.h,{name:"acceptTermsConditions",checked:r,onChange:this.handleChange}),label:"I read and accept terms and conditions"})),o.a.createElement(u.c,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"Register",disabled:!this.canBeSubmitted()},"CREATE AN ACCOUNT")),o.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},o.a.createElement("span",{className:"font-medium"},"Already have an account?"),o.a.createElement(p.a,{className:"font-medium",to:"/pages/auth/login-2"},"Login"))))))}}]),a}(c.Component);a.default=Object(d.withStyles)(function(e){return{root:{background:"url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",backgroundSize:"cover"},intro:{color:"#ffffff"},card:{width:"100%",maxWidth:400}}},{withTheme:!0})(v)}}]);
//# sourceMappingURL=8.1fe329bf.chunk.js.map