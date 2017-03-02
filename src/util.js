/* global getComputedStyle window */
const win = window,
	round = Math.round;

function type(o) {
	return typeof o;
}

function isArr(o) {
	return o instanceof Array;
}

function isStr(o) {
	return type(o) == 'string';
}

function trim(o) {
	return o == null ? '' : String.prototype.trim.call(o)
}

function each(elements, callback) {
	for (var i = 0, len = elements.length, element; i < len; i++) {
		element = elements[i];
		callback.call(element, element, i);
	}
}

function on(element, ev, callback, opts) {
	if (isStr(ev)) {
		element.addEventListener(ev, callback, opts);
	}
	else if (isArr(ev)) {
		each(ev, e => on(element, e, callback, opts));
	}
}

function off(element, ev, callback) {
	if (isStr(ev)) {
		element.removeEventListener(ev, callback);
	}
	else if (isArr(ev)) {
		each(ev, e => off(element, e, callback));
	}
}

function addClass(element, className) {
	element.classList.add(className);
}

function removeClass(element, className) {
	element.classList.remove(className);
}

function offset(element) {
	const obj = element.getBoundingClientRect();
	return {
		left: obj.left + win.pageXOffset,
		top: obj.top + win.pageYOffset,
		width: round(obj.width),
		height: round(obj.height),
	};
}

export const $ = {
	on,
	off,
	trim,
	type,
	isArr,
	isStr,
	addClass,
	removeClass,
	each,
	offset
};
