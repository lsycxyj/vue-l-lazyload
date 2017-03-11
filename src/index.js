import { $ } from './util';
import { LazyClass } from './lazy';

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

const Lazy = {
	bind(el, binding, vnode) {
		var opts = binding.value;

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
			var ref;
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

		vnode.context.$nextTick(() => {
			const loader = vnode._$lazy;
			if (loader) {
				loader.destroy();
				vnode._$lazy = null;
			}
		});
	},
};

const VueLLazyload = {
	install(Vue, options) {
		const allOpts = {
			regGlobal: true,
			...options,
		};

		LazyLoader = LazyClass(Vue);
		Vue.$lazy = new LazyLoader({
			...options,
			isRoot: true,
		});

		if (allOpts.regGlobal) {
			Vue.directive('lazy', Lazy);

			Vue.component('lazy-ref', LazyRef);
		}
	},
};

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
export {
	LazyRef,
	Lazy,
	VueLLazyload,
};
