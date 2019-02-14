import $ from 'jquery';
import Vue from 'vue';
import { LazyClass, __RewireAPI__ as LazyRewireAPI, STAT_NOT_LOAD } from '../../../src/lazy';
// import { cssTextToObject, createVM, destroyVM, genImgSrc, genImgList } from '../util';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import Bluebird from 'bluebird';
// import spies from 'chai-spies';
// chai.use(spies);

chai.use(sinonChai);
const { expect } = chai;

const defaultLoadHandler = LazyRewireAPI.__get__('defaultLoadHandler');

const EV_SCROLL = 'scroll',
	EV_TRANSFORM = 'transform',

	CLASS_LOADING = 'lazy-loading',
	CLASS_ERR = 'lazy-err',
	CLASS_LOADED = 'lazy-loaded',

	CLASS_TARGET_SELF = 'self',
	CLASS_TARGET_PARENT = 'parent',

	// THROTTLE_METHOD_THROTTLE = 'throttle',
	THROTTLE_METHOD_DEBOUNCE = 'debounce',

	MODE_BG = 'bg',
	win = window;

const LAZY_EL_SIZE = 100;
let WIN_HEIGHT = 0;
let WIN_WIDTH = 0;
let WIN_HALF_HEIGHT = 0;
let WIN_HALF_WIDTH = 0;
const $win = $(window);

const $body = $('body');
const $html = $('html');
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

function cleanWrapper() {
	$body.css({
		overflow: '',
	});
	$html.css({
		overflow: '',
	});
	if ($div) {
		$div.remove();
		$div = null;
	}
	window.scrollTo(0, 0);
}

function setupWrapper() {
	cleanWrapper();
	$body.css({
		overflow: 'auto',
	});
	$html.css({
		overflow: 'auto',
	});
	$div = $('<div></div>');
	$body.append($div);
	div = $div[0];
}

function createLazyEl() {
	return $('<div></div>').css({
		width: LAZY_EL_SIZE,
		height: LAZY_EL_SIZE,
	});
}

function createParentLazyEl({ css } = {}) {
	return $('<div></div>').css({
		width: WIN_WIDTH,
		height: WIN_HEIGHT,
		overflow: 'auto',
		...css,
	});
}


before(() => {
	WIN_HEIGHT = $win.innerHeight();
	WIN_WIDTH = $win.innerWidth();
	WIN_HALF_HEIGHT = WIN_HEIGHT / 2;
	WIN_HALF_WIDTH /= 2;

	$body.css({
		margin: 0,
		padding: 0,
	});
});

beforeEach(() => {
	setupWrapper();
});

afterEach(() => {
	cleanWrapper();
});

