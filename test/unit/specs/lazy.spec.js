import $ from 'jquery';
import Vue from 'vue';
import { LazyClass } from '../../../src/lazy';
// import { cssTextToObject, createVM, destroyVM, genImgSrc, genImgList } from '../util';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import noop from 'lodash/noop';
// import spies from 'chai-spies';
// chai.use(spies);

chai.use(sinonChai);
const { expect } = chai;

const EV_SCROLL = 'scroll';
const $body = $('body');
let $div;
let div;
let scope;
let LazyLoader;
let $rootLazy;

function setupLazyLoader(_scope = {}) {
	LazyLoader = LazyClass(_scope);
	scope = _scope;
}

function setupDefaultRootLazy(opts) {
	opts = Object.assign({}, opts);
	$rootLazy = new LazyLoader(Object.assign({ isRoot: true }, opts));
}

function destroyRootLazy() {
	$rootLazy.destroy({ deep: true });
	delete scope.$lazy;
}

before(() => {
	$body.css({
		margin: 0,
		padding: 0,
	});
});

beforeEach(() => {
	$div = $('<div></div>');
	$body.append($div);
	div = $div[0];
});

afterEach(() => {
	$div.remove();
	$div = null;
	window.scrollTo(0, 0);
});

describe('LazyClass', () => {
	before(() => {
		setupLazyLoader();
	});

	describe('default options', () => {
		beforeEach(() => {
			setupDefaultRootLazy();
		});

		afterEach(() => {
			destroyRootLazy();
		});

		describe('Root loader', () => {
			it('Root loader should be correctly initialized', () => {
				expect(scope.$lazy).to.be.equal($rootLazy);
			});

			it('Root loader should not be overwritten.', () => {
				const o$Lazy = scope.$lazy;
				setupDefaultRootLazy();
				expect(scope.$lazy).to.be.equal(o$Lazy);
			});
		});

		it('Destruction shallow', () => {
			// Setup spies
			const spiedAddEventListener = sinon.spy(window, 'addEventListener');
			const spiedRemoveEventListener = sinon.spy(window, 'removeEventListener');

			// child 0
			const child0 = new LazyLoader();
			expect(spiedAddEventListener).to.have.been.callCount(1);
			expect(spiedAddEventListener).to.have.been.calledWith(EV_SCROLL);
			const listener0 = spiedAddEventListener.getCall(0).args[1];
			// child 1
			const child1 = new LazyLoader();
			// The same event listener should be bound only once
			expect(spiedAddEventListener).to.have.been.callCount(1);

			// Queues and callback map should be correct
			const { _cbs, _queues } = $rootLazy;
			expect(_cbs[EV_SCROLL]).to.be.equal(listener0);
			expect(Object.keys(_queues).length).to.be.equal(1);
			let queue = _queues[EV_SCROLL];
			expect(queue.size()).to.be.equal(2);
			expect(queue.get(child0.id)).to.be.equal(child0);
			expect(queue.get(child1.id)).to.be.equal(child1);

			// Destroy loader one by one
			child0.destroy();
			// The event listener should not be removed until the event queue is empty
			expect(spiedRemoveEventListener).to.have.been.callCount(0);

			child1.destroy();

			// Queues and callback map should be empty
			expect(!_cbs[EV_SCROLL]).to.be.equal(true);
			queue = _queues[EV_SCROLL];
			expect(queue.size()).to.be.equal(0);
			expect(queue.has(child0.id)).to.be.equal(false);
			expect(queue.has(child1.id)).to.be.equal(false);

			// The queue is empty now, so removeEventListener should be called
			expect(spiedRemoveEventListener).to.have.been.callCount(1);
			expect(spiedRemoveEventListener.calledWith(EV_SCROLL, listener0));

			// Destroy spies
			spiedAddEventListener.restore();
			spiedRemoveEventListener.restore();
		});

		it('Destruction deep', () => {
			// Setup spies
			const spiedGlobalAddEventListener = sinon.spy(window, 'addEventListener');
			const spiedGlobalRemoveEventListener = sinon.spy(window, 'removeEventListener');
			// mid 0
			const $midEl0 = $('<div></div>');
			const mid0 = new LazyLoader({
				el: $midEl0[0],
			});
			expect(spiedGlobalAddEventListener).to.have.been.callCount(1);
			expect(spiedGlobalAddEventListener).to.have.been.calledWith(EV_SCROLL);
			const mid0Listener = spiedGlobalAddEventListener.getCall(0).args[1];
			// mid 1
			const $midEl1 = $('<div></div>');
			const mid1 = new LazyLoader({
				el: $midEl1[0],
			});
			// The same event listener should be bound only once
			expect(spiedGlobalAddEventListener).to.have.been.callCount(1);

			const spiedMid0AddEventListener = sinon.spy(mid0.el, 'addEventListener');
			const spiedMid0RemoveEventListener = sinon.spy(mid0.el, 'removeEventListener');

			// Leaf 0
			const leaf0 = new LazyLoader({
				parent: mid0,
			});
			expect(spiedMid0AddEventListener).to.have.been.callCount(1);
			const leafListener0 = spiedMid0AddEventListener.getCall(0).args[1];
			// Leaf 1
			const leaf1 = new LazyLoader({
				parent: mid0,
			});
			expect(spiedMid0AddEventListener).to.have.been.callCount(1);

			// Queues and callback map should be correct
			const { _cbs, _queues } = mid0;
			expect(_cbs[EV_SCROLL]).to.be.equal(leafListener0);
			expect(Object.keys(_queues).length).to.be.equal(1);
			let queue = _queues[EV_SCROLL];
			expect(queue.size()).to.be.equal(2);
			expect(queue.get(leaf0.id)).to.be.equal(leaf0);
			expect(queue.get(leaf1.id)).to.be.equal(leaf1);

			// Destroy deeply
			mid0.destroy({ deep: true });
			// The queue is empty now, so removeEventListener should be called
			expect(spiedMid0RemoveEventListener).to.have.been.callCount(1);
			const args = [EV_SCROLL, leafListener0];
			spiedMid0RemoveEventListener.getCall(0).args.forEach((v, i) => expect(v).to.be.equal(args[i]));
			expect(!_cbs[EV_SCROLL]).to.be.equal(true);
			queue = _queues[EV_SCROLL];
			expect(queue.size()).to.be.equal(0);
			expect(queue.has(leaf0.id)).to.be.equal(false);
			expect(queue.has(leaf1.id)).to.be.equal(false);

			// But the queues and callback map of global is not empty now
			expect(spiedGlobalRemoveEventListener).to.have.been.callCount(0);

			// Destroy the last mid now, and the queues and callback map of global should be empty now
			mid1.destroy();
			expect(spiedGlobalRemoveEventListener).to.have.been.callCount(1);


			// Destroy spies
			spiedGlobalAddEventListener.restore();
			spiedGlobalRemoveEventListener.restore();
			spiedMid0AddEventListener.restore();
			spiedMid0RemoveEventListener.restore();
		});
	});

	describe('noop loadHandler', () => {
		const optsNoopLoadHandler = {
			loadHandler: noop,
		};

		describe('', () => {
			beforeEach(() => {
				setupDefaultRootLazy(optsNoopLoadHandler);
			});

			afterEach(() => {
				destroyRootLazy();
			});

			it('_setup', () => {
			});
		});
	});
});
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
