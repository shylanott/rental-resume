(this["webpackJsonpsimple-react-app"]=this["webpackJsonpsimple-react-app"]||[]).push([[0],{110:function(e,t,a){e.exports=a(252)},252:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),s=a.n(l),c=a(4),i=a(32),o=a(10),m=a(11),u=a(12),p=a(13),h=a(34),d=(n.Component,a(77),a(23)),g=a.n(d),E=a(31),v=a.n(E),b=a(24),y=a.n(b),f=a(21),_=a.n(f),N=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement("section",{className:"page"},r.a.createElement("div",{className:"page__header"},r.a.createElement("div",{className:"page__header__container"},r.a.createElement("h1",{className:"page__title"},"Applicant"))),r.a.createElement(g.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Enter User Details"}),r.a.createElement(y.a,{hintText:"Enter your first name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter your last name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter your email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(_.a,{label:"Continue",primary:!0,style:x.button,onClick:this.continue}))))}}]),a}(n.Component),x={button:{margin:25}},C=N,k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement("section",{className:"page"},r.a.createElement("div",{className:"page__header"},r.a.createElement("div",{className:"page__header__container"},r.a.createElement("h1",{className:"page__title"},"Applicant"))),r.a.createElement(g.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Enter Personal Details"}),r.a.createElement(y.a,{hintText:"Enter your occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter your city",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(y.a,{hintText:"Enter your bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(_.a,{label:"Continue",primary:!0,style:S.button,onClick:this.continue}),r.a.createElement(_.a,{label:"Back",primary:!1,style:S.button,onClick:this.back}))))}}]),a}(n.Component),S={button:{margin:15}},O=k,j=a(107),T=a.n(j),w=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;e.toggleHeader,T()({select:!0,"select--state":!0});return r.a.createElement("section",{className:"page"},r.a.createElement("div",{className:"page__header"},r.a.createElement("div",{className:"page__header__container"},r.a.createElement("h1",{className:"page__title"},"Rental History"),r.a.createElement("p",{className:"page__subtitle"},"Now let's outline a history of your recent places of residence. This doesn't have to be extensive but be sure to include at least two or three."))),r.a.createElement(g.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"Enter Rental History Details"}),r.a.createElement("li",{id:"rent",className:"fieldset fieldset--rent"},r.a.createElement("input",{className:"input input--street",name:"address-line1",autoComplete:"shipping address-line1",placeholder:"Street Address*",type:"text",onChange:a("address1"),value:t.address1}),r.a.createElement("input",{className:"input input--apartment",name:"address-line2",autoComplete:"shipping address-line2",placeholder:"Apt #",type:"text",onChange:a("address2"),value:t.address2}),r.a.createElement("input",{className:"input input--city",name:"address-level2",autoComplete:"shipping address-level2",placeholder:"City*",type:"text",onChange:a("city"),value:t.city}),r.a.createElement("input",Object(h.a)({className:"input input--start-date",name:"start-date",placeholder:"Move In Date*",type:"text",value:t.dateStart,onChange:a("dateStart")},"value",t.dateStart)),r.a.createElement("input",{className:"input input--end-date",name:"end-date",placeholder:"Move Out Date*",type:"text",onChange:a("dateEnd"),value:t.dateEnd}),r.a.createElement("textarea",Object(h.a)({className:"textarea textarea--reason",name:"leaving-reason",placeholder:"Reason For Leaving",type:"text",value:t.reason,onChange:a("reason")},"value",t.reason))),r.a.createElement("br",null),r.a.createElement(_.a,{label:"Continue",primary:!0,style:L.button,onClick:this.continue}),r.a.createElement(_.a,{label:"Back",primary:!1,style:L.button,onClick:this.back}))))}}]),a}(n.Component),L={button:{margin:15}},H=w,I=a(19),R=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,s=e.city,c=e.bio,i=e.address1,o=e.address2,m=e.dateStart,u=e.dateEnd,p=e.reason;return r.a.createElement("section",{className:"page"},r.a.createElement("div",{className:"resume"},r.a.createElement("div",{className:"resume__container"},r.a.createElement("header",{className:"resume__header"},r.a.createElement("h1",{className:"resume__title"},"Rental Resume")),r.a.createElement(g.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"resume__subtitle"},"User Details")),r.a.createElement(I.List,null,r.a.createElement(I.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement(I.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement(I.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement("div",null,r.a.createElement("h2",{className:"resume__subtitle"},"Personal Details")),r.a.createElement(I.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement(I.ListItem,{primaryText:"City",secondaryText:s}),r.a.createElement(I.ListItem,{primaryText:"Bio",secondaryText:c}),r.a.createElement("div",null,r.a.createElement("h2",{className:"resume__subtitle"},"Rental History"),r.a.createElement("ul",{className:"rental-list"},r.a.createElement(I.ListItem,{primaryText:"Street Address",secondaryText:i}),r.a.createElement(I.ListItem,{primaryText:"Address 2",secondaryText:o}),r.a.createElement(I.ListItem,{primaryText:"Date Start",secondaryText:m}),r.a.createElement(I.ListItem,{primaryText:"Date End",secondaryText:u}),r.a.createElement(I.ListItem,{primaryText:"Reason For Leaving",secondaryText:p})))),r.a.createElement("br",null),r.a.createElement(_.a,{label:"Confirm & Continue",primary:!0,style:A.button,onClick:this.continue}),r.a.createElement(_.a,{label:"Back",primary:!1,style:A.button,onClick:this.back}))))))}}]),a}(n.Component),A={button:{margin:15}},D=R,M=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"page"},r.a.createElement("div",{className:"page__header"},r.a.createElement("div",{className:"page__header__container"},r.a.createElement("h1",{className:"page__title"},"Success"))),r.a.createElement(g.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Thank you for your submission."))))}}]),a}(n.Component),B=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:"",address1:"",address2:"",dateStart:"",dateEnd:"",reason:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(h.a)({},t,a.target.value))}},e}return Object(m.a)(a,[{key:"toggleMenu",value:function(){document.getElementById("app").classList.toggle("toggle--active")}},{key:"toggleHeader",value:function(){document.getElementById("app").classList.toggle("btn--header--active")}},{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio,address1:t.address1,address2:t.address2,dateStart:t.dateStart,reason:t.reason};switch(e){case 1:return r.a.createElement(i.a,{path:"/applicant"},r.a.createElement(C,Object.assign({},this.props,{nextStep:this.nextStep,handleChange:this.handleChange,values:a,toggleHeader:this.toggleHeader})));case 2:return r.a.createElement(i.a,{path:"/applicant"},r.a.createElement(O,Object.assign({},this.setState,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a,toggleHeader:this.toggleHeader})));case 3:return r.a.createElement(i.a,{path:"/applicant"},r.a.createElement(H,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a,toggleHeader:this.toggleHeader}));case 4:return r.a.createElement(i.a,{path:"/applicant"},r.a.createElement(D,{nextStep:this.nextStep,prevStep:this.prevStep,values:a,people:this.state.people,FormRentalHistory:this.state.rentalHistory,toggleHeader:this.toggleHeader,printResume:this.printResume}));case 5:return r.a.createElement(M,null)}}}]),a}(n.Component),F=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"home__text"},r.a.createElement("h2",{className:"home__text__title"},"From San Diego to New York City, create a rental resume that sets you apart."),r.a.createElement(c.b,{to:"/about",className:"btn btn--learn-more"},"About"),r.a.createElement(c.b,{to:"/applicant",className:"btn btn--get-started"},"Get Started"))))}}]),a}(n.Component);var V=function(e){var t=e.toggleMenu,a=e.closeMenu;return r.a.createElement("header",{className:"header"},r.a.createElement(c.b,{className:"logo--mobile",to:"/",onClick:a},"Rental Resume"),r.a.createElement("button",{className:"toggle",onClick:t},r.a.createElement("span",{className:"toggle__bars"})),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement(c.b,{to:"/",className:"logo",onClick:a},r.a.createElement("h1",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M14.341 3.579c-.347-.473-.831-1.027-1.362-1.558S11.894 1.006 11.421.659C10.615.068 10.224 0 10 0H2.25C1.561 0 1 .561 1 1.25v13.5c0 .689.561 1.25 1.25 1.25h11.5c.689 0 1.25-.561 1.25-1.25V5c0-.224-.068-.615-.659-1.421zm-2.07-.85c.48.48.856.912 1.134 1.271h-2.406V1.595c.359.278.792.654 1.271 1.134zM14 14.75c0 .136-.114.25-.25.25H2.25a.253.253 0 0 1-.25-.25V1.25c0-.135.115-.25.25-.25H10v3.5a.5.5 0 0 0 .5.5H14v9.75z"}),r.a.createElement("path",{d:"M11.5 13h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-2h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-2h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"})),r.a.createElement("div",null,"Rental",r.a.createElement("br",null),"Resume"))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/applicant",title:"Applicant",className:"btn--nav",activeClassName:"btn--nav--active"},r.a.createElement("span",{className:"btn--nav__lines"}),"Applicant")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/applicant",title:"preview",className:"btn--preview"},r.a.createElement("svg",{width:"1024",height:"1024",viewBox:"0 0 1024 1024"},r.a.createElement("path",{d:"M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"})),"Confirm")))))};var z=function(){return r.a.createElement("section",{className:"page"},r.a.createElement("div",{className:"page__header"},r.a.createElement("div",{className:"page__header__container"},r.a.createElement("h1",{className:"page__title"},"About"))),r.a.createElement("ul",{className:"faq"},r.a.createElement("li",null,r.a.createElement("span",{className:"faq__question"},"What is a rental resume?"),r.a.createElement("p",null,"A rental resume is a document intended to market yourself to a potential landlord. Much like a traditional resume it is a high level view of your background and positive characteristics. With city living on the rise there has never been a better time to create a rental resume to land the apartment of your dreams.")),r.a.createElement("li",null,r.a.createElement("span",{className:"faq__question"},"Is any of my information stored?"),r.a.createElement("p",null,"Unlike other online generators, there is absolutely no hidden agenda here. There are no logins or ads and most importantly your information is never sent to or stored on a server. For your convenience, your resume data is saved to your browser's local storage.")),r.a.createElement("li",null,r.a.createElement("span",{className:"faq__question"},"More info"),r.a.createElement("p",null,"This website was inspired by the original work of "," ",r.a.createElement(c.b,{to:"https://chrisheninger.com/",target:"_blank",rel:"noopener noreferrer"},"Chris Heninger")," ","and"," ",r.a.createElement(c.b,{to:"http://ryanwiemer.com/",target:"_blank",rel:"noopener noreferrer"},"Ryan Weimer")," ","as a foundation to learn React and bootstrapping with the Create React App. This project is currently in progress while I learn to build a multi-step form in React. If you have a great idea for a new feature or something to make it better I would love to hear from you. Feel free to email me directly at "," ",r.a.createElement(c.b,{to:"mailto:shyla.nott@gmail.com",target:"_blank",rel:"noopener noreferrer"}," ","shyla.nott@gmail.com"),".")),r.a.createElement(c.b,{to:"/applicant",title:"Applicant",className:"page__link page__link--about"},"Get Started")))},q=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"toggleMenu",value:function(){document.getElementById("app").classList.toggle("toggle--active")}},{key:"toggleHeader",value:function(){document.getElementById("app").classList.toggle("btn--header--active")}},{key:"closeMenu",value:function(){document.getElementById("app").classList.remove("toggle--active")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"/"!==this.props.location.pathname?r.a.createElement(V,Object.assign({},this.props,{generateResumeLink:this.generateResumeLink,printResume:this.printResume,toggleMenu:this.toggleMenu})):null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:F}),r.a.createElement(i.a,{path:"/about"},r.a.createElement(z,Object.assign({},this.props,{toggleHeader:this.toggleHeader}))),r.a.createElement(B,null),r.a.createElement(i.a,{path:"/confirm"},r.a.createElement(D,this.props))))}}]),a}(n.Component),U=r.a.createElement(c.a,null,r.a.createElement(i.a,{component:q}));s.a.render(U,document.getElementById("root"))},77:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.63e271d8.chunk.js.map