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
	return o == null ? '' : String.prototype.trim.call(o);
}

function each(elements, callback) {
	var i,
		len,
		element;
	for (i = 0, len = elements.length; i < len; i++) {
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
	if (isStr(className)) {
		element.classList.remove(className);
	}
	else if (isArr(className)) {
		each(className, c => removeClass(element, c));
	}
}

function attr(el, name, value) {
	el.setAttribute(name, value);
}

function removeAttr(el, value) {
	el.removeAttribute(value);
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

// TODO to be optimized
function search(arr, item) {
	return arr.indexOf(item);
}

function throttle(fn, threshold = 250, scope) {
	var last,
		deferTimer;

	return function (...args) {
		var context = scope || this;

		var now = +new Date();
		if (last && now < last + threshold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(() => {
				last = now;
				fn.apply(context, args);
			}, threshold);
		}
		else {
			last = now;
			fn.apply(context, args);
		}
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
	attr,
	removeAttr,
	each,
	offset,
	search,
	throttle,
};
