module.exports = {
	extends: 'airbnb',
	plugins: [
		'html'
	],
	rules: {
		'brace-style': ['error', 'stroustrup'],
		'eqeqeq': 0,
		'func-names': 0,
		'import/prefer-default-export': 0,
		'indent': ['error', 'tab', { SwitchCase: 1, }],
		'linebreak-style': ['error', 'unix'],
		'max-len': ['error', { code: 150 }],
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-mixed-operators': 0,
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': 0,
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'no-shadow': 0,
		'no-tabs': 0,
		'no-underscore-dangle': 0,
		'no-unused-expressions': ['error', { allowShortCircuit: true }],
		'no-var': 0,
		'one-var': 0,
	}
};
