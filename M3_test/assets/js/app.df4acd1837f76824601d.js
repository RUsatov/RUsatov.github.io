!function(e){function t(t){for(var r,s,a=t[0],p=t[1],l=t[2],c=0,f=[];c<a.length;c++)s=a[c],i[s]&&f.push(i[s][0]),i[s]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var p=n[a];0!==i[p]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={0:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=p;o.push([5,1]),n()}([function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},,,,,function(e,t,n){"use strict";n.r(t);n(6),n(7);window.Vue=n(10),Vue.component("example-component",n(19).default);new Vue({el:"#app"})},function(e,t){},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("swiper",{ref:"mySwiper",staticClass:"preview",attrs:{options:this.swiperOption}},[t("swiper-slide",{staticClass:"preview-slide preview-slide-1"},[t("img",{attrs:{src:"/assets/img/preview.png",alt:""}}),this._v("\n      Slide 1\n    ")]),this._v(" "),t("swiper-slide",{staticClass:"preview-slide preview-slide-1"},[t("img",{attrs:{src:"/assets/img/preview.png",alt:""}}),this._v("\nSlide 2\n    ")]),this._v(" "),t("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)};r._withStripped=!0;n(14);var i=n(3),o={components:{swiper:i.swiper,swiperSlide:i.swiperSlide},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"}}}},created:function(){},methods:{}},s=(n(17),n(4)),a=Object(s.a)(o,r,[],!1,null,"220f7e6a",null);a.options.__file="src/components/Example.vue";t.default=a.exports}]);