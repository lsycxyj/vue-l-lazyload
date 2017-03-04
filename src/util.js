/* global getComputedStyle window */
const win = window,
	cssNumber = {
		'column-count': 1,
		columns: 1,
		'font-weight': 1,
		'line-height': 1,
		opacity: 1,
		'z-index': 1,
		zoom: 1,
	},
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

function className(element, value) {
	var klass = element.className || '',
		svg = klass && klass.baseVal !== undefined;

	if (value === undefined) return svg ? klass.baseVal : klass;
	if (svg) {
		klass.baseVal = value;
	}
	else {
		element.className = value;
	}
}

function addClass(element, classname) {
	const classList = element.classList;
	if (classList) {
		classList.add(classname);
	}
	else {
		const cls = className(element).split(' '),
			map = {};
		each(cls, (klass) => {
			map[klass] = true;
		});

		if (!map[classname]) {
			className(element, cls.join(' ') + classname);
		}
	}
}

function classRE(name) {
	return new RegExp(`(^|\\s)${name}(\\s|$)`);
}

function removeClass(element, classname) {
	if (isStr(classname)) {
		const classList = element.classList;
		if (classList) {
			classList.remove(classname);
		}
		// IE, I'm looking at you again
		else {
			const cls = className(element);
			className(element, trim(cls.replace(classRE(classname), ' ')));
		}
	}
	else if (isArr(classname)) {
		each(classname, c => removeClass(element, c));
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

function camelize(str) {
	return str.replace(/-+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''));
}

function dasherize(str) {
	return str.replace(/::/g, '/')
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
		.replace(/([a-z\d])([A-Z])/g, '$1_$2')
		.replace(/_/g, '-')
		.toLowerCase();
}

function maybeAddPx(name, value) {
	return (type(value) == 'number' && !cssNumber[dasherize(name)]) ? `${value}px` : value;
}

function css(element, property, value) {
	/* eslint consistent-return: 0 */
	const elementSytle = element.style;
	if (arguments.length < 3) {
		return elementSytle[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);
	}
	else if (!value && value !== 0) {
		elementSytle.removeProperty(dasherize(property));
	}
	else {
		elementSytle[dasherize(property)] = maybeAddPx(property, value);
	}
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
	css,
	removeAttr,
	each,
	offset,
	search,
	throttle,
};
