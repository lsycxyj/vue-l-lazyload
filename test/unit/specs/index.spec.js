import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import noop from 'lodash/noop';
import $ from 'jquery';

import {
	__RewireAPI__ as IndexRewireAPI,
	VueLLazyload,
	getLazyLoader,
	Lazy,
	LazyRef,
	InViewComp,
	LazyComp,
	STAT_NOT_LOAD,
	STAT_LOADING,
	STAT_LOADED,
	COMP_NOT_LOAD,
	COMP_LOADING,
	COMP_LOADED,
	COMP_ERR,
} from '../../../src/index';
import { LazyClass } from '../../../src/lazy';
import { mount } from '@vue/test-utils';

chai.use(sinonChai);
const { expect, assert } = chai;

let stubVue = null;
let StubLazyLoader = null;
let scope = null;

let _waitPromiseResolve = null;
let waitPromise = null;

function makeNewWaitScrollPromise() {
	waitPromise = new Promise((res) => {
		_waitPromiseResolve = res;
	});
}

function resolveWaitScrollPromise() {
	_waitPromiseResolve();
	_waitPromiseResolve = null;
}

function cleanLazyLoaderClass() {
	IndexRewireAPI.__set__('LazyLoader', undefined);
}

function resetInstall() {
	cleanLazyLoaderClass();
	if (scope && scope.$lazy) {
		scope.$lazy.destroy({ deep: true });
	}
	scope = null;
	stubVue = null;
	StubLazyLoader = null;
}

function makeStubVue() {
	return {
		directive: sinon.spy(noop),
		component: sinon.spy(noop),
	};
}

function stubStubVue() {
	stubVue = makeStubVue();
	scope = stubVue;
	return stubVue;
}

function makeStubLazyLoader(opts) {
	const { instancePostProcessor, stubVue } = {
		...opts,
	};
	const LazyLoader = LazyClass(stubVue);
	StubLazyLoader = sinon.spy(() => {
		let instance = sinon.createStubInstance(LazyLoader);
		if (instancePostProcessor) {
			instance = instancePostProcessor(instance);
		}
		return instance;
	});
	return StubLazyLoader;
}

function stubLazyLoader(opts) {
	IndexRewireAPI.__set__('LazyLoader', makeStubLazyLoader({
		stubVue,
		...opts,
	}));
}

function resetFakeStubAndStubRealLazyLoader() {
	resetInstall();

	// Setup LazyLoader
	const scope = {};
	// Use real loader instead of using stub loader with doesn't implement anything.
	const LazyLoader = LazyClass(scope);
	IndexRewireAPI.__set__('LazyLoader', LazyLoader);

	return {
		LazyLoader,
		scope,
	};
}

