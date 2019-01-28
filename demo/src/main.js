import Vue from 'vue';
import App from './App.vue';
import { VueLLazyload } from '../../src/index';

window.Vue = Vue;

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
