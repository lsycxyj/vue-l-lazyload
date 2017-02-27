<style lang="less">
</style>
<template>
	<div>
		<lazy-ref ref="lazyRef" class="lazy-ref" v-if="show">
			<div>
				<img v-lazy="{ref:'lazyRef', src:img}">
			</div>
		</lazy-ref>
		<button @click="changeImg">Change img</button>
		<button @click="changeShow">Change show</button>
	</div>
</template>
<script>
import { LazyRef, Lazy } from '../../src/index';

let i = 0;

export default {
	data() {
		return {
			img: 'img/lena1.png',
			show: true
		};
	},
	methods: {
		changeImg() {
			this.img = 'img/lena' + (i++) + '.png';
		},
		changeShow() {
			this.show = !this.show;
		}
	},
	components: {
		'lazy-target': LazyRef
	},
	directives: {
		'lazy': Lazy
	}
};
</script>
