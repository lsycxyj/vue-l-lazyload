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

export function isArr(o) {
	return o instanceof Array;
}

export function isStr(o) {
	return type(o) == 'string';
}

export function isFn(v) {
	return type(v) == 'function';
}

export function trim(o) {
	return o == null ? '' : String.prototype.trim.call(o);
}

export function each(elements, callback) {
	var i,
		len,
		element;
	for (i = 0, len = elements.length; i < len; i++) {
		element = elements[i];
		callback.call(element, element, i);
	}
}

export function on(element, ev, callback, opts) {
	if (isStr(ev)) {
		element.addEventListener(ev, callback, opts);
	}
	else if (isArr(ev)) {
		each(ev, e => on(element, e, callback, opts));
	}
}

export function off(element, ev, callback) {
	if (isStr(ev)) {
		element.removeEventListener(ev, callback);
	}
	else if (isArr(ev)) {
		each(ev, e => off(element, e, callback));
	}
}

export function className(element, value) {
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

export function addClass(element, classname) {
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

export function classRE(name) {
	return new RegExp(`(^|\\s)${name}(\\s|$)`);
}

export function removeClass(element, classname) {
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

export function attr(el, name, value) {
	el.setAttribute(name, value);
}

export function removeAttr(el, value) {
	el.removeAttribute(value);
}

export function offset(element) {
	const obj = element.getBoundingClientRect();
	return {
		left: obj.left + win.pageXOffset,
		top: obj.top + win.pageYOffset,
		width: round(obj.width),
		height: round(obj.height),
	};
}

export function noop() {}

export function camelize(str) {
	return str.replace(/-+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''));
}

export function dasherize(str) {
	return str.replace(/::/g, '/')
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
		.replace(/([a-z\d])([A-Z])/g, '$1_$2')
		.replace(/_/g, '-')
		.toLowerCase();
}

export function maybeAddPx(name, value) {
	return (type(value) == 'number' && !cssNumber[dasherize(name)]) ? `${value}px` : value;
}

export function css(element, property, value) {
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

// Not for map with empty values
export function FMap() {
	const me = this;
	me._m = Object.create(null);
	me._l = 0;
}

FMap.prototype.get = function (k) {
	const me = this;
	return me._m[k];
};

FMap.prototype.set = function (k, v) {
	const me = this;
	if (!me.has(k)) {
		me._m[k] = v;
		me._l++;
	}
};

FMap.prototype.rm = function (k) {
	const me = this;
	if (me.has(k)) {
		delete me._m[k];
		me._l--;
	}
};

FMap.prototype.has = function (k) {
	return !!this._m[k];
};

FMap.prototype.keys = function () {
	return Object.keys(this._m);
};

// FMap.prototype.values = function () {
// 	const me = this;
// 	const { _m } = me;
// 	const ret = [];
// 	/* eslint-disable guard-for-in, no-restricted-syntax */
// 	for (const k in _m) {
// 		/* eslint-disable guard-for-in, no-restricted-syntax */
// 		ret.push(_m[k]);
// 	}
// 	return ret;
// };

FMap.prototype.size = function () {
	return this._l;
};
