import Vue from 'vue';
import App from './App.vue';
import { VueLLazyload } from '../../src/index';

Vue.use(VueLLazyload, {
	once: false,
});

new Vue({
	el: '#app',
	components: {
		App,
	},
	render: h => h(App),
});
