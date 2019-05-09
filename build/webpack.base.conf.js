const path = require('path');

// 路径处理函数 
// const resolve = dir => path.join('__dirname', '..', dir);

function resolve(dir) {
    return path.join('__dirname', '..', dir);
}

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], // 引入这些文件可以不写后缀名字
        alias: {
            '@': resolve('src') //配置@指向 src
        }
    },
    module: {
        // 我们在 vue 文件中使用 loader 来处理的有 vue js css 等文件 图片子图 
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                // include: [resolve('src')],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // include: [resolve('src')],
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            //less处理
            {
                test: /\.less/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader', // 设置为 url-loader 解析，会将图片解析为 base64 加载，末尾有解释
                options: {
                    limit: 102400, // 100kb 超过这么大之后会用 file-loader解析
                }
                // 补充安装 file-loader 依赖——npm i -D file-loader
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader', // 设置为 url-loader 解析
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    }
}