'use strict';
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
console.log(process.env.NODE_ENV);
const env = process.env.NODE_ENV === 'testing' ?
    require('../config/test.env') : process.env.NODE_ENV === 'development' ?
    require('../config/dev.env') :
    require('../config/prod.env');

const webpackConfig = merge(baseWebpackConfig, {

    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    // output: {
    //     path: config.build.assetsRoot,
    //     filename: utils.assetsPath('js/[name].[chunkhash].js'),
    //     chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    // },
    // devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env,
        }),
    ],
});

module.exports = webpackConfig;