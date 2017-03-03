import Vue from 'vue'
import app from './App'
import { VueLLazyload } from '../../src/index';

Vue.use(VueLLazyload);

new Vue({
	el: '#app',
	template: '<app></app>',
	components: {
		app
	}
});