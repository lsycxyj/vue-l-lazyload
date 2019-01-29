import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import {
	on,
	off,
	trim,
	addClass,
	removeClass,
	attr,
	css,
	removeAttr,
	offset,
	isArr,
	isFn,
	FMap,
} from './util';

// TODO intersection observer

/* global window, Image */
const EV_SCROLL = 'scroll',

	CLASS_LOADING = 'lazy-loading',
	CLASS_ERR = 'lazy-err',
	CLASS_LOADED = 'lazy-loaded',

	CLASS_TARGET_SELF = 'self',
	CLASS_TARGET_PARENT = 'parent',

	// THROTTLE_METHOD_THROTTLE = 'throttle',
	THROTTLE_METHOD_DEBOUNCE = 'debounce',

	MODE_BG = 'bg',
	win = window;

export const STAT_NOT_LOAD = 0;
export const STAT_LOADING = 1;
export const STAT_LOADED = 2;

var loaderID = 0;

var supportsPassive = false;
try {
	const opts = Object.defineProperty({}, 'passive', {
		get() {
			supportsPassive = true;
		},
	});
	win.addEventListener('test', null, opts);
}
catch (e) {
	// empty
}

class Req {
	constructor({ el, loadEl, src, retry, onLoad, onErr, onReq, filters }) {
		const me = this;

		function _baseInfo() {
			return {
				el,
				src: me.src,
				oSrc: src,
			};
		}

		function load() {
			removeAttr(loadEl, 'src');
			attr(loadEl, 'src', me.src);
			onReq && onReq(_baseInfo());
		}

		function _onErr(opts) {
			onErr && onErr({
				..._baseInfo(),
				...opts,
			});
		}

		function applyFilters(src) {
			let ret = src;
			if (filters) {
				ret = filters.reduce((lastResult, cur) => cur(lastResult, { el }), src);
			}
			return ret;
		}

		function next(result) {
			const { failed, src: nSrc } = { failed: false, ...result };
			if (!failed) {
				if (nSrc) {
					me.src = nSrc;
				}

				load();
				me.c++;
			}
			else {
				_onErr({
					isEnd: true,
				});
			}
		}

		me.canceled = false;
		me.retry = retry;
		me.c = 0;
		me.src = applyFilters(src);

		loadEl.onload = () => {
			// Only requests which are not canceled will notify events
			!me.canceled && onLoad && onLoad(_baseInfo());
		};

		loadEl.onerror = () => {
			// Only requests which are not canceled will notify events
			if (!me.canceled) {
				const retry = me.retry;
				if (isFn(retry)) {
					_onErr();
					retry({
						..._baseInfo(),
						times: me.c,
						next,
						applyFilters,
					});
				}
				else if (retry == -1 || retry > 0) {
					_onErr();

					load();
					retry > 0 && me.retry--;
				}
				else {
					_onErr({
						isEnd: true,
					});
				}
			}
		};

		load();
	}

	cancel() {
		this.canceled = true;
	}
}

function defaultLoadHandler(lazyLoader) {
	const opts = lazyLoader.opts,
		oReq = lazyLoader.req;
	var {
			classErr,
			classLoaded,
			classLoading,
			classTarget,
			el,
			once,
			retry,
			src,
			filters,
			onLoad,
			onErr,
			onReq,
		} = opts,
		loadEl = el,
		_onLoad,
		_onErr;

	const classes = [classLoading, classErr, classLoaded],
		elClassTarget = classTarget === CLASS_TARGET_PARENT ? el.parentNode || el : el;

	function switchClass(el, className) {
		removeClass(el, classes);
		addClass(el, className);
	}

	oReq && oReq.cancel();

	src = trim(src);

	switch (lazyLoader.opts.mode) {
		case MODE_BG:
			css(el, 'background-image', '');
			_onLoad = () => {
				css(el, 'background-image', `url(${lazyLoader.req.src})`);
			};
			_onErr = () => {
				css(el, 'background-image', '');
			};
			loadEl = new Image();
			break;
		default:// empty
	}

	if (!src) {
		lazyLoader.stat = STAT_LOADED;
		switchClass(elClassTarget, classLoaded);
	}
	else {
		lazyLoader.stat = STAT_LOADING;

		lazyLoader.req = new Req({
			el,
			loadEl,
			src,
			retry,
			filters,
			onLoad(info) {
				_onLoad && _onLoad();
				lazyLoader.stat = STAT_LOADED;
				switchClass(elClassTarget, classLoaded);
				once && lazyLoader.destroy();

				onLoad && onLoad(info);
			},
			onErr(info) {
				_onErr && _onErr();

				if (info.isEnd) {
					lazyLoader.stat = STAT_LOADED;
					switchClass(elClassTarget, classErr);
					once && lazyLoader.destroy();
				}

				onErr && onErr(info);
			},
			onReq,
		});
		switchClass(elClassTarget, classLoading);
	}
}

