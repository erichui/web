let webpack = require('webpack');
let configBase = require('./webpack.config.base.js');
let configDev = Object.assign({}, configBase, {

})
// 基础配置的entry可能是对象形式，所以这里转化为数组形式，以便在入口文件中添加自动刷新和热替换功能
configDev.entry = Object.values(configDev.entry);

// 在入口文件中添加自动刷新和热替换功能
configDev.entry.unshift("webpack-dev-server/client?http://localhost:8080","webpack/hot/dev-server")

// 添加热替换插件
configDev.plugins = (configDev.plugins || []).concat(
	new webpack.HotModuleReplacementPlugin()
)
module.exports = configDev;