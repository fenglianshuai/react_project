/**
 * @file config-overrides.js
 * @author Leo Fenglianshuai
 * 基于customize-cra和react-app-rewired的定制化配置文件
 */

// 从customize-cra中引入一些相关的方法
const {
    override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy
} = require('customize-cra');

const modifyVars = require('./lessVars')

module.exports = override(
    // 配置less
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
    // 配置装饰器模式
    addDecoratorsLegacy()
);