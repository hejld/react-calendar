var webpack = require("webpack");

module.exports = exports = Object.create(require("./webpack.config.js"));

exports.output = Object.create(exports.output);
exports.output.path = 'build';
exports.output.libraryTarget = 'umd';