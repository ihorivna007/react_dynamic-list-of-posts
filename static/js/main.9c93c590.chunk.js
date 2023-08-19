(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(2),i=c(1),r=c(3),l=c.n(r),o=(c(15),c(16),c(17),"https://mate.academy/students-api");function d(e){return new Promise((function(t){setTimeout(t,e)}))}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),d(300).then((function(){return fetch(o+e,n)})).then((function(e){return e.json()}))}var u=function(e){return j(e)},m=function(e,t){return j(e,"POST",t)},b=function(e){return j(e,"DELETE")},h=c(0),O={id:0,title:"",userId:0,body:""},x=function(e){var t=e.posts,c=e.onChange,n=Object(i.useState)(0),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(h.jsxs)("div",{"data-cy":"PostsList",children:[Object(h.jsx)("p",{className:"title",children:"Posts:"}),Object(h.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"has-background-link-light",children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.title,a=r===t;return Object(h.jsxs)("tr",{"data-cy":"Post",children:[Object(h.jsx)("td",{"data-cy":"PostId",children:t}),Object(h.jsx)("td",{"data-cy":"PostTitle",children:n}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button is-link",{"is-light":!a}),onClick:function(){return function(e){o(e.id),c(e)}(a?O:e)},children:a?"Close":"Open"})})]},t)}))})]})]})},f=c(10),N=c(4),p=(c(19),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),v=c(7),y={name:"",email:"",text:""},g=function(e){var t=e.addNewComment,c=Object(i.useState)(!0),n=Object(s.a)(c,2),a=n[0],r=n[1],o=Object(i.useState)(!0),d=Object(s.a)(o,2),j=d[0],u=d[1],m=Object(i.useState)(!0),b=Object(s.a)(m,2),O=b[0],x=b[1],f=Object(i.useState)(!1),p=Object(s.a)(f,2),g=p[0],C=p[1],S=Object(i.useState)(y),E=Object(s.a)(S,2),k=E[0],w=E[1],P=k.name,T=k.email,F=k.text,I=function(e){var t=e.target.name,c=e.target.value;w((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(v.a)({},t,c))}))};return Object(h.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),r(!!P),u(!!T),x(!!F),P&&T&&F&&(C(!0),t({name:P,email:T,body:F}).then((function(){return C(!1)})).finally((function(){return w((function(e){return Object(N.a)(Object(N.a)({},e),{},{text:""})}))})))},children:[Object(h.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":!a}),value:P,onChange:I}),Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-user"})}),!a&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!a&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(h.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":!j}),value:T,onChange:I}),Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-envelope"})}),!j&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!j&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(h.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("textarea",{id:"comment-body",name:"text",placeholder:"Type comment here",className:l()("textarea",{"is-danger":!O}),value:F,onChange:I})}),!O&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(h.jsxs)("div",{className:"field is-grouped",children:[Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"submit",className:l()("button is-link",{"is-loading":g}),children:"Add"})}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){w(y),r(!0),u(!0),x(!0)},children:"Clear"})})]})]})},C=function(e){var t=e.post,c=t.id,n=t.title,a=t.body,r=Object(i.useState)([]),l=Object(s.a)(r,2),o=l[0],d=l[1],j=Object(i.useState)(!1),O=Object(s.a)(j,2),x=O[0],v=O[1],y=Object(i.useState)(!1),C=Object(s.a)(y,2),S=C[0],E=C[1],k=Object(i.useState)(!1),w=Object(s.a)(k,2),P=w[0],T=w[1],F=!x&&!S&&!o.length,I=!x&&!S&&!P;Object(i.useEffect)((function(){var e;d([]),v(!0),E(!1),T(!1),(e=c,u("/comments?postId=".concat(e))).then((function(e){return d(e)})).catch((function(){return E(!0)})).finally((function(){return v(!1)}))}),[t]);var L=function(e){d((function(t){return t.filter((function(t){return t.id!==e}))})),b("/comments/".concat(e))};return Object(h.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(h.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(c,": ").concat(n)}),Object(h.jsx)("p",{"data-cy":"PostBody",children:a})]}),Object(h.jsxs)("div",{className:"block",children:[x&&Object(h.jsx)(p,{}),S&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),F&&Object(h.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),o.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"title is-4",children:"Comments:"}),o.map((function(e){var t=e.id,c=e.body,n=e.name,a=e.email;return Object(h.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(h.jsxs)("div",{className:"message-header",children:[Object(h.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:n}),Object(h.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return L(t)},children:"delete button"})]}),Object(h.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:c})]},t)}))]}),I&&Object(h.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return T(!0)},children:"Write a comment"})]}),P&&Object(h.jsx)(g,{addNewComment:function(e){return function(e){return m("/comments",e)}(Object(N.a)(Object(N.a)({},e),{},{postId:c})).then((function(e){d((function(t){return[].concat(Object(f.a)(t),[e])}))}))}})]})})},S=function(e){var t=e.users,c=e.onChange,n=Object(i.useState)(!1),a=Object(s.a)(n,2),r=a[0],o=a[1],d=Object(i.useState)("Choose a user"),j=Object(s.a)(d,2),u=j[0],m=j[1],b=Object(i.useRef)(null),O=function(){o((function(e){return!e}))},x=function(e){e.target!==b.current&&r&&o(!1)};return Object(i.useEffect)((function(){return document.addEventListener("click",x),function(){document.removeEventListener("click",x)}}),[r]),Object(h.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":r}),role:"presentation",children:[Object(h.jsx)("div",{className:"dropdown-trigger",children:Object(h.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:O,children:[Object(h.jsx)("span",{children:u}),Object(h.jsx)("span",{className:"icon is-small",children:Object(h.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(h.jsx)("div",{className:"dropdown-content",children:t.map((function(e){var t=e.id,n=e.name;return Object(h.jsx)("a",{href:"#user-".concat(t),className:l()("dropdown-item",{"is-active":n===u}),onClick:function(){return function(e){O(),m(e.name),c(e)}(e)},children:n},t)}))})})]})},E=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(null),r=Object(s.a)(a,2),o=r[0],d=r[1],j=Object(i.useState)(!1),m=Object(s.a)(j,2),b=m[0],O=m[1],f=Object(i.useState)(!1),N=Object(s.a)(f,2),v=N[0],y=N[1],g=o&&!b&&!v;Object(i.useEffect)((function(){u("/users").then((function(e){return n(e)})).catch((function(){return y(!0)}))}),[]);var E=Object(i.useState)([]),k=Object(s.a)(E,2),w=k[0],P=k[1],T=Object(i.useState)(null),F=Object(s.a)(T,2),I=F[0],L=F[1];return Object(i.useEffect)((function(){var e;(O(!0),y(!1),L(null),P([]),o)&&(e=o.id,u("/posts?userId=".concat(e))).then((function(e){return P(e)})).catch((function(){return y(!0)})).finally((function(){return O(!1)}))}),[o]),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"tile is-ancestor",children:[Object(h.jsx)("div",{className:"tile is-parent",children:Object(h.jsxs)("div",{className:"tile is-child box is-success",children:[Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(S,{users:c,onChange:function(e){return d(e)}})}),Object(h.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!o&&Object(h.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),o&&b&&Object(h.jsx)(p,{}),v&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),g&&0===w.length&&Object(h.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),w.length>0&&Object(h.jsx)(x,{posts:w,onChange:function(e){return L(e)}})]})]})}),Object(h.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":null===I||void 0===I?void 0:I.id}),children:(null===I||void 0===I?void 0:I.id)&&Object(h.jsx)("div",{className:"tile is-child box is-success ",children:Object(h.jsx)(C,{post:I})})})]})})})};a.a.render(Object(h.jsx)(E,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9c93c590.chunk.js.map