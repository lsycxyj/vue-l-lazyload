import Vue from 'vue';
import { $ } from './util';

const EV_SCROLL = 'scroll',

	CLASS_LOADING = 'lazy-loading';

const on = $.on,
	off = $.off,
	addClass = $.addClass,
	removeClass = $.removeClass,
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
				el: window,
				// Events to be bound
				events: [EV_SCROLL],
				// Class name of loading
				classLoading: CLASS_LOADING,
				// Retry amount, 0 for no retry, -1 for infinite retry.
				retry: 0,
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
		me.loaded = false;
		me._children = [];
		me._queues = {};
		me.events = isArr(events) ? events : [events];
		me.opts = opts;
	}

	check(evName) {
		const me = this,
			queues = me._queues,
			children = me._children;

		const queue = evName ? queues[evName] : children;

		if (queue) {
			for (var i = 0, len = queue.length; i < len; i++) {
				queue[i].check();
			}
		}

		//TODO call load
	}

	add(lazyLoader) {

	}

	up(lazyLoader) {

	}

	rm(lazyLoader) {
		const me = this,
			queues = me._queues,
			children = me._children;
	}

	act() {

	}

	deact() {

	}

	destroy() {
		const me = this,
			parent = me.parent;

		if (parent) {
			parent.rm(me);
		}
	}
}

function loadHandler(lazyLoader) {
	const opts = lazyLoader.opts,
		{
			src
		} = opts;

	if (!src) {
		lazyLoader.loaded = true;
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