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
	search,
	throttle,
	isFn,
} from './util';

// TODO intersection observer

/* global window, Image */
const EV_SCROLL = 'scroll',

	CLASS_LOADING = 'lazy-loading',
	CLASS_ERR = 'lazy-err',
	CLASS_LOADED = 'lazy-loaded',

	CLASS_TARGET_SELF = 'self',
	CLASS_TARGET_PARENT = 'parent',

	MODE_BG = 'bg',

	STAT_NOT_LOAD = 0,
	STAT_LOADING = 1,
	STAT_LOADED = 2,

	win = window;

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
				_onErr();
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

function loadHandler(lazyLoader) {
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


export function LazyClass(scope) {
	return class LazyLoader {
		constructor(opts) {
			const me = this,
				{
					// Whether root LazyLoader or not
					isRoot,
				} = opts;

			var {
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
					...opts,
				};
			}
			else {
				// inherit parent LazyLoader's options
				const $rootLazy = scope.$lazy;
				opts = {
					parent: $rootLazy,
					...(parent && parent.opts || $rootLazy.opts),
					...opts,
				};
			}

			const {
				el,
				events,
			} = opts;
			parent = opts.parent;

			me.parent = parent;
			me.id = ++loaderID;
			me.el = el;
			me.stat = STAT_NOT_LOAD;
			me._children = [];
			me._queues = {};
			// save for remove
			me._cbs = {};
			me.events = isArr(events) ? events : [events];
			me.opts = opts;

			parent && parent.addChild(me);
		}

		check(evName) {
			const me = this;
			var i,
				len;

			me.stat < STAT_LOADING && me.inView() && loadHandler(me);

			const children = me._children;

			if (children.length) {
				const queues = me._queues,
					queue = evName ? queues[evName] : children;

				if (queue) {
					for (i = 0, len = queue.length; i < len; i++) {
						const item = queue[i];
						item.check();
					}
				}
			}
		}

		inView() {
			const me = this,
				parent = me.parent;

			var result = false;

			if (parent) {
				const
					parentEl = parent.el,
					preloadRatio = me.opts.preloadRatio,
					extraPreloadRatio = 1 - preloadRatio,
					isWin = parentEl === win,
					parentElOffset = isWin ? {
						// IE, I'm looking at you
						left: win.pageXOffset,
						top: win.pageYOffset,
						width: win.innerWidth,
						height: win.innerHeight,
					} : offset(parentEl),
					elOffset = offset(me.el),
					parentElLeft = parentElOffset.left,
					parentElTop = parentElOffset.top,
					parentElWidth = parentElOffset.width,
					parentElHeight = parentElOffset.height,
					parentElExtraWidth = parentElWidth * extraPreloadRatio,
					parentElExtraHeight = parentElHeight * extraPreloadRatio,
					parentElFixedTop = parentElTop - parentElExtraHeight / 2,
					parentElFixedLeft = parentElLeft - parentElExtraWidth / 2,
					parentElFixedWidth = parentElWidth + parentElExtraWidth,
					parentElFixedHeight = parentElHeight + parentElExtraHeight,
					elLeft = elOffset.left,
					elTop = elOffset.top,
					elWidth = elOffset.width,
					elHeight = elOffset.height;

				// Collision detection
				if (elLeft < parentElFixedLeft + parentElFixedWidth &&
					elLeft + elWidth > parentElFixedLeft &&
					elTop < parentElFixedTop + parentElFixedHeight &&
					elTop + elHeight > parentElFixedTop) {
					result = true;
				}
			}

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
					cb = cbs[event],
					j,
					jLen;

				if (!cb) {
					cb = cbs[event] = throttle(() => {
						for (j = 0, jLen = queue.length; j < jLen; j++) {
							queue[j].check();
						}
					});
				}

				on(el, event, cb, supportsPassive ? {
					passive: true,
				} : 0);
			}

			me._children.push(lazyLoader);

			for (i = 0, len = events.length; i < len; i++) {
				event = events[i];
				queue = me._queues[event];

				if (!queue) {
					queue = me._queues[event] = [];

					bindEvent(queue);
				}
				queue.push(lazyLoader);
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

			var index = search(children, lazyLoader),
				i,
				len;

			if (index >= 0) {
				children.splice(index, 1);
			}

			for (i = 0, len = events.length; i < len; i++) {
				const event = events[i],
					queue = queues[event];

				index = search(queue, lazyLoader);

				if (index >= 0) {
					queue.splice(index, 1);
				}

				if (queue.length == 0) {
					const cbs = me._cbs,
						cb = cbs[event];

					cbs[event] = null;

					off(event, cb);
				}
			}
		}

		destroy() {
			const me = this,
				parent = me.parent;

			if (!me.destroyed) {
				if (parent) {
					parent.rmChild(me);
				}

				me.destroyed = true;
			}
		}
	};
}

