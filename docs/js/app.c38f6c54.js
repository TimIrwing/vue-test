(function(t){function e(e){for(var s,c,i=e[0],o=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,i=1;i<r.length;i++){var o=r[i];0!==n[o]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var s={},n={app:0},a=[];function c(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=s,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(r,s,function(e){return t[e]}.bind(null,s));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),n=r.n(s);n.a},"20fc":function(t,e,r){},"28e0":function(t,e,r){t.exports=r.p+"img/blueSocks.93947685.jpg"},"424c":function(t,e,r){"use strict";var s=r("7c1c"),n=r.n(s);n.a},4556:function(t,e,r){"use strict";var s=r("5c5f"),n=r.n(s);n.a},"47e4":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"nav"},[r("ul",{staticClass:"nav__content"},[t._m(0),r("li",[r("Cart",{attrs:{cart:t.cart}})],1)])]),r("Product",{attrs:{product:t.product},on:{"add-to-cart":t.pushToCart}})],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("h1",{staticClass:"title"},[t._v("Vue Socks")])])}],c=(r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"product"},[r("div",{staticClass:"product-image"},[r("img",{attrs:{src:t.current.imageSrc,alt:t.desc}})]),r("div",{staticClass:"product-info"},[r("h2",[t._v(" "+t._s(t.capitalize(t.current.name))+" ")]),r("h3",[r("span",{staticClass:"price",class:{price_inactive:t.current.price.sale},attrs:{"aria-label":"price"}},[t._v(" "+t._s(t.current.price.default)+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"price",attrs:{"aria-label":"price on sale"}},[t._v(" "+t._s(t.current.price.sale)+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.current.price.sale,expression:"current.price.sale"}],staticClass:"sale"},[t._v("On Sale!")])]),r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory>25,expression:"inventory > 25"}]},[t._v(" In Stock ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=25&&t.inventory>0,expression:"inventory <= 25 && inventory > 0"}]},[t._v(" Almost sold out! ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.inventory<=0,expression:"inventory <= 0"}]},[t._v(" Out of Stock ")])]),r("ul",t._l(t.product.details,(function(e){return r("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0),r("ul",{staticClass:"buttonList"},t._l(t.product.variants,(function(e,s){return r("li",{key:e.id},[r("SquareLabel",{attrs:{"aria-label":e.colorDesc}},[r("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"color"},domProps:{checked:0===s},on:{change:function(e){return t.updateProduct(s)}}}),r("span",{staticClass:"colorBtn__inside",style:{"background-color":e.bgColor}})])],1)})),0),r("ul",{staticClass:"buttonList"},t._l(t.product.defaultSizes,(function(e){return r("li",{key:e},[r("SquareLabel",{staticClass:"squareButton_small"},[r("input",{staticClass:"visuallyhidden",attrs:{type:"radio",name:"size",disabled:!t.current.sizes[e]||0===t.current.sizes[e]},domProps:{checked:t.size===e},on:{change:function(r){t.size=e}}}),r("span",{staticClass:"sizeBtn__text"},[t._v(t._s(e))])])],1)})),0),r("p",{staticClass:"itemsLeft",attrs:{role:"status","aria-live":"polite"}},[t._v(t._s(t.modelCount)+" pairs available")]),r("VueButton",{staticClass:"toCart",attrs:{disabled:!t.current.sizes[t.size]},on:{click:function(e){return t.$emit("add-to-cart",t.current,t.size)}}},[t._v(" Add to Cart ")])],1)])}),i=[],o=(r("99af"),r("b0c0"),r("b64b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"vueBtn",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),u=[],l={name:"VueButton"},p=l,d=(r("b970"),r("2877")),f=Object(d["a"])(p,o,u,!1,null,"38f96a5d",null),v=f.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",[t._t("default")],2)},_=[],b={name:"SquareLabel"},h=b,C=(r("424c"),Object(d["a"])(h,m,_,!1,null,"7a328e86",null)),y=C.exports,z=(r("fb6a"),function(t){return t?t[0].toUpperCase()+t.slice(1).toLowerCase():""}),S={name:"Product",components:{VueButton:v,SquareLabel:y},props:{product:{type:Object,required:!0}},data:function(){return{selected:0,size:null}},computed:{modelCount:function(){var t=this.current.sizes[this.size];return void 0===t?this.inventory:t},current:function(){return this.product.variants[this.selected]},inventory:function(){var t=this;return Object.keys(this.current.sizes).reduce((function(e,r){return e+t.current.sizes[r]}),0)},desc:function(){return"".concat(z(this.current.name)," - ").concat(z(this.current.colorDesc))}},methods:{capitalize:function(t){return z(t)},updateProduct:function(t){this.selected=t,this.size=null}}},j=S,g=(r("ea65"),Object(d["a"])(j,c,i,!1,null,"45e83bb6",null)),w=g.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("VueButton",{staticClass:"cartBtn",attrs:{type:"button","aria-controls":"cart"},on:{click:function(e){t.cartOpen=!t.cartOpen}}},[r("span",{staticClass:"cartBtn__textContainer"},[r("span",{staticClass:"cartBtn__text",attrs:{role:"status","aria-label":"total count","aria-live":"polite"}},[t._v(" "+t._s(t.totalCount)+" ")])]),r("svg",{staticClass:"cartBtn__icon",attrs:{"aria-label":"cart",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475.1 475.1"}},[r("path",{attrs:{d:"M365.4 402c0 10 3.6 18.7 10.8 25.8a35.2 35.2 0 0025.8 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7 35.2 35.2 0 00-25.8 10.7 35.2 35.2 0 00-10.8 25.8zM469.7 78.5a17.6 17.6 0 00-12.9-5.4H114l-1.3-7.3-1.5-8.4c-.4-2.1-1.1-4.6-2.2-7.6-1-3-2.3-5.3-3.7-7a18.2 18.2 0 00-13.8-6.3H18.3c-5 0-9.3 1.9-12.9 5.5C1.8 45.6 0 49.9 0 54.8S1.8 64 5.4 67.7c3.6 3.6 8 5.4 12.9 5.4h58.2L127 308l-5.8 10.8c-3.5 6.5-6.3 12.1-8.4 17-2.1 4.9-3.2 8.6-3.2 11.3 0 5 1.8 9.2 5.5 12.8 3.6 3.6 7.9 5.5 12.8 5.5H420.3c4.9 0 9.2-1.9 12.8-5.5 3.6-3.6 5.4-7.9 5.4-12.8 0-5-1.8-9.3-5.4-12.9a17.6 17.6 0 00-12.8-5.4H157.6a55.1 55.1 0 006.9-18.3c0-1.9-.3-4-.8-6.2l-1.7-7.6-1.3-6.2 298.1-34.8c4.8-.6 8.7-2.6 11.7-6.1a18 18 0 004.6-12.2V91.4c0-5-1.8-9.3-5.4-12.9zM109.6 402c0 10 3.6 18.7 10.7 25.8a35.2 35.2 0 0025.9 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7c-10.1 0-18.7 3.5-25.9 10.7a35.2 35.2 0 00-10.7 25.8z"}})])]),r("transition",{attrs:{name:"appear"}},[r("form",{directives:[{name:"show",rawName:"v-show",value:t.cartOpen,expression:"cartOpen"}],staticClass:"cartList__container",attrs:{id:"cart"},on:{submit:function(t){t.preventDefault()}}},[r("ul",{staticClass:"cartList",attrs:{"aria-live":"polite",role:"region"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:t.cartEmpty,expression:"cartEmpty"}],staticClass:"cartList__empty"},[t._v("Cart is empty")]),t._l(t.cart,(function(e,s){return[void 0!==e.obj?r("li",{key:s,staticClass:"cartList__item"},[r("CartItem",{attrs:{product:e},on:{close:function(e){return t.$delete(t.cart,e)}}}),r("div",{staticClass:"cartList__delimiter"})],1):t._e()]}))],2),r("VueButton",{directives:[{name:"show",rawName:"v-show",value:!t.cartEmpty,expression:"!cartEmpty"}],staticClass:"toCheckout"},[t._v("Proceed to Checkout")])],1)])],1)},k=[],x=(r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("div",{staticClass:"product__content"},[r("img",{staticClass:"product__img",attrs:{src:t.obj.imageSrc,alt:t.desc}}),r("div",{staticClass:"product__info"},[r("p",{staticClass:"product__desc"},[t._v(t._s(t.desc))]),r("ul",{staticClass:"sizeList"},[t._l(t.product.selectedSizes,(function(e,s){return[t.product.selectedSizes[s]?r("li",{staticClass:"sizeList__item"},[r("label",{staticClass:"sizeList__label",attrs:{for:t.obj.id+"."+s}},[r("span",{staticClass:"sizeList__text"},[t._v(t._s(s))]),r("VueButton",{staticClass:"sizeList__decrement",attrs:{type:"button","aria-label":"decrement item quantity"},on:{click:function(e){return t.addToSize(s,-1)}}}),r("SizeInput",{attrs:{name:t.obj.id+"."+s,id:t.obj.id+"."+s,min:"0",max:t.obj.sizes[s]||0},on:{input:function(e){return t.format(s)}},model:{value:t.product.selectedSizes[s],callback:function(e){t.$set(t.product.selectedSizes,s,e)},expression:"product.selectedSizes[size]"}}),r("VueButton",{staticClass:"sizeList__increment",attrs:{type:"button","aria-label":"increment item quantity"},on:{click:function(e){return t.addToSize(s,1)}}}),r("span",{staticClass:"sizeList__availability"},[t._v(" "+t._s(t.obj.sizes[s])+" items available ")])],1)]):t._e()]}))],2)])]),r("button",{staticClass:"closeBtn",attrs:{type:"button","aria-label":"delete this item from the cart"},on:{click:function(e){return t.$emit("close",t.obj.id)}}},[t._v("✖")])])}),L=[],$=(r("4fad"),r("e587")),B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("input",{staticClass:"sizeInput",attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},E=[],P={name:"SizeInput",props:["value"]},V=P,q=(r("f965"),Object(d["a"])(V,B,E,!1,null,"2704ae80",null)),I=q.exports,M={name:"CartItem",components:{SizeInput:I,VueButton:v},props:{product:{type:Object,required:!0}},computed:{obj:function(){return this.product.obj},desc:function(){return"".concat(z(this.obj.name)," - ").concat(z(this.obj.colorDesc))}},beforeUpdate:function(){var t=Object.entries(this.product.selectedSizes).some((function(t){var e=Object($["a"])(t,2),r=e[1];return r}));t||this.$emit("close",this.obj.id)},methods:{format:function(t){var e=this.obj.sizes[t],r=this.product.selectedSizes;r[t]<0?r[t]=0:r[t]>e&&("string"===typeof r[t]?setTimeout((function(){r[t]=e}),0):r[t]=e)},addToSize:function(t,e){this.product.selectedSizes[t]+=e,this.format(t)}}},N=M,T=(r("cee6"),Object(d["a"])(N,x,L,!1,null,"e3972490",null)),X=T.exports,D={name:"Cart",components:{VueButton:v,CartItem:X},props:{cart:{type:Object,required:!0}},data:function(){return{cartOpen:!1}},computed:{totalCount:function(){var t=this,e=0;return Object.keys(this.cart).forEach((function(r){var s=t.cart[r].selectedSizes;e+=Object.keys(s).reduce((function(t,e){return t+Number(s[e])}),0)})),e},cartEmpty:function(){return!Object.keys(this.cart).length}}},H=D,A=(r("4556"),Object(d["a"])(H,O,k,!1,null,"ccec98f0",null)),U=A.exports,J=r("b7f2"),F=r.n(J),G=r("28e0"),K=r.n(G),Q={name:"App",components:{Cart:U,Product:w},data:function(){return{cart:{},product:{defaultSizes:["XS","S","M","L","XL","XXL"],details:["80% cotton","20% polyester","Unisex"],variants:[{id:2234,name:"Socks",colorDesc:"mint green",bgColor:"#359264",imageSrc:F.a,price:{default:"$4.99",sale:"$2.99"},sizes:{XS:13,L:1,XL:4}},{id:2235,name:"Socks",colorDesc:"dark blue",bgColor:"#405267",imageSrc:K.a,price:{default:"$4.99"},sizes:{XS:16,S:6,M:4,XL:12}}]}}},created:function(){this.product.variants.forEach((function(t){var e=t.imageSrc,r=new Image;r.src=e}))},methods:{pushToCart:function(t,e){var r=this.cart[t.id];if(void 0===r){var s={};this.product.defaultSizes.forEach((function(t){s[t]=t===e?1:0})),this.$set(this.cart,t.id,{obj:t,selectedSizes:s})}else this.incrementCart(t.id,e)},incrementCart:function(t,e){var r=this.cart[t].obj.sizes[e],s=this.cart[t].selectedSizes;s[e]<r&&(s[e]+=1)}}},R=Q,W=(r("034f"),Object(d["a"])(R,n,a,!1,null,null,null)),Y=W.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Y)}}).$mount("#app")},"5c5f":function(t,e,r){},"7c1c":function(t,e,r){},"85ec":function(t,e,r){},b7f2:function(t,e,r){t.exports=r.p+"img/greenSocks.fcf06f2c.jpg"},b970:function(t,e,r){"use strict";var s=r("ddc1"),n=r.n(s);n.a},cee6:function(t,e,r){"use strict";var s=r("fccc"),n=r.n(s);n.a},ddc1:function(t,e,r){},ea65:function(t,e,r){"use strict";var s=r("47e4"),n=r.n(s);n.a},f965:function(t,e,r){"use strict";var s=r("20fc"),n=r.n(s);n.a},fccc:function(t,e,r){}});