// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
console.log(testsContext)
testsContext.keys().forEach(testsContext);

// require all src files except index.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
//const srcContext = require.context('src', true, /^\.\/(?!index(\.js)?$)/);
//srcContext.keys().forEach(srcContext);
