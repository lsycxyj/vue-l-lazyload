<style lang="less">
	.lazy-ref {
		height: 640px;
		overflow: auto;
	}

	img {
		width: 200px;
		height: 200px;
	}

	.lazy-loading {
		&:before {
			content: "";
			display: block;
			width: 40px;
			height: 40px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin: -20px 0 0 -20px;
			background-color: #333;
			-webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
			animation: sk-rotateplane 1.2s infinite ease-in-out;
		}
		position: relative;
		width: 200px;
		height: 200px;
	}

	.buttons {
		position: fixed;
		right: 20px;
		bottom: 20px;
		z-index: 20;
	}

	@-webkit-keyframes sk-rotateplane {
		0% {
			-webkit-transform: perspective(120px)
		}
		50% {
			-webkit-transform: perspective(120px) rotateY(180deg)
		}
		100% {
			-webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
		}
	}

	@keyframes sk-rotateplane {
		0% {
			transform: perspective(120px) rotateX(0deg) rotateY(0deg);
			-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
		}
		50% {
			transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
			-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
		}
		100% {
			transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
			-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
		}
	}
</style>
<template>
	<div>
		<div>
			<lazy-ref ref="lazyRef" class="lazy-ref" :opts="{classTarget:'parent'}">
				<div>
					<img v-lazy="{ref:'lazyRef', src:img}">
				</div>
				<div class="list">
					<div v-for="img in imgs">
						<img v-lazy="{ref:'lazyRef', src:img}">
					</div>
				</div>
			</lazy-ref>
		</div>
		<div class="list">
			<div v-for="img in imgs">
				<img v-lazy="{classTarget:'parent', src:img}">
			</div>
		</div>
		<div class="buttons">
			<button @click="changeImg">Change img</button>
			<button @click="changeImgs">Change imgs</button>
		</div>
	</div>
</template>
<script>
let i = 0;

const LIST_LEN = 20;

function genImgSrc() {
	return 'img/lenna.png?_t=' + Math.floor(Math.random() * 100000) + '.' + Date.now();
}

function genImgList(len) {
	const arr = [];
	while (len--) {
		arr.push(genImgSrc());
	}
	return arr;
}

export default {
	data() {
		return {
			img: genImgSrc(),
			imgs: genImgList(LIST_LEN),
			show: true
		};
	},
	methods: {
		changeImg() {
			this.img = genImgSrc();
		},
		changeImgs() {
			this.imgs = genImgList(LIST_LEN);
		},
		changeShow() {
			this.show = !this.show;
		},
		changeTest() {
			this.test = !this.test;
		}
	}
};

</script>
