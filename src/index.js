import {$} from './util';
import {LazyClass} from './lazy';

var LazyLoader;

const {
	isStr,
} = $;

function log(content) {
	console.log(`v-l-lazyload: ${content}`);
}

const LazyRef = {
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		opts: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	render(createElement) {
		const me = this;
		return createElement(me.tag, me.$slots.default);
	},
	mounted() {
		const vm = this,
			el = vm.$el;

		vm.$lazy = new LazyLoader({
			...vm.opts,
			el: el
		});
	},
	methods: {
		check() {
			this.$lazy.check();
		},
		add(lazyLoader) {
			this.$lazy.addChild(lazyLoader);
		},
		update(opts) {
			this.$lazy.update(opts);
		},
		rm(lazyLoader) {
			this.$lazy.rmChild(lazyLoader);
		}
	}
};

const Lazy = {
	bind(el, binding, vnode) {
		var opts = binding.value;

		if (isStr(opts)) {
			opts = {
				src: opts
			};
		}

		// vnode will be recreated during update, so bind props with real element
		el._lazyBound = true;

		const vm = vnode.context,
			refStr = opts.ref;

		// add to after $refs has references
		Vue.nextTick(() => {
			// Prevent it's unbound before initialization
			if (el._lazyBound) {
				var ref;
				if (refStr) {
					ref = vm.$refs[refStr];
					if (!ref) {
						log(`ref "${refStr}" not found`);
					}
				}

				const loader = el._$lazy = new LazyLoader({
					...opts,
					parent: ref && ref.$lazy,
					el: el
				});

				loader.check();
			}
		});
	},
	componentUpdated(el, binding, vnode) {
		var opts = binding.value;

		if (isStr(opts)) {
			opts = {
				src: opts
			};
		}

		const loader = el._$lazy;

		if (loader) {
			loader.update({
				src: opts.src
			});
		}
	},
	unbind(el){
		if (el._lazyBound) {
			el._lazyBound = false;
		}

		Vue.nextTick(() => {
			const loader = el._$lazy;
			if (loader) {
				loader.destroy();
				el._$lazy = null;
			}
		});
	}
};

const VueLLazyload = {
	install(Vue, options = {}) {
		LazyLoader = LazyClass(Vue);
		Vue.prototype.$lazy = new LazyLoader({
			...options,
			isRoot: true
		});

		Vue.directive('lazy', Lazy);

		Vue.component('lazy-ref', LazyRef);
	}
};

export default VueLLazyload;

export {
	LazyRef,
	Lazy,
	VueLLazyload
};