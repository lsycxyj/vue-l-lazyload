import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import noop from 'lodash/noop';

import {
	__RewireAPI__ as IndexRewireAPI,
	VueLLazyload,
	getLazyLoader,
	Lazy,
	LazyRef,
	InViewComp,
	LazyComp,
} from '../../../src/index';
import { LazyClass } from '../../../src/lazy';
import { mount } from '@vue/test-utils';

chai.use(sinonChai);
const { expect, assert } = chai;

let stubVue = null;
let StubLazyLoader = null;

function cleanLazyLoaderClass() {
	IndexRewireAPI.__set__('LazyLoader', undefined);
}

function resetInstall() {
	cleanLazyLoaderClass();
	stubVue = null;
	StubLazyLoader = null;
}

function makeStubVue() {
	stubVue = {
		directive: sinon.spy(noop),
		component: sinon.spy(noop),
	};
	return stubVue;
}

function stubLazyLoader() {
	const LazyLoader = LazyClass(stubVue);
	StubLazyLoader = sinon.spy(() => sinon.createStubInstance(LazyLoader));
	IndexRewireAPI.__set__('LazyLoader', StubLazyLoader);
}

describe('index', () => {
	describe('VueLLazyload', () => {
		afterEach(() => {
			resetInstall();
		});

		it('default regGlobal', () => {
			assert.isFunction(VueLLazyload.install);
			VueLLazyload.install(makeStubVue());
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
			const stubVue = makeStubVue();
			VueLLazyload.install(stubVue);

			const _LazyLoader = getLazyLoader();
			assert.isFunction(_LazyLoader);
			expect(_LazyLoader).to.be.equal(IndexRewireAPI.__get__('LazyLoader'));
		});
	});

	describe('Lazy', () => {
		before(() => {
			const stubVue = makeStubVue();
			stubLazyLoader(stubVue);
		});

		after(() => {
			resetInstall();
		});

		afterEach(() => {
			StubLazyLoader.resetHistory();
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

		it('Element reused', () => {
			// TODO
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
			makeStubVue();
			stubLazyLoader(stubVue);
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
			const stubVue = makeStubVue();
			stubLazyLoader(stubVue);
		});

		after(() => {
			resetInstall();
		});

		afterEach(() => {
			StubLazyLoader.resetHistory();
		});

		it('mounted', () => {
			// Initial check
		});

		it('destroyed', () => {
		});

		it('endCheck', () => {
		});

		it('Default loadHandler', () => {
		});

		it('opts loadHandler', () => {
		});
	});

	describe('LazyComp', () => {
		before(() => {
			const stubVue = makeStubVue();
			stubLazyLoader(stubVue);
		});

		after(() => {
			resetInstall();
		});

		afterEach(() => {
			StubLazyLoader.resetHistory();
		});

		it('prop tag default', () =>{
		});

		it('prop classes default', () =>{
		});

		it('prop classes specified', () =>{
		});

		it('prop loadHandler default', () =>{
		});

		it('prop loadHandler specified', () =>{
		});

		it('prop onInView', () =>{
		});

		it('prop stat changes', () => {
		});

		it('slots not-load', () => {
		});

		it('slots loading', () => {
		});

		it('slots err', () => {
		});

		it('slots default', () => {
		});

		it('method setLoading', () => {
		});

		it('method setLoadErr', () => {
		});

		it('method setLoaded', () => {
		});

		it('method resetLoad', () => {
		});
	});
});
