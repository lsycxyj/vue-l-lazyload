import {
	isStr,
} from './util';
import { LazyClass } from './lazy';
import _LazyComp from './LazyComp.vue';
import _InViewComp from './InViewComp.vue';

export { STAT_NOT_LOAD, STAT_LOADING, STAT_LOADED } from './lazy';
export { COMP_NOT_LOAD, COMP_LOADING, COMP_LOADED, COMP_ERR } from './LazyComp.vue';

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

let LazyLoader;

export function getLazyLoader() {
	return LazyLoader;
}

function log(content) {
	// eslint-disable-next-line no-console
	console.log(`v-l-lazyload: ${content}`);
}

export const LazyRef = {
	props: {
		tag: {
			type: String,
			default: 'div',
		},
		opts: {
			type: Object,
			default() {
				return {};
			},
		},
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
			el,
		});
		// Initial check to update lastInView status
		vm.check();
	},
	destroyed() {
		this.$lazy.destroy();
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
		},
	},
};

export const Lazy = {
	bind(el, binding, vnode) {
		let opts = binding.value;

		if (isStr(opts)) {
			opts = {
				src: opts,
			};
		}

		vnode._lazyBound = true;

		const vm = vnode.context,
			refStr = opts.ref;

		// add to after $refs has references
		vm.$nextTick(() => {
			let ref;
			// Prevent it's unbound before initialization
			if (vnode._lazyBound) {
				if (refStr) {
					ref = vm.$refs[refStr];
					if (!ref) {
						log(`ref "${refStr}" not found`);
					}
				}

				const mergedOpts = {
						...opts,
						el,
					},
					$lazy = ref && ref.$lazy;

				if ($lazy !== undefined) {
					mergedOpts.parent = $lazy;
				}

				const loader = vnode._$lazy = new LazyLoader(mergedOpts);

				loader.check();
			}
		});
	},
	componentUpdated(el, binding, vnode, ovnode) {
		var opts = binding.value,
			oOpts = binding.oldValue,
			nSrc = isStr(opts) ? opts : opts.src,
			oSrc = isStr(oOpts) ? oOpts : oOpts.src;

		// vnode will be recreated during update
		if (vnode !== ovnode) {
			vnode._lazyBound = ovnode._lazyBound;
			vnode._$lazy = ovnode._$lazy;
		}

		if (nSrc != oSrc) {
			const loader = vnode._$lazy;

			if (loader) {
				loader.update({
					src: nSrc,
				});
			}
		}
	},
	unbind(el, binding, vnode) {
		if (vnode._lazyBound) {
			vnode._lazyBound = false;
		}

		// Ensure the loader will be destroyed after it's created
		vnode.context.$nextTick(() => {
			const loader = vnode._$lazy;
			if (loader) {
				loader.destroy();
				vnode._$lazy = null;
			}
		});
	},
};

export const InViewComp = _InViewComp;
export const LazyComp = _LazyComp;

// Vue plugin entry point
export const VueLLazyload = {
	install(Vue, options) {
		const allOpts = {
			regGlobal: true,
			...options,
		};

		LazyLoader = LazyClass(Vue);
		// Set root lazy loader
		// eslint-disable-next-line no-new
		new LazyLoader({
			...options,
			isRoot: true,
		});

		if (allOpts.regGlobal) {
			Vue.directive('lazy', Lazy);

			Vue.component('lazy-ref', LazyRef);
		}
	},
};

// Vue plugin entry point of local components for tree shaking
export const VueLLazyloadLocal = {
	install(Vue, options) {
		LazyLoader = LazyClass(Vue);
		// Set root lazy loader
		// eslint-disable-next-line no-new
		new LazyLoader({
			...options,
			isRoot: true,
		});
	},
};
