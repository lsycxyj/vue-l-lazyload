<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script>
	import noop from 'lodash/noop';
	import { getLazyLoader } from './index';

	export default {
		name: 'InViewComp',
		props: {
			tag: {
				type: String,
				default: 'div',
			},
			opts: {
				type: Object,
			},
		},
		mounted() {
			const $vm = this;
			const { opts } = $vm;
			const _opts = Object.assign({}, opts);

			const ctrl = {
				endCheck: $vm.endCheck,
			};

			const { loadHandler } = _opts;
			if (loadHandler) {
				_opts.loadHandler = function () {
					loadHandler(ctrl);
				};
			}
			else {
				_opts.loadHandler = noop;
			}

			// Do nothing but keep checking
			const $lazy = ctrl.$lazy = $vm.$lazy = new (getLazyLoader())(Object.assign({
				el: $vm.$el,
			}, _opts));
			$lazy.check();
		},
		destroyed() {
			this.endCheck();
		},
		methods: {
			endCheck() {
				const $vm = this;
				const { $lazy } = $vm;
				if ($lazy) {
					$lazy.destroy();
					$vm.$lazy = null;
				}
			},
		},
	};

</script>
