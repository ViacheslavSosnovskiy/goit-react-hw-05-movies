(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{49:function(t,e,n){"use strict";n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return b})),n.d(e,"c",(function(){return v})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return x}));var c=n(57),r=n.n(c),a=n(58),o=n(59),s=n.n(o),i="42d598709b0517212023a74116f4ecb9",u="https://api.themoviedb.org/3",p="/trending/movie/week",l="/search/movie";function h(t){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u).concat(p,"?api_key=").concat(i,"&page=").concat(e));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function b(t,e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(r.a.mark((function t(e,n){var c,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u).concat(l,"?api_key=").concat(i,"&page=").concat(n,"&query=").concat(e));case 3:return c=t.sent,a=c.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function v(t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"movie/").concat(e,"?api_key=").concat(i));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function O(t){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(i));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return(g=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(i,"&page=1"));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},96:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var c=n(50),r=n(0),a=n(3),o=n(49),s=n(9),i=n(1);function u(t){var e=t.movie,n=Object(a.i)().url,c=Object(a.g)(),r=Object(a.f)(),o=e.title,u=e.release_date,p=e.vote_average,l=e.poster_path,h=e.overview,j="https://image.tmdb.org/t/p/w200"+l;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{tupe:"button",onClick:function(){var t,e;r.push(null!==(t=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies")},children:"Back"}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:j,alt:o})}),Object(i.jsxs)("div",{children:[o&&Object(i.jsx)("h2",{children:o}),u&&Object(i.jsx)("p",{children:u}),p&&Object(i.jsx)("p",{children:p}),h&&Object(i.jsx)("p",{children:h})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.b,{to:{pathname:"".concat(n,"/cast"),state:{from:c.state?c.state.from:"/"}},children:"Cast"}),Object(i.jsx)(s.b,{to:{pathname:"".concat(n,"/reviews"),state:{from:c.state?c.state.from:"/"}},children:"Reviews"})]})]})}var p=n(13),l=n.n(p),h=(n(18),Object(r.lazy)((function(){return n.e(1).then(n.bind(null,93))}))),j=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,94))}));function b(){var t=Object(r.useState)(null),e=Object(c.a)(t,2),n=e[0],s=e[1],p=Object(r.useState)("idle"),b=Object(c.a)(p,2),d=b[0],v=b[1],f=Object(a.i)(),O=Object(a.i)().path,m=f.params.movieId;console.log("match.params",f.params),Object(r.useEffect)((function(){x()}),[]);var x=function(){v("pending"),o.c(m).then((function(t){s(t)})),v("resolved")};return Object(i.jsxs)(i.Fragment,{children:["pending"===d&&Object(i.jsx)(l.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3}),n&&Object(i.jsx)(u,{movie:n}),Object(i.jsx)("hr",{}),Object(i.jsxs)(r.Suspense,{fallback:Object(i.jsx)(l.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3}),children:[Object(i.jsx)(a.b,{exact:!0,path:"".concat(O,"/cast"),children:n&&Object(i.jsx)(h,{})}),Object(i.jsx)(a.b,{exact:!0,path:"".concat(O,"/reviews"),children:n&&Object(i.jsx)(j,{})})]})]})}}}]);
//# sourceMappingURL=movieDetails-page.3e0476e1.chunk.js.map