describe('LazyClass', () => {
	const optsNoopLoadHandler = {
		loadHandler: noop,
	};

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

	describe('Noop loadHandler', () => {
		describe('Class methods', () => {
			afterEach(() => {
				destroyRootLazy();
			});

			it('constructor of root loader', () => {
				// Creation
				$rootLazy = new LazyLoader({ isRoot: true });

				expect($rootLazy.id).to.be.equal(LazyRewireAPI.__get__('loaderID'));
				expect($rootLazy.el).to.be.equal(win);
				expect($rootLazy.parent).to.be.equal(undefined);
				expect($rootLazy.opts).to.be.a('object');
				expect($rootLazy.opts.isRoot).to.be.equal(true);
				expect($rootLazy.stat).to.be.equal(STAT_NOT_LOAD);
				expect($rootLazy.events).to.deep.equal([EV_SCROLL]);
				expect($rootLazy._lastInView).to.be.equal(false);
				expect($rootLazy._throttle).to.be.equal(debounce);
				expect($rootLazy._tTime).to.be.equal(250);
				expect($rootLazy._loadHandler).to.be.equal(LazyRewireAPI.__get__('defaultLoadHandler'));
				expect(scope.$lazy).to.be.equal($rootLazy);
			});

			it('constructor of non-root loader', () => {
				// Init root loader
				setupDefaultRootLazy(optsNoopLoadHandler);

				const rootLazyOpts = $rootLazy.opts;

				// Creation
				const el = $('<div></div>')[0];
				const childOpts = {
					el,
					throttleTime: 100,
				};
				const expectedOpts = {
					...rootLazyOpts,
					...childOpts,
					parent: $rootLazy,
					loadHandler: noop,
					isRoot: false,
				};
				const childLoader = new LazyLoader(childOpts);

				expect(childLoader.id).to.be.equal(LazyRewireAPI.__get__('loaderID'));
				expect(childLoader.el).to.be.equal(el);
				expect(childLoader.parent).to.be.equal($rootLazy);
				Object.keys(childLoader.opts).forEach((k) => {
					expect(childLoader.opts[k], `Expect option equal: ${k}`).to.eql(expectedOpts[k]);
				});
				expect(childLoader.stat).to.be.equal(STAT_NOT_LOAD);
				expect(childLoader.events).to.deep.equal([EV_SCROLL]);
				expect(childLoader._lastInView).to.be.equal(false);
				expect(childLoader._throttle).to.be.equal(debounce);
				expect(childLoader._tTime).to.be.equal(100);
				expect(childLoader._loadHandler).to.be.equal(noop);
			});

			// NOTE: Horizontal scroll of window doesn't work in Karma
			describe('inView', () => {
				let WIN_QUARTER_HEIGHT = 0;
				let WIN_QUARTER_WIDTH = 0;
				let $spacerOfWinHeight0 = null;
				let $spacerOfWinHeight1 = null;
				let $spacerOfHalfWinHeight0 = null;
				let $spacerOfHalfWinHeight1 = null;
				let $spacerOfWinWidth0 = null;
				let $spacerOfWinWidth1 = null;

				beforeEach(() => {
					setupDefaultRootLazy(optsNoopLoadHandler);

					WIN_QUARTER_HEIGHT = WIN_HEIGHT / 4;
					WIN_QUARTER_WIDTH = WIN_WIDTH / 4;
					$spacerOfWinHeight0 = $('<div></div>').css({
						width: 1,
						height: WIN_HEIGHT,
						background: 'red',
					});
					$spacerOfWinHeight1 = $('<div></div>').css({
						width: 1,
						height: WIN_HEIGHT,
						background: 'green',
					});
					$spacerOfHalfWinHeight0 = $('<div></div>').css({
						width: 1,
						height: WIN_HALF_HEIGHT,
						background: 'blue',
					});
					$spacerOfHalfWinHeight1 = $('<div></div>').css({
						width: 1,
						height: WIN_HALF_HEIGHT,
						background: 'orange',
					});
					$spacerOfWinWidth0 = $('<div></div>').css({
						width: WIN_WIDTH,
						height: 1,
						background: 'red',
					});
					$spacerOfWinWidth1 = $('<div></div>').css({
						width: WIN_WIDTH,
						height: 1,
						background: 'green',
					});

					setupWrapper();
				});

				afterEach(() => {
					destroyRootLazy();

					WIN_QUARTER_HEIGHT = 0;
					WIN_QUARTER_WIDTH = 0;
					$spacerOfWinHeight0 = null;
					$spacerOfWinHeight1 = null;
					$spacerOfWinWidth0 = null;
					$spacerOfWinWidth1 = null;
					$spacerOfHalfWinHeight0 = null;
					$spacerOfHalfWinHeight1 = null;

					cleanWrapper();
				});

				it('Initially in viewport vertically with default preloadRatio', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($lazyEl0);

					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
					});
					expect(lazy0.inView()).to.be.equal(true);
				});

				it('Initially out of viewport vertically with default preloadRatio below the viewport', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($spacerOfWinHeight0);
					$div.append($lazyEl0);

					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
					});
					expect(lazy0.inView()).to.be.equal(false);

					window.scrollTo(0, 1);

					expect(lazy0.inView()).to.be.equal(true);
				});

				it('Initially out of viewport vertically with default preloadRatio above the viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div.append($lazyEl0);
					$div.append($spacerOfWinHeight0);

					window.scrollTo(0, LAZY_EL_SIZE);

					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
					});
					expect(lazy0.inView()).to.be.equal(false);

					window.scrollTo(0, LAZY_EL_SIZE - 1);

					expect(lazy0.inView()).to.be.equal(true);
				});

				it('Initially out of viewport vertically with specified preloadRatio > 1 below the viewport', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($spacerOfWinHeight0);
					$div.append($spacerOfWinHeight1);
					$div.append($lazyEl0);

					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						preloadRatio: 3,
					});

					let isInView = lazy0.inView();

					expect(isInView).to.be.equal(false);

					window.scrollTo(0, 1);

					isInView = lazy0.inView();

					expect(isInView).to.be.equal(true);
				});

				// preloadRatio should larger or equal to 1

				it('Initially in parent element viewport vertically with default preloadRatio with parent element all in viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div.append($lazyParent0);
					$lazyParent0.append($lazyEl0);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
					});

					const isInViewParent = lazyParent0.inView();
					const isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(true);
				});

				it('Initially below parent element viewport vertically with default preloadRatio with parent element all in viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div.append($lazyParent0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($lazyEl0);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially below parent element viewport vertically with default preloadRatio with parent element half in the lower part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($spacerOfHalfWinHeight0)
						.append($lazyParent0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($lazyEl0)
						.append($spacerOfWinHeight1);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, WIN_HALF_HEIGHT);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, WIN_HALF_HEIGHT + 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially above parent element viewport vertically with default preloadRatio with parent element half in the lower part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($spacerOfHalfWinHeight0)
						.append($lazyParent0);
					$lazyParent0
						.append($lazyEl0)
						.append($spacerOfWinHeight0);

					$lazyParent0[0].scrollTo(0, LAZY_EL_SIZE);
					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, LAZY_EL_SIZE - 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially below parent element viewport vertically with default preloadRatio with parent element half in the upper part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($lazyParent0)
						.append($spacerOfHalfWinHeight0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($lazyEl0);

					window.scrollTo(0, WIN_HALF_HEIGHT);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially above parent element viewport vertically with default preloadRatio with parent element half in the upper part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($lazyParent0)
						.append($spacerOfHalfWinHeight0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($lazyEl0)
						.append($spacerOfWinHeight1);

					window.scrollTo(0, WIN_HALF_HEIGHT);
					$lazyParent0[0].scrollTo(0, WIN_HALF_HEIGHT + LAZY_EL_SIZE);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, WIN_HALF_HEIGHT + LAZY_EL_SIZE - 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially below parent element viewport vertically with preloadRatio > 1 with parent element all in viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div.append($lazyParent0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($spacerOfWinHeight1)
						.append($lazyEl0);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
						preloadRatio: 3,
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially below parent element viewport vertically with preloadRatio > 1 with parent element half in the lower part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($spacerOfHalfWinHeight0)
						.append($lazyParent0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($lazyEl0)
						.append($spacerOfWinHeight1);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
						preloadRatio: 3,
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially above parent element viewport vertically with preloadRatio > 1 with parent element half in the lower part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($spacerOfHalfWinHeight0)
						.append($lazyParent0);
					$lazyParent0
						.append($lazyEl0)
						.append($spacerOfWinHeight0)
						.append($spacerOfWinHeight1);

					$lazyParent0[0].scrollTo(0, WIN_HALF_HEIGHT + LAZY_EL_SIZE);
					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
						preloadRatio: 3,
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, WIN_HALF_HEIGHT + LAZY_EL_SIZE - 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially below parent element viewport vertically with preloadRatio > 1 with parent element half in the upper part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($lazyParent0)
						.append($spacerOfHalfWinHeight0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($spacerOfHalfWinHeight1)
						.append($lazyEl0);

					window.scrollTo(0, WIN_HALF_HEIGHT);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
						preloadRatio: 3,
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});

				it('Initially above parent element viewport vertically with preloadRatio > 1 with parent element half in the upper part of viewport', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div
						.append($lazyParent0)
						.append($spacerOfHalfWinHeight0);
					$lazyParent0
						.append($spacerOfWinHeight0)
						.append($lazyEl0)
						.append($spacerOfWinHeight1);

					window.scrollTo(0, WIN_HALF_HEIGHT);
					$lazyParent0[0].scrollTo(0, WIN_HEIGHT + LAZY_EL_SIZE);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						parent: lazyParent0,
						el: $lazyEl0[0],
						preloadRatio: 3,
					});

					const isInViewParent = lazyParent0.inView();
					let isInView = lazy0.inView();

					expect(isInViewParent).to.be.equal(true);
					expect(isInView).to.be.equal(false);

					$lazyParent0[0].scrollTo(0, WIN_HEIGHT + LAZY_EL_SIZE - 1);
					isInView = lazy0.inView();
					expect(isInView).to.be.equal(true);
				});
			});

			describe('check', () => {
				let spiedLoadHandler = null;

				function makeOptsCheck(opts) {
					spiedLoadHandler = sinon.spy(noop);
					return {
						opts: {
							throttleTime: 1,
							loadHandler: spiedLoadHandler,
							...opts,
						},
						spiedLoadHandler,
					};
				}

				it('Parent is rootLazy', () => {
					const madeOpts = makeOptsCheck();
					setupDefaultRootLazy(madeOpts.opts);
					setupWrapper();

					const $lazyEl0 = createLazyEl();
					const $lazyEl1 = createLazyEl();

					$div.append($lazyEl0)
						.append($lazyEl1);

					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
					});
					const lazy1 = new LazyLoader({
						el: $lazyEl1[0],
					});

					const spiedLazy0Check = sinon.spy(lazy0, 'check');
					const spiedLazy1Check = sinon.spy(lazy1, 'check');

					expect(spiedLoadHandler).to.have.been.callCount(0);
					$rootLazy.check();

					expect(spiedLazy0Check).to.have.been.callCount(1);
					expect(spiedLazy1Check).to.have.been.callCount(1);
					// 2 + 1 for the check method of root loader was called
					expect(spiedLoadHandler).to.have.been.callCount(3);

					cleanWrapper();
					destroyRootLazy();
				});

				describe('3 levels of lazy loader with more than 1 type of event', () => {
					let $spacerOfWinHeight0 = null;

					beforeEach(() => {
						const madeOpts = makeOptsCheck();
						setupDefaultRootLazy(madeOpts.opts);
						$spacerOfWinHeight0 = $('<div></div>').css({
							width: 1,
							height: WIN_HEIGHT,
							background: 'red',
						});
						setupWrapper();
					});

					afterEach(() => {
						cleanWrapper();
						$spacerOfWinHeight0 = null;
						destroyRootLazy();
					});

					it('Parent not in view', () => {
						const $lazyEl0 = createLazyEl();
						const $lazyEl1 = createLazyEl();
						const $lazyParent0 = createParentLazyEl();
						const $lazyParent1 = createParentLazyEl();
						$div.append($spacerOfWinHeight0)
							.append($lazyParent0)
							.append($lazyParent1);
						$lazyParent0.append($lazyEl0)
							.append($lazyEl1);

						const lazyParent0 = new LazyLoader({
							el: $lazyParent0[0],
						});
						const lazyParent1 = new LazyLoader({
							el: $lazyParent1[0],
						});
						const lazy0 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl0[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});
						const lazy1 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl1[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});

						const spiedLazy0Check = sinon.spy(lazy0, 'check');
						const spiedLazy1Check = sinon.spy(lazy1, 'check');
						const spiedLazyParent0Check = sinon.spy(lazyParent0, 'check');
						const spiedLazyParent1Check = sinon.spy(lazyParent1, 'check');

						lazyParent0.check();

						expect(spiedLazyParent0Check.getCall(0).args[0]).to.be.equal(undefined);

						expect(spiedLazy0Check).to.have.been.callCount(0);
						expect(spiedLazy1Check).to.have.been.callCount(0);
						expect(spiedLazyParent0Check).to.have.been.callCount(1);
						expect(spiedLazyParent1Check).to.have.been.callCount(0);
						expect(spiedLoadHandler).to.have.been.callCount(0);

						$rootLazy.check();

						expect(spiedLazy0Check).to.have.been.callCount(0);
						expect(spiedLazy1Check).to.have.been.callCount(0);
						expect(spiedLazyParent0Check).to.have.been.callCount(2);
						expect(spiedLazyParent1Check).to.have.been.callCount(1);

						expect(spiedLazyParent0Check.getCall(1).args[0]).to.be.equal(undefined);
						expect(spiedLazyParent1Check.getCall(0).args[0]).to.be.equal(undefined);
						// 1 for the check method of root loader was called
						expect(spiedLoadHandler).to.have.been.callCount(1);
					});

					it('All in view', () => {
						const $lazyEl0 = createLazyEl();
						const $lazyEl1 = createLazyEl();
						const $lazyParent0 = createParentLazyEl({
							css: {
								height: WIN_HALF_HEIGHT,
							},
						});
						const $lazyParent1 = createParentLazyEl({
							css: {
								height: WIN_HALF_HEIGHT,
							},
						});
						$div
							.append($lazyParent0)
							.append($lazyParent1);
						$lazyParent0.append($lazyEl0)
							.append($lazyEl1);

						const lazyParent0 = new LazyLoader({
							el: $lazyParent0[0],
						});
						const lazyParent1 = new LazyLoader({
							el: $lazyParent1[0],
						});
						const lazy0 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl0[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});
						const lazy1 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl1[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});

						const spiedLazy0Check = sinon.spy(lazy0, 'check');
						const spiedLazy1Check = sinon.spy(lazy1, 'check');
						const spiedLazyParent0Check = sinon.spy(lazyParent0, 'check');
						const spiedLazyParent1Check = sinon.spy(lazyParent1, 'check');

						lazyParent0.check();

						expect(spiedLazy0Check).to.have.been.callCount(1);
						expect(spiedLazy1Check).to.have.been.callCount(1);
						expect(spiedLazyParent0Check).to.have.been.callCount(1);
						expect(spiedLazyParent1Check).to.have.been.callCount(0);
						// 2 + 1 for the check method of parent loaders was called
						expect(spiedLoadHandler).to.have.been.callCount(3);

						expect(spiedLazy0Check.getCall(0).args[0]).to.be.equal(undefined);
						expect(spiedLazy1Check.getCall(0).args[0]).to.be.equal(undefined);
						expect(spiedLazyParent0Check.getCall(0).args[0]).to.be.equal(undefined);

						spiedLoadHandler.resetHistory();
						$rootLazy.check();

						expect(spiedLazy0Check).to.have.been.callCount(2);
						expect(spiedLazy1Check).to.have.been.callCount(2);
						expect(spiedLazyParent0Check).to.have.been.callCount(2);
						expect(spiedLazyParent1Check).to.have.been.callCount(1);

						expect(spiedLazy0Check.getCall(1).args[0]).to.be.equal(undefined);
						expect(spiedLazy1Check.getCall(1).args[0]).to.be.equal(undefined);
						expect(spiedLazyParent0Check.getCall(1).args[0]).to.be.equal(undefined);
						expect(spiedLazyParent1Check.getCall(0).args[0]).to.be.equal(undefined);
						// 2 + 2 + 1 for the check method of root and parent loaders was called
						expect(spiedLoadHandler).to.have.been.callCount(5);
					});
				});

				describe('Only check certain type of event', () => {
					let $spacerOfWinHeight0 = null;

					beforeEach(() => {
						const madeOpts = makeOptsCheck();
						setupDefaultRootLazy(madeOpts.opts);
						$spacerOfWinHeight0 = $('<div></div>').css({
							width: 1,
							height: WIN_HEIGHT,
							background: 'red',
						});
						setupWrapper();
					});

					afterEach(() => {
						cleanWrapper();
						$spacerOfWinHeight0 = null;
						destroyRootLazy();
					});

					it('Parent not in view', () => {
						const $lazyEl0 = createLazyEl();
						const $lazyEl1 = createLazyEl();
						const $lazyParent0 = createParentLazyEl();
						const $lazyParent1 = createParentLazyEl();
						$div.append($spacerOfWinHeight0)
							.append($lazyParent0)
							.append($lazyParent1);
						$lazyParent0.append($lazyEl0)
							.append($lazyEl1);

						const lazyParent0 = new LazyLoader({
							el: $lazyParent0[0],
						});
						const lazyParent1 = new LazyLoader({
							el: $lazyParent1[0],
						});
						const lazy0 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl0[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});
						const lazy1 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl1[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});

						const spiedLazy0Check = sinon.spy(lazy0, 'check');
						const spiedLazy1Check = sinon.spy(lazy1, 'check');
						const spiedLazyParent0Check = sinon.spy(lazyParent0, 'check');
						const spiedLazyParent1Check = sinon.spy(lazyParent1, 'check');

						lazyParent0.check(EV_SCROLL);

						expect(spiedLazy0Check).to.have.been.callCount(0);
						expect(spiedLazy1Check).to.have.been.callCount(0);
						expect(spiedLazyParent0Check).to.have.been.callCount(1);
						expect(spiedLazyParent1Check).to.have.been.callCount(0);
						expect(spiedLoadHandler).to.have.been.callCount(0);

						expect(spiedLazyParent0Check.getCall(0).args[0]).to.be.equal(EV_SCROLL);

						$rootLazy.check(EV_SCROLL);

						expect(spiedLazy0Check).to.have.been.callCount(0);
						expect(spiedLazy1Check).to.have.been.callCount(0);
						expect(spiedLazyParent0Check).to.have.been.callCount(2);
						expect(spiedLazyParent1Check).to.have.been.callCount(1);

						expect(spiedLazyParent0Check.getCall(1).args[0]).to.be.equal(EV_SCROLL);
						expect(spiedLazyParent1Check.getCall(0).args[0]).to.be.equal(EV_SCROLL);
						// 1 for the check method of root loader was called
						expect(spiedLoadHandler).to.have.been.callCount(1);
					});

					it('All in view', () => {
						const $lazyEl0 = createLazyEl();
						const $lazyEl1 = createLazyEl();
						const $lazyParent0 = createParentLazyEl({
							css: {
								height: WIN_HALF_HEIGHT,
							},
						});
						const $lazyParent1 = createParentLazyEl({
							css: {
								height: WIN_HALF_HEIGHT,
							},
						});
						$div
							.append($lazyParent0)
							.append($lazyParent1);
						$lazyParent0.append($lazyEl0)
							.append($lazyEl1);

						const lazyParent0 = new LazyLoader({
							el: $lazyParent0[0],
						});
						const lazyParent1 = new LazyLoader({
							el: $lazyParent1[0],
						});
						const lazy0 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl0[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});
						const lazy1 = new LazyLoader({
							parent: lazyParent0,
							el: $lazyEl1[0],
							events: [EV_SCROLL, EV_TRANSFORM],
						});

						const spiedLazy0Check = sinon.spy(lazy0, 'check');
						const spiedLazy1Check = sinon.spy(lazy1, 'check');
						const spiedLazyParent0Check = sinon.spy(lazyParent0, 'check');
						const spiedLazyParent1Check = sinon.spy(lazyParent1, 'check');

						lazyParent0.check(EV_SCROLL);

						expect(spiedLazy0Check).to.have.been.callCount(1);
						expect(spiedLazy1Check).to.have.been.callCount(1);
						expect(spiedLazyParent0Check).to.have.been.callCount(1);
						expect(spiedLazyParent1Check).to.have.been.callCount(0);
						// 2 + 1 for the check method of parent loaders was called
						expect(spiedLoadHandler).to.have.been.callCount(3);

						expect(spiedLazy0Check.getCall(0).args[0]).to.be.equal(EV_SCROLL);
						expect(spiedLazy1Check.getCall(0).args[0]).to.be.equal(EV_SCROLL);
						expect(spiedLazyParent0Check.getCall(0).args[0]).to.be.equal(EV_SCROLL);

						spiedLoadHandler.resetHistory();
						$rootLazy.check(EV_SCROLL);

						expect(spiedLazy0Check).to.have.been.callCount(2);
						expect(spiedLazy1Check).to.have.been.callCount(2);
						expect(spiedLazyParent0Check).to.have.been.callCount(2);
						expect(spiedLazyParent1Check).to.have.been.callCount(1);

						expect(spiedLazy0Check.getCall(1).args[0]).to.be.equal(EV_SCROLL);
						expect(spiedLazy1Check.getCall(1).args[0]).to.be.equal(EV_SCROLL);
						expect(spiedLazyParent0Check.getCall(1).args[0]).to.be.equal(EV_SCROLL);
						expect(spiedLazyParent1Check.getCall(0).args[0]).to.be.equal(EV_SCROLL);
						// 2 + 2 + 1 for the check method of root and parent loaders was called
						expect(spiedLoadHandler).to.have.been.callCount(5);
					});
				});
			});

			describe('addChild rmChild', () => {
				beforeEach(() => {
					setupDefaultRootLazy(optsNoopLoadHandler);
					setupWrapper();
				});

				afterEach(() => {
					cleanWrapper();
					destroyRootLazy();
				});

				it('root parent addChild', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($lazyEl0);

					expect($rootLazy._children.size()).to.be.equal(0);
					expect($rootLazy._queues[EV_SCROLL]).to.be.equal(undefined);
					expect($rootLazy._queues[EV_TRANSFORM]).to.be.equal(undefined);

					const spiedAddEventListener = sinon.spy(window, 'addEventListener');

					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						events: [EV_SCROLL, EV_TRANSFORM],
					});

					expect($rootLazy._children.size()).to.be.equal(1);
					expect($rootLazy._queues[EV_SCROLL].get(lazy0.id)).to.be.equal(lazy0);
					expect($rootLazy._queues[EV_TRANSFORM].get(lazy0.id)).to.be.equal(lazy0);
					expect(spiedAddEventListener).to.have.been.callCount(2);
					expect(spiedAddEventListener.getCall(0).args[0]).to.have.been.equal(EV_SCROLL);
					expect(spiedAddEventListener.getCall(1).args[0]).to.have.been.equal(EV_TRANSFORM);
				});

				it('non-root parent addChild', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div.append($lazyParent0);
					$lazyParent0.append($lazyEl0);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						events: [EV_SCROLL, EV_TRANSFORM],
					});
					// remove default parent
					$rootLazy.rmChild(lazy0);

					expect(lazyParent0._children.size()).to.be.equal(0);
					expect(lazyParent0._queues[EV_SCROLL]).to.be.equal(undefined);
					expect(lazyParent0._queues[EV_TRANSFORM]).to.be.equal(undefined);

					const spiedAddEventListener = sinon.spy($lazyParent0[0], 'addEventListener');

					lazyParent0.addChild(lazy0);
					expect(lazyParent0._children.size()).to.be.equal(1);
					expect(lazyParent0._queues[EV_SCROLL].get(lazy0.id)).to.be.equal(lazy0);
					expect(lazyParent0._queues[EV_TRANSFORM].get(lazy0.id)).to.be.equal(lazy0);
					expect(spiedAddEventListener).to.have.been.callCount(2);
					expect(spiedAddEventListener.getCall(0).args[0]).to.have.been.equal(EV_SCROLL);
					expect(spiedAddEventListener.getCall(1).args[0]).to.have.been.equal(EV_TRANSFORM);
				});

				it('root parent rmChild', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($lazyEl0);

					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						events: [EV_SCROLL, EV_TRANSFORM],
					});

					const spiedRemoveEventListener = sinon.spy(window, 'removeEventListener');

					expect($rootLazy._children.size()).to.be.equal(1);
					expect($rootLazy._queues[EV_SCROLL].get(lazy0.id)).to.be.equal(lazy0);
					expect($rootLazy._queues[EV_TRANSFORM].get(lazy0.id)).to.be.equal(lazy0);

					$rootLazy.rmChild(lazy0);

					expect(spiedRemoveEventListener).to.have.been.callCount(2);
					expect(spiedRemoveEventListener.getCall(0).args[0]).to.have.been.equal(EV_SCROLL);
					expect(spiedRemoveEventListener.getCall(1).args[0]).to.have.been.equal(EV_TRANSFORM);
				});

				it('non-root parent rmChild', () => {
					const $lazyEl0 = createLazyEl();
					const $lazyParent0 = createParentLazyEl();
					$div.append($lazyParent0);
					$lazyParent0.append($lazyEl0);

					const lazyParent0 = new LazyLoader({
						el: $lazyParent0[0],
					});
					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						events: [EV_SCROLL, EV_TRANSFORM],
					});
					// remove default parent
					$rootLazy.rmChild(lazy0);

					lazyParent0.addChild(lazy0);
					expect(lazyParent0._children.size()).to.be.equal(1);
					expect(lazyParent0._queues[EV_SCROLL].get(lazy0.id)).to.be.equal(lazy0);
					expect(lazyParent0._queues[EV_TRANSFORM].get(lazy0.id)).to.be.equal(lazy0);

					const spiedRemoveEventListener = sinon.spy($lazyParent0[0], 'removeEventListener');
					lazyParent0.rmChild(lazy0);
					expect(spiedRemoveEventListener).to.have.been.callCount(2);
					expect(spiedRemoveEventListener.getCall(0).args[0]).to.have.been.equal(EV_SCROLL);
					expect(spiedRemoveEventListener.getCall(1).args[0]).to.have.been.equal(EV_TRANSFORM);
				});
			});
		});
	});

	describe('option loadHandler', () => {
		describe('scroll event and loadHandler should be called', () => {
			let $spacerOfWinHeight0 = null;
			let spiedLoadHandler = null;

			function makeOptsCheck(opts) {
				spiedLoadHandler = sinon.spy(noop);
				return {
					opts: {
						throttleTime: 1,
						loadHandler: spiedLoadHandler,
						...opts,
					},
					spiedLoadHandler,
				};
			}

			beforeEach(() => {
				const madeOpts = makeOptsCheck();
				setupDefaultRootLazy(madeOpts.opts);
				$spacerOfWinHeight0 = $('<div></div>').css({
					width: 1,
					height: WIN_HEIGHT,
					background: 'red',
				});
				setupWrapper();
			});

			afterEach(() => {
				cleanWrapper();
				$spacerOfWinHeight0 = null;
				destroyRootLazy();
			});

			it('Parent is not root and it\'s not in view initially', async () => {
				const $lazyEl0 = createLazyEl();
				const $lazyEl1 = createLazyEl();
				const $lazyParent0 = createParentLazyEl();
				const $lazyParent1 = createParentLazyEl();
				$div.append($spacerOfWinHeight0)
					.append($lazyParent0)
					.append($lazyParent1);
				$lazyParent0.append($lazyEl0)
					.append($lazyEl1);

				const lazyParent0 = new LazyLoader({
					el: $lazyParent0[0],
				});
				const lazyParent1 = new LazyLoader({
					el: $lazyParent1[0],
				});
				const lazy0 = new LazyLoader({
					parent: lazyParent0,
					el: $lazyEl0[0],
					events: [EV_SCROLL, EV_TRANSFORM],
				});
				const lazy1 = new LazyLoader({
					parent: lazyParent0,
					el: $lazyEl1[0],
					events: [EV_SCROLL, EV_TRANSFORM],
				});

				expect(spiedLoadHandler).to.have.been.callCount(0);

				window.scrollTo(0, WIN_HEIGHT);
				await Bluebird.delay(20);
				// parent0 + lazy0 + lazy1 for are in view
				expect(spiedLoadHandler).to.have.been.callCount(3);
			});

			it('Parent is root and it\'s not in view initially', async () => {
				const $lazyEl0 = createLazyEl();
				const $lazyEl1 = createLazyEl();

				$div.append($spacerOfWinHeight0)
					.append($lazyEl0)
					.append($lazyEl1);

				const lazy0 = new LazyLoader({
					el: $lazyEl0[0],
				});
				const lazy1 = new LazyLoader({
					el: $lazyEl1[0],
				});

				expect(spiedLoadHandler).to.have.been.callCount(0);

				window.scrollTo(0, WIN_HEIGHT);
				await Bluebird.delay(20);
				// lazy0 + lazy1 for are in view
				expect(spiedLoadHandler).to.have.been.callCount(2);

				// Arguments should be also correct
				expect(spiedLoadHandler.getCall(0).args[0]).to.be.equal(lazy0);
				expect(spiedLoadHandler.getCall(1).args[0]).to.be.equal(lazy1);
			});
		});
	});
});

