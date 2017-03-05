// TODO

import $ from 'jquery';
import { VueLLazyload } from '../../../src/index';
import {cssTextToObject, createVM, destroyVM, genImgSrc, genImgList} from '../util';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

// describe('Suite: test vue-l-lazyload', () => {
// 		const $body = $('body');
// 	let vm;
//
// 	$body.css({
// 		padding: 0,
// 		margin: 0,
// 	});
//
// 	afterEach(() => {
// 		destroyVM(vm);
// 	});
//
// 	function setup(data) {
// 		destroyVM(vm);
// 		vm = createVM(
// 			`
// 				<div>
// 				</div>
// 			`,
// 			{
// 				...data,
// 			});
// 	}
//
// 	it('default behavior', (done) => {
// 		destroyVM(vm);
// 		vm = createVM(
// 			`
// 				<div>
// 				</div>
// 			`,
// 			{
// 				data() {
// 					return {
// 					};
// 				},
// 			});
// 		const $el = $(vm.$el);
// 	});
//
// });
