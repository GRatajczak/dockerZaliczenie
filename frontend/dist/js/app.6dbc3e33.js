(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ec5":function(e,t,n){},"1d5a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BaseHeader"),n("router-view"),n("BaseFooter")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav"},[e._m(0),n("router-link",{attrs:{to:{name:"Notes"}}},[e._v("Lista")])],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"brand"},[r("img",{attrs:{alt:"Docker Notes",src:n("cf05")}}),e._v(" DockerNotes ")])}],i={name:"Header"},u=i,l=(n("a008"),n("2877")),p=Object(l["a"])(u,c,s,!1,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v(" © 2021 Grzegorz Ratajczak, Przemysław Kolczyński, Marcin Górski ")])])}],h={},m=h,g=(n("ae3f"),Object(l["a"])(m,d,v,!1,null,null,null)),b=g.exports,_={name:"App",components:{BaseHeader:f,BaseFooter:b}},w=_,x=(n("5c0b"),Object(l["a"])(w,o,a,!1,null,null,null)),y=x.exports,j=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("MainArea")],1)},k=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"notes-list"},[n("h1",[e._v("Notatki")]),e.notes.length?n("ol",e._l(e.notes,(function(t,r){return n("li",{key:r},[n("router-link",{attrs:{to:{name:"SingleNote",params:{id:t._id}}}},[e._v(" "+e._s(t.title)+" "),n("b",[e._v(" | otwórz ")])]),n("b",{on:{click:function(n){return e.deleteNote(t._id)}}},[e._v("| usuń")])],1)})),0):n("p",[e._v("Brak notatek.")])]),n("div",{staticClass:"inputs"},[n("h2",[e._v("Dodaj nową notatkę")]),n("div",{staticClass:"inputs-inner"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"}],attrs:{placeholder:"Tytuł"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.author,expression:"note.author"}],attrs:{placeholder:"Autor"},domProps:{value:e.note.author},on:{input:function(t){t.target.composing||e.$set(e.note,"author",t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.text,expression:"note.text"}],attrs:{placeholder:"Treść",rows:"5"},domProps:{value:e.note.text},on:{input:function(t){t.target.composing||e.$set(e.note,"text",t.target.value)}}})]),n("button",{on:{click:e.addNote}},[e._v("Dodaj +")])])])])},P=[],$=(n("99af"),n("d3b7"),n("96cf"),n("1da1")),E={data:function(){return{notes:[],note:{title:"",author:"",text:""}}},created:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getNotes();case 2:case"end":return t.stop()}}),t)})))()},methods:{getNotes:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:3001/api","/notes"));case 2:return n=t.sent,t.next=5,n.json();case 5:e.notes=t.sent;case 6:case"end":return t.stop()}}),t)})))()},addNote:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:3001/api","/notes"),{method:"POST",body:JSON.stringify(e.note),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:for(n in e.getNotes(),e.note)console.log(n),e.note[n]="";case 4:case"end":return t.stop()}}),t)})))()},deleteNote:function(e){var t=this;return Object($["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("http://localhost:3001/api","/notes/").concat(e),{method:"DELETE"});case 2:t.getNotes();case 3:case"end":return n.stop()}}),n)})))()}}},R=E,S=(n("b612"),Object(l["a"])(R,N,P,!1,null,null,null)),C=S.exports,T={components:{MainArea:C},name:"Home"},M=T,z=Object(l["a"])(M,O,k,!1,null,null,null),B=z.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note"},[n("h1",[e._v(e._s(e.note.title)+" "),n("span",[e._v("by "+e._s(e.note.author))])]),n("p",[e._v(" "+e._s(e.note.text)+" ")])])},A=[],H={name:"SingleNote",props:{id:{type:String,required:!0}},data:function(){return{note:{}}},created:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:3001/api","/notes/").concat(e.id));case 2:return n=t.sent,t.next=5,n.json();case 5:e.note=t.sent[0];case 6:case"end":return t.stop()}}),t)})))()}},F=H,J=(n("8b64"),Object(l["a"])(F,D,A,!1,null,"1e736e04",null)),G=J.exports;r["a"].use(j["a"]);var L=[{path:"/",name:"Notes",component:B},{path:"/note/:id",name:"SingleNote",props:!0,component:G}],q=new j["a"]({mode:"history",base:"/",routes:L}),K=q;r["a"].config.productionTip=!1,new r["a"]({router:K,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},8871:function(e,t,n){},"8b64":function(e,t,n){"use strict";n("a84c")},"9c0c":function(e,t,n){},a008:function(e,t,n){"use strict";n("8871")},a84c:function(e,t,n){},ae3f:function(e,t,n){"use strict";n("1d5a")},b612:function(e,t,n){"use strict";n("0ec5")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.6dbc3e33.js.map