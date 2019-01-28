import Vue from 'vue';
import $ from 'jquery';

function type(o) {
	return typeof o;
}

function isArr(o) {
	return o instanceof Array;
}

function isStr(o) {
	return type(o) == 'string';
}


function destroyVM(vm) {
	if (vm) {
		const el = vm.$el;
		if (el && el.parentNode) {
			$(el).remove();
		}
	}
}

function createAndReplaceElem() {
	const el = document.createElement('div'),
		elBody = document.body,
		oEl = document.getElementById('app');
	if (oEl) {
		$(oEl).remove(oEl);
	}
	elBody.appendChild(el);
	return el;
}

function createVM(Compo, propsData = {}, mounted) {
	const nPropsData = { ...propsData };
	const el = createAndReplaceElem();
	let VueExtended = Vue;
	if (isStr(Compo)) {
		nPropsData.template = Compo;
	}
	// Component
	else {
		VueExtended = Vue.extend(Vue);
	}
	return new VueExtended(nPropsData).$mount(mounted === false ? null : el);
}

function cssTextToObject(txt) {
	const result = {};
	txt.split(';').forEach((term) => {
		const splits = term.split(':');
		if (splits && splits.length == 2) {
			const key = splits[0].trim(),
				value = splits[1].trim();
			result[key] = value;
		}
	});
	return result;
}

function genImgSrc() {
	return `img/lenna.png?_t=${Math.floor(Math.random() * 100000)}.${Date.now()}`;
}

function genImgList(len) {
	const arr = [];
	while (len--) {
		arr.push(genImgSrc());
	}
	return arr;
}
export {
	destroyVM,
	createAndReplaceElem,
	createVM,
	cssTextToObject,
	genImgSrc,
	genImgList,
};
