import $ from 'jquery';
import { LazyClass, __RewireAPI__ as LazyRewireAPI, STAT_NOT_LOAD, STAT_LOADED, STAT_LOADING } from '../../../src/lazy';
// import { cssTextToObject, createVM, destroyVM, genImgSrc, genImgList } from '../util';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
// import spies from 'chai-spies';
// chai.use(spies);

chai.use(sinonChai);
const { expect, assert } = chai;

const defaultLoadHandler = LazyRewireAPI.__get__('defaultLoadHandler');
const Req = LazyRewireAPI.__get__('Req');

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

let _waitPromiseResolve = null;
let waitPromise = null;
function makeNewWaitScrollPromise() {
	waitPromise = new Promise((res) => {
		_waitPromiseResolve = res;
	});
}

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

			describe('update', () => {
				const O_SRC = 'original/img.jpg';
				const N_SRC = 'new/img.png';

				beforeEach(() => {
					setupDefaultRootLazy();
					setupWrapper();
				});

				afterEach(() => {
					destroyRootLazy();
					cleanWrapper();
				});

				it('only src can be updated', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($lazyEl0);
					const spiedOnReq = sinon.spy(() => {
					});
					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						src: O_SRC,
						once: false,
						onReq: spiedOnReq,
					});
					const oOpts = {
						...lazy0.opts,
					};
					lazy0.check();
					expect(lazy0.stat).to.be.equal(STAT_LOADING);
					const spiedCheck = sinon.spy(lazy0, 'check');
					const spiedCancel = sinon.spy(lazy0.req, 'cancel');

					const FOO_VALUE = 'foo';
					lazy0.update({
						src: N_SRC,
						el: FOO_VALUE,
						events: [FOO_VALUE],
						classLoading: FOO_VALUE,
						classErr: FOO_VALUE,
						classTarget: FOO_VALUE,
						retry: FOO_VALUE,
						once: FOO_VALUE,
						preloadRatio: FOO_VALUE,
						throttleMethod: FOO_VALUE,
						throttleTime: FOO_VALUE,
						loadHandler: FOO_VALUE,
						onReq: FOO_VALUE,
						onLoad: FOO_VALUE,
						onErr: FOO_VALUE,
					});
					// Cancel last request and reload
					expect(spiedCheck).to.have.been.callCount(1);
					expect(spiedCancel).to.have.been.callCount(1);
					expect(spiedOnReq).to.have.been.callCount(2);

					expect(lazy0.opts).to.eql({
						...oOpts,
						src: N_SRC,
					});
				});

				it('Nothing changed if "once" is true', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($lazyEl0);
					const spiedOnReq = sinon.spy(() => {
					});
					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						src: O_SRC,
						once: true,
						onReq: spiedOnReq,
					});
					const oOpts = {
						...lazy0.opts,
					};
					lazy0.check();
					expect(lazy0.stat).to.be.equal(STAT_LOADING);
					const spiedCheck = sinon.spy(lazy0, 'check');
					const spiedCancel = sinon.spy(lazy0.req, 'cancel');

					lazy0.update({ src: N_SRC });
					expect(spiedCheck).to.have.been.callCount(0);
					expect(spiedCancel).to.have.been.callCount(0);
					expect(spiedOnReq).to.have.been.callCount(1);

					expect(lazy0.opts).to.eql(oOpts);
				});

				it('Nothing changed if src is the same as the original one', () => {
					const $lazyEl0 = createLazyEl();
					$div.append($lazyEl0);
					const spiedOnReq = sinon.spy(() => {
					});
					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						src: O_SRC,
						once: false,
						onReq: spiedOnReq,
					});
					const oOpts = {
						...lazy0.opts,
					};
					lazy0.check();
					expect(lazy0.stat).to.be.equal(STAT_LOADING);
					const spiedCheck = sinon.spy(lazy0, 'check');
					const spiedCancel = sinon.spy(lazy0.req, 'cancel');

					lazy0.update({ src: O_SRC });
					expect(spiedCheck).to.have.been.callCount(0);
					expect(spiedCancel).to.have.been.callCount(0);
					expect(spiedOnReq).to.have.been.callCount(1);

					expect(lazy0.opts).to.eql(oOpts);
				});
			});

			describe('destroy', () => {
				beforeEach(() => {
					setupDefaultRootLazy();
				});

				afterEach(() => {
					destroyRootLazy();
				});
				it('root lazy destruction', () => {
					$rootLazy.destroy();
					expect(scope.$lazy).to.be.equal(undefined);
				});
			});
		});
	});

	describe('options', () => {
		describe('loadHandler', () => {
			describe('scroll event and loadHandler should be called', () => {
				let $spacerOfWinHeight0 = null;
				let spiedLoadHandler = null;
				let spiedLoadHandlerPromise = null;
				let spiedLoadHandlerPromiseCanResovle = false;

				function makeOptsCheck(opts) {
					let _resolve;
					spiedLoadHandlerPromise = new Promise((resolve) => {
						_resolve = resolve;
					});
					spiedLoadHandler = sinon.spy(() => {
						if (spiedLoadHandlerPromiseCanResovle) {
							_resolve();
						}
					});
					return {
						opts: {
							throttleTime: 1,
							loadHandler: spiedLoadHandler,
							...opts,
						},
						spiedLoadHandler,
					};
				}

				function setSpiedLoadHandlerPromiseCanResovle() {
					spiedLoadHandlerPromiseCanResovle = true;
				}

				function cleanLoadHandlerPromise() {
					spiedLoadHandlerPromiseCanResovle = false;
					spiedLoadHandlerPromise = null;
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
					cleanLoadHandlerPromise();
					destroyRootLazy();
				});

				it('loadHandler should be triggered multiple times when it is continuous scrolling and loading status does\'t changed.', async () => {
					const $lazyEl0 = createLazyEl();
					$div.append($lazyEl0)
						.append($spacerOfWinHeight0);

					const spiedLoadHandler = sinon.spy(() => {
						if (_waitPromiseResolve) {
							_waitPromiseResolve();
							_waitPromiseResolve = null;
						}
						else {
							throw new Error('WaitScrollPromise was consumed!');
						}
					});
					const lazy0 = new LazyLoader({
						el: $lazyEl0[0],
						events: [EV_SCROLL],
						loadHandler: spiedLoadHandler,
						throttleTime: 0,
					});

					expect(spiedLoadHandler).to.have.been.callCount(0);
					makeNewWaitScrollPromise();
					window.scrollTo(0, 1);
					await waitPromise;
					waitPromise = null;

					expect(spiedLoadHandler).to.have.been.callCount(1);
					makeNewWaitScrollPromise();
					window.scrollTo(0, 2);
					await waitPromise;
					waitPromise = null;

					expect(spiedLoadHandler).to.have.been.callCount(2);
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

					setSpiedLoadHandlerPromiseCanResovle();
					window.scrollTo(0, WIN_HEIGHT);
					await spiedLoadHandlerPromise;
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

					setSpiedLoadHandlerPromiseCanResovle();
					window.scrollTo(0, WIN_HEIGHT);
					await spiedLoadHandlerPromise;
					// lazy0 + lazy1 for are in view
					expect(spiedLoadHandler).to.have.been.callCount(2);

					// Arguments should be also correct
					expect(spiedLoadHandler.getCall(0).args[0]).to.be.equal(lazy0);
					expect(spiedLoadHandler.getCall(1).args[0]).to.be.equal(lazy1);
				});
			});
		});

		describe('onEnter and onLeave', () => {
			let $spacerOfWinHeight0 = null;
			let $spacerOfWinHeight1 = null;
			let spiedOnEnter = null;
			let spiedOnLeave = null;

			beforeEach(() => {
				setupDefaultRootLazy(optsNoopLoadHandler);
				setupWrapper();

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

				spiedOnEnter = sinon.spy(noop);
				spiedOnLeave = sinon.spy(noop);
			});

			afterEach(() => {
				cleanWrapper();
				destroyRootLazy();

				$spacerOfWinHeight0 = null;
				$spacerOfWinHeight1 = null;
				spiedOnEnter = null;
				spiedOnLeave = null;

				window.scrollTo(0, 0);
			});

			it('root lazy never calls', () => {
				destroyRootLazy();
				setupDefaultRootLazy({
					...optsNoopLoadHandler,
					onEnter: spiedOnEnter,
					onLeave: spiedOnLeave,
				});
				$div.append($spacerOfWinHeight0)
					.append($spacerOfWinHeight1);
				window.scrollTo(0, WIN_HEIGHT);

				expect(spiedOnEnter).to.have.been.callCount(0);
				expect(spiedOnLeave).to.have.been.callCount(0);
			});

			it('onEnter should be called if it is in view initially', () => {
				const $lazyEl0 = createLazyEl();
				$div.append($lazyEl0);
				const lazy0 = new LazyLoader({
					el: $lazyEl0[0],
					onEnter: spiedOnEnter,
					onLeave: spiedOnLeave,
				});

				lazy0.check();

				expect(spiedOnEnter).to.have.been.callCount(1);
				expect(spiedOnEnter.getCall(0).args[0]).to.eql({
					$lazy: lazy0,
				});
				expect(spiedOnLeave).to.have.been.callCount(0);
			});

			it('onLeave should not be call if it is not in view initially', () => {
				const $lazyEl0 = createLazyEl();
				$div.append($spacerOfWinHeight0)
					.append($lazyEl0);
				const lazy0 = new LazyLoader({
					el: $lazyEl0[0],
					onEnter: spiedOnEnter,
					onLeave: spiedOnLeave,
				});

				lazy0.check();

				expect(spiedOnEnter).to.have.been.callCount(0);
				expect(spiedOnLeave).to.have.been.callCount(0);
			});

			it('onEnter and onLeave should be called which is not in view initially', () => {
				const $lazyEl0 = createLazyEl();
				$div.append($spacerOfWinHeight0)
					.append($lazyEl0)
					.append($spacerOfWinHeight1);
				const lazy0 = new LazyLoader({
					el: $lazyEl0[0],
					events: [],
					onEnter: spiedOnEnter,
					onLeave: spiedOnLeave,
				});

				lazy0.check();

				expect(spiedOnEnter).to.have.been.callCount(0);
				expect(spiedOnLeave).to.have.been.callCount(0);

				window.scrollTo(0, WIN_HEIGHT + 1);
				// Simulate scroll check;
				lazy0.check();

				expect(spiedOnEnter).to.have.been.callCount(1);
				expect(spiedOnEnter.getCall(0).args[0]).to.eql({
					$lazy: lazy0,
				});
				expect(spiedOnLeave).to.have.been.callCount(0);

				window.scrollTo(0, WIN_HEIGHT + 2);
				// Simulate scroll check;
				lazy0.check();
				// No more onEnter calls by now
				expect(spiedOnEnter).to.have.been.callCount(1);
				expect(spiedOnLeave).to.have.been.callCount(0);

				window.scrollTo(0, WIN_HEIGHT + LAZY_EL_SIZE);
				// Simulate scroll check;
				lazy0.check();
				expect(spiedOnEnter).to.have.been.callCount(1);
				expect(spiedOnLeave).to.have.been.callCount(1);
				expect(spiedOnLeave.getCall(0).args[0]).to.eql({
					$lazy: lazy0,
				});
			});
		});
	});
});

