import Vue from 'vue';
import {$} from './util';

const EV_SCROLL = 'scroll',

	CLASS_LOADING = 'lazy-loading',
	CLASS_ERR = 'lazy-err',
	CLASS_LOADED = 'lazy-loaded',

	STAT_NOT_LOAD = 0,
	STAT_LOADING = 1,
	STAT_LOADED = 2,

	win = window;

const on = $.on,
	off = $.off,
	trim = $.trim,
	addClass = $.addClass,
	removeClass = $.removeClass,
	offset = $.offset,
	isArr = $.isArr;

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
		me.retry = retry;
		me.events = isArr(events) ? events : [events];
		me.opts = opts;
	}

	check(evName) {
		const me = this;

		me.stat < STAT_LOADED && me.inView() && loadHandler(me);

		const queues = me._queues,
			children = me._children,
			queue = evName ? queues[evName] : children;

		if (queue) {
			for (var i = 0, len = queue.length; i < len; i++) {
				var item = queue[i];
				item.check();
			}
		}
	}

	inView() {
		const me = this,
			parent = me.parent;

		var result = true;

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
				parentElRight = parentElLeft + parentElOffset.width * preloadRatio,
				parentElTop = parentElOffset.top,
				parentElBottom = parentElTop + parentElOffset.height * preloadRatio,
				elLeft = elOffset.left,
				elRight = elLeft + elOffset.width * preloadRatio,
				elTop = elOffset.top,
				elBottom = elTop + elOffset.height * preloadRatio;

			// Collision detection
			// TODO
			if (elLeft) {
			}
		}

		return result;
	}

	addChild(lazyLoader) {
		const me = this,
			events = lazyLoader.events;

		me._children.push(lazyLoader);

		for (var i = 0, len = events.length; i < len; i++) {
			var event = events[i],
				queue = me._queues[event];
			if (!queue) {
				queue = me._queues[events] = [];
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
			children = me._children;
	}

	destroy() {
		const me = this,
			parent = me.parent;

		if (parent) {
			parent.rmChild(me);
		}
	}
}

class ReqIMG {
	constructor(imgEl, src, onLoad, onErr){
		const me = this;

		me.canceled = false;
		me.el = imgEl;

	}

	cancel() {
		this.canceled = true;
	}
}

function loadHandler(lazyLoader) {
	const opts = lazyLoader.opts;
	var {
		src
	} = opts;

	src = trim(src);

	if (!src) {
		lazyLoader.stat = STAT_LOADED;
	}
	else {
		const el = lazyLoader.el;
	}
}

// TODO to be optimized
function search(arr, item) {
	return arr.indexOf(item);
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