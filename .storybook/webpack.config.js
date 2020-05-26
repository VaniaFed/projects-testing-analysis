const merge = require('webpack-merge');

const baseConfig = require('../webpack/webpack-config');
const devConfig = require('../webpack/webpack-dev-config');
const aliasConfig = require('../webpack/webpack-alias-config.js');

module.exports = merge([baseConfig, devConfig, aliasConfig]);
