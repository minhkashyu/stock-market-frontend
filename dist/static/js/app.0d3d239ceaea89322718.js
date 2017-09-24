webpackJsonp([1],{"+14J":function(t,e){},"+ScO":function(t,e,i){"use strict";var n=new Date;e.a={name:"site-footer",data:function(){return{dtYear:n.getFullYear()}}}},0:function(t,e){},"5x8n":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"black fluid centered raised card"},[i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[t._v("Syncs in realtime across clients")]),t._v(" "),i("div",{staticClass:"description"},[i("form",{staticClass:"ui form",attrs:{novalidate:""},on:{submit:function(e){e.preventDefault(),t.addStock()}}},[i("div",{staticClass:"field"},[i("div",{staticClass:"ui fluid action input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.tickerSymbol,expression:"tickerSymbol",modifiers:{trim:!0}}],attrs:{type:"text",name:"tickerSymbol",placeholder:"Ticker Symbol"},domProps:{value:t.tickerSymbol},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.submit(e)},function(e){t.validateInput()}],input:function(e){e.target.composing||(t.tickerSymbol=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t._m(0)]),t._v(" "),t.errRequired?i("div",{staticClass:"ui pointing red basic label"},[t._v("\n          "+t._s(t.errRequired)+"\n        ")]):t._e()])])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"ui right labeled icon button",attrs:{type:"submit"}},[i("i",{staticClass:"plus icon"}),t._v("\n            Add\n          ")])}],a={render:n,staticRenderFns:s};e.a=a},"8YWl":function(t,e){},DyhX:function(t,e){},Fs8J:function(t,e,i){"use strict";var n=i("vcwk"),s=i("uDM0");e.a={name:"home",components:{formAddStock:n.a,siteChart:s.a},data:function(){return{stocks:[],isConnected:!1}},sockets:{connect:function(){this.isConnected=!0},disconnect:function(){this.isConnected=!1},getStocks:function(t){this.stocks=t},added:function(t){this.stocks.push(t)},deleted:function(t){this.stocks=this.stocks.filter(function(e){return e._id!==t._id})}},methods:{randomColor:function(t){return["pink","teal","yellow","violet","olive","orange","green","brown","blue","grey","purple","red"][t%12]},removeStock:function(t,e){this.stocks.splice(t,1),this.$socket.emit("deleteStock",e)}}}},K91d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view"),t._v(" "),i("site-footer")],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},M93x:function(t,e,i){"use strict";function n(t){i("8YWl")}var s=i("xJD8"),a=i("K91d"),r=i("VU/8"),c=n,o=r(s.a,a.a,c,null,null);e.a=o.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s=i("M93x"),a=i("YaEn"),r=i("hMcO"),c=i.n(r),o=i("DmT9"),u=i.n(o),l=i("B+1z"),d=i.n(l),f=i("tZw+"),m=i.n(f);n.a.config.productionTip=!1;var v=u()("https://mks-stock-market-api.herokuapp.com");n.a.use(c.a,v),n.a.use(m.a,{Chartkick:d.a}),new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},NwRh:function(t,e,i){"use strict";e.a={name:"site-chart",data:function(){return{chartData:[["Jan",4],["Feb",2],["Mar",10],["Apr",5],["May",3]]}}}},YaEn:function(t,e,i){"use strict";var n=i("7+uW"),s=i("/ocq"),a=i("lO7g");n.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:a.a},{path:"*",name:"Not Found",component:a.a}]})},Zcmo:function(t,e,i){"use strict";function n(t){i("+14J")}var s=i("+ScO"),a=i("kA9f"),r=i("VU/8"),c=n,o=r(s.a,a.a,c,"data-v-e82c267c",null);e.a=o.exports},iIdb:function(t,e,i){"use strict";e.a={name:"form-add-stock",props:{stocks:Array},data:function(){return{tickerSymbol:"",errRequired:""}},sockets:{socketError:function(t){this.errRequired=t}},methods:{validateInput:function(){this.tickerSymbol?this.errRequired="":this.errRequired="Ticker symbol cannot be empty."},addStock:function(){if(!this.tickerSymbol)return void(this.errRequired="Ticker symbol cannot be empty.");this.$socket.emit("addStock",this.tickerSymbol),this.tickerSymbol=""}}}},itde:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"curve_chart"}},[i("line-chart",{attrs:{data:t.chartData,title:"STOCKS on NASDAQ",xtitle:"Date",ytitle:"Value"}})],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},kA9f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui fluid container site-footer"},[i("p",[t._v("Copyright © "+t._s(t.dtYear)+" "),i("a",{attrs:{href:"http://minhta.com.au",title:"Home"}},[t._v("Minh Ta")]),t._v(". All Rights Reserved.")])])},s=[],a={render:n,staticRenderFns:s};e.a=a},lO7g:function(t,e,i){"use strict";function n(t){i("DyhX")}var s=i("Fs8J"),a=i("y77Y"),r=i("VU/8"),c=n,o=r(s.a,a.a,c,"data-v-a7356e68",null);e.a=o.exports},uDM0:function(t,e,i){"use strict";var n=i("NwRh"),s=i("itde"),a=i("VU/8"),r=a(n.a,s.a,null,null,null);e.a=r.exports},vcwk:function(t,e,i){"use strict";var n=i("iIdb"),s=i("5x8n"),a=i("VU/8"),r=a(n.a,s.a,null,null,null);e.a=r.exports},xJD8:function(t,e,i){"use strict";var n=i("Zcmo");e.a={name:"app",components:{siteFooter:n.a}}},y77Y:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui centered grid container"},[i("h1",{staticClass:"ui center aligned header"},[t._v("Chart the Stock Market")]),t._v(" "),i("h4",{staticClass:"ui center aligned header"},[t._v("A Freecodecamp Full-Stack Project using Vue.js, Semantic UI with Google Material theme, Express.js, Socket.IO, and MongoDB")]),t._v(" "),i("div",{staticClass:"sixteen wide column"},[i("site-chart")],1),t._v(" "),i("div",{staticClass:"sixteen wide column"},[i("div",{staticClass:"ui three stackable cards"},[t._l(t.stocks,function(e,n){return t.stocks.length>0?i("div",{key:e._id,staticClass:"fluid centered raised card",class:t.randomColor(n)},[i("div",{staticClass:"content"},[i("i",{staticClass:"right floated remove icon",on:{click:function(i){t.removeStock(n,e._id)}}}),t._v(" "),i("div",{staticClass:"header"},[t._v(t._s(e.symbol))]),t._v(" "),i("div",{staticClass:"description"},[i("p",[t._v(t._s(e.name))])])])]):t._e()}),t._v(" "),i("form-add-stock",{attrs:{stocks:t.stocks}})],2)])])},s=[],a={render:n,staticRenderFns:s};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.0d3d239ceaea89322718.js.map