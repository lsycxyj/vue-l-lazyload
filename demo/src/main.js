import Vue from 'vue'
import app from './App'
import { VueLLazyload } from '../../src/index';

Vue.use(VueLLazyload, {
	once: false,
});

new Vue({
	el: '#app',
	template: '<app></app>',
	components: {
		app
	}
});
