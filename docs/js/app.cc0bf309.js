(function(t){function e(e){for(var a,i,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==r[o]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"28e0":function(t,e,s){t.exports=s.p+"img/blueSocks.93947685.jpg"},4421:function(t,e,s){"use strict";var a=s("7f05"),r=s.n(a);r.a},"44a6":function(t,e,s){},4718:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"nav"},[s("ul",{staticClass:"nav__content"},[t._m(0),s("li",[s("Cart",{attrs:{cart:t.cart}})],1)])]),s("Product",{attrs:{product:t.product},on:{"add-to-cart":t.pushToCart}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("h1",{staticClass:"title"},[t._v("Vue Socks")])])}],i=(s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"product"},[s("div",{staticClass:"product-image"},[s("img",{attrs:{src:t.current.imageSrc,alt:t.desc}})]),s("div",{staticClass:"product-info"},[s("h2",[t._v(" "+t._s(t.capitalize(t.current.name))+" ")]),s("h3",[s("span",{staticClass:"price",class:{price_inactive:t.current.price.sale},attrs:{"aria-label":"price"}},[t._v(" "+t._s(t.current.price.default)+" ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"price",attrs:{"aria-label":"price on sale"}},[t._v(" "+t._s(t.current.price.sale)+" ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"sale"},[t._v("On Sale!")])]),s("p",[s("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory>25,expression:"inventory > 25"}]},[t._v(" In Stock ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=25&&t.inventory>0,expression:"inventory <= 25 && inventory > 0"}]},[t._v(" Almost sold out! ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=0,expression:"inventory <= 0"}]},[t._v(" Out of Stock ")])]),s("ul",t._l(t.product.details,(function(e){return s("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0),s("ul",{staticClass:"buttonList"},t._l(t.product.variants,(function(e,a){return s("li",{key:e.id},[s("label",{staticClass:"squareButton",attrs:{"aria-label":e.colorDesc}},[s("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"color"},domProps:{checked:0===a},on:{change:function(e){return t.updateProduct(a)}}}),s("span",{staticClass:"colorBtn__inside",style:{"background-color":e.bgColor}})])])})),0),s("ul",{staticClass:"buttonList"},t._l(t.product.defaultSizes,(function(e){return s("li",{key:e},[s("label",{staticClass:"squareButton squareButton_small"},[s("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"size",disabled:!t.current.sizes[e]||0===t.current.sizes[e]},domProps:{checked:t.size===e},on:{change:function(s){t.size=e}}}),s("span",{staticClass:"sizeBtn__text"},[t._v(t._s(e))])])])})),0),s("p",{staticClass:"itemsLeft",attrs:{role:"status","aria-live":"polite"}},[t._v(t._s(t.modelCount)+" pairs available")]),s("button",{staticClass:"toCart",attrs:{disabled:!t.current.sizes[t.size]},on:{click:function(e){return t.$emit("add-to-cart",t.current,t.size)}}},[t._v(" Add to Cart ")])])])}),c=[],o=(s("99af"),s("b0c0"),s("b64b"),s("fb6a"),function(t){return t?t[0].toUpperCase()+t.slice(1).toLowerCase():""}),l={name:"Product",props:{product:{type:Object,required:!0}},data:function(){return{selected:0,size:null}},computed:{modelCount:function(){var t=this.current.sizes[this.size];return void 0===t?this.inventory:t},current:function(){return this.product.variants[this.selected]},inventory:function(){var t=this;return Object.keys(this.current.sizes).reduce((function(e,s){return e+t.current.sizes[s]}),0)},desc:function(){return"".concat(o(this.current.name)," - ").concat(o(this.current.colorDesc))}},methods:{capitalize:function(t){return o(t)},updateProduct:function(t){this.selected=t,this.size=null}}},u=l,p=(s("aacb"),s("2877")),d=Object(p["a"])(u,i,c,!1,null,"62ae21dc",null),v=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart"},[s("button",{staticClass:"cartBtn",attrs:{type:"button","aria-controls":"cart"},on:{click:function(e){t.cartOpen=!t.cartOpen}}},[s("span",{staticClass:"cartBtn__textContainer"},[s("span",{staticClass:"cartBtn__text",attrs:{role:"status","aria-label":"total count","aria-live":"polite"}},[t._v(" "+t._s(t.totalCount)+" ")])]),s("svg",{staticClass:"cartBtn__icon",attrs:{"aria-label":"cart",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475.1 475.1"}},[s("path",{attrs:{d:"M365.4 402c0 10 3.6 18.7 10.8 25.8a35.2 35.2 0 0025.8 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7 35.2 35.2 0 00-25.8 10.7 35.2 35.2 0 00-10.8 25.8zM469.7 78.5a17.6 17.6 0 00-12.9-5.4H114l-1.3-7.3-1.5-8.4c-.4-2.1-1.1-4.6-2.2-7.6-1-3-2.3-5.3-3.7-7a18.2 18.2 0 00-13.8-6.3H18.3c-5 0-9.3 1.9-12.9 5.5C1.8 45.6 0 49.9 0 54.8S1.8 64 5.4 67.7c3.6 3.6 8 5.4 12.9 5.4h58.2L127 308l-5.8 10.8c-3.5 6.5-6.3 12.1-8.4 17-2.1 4.9-3.2 8.6-3.2 11.3 0 5 1.8 9.2 5.5 12.8 3.6 3.6 7.9 5.5 12.8 5.5H420.3c4.9 0 9.2-1.9 12.8-5.5 3.6-3.6 5.4-7.9 5.4-12.8 0-5-1.8-9.3-5.4-12.9a17.6 17.6 0 00-12.8-5.4H157.6a55.1 55.1 0 006.9-18.3c0-1.9-.3-4-.8-6.2l-1.7-7.6-1.3-6.2 298.1-34.8c4.8-.6 8.7-2.6 11.7-6.1a18 18 0 004.6-12.2V91.4c0-5-1.8-9.3-5.4-12.9zM109.6 402c0 10 3.6 18.7 10.7 25.8a35.2 35.2 0 0025.9 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7c-10.1 0-18.7 3.5-25.9 10.7a35.2 35.2 0 00-10.7 25.8z"}})])]),s("transition",{attrs:{name:"appear"}},[s("form",{directives:[{name:"show",rawName:"v-show",value:t.cartOpen,expression:"cartOpen"}],staticClass:"cartList__container",attrs:{id:"cart"},on:{submit:function(t){t.preventDefault()}}},[s("ul",{staticClass:"cartList",attrs:{"aria-live":"polite",role:"region"}},[s("li",{directives:[{name:"show",rawName:"v-show",value:t.cartEmpty,expression:"cartEmpty"}],staticClass:"cartList__empty"},[t._v("Cart is empty")]),t._l(t.cart,(function(e,a){return[void 0!==e.obj?s("li",{key:a,staticClass:"cartList__item"},[s("CartItem",{attrs:{product:e},on:{close:function(e){return t.$delete(t.cart,e)}}}),s("div",{staticClass:"cartList__delimiter"})],1):t._e()]}))],2),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.cartEmpty,expression:"!cartEmpty"}],staticClass:"toCheckout"},[t._v("Proceed to Checkout")])])])],1)},m=[],_=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product"},[s("div",{staticClass:"product__content"},[s("img",{staticClass:"product__img",attrs:{src:t.obj.imageSrc,alt:t.desc}}),s("div",{staticClass:"product__info"},[s("p",{staticClass:"product__desc"},[t._v(t._s(t.desc))]),s("ul",{staticClass:"sizeList"},t._l(t.product.selectedSizes,(function(e,a){return s("li",{staticClass:"sizeList__item"},[s("label",{staticClass:"sizeList__label"},[s("span",{staticClass:"sizeList__text"},[t._v(t._s(a))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.selectedSizes[a],expression:"product.selectedSizes[size]"}],staticClass:"sizeList__input",attrs:{type:"number",name:t.obj.id+"."+a,disabled:!t.sizeAvailable(a),min:"0",max:t.obj.sizes[a]||0},domProps:{value:t.product.selectedSizes[a]},on:{blur:function(e){return t.format(a)},input:function(e){e.target.composing||t.$set(t.product.selectedSizes,a,e.target.value)}}}),t.sizeAvailable(a)?s("span",{staticClass:"sizeList__availability"},[t._v(" "+t._s(t.obj.sizes[a])+" items available ")]):s("span",{staticClass:"sizeList__availability"},[t._v(" Currently unavailable ")])])])})),0)])]),s("button",{staticClass:"closeBtn",attrs:{type:"button","aria-label":"delete this item from the cart"},on:{click:function(e){return t.$emit("close",t.obj.id)}}},[t._v("✖")])])}),b=[],h={name:"CartItem",props:{product:{type:Object,required:!0}},computed:{obj:function(){return this.product.obj},desc:function(){return"".concat(o(this.obj.name)," - ").concat(o(this.obj.colorDesc))}},methods:{sizeAvailable:function(t){return!!this.obj.sizes[t]},format:function(t){var e=this.obj.sizes[t],s=this.product.selectedSizes;s[t]<0?s[t]=0:s[t]>e&&(s[t]=e)}}},C=h,y=(s("4421"),Object(p["a"])(C,_,b,!1,null,"02d93e3f",null)),z=y.exports,w={name:"Cart",components:{CartItem:z},props:{cart:{type:Object,required:!0}},data:function(){return{cartOpen:!1}},computed:{totalCount:function(){var t=this,e=0;return Object.keys(this.cart).forEach((function(s){var a=t.cart[s].selectedSizes;e+=Object.keys(a).reduce((function(t,e){return t+Number(a[e])}),0)})),e},cartEmpty:function(){return!Object.keys(this.cart).length}}},g=w,j=(s("7d5c"),Object(p["a"])(g,f,m,!1,null,"5223ad86",null)),S=j.exports,x=s("b7f2"),O=s.n(x),k=s("28e0"),L=s.n(k),P={name:"App",components:{Cart:S,Product:v},data:function(){return{cart:{},product:{defaultSizes:["XS","S","M","L","XL","XXL"],details:["80% cotton","20% polyester","Unisex"],variants:[{id:2234,name:"Socks",colorDesc:"mint green",bgColor:"#359264",imageSrc:O.a,price:{default:"$4.99",sale:"$2.99"},sizes:{XS:13,L:1,XL:4}},{id:2235,name:"Socks",colorDesc:"dark blue",bgColor:"#405267",imageSrc:L.a,price:{default:"$4.99"},sizes:{XS:16,S:6,M:4,XL:12}}]}}},methods:{pushToCart:function(t,e){var s=this.cart[t.id];if(void 0===s){var a={};this.product.defaultSizes.forEach((function(t){a[t]=t===e?1:0})),this.$set(this.cart,t.id,{obj:t,selectedSizes:a})}else this.incrementCart(t.id,e)},incrementCart:function(t,e){var s=this.cart[t].obj.sizes[e],a=this.cart[t].selectedSizes;a[e]<s&&(a[e]+=1)}}},$=P,E=(s("034f"),Object(p["a"])($,r,n,!1,null,null,null)),B=E.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(B)}}).$mount("#app")},"7d5c":function(t,e,s){"use strict";var a=s("44a6"),r=s.n(a);r.a},"7f05":function(t,e,s){},"85ec":function(t,e,s){},aacb:function(t,e,s){"use strict";var a=s("4718"),r=s.n(a);r.a},b7f2:function(t,e,s){t.exports=s.p+"img/greenSocks.fcf06f2c.jpg"}});