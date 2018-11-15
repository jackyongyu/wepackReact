const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('webpack-api-mocker');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 虚拟的html文件名 index.html
    filename: 'index.html',
    // 虚拟html的模板为 src下的index.html
    template: path.resolve(__dirname, './src/index.html'),
  
})

module.exports = {
    // 开发模式
    mode: 'development',
    // 配置入口文件
    entry: './src/index.js',
    // 出口文件目录为根目录下dist, 输出的文件名为main
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        alias: {
            echarts$: "echarts/src/echarts.js",
            echarts: "echarts/src",
            zrender$: "zrender/src/zrender.js",
            zrender: "zrender/src"
        }
    },
    // 配置开发服务器, 并配置自动刷新
    devServer: {
        // 根目录下dist为基本目录
        contentBase: path.join(__dirname, 'dist'),
        // 自动压缩代码
        compress: true,
        // 服务端口为1208
        port: 8026,
        // 自动打开浏览器
        open: true,
        //路由跳转成功
        historyApiFallback: true,
        before(app){
            apiMocker(app, path.resolve('./mock/user.js'), {
                proxy: {
                    '/repos/*': 'https://api.github.com/',
                },
                changeHost: true,
            })
        },
    },
    // 装载虚拟目录插件
    plugins: [htmlWebpackPlugin],
    // 配置loader
    module: {
        // 根据文件后缀匹配规则
        rules: [
            // 配置js/jsx语法解析
            { 
                test: /\.js|jsx$/, 
                use: 'babel-loader', 
                exclude: /node_modules/,
             },
            { 
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                 loader: 'url-loader'
            },
            {
                test: /\.less|css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            
        ]

    }


}
