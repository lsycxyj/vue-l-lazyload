exports.isProduction = function () {
	return process.env.NODE_ENV === 'production';
};

exports.isDevelopment = function () {
	return process.env.NODE_ENV === 'development';
};

exports.isTest = function () {
	return process.env.BABEL_ENV === 'test';
};

exports.useCoverage = function() {
	return !!process.env.USE_COVERAGE;
};
