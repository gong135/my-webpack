const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('../config');
// merge 配置文件需要引入 
const baseConfig = require('./webpack.base.conf');

// 使用模板 需要安装 模板解析
//  注意 vue-template-compiler 的版本号要与 vue 一致
// npm i -D vue-template-compiler
//  解决动态 import 的错误
// npm i -D @babel/plugin-syntax-dynamic-import
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 同时在项目根目录下新建 .babelrc，内容如下：
// {
//   "plugins": ["@babel/plugin-syntax-dynamic-import"]
// }

// 要要想把vue 挂载到 index html 上就必须要 引入这个插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 报错 易读插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


// 配置不同的生产环境
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
console.log(HOST, PORT,config.dev.host,config.dev.port);
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', //代码追踪
    devServer: {
        hot: true, // 热更新
        port: PORT || config.dev.port,
        open: true,
        quiet: true, // 关闭 webpack-dev-server 的提示，用 friendly-error-plugin
        overlay: true,
        host: HOST || config.dev.host,
        clientLogLevel: 'warning', // 控制台报错 提示信息 waring 以上的
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html' //本地模板位置
        }),
        new FriendlyErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env'),
            PRODUCT: '"很厉害商品"',
            PRODUCTID: '123123',
        })
    ],
});