function destroyLoaderDeep(loader) {
	const { _children } = loader;
	if (_children.size() > 0) {
		_children.keys(k => destroyLoaderDeep(_children.get(k)));
	}
	else {
		loader.destroy();
	}
}

export function LazyClass(scope) {
	return class LazyLoader {
		constructor(opts) {
			opts = opts || {};
			const me = this,
				{
					// Whether root LazyLoader or not
					isRoot,
				} = opts;

			let {
				// Parent LazyLoader
				parent,
			} = opts;

			// root node
			if (isRoot) {
				opts = {
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
					loadHandler: defaultLoadHandler,
					...opts,
				};
			}
			else {
				// inherit parent LazyLoader's options
				const $rootLazy = scope.$lazy;
				opts = {
					...(parent && parent.opts || $rootLazy.opts),
					...opts,
					parent: $rootLazy,
					isRoot: false,
				};
			}

			const {
				el,
				events,
				throttleMethod,
				throttleTime,
				loadHandler,
			} = opts;
			parent = opts.parent;

			me.parent = parent;
			me.id = ++loaderID;
			me.el = el;
			me.stat = STAT_NOT_LOAD;
			me._children = new FMap();
			me._queues = {};
			// save for remove
			me._cbs = {};
			me.events = isArr(events) ? events : [events];
			me.opts = opts;
			me._lastInView = false;
			me._throttle = throttleMethod === THROTTLE_METHOD_DEBOUNCE ? debounce : throttle;
			me._tTime = throttleTime;
			me._loadHandler = loadHandler;

			parent && parent.addChild(me);

			// Initialize root $lazy
			if (isRoot && !scope.$lazy) {
				scope.$lazy = me;
			}
		}

		check(evName) {
			const me = this;
			const isInView = me.stat < STAT_LOADING && me.inView();

			if (isInView) {
				me._loadHandler(me);

				const children = me._children;

				if (children.size()) {
					const queues = me._queues,
						queue = evName ? queues[evName] : children;

					if (queue) {
						children.keys().forEach((k) => {
							children.get(k).check();
						});
					}
				}
			}
		}

		inView() {
			const me = this,
				{ parent, opts } = me,
				{ onEnter, onLeave } = opts;

			let result = false;

			if (parent) {
				const parentEl = parent.el,
					isParentWin = parentEl === win;
				// window element is always in view
				if (isParentWin
					// Or until parent in view
					|| parent._lastInView) {
					let parentElTopSupplement = 0,
						parentElHeightSupplement = 0,
						parentElLeftSupplement = 0,
						parentElWidthSupplement = 0;
					const parentElOffset = isParentWin ? {
							// IE, I'm looking at you
							left: win.pageXOffset,
							top: win.pageYOffset,
							width: win.innerWidth,
							height: win.innerHeight,
						} : offset(parentEl),
						parentElLeft = parentElOffset.left,
						parentElTop = parentElOffset.top,
						parentElWidth = parentElOffset.width,
						parentElHeight = parentElOffset.height;

					if (!isParentWin) {
						const { pageXOffset, pageYOffset, innerWidth, innerHeight } = win;
						const diffTop = parentElTop - pageYOffset;
						const diffBottom = pageYOffset + innerHeight - parentElTop - parentElHeight;
						const diffLeft = parentElLeft - pageXOffset;
						const diffRight = pageXOffset + innerWidth - parentElLeft - parentElWidth;
						// console.log('diff', diffTop, diffBottom, diffLeft, diffRight);
						// Guard for parent element outside the window
						parentElTopSupplement = diffTop < 0 ? diffTop : 0;
						parentElHeightSupplement = parentElTopSupplement + (diffBottom < 0 ? diffBottom : 0);
						parentElLeftSupplement = diffLeft < 0 ? diffLeft : 0;
						parentElWidthSupplement = parentElLeftSupplement + (diffRight < 0 ? diffRight : 0);
					}

					const preloadRatio = me.opts.preloadRatio,
						extraPreloadRatio = 1 - preloadRatio,
						elOffset = offset(me.el),
						parentElExtraWidth = (parentElWidth + parentElWidthSupplement) * extraPreloadRatio,
						parentElExtraHeight = (parentElHeight + parentElHeightSupplement) * extraPreloadRatio,
						parentElFixedTop = parentElTop + parentElTopSupplement - parentElExtraHeight / 2,
						parentElFixedLeft = parentElLeft + parentElLeftSupplement - parentElExtraWidth / 2,
						parentElFixedWidth = parentElWidth + parentElExtraWidth,
						parentElFixedHeight = parentElHeight + parentElExtraHeight,
						elLeft = elOffset.left,
						elTop = elOffset.top,
						elWidth = elOffset.width,
						elHeight = elOffset.height;

					// console.log('Sup', parentElTopSupplement, parentElLeftSupplemnt, parentElHeightSupplement, parentElWidthSupplement);
					// console.log(me.el, elTop, elLeft, elHeight, elWidth, parentElFixedTop, parentElFixedLeft, parentElFixedHeight, parentElWidth);

					// Collision detection
					if (elLeft < parentElFixedLeft + parentElFixedWidth &&
						elLeft + elWidth > parentElFixedLeft &&
						elTop < parentElFixedTop + parentElFixedHeight &&
						elTop + elHeight > parentElFixedTop) {
						result = true;
					}
				}
			}

			const { _lastInView } = me;
			onEnter && _lastInView !== result && result && onEnter({ $lazy: me });
			onLeave && _lastInView !== result && !result && onLeave({ $lazy: me });

			me._lastInView = result;

			return result;
		}

		addChild(lazyLoader) {
			const me = this,
				events = lazyLoader.events,
				el = me.el;

			var i,
				len,
				event,
				queue;

			function bindEvent(queue) {
				var cbs = me._cbs,
					cb = cbs[event];

				if (!cb) {
					cb = cbs[event] = me._throttle(() => {
						queue.keys().forEach((k) => {
							queue.get(k).check();
						});
					}, me._tTime);

					on(el, event, cb, supportsPassive ? {
						passive: true,
					} : 0);
				}
			}

			me._children.set(lazyLoader.id, lazyLoader);

			for (i = 0, len = events.length; i < len; i++) {
				event = events[i];
				queue = me._queues[event];

				if (!queue) {
					queue = me._queues[event] = new FMap();

					bindEvent(queue);
				}
				queue.set(lazyLoader.id, lazyLoader);
			}
		}

		update(opts) {
			const me = this,
				oOpts = me.opts;

			oOpts.src = opts.src;

			// reset
			if (!oOpts.once) {
				me.stat = STAT_NOT_LOAD;

				me.check();
			}
		}

		rmChild(lazyLoader) {
			const me = this,
				queues = me._queues,
				children = me._children,
				events = Object.keys(queues);

			var i,
				len;

			if (children.has(lazyLoader.id)) {
				children.rm(lazyLoader.id);
			}

			for (i = 0, len = events.length; i < len; i++) {
				const event = events[i],
					queue = queues[event];

				if (queue.has(lazyLoader.id)) {
					queue.rm(lazyLoader.id);
				}

				if (queue.size() === 0) {
					const { _cbs, el } = me,
						cb = _cbs[event];

					_cbs[event] = null;

					off(el, event, cb);
				}
			}
		}

		destroy(params) {
			const me = this,
				parent = me.parent;
			const { deep } = Object.assign({ deep: false }, params);

			if (!me.destroyed) {
				if (!deep) {
					if (parent) {
						parent.rmChild(me);
					}
				}
				else {
					destroyLoaderDeep(me);
				}

				me.destroyed = true;
			}
		}
	};
}

