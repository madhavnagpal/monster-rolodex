(this["webpackJsonpmonster-roll-app"]=this["webpackJsonpmonster-roll-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(0));var d=function(e){var t=e.monster;return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:"monster"}),Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("p",{children:t.email})]})};n(15);var j=function(e){var t=e.monsters;return Object(u.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})};n(16);var m=function(e){var t=e.placeholder,n=e.value,r=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",value:n,placeholder:t,onChange:r})},f=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleSearchTextChange=function(t){e.setState({searchText:t.target.value})},e.state={monsters:[],searchText:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchText,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monster Rollodex"}),Object(u.jsx)(m,{placeholder:"search monster",value:this.state.searchText,handleChange:this.handleSearchTextChange}),Object(u.jsx)(j,{monsters:r})]})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.60093798.chunk.js.map