<template>
  <in-view-comp ref="c" :class="cClass" :tag="tag" :opts="cOpts">
    <slot v-if="stat === COMP_NOT_LOAD" name="not-load"></slot>
    <slot v-else-if="stat === COMP_LOADING" name="loading"></slot>
    <slot v-else-if="stat === COMP_ERR" name="err"></slot>
    <slot v-else></slot>
  </in-view-comp>
</template>

<script>
	import InViewComp from './InViewComp.vue';
	import { STAT_NOT_LOAD, STAT_LOADING, STAT_LOADED } from './lazy';

	export const COMP_NOT_LOAD = 0;
	export const COMP_LOADING = 1;
	export const COMP_LOADED = 2;
	export const COMP_ERR = -1;

	export default {
		name: 'LazyComp',
		props: {
			tag: {
				type: String,
				default: 'div',
			},
			opts: {
				type: Object,
			},
			/*
        There's a bug in Vue. If you provide some methods for outside components to change the stat of data,
        you will lose some event listeners after you change the stat to another and change it back
        (eg. The methods of @event won't be triggered after it's changed back).
        So I have to design a prop as the switcher of slots.
        The initial stat MUST be COMP_NOT_LOAD and the stat SHOULD NOT be changed until this component is mounted for InViewComp's initialization.
       */
			stat: {
				type: Number,
				default: COMP_NOT_LOAD,
			},
		},
		data() {
			return {
				COMP_NOT_LOAD,
				COMP_LOADING,
				COMP_LOADED,
				COMP_ERR,
			};
		},
		components: {
			InViewComp,
		},
		computed: {
			cClass() {
				const $vm = this;
				const _class = {};
				const opts = $vm.cOpts;
				switch ($vm.stat) {
					case COMP_LOADING:
						_class[opts.classLoading] = true;
						break;
					case COMP_LOADED:
						_class[opts.classLoaded] = true;
						break;
					case COMP_ERR:
						_class[opts.classErr] = true;
						break;
					case COMP_NOT_LOAD:
					default:
						_class[opts.classNotLoad] = true;
						break;
				}
				return _class;
			},
			cOpts() {
				const $vm = this;
				return Object.assign({
					classNotLoad: 'comp-stat-not-load',
					classLoading: 'comp-stat-loading',
					classErr: 'comp-stat-err',
					classLoaded: 'comp-stat-loaded',
				}, $vm.opts, {
					loadHandler: $vm.loadHandler,
				});
			},
		},
		watch: {
			stat(v) {
				const $vm = this;
				const { $lazy, endCheck } = $vm.c();
				switch (v) {
					case COMP_LOADING:
						$lazy.stat = STAT_LOADING;
						break;
					case COMP_ERR:
						$lazy.stat = STAT_LOADED;
						break;
					case COMP_LOADED:
						$lazy.stat = STAT_LOADED;
						// End checking automatically if it's loaded
						endCheck();
						break;
					case COMP_NOT_LOAD:
					default:
						$lazy.stat = STAT_NOT_LOAD;
				}
			},
		},
		methods: {
			c() {
				return this.$refs.c;
			},
			loadHandler(params) {
				const { $lazy, endCheck } = params;
				const $vm = this;
				const { opts } = $vm;
				const { onInView } = opts;
				onInView && onInView({
					$lazy,
					endCheck,
				});
			},
			setLoading() {
				const $vm = this;
				const { $lazy } = $vm.c();
				if ($lazy) {
					$lazy.stat = STAT_LOADING;
				}
			},
			setLoadErr() {
				const $vm = this;
				const { $lazy } = $vm.c();
				if ($lazy) {
					$lazy.stat = STAT_LOADED;
				}
			},
			setLoaded() {
				const $vm = this;
				const { $lazy, endCheck } = $vm.c();
				if ($lazy) {
					$lazy.stat = STAT_LOADED;
					// End checking automatically if it's loaded
					endCheck();
				}
			},
			resetLoad() {
				const $vm = this;
				const { $lazy } = $vm.c();
				if ($lazy) {
					$lazy.stat = STAT_NOT_LOAD;
				}
			},
		},
	};
</script>