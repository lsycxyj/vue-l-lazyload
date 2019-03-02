/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/src/App.vue":
/*!**************************!*\
  !*** ./demo/src/App.vue ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_46e720b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=46e720b8& */ "./demo/src/App.vue?vue&type=template&id=46e720b8&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./demo/src/App.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=less& */ "./demo/src/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_46e720b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_46e720b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "demo/src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./demo/src/App.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./demo/src/App.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./demo/src/App.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************!*\
  !*** ./demo/src/App.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./demo/src/App.vue?vue&type=template&id=46e720b8&":
/*!*********************************************************!*\
  !*** ./demo/src/App.vue?vue&type=template&id=46e720b8& ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_46e720b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=46e720b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=template&id=46e720b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_46e720b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_46e720b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./demo/src/main.js":
/*!**************************!*\
  !*** ./demo/src/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(/*! vue */ "vue");

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(/*! ./App.vue */ "./demo/src/App.vue");

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(/*! ../../src/index */ "./src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Vue = _vue2.default;

_vue2.default.use(_index.VueLLazyload, {
	once: false
});

new _vue2.default({
	el: '#app',
	components: {
		App: _App2.default
	},
	render: function render(h) {
		return h(_App2.default);
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./demo/src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _src = __webpack_require__(/*! ../../src */ "./src/index.js");

var LIST_LEN = 5; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var NOT_EXISTS_MARKER = '$NOT_EXISTS$';

function genImgSrc() {
	return 'img/lenna.png?_t=' + Math.floor(Math.random() * 100000) + '.' + Date.now();
}

function genImgList(len) {
	var arr = [];
	while (len--) {
		arr.push(genImgSrc());
	}
	return arr;
}

exports.default = {
	components: {
		LazyComp: _src.LazyComp,
		InViewComp: _src.InViewComp
	},
	data: function data() {
		var $vm = this;
		return {
			lazyCompStat: _src.COMP_NOT_LOAD,
			lazyFilters: [function (v) {
				return v + '&_t=' + Date.now();
			}],
			notExistsFilters: [function (v) {
				return NOT_EXISTS_MARKER + v;
			}],
			inViewCompText: 'InViewComp Initialization',
			inViewOpts: {
				onEnter: function onEnter() {
					var TXT = 'on enter view!';
					$vm.inViewCompText = TXT;
					console.log(TXT);
				},
				onLeave: function onLeave() {
					var TXT = 'on leave view!';
					$vm.inViewCompText = TXT;
					console.log(TXT);
				}
			},
			lazyCompOpts: {
				onInView: function onInView() {
					console.log('in view triggered');
					// Call methods of LazyComp to set "stat" of LazyLoader to pause this callback calling
				},

				throttleMethod: 'throttle'
			},
			img: genImgSrc(),
			imgs: genImgList(LIST_LEN),
			imgsDIV: genImgList(LIST_LEN),
			show: true
		};
	},

	methods: {
		lazyRetryFn: function lazyRetryFn(info) {
			var oSrc = info.oSrc,
			    next = info.next;

			next({
				src: oSrc.replace(NOT_EXISTS_MARKER, '')
				// failed: true,
			});
		},
		lazyOnLoad: function lazyOnLoad(info) {
			// console.log(`lazyOnLoad: ${info.src}`, info.el);
		},
		lazyOnErr: function lazyOnErr(info) {
			// console.log(`lazyOnErr: ${info.src}`, info.el);
		},
		changeImg: function changeImg() {
			this.img = genImgSrc();
		},
		changeImgs: function changeImgs() {
			this.imgs = genImgList(LIST_LEN);
		},
		changeShow: function changeShow() {
			this.show = !this.show;
		},
		changeTest: function changeTest() {
			this.test = !this.test;
		},
		setLoading: function setLoading() {
			this.lazyCompStat = _src.COMP_LOADING;
		},
		setLoadErr: function setLoadErr() {
			this.lazyCompStat = _src.COMP_ERR;
		},
		setLoaded: function setLoaded() {
			this.lazyCompStat = _src.COMP_LOADED;
		},
		resetLoad: function resetLoad() {
			this.lazyCompStat = _src.COMP_NOT_LOAD;
		}
	}
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/InViewComp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/InViewComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _noop = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");

var _noop2 = _interopRequireDefault(_noop);

var _index = __webpack_require__(/*! ./index */ "./src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
	name: 'InViewComp',
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		opts: {
			type: Object
		}
	},
	mounted: function mounted() {
		var $vm = this;
		var opts = $vm.opts;

		var _opts = Object.assign({}, opts);

		var ctrl = {
			endCheck: $vm.endCheck
		};

		var onInView = _opts.onInView;

		if (onInView) {
			_opts.loadHandler = function () {
				onInView(ctrl);
			};
		} else {
			_opts.loadHandler = _noop2.default;
		}

		// Do nothing but keep checking
		var $lazy = ctrl.$lazy = $vm.$lazy = new ((0, _index.getLazyLoader)())(Object.assign({
			el: $vm.$el
		}, _opts));
		$lazy.check();
	},
	destroyed: function destroyed() {
		this.endCheck();
	},

	methods: {
		endCheck: function endCheck() {
			var $vm = this;
			var $lazy = $vm.$lazy;

			if ($lazy) {
				$lazy.destroy();
				$vm.$lazy = null;
			}
		}
	}
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/LazyComp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/LazyComp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.COMP_ERR = exports.COMP_LOADED = exports.COMP_LOADING = exports.COMP_NOT_LOAD = undefined;

var _InViewComp = __webpack_require__(/*! ./InViewComp.vue */ "./src/InViewComp.vue");

var _InViewComp2 = _interopRequireDefault(_InViewComp);

var _lazy = __webpack_require__(/*! ./lazy */ "./src/lazy.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//

var COMP_NOT_LOAD = exports.COMP_NOT_LOAD = 0;
var COMP_LOADING = exports.COMP_LOADING = 1;
var COMP_LOADED = exports.COMP_LOADED = 2;
var COMP_ERR = exports.COMP_ERR = -1;

exports.default = {
	name: 'LazyComp',
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		opts: {
			type: Object
		},
		/*
  	There's a bug in Vue. If you provide some methods for outside components to change the stat of "data",
  	you will lose some event listeners after you change the stat to another and change it back
  	(eg. The methods of @event won't be triggered after it's changed back).
  	So I have to design a prop as the switcher of slots. And to control the stat of LazyLoader,
  	you will have to change the props "stat" in the "onInView" callback.
  	The initial stat MUST be COMP_NOT_LOAD and the stat SHOULD NOT be changed
  	until this component is mounted for InViewComp's LazyLoader's initialization.
    */
		stat: {
			type: Number,
			default: COMP_NOT_LOAD
		}
	},
	data: function data() {
		return {
			COMP_NOT_LOAD: COMP_NOT_LOAD,
			COMP_LOADING: COMP_LOADING,
			COMP_LOADED: COMP_LOADED,
			COMP_ERR: COMP_ERR
		};
	},

	components: {
		InViewComp: _InViewComp2.default
	},
	computed: {
		cClass: function cClass() {
			var $vm = this;
			var _class = {};
			var opts = $vm.cOpts;
			switch ($vm.stat) {
				case COMP_LOADING:
					_class[opts.classCompLoading] = true;
					break;
				case COMP_LOADED:
					_class[opts.classCompLoaded] = true;
					break;
				case COMP_ERR:
					_class[opts.classCompErr] = true;
					break;
				case COMP_NOT_LOAD:
				default:
					_class[opts.classCompNotLoad] = true;
					break;
			}
			return _class;
		},
		cOpts: function cOpts() {
			var $vm = this;
			return Object.assign({
				// Use class names which are different from Lazy to avoid extension of ascendants' options
				classCompNotLoad: 'comp-stat-not-load',
				classCompLoading: 'comp-stat-loading',
				classCompErr: 'comp-stat-err',
				classCompLoaded: 'comp-stat-loaded'
			}, $vm.opts);
		}
	},
	watch: {
		stat: function stat(v) {
			var $vm = this;
			switch (v) {
				case COMP_LOADING:
					$vm.setLoaderLoading();
					break;
				case COMP_ERR:
					$vm.setLoaderLoadErr();
					break;
				case COMP_LOADED:
					$vm.setLoaderLoaded();
					break;
				case COMP_NOT_LOAD:
				default:
					$vm.resetLoaderLoad();
			}
		}
	},
	methods: {
		c: function c() {
			return this.$refs.c;
		},
		setLoaderLoading: function setLoaderLoading() {
			var $vm = this;

			var _$vm$c = $vm.c(),
			    $lazy = _$vm$c.$lazy;

			if ($lazy) {
				$lazy.stat = _lazy.STAT_LOADING;
			}
		},
		setLoaderLoadErr: function setLoaderLoadErr() {
			var $vm = this;

			var _$vm$c2 = $vm.c(),
			    $lazy = _$vm$c2.$lazy;

			if ($lazy) {
				$lazy.stat = _lazy.STAT_LOADED;
			}
		},
		setLoaderLoaded: function setLoaderLoaded() {
			var $vm = this;

			var _$vm$c3 = $vm.c(),
			    $lazy = _$vm$c3.$lazy,
			    endCheck = _$vm$c3.endCheck;

			if ($lazy) {
				$lazy.stat = _lazy.STAT_LOADED;
				// End checking automatically if it's loaded
				endCheck();
			}
		},
		resetLoaderLoad: function resetLoaderLoad() {
			var $vm = this;

			var _$vm$c4 = $vm.c(),
			    $lazy = _$vm$c4.$lazy;

			if ($lazy) {
				$lazy.stat = _lazy.STAT_NOT_LOAD;
			}
		}
	}
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=style&index=0&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demo/src/App.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".lazy-ref {\n  height: 320px;\n  overflow: auto;\n}\nimg {\n  width: 400px;\n  height: 400px;\n  display: inline-block;\n}\n.img-div {\n  width: 200px;\n  height: 200px;\n}\n.lazy-loading {\n  position: relative;\n  width: 200px;\n  height: 200px;\n}\n.lazy-loading:before {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: -20px 0 0 -20px;\n  background-color: #333;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  -moz-animation: sk-rotateplane 1.2s infinite ease-in-out;\n    -o-animation: sk-rotateplane 1.2s infinite ease-in-out;\n       animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n.buttons {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 20;\n}\n@-webkit-keyframes sk-rotateplane {\n0% {\n    -webkit-transform: perspective(120px);\n}\n50% {\n    -webkit-transform: perspective(120px) rotateY(180deg);\n}\n100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);\n}\n}\n@-moz-keyframes sk-rotateplane {\n0% {\n    -moz-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n         transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n}\n50% {\n    -moz-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n         transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n}\n100% {\n    -moz-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n         transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n}\n}\n@-o-keyframes sk-rotateplane {\n0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n}\n50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n}\n100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n}\n}\n@keyframes sk-rotateplane {\n0% {\n    -moz-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n         transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n}\n50% {\n    -moz-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n         transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n}\n100% {\n    -moz-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n         transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n}\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=template&id=46e720b8&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./demo/src/App.vue?vue&type=template&id=46e720b8& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", [
        _c(
          "div",
          { staticClass: "div-list" },
          _vm._l(_vm.imgsDIV, function(img) {
            return _c("div", {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy",
                  value: { src: img, mode: "bg", filters: _vm.lazyFilters },
                  expression: "{src:img, mode: 'bg', filters: lazyFilters}"
                }
              ],
              staticClass: "img-div"
            })
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "lazy-ref",
        {
          ref: "lazyRef",
          staticClass: "lazy-ref",
          attrs: {
            opts: {
              classTarget: "parent",
              retry: _vm.lazyRetryFn,
              filters: _vm.notExistsFilters,
              onLoad: _vm.lazyOnLoad,
              onErr: _vm.lazyOnErr
            }
          }
        },
        [
          _c("div", [
            _c("img", {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy",
                  value: { ref: "lazyRef", src: _vm.img },
                  expression: "{ref:'lazyRef', src:img}"
                }
              ]
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "list" },
            _vm._l(_vm.imgs, function(img) {
              return _c("div", [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: { ref: "lazyRef", src: img },
                      expression: "{ref:'lazyRef', src:img}"
                    }
                  ]
                })
              ])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "list" },
        _vm._l(_vm.imgs, function(img) {
          return _c("div", [
            _c("img", {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy",
                  value: { classTarget: "parent", src: img },
                  expression: "{classTarget:'parent', src:img}"
                }
              ]
            })
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "in-view-comp",
        { staticClass: "in-view-comp", attrs: { opts: _vm.inViewOpts } },
        [_vm._v(_vm._s(_vm.inViewCompText))]
      ),
      _vm._v(" "),
      _c(
        "lazy-comp",
        {
          staticClass: "lazy-comp",
          attrs: {
            opts: _vm.lazyCompOpts,
            stat: _vm.lazyCompStat,
            tag: "section"
          }
        },
        [
          _c("div", [_c("p", [_vm._v("Loaded, loader destroyed")])]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "loading" }, slot: "loading" }, [
            _c("p", [_vm._v("Loading")]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.setLoadErr } }, [
              _vm._v("setLoadErr")
            ]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.setLoaded } }, [
              _vm._v("setLoaded")
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "err" }, slot: "err" }, [
            _c("p", [_vm._v("Load Err")]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.resetLoad } }, [
              _vm._v("resetLoad")
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "not-load" }, slot: "not-load" }, [
            _c("p", [_vm._v("Not load")]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.setLoading } }, [
              _vm._v("setLoading")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "buttons" }, [
        _c("button", { on: { click: _vm.changeImg } }, [_vm._v("Change img")]),
        _vm._v(" "),
        _c("button", { on: { click: _vm.changeImgs } }, [_vm._v("Change imgs")])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/InViewComp.vue?vue&type=template&id=2fa583d2&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/InViewComp.vue?vue&type=template&id=2fa583d2& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.tag, { tag: "component" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/LazyComp.vue?vue&type=template&id=07883fc8&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/LazyComp.vue?vue&type=template&id=07883fc8& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "in-view-comp",
    { ref: "c", class: _vm.cClass, attrs: { tag: _vm.tag, opts: _vm.cOpts } },
    [
      _vm.stat === _vm.COMP_NOT_LOAD
        ? _vm._t("not-load")
        : _vm.stat === _vm.COMP_LOADING
        ? _vm._t("loading")
        : _vm.stat === _vm.COMP_ERR
        ? _vm._t("err")
        : _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demo/src/App.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demo/src/App.vue?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1b12e3d6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/InViewComp.vue":
/*!****************************!*\
  !*** ./src/InViewComp.vue ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InViewComp_vue_vue_type_template_id_2fa583d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InViewComp.vue?vue&type=template&id=2fa583d2& */ "./src/InViewComp.vue?vue&type=template&id=2fa583d2&");
/* harmony import */ var _InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InViewComp.vue?vue&type=script&lang=js& */ "./src/InViewComp.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InViewComp_vue_vue_type_template_id_2fa583d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InViewComp_vue_vue_type_template_id_2fa583d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/InViewComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/InViewComp.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/InViewComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./InViewComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/InViewComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/InViewComp.vue?vue&type=template&id=2fa583d2&":
/*!***********************************************************!*\
  !*** ./src/InViewComp.vue?vue&type=template&id=2fa583d2& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_template_id_2fa583d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./InViewComp.vue?vue&type=template&id=2fa583d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/InViewComp.vue?vue&type=template&id=2fa583d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_template_id_2fa583d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InViewComp_vue_vue_type_template_id_2fa583d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/LazyComp.vue":
/*!**************************!*\
  !*** ./src/LazyComp.vue ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LazyComp_vue_vue_type_template_id_07883fc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyComp.vue?vue&type=template&id=07883fc8& */ "./src/LazyComp.vue?vue&type=template&id=07883fc8&");
/* harmony import */ var _LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LazyComp.vue?vue&type=script&lang=js& */ "./src/LazyComp.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LazyComp_vue_vue_type_template_id_07883fc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LazyComp_vue_vue_type_template_id_07883fc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/LazyComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/LazyComp.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./src/LazyComp.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./LazyComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/LazyComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/LazyComp.vue?vue&type=template&id=07883fc8&":
/*!*********************************************************!*\
  !*** ./src/LazyComp.vue?vue&type=template&id=07883fc8& ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_template_id_07883fc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./LazyComp.vue?vue&type=template&id=07883fc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/LazyComp.vue?vue&type=template&id=07883fc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_template_id_07883fc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyComp_vue_vue_type_template_id_07883fc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VueLLazyload = exports.LazyComp = exports.InViewComp = exports.Lazy = exports.LazyRef = exports.COMP_ERR = exports.COMP_LOADED = exports.COMP_LOADING = exports.COMP_NOT_LOAD = exports.STAT_LOADED = exports.STAT_LOADING = exports.STAT_NOT_LOAD = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lazy = __webpack_require__(/*! ./lazy */ "./src/lazy.js");

Object.defineProperty(exports, 'STAT_NOT_LOAD', {
	enumerable: true,
	get: function get() {
		return _lazy.STAT_NOT_LOAD;
	}
});
Object.defineProperty(exports, 'STAT_LOADING', {
	enumerable: true,
	get: function get() {
		return _lazy.STAT_LOADING;
	}
});
Object.defineProperty(exports, 'STAT_LOADED', {
	enumerable: true,
	get: function get() {
		return _lazy.STAT_LOADED;
	}
});

var _LazyComp2 = __webpack_require__(/*! ./LazyComp.vue */ "./src/LazyComp.vue");

Object.defineProperty(exports, 'COMP_NOT_LOAD', {
	enumerable: true,
	get: function get() {
		return _LazyComp2.COMP_NOT_LOAD;
	}
});
Object.defineProperty(exports, 'COMP_LOADING', {
	enumerable: true,
	get: function get() {
		return _LazyComp2.COMP_LOADING;
	}
});
Object.defineProperty(exports, 'COMP_LOADED', {
	enumerable: true,
	get: function get() {
		return _LazyComp2.COMP_LOADED;
	}
});
Object.defineProperty(exports, 'COMP_ERR', {
	enumerable: true,
	get: function get() {
		return _LazyComp2.COMP_ERR;
	}
});
exports.getLazyLoader = getLazyLoader;

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var _LazyComp3 = _interopRequireDefault(_LazyComp2);

var _InViewComp2 = __webpack_require__(/*! ./InViewComp.vue */ "./src/InViewComp.vue");

var _InViewComp3 = _interopRequireDefault(_InViewComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 */

var LazyLoader = void 0;

function getLazyLoader() {
	return LazyLoader;
}

function log(content) {
	// eslint-disable-next-line no-console
	console.log('v-l-lazyload: ' + content);
}

var LazyRef = exports.LazyRef = {
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		opts: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	render: function render(createElement) {
		var me = this;
		return createElement(me.tag, me.$slots.default);
	},
	mounted: function mounted() {
		var vm = this,
		    el = vm.$el;

		vm.$lazy = new LazyLoader(_extends({}, vm.opts, {
			el: el
		}));
		// Initial check to update lastInView status
		vm.check();
	},
	destroyed: function destroyed() {
		this.$lazy.destroy();
	},

	methods: {
		check: function check() {
			this.$lazy.check();
		},
		add: function add(lazyLoader) {
			this.$lazy.addChild(lazyLoader);
		},
		update: function update(opts) {
			this.$lazy.update(opts);
		},
		rm: function rm(lazyLoader) {
			this.$lazy.rmChild(lazyLoader);
		}
	}
};

var Lazy = exports.Lazy = {
	bind: function bind(el, binding, vnode) {
		var opts = binding.value;

		if ((0, _util.isStr)(opts)) {
			opts = {
				src: opts
			};
		}

		vnode._lazyBound = true;

		var vm = vnode.context,
		    refStr = opts.ref;

		// add to after $refs has references
		vm.$nextTick(function () {
			var ref = void 0;
			// Prevent it's unbound before initialization
			if (vnode._lazyBound) {
				if (refStr) {
					ref = vm.$refs[refStr];
					if (!ref) {
						log('ref "' + refStr + '" not found');
					}
				}

				var mergedOpts = _extends({}, opts, {
					el: el
				}),
				    $lazy = ref && ref.$lazy;

				if ($lazy !== undefined) {
					mergedOpts.parent = $lazy;
				}

				var loader = vnode._$lazy = new LazyLoader(mergedOpts);

				loader.check();
			}
		});
	},
	componentUpdated: function componentUpdated(el, binding, vnode, ovnode) {
		var opts = binding.value,
		    oOpts = binding.oldValue,
		    nSrc = (0, _util.isStr)(opts) ? opts : opts.src,
		    oSrc = (0, _util.isStr)(oOpts) ? oOpts : oOpts.src;

		// vnode will be recreated during update
		if (vnode !== ovnode) {
			vnode._lazyBound = ovnode._lazyBound;
			vnode._$lazy = ovnode._$lazy;
		}

		if (nSrc != oSrc) {
			var loader = vnode._$lazy;

			if (loader) {
				loader.update({
					src: nSrc
				});
			}
		}
	},
	unbind: function unbind(el, binding, vnode) {
		if (vnode._lazyBound) {
			vnode._lazyBound = false;
		}

		// Ensure the loader will be destroyed after it's created
		vnode.context.$nextTick(function () {
			var loader = vnode._$lazy;
			if (loader) {
				loader.destroy();
				vnode._$lazy = null;
			}
		});
	}
};

var InViewComp = exports.InViewComp = _InViewComp3.default;
var LazyComp = exports.LazyComp = _LazyComp3.default;

var VueLLazyload = exports.VueLLazyload = {
	install: function install(Vue, options) {
		var allOpts = _extends({
			regGlobal: true
		}, options);

		LazyLoader = (0, _lazy.LazyClass)(Vue);
		// Set root lazy loader
		// eslint-disable-next-line no-new
		new LazyLoader(_extends({}, options, {
			isRoot: true
		}));

		if (allOpts.regGlobal) {
			Vue.directive('lazy', Lazy);

			Vue.component('lazy-ref', LazyRef);
		}
	}
};

/***/ }),

/***/ "./src/lazy.js":
/*!*********************!*\
  !*** ./src/lazy.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.STAT_LOADED = exports.STAT_LOADING = exports.STAT_NOT_LOAD = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.LazyClass = LazyClass;

var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");

var _throttle2 = _interopRequireDefault(_throttle);

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO intersection observer

/* global window, Image */
var EV_SCROLL = 'scroll',
    CLASS_LOADING = 'lazy-loading',
    CLASS_ERR = 'lazy-err',
    CLASS_LOADED = 'lazy-loaded',
    CLASS_TARGET_SELF = 'self',
    CLASS_TARGET_PARENT = 'parent',


// THROTTLE_METHOD_THROTTLE = 'throttle',
THROTTLE_METHOD_DEBOUNCE = 'debounce',
    MODE_BG = 'bg',
    win = window;

var STAT_NOT_LOAD = exports.STAT_NOT_LOAD = 0;
var STAT_LOADING = exports.STAT_LOADING = 1;
var STAT_LOADED = exports.STAT_LOADED = 2;

var loaderID = 0;

var supportsPassive = false;
try {
	var opts = Object.defineProperty({}, 'passive', {
		get: function get() {
			supportsPassive = true;
		}
	});
	win.addEventListener('test', null, opts);
} catch (e) {
	// empty
}

var Req = function () {
	function Req(_ref) {
		var el = _ref.el,
		    loadEl = _ref.loadEl,
		    src = _ref.src,
		    retry = _ref.retry,
		    onLoad = _ref.onLoad,
		    onErr = _ref.onErr,
		    onReq = _ref.onReq,
		    filters = _ref.filters;

		_classCallCheck(this, Req);

		var me = this;

		function _baseInfo() {
			return {
				el: el,
				src: me.src,
				oSrc: src
			};
		}

		function load() {
			(0, _util.removeAttr)(loadEl, 'src');
			(0, _util.attr)(loadEl, 'src', me.src);
			onReq && onReq(_baseInfo());
		}

		function _onErr(opts) {
			onErr && onErr(_extends({}, _baseInfo(), opts));
		}

		function applyFilters(src) {
			var ret = src;
			if (filters) {
				ret = filters.reduce(function (lastResult, cur) {
					return cur(lastResult, { el: el });
				}, src);
			}
			return ret;
		}

		function next(result) {
			var _failed$result = _extends({ failed: false }, result),
			    failed = _failed$result.failed,
			    nSrc = _failed$result.src;

			if (!failed) {
				if (nSrc) {
					me.src = nSrc;
				}

				load();
				me.c++;
			} else {
				_onErr({
					isEnd: true
				});
			}
		}

		me.canceled = false;
		me.retry = retry;
		me.c = 0;
		me.src = applyFilters(src);

		loadEl.onload = function () {
			// Only requests which are not canceled will notify events
			!me.canceled && onLoad && onLoad(_baseInfo());
		};

		loadEl.onerror = function () {
			// Only requests which are not canceled will notify events
			if (!me.canceled) {
				var _retry = me.retry;
				if ((0, _util.isFn)(_retry)) {
					_onErr();
					_retry(_extends({}, _baseInfo(), {
						times: me.c,
						next: next,
						applyFilters: applyFilters
					}));
				} else if (_retry == -1 || _retry > 0) {
					_onErr();

					load();
					_retry > 0 && me.retry--;
				} else {
					_onErr({
						isEnd: true
					});
				}
			}
		};

		load();
	}

	_createClass(Req, [{
		key: 'cancel',
		value: function cancel() {
			this.canceled = true;
		}
	}]);

	return Req;
}();

function defaultLoadHandler(lazyLoader) {
	var opts = lazyLoader.opts,
	    oReq = lazyLoader.req;

	var classErr = opts.classErr,
	    classLoaded = opts.classLoaded,
	    classLoading = opts.classLoading,
	    classTarget = opts.classTarget,
	    el = opts.el,
	    once = opts.once,
	    retry = opts.retry,
	    src = opts.src,
	    filters = opts.filters,
	    _onLoad2 = opts.onLoad,
	    _onErr2 = opts.onErr,
	    onReq = opts.onReq,
	    loadEl = el,
	    _onLoad,
	    _onErr;

	var classes = [classLoading, classErr, classLoaded],
	    elClassTarget = classTarget === CLASS_TARGET_PARENT ? el.parentNode || el : el;

	function switchClass(el, className) {
		(0, _util.removeClass)(el, classes);
		(0, _util.addClass)(el, className);
	}

	function onComplete() {
		lazyLoader.stat = STAT_LOADED;
		once && lazyLoader.destroy();
	}

	oReq && oReq.cancel();

	src = (0, _util.trim)(src);

	switch (lazyLoader.opts.mode) {
		case MODE_BG:
			(0, _util.css)(el, 'background-image', '');
			_onLoad = function _onLoad() {
				(0, _util.css)(el, 'background-image', 'url(' + lazyLoader.req.src + ')');
			};
			_onErr = function _onErr() {
				(0, _util.css)(el, 'background-image', '');
			};
			loadEl = new Image();
			break;
		default: // empty
	}

	// Only classes and status of elements which has src should be changed
	if (src) {
		lazyLoader.stat = STAT_LOADING;

		lazyLoader.req = new Req({
			el: el,
			loadEl: loadEl,
			src: src,
			retry: retry,
			filters: filters,
			onLoad: function onLoad(info) {
				_onLoad && _onLoad();
				onComplete();
				switchClass(elClassTarget, classLoaded);

				_onLoad2 && _onLoad2(info);
			},
			onErr: function onErr(info) {
				_onErr && _onErr();

				if (info.isEnd) {
					onComplete();
					switchClass(elClassTarget, classErr);
				}

				_onErr2 && _onErr2(info);
			},

			onReq: onReq
		});
		switchClass(elClassTarget, classLoading);
	} else {
		onComplete();
	}
}

function destroyLoaderDeep(loader) {
	var _children = loader._children;

	if (_children.size() > 0) {
		_children.keys().forEach(function (k) {
			return destroyLoaderDeep(_children.get(k));
		});
	}
	// If it's a leaf node, destroy it directly; If it's not, destroy itself after its children is destroyed.
	loader.destroy();
}

// TODO change parent support
function LazyClass(scope) {
	return function () {
		function LazyLoader(opts) {
			_classCallCheck(this, LazyLoader);

			var me = this;
			opts = opts || {};
			var _opts = opts,
			    isRoot = _opts.isRoot;
			var _opts2 = opts,
			    parent = _opts2.parent;

			// root node

			if (isRoot) {
				opts = _extends({
					// Own element
					el: win,
					// Events to be bound
					events: [EV_SCROLL],
					// Class name of loading
					classLoading: CLASS_LOADING,
					// Class name of loaded
					classLoaded: CLASS_LOADED,
					// Class name of load error
					classErr: CLASS_ERR,
					// Element of class name to be changed when the load stat changes
					classTarget: CLASS_TARGET_SELF,
					// Retry amount, 0 for no retry, -1 for infinite retry.
					retry: 0,
					// Remove listener after it has loaded if it is set to true.
					once: true,
					// The "resize" ratio of parent view when it's children views compare with it.
					preloadRatio: 1,
					// Throttling method
					throttleMethod: THROTTLE_METHOD_DEBOUNCE,
					// Throttling time in ms
					throttleTime: 250,
					// Load handler which controls the load status and behaviors
					loadHandler: defaultLoadHandler
				}, opts);
			} else {
				// inherit parent LazyLoader's options
				var $rootLazy = scope.$lazy;
				opts = _extends({}, parent && parent.opts || $rootLazy.opts, {
					parent: $rootLazy
				}, opts, {
					isRoot: false
				});
			}

			var _opts3 = opts,
			    el = _opts3.el,
			    events = _opts3.events,
			    throttleMethod = _opts3.throttleMethod,
			    throttleTime = _opts3.throttleTime,
			    loadHandler = _opts3.loadHandler;

			parent = opts.parent;

			me.id = ++loaderID;
			me._children = new _util.FMap();
			me._queues = {};
			// save for remove
			me._cbs = {};

			me.parent = parent;
			me.el = el;
			me.stat = STAT_NOT_LOAD;
			// Events should be updated after original events are removed.
			me.events = (0, _util.isArr)(events) ? events : [events];
			me.opts = opts;
			me._lastInView = false;
			me._throttle = throttleMethod === THROTTLE_METHOD_DEBOUNCE ? _debounce2.default : _throttle2.default;
			me._tTime = throttleTime;
			me._loadHandler = loadHandler;

			if (parent) {
				parent.addChild(me);
			}

			// Initialize root $lazy
			if (isRoot && !scope.$lazy) {
				scope.$lazy = me;
			}
		}

		_createClass(LazyLoader, [{
			key: 'check',
			value: function check(evName) {
				var me = this;
				var isInView = me.stat < STAT_LOADING && me.inView();

				if (isInView) {
					me._loadHandler(me);

					var children = me._children;

					if (children.size()) {
						var queues = me._queues,
						    queue = evName ? queues[evName] : children;

						if (queue) {
							children.keys().forEach(function (k) {
								children.get(k).check(evName);
							});
						}
					}
				}
			}
		}, {
			key: 'inView',
			value: function inView() {
				var me = this,
				    parent = me.parent,
				    opts = me.opts,
				    el = me.el,
				    onEnter = opts.onEnter,
				    onLeave = opts.onLeave;


				var result = false;

				if (parent) {
					var parentEl = parent.el,
					    isParentWin = parentEl === win;
					// window element is always in view
					if (isParentWin
					// Or until parent in view
					|| parent._lastInView) {
						var parentElTopSupplement = 0,
						    parentElHeightSupplement = 0,
						    parentElLeftSupplement = 0,
						    parentElWidthSupplement = 0;
						var parentElOffset = isParentWin ? {
							// IE, I'm looking at you
							left: win.pageXOffset,
							top: win.pageYOffset,
							width: win.innerWidth,
							height: win.innerHeight
						} : (0, _util.offset)(parentEl),
						    parentElLeft = parentElOffset.left,
						    parentElTop = parentElOffset.top,
						    parentElWidth = parentElOffset.width,
						    parentElHeight = parentElOffset.height;

						if (!isParentWin) {
							var pageXOffset = win.pageXOffset,
							    pageYOffset = win.pageYOffset,
							    innerWidth = win.innerWidth,
							    innerHeight = win.innerHeight;

							var diffTop = parentElTop - pageYOffset;
							var diffBottom = pageYOffset + innerHeight - parentElTop - parentElHeight;
							var diffLeft = parentElLeft - pageXOffset;
							var diffRight = pageXOffset + innerWidth - parentElLeft - parentElWidth;
							// console.log('diff', diffTop, diffBottom, diffLeft, diffRight);
							// Guard for parent element outside the window
							parentElTopSupplement = diffTop < 0 ? diffTop : 0;
							parentElHeightSupplement = parentElTopSupplement + (diffBottom < 0 ? diffBottom : 0);
							parentElLeftSupplement = diffLeft < 0 ? diffLeft : 0;
							parentElWidthSupplement = parentElLeftSupplement + (diffRight < 0 ? diffRight : 0);
						}

						var preloadRatio = me.opts.preloadRatio,
						    extraPreloadRatio = preloadRatio - 1,
						    elOffset = (0, _util.offset)(el),
						    parentElExtraWidth = (parentElWidth + parentElWidthSupplement) * extraPreloadRatio,
						    parentElExtraHeight = (parentElHeight + parentElHeightSupplement) * extraPreloadRatio,
						    parentElFixedTop = parentElTop - parentElTopSupplement - parentElExtraHeight / 2,
						    parentElFixedLeft = parentElLeft - parentElLeftSupplement - parentElExtraWidth / 2,
						    parentElFixedWidth = parentElWidth + parentElWidthSupplement + parentElExtraWidth,
						    parentElFixedHeight = parentElHeight + parentElHeightSupplement + parentElExtraHeight,
						    elLeft = elOffset.left,
						    elTop = elOffset.top,
						    elWidth = elOffset.width,
						    elHeight = elOffset.height;

						// console.log('Sup', parentElTopSupplement, parentElLeftSupplemnt, parentElHeightSupplement, parentElWidthSupplement);
						// console.log(me.el, elTop, elLeft, elHeight, elWidth, parentElFixedTop, parentElFixedLeft, parentElFixedHeight, parentElWidth);

						// Collision detection
						if (elLeft < parentElFixedLeft + parentElFixedWidth && elLeft + elWidth > parentElFixedLeft && elTop < parentElFixedTop + parentElFixedHeight && elTop + elHeight > parentElFixedTop) {
							result = true;
						}
					}
				} else if (el === win) {
					// window element is always in view
					result = true;
				}

				var _lastInView = me._lastInView;

				onEnter && _lastInView !== result && result && onEnter({ $lazy: me });
				onLeave && _lastInView !== result && !result && onLeave({ $lazy: me });

				me._lastInView = result;

				return result;
			}

			// NOTE: Don't change parent since the parent options are merged in constructor

		}, {
			key: 'addChild',
			value: function addChild(lazyLoader) {
				var me = this,
				    events = lazyLoader.events,
				    el = me.el;

				var i, len, event, queue;

				function bindEvent(queue) {
					var cbs = me._cbs,
					    cb = cbs[event];

					if (!cb) {
						cb = cbs[event] = me._throttle(function () {
							queue.keys().forEach(function (k) {
								queue.get(k).check(event);
							});
						}, me._tTime);

						(0, _util.on)(el, event, cb, supportsPassive ? {
							passive: true
						} : 0);
					}
				}

				me._children.set(lazyLoader.id, lazyLoader);

				for (i = 0, len = events.length; i < len; i++) {
					event = events[i];
					queue = me._queues[event];

					if (!queue) {
						queue = me._queues[event] = new _util.FMap();

						bindEvent(queue);
					}
					queue.set(lazyLoader.id, lazyLoader);
				}
			}
		}, {
			key: 'update',
			value: function update(opts) {
				var me = this,
				    oOpts = me.opts;

				// reset
				if (!oOpts.once) {
					var nSrc = opts.src;
					var oSrc = oOpts.src;

					// Only src can be updated. Otherwise we'll face many complicated update problems.
					if (nSrc !== oSrc) {
						oOpts.src = nSrc;

						// Reset the stat to load
						me.stat = STAT_NOT_LOAD;

						me.check();
					}
				}
			}
		}, {
			key: 'rmChild',
			value: function rmChild(lazyLoader) {
				var me = this,
				    queues = me._queues,
				    children = me._children,
				    events = Object.keys(queues);

				var i = void 0,
				    len = void 0;

				if (children.has(lazyLoader.id)) {
					children.rm(lazyLoader.id);
				}

				for (i = 0, len = events.length; i < len; i++) {
					var event = events[i],
					    queue = queues[event];

					queue.rm(lazyLoader.id);

					if (queue.size() === 0) {
						var _cbs = me._cbs,
						    el = me.el,
						    cb = _cbs[event];


						_cbs[event] = null;

						(0, _util.off)(el, event, cb);
					}
				}
			}
		}, {
			key: 'destroy',
			value: function destroy(params) {
				var me = this,
				    parent = me.parent;

				var _Object$assign = Object.assign({ deep: false }, params),
				    deep = _Object$assign.deep;

				if (!me.destroyed) {
					if (!deep) {
						if (parent) {
							parent.rmChild(me);
						} else if (me.opts.isRoot) {
							delete scope.$lazy;
						}
					} else {
						destroyLoaderDeep(me);
					}

					me.destroyed = true;
				}
			}
		}]);

		return LazyLoader;
	}();
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArr = isArr;
exports.isStr = isStr;
exports.isFn = isFn;
exports.trim = trim;
exports.each = each;
exports.on = on;
exports.off = off;
exports.className = className;
exports.addClass = addClass;
exports.classRE = classRE;
exports.removeClass = removeClass;
exports.attr = attr;
exports.removeAttr = removeAttr;
exports.offset = offset;
exports.noop = noop;
exports.camelize = camelize;
exports.dasherize = dasherize;
exports.maybeAddPx = maybeAddPx;
exports.css = css;
exports.FMap = FMap;
/* global getComputedStyle window */
var win = window,
    cssNumber = {
	'column-count': 1,
	columns: 1,
	'font-weight': 1,
	'line-height': 1,
	opacity: 1,
	'z-index': 1,
	zoom: 1
},
    round = Math.round;

function type(o) {
	return typeof o === 'undefined' ? 'undefined' : _typeof(o);
}

function isArr(o) {
	return o instanceof Array;
}

function isStr(o) {
	return type(o) == 'string';
}

function isFn(v) {
	return type(v) == 'function';
}

function trim(o) {
	return o == null ? '' : String.prototype.trim.call(o);
}

function each(elements, callback) {
	var i, len, element;
	for (i = 0, len = elements.length; i < len; i++) {
		element = elements[i];
		callback.call(element, element, i);
	}
}

function on(element, ev, callback, opts) {
	if (isStr(ev)) {
		element.addEventListener(ev, callback, opts);
	} else if (isArr(ev)) {
		each(ev, function (e) {
			return on(element, e, callback, opts);
		});
	}
}

function off(element, ev, callback) {
	if (isStr(ev)) {
		element.removeEventListener(ev, callback);
	} else if (isArr(ev)) {
		each(ev, function (e) {
			return off(element, e, callback);
		});
	}
}

function className(element, value) {
	var klass = element.className || '',
	    svg = klass && klass.baseVal !== undefined;

	if (value === undefined) return svg ? klass.baseVal : klass;
	if (svg) {
		klass.baseVal = value;
	} else {
		element.className = value;
	}
}

function addClass(element, classname) {
	var classList = element.classList;
	if (classList) {
		classList.add(classname);
	} else {
		var cls = className(element).split(' '),
		    map = {};
		each(cls, function (klass) {
			map[klass] = true;
		});

		if (!map[classname]) {
			className(element, cls.join(' ') + classname);
		}
	}
}

function classRE(name) {
	return new RegExp('(^|\\s)' + name + '(\\s|$)');
}

function removeClass(element, classname) {
	if (isStr(classname)) {
		var classList = element.classList;
		if (classList) {
			classList.remove(classname);
		}
		// IE, I'm looking at you again
		else {
				var cls = className(element);
				className(element, trim(cls.replace(classRE(classname), ' ')));
			}
	} else if (isArr(classname)) {
		each(classname, function (c) {
			return removeClass(element, c);
		});
	}
}

function attr(el, name, value) {
	el.setAttribute(name, value);
}

function removeAttr(el, value) {
	el.removeAttribute(value);
}

function offset(element) {
	var obj = element.getBoundingClientRect();
	return {
		left: obj.left + win.pageXOffset,
		top: obj.top + win.pageYOffset,
		width: round(obj.width),
		height: round(obj.height)
	};
}

function noop() {}

function camelize(str) {
	return str.replace(/-+(.)?/g, function (match, chr) {
		return chr ? chr.toUpperCase() : '';
	});
}

function dasherize(str) {
	return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
}

function maybeAddPx(name, value) {
	return type(value) == 'number' && !cssNumber[dasherize(name)] ? value + 'px' : value;
}

function css(element, property, value) {
	/* eslint consistent-return: 0 */
	var elementSytle = element.style;
	if (arguments.length < 3) {
		return elementSytle[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);
	} else if (!value && value !== 0) {
		elementSytle.removeProperty(dasherize(property));
	} else {
		elementSytle[dasherize(property)] = maybeAddPx(property, value);
	}
}

// Not for map with empty values
function FMap() {
	var me = this;
	me._m = Object.create(null);
	me._l = 0;
}

FMap.prototype.get = function (k) {
	var me = this;
	return me._m[k];
};

FMap.prototype.set = function (k, v) {
	var me = this;
	if (!me.has(k)) {
		me._m[k] = v;
		me._l++;
	}
};

FMap.prototype.rm = function (k) {
	var me = this;
	if (me.has(k)) {
		delete me._m[k];
		me._l--;
	}
};

FMap.prototype.has = function (k) {
	return !!this._m[k];
};

FMap.prototype.keys = function () {
	return Object.keys(this._m);
};

// FMap.prototype.values = function () {
// 	const me = this;
// 	const { _m } = me;
// 	const ret = [];
// 	/* eslint-disable guard-for-in, no-restricted-syntax */
// 	for (const k in _m) {
// 		/* eslint-disable guard-for-in, no-restricted-syntax */
// 		ret.push(_m[k]);
// 	}
// 	return ret;
// };

FMap.prototype.size = function () {
	return this._l;
};

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9BcHAudnVlPzc1MTEiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvQXBwLnZ1ZT9hMzM3Iiwid2VicGFjazovLy8uL2RlbW8vc3JjL0FwcC52dWU/ZWZkZSIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9tYWluLmpzIiwid2VicGFjazovLy9kZW1vL3NyYy9BcHAudnVlIiwid2VicGFjazovLy9zcmMvSW5WaWV3Q29tcC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9MYXp5Q29tcC52dWUiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvQXBwLnZ1ZT85YjY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8uL2RlbW8vc3JjL0FwcC52dWU/YzM2YiIsIndlYnBhY2s6Ly8vLi9zcmMvSW5WaWV3Q29tcC52dWU/ZDI5YiIsIndlYnBhY2s6Ly8vLi9zcmMvTGF6eUNvbXAudnVlP2Y5MTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9BcHAudnVlPzIxYmIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luVmlld0NvbXAudnVlIiwid2VicGFjazovLy8uL3NyYy9JblZpZXdDb21wLnZ1ZT83MzNkIiwid2VicGFjazovLy8uL3NyYy9JblZpZXdDb21wLnZ1ZT9kNGNlIiwid2VicGFjazovLy8uL3NyYy9MYXp5Q29tcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xhenlDb21wLnZ1ZT9lMmVjIiwid2VicGFjazovLy8uL3NyYy9MYXp5Q29tcC52dWU/ZWFjMiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhenkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVnVlXCIiXSwibmFtZXMiOlsid2luZG93IiwiVnVlIiwidXNlIiwiVnVlTExhenlsb2FkIiwib25jZSIsImVsIiwiY29tcG9uZW50cyIsIkFwcCIsInJlbmRlciIsImgiLCJTVEFUX05PVF9MT0FEIiwiU1RBVF9MT0FESU5HIiwiU1RBVF9MT0FERUQiLCJDT01QX05PVF9MT0FEIiwiQ09NUF9MT0FESU5HIiwiQ09NUF9MT0FERUQiLCJDT01QX0VSUiIsImdldExhenlMb2FkZXIiLCJMYXp5TG9hZGVyIiwibG9nIiwiY29udGVudCIsImNvbnNvbGUiLCJMYXp5UmVmIiwicHJvcHMiLCJ0YWciLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm9wdHMiLCJPYmplY3QiLCJjcmVhdGVFbGVtZW50IiwibWUiLCIkc2xvdHMiLCJtb3VudGVkIiwidm0iLCIkZWwiLCIkbGF6eSIsImNoZWNrIiwiZGVzdHJveWVkIiwiZGVzdHJveSIsIm1ldGhvZHMiLCJhZGQiLCJsYXp5TG9hZGVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGUiLCJybSIsInJtQ2hpbGQiLCJMYXp5IiwiYmluZCIsImJpbmRpbmciLCJ2bm9kZSIsInZhbHVlIiwic3JjIiwiX2xhenlCb3VuZCIsImNvbnRleHQiLCJyZWZTdHIiLCJyZWYiLCIkbmV4dFRpY2siLCIkcmVmcyIsIm1lcmdlZE9wdHMiLCJ1bmRlZmluZWQiLCJwYXJlbnQiLCJsb2FkZXIiLCJfJGxhenkiLCJjb21wb25lbnRVcGRhdGVkIiwib3Zub2RlIiwib09wdHMiLCJvbGRWYWx1ZSIsIm5TcmMiLCJvU3JjIiwidW5iaW5kIiwiSW5WaWV3Q29tcCIsIl9JblZpZXdDb21wIiwiTGF6eUNvbXAiLCJfTGF6eUNvbXAiLCJpbnN0YWxsIiwib3B0aW9ucyIsImFsbE9wdHMiLCJyZWdHbG9iYWwiLCJpc1Jvb3QiLCJkaXJlY3RpdmUiLCJjb21wb25lbnQiLCJMYXp5Q2xhc3MiLCJFVl9TQ1JPTEwiLCJDTEFTU19MT0FESU5HIiwiQ0xBU1NfRVJSIiwiQ0xBU1NfTE9BREVEIiwiQ0xBU1NfVEFSR0VUX1NFTEYiLCJDTEFTU19UQVJHRVRfUEFSRU5UIiwiVEhST1RUTEVfTUVUSE9EX0RFQk9VTkNFIiwiTU9ERV9CRyIsIndpbiIsImxvYWRlcklEIiwic3VwcG9ydHNQYXNzaXZlIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIlJlcSIsImxvYWRFbCIsInJldHJ5Iiwib25Mb2FkIiwib25FcnIiLCJvblJlcSIsImZpbHRlcnMiLCJfYmFzZUluZm8iLCJsb2FkIiwiX29uRXJyIiwiYXBwbHlGaWx0ZXJzIiwicmV0IiwicmVkdWNlIiwibGFzdFJlc3VsdCIsImN1ciIsIm5leHQiLCJyZXN1bHQiLCJmYWlsZWQiLCJjIiwiaXNFbmQiLCJjYW5jZWxlZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJ0aW1lcyIsImRlZmF1bHRMb2FkSGFuZGxlciIsIm9SZXEiLCJyZXEiLCJjbGFzc0VyciIsImNsYXNzTG9hZGVkIiwiY2xhc3NMb2FkaW5nIiwiY2xhc3NUYXJnZXQiLCJfb25Mb2FkIiwiY2xhc3NlcyIsImVsQ2xhc3NUYXJnZXQiLCJwYXJlbnROb2RlIiwic3dpdGNoQ2xhc3MiLCJjbGFzc05hbWUiLCJvbkNvbXBsZXRlIiwic3RhdCIsImNhbmNlbCIsIm1vZGUiLCJJbWFnZSIsImluZm8iLCJkZXN0cm95TG9hZGVyRGVlcCIsIl9jaGlsZHJlbiIsInNpemUiLCJrZXlzIiwiZm9yRWFjaCIsImsiLCJzY29wZSIsImV2ZW50cyIsInByZWxvYWRSYXRpbyIsInRocm90dGxlTWV0aG9kIiwidGhyb3R0bGVUaW1lIiwibG9hZEhhbmRsZXIiLCIkcm9vdExhenkiLCJpZCIsIkZNYXAiLCJfcXVldWVzIiwiX2NicyIsIl9sYXN0SW5WaWV3IiwiX3Rocm90dGxlIiwiZGVib3VuY2UiLCJ0aHJvdHRsZSIsIl90VGltZSIsIl9sb2FkSGFuZGxlciIsImV2TmFtZSIsImlzSW5WaWV3IiwiaW5WaWV3IiwiY2hpbGRyZW4iLCJxdWV1ZXMiLCJxdWV1ZSIsIm9uRW50ZXIiLCJvbkxlYXZlIiwicGFyZW50RWwiLCJpc1BhcmVudFdpbiIsInBhcmVudEVsVG9wU3VwcGxlbWVudCIsInBhcmVudEVsSGVpZ2h0U3VwcGxlbWVudCIsInBhcmVudEVsTGVmdFN1cHBsZW1lbnQiLCJwYXJlbnRFbFdpZHRoU3VwcGxlbWVudCIsInBhcmVudEVsT2Zmc2V0IiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInBhcmVudEVsTGVmdCIsInBhcmVudEVsVG9wIiwicGFyZW50RWxXaWR0aCIsInBhcmVudEVsSGVpZ2h0IiwiZGlmZlRvcCIsImRpZmZCb3R0b20iLCJkaWZmTGVmdCIsImRpZmZSaWdodCIsImV4dHJhUHJlbG9hZFJhdGlvIiwiZWxPZmZzZXQiLCJwYXJlbnRFbEV4dHJhV2lkdGgiLCJwYXJlbnRFbEV4dHJhSGVpZ2h0IiwicGFyZW50RWxGaXhlZFRvcCIsInBhcmVudEVsRml4ZWRMZWZ0IiwicGFyZW50RWxGaXhlZFdpZHRoIiwicGFyZW50RWxGaXhlZEhlaWdodCIsImVsTGVmdCIsImVsVG9wIiwiZWxXaWR0aCIsImVsSGVpZ2h0IiwiaSIsImxlbiIsImV2ZW50IiwiYmluZEV2ZW50IiwiY2JzIiwiY2IiLCJwYXNzaXZlIiwic2V0IiwibGVuZ3RoIiwiaGFzIiwicGFyYW1zIiwiYXNzaWduIiwiZGVlcCIsImlzQXJyIiwiaXNTdHIiLCJpc0ZuIiwidHJpbSIsImVhY2giLCJvbiIsIm9mZiIsImFkZENsYXNzIiwiY2xhc3NSRSIsInJlbW92ZUNsYXNzIiwiYXR0ciIsInJlbW92ZUF0dHIiLCJvZmZzZXQiLCJub29wIiwiY2FtZWxpemUiLCJkYXNoZXJpemUiLCJtYXliZUFkZFB4IiwiY3NzIiwiY3NzTnVtYmVyIiwiY29sdW1ucyIsIm9wYWNpdHkiLCJ6b29tIiwicm91bmQiLCJNYXRoIiwibyIsIkFycmF5IiwidiIsInByb3RvdHlwZSIsImNhbGwiLCJlbGVtZW50cyIsImNhbGxiYWNrIiwiZWxlbWVudCIsImV2IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtsYXNzIiwic3ZnIiwiYmFzZVZhbCIsImNsYXNzbmFtZSIsImNsYXNzTGlzdCIsImNscyIsInNwbGl0IiwibWFwIiwiam9pbiIsIm5hbWUiLCJSZWdFeHAiLCJyZW1vdmUiLCJyZXBsYWNlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwib2JqIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3RyIiwibWF0Y2giLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwicHJvcGVydHkiLCJlbGVtZW50U3l0bGUiLCJzdHlsZSIsImFyZ3VtZW50cyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVtb3ZlUHJvcGVydHkiLCJfbSIsImNyZWF0ZSIsIl9sIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFB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QUNBO0FBQ0QsQ0FORDs7QUFRQWxJLEtBQUs0RixTQUFMLENBQWUxTSxFQUFmLEdBQW9CLFVBQVVxRyxDQUFWLEVBQWE7QUFDaEMsS0FBTW5ILEtBQUssSUFBWDtBQUNBLEtBQUlBLEdBQUd5TCxHQUFILENBQU90RSxDQUFQLENBQUosRUFBZTtBQUNkLFNBQU9uSCxHQUFHNFAsRUFBSCxDQUFNekksQ0FBTixDQUFQO0FBQ0FuSCxLQUFHOFAsRUFBSDtBQUNBO0FBQ0QsQ0FORDs7QUFRQWxJLEtBQUs0RixTQUFMLENBQWUvQixHQUFmLEdBQXFCLFVBQVV0RSxDQUFWLEVBQWE7QUFDakMsUUFBTyxDQUFDLENBQUMsS0FBS3lJLEVBQUwsQ0FBUXpJLENBQVIsQ0FBVDtBQUNBLENBRkQ7O0FBSUFTLEtBQUs0RixTQUFMLENBQWV2RyxJQUFmLEdBQXNCLFlBQVk7QUFDakMsUUFBT25ILE9BQU9tSCxJQUFQLENBQVksS0FBSzJJLEVBQWpCLENBQVA7QUFDQSxDQUZEOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFoSSxLQUFLNEYsU0FBTCxDQUFleEcsSUFBZixHQUFzQixZQUFZO0FBQ2pDLFFBQU8sS0FBSzhJLEVBQVo7QUFDQSxDQUZELEM7Ozs7Ozs7Ozs7O0FDbk5BLHFCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGVtby9zcmMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmU3MjBiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXGRlbGV0ZVxcXFxwcm9ncmFtc1xcXFxNeSBEQmFua1xcXFxXZWJcXFxcTWluZVxcXFx2dWUtbC1sYXp5bG9hZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDZlNzIwYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDZlNzIwYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDZlNzIwYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDZlNzIwYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImRlbW8vc3JjL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2ZTcyMGI4JlwiIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHsgVnVlTExhenlsb2FkIH0gZnJvbSAnLi4vLi4vc3JjL2luZGV4Jztcblxud2luZG93LlZ1ZSA9IFZ1ZTtcblxuVnVlLnVzZShWdWVMTGF6eWxvYWQsIHtcblx0b25jZTogZmFsc2UsXG59KTtcblxubmV3IFZ1ZSh7XG5cdGVsOiAnI2FwcCcsXG5cdGNvbXBvbmVudHM6IHtcblx0XHRBcHAsXG5cdH0sXG5cdHJlbmRlcjogaCA9PiBoKEFwcCksXG59KTtcbiIsIjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuICAubGF6eS1yZWYge1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5pbWctZGl2IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5sYXp5LWxvYWRpbmcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW46IC0yMHB4IDAgMCAtMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMjBweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgei1pbmRleDogMjA7XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweClcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgxODBkZWcpXG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXYtbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWRpdlwiIHYtZm9yPVwiaW1nIGluIGltZ3NESVZcIiB2LWxhenk9XCJ7c3JjOmltZywgbW9kZTogJ2JnJywgZmlsdGVyczogbGF6eUZpbHRlcnN9XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bGF6eS1yZWYgcmVmPVwibGF6eVJlZlwiIGNsYXNzPVwibGF6eS1yZWZcIlxuICAgICAgICAgICAgICA6b3B0cz1cIntjbGFzc1RhcmdldDogJ3BhcmVudCcsIHJldHJ5OiBsYXp5UmV0cnlGbiwgZmlsdGVyczogbm90RXhpc3RzRmlsdGVycywgb25Mb2FkOiBsYXp5T25Mb2FkLCBvbkVycjogbGF6eU9uRXJyfVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyB2LWxhenk9XCJ7cmVmOidsYXp5UmVmJywgc3JjOmltZ31cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImltZyBpbiBpbWdzXCI+XG4gICAgICAgICAgPGltZyB2LWxhenk9XCJ7cmVmOidsYXp5UmVmJywgc3JjOmltZ31cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xhenktcmVmPlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICA8ZGl2IHYtZm9yPVwiaW1nIGluIGltZ3NcIj5cbiAgICAgICAgPGltZyB2LWxhenk9XCJ7Y2xhc3NUYXJnZXQ6J3BhcmVudCcsIHNyYzppbWd9XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aW4tdmlldy1jb21wIGNsYXNzPVwiaW4tdmlldy1jb21wXCIgOm9wdHM9XCJpblZpZXdPcHRzXCI+e3tpblZpZXdDb21wVGV4dH19PC9pbi12aWV3LWNvbXA+XG4gICAgPGxhenktY29tcCBjbGFzcz1cImxhenktY29tcFwiIDpvcHRzPVwibGF6eUNvbXBPcHRzXCIgOnN0YXQ9XCJsYXp5Q29tcFN0YXRcIiB0YWc9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5Mb2FkZWQsIGxvYWRlciBkZXN0cm95ZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2xvdD1cImxvYWRpbmdcIj5cbiAgICAgICAgPHA+TG9hZGluZzwvcD5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzZXRMb2FkRXJyXCI+c2V0TG9hZEVycjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldExvYWRlZFwiPnNldExvYWRlZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHNsb3Q9XCJlcnJcIj5cbiAgICAgICAgPHA+TG9hZCBFcnI8L3A+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwicmVzZXRMb2FkXCI+cmVzZXRMb2FkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2xvdD1cIm5vdC1sb2FkXCI+XG4gICAgICAgIDxwPk5vdCBsb2FkPC9wPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldExvYWRpbmdcIj5zZXRMb2FkaW5nPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xhenktY29tcD5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VJbWdcIj5DaGFuZ2UgaW1nPC9idXR0b24+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cImNoYW5nZUltZ3NcIj5DaGFuZ2UgaW1nczwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBMYXp5Q29tcCwgSW5WaWV3Q29tcCwgQ09NUF9OT1RfTE9BRCwgQ09NUF9MT0FESU5HLCBDT01QX0xPQURFRCwgQ09NUF9FUlIgfSBmcm9tICcuLi8uLi9zcmMnO1xuXG5cdGNvbnN0IExJU1RfTEVOID0gNTtcblx0Y29uc3QgTk9UX0VYSVNUU19NQVJLRVIgPSAnJE5PVF9FWElTVFMkJztcblxuXHRmdW5jdGlvbiBnZW5JbWdTcmMoKSB7XG5cdFx0cmV0dXJuICdpbWcvbGVubmEucG5nP190PScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApICsgJy4nICsgRGF0ZS5ub3coKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdlbkltZ0xpc3QobGVuKSB7XG5cdFx0Y29uc3QgYXJyID0gW107XG5cdFx0d2hpbGUgKGxlbi0tKSB7XG5cdFx0XHRhcnIucHVzaChnZW5JbWdTcmMoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnI7XG5cdH1cblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0TGF6eUNvbXAsXG5cdFx0XHRJblZpZXdDb21wLFxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdGNvbnN0ICR2bSA9IHRoaXM7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsYXp5Q29tcFN0YXQ6IENPTVBfTk9UX0xPQUQsXG5cdFx0XHRcdGxhenlGaWx0ZXJzOiBbXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKHYpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2ICsgJyZfdD0nICsgRGF0ZS5ub3coKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRub3RFeGlzdHNGaWx0ZXJzOiBbXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKHYpIHtcblx0XHRcdFx0XHRcdHJldHVybiBOT1RfRVhJU1RTX01BUktFUiArIHY7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdFx0aW5WaWV3Q29tcFRleHQ6ICdJblZpZXdDb21wIEluaXRpYWxpemF0aW9uJyxcblx0XHRcdFx0aW5WaWV3T3B0czoge1xuXHRcdFx0XHRcdG9uRW50ZXIoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBUWFQgPSAnb24gZW50ZXIgdmlldyEnO1xuXHRcdFx0XHRcdFx0JHZtLmluVmlld0NvbXBUZXh0ID0gVFhUO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coVFhUKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uTGVhdmUoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBUWFQgPSAnb24gbGVhdmUgdmlldyEnO1xuXHRcdFx0XHRcdFx0JHZtLmluVmlld0NvbXBUZXh0ID0gVFhUO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coVFhUKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYXp5Q29tcE9wdHM6IHtcblx0XHRcdFx0XHRvbkluVmlldygpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpbiB2aWV3IHRyaWdnZXJlZCcpO1xuXHRcdFx0XHRcdFx0Ly8gQ2FsbCBtZXRob2RzIG9mIExhenlDb21wIHRvIHNldCBcInN0YXRcIiBvZiBMYXp5TG9hZGVyIHRvIHBhdXNlIHRoaXMgY2FsbGJhY2sgY2FsbGluZ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhyb3R0bGVNZXRob2Q6ICd0aHJvdHRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltZzogZ2VuSW1nU3JjKCksXG5cdFx0XHRcdGltZ3M6IGdlbkltZ0xpc3QoTElTVF9MRU4pLFxuXHRcdFx0XHRpbWdzRElWOiBnZW5JbWdMaXN0KExJU1RfTEVOKSxcblx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRsYXp5UmV0cnlGbihpbmZvKSB7XG5cdFx0XHRcdGNvbnN0IHsgb1NyYywgbmV4dCB9ID0gaW5mbztcblx0XHRcdFx0bmV4dCh7XG5cdFx0XHRcdFx0c3JjOiBvU3JjLnJlcGxhY2UoTk9UX0VYSVNUU19NQVJLRVIsICcnKSxcblx0XHRcdFx0XHQvLyBmYWlsZWQ6IHRydWUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGxhenlPbkxvYWQoaW5mbykge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgbGF6eU9uTG9hZDogJHtpbmZvLnNyY31gLCBpbmZvLmVsKTtcblx0XHRcdH0sXG5cdFx0XHRsYXp5T25FcnIoaW5mbykge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgbGF6eU9uRXJyOiAke2luZm8uc3JjfWAsIGluZm8uZWwpO1xuXHRcdFx0fSxcblx0XHRcdGNoYW5nZUltZygpIHtcblx0XHRcdFx0dGhpcy5pbWcgPSBnZW5JbWdTcmMoKTtcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2VJbWdzKCkge1xuXHRcdFx0XHR0aGlzLmltZ3MgPSBnZW5JbWdMaXN0KExJU1RfTEVOKTtcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2VTaG93KCkge1xuXHRcdFx0XHR0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuXHRcdFx0fSxcblx0XHRcdGNoYW5nZVRlc3QoKSB7XG5cdFx0XHRcdHRoaXMudGVzdCA9ICF0aGlzLnRlc3Q7XG5cdFx0XHR9LFxuXHRcdFx0c2V0TG9hZGluZygpIHtcblx0XHRcdFx0dGhpcy5sYXp5Q29tcFN0YXQgPSBDT01QX0xPQURJTkc7XG5cdFx0XHR9LFxuXHRcdFx0c2V0TG9hZEVycigpIHtcblx0XHRcdFx0dGhpcy5sYXp5Q29tcFN0YXQgPSBDT01QX0VSUjtcblx0XHRcdH0sXG5cdFx0XHRzZXRMb2FkZWQoKSB7XG5cdFx0XHRcdHRoaXMubGF6eUNvbXBTdGF0ID0gQ09NUF9MT0FERUQ7XG5cdFx0XHR9LFxuXHRcdFx0cmVzZXRMb2FkKCkge1xuXHRcdFx0XHR0aGlzLmxhenlDb21wU3RhdCA9IENPTVBfTk9UX0xPQUQ7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8Y29tcG9uZW50IDppcz1cInRhZ1wiPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9jb21wb25lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgbm9vcCBmcm9tICdsb2Rhc2gvbm9vcCc7XG5cdGltcG9ydCB7IGdldExhenlMb2FkZXIgfSBmcm9tICcuL2luZGV4JztcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ0luVmlld0NvbXAnLFxuXHRcdHByb3BzOiB7XG5cdFx0XHR0YWc6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnZGl2Jyxcblx0XHRcdH0sXG5cdFx0XHRvcHRzOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0Y29uc3QgJHZtID0gdGhpcztcblx0XHRcdGNvbnN0IHsgb3B0cyB9ID0gJHZtO1xuXHRcdFx0Y29uc3QgX29wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKTtcblxuXHRcdFx0Y29uc3QgY3RybCA9IHtcblx0XHRcdFx0ZW5kQ2hlY2s6ICR2bS5lbmRDaGVjayxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHsgb25JblZpZXcgfSA9IF9vcHRzO1xuXHRcdFx0aWYgKG9uSW5WaWV3KSB7XG5cdFx0XHRcdF9vcHRzLmxvYWRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG9uSW5WaWV3KGN0cmwpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9vcHRzLmxvYWRIYW5kbGVyID0gbm9vcDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRG8gbm90aGluZyBidXQga2VlcCBjaGVja2luZ1xuXHRcdFx0Y29uc3QgJGxhenkgPSBjdHJsLiRsYXp5ID0gJHZtLiRsYXp5ID0gbmV3IChnZXRMYXp5TG9hZGVyKCkpKE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0XHRlbDogJHZtLiRlbCxcblx0XHRcdH0sIF9vcHRzKSk7XG5cdFx0XHQkbGF6eS5jaGVjaygpO1xuXHRcdH0sXG5cdFx0ZGVzdHJveWVkKCkge1xuXHRcdFx0dGhpcy5lbmRDaGVjaygpO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0ZW5kQ2hlY2soKSB7XG5cdFx0XHRcdGNvbnN0ICR2bSA9IHRoaXM7XG5cdFx0XHRcdGNvbnN0IHsgJGxhenkgfSA9ICR2bTtcblx0XHRcdFx0aWYgKCRsYXp5KSB7XG5cdFx0XHRcdFx0JGxhenkuZGVzdHJveSgpO1xuXHRcdFx0XHRcdCR2bS4kbGF6eSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cdDxpbi12aWV3LWNvbXAgcmVmPVwiY1wiIDpjbGFzcz1cImNDbGFzc1wiIDp0YWc9XCJ0YWdcIiA6b3B0cz1cImNPcHRzXCI+XG5cdFx0PHNsb3Qgdi1pZj1cInN0YXQgPT09IENPTVBfTk9UX0xPQURcIiBuYW1lPVwibm90LWxvYWRcIj48L3Nsb3Q+XG5cdFx0PHNsb3Qgdi1lbHNlLWlmPVwic3RhdCA9PT0gQ09NUF9MT0FESU5HXCIgbmFtZT1cImxvYWRpbmdcIj48L3Nsb3Q+XG5cdFx0PHNsb3Qgdi1lbHNlLWlmPVwic3RhdCA9PT0gQ09NUF9FUlJcIiBuYW1lPVwiZXJyXCI+PC9zbG90PlxuXHRcdDxzbG90IHYtZWxzZT48L3Nsb3Q+XG5cdDwvaW4tdmlldy1jb21wPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEluVmlld0NvbXAgZnJvbSAnLi9JblZpZXdDb21wLnZ1ZSc7XG5cdGltcG9ydCB7IFNUQVRfTk9UX0xPQUQsIFNUQVRfTE9BRElORywgU1RBVF9MT0FERUQgfSBmcm9tICcuL2xhenknO1xuXG5cdGV4cG9ydCBjb25zdCBDT01QX05PVF9MT0FEID0gMDtcblx0ZXhwb3J0IGNvbnN0IENPTVBfTE9BRElORyA9IDE7XG5cdGV4cG9ydCBjb25zdCBDT01QX0xPQURFRCA9IDI7XG5cdGV4cG9ydCBjb25zdCBDT01QX0VSUiA9IC0xO1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnTGF6eUNvbXAnLFxuXHRcdHByb3BzOiB7XG5cdFx0XHR0YWc6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnZGl2Jyxcblx0XHRcdH0sXG5cdFx0XHRvcHRzOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdH0sXG5cdFx0XHQvKlxuXHRcdFx0XHRUaGVyZSdzIGEgYnVnIGluIFZ1ZS4gSWYgeW91IHByb3ZpZGUgc29tZSBtZXRob2RzIGZvciBvdXRzaWRlIGNvbXBvbmVudHMgdG8gY2hhbmdlIHRoZSBzdGF0IG9mIFwiZGF0YVwiLFxuXHRcdFx0XHR5b3Ugd2lsbCBsb3NlIHNvbWUgZXZlbnQgbGlzdGVuZXJzIGFmdGVyIHlvdSBjaGFuZ2UgdGhlIHN0YXQgdG8gYW5vdGhlciBhbmQgY2hhbmdlIGl0IGJhY2tcblx0XHRcdFx0KGVnLiBUaGUgbWV0aG9kcyBvZiBAZXZlbnQgd29uJ3QgYmUgdHJpZ2dlcmVkIGFmdGVyIGl0J3MgY2hhbmdlZCBiYWNrKS5cblx0XHRcdFx0U28gSSBoYXZlIHRvIGRlc2lnbiBhIHByb3AgYXMgdGhlIHN3aXRjaGVyIG9mIHNsb3RzLiBBbmQgdG8gY29udHJvbCB0aGUgc3RhdCBvZiBMYXp5TG9hZGVyLFxuXHRcdFx0XHR5b3Ugd2lsbCBoYXZlIHRvIGNoYW5nZSB0aGUgcHJvcHMgXCJzdGF0XCIgaW4gdGhlIFwib25JblZpZXdcIiBjYWxsYmFjay5cblx0XHRcdFx0VGhlIGluaXRpYWwgc3RhdCBNVVNUIGJlIENPTVBfTk9UX0xPQUQgYW5kIHRoZSBzdGF0IFNIT1VMRCBOT1QgYmUgY2hhbmdlZFxuXHRcdFx0XHR1bnRpbCB0aGlzIGNvbXBvbmVudCBpcyBtb3VudGVkIGZvciBJblZpZXdDb21wJ3MgTGF6eUxvYWRlcidzIGluaXRpYWxpemF0aW9uLlxuXHRcdCAgICovXG5cdFx0XHRzdGF0OiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogQ09NUF9OT1RfTE9BRCxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Q09NUF9OT1RfTE9BRCxcblx0XHRcdFx0Q09NUF9MT0FESU5HLFxuXHRcdFx0XHRDT01QX0xPQURFRCxcblx0XHRcdFx0Q09NUF9FUlIsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0SW5WaWV3Q29tcCxcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRjQ2xhc3MoKSB7XG5cdFx0XHRcdGNvbnN0ICR2bSA9IHRoaXM7XG5cdFx0XHRcdGNvbnN0IF9jbGFzcyA9IHt9O1xuXHRcdFx0XHRjb25zdCBvcHRzID0gJHZtLmNPcHRzO1xuXHRcdFx0XHRzd2l0Y2ggKCR2bS5zdGF0KSB7XG5cdFx0XHRcdFx0Y2FzZSBDT01QX0xPQURJTkc6XG5cdFx0XHRcdFx0XHRfY2xhc3Nbb3B0cy5jbGFzc0NvbXBMb2FkaW5nXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIENPTVBfTE9BREVEOlxuXHRcdFx0XHRcdFx0X2NsYXNzW29wdHMuY2xhc3NDb21wTG9hZGVkXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIENPTVBfRVJSOlxuXHRcdFx0XHRcdFx0X2NsYXNzW29wdHMuY2xhc3NDb21wRXJyXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIENPTVBfTk9UX0xPQUQ6XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdF9jbGFzc1tvcHRzLmNsYXNzQ29tcE5vdExvYWRdID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBfY2xhc3M7XG5cdFx0XHR9LFxuXHRcdFx0Y09wdHMoKSB7XG5cdFx0XHRcdGNvbnN0ICR2bSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAvLyBVc2UgY2xhc3MgbmFtZXMgd2hpY2ggYXJlIGRpZmZlcmVudCBmcm9tIExhenkgdG8gYXZvaWQgZXh0ZW5zaW9uIG9mIGFzY2VuZGFudHMnIG9wdGlvbnNcblx0XHRcdFx0XHRjbGFzc0NvbXBOb3RMb2FkOiAnY29tcC1zdGF0LW5vdC1sb2FkJyxcblx0XHRcdFx0XHRjbGFzc0NvbXBMb2FkaW5nOiAnY29tcC1zdGF0LWxvYWRpbmcnLFxuXHRcdFx0XHRcdGNsYXNzQ29tcEVycjogJ2NvbXAtc3RhdC1lcnInLFxuXHRcdFx0XHRcdGNsYXNzQ29tcExvYWRlZDogJ2NvbXAtc3RhdC1sb2FkZWQnLFxuXHRcdFx0XHR9LCAkdm0ub3B0cyk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHN0YXQodikge1xuXHRcdFx0XHRjb25zdCAkdm0gPSB0aGlzO1xuXHRcdFx0XHRzd2l0Y2ggKHYpIHtcblx0XHRcdFx0XHRjYXNlIENPTVBfTE9BRElORzpcblx0XHRcdFx0XHRcdCR2bS5zZXRMb2FkZXJMb2FkaW5nKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIENPTVBfRVJSOlxuXHRcdFx0XHRcdFx0JHZtLnNldExvYWRlckxvYWRFcnIoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQ09NUF9MT0FERUQ6XG5cdFx0XHRcdFx0XHQkdm0uc2V0TG9hZGVyTG9hZGVkKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIENPTVBfTk9UX0xPQUQ6XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdCR2bS5yZXNldExvYWRlckxvYWQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGMoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRyZWZzLmM7XG5cdFx0XHR9LFxuXHRcdFx0c2V0TG9hZGVyTG9hZGluZygpIHtcblx0XHRcdFx0Y29uc3QgJHZtID0gdGhpcztcblx0XHRcdFx0Y29uc3QgeyAkbGF6eSB9ID0gJHZtLmMoKTtcblx0XHRcdFx0aWYgKCRsYXp5KSB7XG5cdFx0XHRcdFx0JGxhenkuc3RhdCA9IFNUQVRfTE9BRElORztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNldExvYWRlckxvYWRFcnIoKSB7XG5cdFx0XHRcdGNvbnN0ICR2bSA9IHRoaXM7XG5cdFx0XHRcdGNvbnN0IHsgJGxhenkgfSA9ICR2bS5jKCk7XG5cdFx0XHRcdGlmICgkbGF6eSkge1xuXHRcdFx0XHRcdCRsYXp5LnN0YXQgPSBTVEFUX0xPQURFRDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNldExvYWRlckxvYWRlZCgpIHtcblx0XHRcdFx0Y29uc3QgJHZtID0gdGhpcztcblx0XHRcdFx0Y29uc3QgeyAkbGF6eSwgZW5kQ2hlY2sgfSA9ICR2bS5jKCk7XG5cdFx0XHRcdGlmICgkbGF6eSkge1xuXHRcdFx0XHRcdCRsYXp5LnN0YXQgPSBTVEFUX0xPQURFRDtcblx0XHRcdFx0XHQvLyBFbmQgY2hlY2tpbmcgYXV0b21hdGljYWxseSBpZiBpdCdzIGxvYWRlZFxuXHRcdFx0XHRcdGVuZENoZWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyZXNldExvYWRlckxvYWQoKSB7XG5cdFx0XHRcdGNvbnN0ICR2bSA9IHRoaXM7XG5cdFx0XHRcdGNvbnN0IHsgJGxhenkgfSA9ICR2bS5jKCk7XG5cdFx0XHRcdGlmICgkbGF6eSkge1xuXHRcdFx0XHRcdCRsYXp5LnN0YXQgPSBTVEFUX05PVF9MT0FEO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sYXp5LXJlZiB7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbmltZyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uaW1nLWRpdiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4ubGF6eS1sb2FkaW5nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcbi5sYXp5LWxvYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luOiAtMjBweCAwIDAgLTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICAtbW96LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgLW8tYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxufVxcbi5idXR0b25zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgei1pbmRleDogMjA7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpO1xcbn1cXG41MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcXG59XFxufVxcbkAtbW96LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XFxuMCUge1xcbiAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcXG4gICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xcbn1cXG41MCUge1xcbiAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcXG4gICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcXG59XFxufVxcbkAtby1rZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xcbjAlIHtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcXG59XFxuNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xcbjAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XFxuICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcXG59XFxuNTAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcXG4gICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XFxuICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XFxufVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdi1saXN0XCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmltZ3NESVYsIGZ1bmN0aW9uKGltZykge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGF6eVwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWxhenlcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHNyYzogaW1nLCBtb2RlOiBcImJnXCIsIGZpbHRlcnM6IF92bS5sYXp5RmlsdGVycyB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7c3JjOmltZywgbW9kZTogJ2JnJywgZmlsdGVyczogbGF6eUZpbHRlcnN9XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1kaXZcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImxhenktcmVmXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwibGF6eVJlZlwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhenktcmVmXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG9wdHM6IHtcbiAgICAgICAgICAgICAgY2xhc3NUYXJnZXQ6IFwicGFyZW50XCIsXG4gICAgICAgICAgICAgIHJldHJ5OiBfdm0ubGF6eVJldHJ5Rm4sXG4gICAgICAgICAgICAgIGZpbHRlcnM6IF92bS5ub3RFeGlzdHNGaWx0ZXJzLFxuICAgICAgICAgICAgICBvbkxvYWQ6IF92bS5sYXp5T25Mb2FkLFxuICAgICAgICAgICAgICBvbkVycjogX3ZtLmxhenlPbkVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGF6eVwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWxhenlcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHJlZjogXCJsYXp5UmVmXCIsIHNyYzogX3ZtLmltZyB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7cmVmOidsYXp5UmVmJywgc3JjOmltZ31cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmltZ3MsIGZ1bmN0aW9uKGltZykge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGF6eVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgcmVmOiBcImxhenlSZWZcIiwgc3JjOiBpbWcgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIntyZWY6J2xhenlSZWYnLCBzcmM6aW1nfVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLmltZ3MsIGZ1bmN0aW9uKGltZykge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogeyBjbGFzc1RhcmdldDogXCJwYXJlbnRcIiwgc3JjOiBpbWcgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwie2NsYXNzVGFyZ2V0OidwYXJlbnQnLCBzcmM6aW1nfVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImluLXZpZXctY29tcFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluLXZpZXctY29tcFwiLCBhdHRyczogeyBvcHRzOiBfdm0uaW5WaWV3T3B0cyB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pblZpZXdDb21wVGV4dCkpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJsYXp5LWNvbXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhenktY29tcFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBvcHRzOiBfdm0ubGF6eUNvbXBPcHRzLFxuICAgICAgICAgICAgc3RhdDogX3ZtLmxhenlDb21wU3RhdCxcbiAgICAgICAgICAgIHRhZzogXCJzZWN0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbX2MoXCJwXCIsIFtfdm0uX3YoXCJMb2FkZWQsIGxvYWRlciBkZXN0cm95ZWRcIildKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBzbG90OiBcImxvYWRpbmdcIiB9LCBzbG90OiBcImxvYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkxvYWRpbmdcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uc2V0TG9hZEVyciB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwic2V0TG9hZEVyclwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3ZtLnNldExvYWRlZCB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwic2V0TG9hZGVkXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBzbG90OiBcImVyclwiIH0sIHNsb3Q6IFwiZXJyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJMb2FkIEVyclwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5yZXNldExvYWQgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcInJlc2V0TG9hZFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgc2xvdDogXCJub3QtbG9hZFwiIH0sIHNsb3Q6IFwibm90LWxvYWRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIk5vdCBsb2FkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3ZtLnNldExvYWRpbmcgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcInNldExvYWRpbmdcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LCBbXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5jaGFuZ2VJbWcgfSB9LCBbX3ZtLl92KFwiQ2hhbmdlIGltZ1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uY2hhbmdlSW1ncyB9IH0sIFtfdm0uX3YoXCJDaGFuZ2UgaW1nc1wiKV0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhfdm0udGFnLCB7IHRhZzogXCJjb21wb25lbnRcIiB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImluLXZpZXctY29tcFwiLFxuICAgIHsgcmVmOiBcImNcIiwgY2xhc3M6IF92bS5jQ2xhc3MsIGF0dHJzOiB7IHRhZzogX3ZtLnRhZywgb3B0czogX3ZtLmNPcHRzIH0gfSxcbiAgICBbXG4gICAgICBfdm0uc3RhdCA9PT0gX3ZtLkNPTVBfTk9UX0xPQURcbiAgICAgICAgPyBfdm0uX3QoXCJub3QtbG9hZFwiKVxuICAgICAgICA6IF92bS5zdGF0ID09PSBfdm0uQ09NUF9MT0FESU5HXG4gICAgICAgID8gX3ZtLl90KFwibG9hZGluZ1wiKVxuICAgICAgICA6IF92bS5zdGF0ID09PSBfdm0uQ09NUF9FUlJcbiAgICAgICAgPyBfdm0uX3QoXCJlcnJcIilcbiAgICAgICAgOiBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFiMTJlM2Q2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5WaWV3Q29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZhNTgzZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5WaWV3Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luVmlld0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxkZWxldGVcXFxccHJvZ3JhbXNcXFxcTXkgREJhbmtcXFxcV2ViXFxcXE1pbmVcXFxcdnVlLWwtbGF6eWxvYWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJmYTU4M2QyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJmYTU4M2QyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JblZpZXdDb21wLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZmE1ODNkMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZmE1ODNkMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0luVmlld0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luVmlld0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5WaWV3Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5WaWV3Q29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZhNTgzZDImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xhenlDb21wLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzg4M2ZjOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MYXp5Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xhenlDb21wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcZGVsZXRlXFxcXHByb2dyYW1zXFxcXE15IERCYW5rXFxcXFdlYlxcXFxNaW5lXFxcXHZ1ZS1sLWxhenlsb2FkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNzg4M2ZjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNzg4M2ZjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTGF6eUNvbXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ODgzZmM4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA3ODgzZmM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvTGF6eUNvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhenlDb21wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhenlDb21wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MYXp5Q29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc4ODNmYzgmXCIiLCJpbXBvcnQge1xuXHRpc1N0cixcbn0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IExhenlDbGFzcyB9IGZyb20gJy4vbGF6eSc7XG5pbXBvcnQgX0xhenlDb21wIGZyb20gJy4vTGF6eUNvbXAudnVlJztcbmltcG9ydCBfSW5WaWV3Q29tcCBmcm9tICcuL0luVmlld0NvbXAudnVlJztcblxuZXhwb3J0IHsgU1RBVF9OT1RfTE9BRCwgU1RBVF9MT0FESU5HLCBTVEFUX0xPQURFRCB9IGZyb20gJy4vbGF6eSc7XG5leHBvcnQgeyBDT01QX05PVF9MT0FELCBDT01QX0xPQURJTkcsIENPTVBfTE9BREVELCBDT01QX0VSUiB9IGZyb20gJy4vTGF6eUNvbXAudnVlJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogdnVlLWwtbGF6eWxvYWRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgLSBOT1cgTGlnaHQgTGV1bmdcbiAqXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuXG5sZXQgTGF6eUxvYWRlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhenlMb2FkZXIoKSB7XG5cdHJldHVybiBMYXp5TG9hZGVyO1xufVxuXG5mdW5jdGlvbiBsb2coY29udGVudCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRjb25zb2xlLmxvZyhgdi1sLWxhenlsb2FkOiAke2NvbnRlbnR9YCk7XG59XG5cbmV4cG9ydCBjb25zdCBMYXp5UmVmID0ge1xuXHRwcm9wczoge1xuXHRcdHRhZzoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ2RpdicsXG5cdFx0fSxcblx0XHRvcHRzOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdHJlbmRlcihjcmVhdGVFbGVtZW50KSB7XG5cdFx0Y29uc3QgbWUgPSB0aGlzO1xuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KG1lLnRhZywgbWUuJHNsb3RzLmRlZmF1bHQpO1xuXHR9LFxuXHRtb3VudGVkKCkge1xuXHRcdGNvbnN0IHZtID0gdGhpcyxcblx0XHRcdGVsID0gdm0uJGVsO1xuXG5cdFx0dm0uJGxhenkgPSBuZXcgTGF6eUxvYWRlcih7XG5cdFx0XHQuLi52bS5vcHRzLFxuXHRcdFx0ZWwsXG5cdFx0fSk7XG5cdFx0Ly8gSW5pdGlhbCBjaGVjayB0byB1cGRhdGUgbGFzdEluVmlldyBzdGF0dXNcblx0XHR2bS5jaGVjaygpO1xuXHR9LFxuXHRkZXN0cm95ZWQoKSB7XG5cdFx0dGhpcy4kbGF6eS5kZXN0cm95KCk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjaGVjaygpIHtcblx0XHRcdHRoaXMuJGxhenkuY2hlY2soKTtcblx0XHR9LFxuXHRcdGFkZChsYXp5TG9hZGVyKSB7XG5cdFx0XHR0aGlzLiRsYXp5LmFkZENoaWxkKGxhenlMb2FkZXIpO1xuXHRcdH0sXG5cdFx0dXBkYXRlKG9wdHMpIHtcblx0XHRcdHRoaXMuJGxhenkudXBkYXRlKG9wdHMpO1xuXHRcdH0sXG5cdFx0cm0obGF6eUxvYWRlcikge1xuXHRcdFx0dGhpcy4kbGF6eS5ybUNoaWxkKGxhenlMb2FkZXIpO1xuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgTGF6eSA9IHtcblx0YmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcblx0XHRsZXQgb3B0cyA9IGJpbmRpbmcudmFsdWU7XG5cblx0XHRpZiAoaXNTdHIob3B0cykpIHtcblx0XHRcdG9wdHMgPSB7XG5cdFx0XHRcdHNyYzogb3B0cyxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dm5vZGUuX2xhenlCb3VuZCA9IHRydWU7XG5cblx0XHRjb25zdCB2bSA9IHZub2RlLmNvbnRleHQsXG5cdFx0XHRyZWZTdHIgPSBvcHRzLnJlZjtcblxuXHRcdC8vIGFkZCB0byBhZnRlciAkcmVmcyBoYXMgcmVmZXJlbmNlc1xuXHRcdHZtLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRsZXQgcmVmO1xuXHRcdFx0Ly8gUHJldmVudCBpdCdzIHVuYm91bmQgYmVmb3JlIGluaXRpYWxpemF0aW9uXG5cdFx0XHRpZiAodm5vZGUuX2xhenlCb3VuZCkge1xuXHRcdFx0XHRpZiAocmVmU3RyKSB7XG5cdFx0XHRcdFx0cmVmID0gdm0uJHJlZnNbcmVmU3RyXTtcblx0XHRcdFx0XHRpZiAoIXJlZikge1xuXHRcdFx0XHRcdFx0bG9nKGByZWYgXCIke3JlZlN0cn1cIiBub3QgZm91bmRgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBtZXJnZWRPcHRzID0ge1xuXHRcdFx0XHRcdFx0Li4ub3B0cyxcblx0XHRcdFx0XHRcdGVsLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0JGxhenkgPSByZWYgJiYgcmVmLiRsYXp5O1xuXG5cdFx0XHRcdGlmICgkbGF6eSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bWVyZ2VkT3B0cy5wYXJlbnQgPSAkbGF6eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGxvYWRlciA9IHZub2RlLl8kbGF6eSA9IG5ldyBMYXp5TG9hZGVyKG1lcmdlZE9wdHMpO1xuXG5cdFx0XHRcdGxvYWRlci5jaGVjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRjb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSwgb3Zub2RlKSB7XG5cdFx0dmFyIG9wdHMgPSBiaW5kaW5nLnZhbHVlLFxuXHRcdFx0b09wdHMgPSBiaW5kaW5nLm9sZFZhbHVlLFxuXHRcdFx0blNyYyA9IGlzU3RyKG9wdHMpID8gb3B0cyA6IG9wdHMuc3JjLFxuXHRcdFx0b1NyYyA9IGlzU3RyKG9PcHRzKSA/IG9PcHRzIDogb09wdHMuc3JjO1xuXG5cdFx0Ly8gdm5vZGUgd2lsbCBiZSByZWNyZWF0ZWQgZHVyaW5nIHVwZGF0ZVxuXHRcdGlmICh2bm9kZSAhPT0gb3Zub2RlKSB7XG5cdFx0XHR2bm9kZS5fbGF6eUJvdW5kID0gb3Zub2RlLl9sYXp5Qm91bmQ7XG5cdFx0XHR2bm9kZS5fJGxhenkgPSBvdm5vZGUuXyRsYXp5O1xuXHRcdH1cblxuXHRcdGlmIChuU3JjICE9IG9TcmMpIHtcblx0XHRcdGNvbnN0IGxvYWRlciA9IHZub2RlLl8kbGF6eTtcblxuXHRcdFx0aWYgKGxvYWRlcikge1xuXHRcdFx0XHRsb2FkZXIudXBkYXRlKHtcblx0XHRcdFx0XHRzcmM6IG5TcmMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0dW5iaW5kKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fbGF6eUJvdW5kKSB7XG5cdFx0XHR2bm9kZS5fbGF6eUJvdW5kID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRW5zdXJlIHRoZSBsb2FkZXIgd2lsbCBiZSBkZXN0cm95ZWQgYWZ0ZXIgaXQncyBjcmVhdGVkXG5cdFx0dm5vZGUuY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0Y29uc3QgbG9hZGVyID0gdm5vZGUuXyRsYXp5O1xuXHRcdFx0aWYgKGxvYWRlcikge1xuXHRcdFx0XHRsb2FkZXIuZGVzdHJveSgpO1xuXHRcdFx0XHR2bm9kZS5fJGxhenkgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxufTtcblxuZXhwb3J0IGNvbnN0IEluVmlld0NvbXAgPSBfSW5WaWV3Q29tcDtcbmV4cG9ydCBjb25zdCBMYXp5Q29tcCA9IF9MYXp5Q29tcDtcblxuZXhwb3J0IGNvbnN0IFZ1ZUxMYXp5bG9hZCA9IHtcblx0aW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBhbGxPcHRzID0ge1xuXHRcdFx0cmVnR2xvYmFsOiB0cnVlLFxuXHRcdFx0Li4ub3B0aW9ucyxcblx0XHR9O1xuXG5cdFx0TGF6eUxvYWRlciA9IExhenlDbGFzcyhWdWUpO1xuXHRcdC8vIFNldCByb290IGxhenkgbG9hZGVyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuXHRcdG5ldyBMYXp5TG9hZGVyKHtcblx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0XHRpc1Jvb3Q6IHRydWUsXG5cdFx0fSk7XG5cblx0XHRpZiAoYWxsT3B0cy5yZWdHbG9iYWwpIHtcblx0XHRcdFZ1ZS5kaXJlY3RpdmUoJ2xhenknLCBMYXp5KTtcblxuXHRcdFx0VnVlLmNvbXBvbmVudCgnbGF6eS1yZWYnLCBMYXp5UmVmKTtcblx0XHR9XG5cdH0sXG59O1xuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcbmltcG9ydCB7XG5cdG9uLFxuXHRvZmYsXG5cdHRyaW0sXG5cdGFkZENsYXNzLFxuXHRyZW1vdmVDbGFzcyxcblx0YXR0cixcblx0Y3NzLFxuXHRyZW1vdmVBdHRyLFxuXHRvZmZzZXQsXG5cdGlzQXJyLFxuXHRpc0ZuLFxuXHRGTWFwLFxufSBmcm9tICcuL3V0aWwnO1xuXG4vLyBUT0RPIGludGVyc2VjdGlvbiBvYnNlcnZlclxuXG4vKiBnbG9iYWwgd2luZG93LCBJbWFnZSAqL1xuY29uc3QgRVZfU0NST0xMID0gJ3Njcm9sbCcsXG5cblx0Q0xBU1NfTE9BRElORyA9ICdsYXp5LWxvYWRpbmcnLFxuXHRDTEFTU19FUlIgPSAnbGF6eS1lcnInLFxuXHRDTEFTU19MT0FERUQgPSAnbGF6eS1sb2FkZWQnLFxuXG5cdENMQVNTX1RBUkdFVF9TRUxGID0gJ3NlbGYnLFxuXHRDTEFTU19UQVJHRVRfUEFSRU5UID0gJ3BhcmVudCcsXG5cblx0Ly8gVEhST1RUTEVfTUVUSE9EX1RIUk9UVExFID0gJ3Rocm90dGxlJyxcblx0VEhST1RUTEVfTUVUSE9EX0RFQk9VTkNFID0gJ2RlYm91bmNlJyxcblxuXHRNT0RFX0JHID0gJ2JnJyxcblx0d2luID0gd2luZG93O1xuXG5leHBvcnQgY29uc3QgU1RBVF9OT1RfTE9BRCA9IDA7XG5leHBvcnQgY29uc3QgU1RBVF9MT0FESU5HID0gMTtcbmV4cG9ydCBjb25zdCBTVEFUX0xPQURFRCA9IDI7XG5cbmxldCBsb2FkZXJJRCA9IDA7XG5cbmxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbnRyeSB7XG5cdGNvbnN0IG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuXHRcdGdldCgpIHtcblx0XHRcdHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG5cdFx0fSxcblx0fSk7XG5cdHdpbi5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG59XG5jYXRjaCAoZSkge1xuXHQvLyBlbXB0eVxufVxuXG5jbGFzcyBSZXEge1xuXHRjb25zdHJ1Y3Rvcih7IGVsLCBsb2FkRWwsIHNyYywgcmV0cnksIG9uTG9hZCwgb25FcnIsIG9uUmVxLCBmaWx0ZXJzIH0pIHtcblx0XHRjb25zdCBtZSA9IHRoaXM7XG5cblx0XHRmdW5jdGlvbiBfYmFzZUluZm8oKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlbCxcblx0XHRcdFx0c3JjOiBtZS5zcmMsXG5cdFx0XHRcdG9TcmM6IHNyYyxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbG9hZCgpIHtcblx0XHRcdHJlbW92ZUF0dHIobG9hZEVsLCAnc3JjJyk7XG5cdFx0XHRhdHRyKGxvYWRFbCwgJ3NyYycsIG1lLnNyYyk7XG5cdFx0XHRvblJlcSAmJiBvblJlcShfYmFzZUluZm8oKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gX29uRXJyKG9wdHMpIHtcblx0XHRcdG9uRXJyICYmIG9uRXJyKHtcblx0XHRcdFx0Li4uX2Jhc2VJbmZvKCksXG5cdFx0XHRcdC4uLm9wdHMsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhcHBseUZpbHRlcnMoc3JjKSB7XG5cdFx0XHRsZXQgcmV0ID0gc3JjO1xuXHRcdFx0aWYgKGZpbHRlcnMpIHtcblx0XHRcdFx0cmV0ID0gZmlsdGVycy5yZWR1Y2UoKGxhc3RSZXN1bHQsIGN1cikgPT4gY3VyKGxhc3RSZXN1bHQsIHsgZWwgfSksIHNyYyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5leHQocmVzdWx0KSB7XG5cdFx0XHRjb25zdCB7IGZhaWxlZCwgc3JjOiBuU3JjIH0gPSB7IGZhaWxlZDogZmFsc2UsIC4uLnJlc3VsdCB9O1xuXHRcdFx0aWYgKCFmYWlsZWQpIHtcblx0XHRcdFx0aWYgKG5TcmMpIHtcblx0XHRcdFx0XHRtZS5zcmMgPSBuU3JjO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG9hZCgpO1xuXHRcdFx0XHRtZS5jKys7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X29uRXJyKHtcblx0XHRcdFx0XHRpc0VuZDogdHJ1ZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWUuY2FuY2VsZWQgPSBmYWxzZTtcblx0XHRtZS5yZXRyeSA9IHJldHJ5O1xuXHRcdG1lLmMgPSAwO1xuXHRcdG1lLnNyYyA9IGFwcGx5RmlsdGVycyhzcmMpO1xuXG5cdFx0bG9hZEVsLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdC8vIE9ubHkgcmVxdWVzdHMgd2hpY2ggYXJlIG5vdCBjYW5jZWxlZCB3aWxsIG5vdGlmeSBldmVudHNcblx0XHRcdCFtZS5jYW5jZWxlZCAmJiBvbkxvYWQgJiYgb25Mb2FkKF9iYXNlSW5mbygpKTtcblx0XHR9O1xuXG5cdFx0bG9hZEVsLm9uZXJyb3IgPSAoKSA9PiB7XG5cdFx0XHQvLyBPbmx5IHJlcXVlc3RzIHdoaWNoIGFyZSBub3QgY2FuY2VsZWQgd2lsbCBub3RpZnkgZXZlbnRzXG5cdFx0XHRpZiAoIW1lLmNhbmNlbGVkKSB7XG5cdFx0XHRcdGNvbnN0IHJldHJ5ID0gbWUucmV0cnk7XG5cdFx0XHRcdGlmIChpc0ZuKHJldHJ5KSkge1xuXHRcdFx0XHRcdF9vbkVycigpO1xuXHRcdFx0XHRcdHJldHJ5KHtcblx0XHRcdFx0XHRcdC4uLl9iYXNlSW5mbygpLFxuXHRcdFx0XHRcdFx0dGltZXM6IG1lLmMsXG5cdFx0XHRcdFx0XHRuZXh0LFxuXHRcdFx0XHRcdFx0YXBwbHlGaWx0ZXJzLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKHJldHJ5ID09IC0xIHx8IHJldHJ5ID4gMCkge1xuXHRcdFx0XHRcdF9vbkVycigpO1xuXG5cdFx0XHRcdFx0bG9hZCgpO1xuXHRcdFx0XHRcdHJldHJ5ID4gMCAmJiBtZS5yZXRyeS0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdF9vbkVycih7XG5cdFx0XHRcdFx0XHRpc0VuZDogdHJ1ZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsb2FkKCk7XG5cdH1cblxuXHRjYW5jZWwoKSB7XG5cdFx0dGhpcy5jYW5jZWxlZCA9IHRydWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRIYW5kbGVyKGxhenlMb2FkZXIpIHtcblx0Y29uc3Qgb3B0cyA9IGxhenlMb2FkZXIub3B0cyxcblx0XHRvUmVxID0gbGF6eUxvYWRlci5yZXE7XG5cdHZhciB7XG5cdFx0XHRjbGFzc0Vycixcblx0XHRcdGNsYXNzTG9hZGVkLFxuXHRcdFx0Y2xhc3NMb2FkaW5nLFxuXHRcdFx0Y2xhc3NUYXJnZXQsXG5cdFx0XHRlbCxcblx0XHRcdG9uY2UsXG5cdFx0XHRyZXRyeSxcblx0XHRcdHNyYyxcblx0XHRcdGZpbHRlcnMsXG5cdFx0XHRvbkxvYWQsXG5cdFx0XHRvbkVycixcblx0XHRcdG9uUmVxLFxuXHRcdH0gPSBvcHRzLFxuXHRcdGxvYWRFbCA9IGVsLFxuXHRcdF9vbkxvYWQsXG5cdFx0X29uRXJyO1xuXG5cdGNvbnN0IGNsYXNzZXMgPSBbY2xhc3NMb2FkaW5nLCBjbGFzc0VyciwgY2xhc3NMb2FkZWRdLFxuXHRcdGVsQ2xhc3NUYXJnZXQgPSBjbGFzc1RhcmdldCA9PT0gQ0xBU1NfVEFSR0VUX1BBUkVOVCA/IGVsLnBhcmVudE5vZGUgfHwgZWwgOiBlbDtcblxuXHRmdW5jdGlvbiBzd2l0Y2hDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG5cdFx0cmVtb3ZlQ2xhc3MoZWwsIGNsYXNzZXMpO1xuXHRcdGFkZENsYXNzKGVsLCBjbGFzc05hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcblx0XHRsYXp5TG9hZGVyLnN0YXQgPSBTVEFUX0xPQURFRDtcblx0XHRvbmNlICYmIGxhenlMb2FkZXIuZGVzdHJveSgpO1xuXHR9XG5cblx0b1JlcSAmJiBvUmVxLmNhbmNlbCgpO1xuXG5cdHNyYyA9IHRyaW0oc3JjKTtcblxuXHRzd2l0Y2ggKGxhenlMb2FkZXIub3B0cy5tb2RlKSB7XG5cdFx0Y2FzZSBNT0RFX0JHOlxuXHRcdFx0Y3NzKGVsLCAnYmFja2dyb3VuZC1pbWFnZScsICcnKTtcblx0XHRcdF9vbkxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGNzcyhlbCwgJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7bGF6eUxvYWRlci5yZXEuc3JjfSlgKTtcblx0XHRcdH07XG5cdFx0XHRfb25FcnIgPSAoKSA9PiB7XG5cdFx0XHRcdGNzcyhlbCwgJ2JhY2tncm91bmQtaW1hZ2UnLCAnJyk7XG5cdFx0XHR9O1xuXHRcdFx0bG9hZEVsID0gbmV3IEltYWdlKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0Oi8vIGVtcHR5XG5cdH1cblxuXHQvLyBPbmx5IGNsYXNzZXMgYW5kIHN0YXR1cyBvZiBlbGVtZW50cyB3aGljaCBoYXMgc3JjIHNob3VsZCBiZSBjaGFuZ2VkXG5cdGlmIChzcmMpIHtcblx0XHRsYXp5TG9hZGVyLnN0YXQgPSBTVEFUX0xPQURJTkc7XG5cblx0XHRsYXp5TG9hZGVyLnJlcSA9IG5ldyBSZXEoe1xuXHRcdFx0ZWwsXG5cdFx0XHRsb2FkRWwsXG5cdFx0XHRzcmMsXG5cdFx0XHRyZXRyeSxcblx0XHRcdGZpbHRlcnMsXG5cdFx0XHRvbkxvYWQoaW5mbykge1xuXHRcdFx0XHRfb25Mb2FkICYmIF9vbkxvYWQoKTtcblx0XHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdFx0XHRzd2l0Y2hDbGFzcyhlbENsYXNzVGFyZ2V0LCBjbGFzc0xvYWRlZCk7XG5cblx0XHRcdFx0b25Mb2FkICYmIG9uTG9hZChpbmZvKTtcblx0XHRcdH0sXG5cdFx0XHRvbkVycihpbmZvKSB7XG5cdFx0XHRcdF9vbkVyciAmJiBfb25FcnIoKTtcblxuXHRcdFx0XHRpZiAoaW5mby5pc0VuZCkge1xuXHRcdFx0XHRcdG9uQ29tcGxldGUoKTtcblx0XHRcdFx0XHRzd2l0Y2hDbGFzcyhlbENsYXNzVGFyZ2V0LCBjbGFzc0Vycik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvbkVyciAmJiBvbkVycihpbmZvKTtcblx0XHRcdH0sXG5cdFx0XHRvblJlcSxcblx0XHR9KTtcblx0XHRzd2l0Y2hDbGFzcyhlbENsYXNzVGFyZ2V0LCBjbGFzc0xvYWRpbmcpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdG9uQ29tcGxldGUoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95TG9hZGVyRGVlcChsb2FkZXIpIHtcblx0Y29uc3QgeyBfY2hpbGRyZW4gfSA9IGxvYWRlcjtcblx0aWYgKF9jaGlsZHJlbi5zaXplKCkgPiAwKSB7XG5cdFx0X2NoaWxkcmVuLmtleXMoKS5mb3JFYWNoKGsgPT4gZGVzdHJveUxvYWRlckRlZXAoX2NoaWxkcmVuLmdldChrKSkpO1xuXHR9XG5cdC8vIElmIGl0J3MgYSBsZWFmIG5vZGUsIGRlc3Ryb3kgaXQgZGlyZWN0bHk7IElmIGl0J3Mgbm90LCBkZXN0cm95IGl0c2VsZiBhZnRlciBpdHMgY2hpbGRyZW4gaXMgZGVzdHJveWVkLlxuXHRsb2FkZXIuZGVzdHJveSgpO1xufVxuXG4vLyBUT0RPIGNoYW5nZSBwYXJlbnQgc3VwcG9ydFxuZXhwb3J0IGZ1bmN0aW9uIExhenlDbGFzcyhzY29wZSkge1xuXHRyZXR1cm4gY2xhc3MgTGF6eUxvYWRlciB7XG5cdFx0Y29uc3RydWN0b3Iob3B0cykge1xuXHRcdFx0Y29uc3QgbWUgPSB0aGlzO1xuXHRcdFx0b3B0cyA9IG9wdHMgfHwge307XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdC8vIFdoZXRoZXIgcm9vdCBMYXp5TG9hZGVyIG9yIG5vdC4gVGhlcmUgc2hvdWxkIGJlIG9ubHkgb25lIHJvb3QgbG9hZGVyLlxuXHRcdFx0XHRpc1Jvb3QsXG5cdFx0XHR9ID0gb3B0cztcblxuXHRcdFx0bGV0IHtcblx0XHRcdFx0Ly8gUGFyZW50IExhenlMb2FkZXJcblx0XHRcdFx0cGFyZW50LFxuXHRcdFx0fSA9IG9wdHM7XG5cblx0XHRcdC8vIHJvb3Qgbm9kZVxuXHRcdFx0aWYgKGlzUm9vdCkge1xuXHRcdFx0XHRvcHRzID0ge1xuXHRcdFx0XHRcdC8vIE93biBlbGVtZW50XG5cdFx0XHRcdFx0ZWw6IHdpbixcblx0XHRcdFx0XHQvLyBFdmVudHMgdG8gYmUgYm91bmRcblx0XHRcdFx0XHRldmVudHM6IFtFVl9TQ1JPTExdLFxuXHRcdFx0XHRcdC8vIENsYXNzIG5hbWUgb2YgbG9hZGluZ1xuXHRcdFx0XHRcdGNsYXNzTG9hZGluZzogQ0xBU1NfTE9BRElORyxcblx0XHRcdFx0XHQvLyBDbGFzcyBuYW1lIG9mIGxvYWRlZFxuXHRcdFx0XHRcdGNsYXNzTG9hZGVkOiBDTEFTU19MT0FERUQsXG5cdFx0XHRcdFx0Ly8gQ2xhc3MgbmFtZSBvZiBsb2FkIGVycm9yXG5cdFx0XHRcdFx0Y2xhc3NFcnI6IENMQVNTX0VSUixcblx0XHRcdFx0XHQvLyBFbGVtZW50IG9mIGNsYXNzIG5hbWUgdG8gYmUgY2hhbmdlZCB3aGVuIHRoZSBsb2FkIHN0YXQgY2hhbmdlc1xuXHRcdFx0XHRcdGNsYXNzVGFyZ2V0OiBDTEFTU19UQVJHRVRfU0VMRixcblx0XHRcdFx0XHQvLyBSZXRyeSBhbW91bnQsIDAgZm9yIG5vIHJldHJ5LCAtMSBmb3IgaW5maW5pdGUgcmV0cnkuXG5cdFx0XHRcdFx0cmV0cnk6IDAsXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGxpc3RlbmVyIGFmdGVyIGl0IGhhcyBsb2FkZWQgaWYgaXQgaXMgc2V0IHRvIHRydWUuXG5cdFx0XHRcdFx0b25jZTogdHJ1ZSxcblx0XHRcdFx0XHQvLyBUaGUgXCJyZXNpemVcIiByYXRpbyBvZiBwYXJlbnQgdmlldyB3aGVuIGl0J3MgY2hpbGRyZW4gdmlld3MgY29tcGFyZSB3aXRoIGl0LlxuXHRcdFx0XHRcdHByZWxvYWRSYXRpbzogMSxcblx0XHRcdFx0XHQvLyBUaHJvdHRsaW5nIG1ldGhvZFxuXHRcdFx0XHRcdHRocm90dGxlTWV0aG9kOiBUSFJPVFRMRV9NRVRIT0RfREVCT1VOQ0UsXG5cdFx0XHRcdFx0Ly8gVGhyb3R0bGluZyB0aW1lIGluIG1zXG5cdFx0XHRcdFx0dGhyb3R0bGVUaW1lOiAyNTAsXG5cdFx0XHRcdFx0Ly8gTG9hZCBoYW5kbGVyIHdoaWNoIGNvbnRyb2xzIHRoZSBsb2FkIHN0YXR1cyBhbmQgYmVoYXZpb3JzXG5cdFx0XHRcdFx0bG9hZEhhbmRsZXI6IGRlZmF1bHRMb2FkSGFuZGxlcixcblx0XHRcdFx0XHQuLi5vcHRzLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIGluaGVyaXQgcGFyZW50IExhenlMb2FkZXIncyBvcHRpb25zXG5cdFx0XHRcdGNvbnN0ICRyb290TGF6eSA9IHNjb3BlLiRsYXp5O1xuXHRcdFx0XHRvcHRzID0ge1xuXHRcdFx0XHRcdC4uLihwYXJlbnQgJiYgcGFyZW50Lm9wdHMgfHwgJHJvb3RMYXp5Lm9wdHMpLFxuXHRcdFx0XHRcdHBhcmVudDogJHJvb3RMYXp5LFxuXHRcdFx0XHRcdC4uLm9wdHMsXG5cdFx0XHRcdFx0aXNSb290OiBmYWxzZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRlbCxcblx0XHRcdFx0ZXZlbnRzLFxuXHRcdFx0XHR0aHJvdHRsZU1ldGhvZCxcblx0XHRcdFx0dGhyb3R0bGVUaW1lLFxuXHRcdFx0XHRsb2FkSGFuZGxlcixcblx0XHRcdH0gPSBvcHRzO1xuXHRcdFx0cGFyZW50ID0gb3B0cy5wYXJlbnQ7XG5cblx0XHRcdG1lLmlkID0gKytsb2FkZXJJRDtcblx0XHRcdG1lLl9jaGlsZHJlbiA9IG5ldyBGTWFwKCk7XG5cdFx0XHRtZS5fcXVldWVzID0ge307XG5cdFx0XHQvLyBzYXZlIGZvciByZW1vdmVcblx0XHRcdG1lLl9jYnMgPSB7fTtcblxuXHRcdFx0bWUucGFyZW50ID0gcGFyZW50O1xuXHRcdFx0bWUuZWwgPSBlbDtcblx0XHRcdG1lLnN0YXQgPSBTVEFUX05PVF9MT0FEO1xuXHRcdFx0Ly8gRXZlbnRzIHNob3VsZCBiZSB1cGRhdGVkIGFmdGVyIG9yaWdpbmFsIGV2ZW50cyBhcmUgcmVtb3ZlZC5cblx0XHRcdG1lLmV2ZW50cyA9IGlzQXJyKGV2ZW50cykgPyBldmVudHMgOiBbZXZlbnRzXTtcblx0XHRcdG1lLm9wdHMgPSBvcHRzO1xuXHRcdFx0bWUuX2xhc3RJblZpZXcgPSBmYWxzZTtcblx0XHRcdG1lLl90aHJvdHRsZSA9IHRocm90dGxlTWV0aG9kID09PSBUSFJPVFRMRV9NRVRIT0RfREVCT1VOQ0UgPyBkZWJvdW5jZSA6IHRocm90dGxlO1xuXHRcdFx0bWUuX3RUaW1lID0gdGhyb3R0bGVUaW1lO1xuXHRcdFx0bWUuX2xvYWRIYW5kbGVyID0gbG9hZEhhbmRsZXI7XG5cblx0XHRcdGlmIChwYXJlbnQpIHtcblx0XHRcdFx0cGFyZW50LmFkZENoaWxkKG1lKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5pdGlhbGl6ZSByb290ICRsYXp5XG5cdFx0XHRpZiAoaXNSb290ICYmICFzY29wZS4kbGF6eSkge1xuXHRcdFx0XHRzY29wZS4kbGF6eSA9IG1lO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNoZWNrKGV2TmFtZSkge1xuXHRcdFx0Y29uc3QgbWUgPSB0aGlzO1xuXHRcdFx0Y29uc3QgaXNJblZpZXcgPSBtZS5zdGF0IDwgU1RBVF9MT0FESU5HICYmIG1lLmluVmlldygpO1xuXG5cdFx0XHRpZiAoaXNJblZpZXcpIHtcblx0XHRcdFx0bWUuX2xvYWRIYW5kbGVyKG1lKTtcblxuXHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IG1lLl9jaGlsZHJlbjtcblxuXHRcdFx0XHRpZiAoY2hpbGRyZW4uc2l6ZSgpKSB7XG5cdFx0XHRcdFx0Y29uc3QgcXVldWVzID0gbWUuX3F1ZXVlcyxcblx0XHRcdFx0XHRcdHF1ZXVlID0gZXZOYW1lID8gcXVldWVzW2V2TmFtZV0gOiBjaGlsZHJlbjtcblxuXHRcdFx0XHRcdGlmIChxdWV1ZSkge1xuXHRcdFx0XHRcdFx0Y2hpbGRyZW4ua2V5cygpLmZvckVhY2goKGspID0+IHtcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4uZ2V0KGspXG5cdFx0XHRcdFx0XHRcdFx0LmNoZWNrKGV2TmFtZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpblZpZXcoKSB7XG5cdFx0XHRjb25zdCBtZSA9IHRoaXMsXG5cdFx0XHRcdHsgcGFyZW50LCBvcHRzLCBlbCB9ID0gbWUsXG5cdFx0XHRcdHsgb25FbnRlciwgb25MZWF2ZSB9ID0gb3B0cztcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGZhbHNlO1xuXG5cdFx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRcdGNvbnN0IHBhcmVudEVsID0gcGFyZW50LmVsLFxuXHRcdFx0XHRcdGlzUGFyZW50V2luID0gcGFyZW50RWwgPT09IHdpbjtcblx0XHRcdFx0Ly8gd2luZG93IGVsZW1lbnQgaXMgYWx3YXlzIGluIHZpZXdcblx0XHRcdFx0aWYgKGlzUGFyZW50V2luXG5cdFx0XHRcdFx0Ly8gT3IgdW50aWwgcGFyZW50IGluIHZpZXdcblx0XHRcdFx0XHR8fCBwYXJlbnQuX2xhc3RJblZpZXcpIHtcblx0XHRcdFx0XHRsZXQgcGFyZW50RWxUb3BTdXBwbGVtZW50ID0gMCxcblx0XHRcdFx0XHRcdHBhcmVudEVsSGVpZ2h0U3VwcGxlbWVudCA9IDAsXG5cdFx0XHRcdFx0XHRwYXJlbnRFbExlZnRTdXBwbGVtZW50ID0gMCxcblx0XHRcdFx0XHRcdHBhcmVudEVsV2lkdGhTdXBwbGVtZW50ID0gMDtcblx0XHRcdFx0XHRjb25zdCBwYXJlbnRFbE9mZnNldCA9IGlzUGFyZW50V2luID8ge1xuXHRcdFx0XHRcdFx0XHQvLyBJRSwgSSdtIGxvb2tpbmcgYXQgeW91XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IHdpbi5wYWdlWE9mZnNldCxcblx0XHRcdFx0XHRcdFx0dG9wOiB3aW4ucGFnZVlPZmZzZXQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiB3aW4uaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB3aW4uaW5uZXJIZWlnaHQsXG5cdFx0XHRcdFx0XHR9IDogb2Zmc2V0KHBhcmVudEVsKSxcblx0XHRcdFx0XHRcdHBhcmVudEVsTGVmdCA9IHBhcmVudEVsT2Zmc2V0LmxlZnQsXG5cdFx0XHRcdFx0XHRwYXJlbnRFbFRvcCA9IHBhcmVudEVsT2Zmc2V0LnRvcCxcblx0XHRcdFx0XHRcdHBhcmVudEVsV2lkdGggPSBwYXJlbnRFbE9mZnNldC53aWR0aCxcblx0XHRcdFx0XHRcdHBhcmVudEVsSGVpZ2h0ID0gcGFyZW50RWxPZmZzZXQuaGVpZ2h0O1xuXG5cdFx0XHRcdFx0aWYgKCFpc1BhcmVudFdpbikge1xuXHRcdFx0XHRcdFx0Y29uc3QgeyBwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW47XG5cdFx0XHRcdFx0XHRjb25zdCBkaWZmVG9wID0gcGFyZW50RWxUb3AgLSBwYWdlWU9mZnNldDtcblx0XHRcdFx0XHRcdGNvbnN0IGRpZmZCb3R0b20gPSBwYWdlWU9mZnNldCArIGlubmVySGVpZ2h0IC0gcGFyZW50RWxUb3AgLSBwYXJlbnRFbEhlaWdodDtcblx0XHRcdFx0XHRcdGNvbnN0IGRpZmZMZWZ0ID0gcGFyZW50RWxMZWZ0IC0gcGFnZVhPZmZzZXQ7XG5cdFx0XHRcdFx0XHRjb25zdCBkaWZmUmlnaHQgPSBwYWdlWE9mZnNldCArIGlubmVyV2lkdGggLSBwYXJlbnRFbExlZnQgLSBwYXJlbnRFbFdpZHRoO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2RpZmYnLCBkaWZmVG9wLCBkaWZmQm90dG9tLCBkaWZmTGVmdCwgZGlmZlJpZ2h0KTtcblx0XHRcdFx0XHRcdC8vIEd1YXJkIGZvciBwYXJlbnQgZWxlbWVudCBvdXRzaWRlIHRoZSB3aW5kb3dcblx0XHRcdFx0XHRcdHBhcmVudEVsVG9wU3VwcGxlbWVudCA9IGRpZmZUb3AgPCAwID8gZGlmZlRvcCA6IDA7XG5cdFx0XHRcdFx0XHRwYXJlbnRFbEhlaWdodFN1cHBsZW1lbnQgPSBwYXJlbnRFbFRvcFN1cHBsZW1lbnQgKyAoZGlmZkJvdHRvbSA8IDAgPyBkaWZmQm90dG9tIDogMCk7XG5cdFx0XHRcdFx0XHRwYXJlbnRFbExlZnRTdXBwbGVtZW50ID0gZGlmZkxlZnQgPCAwID8gZGlmZkxlZnQgOiAwO1xuXHRcdFx0XHRcdFx0cGFyZW50RWxXaWR0aFN1cHBsZW1lbnQgPSBwYXJlbnRFbExlZnRTdXBwbGVtZW50ICsgKGRpZmZSaWdodCA8IDAgPyBkaWZmUmlnaHQgOiAwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBwcmVsb2FkUmF0aW8gPSBtZS5vcHRzLnByZWxvYWRSYXRpbyxcblx0XHRcdFx0XHRcdGV4dHJhUHJlbG9hZFJhdGlvID0gcHJlbG9hZFJhdGlvIC0gMSxcblx0XHRcdFx0XHRcdGVsT2Zmc2V0ID0gb2Zmc2V0KGVsKSxcblx0XHRcdFx0XHRcdHBhcmVudEVsRXh0cmFXaWR0aCA9IChwYXJlbnRFbFdpZHRoICsgcGFyZW50RWxXaWR0aFN1cHBsZW1lbnQpICogZXh0cmFQcmVsb2FkUmF0aW8sXG5cdFx0XHRcdFx0XHRwYXJlbnRFbEV4dHJhSGVpZ2h0ID0gKHBhcmVudEVsSGVpZ2h0ICsgcGFyZW50RWxIZWlnaHRTdXBwbGVtZW50KSAqIGV4dHJhUHJlbG9hZFJhdGlvLFxuXHRcdFx0XHRcdFx0cGFyZW50RWxGaXhlZFRvcCA9IHBhcmVudEVsVG9wIC0gcGFyZW50RWxUb3BTdXBwbGVtZW50IC0gcGFyZW50RWxFeHRyYUhlaWdodCAvIDIsXG5cdFx0XHRcdFx0XHRwYXJlbnRFbEZpeGVkTGVmdCA9IHBhcmVudEVsTGVmdCAtIHBhcmVudEVsTGVmdFN1cHBsZW1lbnQgLSBwYXJlbnRFbEV4dHJhV2lkdGggLyAyLFxuXHRcdFx0XHRcdFx0cGFyZW50RWxGaXhlZFdpZHRoID0gcGFyZW50RWxXaWR0aCArIHBhcmVudEVsV2lkdGhTdXBwbGVtZW50ICsgcGFyZW50RWxFeHRyYVdpZHRoLFxuXHRcdFx0XHRcdFx0cGFyZW50RWxGaXhlZEhlaWdodCA9IHBhcmVudEVsSGVpZ2h0ICsgcGFyZW50RWxIZWlnaHRTdXBwbGVtZW50ICsgcGFyZW50RWxFeHRyYUhlaWdodCxcblx0XHRcdFx0XHRcdGVsTGVmdCA9IGVsT2Zmc2V0LmxlZnQsXG5cdFx0XHRcdFx0XHRlbFRvcCA9IGVsT2Zmc2V0LnRvcCxcblx0XHRcdFx0XHRcdGVsV2lkdGggPSBlbE9mZnNldC53aWR0aCxcblx0XHRcdFx0XHRcdGVsSGVpZ2h0ID0gZWxPZmZzZXQuaGVpZ2h0O1xuXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1N1cCcsIHBhcmVudEVsVG9wU3VwcGxlbWVudCwgcGFyZW50RWxMZWZ0U3VwcGxlbW50LCBwYXJlbnRFbEhlaWdodFN1cHBsZW1lbnQsIHBhcmVudEVsV2lkdGhTdXBwbGVtZW50KTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtZS5lbCwgZWxUb3AsIGVsTGVmdCwgZWxIZWlnaHQsIGVsV2lkdGgsIHBhcmVudEVsRml4ZWRUb3AsIHBhcmVudEVsRml4ZWRMZWZ0LCBwYXJlbnRFbEZpeGVkSGVpZ2h0LCBwYXJlbnRFbFdpZHRoKTtcblxuXHRcdFx0XHRcdC8vIENvbGxpc2lvbiBkZXRlY3Rpb25cblx0XHRcdFx0XHRpZiAoZWxMZWZ0IDwgcGFyZW50RWxGaXhlZExlZnQgKyBwYXJlbnRFbEZpeGVkV2lkdGggJiZcblx0XHRcdFx0XHRcdGVsTGVmdCArIGVsV2lkdGggPiBwYXJlbnRFbEZpeGVkTGVmdCAmJlxuXHRcdFx0XHRcdFx0ZWxUb3AgPCBwYXJlbnRFbEZpeGVkVG9wICsgcGFyZW50RWxGaXhlZEhlaWdodCAmJlxuXHRcdFx0XHRcdFx0ZWxUb3AgKyBlbEhlaWdodCA+IHBhcmVudEVsRml4ZWRUb3ApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChlbCA9PT0gd2luKSB7XG5cdFx0XHRcdC8vIHdpbmRvdyBlbGVtZW50IGlzIGFsd2F5cyBpbiB2aWV3XG5cdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHsgX2xhc3RJblZpZXcgfSA9IG1lO1xuXHRcdFx0b25FbnRlciAmJiBfbGFzdEluVmlldyAhPT0gcmVzdWx0ICYmIHJlc3VsdCAmJiBvbkVudGVyKHsgJGxhenk6IG1lIH0pO1xuXHRcdFx0b25MZWF2ZSAmJiBfbGFzdEluVmlldyAhPT0gcmVzdWx0ICYmICFyZXN1bHQgJiYgb25MZWF2ZSh7ICRsYXp5OiBtZSB9KTtcblxuXHRcdFx0bWUuX2xhc3RJblZpZXcgPSByZXN1bHQ7XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Ly8gTk9URTogRG9uJ3QgY2hhbmdlIHBhcmVudCBzaW5jZSB0aGUgcGFyZW50IG9wdGlvbnMgYXJlIG1lcmdlZCBpbiBjb25zdHJ1Y3RvclxuXHRcdGFkZENoaWxkKGxhenlMb2FkZXIpIHtcblx0XHRcdGNvbnN0IG1lID0gdGhpcyxcblx0XHRcdFx0ZXZlbnRzID0gbGF6eUxvYWRlci5ldmVudHMsXG5cdFx0XHRcdGVsID0gbWUuZWw7XG5cblx0XHRcdHZhciBpLFxuXHRcdFx0XHRsZW4sXG5cdFx0XHRcdGV2ZW50LFxuXHRcdFx0XHRxdWV1ZTtcblxuXHRcdFx0ZnVuY3Rpb24gYmluZEV2ZW50KHF1ZXVlKSB7XG5cdFx0XHRcdHZhciBjYnMgPSBtZS5fY2JzLFxuXHRcdFx0XHRcdGNiID0gY2JzW2V2ZW50XTtcblxuXHRcdFx0XHRpZiAoIWNiKSB7XG5cdFx0XHRcdFx0Y2IgPSBjYnNbZXZlbnRdID0gbWUuX3Rocm90dGxlKCgpID0+IHtcblx0XHRcdFx0XHRcdHF1ZXVlLmtleXMoKS5mb3JFYWNoKChrKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHF1ZXVlLmdldChrKS5jaGVjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LCBtZS5fdFRpbWUpO1xuXG5cdFx0XHRcdFx0b24oZWwsIGV2ZW50LCBjYiwgc3VwcG9ydHNQYXNzaXZlID8ge1xuXHRcdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZSxcblx0XHRcdFx0XHR9IDogMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWUuX2NoaWxkcmVuLnNldChsYXp5TG9hZGVyLmlkLCBsYXp5TG9hZGVyKTtcblxuXHRcdFx0Zm9yIChpID0gMCwgbGVuID0gZXZlbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdGV2ZW50ID0gZXZlbnRzW2ldO1xuXHRcdFx0XHRxdWV1ZSA9IG1lLl9xdWV1ZXNbZXZlbnRdO1xuXG5cdFx0XHRcdGlmICghcXVldWUpIHtcblx0XHRcdFx0XHRxdWV1ZSA9IG1lLl9xdWV1ZXNbZXZlbnRdID0gbmV3IEZNYXAoKTtcblxuXHRcdFx0XHRcdGJpbmRFdmVudChxdWV1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVldWUuc2V0KGxhenlMb2FkZXIuaWQsIGxhenlMb2FkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHVwZGF0ZShvcHRzKSB7XG5cdFx0XHRjb25zdCBtZSA9IHRoaXMsXG5cdFx0XHRcdG9PcHRzID0gbWUub3B0cztcblxuXHRcdFx0Ly8gcmVzZXRcblx0XHRcdGlmICghb09wdHMub25jZSkge1xuXHRcdFx0XHRjb25zdCBuU3JjID0gb3B0cy5zcmM7XG5cdFx0XHRcdGNvbnN0IG9TcmMgPSBvT3B0cy5zcmM7XG5cblx0XHRcdFx0Ly8gT25seSBzcmMgY2FuIGJlIHVwZGF0ZWQuIE90aGVyd2lzZSB3ZSdsbCBmYWNlIG1hbnkgY29tcGxpY2F0ZWQgdXBkYXRlIHByb2JsZW1zLlxuXHRcdFx0XHRpZiAoblNyYyAhPT0gb1NyYykge1xuXHRcdFx0XHRcdG9PcHRzLnNyYyA9IG5TcmM7XG5cblx0XHRcdFx0XHQvLyBSZXNldCB0aGUgc3RhdCB0byBsb2FkXG5cdFx0XHRcdFx0bWUuc3RhdCA9IFNUQVRfTk9UX0xPQUQ7XG5cblx0XHRcdFx0XHRtZS5jaGVjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cm1DaGlsZChsYXp5TG9hZGVyKSB7XG5cdFx0XHRjb25zdCBtZSA9IHRoaXMsXG5cdFx0XHRcdHF1ZXVlcyA9IG1lLl9xdWV1ZXMsXG5cdFx0XHRcdGNoaWxkcmVuID0gbWUuX2NoaWxkcmVuLFxuXHRcdFx0XHRldmVudHMgPSBPYmplY3Qua2V5cyhxdWV1ZXMpO1xuXG5cdFx0XHRsZXQgaSxcblx0XHRcdFx0bGVuO1xuXG5cdFx0XHRpZiAoY2hpbGRyZW4uaGFzKGxhenlMb2FkZXIuaWQpKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnJtKGxhenlMb2FkZXIuaWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGkgPSAwLCBsZW4gPSBldmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZXZlbnQgPSBldmVudHNbaV0sXG5cdFx0XHRcdFx0cXVldWUgPSBxdWV1ZXNbZXZlbnRdO1xuXG5cdFx0XHRcdHF1ZXVlLnJtKGxhenlMb2FkZXIuaWQpO1xuXG5cdFx0XHRcdGlmIChxdWV1ZS5zaXplKCkgPT09IDApIHtcblx0XHRcdFx0XHRjb25zdCB7IF9jYnMsIGVsIH0gPSBtZSxcblx0XHRcdFx0XHRcdGNiID0gX2Nic1tldmVudF07XG5cblx0XHRcdFx0XHRfY2JzW2V2ZW50XSA9IG51bGw7XG5cblx0XHRcdFx0XHRvZmYoZWwsIGV2ZW50LCBjYik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRkZXN0cm95KHBhcmFtcykge1xuXHRcdFx0Y29uc3QgbWUgPSB0aGlzLFxuXHRcdFx0XHRwYXJlbnQgPSBtZS5wYXJlbnQ7XG5cdFx0XHRjb25zdCB7IGRlZXAgfSA9IE9iamVjdC5hc3NpZ24oeyBkZWVwOiBmYWxzZSB9LCBwYXJhbXMpO1xuXG5cdFx0XHRpZiAoIW1lLmRlc3Ryb3llZCkge1xuXHRcdFx0XHRpZiAoIWRlZXApIHtcblx0XHRcdFx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRcdFx0XHRwYXJlbnQucm1DaGlsZChtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKG1lLm9wdHMuaXNSb290KSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgc2NvcGUuJGxhenk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGRlc3Ryb3lMb2FkZXJEZWVwKG1lKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lLmRlc3Ryb3llZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4iLCIvKiBnbG9iYWwgZ2V0Q29tcHV0ZWRTdHlsZSB3aW5kb3cgKi9cbmNvbnN0IHdpbiA9IHdpbmRvdyxcblx0Y3NzTnVtYmVyID0ge1xuXHRcdCdjb2x1bW4tY291bnQnOiAxLFxuXHRcdGNvbHVtbnM6IDEsXG5cdFx0J2ZvbnQtd2VpZ2h0JzogMSxcblx0XHQnbGluZS1oZWlnaHQnOiAxLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0J3otaW5kZXgnOiAxLFxuXHRcdHpvb206IDEsXG5cdH0sXG5cdHJvdW5kID0gTWF0aC5yb3VuZDtcblxuZnVuY3Rpb24gdHlwZShvKSB7XG5cdHJldHVybiB0eXBlb2Ygbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyKG8pIHtcblx0cmV0dXJuIG8gaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyKG8pIHtcblx0cmV0dXJuIHR5cGUobykgPT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZuKHYpIHtcblx0cmV0dXJuIHR5cGUodikgPT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0obykge1xuXHRyZXR1cm4gbyA9PSBudWxsID8gJycgOiBTdHJpbmcucHJvdG90eXBlLnRyaW0uY2FsbChvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2goZWxlbWVudHMsIGNhbGxiYWNrKSB7XG5cdHZhciBpLFxuXHRcdGxlbixcblx0XHRlbGVtZW50O1xuXHRmb3IgKGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblx0XHRjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGVsZW1lbnQsIGkpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbihlbGVtZW50LCBldiwgY2FsbGJhY2ssIG9wdHMpIHtcblx0aWYgKGlzU3RyKGV2KSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldiwgY2FsbGJhY2ssIG9wdHMpO1xuXHR9XG5cdGVsc2UgaWYgKGlzQXJyKGV2KSkge1xuXHRcdGVhY2goZXYsIGUgPT4gb24oZWxlbWVudCwgZSwgY2FsbGJhY2ssIG9wdHMpKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmKGVsZW1lbnQsIGV2LCBjYWxsYmFjaykge1xuXHRpZiAoaXNTdHIoZXYpKSB7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2LCBjYWxsYmFjayk7XG5cdH1cblx0ZWxzZSBpZiAoaXNBcnIoZXYpKSB7XG5cdFx0ZWFjaChldiwgZSA9PiBvZmYoZWxlbWVudCwgZSwgY2FsbGJhY2spKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lKGVsZW1lbnQsIHZhbHVlKSB7XG5cdHZhciBrbGFzcyA9IGVsZW1lbnQuY2xhc3NOYW1lIHx8ICcnLFxuXHRcdHN2ZyA9IGtsYXNzICYmIGtsYXNzLmJhc2VWYWwgIT09IHVuZGVmaW5lZDtcblxuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHN2ZyA/IGtsYXNzLmJhc2VWYWwgOiBrbGFzcztcblx0aWYgKHN2Zykge1xuXHRcdGtsYXNzLmJhc2VWYWwgPSB2YWx1ZTtcblx0fVxuXHRlbHNlIHtcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IHZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc25hbWUpIHtcblx0Y29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cdGlmIChjbGFzc0xpc3QpIHtcblx0XHRjbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Y29uc3QgY2xzID0gY2xhc3NOYW1lKGVsZW1lbnQpLnNwbGl0KCcgJyksXG5cdFx0XHRtYXAgPSB7fTtcblx0XHRlYWNoKGNscywgKGtsYXNzKSA9PiB7XG5cdFx0XHRtYXBba2xhc3NdID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdGlmICghbWFwW2NsYXNzbmFtZV0pIHtcblx0XHRcdGNsYXNzTmFtZShlbGVtZW50LCBjbHMuam9pbignICcpICsgY2xhc3NuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzUkUobmFtZSkge1xuXHRyZXR1cm4gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtuYW1lfShcXFxcc3wkKWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NuYW1lKSB7XG5cdGlmIChpc1N0cihjbGFzc25hbWUpKSB7XG5cdFx0Y29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cdFx0aWYgKGNsYXNzTGlzdCkge1xuXHRcdFx0Y2xhc3NMaXN0LnJlbW92ZShjbGFzc25hbWUpO1xuXHRcdH1cblx0XHQvLyBJRSwgSSdtIGxvb2tpbmcgYXQgeW91IGFnYWluXG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zdCBjbHMgPSBjbGFzc05hbWUoZWxlbWVudCk7XG5cdFx0XHRjbGFzc05hbWUoZWxlbWVudCwgdHJpbShjbHMucmVwbGFjZShjbGFzc1JFKGNsYXNzbmFtZSksICcgJykpKTtcblx0XHR9XG5cdH1cblx0ZWxzZSBpZiAoaXNBcnIoY2xhc3NuYW1lKSkge1xuXHRcdGVhY2goY2xhc3NuYW1lLCBjID0+IHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cihlbCwgbmFtZSwgdmFsdWUpIHtcblx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUF0dHIoZWwsIHZhbHVlKSB7XG5cdGVsLnJlbW92ZUF0dHJpYnV0ZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXQoZWxlbWVudCkge1xuXHRjb25zdCBvYmogPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IG9iai5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxuXHRcdHRvcDogb2JqLnRvcCArIHdpbi5wYWdlWU9mZnNldCxcblx0XHR3aWR0aDogcm91bmQob2JqLndpZHRoKSxcblx0XHRoZWlnaHQ6IHJvdW5kKG9iai5oZWlnaHQpLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbGl6ZShzdHIpIHtcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC8tKyguKT8vZywgKG1hdGNoLCBjaHIpID0+IChjaHIgPyBjaHIudG9VcHBlckNhc2UoKSA6ICcnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXNoZXJpemUoc3RyKSB7XG5cdHJldHVybiBzdHIucmVwbGFjZSgvOjovZywgJy8nKVxuXHRcdC5yZXBsYWNlKC8oW0EtWl0rKShbQS1aXVthLXpdKS9nLCAnJDFfJDInKVxuXHRcdC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDFfJDInKVxuXHRcdC5yZXBsYWNlKC9fL2csICctJylcblx0XHQudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQWRkUHgobmFtZSwgdmFsdWUpIHtcblx0cmV0dXJuICh0eXBlKHZhbHVlKSA9PSAnbnVtYmVyJyAmJiAhY3NzTnVtYmVyW2Rhc2hlcml6ZShuYW1lKV0pID8gYCR7dmFsdWV9cHhgIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG5cdC8qIGVzbGludCBjb25zaXN0ZW50LXJldHVybjogMCAqL1xuXHRjb25zdCBlbGVtZW50U3l0bGUgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcblx0XHRyZXR1cm4gZWxlbWVudFN5dGxlW2NhbWVsaXplKHByb3BlcnR5KV0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJykuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XG5cdH1cblx0ZWxzZSBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG5cdFx0ZWxlbWVudFN5dGxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShwcm9wZXJ0eSkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGVsZW1lbnRTeXRsZVtkYXNoZXJpemUocHJvcGVydHkpXSA9IG1heWJlQWRkUHgocHJvcGVydHksIHZhbHVlKTtcblx0fVxufVxuXG4vLyBOb3QgZm9yIG1hcCB3aXRoIGVtcHR5IHZhbHVlc1xuZXhwb3J0IGZ1bmN0aW9uIEZNYXAoKSB7XG5cdGNvbnN0IG1lID0gdGhpcztcblx0bWUuX20gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRtZS5fbCA9IDA7XG59XG5cbkZNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrKSB7XG5cdGNvbnN0IG1lID0gdGhpcztcblx0cmV0dXJuIG1lLl9tW2tdO1xufTtcblxuRk1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGssIHYpIHtcblx0Y29uc3QgbWUgPSB0aGlzO1xuXHRpZiAoIW1lLmhhcyhrKSkge1xuXHRcdG1lLl9tW2tdID0gdjtcblx0XHRtZS5fbCsrO1xuXHR9XG59O1xuXG5GTWFwLnByb3RvdHlwZS5ybSA9IGZ1bmN0aW9uIChrKSB7XG5cdGNvbnN0IG1lID0gdGhpcztcblx0aWYgKG1lLmhhcyhrKSkge1xuXHRcdGRlbGV0ZSBtZS5fbVtrXTtcblx0XHRtZS5fbC0tO1xuXHR9XG59O1xuXG5GTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoaykge1xuXHRyZXR1cm4gISF0aGlzLl9tW2tdO1xufTtcblxuRk1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX20pO1xufTtcblxuLy8gRk1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuLy8gXHRjb25zdCBtZSA9IHRoaXM7XG4vLyBcdGNvbnN0IHsgX20gfSA9IG1lO1xuLy8gXHRjb25zdCByZXQgPSBbXTtcbi8vIFx0LyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLy8gXHRmb3IgKGNvbnN0IGsgaW4gX20pIHtcbi8vIFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vLyBcdFx0cmV0LnB1c2goX21ba10pO1xuLy8gXHR9XG4vLyBcdHJldHVybiByZXQ7XG4vLyB9O1xuXG5GTWFwLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5fbDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9