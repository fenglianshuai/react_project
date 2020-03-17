/**
 * @file config-overrides.js
 * @author Leo Fenglianshuai
 * 基于customize-cra和react-app-rewired的定制化配置文件
 */

// 从customize-cra中引入一些相关的方法
const {
    override,
    addLessLoader,
    fixBabelImports
} = require('customize-cra');

const modifyVars = require('./lessVars')

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        modifyVars
    }),
    // 配置antd全局样式
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

);