describe('defaultLoadHandler', () => {
	describe('switching classes', () => {
		let StubReq = null;
		let spiedOnLoad = null;
		let spiedOnErr = null;
		let oReq = null;

		beforeEach(() => {
			setupDefaultRootLazy();
			setupWrapper();

			oReq = LazyRewireAPI.__get__('Req');
			StubReq = sinon.spy(function ({ src }) {
				const me = this;
				me.src = src;
			});
			LazyRewireAPI.__set__('Req', StubReq);
		});
		afterEach(() => {
			StubReq = null;
			LazyRewireAPI.__set__('Req', oReq);
			spiedOnLoad = null;
			spiedOnErr = null;

			cleanWrapper();
			destroyRootLazy();
		});

		function assertReqOptions(lazy) {
			let reqOpts = {};
			const stubReqCall = StubReq.getCall(0);
			if (stubReqCall) {
				reqOpts = stubReqCall.args[0];
			}
			const lazyOpts = lazy.opts;
			const { classErr, classLoaded, classLoading, classTarget, mode, src, el } = lazyOpts;

			const $el = $(el);
			const $classTarget = classTarget === CLASS_TARGET_PARENT ? $el.parent() : $el;
			expect($classTarget.hasClass(classErr)).to.be.equal(false);
			expect($classTarget.hasClass(classLoaded)).to.be.equal(false);
			expect($classTarget.hasClass(classLoading)).to.be.equal(!!src);

			if (stubReqCall) {
				const { el, loadEl, src, retry, filters, onReq } = reqOpts;
				if (src) {
					expect(lazy.stat).to.be.equal(STAT_LOADING);
				}
				expect(el === loadEl).to.be.equal(mode !== MODE_BG);
				expect(loadEl.tagName).to.be.equal(mode === MODE_BG ? 'IMG' : el.tagName);
				expect(retry).to.be.equal(lazyOpts.retry);
				expect(filters).to.be.equal(lazyOpts.filters);
				expect(onReq).to.be.equal(lazyOpts.onReq);
			}
		}

		function backgroundImageValue(src) {
			return `url("${src}")`;
		}

		it('default class target + mode img with src and succeeded', () => {
			const $lazy0 = createLazyEl();
			spiedOnLoad = sinon.spy(() => {
			});
			const el = $lazy0[0];
			const src = 'path/to/img.jpg';
			const lazy0 = new LazyLoader({
				el,
				src,
				onLoad: spiedOnLoad,
				onReq: () => {
				},
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(1);
			const { onLoad } = StubReq.getCall(0).args[0];
			const stubInfo = {};
			onLoad(stubInfo);

			// "once" by false
			expect(!!lazy0.destroyed).to.be.equal(true);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnLoad).to.have.been.callCount(1);
			expect(spiedOnLoad.getCall(0).args[0]).to.be.equal(stubInfo);

			expect($(el).hasClass(classErr)).to.be.equal(false);
			expect($(el).hasClass(classLoaded)).to.be.equal(true);
			expect($(el).hasClass(classLoading)).to.be.equal(false);
		});

		it('default class target + mode img with src and succeeded without once option', () => {
			const $lazy0 = createLazyEl();
			spiedOnLoad = sinon.spy(() => {
			});
			const el = $lazy0[0];
			const src = 'path/to/img.jpg';
			const lazy0 = new LazyLoader({
				el,
				src,
				onLoad: spiedOnLoad,
				once: false,
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(1);
			const { onLoad } = StubReq.getCall(0).args[0];
			const stubInfo = {};
			onLoad(stubInfo);
			// "once" is false
			expect(!!lazy0.destroyed).to.be.equal(false);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnLoad).to.have.been.callCount(1);
			expect(spiedOnLoad.getCall(0).args[0]).to.be.equal(stubInfo);

			expect($(el).hasClass(classErr)).to.be.equal(false);
			expect($(el).hasClass(classLoaded)).to.be.equal(true);
			expect($(el).hasClass(classLoading)).to.be.equal(false);
		});

		it('default class target + mode img with src but failed', () => {
			const $lazy0 = createLazyEl();
			spiedOnErr = sinon.spy(() => {
			});
			const el = $lazy0[0];
			const src = 'path/to/img.jpg';
			const lazy0 = new LazyLoader({
				el,
				src,
				onErr: spiedOnErr,
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(1);
			const { onErr } = StubReq.getCall(0).args[0];
			const stubInfo = { isEnd: true };
			onErr(stubInfo);

			// "once" by default
			expect(!!lazy0.destroyed).to.be.equal(true);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnErr).to.have.been.callCount(1);
			expect(spiedOnErr.getCall(0).args[0]).to.be.equal(stubInfo);

			expect($(el).hasClass(classErr)).to.be.equal(true);
			expect($(el).hasClass(classLoaded)).to.be.equal(false);
			expect($(el).hasClass(classLoading)).to.be.equal(false);
		});

		it('default class target + mode bg with src and succeeded', () => {
			const $lazy0 = createLazyEl();
			spiedOnLoad = sinon.spy(() => {
			});
			const el = $lazy0[0];
			const src = 'path/to/img.jpg';
			const lazy0 = new LazyLoader({
				el,
				src,
				onLoad: spiedOnLoad,
				mode: MODE_BG,
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(1);
			const { onLoad } = StubReq.getCall(0).args[0];
			const stubInfo = {};
			onLoad(stubInfo);

			// "once" by default
			expect(!!lazy0.destroyed).to.be.equal(true);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnLoad).to.have.been.callCount(1);
			expect(spiedOnLoad.getCall(0).args[0]).to.be.equal(stubInfo);

			expect($(el).hasClass(classErr)).to.be.equal(false);
			expect($(el).hasClass(classLoaded)).to.be.equal(true);
			expect($(el).hasClass(classLoading)).to.be.equal(false);

			expect($(el).css('backgroundImage')).to.be.equal(backgroundImageValue(src));
		});

		it('default class target + mode bg with src but failed', () => {
			const $lazy0 = createLazyEl();
			spiedOnErr = sinon.spy(() => {
			});
			const el = $lazy0[0];
			const src = 'path/to/img.jpg';
			const lazy0 = new LazyLoader({
				el,
				src,
				onErr: spiedOnErr,
				mode: MODE_BG,
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(1);
			const { onErr } = StubReq.getCall(0).args[0];
			const stubInfo = { isEnd: true };
			onErr(stubInfo);

			// "once" by default
			expect(!!lazy0.destroyed).to.be.equal(true);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnErr).to.have.been.callCount(1);
			expect(spiedOnErr.getCall(0).args[0]).to.be.equal(stubInfo);

			expect($(el).hasClass(classErr)).to.be.equal(true);
			expect($(el).hasClass(classLoaded)).to.be.equal(false);
			expect($(el).hasClass(classLoading)).to.be.equal(false);

			expect($(el).css('backgroundImage')).to.be.equal('');
		});

		it('class target parent + mode img with src and succeeded', () => {
			const $lazy0 = createLazyEl();
			spiedOnLoad = sinon.spy(() => {
			});
			const el = $lazy0[0];
			$div.append($lazy0);
			const src = 'path/to/img.jpg';
			const lazy0 = new LazyLoader({
				el,
				src,
				onLoad: spiedOnLoad,
				classTarget: CLASS_TARGET_PARENT,
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(1);
			const { onLoad } = StubReq.getCall(0).args[0];
			const stubInfo = {};
			onLoad(stubInfo);

			// "once" by false
			expect(!!lazy0.destroyed).to.be.equal(true);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnLoad).to.have.been.callCount(1);
			expect(spiedOnLoad.getCall(0).args[0]).to.be.equal(stubInfo);

			expect($(el).hasClass(classErr)).to.be.equal(false);
			expect($(el).hasClass(classLoaded)).to.be.equal(false);
			expect($(el).hasClass(classLoading)).to.be.equal(false);
			const $parent = $(el).parent();
			expect($parent.hasClass(classErr)).to.be.equal(false);
			expect($parent.hasClass(classLoaded)).to.be.equal(true);
			expect($parent.hasClass(classLoading)).to.be.equal(false);
		});

		it('class target parent + mode img with src but failed', () => {
			const $lazy0 = createLazyEl();
			$div.append($lazy0);
			spiedOnErr = sinon.spy(() => {
			});
			const el = $lazy0[0];
			const src = 'path/to/img.jpg';
			const lazy0 = new LazyLoader({
				el,
				src,
				onErr: spiedOnErr,
				classTarget: CLASS_TARGET_PARENT,
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(1);
			const { onErr } = StubReq.getCall(0).args[0];
			const stubInfo = { isEnd: true };
			onErr(stubInfo);

			// "once" by default
			expect(!!lazy0.destroyed).to.be.equal(true);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnErr).to.have.been.callCount(1);
			expect(spiedOnErr.getCall(0).args[0]).to.be.equal(stubInfo);

			expect($(el).hasClass(classErr)).to.be.equal(false);
			expect($(el).hasClass(classLoaded)).to.be.equal(false);
			expect($(el).hasClass(classLoading)).to.be.equal(false);
			const $parent = $(el).parent();
			expect($parent.hasClass(classErr)).to.be.equal(true);
			expect($parent.hasClass(classLoaded)).to.be.equal(false);
			expect($parent.hasClass(classLoading)).to.be.equal(false);
		});

		it('default class target without src, no class should be added', () => {
			const $lazy0 = createLazyEl();
			spiedOnLoad = sinon.spy(() => {
			});
			const el = $lazy0[0];
			const lazy0 = new LazyLoader({
				el,
				onLoad: spiedOnLoad,
				onReq: () => {
				},
			});
			expect(lazy0.stat).to.be.equal(STAT_NOT_LOAD);

			defaultLoadHandler(lazy0);

			assertReqOptions(lazy0);
			const lazyOpts = lazy0.opts;
			const { classErr, classLoaded, classLoading } = lazyOpts;

			expect(StubReq).to.have.been.callCount(0);

			// "once" by false
			expect(!!lazy0.destroyed).to.be.equal(true);
			expect(lazy0.stat).to.be.equal(STAT_LOADED);
			expect(spiedOnLoad).to.have.been.callCount(0);

			expect($(el).hasClass(classErr)).to.be.equal(false);
			expect($(el).hasClass(classLoaded)).to.be.equal(false);
			expect($(el).hasClass(classLoading)).to.be.equal(false);
		});
	});
});

describe('Req', () => {
	let lazyEl = null;
	let loadEl = null;
	let spiedOnLoad = null;
	let spiedOnErr = null;
	let spiedOnReq = null;
	const INPUT_SRC = 'path/to/image.png';
	const SRC_RETRY_1 = `${INPUT_SRC}?fallback1=true`;
	const SRC_RETRY_2 = `${SRC_RETRY_1}&fallback2=true`;
	let oInputSrc = null;

	function filterSuffix1(last) {
		return `${last}.a`;
	}

	function filterSuffix2(last) {
		return `${last}.b`;
	}

	function expectedFilteredSuffixes(v) {
		return `${v}.a.b`;
	}

	function StubImage() {
		const me = this;

		me.removeAttribute = sinon.spy((key) => {
			delete me[key];
		});
		me.setAttribute = sinon.spy((key, value) => {
			me[key] = value;
		});
	}

	beforeEach(() => {
		lazyEl = $('<div></div>')[0];
		loadEl = new StubImage();
		spiedOnLoad = sinon.spy(() => {
		});
		spiedOnErr = sinon.spy(() => {
		});
		spiedOnReq = sinon.spy(() => {
		});
	});

	afterEach(() => {
		lazyEl = null;
		loadEl = null;
		spiedOnLoad = null;
		spiedOnErr = null;
		spiedOnReq = null;
	});

	function makeReqByOpts(opts) {
		opts = Object.assign({
			src: INPUT_SRC,
			el: lazyEl,
			loadEl,
			retry: 0,
			onLoad: spiedOnLoad,
			onErr: spiedOnErr,
			onReq: spiedOnReq,
		}, opts);
		oInputSrc = opts.src;
		return new Req(opts);
	}

	function assertLoadCall({ index, src = INPUT_SRC }) {
		expect(loadEl.removeAttribute.getCall(index).args[0]).to.be.equal('src');
		expect(loadEl.setAttribute.getCall(index).args[0]).to.be.equal('src');
		expect(loadEl.setAttribute.getCall(index).args[1]).to.be.equal(src);
		expect(spiedOnReq.getCall(index).args[0]).to.eql({
			el: lazyEl,
			src,
			oSrc: oInputSrc,
		});
	}

	it('retry of number 0', () => {
		const req = makeReqByOpts();
		assertLoadCall({ index: 0 });
		loadEl.onerror();
		expect(spiedOnErr.getCall(0).args[0]).to.be.eql({
			el: lazyEl,
			src: INPUT_SRC,
			oSrc: oInputSrc,
			isEnd: true,
		});
		expect(spiedOnLoad).to.have.been.callCount(0);
	});

	it('retry of number 1', () => {
		const req = makeReqByOpts({
			retry: 1,
		});
		assertLoadCall({ index: 0 });
		// First time failed
		loadEl.onerror();
		// Not ended
		expect(spiedOnErr.getCall(0).args[0]).to.be.eql({
			el: lazyEl,
			src: INPUT_SRC,
			oSrc: oInputSrc,
		});
		expect(spiedOnLoad).to.have.been.callCount(0);
		assertLoadCall({ index: 1 });

		// Second time succeeded
		loadEl.onload();
		expect(spiedOnLoad.getCall(0).args[0]).to.be.eql({
			el: lazyEl,
			src: INPUT_SRC,
			oSrc: oInputSrc,
		});
	});

	it('retry of function with filters', () => {
		const spiedRetry = sinon.spy(noop);

		const req = makeReqByOpts({
			retry: spiedRetry,
			filters: [filterSuffix1, filterSuffix2],
		});
		assertLoadCall({ index: 0, src: expectedFilteredSuffixes(INPUT_SRC) });
		// First time failed
		loadEl.onerror();
		// Not ended
		expect(spiedOnErr.getCall(0).args[0]).to.be.eql({
			el: lazyEl,
			src: expectedFilteredSuffixes(INPUT_SRC),
			oSrc: oInputSrc,
		});
		let retryArgs = spiedRetry.getCall(0).args[0];
		let { el, src, oSrc, times, next, applyFilters } = retryArgs;
		expect(el).to.be.equal(lazyEl);
		expect(src).to.be.equal(expectedFilteredSuffixes(INPUT_SRC));
		expect(oSrc).to.be.equal(oInputSrc);
		expect(times).to.be.equal(0);
		assert.isFunction(next);
		assert.isFunction(applyFilters);

		next({ src: SRC_RETRY_1 });

		assertLoadCall({ index: 1, src: SRC_RETRY_1 });

		// Second time failed
		loadEl.onerror();
		expect(spiedOnErr.getCall(1).args[0]).to.be.eql({
			el: lazyEl,
			src: SRC_RETRY_1,
			oSrc: oInputSrc,
		});

		retryArgs = spiedRetry.getCall(1).args[0];
		({ el, src, oSrc, times, next, applyFilters } = retryArgs);
		expect(el).to.be.equal(lazyEl);
		expect(src).to.be.equal(SRC_RETRY_1);
		expect(oSrc).to.be.equal(oInputSrc);
		expect(times).to.be.equal(1);

		next({ src: applyFilters(SRC_RETRY_2) });

		assertLoadCall({ index: 2, src: expectedFilteredSuffixes(SRC_RETRY_2) });

		// Third time failed
		loadEl.onerror();
		expect(spiedOnErr.getCall(2).args[0]).to.be.eql({
			el: lazyEl,
			src: expectedFilteredSuffixes(SRC_RETRY_2),
			oSrc: oInputSrc,
		});

		retryArgs = spiedRetry.getCall(2).args[0];
		({ el, src, oSrc, times, next, applyFilters } = retryArgs);
		expect(el).to.be.equal(lazyEl);
		expect(src).to.be.equal(expectedFilteredSuffixes(SRC_RETRY_2));
		expect(oSrc).to.be.equal(oInputSrc);
		expect(times).to.be.equal(2);

		// Give up retry
		next({ failed: true });
		// Ended
		expect(spiedOnErr.getCall(3).args[0]).to.be.eql({
			el: lazyEl,
			src: expectedFilteredSuffixes(SRC_RETRY_2),
			oSrc: oInputSrc,
			isEnd: true,
		});
	});

	it('filters', () => {
		const spiedFilter1 = sinon.spy(filterSuffix1);
		const spiedFilter2 = sinon.spy(filterSuffix2);

		const req = makeReqByOpts({
			filters: [spiedFilter1, spiedFilter2],
		});

		assertLoadCall({ index: 0, src: expectedFilteredSuffixes(INPUT_SRC) });

		expect(req.src).to.be.equal(expectedFilteredSuffixes(INPUT_SRC));
		const argsFilter1 = spiedFilter1.getCall(0).args;
		const argsFilter2 = spiedFilter2.getCall(0).args;
		expect(argsFilter1[0]).to.be.equal(INPUT_SRC);
		expect(argsFilter1[1]).to.eql({
			el: lazyEl,
		});
		expect(argsFilter2[0]).to.be.equal(`${INPUT_SRC}.a`);
		expect(argsFilter2[1]).to.eql({
			el: lazyEl,
		});
	});

	it('Cancel request before onload', () => {
		const req = makeReqByOpts();
		assertLoadCall({ index: 0 });
		req.cancel();
		loadEl.onload();
		expect(spiedOnLoad).to.have.been.callCount(0);
	});

	it('Cancel request before onerror', () => {
		const req = makeReqByOpts();
		assertLoadCall({ index: 0 });
		req.cancel();
		loadEl.onerror();
		expect(spiedOnErr).to.have.been.callCount(0);
	});
});
