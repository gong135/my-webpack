'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = {
    NODE_ENV: '"production"',
    API_WWW: '"https://dev-www.api.com"',
};