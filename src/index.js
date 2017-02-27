const LazyTarget = {
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
			vm.$nextTick(function() {
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
	},
	Lazy = {
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
	LazyTarget,
	Lazy
};