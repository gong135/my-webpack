// 使用 airbnb 的风格。

// 首先需要安装相关的依赖，我们能想到的依赖有哪些就先装哪些，eslint 肯定是需要的，
// 风格类型依赖 eslint-config-airbnb-base，babel-eslint 是需要来解析 eslint。
// 然后安装过程 eslint-config-airbnb-base 还需要一个 eslint-plugin-import 的依赖，也安装一下。
module.exports = {
    root: true, //设置为根目录，不会再向上寻找 elsint 配置文件
    parserOptions: {
        parser: 'babel-eslint', // 使用 babel-eslint 来解析
        sourceType: 'module', // 代码是 module 模块则设置为 module
    },
    env: {
        browser: true, // 设置浏览器环境
    },
    extends: [
        'plugin:vue/essential', //vue 基本规则
        'airbnb-base' // airbnb eslint 规则
    ],
    // vue 文件校验
    plugins: ['vue'],
    // 个性化规则自定义
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // 强制一行的最大长度
        "max-len": [1, 500, 4],

        // 强制最大行数
        "max-lines": 0,

        // 强制 function 块最多允许的的语句数量
        "vue/no-parsing-error": [2, {
            "x-invalid-end-tag": false
        }],

        // 强制每一行中所允许的最大语句数量
        "max-statements": [1, 200],

        // 取消windows linux 上的换行和空格限制 
        'linebreak-style': 'off',
    },
    // 2. 安装 eslint-import-resolver-webpack 依赖，在 .eslintrc.js 文件中添加 setting
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js', // 指向 webpack 中 resolve 配置所在的文件
            },
        },
    },

};

// 启用这些 你就得去 config 配置下
// npm i -D eslint babel-eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue



// 如果没有发现 eslint 生效，
// 原因是还缺少一个关键依赖：eslint-loader，有了这个才能在 vue、js 文件中启动 eslint 的校验， npm i -D eslint-loader


// npm i -D friendly-errors-webpack-plugin
// 友好的报错插件