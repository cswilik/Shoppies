(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(7),a=n.n(c),o=(n(12),n(6)),r=n(3),l=n(0);var m=function(){return Object(l.jsxs)("div",{className:"header-div",children:[Object(l.jsx)("h1",{className:"title-text",children:"The Shoppies"}),Object(l.jsxs)("p",{className:"title-sub-text",children:["Welcome to The Shoppies!",Object(l.jsx)("br",{})," Search for your favorite movies and nominate them to win an award!"]})]})};var u=function(e){var t=e.setMovies,n=Object(i.useState)(""),s=Object(r.a)(n,2),c=s[0],a=s[1];return Object(i.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=".concat("aa9ef830","&s=").concat(c)).then((function(e){return e.json()})).then((function(e){return function(e){if(void 0===e)return null;t(e)}(e.Search)}))}),[c]),Object(l.jsxs)("div",{className:"searchbar-div",children:[Object(l.jsx)("label",{className:"text",children:"Search Your Favorite Films "}),Object(l.jsx)("input",{className:"input-bar",type:"text",placeholder:"Search Film Title",value:c,onChange:function(e){return a(e.target.value)}})]})};var j=function(e){var t=e.movie,n=e.addNom,i=e.noms,s=i.find((function(e){return e.imdbID===t.imdbID}));return Object(l.jsxs)("div",{className:"movie-item-div",children:[Object(l.jsx)("img",{className:"movie-img",src:t.Poster,alt:"movie poster"}),Object(l.jsxs)("h5",{className:"movie-title",children:[t.Title," (",t.Year,")"]}),s||i.length>=5?Object(l.jsx)("button",{disabled:!0,children:"Nominate"}):Object(l.jsx)("button",{className:"button",onClick:function(e){!function(e){e.preventDefault(),n(t)}(e)},children:"Nominate"})]})};var d=function(e){var t=e.movies,n=e.addNom,i=e.noms,s=t.map((function(e){return Object(l.jsx)(j,{movie:e,addNom:n,noms:i},e.imdbID)}));return Object(l.jsx)("div",{className:"movies-div",children:s})};var b=function(e){var t=e.nom,n=e.deleteNom;return Object(l.jsxs)("div",{className:"movie-item-div",children:[Object(l.jsx)("img",{className:"movie-img",src:t.Poster,alt:"movie poster"}),Object(l.jsxs)("h6",{className:"text",children:[t.Title," (",t.Year,")"]}),Object(l.jsx)("button",{className:"button",onClick:function(){return n(t.imdbID)},children:"Remove Nomination"})]})};var h=function(e){var t=e.noms,n=e.deleteNom,i=t.map((function(e){return Object(l.jsx)(b,{nom:e,deleteNom:n},e.imdbID)}));return Object(l.jsx)("div",{className:"nom-div",children:i})};var v=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)([]),a=Object(r.a)(c,2),j=a[0],b=a[1];function v(e){b([].concat(Object(o.a)(j),[e])),localStorage.setItem("nominations",JSON.stringify([].concat(Object(o.a)(j),[e])))}return Object(i.useEffect)((function(){var e=localStorage.getItem("nominations");e&&b(JSON.parse(e))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsx)(u,{setMovies:s}),Object(l.jsx)("h3",{className:"curly-text-right",children:"Your Nominations:"}),Object(l.jsx)("h3",{className:"curly-text",children:"Select Your Nominations:"}),j.length>=5?Object(l.jsxs)("div",{className:"submit-div",children:[Object(l.jsx)("p",{children:"You cannot have more than 5 nominations! Please submit when you're ready!"}),Object(l.jsx)("button",{className:"button",onClick:function(e){return function(e){e.preventDefault(),alert("Thank you for submitting! Please stay tuned for The Shoppies Awards Ceremony in the near future!"),b([])}(e)},children:"Submit"})]}):null,n.length>0?Object(l.jsx)(d,{movies:n,addNom:v,noms:j}):Object(l.jsxs)("div",{className:"start-div",children:[Object(l.jsx)("span",{role:"img","aria-label":"sheep",className:"emoji",children:"\ud83c\udfc6"}),"Begin by searching your favorite films!",Object(l.jsx)("span",{role:"img","aria-label":"sheep",children:"\ud83c\udfc6"})]}),j.length>0?Object(l.jsx)(h,{noms:j,addNom:v,deleteNom:function(e){var t=j.filter((function(t){return t.imdbID!==e}));b(t),localStorage.setItem("nominations",JSON.stringify(t))}}):null]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.e20a6415.chunk.js.map