describe('defaultLoadHandler', () => {
	describe('switching classes', () => {
		let StubReq = null;
		let spiedOnErr = null;
		let spiedOnLoad = null;
		let oReq = null;

		beforeEach(() => {
			setupDefaultRootLazy();

			oReq = LazyRewireAPI.__get__('Req');
			StubReq = sinon.spy(() => {
			});
			LazyRewireAPI.__set__('Req', StubReq);
		});
		afterEach(() => {
			StubReq = null;
			LazyRewireAPI.__set__('Req', oReq);
			spiedOnLoad = null;
			spiedOnErr = null;

			destroyRootLazy();
		});

		function assertReqOptions(lazy) {
			const reqOpts = StubReq.getCall(0).args[0];
			const lazyOpts = lazy.opts;
			const { classErr, classLoaded, classLoading, mode } = lazyOpts;

			const { el, loadEl, src, retry, filters, onReq } = reqOpts;
			expect($(el).hasClass(classErr)).to.be.equal(false);
			expect($(el).hasClass(classLoaded)).to.be.equal(false);
			expect($(el).hasClass(classLoading)).to.be.equal(!!src);
			expect(el === loadEl).to.be.equal(mode !== MODE_BG);
			expect(retry).to.be.equal(lazyOpts.retry);
			expect(filters).to.be.equal(lazyOpts.filters);
			expect(onReq).to.be.equal(lazyOpts.onReq);
		}

		it('default class target + mode img with src and succeeded', () => {
			const $lazy0 = createLazyEl();
			spiedOnLoad = sinon.spy(() => {});
			const lazy0 = new LazyLoader({
				el: $lazy0[0],
				src: 'path/to/img.jpg',
				onLoad: spiedOnLoad,
				onReq: () => {},
			});
			defaultLoadHandler(lazy0);
			assertReqOptions(lazy0);
		});

		it('default class target + mode img with src but failed', () => {
			const $lazy0 = createLazyEl();
			spiedOnErr = sinon.spy(() => {});
			const lazy0 = new LazyLoader({
				el: $lazy0[0],
				src: 'path/to/img.jpg',
				onErr: spiedOnErr,
			});
			defaultLoadHandler(lazy0);
			assertReqOptions(lazy0);
		});

		it('default class target + mode bg with src and succeeded', () => {
		});

		it('class target parent + mode img with src and succeeded', () => {
		});

		it('class target parent + mode img with src but failed', () => {
		});

		it('class target parent + mode bg with src and succeeded', () => {
		});

		it('default class target without src, no class should be added', () => {
		});
	});
});

describe('Req', () => {
	it('retry of number', () => {
	});

	it('retry of function', () => {
	});

	it('onLoad', () => {
	});

	it('onErr', () => {
	});

	it('onReq', () => {
	});

	it('filters', () => {
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
