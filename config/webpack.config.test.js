/* eslint strict: 0 */
'use strict';

const baseConfig = require('./webpack.config.base');
const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'inline-source-map';

config.node = {
  fs: 'empty'
};

delete config.entry;

module.exports = config;
