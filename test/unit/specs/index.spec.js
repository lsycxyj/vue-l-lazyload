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
	StubLazyLoader = sinon.spy(function () {
		return sinon.createStubInstance(LazyLoader);
	});
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

		describe('root lazy is parent', () => {
			it('bind', () => {
			});

			it('Directive is unbound before bind completes', () => {
			});

			it('componentUpdated', () => {
			});

			it('unbind', () => {
			});
		});

		describe('LazyRef is parent', () => {
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
});
