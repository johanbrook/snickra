/* eslint no-var: 0 */
var webpackConf = require('./webpack.config.test');

module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-mocha-reporter')
    ],
    browsers: ['Chrome'],
    frameworks: ['tap'],
    reporters: ['mocha'],
    // this is the entry file for all our tests.
    files: ['../test/unit/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      '../test/unit/index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true,
    colors: true
  });
};
