(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"28e0":function(t,e,n){t.exports=n.p+"img/blueSocks.93947685.jpg"},"560a":function(t,e,n){"use strict";var r=n("b955"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"nav-bar"}),n("Product",{attrs:{product:t.product}})],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"product"},[n("div",{staticClass:"product-image"},[n("img",{attrs:{src:t.current.imageSrc,alt:"Socks"}})]),n("div",{staticClass:"product-info"},[n("h1",[t._v(" "+t._s(t.product.name)+" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.current.onSale,expression:"current.onSale"}],staticClass:"sale"},[t._v("On Sale!")])]),n("p",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory>25,expression:"inventory > 25"}]},[t._v(" In Stock ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=25&&t.inventory>0,expression:"inventory <= 25 && inventory > 0"}]},[t._v(" Almost sold out! ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=0,expression:"inventory <= 0"}]},[t._v(" Out of Stock ")])]),n("ul",t._l(t.product.details,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0),n("ul",{staticClass:"buttonList"},t._l(t.product.variants,(function(e,r){return n("li",{key:e.id},[n("label",{staticClass:"squareButton",attrs:{"aria-label":e.colorDesc}},[n("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"color"},domProps:{checked:0===r},on:{change:function(e){return t.updateProduct(r)}}}),n("span",{staticClass:"colorBtn__inside",style:{"background-color":e.bgColor}})])])})),0),n("ul",{staticClass:"buttonList"},t._l(t.current.sizes,(function(e,r){return n("li",{key:r},[n("label",{staticClass:"squareButton squareButton_small"},[n("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"size"},domProps:{checked:t.size===r},on:{change:function(e){t.size=r}}}),n("span",{staticClass:"sizeBtn__text"},[t._v(t._s(r))])])])})),0),n("p",{staticClass:"itemsLeft"},[t._v(t._s(t.modelCount)+" pieces available")]),n("button",{staticClass:"toCart",attrs:{disabled:!t.current.sizes[t.size]}},[t._v(" Add to Cart ")])])])},i=[],c=(n("b64b"),{name:"Product",props:{product:{type:Object,required:!0}},data:function(){return{selected:0,size:""}},computed:{modelCount:function(){var t=this.current.sizes[this.size];return void 0!==t?t:this.inventory},current:function(){return this.product.variants[this.selected]},inventory:function(){var t=this;return Object.keys(this.current.sizes).reduce((function(e,n){return e+t.current.sizes[n]}),0)}},methods:{updateProduct:function(t){this.selected=t,this.size=""}}}),u=c,l=(n("560a"),n("2877")),p=Object(l["a"])(u,a,i,!1,null,"a6ba22e8",null),d=p.exports,f=n("b7f2"),v=n.n(f),b=n("28e0"),h=n.n(b),m={name:"App",components:{Product:d},data:function(){return{product:{name:"Socks",details:["80% cotton","20% polyester","Unisex"],variants:[{id:2234,colorDesc:"mint green",bgColor:"#359264",imageSrc:v.a,onSale:!0,sizes:{XS:0,S:3,M:7,L:4,XL:2}},{id:2235,colorDesc:"dark blue",bgColor:"#405267",imageSrc:h.a,onSale:!1,sizes:{XS:2,S:6,M:15,L:0,XL:9}}]}}}},y=m,_=(n("034f"),Object(l["a"])(y,s,o,!1,null,null,null)),g=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,n){},b7f2:function(t,e,n){t.exports=n.p+"img/greenSocks.fcf06f2c.jpg"},b955:function(t,e,n){}});