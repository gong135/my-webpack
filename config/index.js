'use strict'
const path = require('path');

// 定义不同配置环境
module.exports = {
    dev: {
        host: '0.0.0.0',
        port: '9002',
        autoOpenBrowser: false,
        useEslint: true,
        devtool: 'cheap-module-eval-source-map',
    },
    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
    }
}