import Vue from 'vue';
import {$} from './util';

const EV_SCROLL = 'scroll',

	CLASS_LOADING = 'lazy-loading',
	CLASS_ERR = 'lazy-err',
	CLASS_LOADED = 'lazy-loaded',

	STAT_NOT_LOAD = 0,
	STAT_LOADING = 1,
	STAT_LOADED = 2,

	win = window,
	Object = win.Object;

const on = $.on,
	off = $.off,
	trim = $.trim,
	addClass = $.addClass,
	removeClass = $.removeClass,
	offset = $.offset,
	isArr = $.isArr;

var supportsPassive = false;
try {
	var opts = Object.defineProperty({}, 'passive', {
		get: function () {
			supportsPassive = true;
		}
	});
	window.addEventListener("test", null, opts);
} catch (e) {
}

var loaderID = 0;

class LazyLoader {
	constructor(opts) {
		const me = this,
			{
				// Whether root LazyLoader or not
				isRoot,
				// Parent LazyLoader
				parent
			} = opts;

		// root node
		if (!isRoot) {
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
				// Retry amount, 0 for no retry, -1 for infinite retry.
				retry: 0,
				preloadRatio: 1,
				...opts
			};
		}
		else {
			// TODO
			// inherit parent LazyLoader's options
			opts = Object.create(parent && parent.opts, {
				parent: Vue.$Lazyload,
				...opts
			});
		}

		const {
			parent,
			el,
			events,
			retry
		} = opts;

		me.parent = parent;
		me.id = ++loaderID;
		me.el = el;
		me.stat = STAT_NOT_LOAD;
		me._children = [];
		me._queues = {};
		// save for remove
		me._cbs = {};
		me.retry = retry;
		me.events = isArr(events) ? events : [events];
		me.opts = opts;
	}

	check(evName) {
		const me = this;

		me.stat < STAT_LOADED && me.inView() && loadHandler(me);

		const children = me._children;

		if (children.length) {
			const queues = me._queues,
				queue = evName ? queues[evName] : children;

			if (queue) {
				for (var i = 0, len = queue.length; i < len; i++) {
					var item = queue[i];
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
				isWin = parentEl === win,
				parentElOffset = isWin ? {
						left: 0,
						top: 0,
						width: win.innerWidth,
						height: win.innerHeight
					} : offset(parentEl),
				elOffset = offset(me.el),
				parentElLeft = parentElOffset.left,
				parentElTop = parentElOffset.top,
				parentElWidth = parentElOffset.width * preloadRatio,
				parentElHeight = parentElOffset.height * preloadRatio,
				elLeft = elOffset.left,
				elTop = elOffset.top,
				elWidth = elOffset.width * preloadRatio,
				elHeight = elOffset.height * preloadRatio;

			// Collision detection
			if (elLeft > parentElLeft - elLeft &&
				elLeft < parentElLeft + parentElWidth + elWidth &&
				elTop > parentElTop - elHeight &&
				elTop < parentElTop + parentElHeight + elHeight) {
				result = true;
			}
		}

		return result;
	}

	addChild(lazyLoader) {
		const me = this,
			events = lazyLoader.events,
			el = me.el;

		me._children.push(lazyLoader);

		for (var i = 0, len = events.length; i < len; i++) {
			var event = events[i],
				queue = me._queues[event];
			if (!queue) {
				queue = me._queues[event] = [];

				(function (queue) {
					var cbs = me._cbs,
						cb = cbs[event];

					if (!cb) {
						cbs[event] = throttle(function () {
							for (var j = 0, jLen = queue.length; j < jLen; j++) {
								queue[j].check();
							}
						});
					}

					on(el, event, cb, supportsPassive ? {passive: true} : 0);
				})(queue);
			}
			queue.push(lazyLoader);
		}
	}

	update(opts) {
		const me = this,
			oOpts = me.opts;

		oOpts.src = opts.src;

		// reset
		me.stat = STAT_NOT_LOAD;
		me.retry = oOpts.retry;
	}

	rmChild(lazyLoader) {
		const me = this,
			queues = me._queues,
			children = me._children,
			events = Object.keys(queues);

		var index = search(children, lazyLoader);

		if (index >= 0) {
			children.splice(index, 1);
		}

		for (var i = 0, len = events.length; i < len; i++) {
			var event = events[i],
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

		if (parent) {
			parent.rmChild(me);
		}
	}
}

class Req {
	constructor({el, src, onLoad, onErr}) {
		const me = this;

		me.canceled = false;
		me.stat = STAT_LOADING;

		el.onload = () => {
			!me.canceled && onLoad && onLoad();
		};

		el.onerror = () => {
			!me.canceled && onErr && onErr();
		};

		el.src = src;
	}

	cancel() {
		this.canceled = true;
	}
}

function loadHandler(lazyLoader) {
	const opts = lazyLoader.opts,
		oReq = lazyLoader.req;
	var {
		src
	} = opts;

	oReq && oReq.cancel();

	src = trim(src);

	if (!src) {
		lazyLoader.stat = STAT_LOADED;
	}
	else {
		lazyLoader.req = new Req({
			el: lazyLoader.el,
			src: src
		});
	}
}

// TODO to be optimized
function search(arr, item) {
	return arr.indexOf(item);
}

function throttle(fn, threshold, scope) {
	threshold || (threshold = 250);
	var last,
		deferTimer;
	return function () {
		var context = scope || this;

		var now = +new Date,
			args = arguments;
		if (last && now < last + threshold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}

const LazyRef = {
	props: {
		tag: {
			type: String,
			default: 'div'
		}
	},
	render(createElement) {
		const me = this;
		return createElement(me.tag, me.$slots.default);
	},
	mounted() {
		console.log('mounted')
		const vm = this;
		vm.$nextTick(function () {
			vm.check();
		});
	},
	methods: {
		check() {
			console.log('check');
		},
		add() {
			console.log('add');
		},
		rm() {
			console.log('remove');
		}
	}
};

const Lazy = {
	bind(el, binding, vnode) {
		console.log('bind');
		const vm = vnode.context;
		el._lazyloadDestroyed = false;
		const opts = el._lazyloadOpts = binding.value;
		// add to after $refs are refed
		vm.$nextTick(function () {
			const ref = vm.$refs[opts.ref];
			console.log(ref);
			console.log(vm == ref)
			ref.add()
		});
	},
	update(el, binding, vnode) {
		//vnode会在update时重新生成，要么重新设一次，要么设在el上
		console.log('update');
		// const vm = vnode.context;
		// vnode._lazyloadDestroyed = false;
		// const opts = vnode._lazyloadOpts = binding.value;
		// // add to after $refs are refed
		// vm.$nextTick(function () {
		// 	const ref = vm.$refs[opts.ref];
		// 	console.log(ref);
		// 	console.log(vm == ref)
		// 	ref.add()
		// });
	},
	componentUpdated(el, binding, vnode) {
		console.log('componentUpdated');
	},
	unbind(el, binding, vnode){
		console.log(el._lazyloadDestroyed)
		console.log(el._lazyloadOpts)
	}
};

export {
	LazyRef,
	Lazy
};