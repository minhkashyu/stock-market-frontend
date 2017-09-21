webpackJsonp([0],{"5x8n":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"black fluid centered raised card"},[s("div",{staticClass:"ui top attached label"},[t._v("Syncs in realtime across clients")]),t._v(" "),s("div",{staticClass:"content"},[s("form",{staticClass:"ui form",attrs:{novalidate:""},on:{submit:function(e){e.preventDefault(),t.addStock()}}},[s("div",{staticClass:"field"},[s("div",{staticClass:"ui action input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.stockCode,expression:"stockCode",modifiers:{trim:!0}}],attrs:{type:"text",name:"stockCode",placeholder:"Stock Code"},domProps:{value:t.stockCode},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.submit(e)},function(e){t.validateInput()}],input:function(e){e.target.composing||(t.stockCode=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t._m(0)]),t._v(" "),t.errRequired?s("div",{staticClass:"ui pointing red basic label"},[t._v("\n          "+t._s(t.errRequired)+"\n        ")]):t._e()])]),t._v(" "),t.errors.length>0?s("div",{staticClass:"ui error message"},[s("i",{staticClass:"close icon"}),t._v(" "),s("div",{staticClass:"header"},[t._v("Error(s):")]),t._v(" "),s("ul",{staticClass:"list"},t._l(t.errors,function(e){return s("li",[t._v(t._s(e))])}))]):t._e()])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"ui right labeled icon button",attrs:{type:"submit"}},[s("i",{staticClass:"plus icon"}),t._v("\n            Add\n          ")])}],a={render:i,staticRenderFns:n};e.a=a},"8YWl":function(t,e){},DyhX:function(t,e){},Fs8J:function(t,e,s){"use strict";var i=s("vcwk");e.a={name:"home",components:{formAddStock:i.a},data:function(){return{errors:[],stocks:[{id:1,title:"FB",name:"Facebook"},{id:2,title:"GGL",name:"Google"},{id:3,title:"B",name:"Barnes Group Inc. (B) Prices, Dividends, Splits and Trading Volume"},{id:4,title:"K",name:"Kellogg Co (K) Prices, Dividends, Splits and Trading Volume"}],nextStockId:5}},methods:{randomColor:function(t){return["pink","teal","yellow","violet","olive","orange","green","brown","blue","grey","purple","red"][t%12]},removeStock:function(t){this.stocks.splice(t,1)}}}},K91d:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},M93x:function(t,e,s){"use strict";function i(t){s("8YWl")}var n=s("xJD8"),a=s("K91d"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("M93x"),a=s("YaEn");i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:n.a}})},YaEn:function(t,e,s){"use strict";var i=s("7+uW"),n=s("/ocq"),a=s("lO7g");i.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:a.a},{path:"*",name:"Not Found",component:a.a}]})},iIdb:function(t,e,s){"use strict";e.a={name:"form-add-stock",props:{errors:Array,stocks:Array,nextStockId:Number},data:function(){return{stockCode:"",errRequired:"",mutableNextStockId:this.nextStockId}},methods:{validateInput:function(){this.stockCode?this.errRequired="":this.errRequired="Stock code cannot be empty."},addStock:function(){if(!this.stockCode)return void(this.errRequired="Stock code cannot be empty.");this.stocks.push({id:this.mutableNextStockId++,title:this.stockCode,name:"New Stock Prices, Dividends, Splits and Trading Volume"})}}}},lO7g:function(t,e,s){"use strict";function i(t){s("DyhX")}var n=s("Fs8J"),a=s("y77Y"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,"data-v-a7356e68",null);e.a=c.exports},vcwk:function(t,e,s){"use strict";var i=s("iIdb"),n=s("5x8n"),a=s("VU/8"),r=a(i.a,n.a,null,null,null);e.a=r.exports},xJD8:function(t,e,s){"use strict";e.a={name:"app"}},y77Y:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui centered grid container"},[s("h1",{staticClass:"ui center aligned header"},[t._v("Chart the Stock Market")]),t._v(" "),s("h4",{staticClass:"ui center aligned header"},[t._v("A Freecodecamp Full-Stack Project using Vue.js, Semantic UI with Google Material theme, Express.js, and MongoDB")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"sixteen wide column"},[s("div",{staticClass:"ui three stackable cards"},[t._l(t.stocks,function(e,i){return t.stocks.length>0?s("div",{key:e.id,staticClass:"fluid centered raised card",class:t.randomColor(i)},[s("div",{staticClass:"content"},[s("i",{staticClass:"right floated remove icon",on:{click:function(e){t.removeStock(i)}}}),t._v(" "),s("div",{staticClass:"header"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"description"},[s("p",[t._v(t._s(e.name))])])])]):t._e()}),t._v(" "),s("form-add-stock",{attrs:{stocks:t.stocks,nextStockId:t.nextStockId,errors:t.errors}})],2)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sixteen wide column"},[s("div",{attrs:{id:"curve_chart"}},[s("i",{staticClass:"massive line chart icon"})])])}],a={render:i,staticRenderFns:n};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.e260f1abdecef2d5f40d.js.map