describe('index', () => {
	describe('VueLLazyload', () => {
		afterEach(() => {
			resetInstall();
		});

		it('default regGlobal', () => {
			assert.isFunction(VueLLazyload.install);
			VueLLazyload.install(stubStubVue());
			const argsDirective = stubVue.directive.getCall(0).args;
			const argsComponent = stubVue.component.getCall(0).args;

			expect(argsDirective).to.eql(['lazy', Lazy]);
			expect(argsComponent).to.eql(['lazy-ref', LazyRef]);
		});
	});

	describe('getLazyLoader', () => {
		afterEach(() => {
			resetInstall();
		});

		it('LazyLoader class can be retrieved after install', () => {
			const stubVue = stubStubVue();
			VueLLazyload.install(stubVue);

			const _LazyLoader = getLazyLoader();
			assert.isFunction(_LazyLoader);
			expect(_LazyLoader).to.be.equal(IndexRewireAPI.__get__('LazyLoader'));
		});
	});

	describe('Lazy', () => {
		beforeEach(() => {
			stubStubVue();
			stubLazyLoader();
		});

		afterEach(() => {
			resetInstall();
		});

		it('bind with string opts', async () => {
			const EXPECTED_SRC = 'path/to/img.png';
			const TestComp = {
				template: `
						<div>
							<img id="el" v-lazy="'${EXPECTED_SRC}'">
						</div>
					`,
				directives: {
					Lazy,
				},
			};

			// Mount component
			const wrapper = mount(TestComp);
			const { vm } = wrapper;
			let _res = null;
			let p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			expect(StubLazyLoader.getCall(0).args[0]).to.eql({
				src: EXPECTED_SRC,
				el: wrapper.element.querySelector('#el'),
			});
			// Initial check
			const $lazy = StubLazyLoader.getCall(0).returnValue;
			expect($lazy.check).to.have.been.callCount(1);

			// Then destroy it
			wrapper.destroy();
			p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			expect($lazy.destroy).to.have.been.callCount(1);
		});

		it('bind with normal opts', async () => {
			const EXPECTED_SRC = 'path/to/img.png';
			const TestComp = {
				template: `
						<div>
							<img id="el" v-lazy="{src: '${EXPECTED_SRC}'}">
						</div>
					`,
				directives: {
					Lazy,
				},
			};

			// Mount component
			const wrapper = mount(TestComp);
			const { vm } = wrapper;
			let _res = null;
			let p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			expect(StubLazyLoader.getCall(0).args[0]).to.eql({
				src: EXPECTED_SRC,
				el: wrapper.element.querySelector('#el'),
			});
			// Initial check
			const $lazy = StubLazyLoader.getCall(0).returnValue;
			expect($lazy.check).to.have.been.callCount(1);

			// Then destroy it
			wrapper.destroy();
			p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			// Unbind was tested
			expect($lazy.destroy).to.have.been.callCount(1);
		});

		it('Element reused', async () => {
			const { LazyLoader } = resetFakeStubAndStubRealLazyLoader();
			// Stub inView
			LazyLoader.prototype.inView = () => true;
			const $rootLazy = new LazyLoader({ isRoot: true });

			const EXPECTED_SRC_1 = 'http://path/to/img_reuse_1.png';
			const EXPECTED_SRC_2 = 'http://path/to/img_reuse_2.png';
			const TestComp = {
				template: `
						<div>
							<img id="el1" v-lazy="{src: '${EXPECTED_SRC_1}', once: false }" v-if="showFirst">
							<img id="el2" v-lazy="{src: '${EXPECTED_SRC_2}', once: false }">
						</div>
					`,
				directives: {
					Lazy,
				},
				props: {
					showFirst: {
						type: Boolean,
						default: true,
					},
				},
			};

			// Mount component
			const wrapper = mount(TestComp);
			const { vm } = wrapper;
			let _res = null;
			let p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			expect(wrapper.element.querySelector('#el1').src).to.be.equal(EXPECTED_SRC_1);
			expect(wrapper.element.querySelector('#el2').src).to.be.equal(EXPECTED_SRC_2);

			// Hide the first element
			wrapper.setProps({
				showFirst: false,
			});
			p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			expect(!wrapper.element.querySelector('#el1')).to.be.equal(true);
			expect(wrapper.element.querySelector('#el2').src).to.be.equal(EXPECTED_SRC_2);

			// Clean up
			$rootLazy.destroy({ deep: true });
		});

		it('Directive is unbound before bind completes', async () => {
			const EXPECTED_SRC = 'path/to/img.png';
			const TestComp = {
				template: `
						<div>
							<img id="el" v-lazy="{src: '${EXPECTED_SRC}'}">
						</div>
					`,
				directives: {
					Lazy,
				},
			};

			// Mount component
			const wrapper = mount(TestComp);
			const { vm } = wrapper;
			expect(StubLazyLoader).to.have.been.callCount(0);

			// Then destroy it immediately
			wrapper.destroy();
			expect(StubLazyLoader).to.have.been.callCount(0);
			let _res = null;
			const p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			// No loader should be created
			expect(StubLazyLoader).to.have.been.callCount(0);
		});

		it('Work with LazyRef', async () => {
			const EXPECTED_SRC = 'path/to/img.png';
			const TestComp = {
				template: `
						<div>
							<lazy-ref ref="ref">
								<img id="el" v-lazy="{src: '${EXPECTED_SRC}', ref: 'ref'}">
							</lazy-ref>
						</div>
					`,
				directives: {
					Lazy,
				},
				components: {
					LazyRef,
				},
			};

			// Mount component
			const wrapper = mount(TestComp);
			const { vm } = wrapper;
			// LazyRef created a loader
			expect(StubLazyLoader).to.have.been.callCount(1);

			let _res = null;
			const p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;

			const $lazyOfRef = vm.$refs.ref.$lazy;
			expect(!!$lazyOfRef).to.be.equal(true);
			expect(StubLazyLoader.getCall(1).args[0]).to.include({
				src: EXPECTED_SRC,
				el: wrapper.element.querySelector('#el'),
				parent: $lazyOfRef,
			});
			// Initial check
			const $lazy = StubLazyLoader.getCall(1).returnValue;
			expect($lazy.check).to.have.been.callCount(1);
		});

		async function testComponentUpdated({ EXPECTED_OPTS_1, EXPECTED_OPTS_2, EXPECTED_FINAL_SRC }) {
			const TestComp = {
				template: `
						<div>
							<img id="el" v-lazy="opts">
						</div>
					`,
				props: ['opts'],
				directives: {
					Lazy,
				},
			};

			// Mount component
			const wrapper = mount(TestComp, {
				propsData: {
					opts: EXPECTED_OPTS_1,
				},
			});
			const { vm } = wrapper;
			let _res = null;
			let p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;

			const $lazy = StubLazyLoader.getCall(0).returnValue;
			expect($lazy.update).to.have.been.callCount(0);

			// Update props
			wrapper.setProps({ opts: EXPECTED_OPTS_2 });
			p = new Promise((res) => {
				_res = res;
			});
			vm.$nextTick(() => {
				_res();
			});
			await p;
			expect($lazy.update.getCall(0).args[0]).to.eql({
				src: EXPECTED_FINAL_SRC,
			});
		}

		it('componentUpdated with string opts', async () => {
			const EXPECTED_OPTS_1 = 'path/to/img1.png';
			const EXPECTED_OPTS_2 = 'path/to/img2.png';
			const EXPECTED_FINAL_SRC = EXPECTED_OPTS_2;
			await testComponentUpdated({ EXPECTED_OPTS_1, EXPECTED_OPTS_2, EXPECTED_FINAL_SRC });
		});

		it('componentUpdated with normal opts', async () => {
			const EXPECTED_SRC_1 = 'path/to/img1.png';
			const EXPECTED_SRC_2 = 'path/to/img2.png';
			const EXPECTED_OPTS_1 = { src: EXPECTED_SRC_1 };
			const EXPECTED_OPTS_2 = { src: EXPECTED_SRC_2 };
			const EXPECTED_FINAL_SRC = EXPECTED_SRC_2;
			await testComponentUpdated({ EXPECTED_OPTS_1, EXPECTED_OPTS_2, EXPECTED_FINAL_SRC });
		});
	});

	describe('LazyRef', () => {
		before(() => {
			stubStubVue();
			stubLazyLoader();
		});

		after(() => {
			resetInstall();
		});

		describe('props', () => {
			afterEach(() => {
				StubLazyLoader.resetHistory();
			});

			it('tag default', () => {
				const wrapper = mount(LazyRef);
				expect(wrapper.props().tag).to.be.equal('div');
				expect(wrapper.element.tagName).to.be.equal('DIV');
			});

			it('tag section', () => {
				const wrapper = mount(LazyRef, {
					propsData: {
						tag: 'section',
					},
				});
				expect(wrapper.props().tag).to.be.equal('section');
				expect(wrapper.element.tagName).to.be.equal('SECTION');
			});

			it('opts', () => {
				const opts = {
					classLoading: 'whatever',
				};
				const wrapper = mount(LazyRef, {
					propsData: {
						opts,
					},
				});
				const arg = StubLazyLoader.getCall(0).args[0];
				expect(arg).to.eql({
					...opts,
					el: wrapper.element,
				});
			});
		});

		describe('hooks', () => {
			afterEach(() => {
				StubLazyLoader.resetHistory();
			});

			it('mounted', () => {
				const wrapper = mount(LazyRef);
				const { vm } = wrapper;
				expect(!!vm.$lazy).to.be.equal(true);
				expect(vm.$lazy.check).to.have.been.callCount(1);
			});

			it('destroyed', () => {
				const wrapper = mount(LazyRef);
				const { vm } = wrapper;
				expect(vm.$lazy.destroy).to.have.been.callCount(0);
				wrapper.destroy();
				expect(vm.$lazy.destroy).to.have.been.callCount(1);
			});
		});

		describe('methods', () => {
			afterEach(() => {
				StubLazyLoader.resetHistory();
			});

			it('check', () => {
				const wrapper = mount(LazyRef);
				const { vm } = wrapper;
				expect(vm.$lazy.check).to.have.been.callCount(1);
				vm.check();
				expect(vm.$lazy.check).to.have.been.callCount(2);
			});

			it('add', () => {
				const wrapper = mount(LazyRef);
				const { vm } = wrapper;
				const lazy0 = new StubLazyLoader();
				expect(vm.$lazy.addChild).to.have.been.callCount(0);
				vm.add(lazy0);
				expect(vm.$lazy.addChild.getCall(0).args[0]).to.be.equal(lazy0);
			});

			it('update', () => {
				const wrapper = mount(LazyRef);
				const { vm } = wrapper;
				const opts = { src: 'whatever.png' };
				expect(vm.$lazy.update).to.have.been.callCount(0);
				vm.update(opts);
				expect(vm.$lazy.update.getCall(0).args[0]).to.be.equal(opts);
			});

			it('rm', () => {
				const wrapper = mount(LazyRef);
				const { vm } = wrapper;
				const lazy0 = new StubLazyLoader();
				expect(vm.$lazy.rmChild).to.have.been.callCount(0);
				vm.rm(lazy0);
				expect(vm.$lazy.rmChild.getCall(0).args[0]).to.be.equal(lazy0);
			});
		});
	});

	describe('InViewComp', () => {
		before(() => {
			stubStubVue();
			stubLazyLoader();
		});

		after(() => {
			resetInstall();
		});

		afterEach(() => {
			StubLazyLoader.resetHistory();
		});

		it('mounted with default option', () => {
			function foo() {
			}

			const wrapper = mount(InViewComp, {
				propsData: {
					opts: {
						whateverArg: foo,
					},
				},
			});
			expect(wrapper.props().tag).to.be.equal('div');
			expect(wrapper.element.tagName).to.be.equal('DIV');

			expect(StubLazyLoader.getCall(0).args[0]).to.eql({
				el: wrapper.element,
				loadHandler: noop,
				// Pass through other args
				whateverArg: foo,
			});

			// Initial check
			const $lazy = wrapper.vm.$lazy;
			expect($lazy.check).to.have.been.callCount(1);
		});

		it('Specified loadHandler', () => {
			const spiedLoadHandler = sinon.spy(noop);

			const wrapper = mount(InViewComp, {
				propsData: {
					opts: {
						loadHandler: spiedLoadHandler,
					},
				},
			});
			expect(wrapper.props().tag).to.be.equal('div');
			expect(wrapper.element.tagName).to.be.equal('DIV');

			const loaderOpts = StubLazyLoader.getCall(0).args[0];
			expect(loaderOpts).to.include({
				el: wrapper.element,
			});
			const { loadHandler } = loaderOpts;

			// Initial check
			const { vm } = wrapper;
			const $lazy = vm.$lazy;
			expect($lazy.check).to.have.been.callCount(1);

			// Manually call patched loadHandler
			loadHandler();

			expect(spiedLoadHandler.getCall(0).args[0]).to.eql({
				$lazy,
				endCheck: vm.endCheck,
			});
		});

		it('Specified tag', () => {
			const wrapper = mount(InViewComp, {
				propsData: {
					tag: 'section',
				},
			});
			expect(wrapper.props().tag).to.be.equal('section');
			expect(wrapper.element.tagName).to.be.equal('SECTION');

			expect(StubLazyLoader.getCall(0).args[0]).to.include({
				el: wrapper.element,
			});

			// Initial check
			const $lazy = wrapper.vm.$lazy;
			expect($lazy.check).to.have.been.callCount(1);
		});

		it('destroyed', () => {
			const wrapper = mount(InViewComp);
			const { vm } = wrapper;
			const { $lazy } = vm;
			const spiedDestroy = $lazy.destroy;
			expect(spiedDestroy).to.have.been.callCount(0);
			wrapper.destroy();
			expect(spiedDestroy).to.have.been.callCount(1);
		});

		it('endCheck', () => {
			const wrapper = mount(InViewComp);
			const { vm } = wrapper;
			const { $lazy } = vm;
			const spiedDestroy = $lazy.destroy;
			expect(spiedDestroy).to.have.been.callCount(0);
			vm.endCheck();
			expect(spiedDestroy).to.have.been.callCount(1);
		});
	});

	describe('LazyComp', () => {
		before(() => {
			const stubVue = stubStubVue();
			stubLazyLoader();
		});

		after(() => {
			resetInstall();
		});

		afterEach(() => {
			if (StubLazyLoader && StubLazyLoader.resetHistory) {
				StubLazyLoader.resetHistory();
			}
		});

		it('prop tag default', () => {
			const wrapper = mount(LazyComp);
			expect(wrapper.props().tag).to.be.equal('div');
			expect(wrapper.element.tagName).to.be.equal('DIV');
		});

		it('prop classes default with stat changes', async () => {
			const { LazyLoader } = resetFakeStubAndStubRealLazyLoader();
			const $rootLazy = new LazyLoader({ isRoot: true });

			const CLASS_NOT_LOAD = 'comp-stat-not-load';
			const CLASS_LOADING = 'comp-stat-loading';
			const CLASS_LOAD_ERR = 'comp-stat-err';
			const CLASS_LOADED = 'comp-stat-loaded';
			const wrapper = mount(LazyComp);

			const { vm } = wrapper;
			const { $lazy } = vm.c();
			// Default not load
			expect(wrapper.element.className).to.be.equal(CLASS_NOT_LOAD);
			expect($lazy.stat).to.be.equal(STAT_NOT_LOAD);

			// Loading
			wrapper.setProps({
				stat: COMP_LOADING,
			});
			expect(wrapper.element.className).to.be.equal(CLASS_LOADING);
			expect($lazy.stat).to.be.equal(STAT_LOADING);

			// Load error
			wrapper.setProps({
				stat: COMP_ERR,
			});
			expect(wrapper.element.className).to.be.equal(CLASS_LOAD_ERR);
			expect($lazy.stat).to.be.equal(STAT_LOADED);
			expect(!!$lazy.destroyed).to.be.equal(false);

			// Loaded
			wrapper.setProps({
				stat: COMP_LOADED,
			});
			expect(wrapper.element.className).to.be.equal(CLASS_LOADED);
			expect($lazy.stat).to.be.equal(STAT_LOADED);
			expect(!!$lazy.destroyed).to.be.equal(true);
		});

		it('prop classes specified', () => {
			const CLASS_NOT_LOAD = 'custom-not-load';
			const CLASS_LOADING = 'custom-loading';
			const CLASS_LOAD_ERR = 'custom-err';
			const CLASS_LOADED = 'custom-loaded';
			const wrapper = mount(LazyComp, {
				propsData: {
					opts: {
						classNotLoad: CLASS_NOT_LOAD,
						classLoading: CLASS_LOADING,
						classErr: CLASS_LOAD_ERR,
						classLoaded: CLASS_LOADED,
					},
				},
			});

			// Default not load
			expect(wrapper.element.className).to.be.equal(CLASS_NOT_LOAD);

			// Loading
			wrapper.setProps({
				stat: COMP_LOADING,
			});
			expect(wrapper.element.className).to.be.equal(CLASS_LOADING);

			// Load error
			wrapper.setProps({
				stat: COMP_ERR,
			});
			expect(wrapper.element.className).to.be.equal(CLASS_LOAD_ERR);

			// Loaded
			wrapper.setProps({
				stat: COMP_LOADED,
			});
			expect(wrapper.element.className).to.be.equal(CLASS_LOADED);
		});

		it('prop opts onInView', () => {
			const { LazyLoader } = resetFakeStubAndStubRealLazyLoader();
			const $rootLazy = new LazyLoader({ isRoot: true });
			const spiedOnInView = sinon.spy(noop);
			const wrapper = mount(LazyComp, {
				propsData: {
					opts: {
						onInView: spiedOnInView,
					},
				},
			});
			const { vm } = wrapper;
			const { $lazy: _$lazy } = vm.c();

			// Stub inView
			_$lazy.inView = () => true;
			expect(spiedOnInView).to.have.been.callCount(0);

			// Simulate scroll
			_$lazy.check();
			let callArgs = spiedOnInView.getCall(0).args[0];
			let { $lazy, endCheck } = callArgs;
			expect($lazy).to.be.equal(_$lazy);
			assert.isFunction(endCheck);

			// Simulate multiple scroll triggering
			_$lazy.check();
			callArgs = spiedOnInView.getCall(1).args[0];
			({ $lazy, endCheck } = callArgs);
			// It should not be destoryed before endCheck is called
			expect(!!$lazy.destroyed).to.be.equal(false);
			endCheck();
			expect(!!$lazy.destroyed).to.be.equal(true);
		});

		it('slots loading and not-load', () => {
			const TestComp = {
				template: `
					<div>
						<lazy-comp :stat="stat">
							<div id="slotNotLoad" slot="not-load"></div>
							<div id="slotLoading" slot="loading"></divi>
						</lazy-comp>
					</div>
				`,
				components: {
					LazyComp,
				},
				data() {
					return {
						stat: STAT_NOT_LOAD,
					};
				},
				methods: {
					setLoading() {
						const $vm = this;
						$vm.stat = STAT_LOADING;
					},
				},
			};
			const wrapper = mount(TestComp);
			const { vm, element } = wrapper;
			const $wrapper = $(element);
			expect($wrapper.find('#slotNotLoad').length).to.be.equal(1);
			expect($wrapper.find('#slotLoading').length).to.be.equal(0);
			// TODO
		});

		it('slots err and not-load', () => {
		});

		it('slots default and not-load', () => {
		});

		it('All slots with bug regression of lost of event listeners when exposing methods to change data inside the child component', () => {
		});

		it('method setLoaderLoading and resetLoaderLoad', () => {
			const { LazyLoader } = resetFakeStubAndStubRealLazyLoader();
			const $rootLazy = new LazyLoader({ isRoot: true });

			const wrapper = mount(LazyComp);
			const { vm } = wrapper;
			vm.setLoaderLoading();
			const { $lazy } = vm.c();
			expect($lazy.stat).to.be.equal(STAT_LOADING);

			vm.resetLoaderLoad();
			expect($lazy.stat).to.be.equal(STAT_NOT_LOAD);
		});

		it('method setLoaderLoadErr and resetLoaderLoad', () => {
			const { LazyLoader } = resetFakeStubAndStubRealLazyLoader();
			const $rootLazy = new LazyLoader({ isRoot: true });

			const wrapper = mount(LazyComp);
			const { vm } = wrapper;
			vm.setLoaderLoadErr();
			const { $lazy } = vm.c();
			expect($lazy.stat).to.be.equal(STAT_LOADED);

			vm.resetLoaderLoad();
			expect($lazy.stat).to.be.equal(STAT_NOT_LOAD);
		});

		it('method setLoaderLoaded and resetLoaderLoad', () => {
			const { LazyLoader } = resetFakeStubAndStubRealLazyLoader();
			const $rootLazy = new LazyLoader({ isRoot: true });

			const wrapper = mount(LazyComp);
			const { vm } = wrapper;
			const { $lazy } = vm.c();
			vm.setLoaderLoaded();
			expect($lazy.stat).to.be.equal(STAT_LOADED);

			// Not work because the $lazy was destroyed
			vm.resetLoaderLoad();
			expect($lazy.stat).to.be.equal(STAT_LOADED);
		});
	});
});
