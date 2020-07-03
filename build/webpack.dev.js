const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development',     
    devtool:"cheap-module-eval-source-map",
    entry: {                  
        main: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js']
    },  
    devServer: {
        contentBase: path.join(__dirname, '../dist')
    },
    optimization: {   // 开发环境时使用
        usedExports: true
    },
    plugins: [                     
        new webpack.NamedModulesPlugin(),  
        new webpack.HotModuleReplacementPlugin(), 
    ],
    output: {}
}
module.exports = merge.smart(commonConfig, devConfig)
