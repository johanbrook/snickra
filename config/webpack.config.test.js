/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const config = Object.create(baseConfig);

config.devtool = 'inline-source-map';

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': {
      'NODE_ENV': JSON.stringify('test')
    }
  })
]);

config.node = {
  fs: 'empty'
};

delete config.entry;

module.exports = config;
