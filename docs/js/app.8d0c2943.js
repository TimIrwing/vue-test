(function(t){function e(e){for(var r,i,a=e[0],c=e[1],u=e[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"28e0":function(t,e,n){t.exports=n.p+"img/blueSocks.93947685.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"product"},[n("div",{staticClass:"product-image"},[n("img",{attrs:{src:t.product.imageSrc,alt:"Socks"}})]),n("div",{staticClass:"product-info"},[n("h1",[t._v(" "+t._s(t.name)+" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.product.onSale,expression:"product.onSale"}],staticClass:"sale"},[t._v("On Sale!")])]),n("p",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory>25,expression:"inventory > 25"}]},[t._v(" In Stock ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=25&&t.inventory>0,expression:"inventory <= 25 && inventory > 0"}]},[t._v(" Almost sold out! ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=0,expression:"inventory <= 0"}]},[t._v(" Out of Stock ")])]),n("ul",t._l(t.details,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0),n("ul",{staticClass:"buttonList"},t._l(t.variants,(function(e,r){return n("li",{key:e.id},[n("label",{staticClass:"colorBtn",attrs:{"aria-label":e.color}},[n("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"color"},domProps:{checked:e.color===t.product.color},on:{change:function(e){return t.updateProduct(r)}}}),n("span",{staticClass:"colorBtn__inside",style:{"background-color":e.bgColor}})])])})),0),n("ul",{staticClass:"buttonList"},t._l(t.product.sizes,(function(e,r){return n("li",{key:r},[n("label",[n("input",{attrs:{type:"radio",name:"size"},domProps:{checked:t.size===r},on:{change:function(e){t.size=r}}}),t._v(" "+t._s(r)+" ")])])})),0),n("p",[t._v(t._s(t.modelCount)+" pieces available")]),n("button",{staticClass:"toCart",attrs:{disabled:!t.product.sizes[t.size]},on:{click:t.addToCart}},[t._v(" Add to Cart ")]),n("div",{staticClass:"cart"},[n("p",[t._v("Cart ("+t._s(t.cart.length)+")")])])])])])},s=[],i=(n("b64b"),n("b7f2")),a=n.n(i),c=n("28e0"),u=n.n(c),l={name:"App",components:{},data:function(){return{details:["80% cotton","20% polyester","Unisex"],name:"Socks",selected:0,size:"",variants:[{id:2234,color:"mint green",bgColor:"#359264",imageSrc:a.a,onSale:!0,sizes:{XS:0,S:3,M:7,L:4,XL:2}},{id:2235,color:"dark blue",bgColor:"#405267",imageSrc:u.a,onSale:!1,sizes:{XS:2,S:6,M:15,L:0,XL:9}}],cart:[]}},computed:{modelCount:function(){var t=this.product.sizes[this.size];return void 0!==t?t:this.inventory},product:function(){return this.variants[this.selected]},inventory:function(){var t=this;return Object.keys(this.product.sizes).reduce((function(e,n){return e+t.product.sizes[n]}),0)}},methods:{updateProduct:function(t){this.selected=t,this.size=""},addToCart:function(){this.cart.push(this.variants[this.selected])}}},p=l,d=(n("034f"),n("2877")),f=Object(d["a"])(p,o,s,!1,null,null,null),v=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){},b7f2:function(t,e,n){t.exports=n.p+"img/greenSocks.fcf06f2c.jpg"}});