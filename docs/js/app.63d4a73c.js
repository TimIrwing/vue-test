(function(t){function e(e){for(var n,c,i=e[0],o=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},s=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"28e0":function(t,e,r){t.exports=r.p+"img/blueSocks.93947685.jpg"},"3ddf":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"nav"},[r("ul",{staticClass:"nav__content"},[t._m(0),r("li",[r("Cart",{attrs:{cart:t.cart}})],1)])]),r("Product",{attrs:{product:t.product},on:{"add-to-cart":t.pushToCart}})],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("h1",{staticClass:"title"},[t._v("Vue Socks")])])}],c=r("2fa7"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"product"},[r("div",{staticClass:"product-image"},[r("img",{attrs:{src:t.current.imageSrc,alt:t.desc}})]),r("div",{staticClass:"product-info"},[r("h2",[t._v(" "+t._s(t.capitalize(t.current.name))+" ")]),r("h3",[r("span",{staticClass:"price",class:{price_inactive:t.current.price.sale},attrs:{"aria-label":"price"}},[t._v(" "+t._s(t.current.price.default)+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"price",attrs:{"aria-label":"price on sale"}},[t._v(" "+t._s(t.current.price.sale)+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"sale"},[t._v("On Sale!")])]),r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory>25,expression:"inventory > 25"}]},[t._v(" In Stock ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=25&&t.inventory>0,expression:"inventory <= 25 && inventory > 0"}]},[t._v(" Almost sold out! ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=0,expression:"inventory <= 0"}]},[t._v(" Out of Stock ")])]),r("ul",t._l(t.product.details,(function(e){return r("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0),r("ul",{staticClass:"buttonList"},t._l(t.product.variants,(function(e,n){return r("li",{key:e.id},[r("label",{staticClass:"squareButton",attrs:{"aria-label":e.colorDesc}},[r("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"color"},domProps:{checked:0===n},on:{change:function(e){return t.updateProduct(n)}}}),r("span",{staticClass:"colorBtn__inside",style:{"background-color":e.bgColor}})])])})),0),r("ul",{staticClass:"buttonList"},t._l(t.current.sizes,(function(e,n){return r("li",{key:n},[r("label",{staticClass:"squareButton squareButton_small"},[r("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"size",disabled:0===t.current.sizes[n]},domProps:{checked:t.size===n},on:{change:function(e){t.size=n}}}),r("span",{staticClass:"sizeBtn__text"},[t._v(t._s(n))])])])})),0),r("p",{staticClass:"itemsLeft",attrs:{role:"status","aria-live":"polite"}},[t._v(t._s(t.modelCount)+" pairs available")]),r("button",{staticClass:"toCart",attrs:{disabled:!t.current.sizes[t.size]},on:{click:function(e){return t.$emit("add-to-cart",t.current,t.size)}}},[t._v(" Add to Cart ")])])])},o=[],u=(r("99af"),r("b0c0"),r("b64b"),r("fb6a"),function(t){return t?t[0].toUpperCase()+t.slice(1).toLowerCase():""}),l={name:"Product",props:{product:{type:Object,required:!0}},data:function(){return{selected:0,size:null}},computed:{modelCount:function(){var t=this.current.sizes[this.size];return void 0===t?this.inventory:t},current:function(){return this.product.variants[this.selected]},inventory:function(){var t=this;return Object.keys(this.current.sizes).reduce((function(e,r){return e+t.current.sizes[r]}),0)},desc:function(){return"".concat(u(this.current.name)," - ").concat(u(this.current.colorDesc))}},methods:{capitalize:function(t){return u(t)},updateProduct:function(t){this.selected=t,this.size=null}}},p=l,d=(r("9f8c"),r("2877")),f=Object(d["a"])(p,i,o,!1,null,"6686842e",null),v=f.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("button",{staticClass:"cartBtn",attrs:{type:"button"},on:{click:function(e){t.cartOpen=!t.cartOpen}}},[r("span",{staticClass:"cartBtn__textContainer"},[r("span",{staticClass:"cartBtn__text",attrs:{"aria-label":"total count"}},[t._v(t._s(t.totalCount))])]),r("svg",{staticClass:"cartBtn__icon",attrs:{"aria-label":"cart",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475.1 475.1"}},[r("path",{attrs:{d:"M365.4 402c0 10 3.6 18.7 10.8 25.8a35.2 35.2 0 0025.8 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7 35.2 35.2 0 00-25.8 10.7 35.2 35.2 0 00-10.8 25.8zM469.7 78.5a17.6 17.6 0 00-12.9-5.4H114l-1.3-7.3-1.5-8.4c-.4-2.1-1.1-4.6-2.2-7.6-1-3-2.3-5.3-3.7-7a18.2 18.2 0 00-13.8-6.3H18.3c-5 0-9.3 1.9-12.9 5.5C1.8 45.6 0 49.9 0 54.8S1.8 64 5.4 67.7c3.6 3.6 8 5.4 12.9 5.4h58.2L127 308l-5.8 10.8c-3.5 6.5-6.3 12.1-8.4 17-2.1 4.9-3.2 8.6-3.2 11.3 0 5 1.8 9.2 5.5 12.8 3.6 3.6 7.9 5.5 12.8 5.5H420.3c4.9 0 9.2-1.9 12.8-5.5 3.6-3.6 5.4-7.9 5.4-12.8 0-5-1.8-9.3-5.4-12.9a17.6 17.6 0 00-12.8-5.4H157.6a55.1 55.1 0 006.9-18.3c0-1.9-.3-4-.8-6.2l-1.7-7.6-1.3-6.2 298.1-34.8c4.8-.6 8.7-2.6 11.7-6.1a18 18 0 004.6-12.2V91.4c0-5-1.8-9.3-5.4-12.9zM109.6 402c0 10 3.6 18.7 10.7 25.8a35.2 35.2 0 0025.9 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7c-10.1 0-18.7 3.5-25.9 10.7a35.2 35.2 0 00-10.7 25.8z"}})])]),r("transition",{attrs:{name:"appear"}},[r("ul",{directives:[{name:"show",rawName:"v-show",value:t.cartOpen,expression:"cartOpen"}],staticClass:"cartList"},[t._l(t.cart,(function(e,n){return[void 0!==e.obj?r("li",{key:n,staticClass:"cartList__item"},[r("CartItem",{attrs:{product:e},on:{close:function(e){t.cart[e]={}}}}),r("div",{staticClass:"cartList__delimiter"})],1):t._e()]}))],2)])],1)},h=[],m=(r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("img",{staticClass:"product__img",attrs:{src:t.obj.imageSrc,alt:t.desc}}),r("p",{staticClass:"product__info"},[t._v(t._s(t.desc))]),r("button",{staticClass:"closeBtn",attrs:{type:"button","aria-label":"close"},on:{click:function(e){return t.$emit("close",t.obj.id)}}})])}),_=[],C={name:"CartItem",props:{product:{type:Object,required:!0}},computed:{obj:function(){return this.product.obj},desc:function(){return"".concat(u(this.obj.name)," - ").concat(u(this.obj.colorDesc))}}},y=C,g=(r("e06e"),Object(d["a"])(y,m,_,!1,null,"cca145bc",null)),w=g.exports,j={name:"Cart",components:{CartItem:w},props:{cart:{type:Object,required:!0}},data:function(){return{cartOpen:!1}},computed:{totalCount:function(){var t=this,e=0;return Object.keys(this.cart).forEach((function(r){if(void 0!==t.cart[r].obj){var n=t.cart[r].selectedSizes;e+=Object.keys(n).reduce((function(t,e){return t+n[e]}),0)}})),e}}},O=j,z=(r("adec"),Object(d["a"])(O,b,h,!1,null,"2a560006",null)),S=z.exports,k=r("b7f2"),x=r.n(k),P=r("28e0"),$=r.n(P),L={name:"App",components:{Cart:S,Product:v},data:function(){return{cart:{},product:{details:["80% cotton","20% polyester","Unisex"],variants:[{id:2234,name:"Socks",colorDesc:"mint green",bgColor:"#359264",imageSrc:x.a,price:{default:"$4.99",sale:"$2.99"},sizes:{XS:13,S:0,M:0,L:1,XL:4}},{id:2235,name:"Socks",colorDesc:"dark blue",bgColor:"#405267",imageSrc:$.a,price:{default:"$4.99"},sizes:{XS:16,S:6,M:4,L:0,XL:12}}]}}},methods:{pushToCart:function(t,e){var r=this.cart[t.id];void 0===r||void 0===r.obj?this.$set(this.cart,t.id,{obj:t,selectedSizes:Object(c["a"])({},e,1)}):this.incrementCart(t.id,e)},incrementCart:function(t,e){var r=this.cart[t].obj.sizes[e],n=this.cart[t].selectedSizes;n[e]?n[e]<r&&(n[e]+=1):this.$set(n,e,1)}}},B=L,M=(r("034f"),Object(d["a"])(B,a,s,!1,null,null,null)),q=M.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,r){},"9f8c":function(t,e,r){"use strict";var n=r("eeb5"),a=r.n(n);a.a},adec:function(t,e,r){"use strict";var n=r("d30b"),a=r.n(n);a.a},b7f2:function(t,e,r){t.exports=r.p+"img/greenSocks.fcf06f2c.jpg"},d30b:function(t,e,r){},e06e:function(t,e,r){"use strict";var n=r("3ddf"),a=r.n(n);a.a},eeb5:function(t,e,r){}});