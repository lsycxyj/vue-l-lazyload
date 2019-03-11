!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-l-lazyload"]=e():t["vue-l-lazyload"]=e()}(window,function(){return function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COMP_ERR=e.COMP_LOADED=e.COMP_LOADING=e.COMP_NOT_LOAD=void 0;var r,o=n(14),i=(r=o)&&r.__esModule?r:{default:r},a=n(9);var c=e.COMP_NOT_LOAD=0,u=e.COMP_LOADING=1,s=e.COMP_LOADED=2,l=e.COMP_ERR=-1;e.default={name:"LazyComp",props:{tag:{type:String,default:"div"},opts:{type:Object},stat:{type:Number,default:c}},data:function(){return{COMP_NOT_LOAD:c,COMP_LOADING:u,COMP_LOADED:s,COMP_ERR:l}},components:{InViewComp:i.default},computed:{cClass:function(){var t={},e=this.cOpts;switch(this.stat){case u:t[e.classCompLoading]=!0;break;case s:t[e.classCompLoaded]=!0;break;case l:t[e.classCompErr]=!0;break;case c:default:t[e.classCompNotLoad]=!0}return t},cOpts:function(){return Object.assign({classCompNotLoad:"comp-stat-not-load",classCompLoading:"comp-stat-loading",classCompErr:"comp-stat-err",classCompLoaded:"comp-stat-loaded"},this.opts)}},watch:{stat:function(t){var e=this;switch(t){case u:e.setLoaderLoading();break;case l:e.setLoaderLoadErr();break;case s:e.setLoaderLoaded();break;case c:default:e.resetLoaderLoad()}}},methods:{c:function(){return this.$refs.c},setLoaderLoading:function(){var t=this.c().$lazy;t&&(t.stat=a.STAT_LOADING)},setLoaderLoadErr:function(){var t=this.c().$lazy;t&&(t.stat=a.STAT_LOADED)},setLoaderLoaded:function(){var t=this.c(),e=t.$lazy,n=t.endCheck;e&&(e.stat=a.STAT_LOADED,n())},resetLoaderLoad:function(){var t=this.c().$lazy;t&&(t.stat=a.STAT_NOT_LOAD)}}}},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(26),i=(r=o)&&r.__esModule?r:{default:r},a=n(8);e.default={name:"InViewComp",props:{tag:{type:String,default:"div"},opts:{type:Object}},mounted:function(){var t=this.opts,e=Object.assign({},t),n={endCheck:this.endCheck},r=e.onInView;e.loadHandler=r?function(){r(n)}:i.default,(n.$lazy=this.$lazy=new((0,a.getLazyLoader)())(Object.assign({el:this.$el},e))).check()},destroyed:function(){this.endCheck()},methods:{endCheck:function(){var t=this.$lazy;t&&(t.destroy(),this.$lazy=null)}}}},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("in-view-comp",{ref:"c",class:t.cClass,attrs:{tag:t.tag,opts:t.cOpts}},[t.stat===t.COMP_NOT_LOAD?t._t("not-load"):t.stat===t.COMP_LOADING?t._t("loading"):t.stat===t.COMP_ERR?t._t("err"):t._t("default")],2)},o=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component"},[this._t("default")],2)},o=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueLLazyloadLocal=e.VueLLazyload=e.LazyComp=e.InViewComp=e.Lazy=e.LazyRef=e.COMP_ERR=e.COMP_LOADED=e.COMP_LOADING=e.COMP_NOT_LOAD=e.STAT_LOADED=e.STAT_LOADING=e.STAT_NOT_LOAD=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r=n(9);Object.defineProperty(e,"STAT_NOT_LOAD",{enumerable:!0,get:function(){return r.STAT_NOT_LOAD}}),Object.defineProperty(e,"STAT_LOADING",{enumerable:!0,get:function(){return r.STAT_LOADING}}),Object.defineProperty(e,"STAT_LOADED",{enumerable:!0,get:function(){return r.STAT_LOADED}});var o=n(25);Object.defineProperty(e,"COMP_NOT_LOAD",{enumerable:!0,get:function(){return o.COMP_NOT_LOAD}}),Object.defineProperty(e,"COMP_LOADING",{enumerable:!0,get:function(){return o.COMP_LOADING}}),Object.defineProperty(e,"COMP_LOADED",{enumerable:!0,get:function(){return o.COMP_LOADED}}),Object.defineProperty(e,"COMP_ERR",{enumerable:!0,get:function(){return o.COMP_ERR}}),e.getLazyLoader=function(){return f};var l=n(13),i=c(o),a=c(n(14));function c(t){return t&&t.__esModule?t:{default:t}}
/**
 * @license
 * vue-l-lazyload
 *
 * Copyright (c) 2017 - NOW Light Leung
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */var f=void 0;var u=e.LazyRef={props:{tag:{type:String,default:"div"},opts:{type:Object,default:function(){return{}}}},render:function(t){return t(this.tag,this.$slots.default)},mounted:function(){var t=this.$el;this.$lazy=new f(s({},this.opts,{el:t})),this.check()},destroyed:function(){this.$lazy.destroy()},methods:{check:function(){this.$lazy.check()},add:function(t){this.$lazy.addChild(t)},update:function(t){this.$lazy.update(t)},rm:function(t){this.$lazy.rmChild(t)}}},d=e.Lazy={bind:function(o,t,i){var a=t.value;(0,l.isStr)(a)&&(a={src:a}),i._lazyBound=!0;var c=i.context,u=a.ref;c.$nextTick(function(){var t,e=void 0;if(i._lazyBound){u&&((e=c.$refs[u])||(t='ref "'+u+'" not found',console.log("v-l-lazyload: "+t)));var n=s({},a,{el:o}),r=e&&e.$lazy;void 0!==r&&(n.parent=r),(i._$lazy=new f(n)).check()}})},componentUpdated:function(t,e,n,r){var o=e.value,i=e.oldValue,a=(0,l.isStr)(o)?o:o.src,c=(0,l.isStr)(i)?i:i.src;if(n!==r&&(n._lazyBound=r._lazyBound,n._$lazy=r._$lazy),a!=c){var u=n._$lazy;u&&u.update({src:a})}},unbind:function(t,e,n){n._lazyBound&&(n._lazyBound=!1),n.context.$nextTick(function(){var t=n._$lazy;t&&(t.destroy(),n._$lazy=null)})}};e.InViewComp=a.default,e.LazyComp=i.default,e.VueLLazyload={install:function(t,e){var n=s({regGlobal:!0},e);new(f=(0,r.LazyClass)(t))(s({},e,{isRoot:!0})),n.regGlobal&&(t.directive("lazy",d),t.component("lazy-ref",u))}},e.VueLLazyloadLocal={install:function(t,e){new(f=(0,r.LazyClass)(t))(s({},e,{isRoot:!0}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.STAT_LOADED=e.STAT_LOADING=e.STAT_NOT_LOAD=void 0;var h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();e.LazyClass=function(v){return function(){function p(t){O(this,p);var e=this,n=t=t||{},r=n.isRoot,o=t,i=o.parent;if(r)t=h({el:G,events:[m],classLoading:b,classLoaded:L,classErr:g,classTarget:C,retry:0,once:!0,preloadRatio:1,throttleMethod:A,throttleTime:250,loadHandler:S},t);else{var a=v.$lazy;t=h({},i&&i.opts||a.opts,{parent:a},t,{isRoot:!1})}var c=t,u=c.el,s=c.events,l=c.throttleMethod,f=c.throttleTime,d=c.loadHandler;i=t.parent,e.id=++D,e._children=new V.FMap,e._queues={},e._cbs={},e.parent=i,e.el=u,e.stat=w,e.events=(0,V.isArr)(s)?s:[s],e.opts=t,e._lastInView=!1,e._throttle=l===A?y.default:_.default,e._tTime=f,e._loadHandler=d,i&&i.addChild(e),r&&!v.$lazy&&(v.$lazy=e)}return r(p,[{key:"check",value:function(e){var t=this,n=t.stat<j&&t.inView();if(n){t._loadHandler(t);var r=t._children;if(r.size()){var o=t._queues,i=e?o[e]:r;i&&r.keys().forEach(function(t){r.get(t).check(e)})}}}},{key:"inView",value:function(){var t=this,e=t.parent,n=t.opts,r=t.el,o=n.onEnter,i=n.onLeave,a=!1;if(e){var c=e.el,u=c===G;if(u||e._lastInView){var s=0,l=0,f=0,d=0,p=u?{left:G.pageXOffset,top:G.pageYOffset,width:G.innerWidth,height:G.innerHeight}:(0,V.offset)(c),v=p.left,y=p.top,h=p.width,_=p.height;if(!u){var O=G.pageXOffset,m=G.pageYOffset,b=G.innerWidth,g=G.innerHeight,L=y-m,C=m+g-y-_,T=v-O,A=O+b-v-h;l=(s=L<0?L:0)+(C<0?C:0),d=(f=T<0?T:0)+(A<0?A:0)}var z=t.opts.preloadRatio,w=z-1,j=(0,V.offset)(r),E=(h+d)*w,D=(_+l)*w,P=y-s-D/2,S=v-f-E/2,$=h+d+E,M=_+l+D,x=j.left,N=j.top,k=j.width,R=j.height;x<S+$&&S<x+k&&N<P+M&&P<N+R&&(a=!0)}}else r===G&&(a=!0);var I=t._lastInView;return o&&I!==a&&a&&o({$lazy:t}),i&&I!==a&&!a&&i({$lazy:t}),t._lastInView=a}},{key:"addChild",value:function(t){var e,n,r,o,i=this,a=t.events,c=i.el;function u(e){var t=i._cbs,n=t[r];n||(n=t[r]=i._throttle(function(){e.keys().forEach(function(t){e.get(t).check(r)})},i._tTime),(0,V.on)(c,r,n,s?{passive:!0}:0))}for(i._children.set(t.id,t),e=0,n=a.length;e<n;e++)r=a[e],(o=i._queues[r])||u(o=i._queues[r]=new V.FMap),o.set(t.id,t)}},{key:"update",value:function(t){var e=this.opts;if(!e.once){var n=t.src,r=e.src;n!==r&&(e.src=n,this.stat=w,this.check())}}},{key:"rmChild",value:function(t){var e=this._queues,n=this._children,r=Object.keys(e),o=void 0,i=void 0;for(n.has(t.id)&&n.rm(t.id),o=0,i=r.length;o<i;o++){var a=r[o],c=e[a];if(c.rm(t.id),0===c.size()){var u=this._cbs,s=this.el,l=u[a];u[a]=null,(0,V.off)(s,a,l)}}}},{key:"destroy",value:function(t){var e=this,n=e.parent,r=Object.assign({deep:!1},t),o=r.deep;e.destroyed||(o?function e(t){var n=t._children;0<n.size()&&n.keys().forEach(function(t){return e(n.get(t))});t.destroy()}(e):n?n.rmChild(e):e.opts.isRoot&&delete v.$lazy,e.destroyed=!0)}}]),p}()};var y=o(n(10)),_=o(n(24)),V=n(13);function o(t){return t&&t.__esModule?t:{default:t}}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var m="scroll",b="lazy-loading",g="lazy-err",L="lazy-loaded",C="self",T="parent",A="debounce",z="bg",G=window,w=e.STAT_NOT_LOAD=0,j=e.STAT_LOADING=1,E=e.STAT_LOADED=2,D=0,s=!1;try{var i=Object.defineProperty({},"passive",{get:function(){s=!0}});G.addEventListener("test",null,i)}catch(t){}var P=function(){function y(t){var n=t.el,e=t.loadEl,r=t.src,o=t.retry,i=t.onLoad,a=t.onErr,c=t.onReq,u=t.filters;O(this,y);var s=this;function l(){return{el:n,src:s.src,oSrc:r}}function f(){(0,V.removeAttr)(e,"src"),(0,V.attr)(e,"src",s.src),c&&c(l())}function d(t){a&&a(h({},l(),t))}function p(t){var e=t;return u&&(e=u.reduce(function(t,e){return e(t,{el:n})},t)),e}function v(t){var e=h({failed:!1},t),n=e.failed,r=e.src;n?d({isEnd:!0}):(r&&(s.src=r),f(),s.c++)}s.canceled=!1,s.retry=o,s.c=0,s.src=p(r),e.onload=function(){!s.canceled&&i&&i(l())},e.onerror=function(){if(!s.canceled){var t=s.retry;(0,V.isFn)(t)?(d(),t(h({},l(),{times:s.c,next:v,applyFilters:p}))):-1==t||0<t?(d(),f(),0<t&&s.retry--):d({isEnd:!0})}},f()}return r(y,[{key:"cancel",value:function(){this.canceled=!0}}]),y}();function S(t){var e,n,r=t.opts,o=t.req,i=r.classErr,a=r.classLoaded,c=r.classLoading,u=r.classTarget,s=r.el,l=r.once,f=r.retry,d=r.src,p=r.filters,v=r.onLoad,y=r.onErr,h=r.onReq,_=s,O=[c,i,a],m=u===T&&s.parentNode||s;function b(t,e){(0,V.removeClass)(t,O),(0,V.addClass)(t,e)}function g(){t.stat=E,l&&t.destroy()}switch(o&&o.cancel(),d=(0,V.trim)(d),t.opts.mode){case z:(0,V.css)(s,"background-image",""),e=function(){(0,V.css)(s,"background-image","url("+t.req.src+")")},n=function(){(0,V.css)(s,"background-image","")},_=new Image}d?(t.stat=j,t.req=new P({el:s,loadEl:_,src:d,retry:f,filters:p,onLoad:function(t){e&&e(),g(),b(m,a),v&&v(t)},onErr:function(t){n&&n(),t.isEnd&&(g(),b(m,i)),y&&y(t)},onReq:h}),b(m,c)):g()}},function(t,e,n){var O=n(5),m=n(15),b=n(18),g=Math.max,L=Math.min;t.exports=function(r,o,t){var i,a,c,u,s,l,f=0,d=!1,p=!1,e=!0;if("function"!=typeof r)throw new TypeError("Expected a function");function v(t){var e=i,n=a;return i=a=void 0,f=t,u=r.apply(n,e)}function y(t){var e=t-l;return void 0===l||o<=e||e<0||p&&c<=t-f}function h(){var t,e,n=m();if(y(n))return _(n);s=setTimeout(h,(e=o-((t=n)-l),p?L(e,c-(t-f)):e))}function _(t){return s=void 0,e&&i?v(t):(i=a=void 0,u)}function n(){var t,e=m(),n=y(e);if(i=arguments,a=this,l=e,n){if(void 0===s)return f=t=l,s=setTimeout(h,o),d?v(t):u;if(p)return s=setTimeout(h,o),v(l)}return void 0===s&&(s=setTimeout(h,o)),u}return o=b(o)||0,O(t)&&(d=!!t.leading,c=(p="maxWait"in t)?g(b(t.maxWait)||0,o):c,e="trailing"in t?!!t.trailing:e),n.cancel=function(){void 0!==s&&clearTimeout(s),i=l=a=s=void(f=0)},n.flush=function(){return void 0===s?u:_(m())},n}},function(t,e,n){var r=n(16),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){var r=n(11).Symbol;t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.isArr=u,e.isStr=s,e.isFn=function(t){return"function"==c(t)},e.trim=l,e.each=f,e.on=function e(n,t,r,o){s(t)?n.addEventListener(t,r,o):u(t)&&f(t,function(t){return e(n,t,r,o)})},e.off=function e(n,t,r){s(t)?n.removeEventListener(t,r):u(t)&&f(t,function(t){return e(n,t,r)})},e.className=d,e.addClass=function(t,e){var n=t.classList;if(n)n.add(e);else{var r=d(t).split(" "),o={};f(r,function(t){o[t]=!0}),o[e]||d(t,r.join(" ")+e)}},e.classRE=p,e.removeClass=function e(n,t){if(s(t)){var r=n.classList;if(r)r.remove(t);else{var o=d(n);d(n,l(o.replace(p(t)," ")))}}else u(t)&&f(t,function(t){return e(n,t)})},e.attr=function(t,e,n){t.setAttribute(e,n)},e.removeAttr=function(t,e){t.removeAttribute(e)},e.offset=function(t){var e=t.getBoundingClientRect();return{left:e.left+o.pageXOffset,top:e.top+o.pageYOffset,width:a(e.width),height:a(e.height)}},e.noop=function(){},e.camelize=v,e.dasherize=y,e.maybeAddPx=h,e.css=function(t,e,n){var r=t.style;{if(arguments.length<3)return r[v(e)]||getComputedStyle(t,"").getPropertyValue(e);n||0===n?r[y(e)]=h(e,n):r.removeProperty(y(e))}},e.FMap=_;var o=window,i={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},a=Math.round;function c(t){return void 0===t?"undefined":r(t)}function u(t){return t instanceof Array}function s(t){return"string"==c(t)}function l(t){return null==t?"":String.prototype.trim.call(t)}function f(t,e){var n,r,o;for(n=0,r=t.length;n<r;n++)o=t[n],e.call(o,o,n)}function d(t,e){var n=t.className||"",r=n&&void 0!==n.baseVal;if(void 0===e)return r?n.baseVal:n;r?n.baseVal=e:t.className=e}function p(t){return new RegExp("(^|\\s)"+t+"(\\s|$)")}function v(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})}function y(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function h(t,e){return"number"!=c(e)||i[y(t)]?e:e+"px"}function _(){this._m=Object.create(null),this._l=0}_.prototype.get=function(t){return this._m[t]},_.prototype.set=function(t,e){this.has(t)||(this._m[t]=e,this._l++)},_.prototype.rm=function(t){this.has(t)&&(delete this._m[t],this._l--)},_.prototype.has=function(t){return!!this._m[t]},_.prototype.keys=function(){return Object.keys(this._m)},_.prototype.size=function(){return this._l}},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(2);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var a=n(4),c=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/InViewComp.vue",e.default=c.exports},function(t,e,n){var r=n(11);t.exports=function(){return r.Date.now()}},function(n,t,e){(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.exports=e}).call(this,e(17))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(5),o=n(19),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=c.test(t);return n||u.test(t)?s(t.slice(2),n?2:8):a.test(t)?NaN:+t}},function(t,e,n){var r=n(20),o=n(23);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(12),o=n(21),i=n(22),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(12),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{var r=!(t[c]=void 0)}catch(t){}var o=a.call(t);return r&&(e?t[c]=n:delete t[c]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var i=n(10),a=n(5);t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return a(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),i(t,e,{leading:r,maxWait:e,trailing:o})}},function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(0);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var a=n(4),c=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/LazyComp.vue",e.default=c.exports},function(t,e){t.exports=function(){}}])});