const path = require('path')
function resolve(dir = ''){
    return path.join(__dirname, './src', dir)
}
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        port: 6255
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.plugins.delete('preload')
    },
    configureWebpack: {

    }
}
