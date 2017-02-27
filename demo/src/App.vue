<style lang="less">
</style>
<template>
	<div>
		<lazy-target ref="lazyTarget" class="lazy-target" v-if="show">
			<div>
				<img v-lazy="{ref:'lazyTarget', src:img}">
			</div>
		</lazy-target>
		<button @click="changeImg">Change img</button>
		<button @click="changeShow">Change show</button>
	</div>
</template>
<script>
import { LazyTarget, Lazy } from '../../src/index';

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
		'lazy-target': LazyTarget
	},
	directives: {
		'lazy': Lazy
	}
};
</script>
