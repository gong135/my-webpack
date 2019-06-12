# 创建文件目录
  ### 创建最初的 index.html,
    因为默认执行这个 index.html 文件 (这个文件可以在配置里改)
  ### 创建一个 .gitignore 文件
    去掉不想上传的 git 文件
# 起步
  ### 初始化 npm init
  ### 创建目录结构
    >>>>bulid
    >>>>src
        >>router
        >>app.vue
        >>main.js
  ### 安装 webpack 和基本的处理
  npm i -D webpack webpack-dev-server css-loader less-loader
  dependencies 表示我们要在生产环境下使用该依赖，一般就放那些必须要用的比如：vue；
  devDependencies 则表示我们仅在开发环境使用该依赖。
  -D 安装的在 devDependencies 里面
  ### 安装 vue 相关插件
  npm i vue vue-router --save
  ### 先定义好 base.conf.js 文件
     entry  定义入口文件
     resolve 自定义全局@， 和引用文件午后缀
     module  定义 loader rule
     output  定义文件输出文件地方
     根据 rule 中定义的内容 安装对应 loader
     此时你的 dev： webpack-dev-server 是这个
     你可以启动，应该是报错找不到对应 src 目录。但是你访问 localhost：8080 是可以访问到 index.html的

     npm i -D vue-loader babel-loader vue-style-loader url-loader
     
     npm i -D @babel/core
  #### 定义 dev.conf.js 文件
    项目启动后处理方式：
    
    我们会发现 缺少了 
    babel-polyfill, 
    vue-template-compiler,
    vue-loader
    (这些都是有可能装漏掉的，根据实际情况来做就好)
    npm i -D babel-polyfill
    # 注意 vue-template-compiler 的版本号要与 vue 一致
    npm i -D vue-template-compiler

    我们还能看到 vue-loader 被 used 但是没有写在 plign 等问题 我们开始完善 dev
   ####  由上述一系列问题 我们划开了 
    重点 我们需要整合 webpack.base .....文件，就需要 merge 一下配置
    npm i -D webpack-merge
    如果你使用了 import 导入
    同时在项目根目录下新建 .babelrc，内容如下：
    {
      "plugins": ["@babel/plugin-syntax-dynamic-import"]
    }
    启动就会发现没什么错误了。但是 app.vue  文件好像没有生效
    
    但是我们会发现，不能解决。那是因为我们还没有把vue 挂载到 index.html
   ####  安装好 html 插件
    npm i -D html-webpack-plugin  //挂载 html 用
    npm i -D friendly-errors-webpack-plugin  // 友好型报错

    启动栏可以改成
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
    也可以加 progress inline 
 #### 完结撒花！！！！！
    自我评价 完成了 50%。 因为还有生产环境，压缩，以及一些优化都没做。
    能不能再完美一丢丢，虽然还有很多路要走，请时刻保持追求极致、认真和完美的心
  #### 补充配置 dev.conf.js
    你可以设置 devServer:{..... quiet 结合上面报错插件 可以让控制台好很多} ;
  #### 配置 eslint 
    eslint 肯定是需要的，风格类型依赖 eslint-config-airbnb-base，babel-eslint 是需要来解析 eslint。然后安装过程 eslint-config-airbnb-base 还需要一个 eslint-plugin-import 的依赖，也安装一下。
    npm i -D eslint babel-eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue
  ### 创建 eslintrc.js  文件 
    参考代码 文件

    并没有发现 eslint 生效，原因是还缺少一个关键依赖：eslint-loader，有了这个才能在 vue、js 文件中启动 eslint 的校验，
    npm i -D eslint-loader
    写好基本配置后，rules 启用
    如果还有 improt 相关的东西有可能是这个 
    npm i -D  eslint-import-resolver-webpack
# 扩展
  ## 如何定义全局变量
  在plugin 中 new webpack.DefinePlugin({
    PRODUCT: '"很厉害商品"',
    PRODUCTID: '123123',
  })
  这个完全可以解决 不同生产环境下的配置问题