/// <reference types="webpack" />
/// <reference types="webpack-chain" />

const path = require('path')
const util = require('util')
const webpack = require('webpack')
const webpackChain = require('webpack-chain')
// const DashboardPlugin = require('webpack-dashboard/plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const { TaroProvidePlugin } = require('@tarojsx/polyfill/dist/plugins')

// @ts-ignore
const log = (...args) => console.log(...args.map(arg => util.inspect(arg, { depth: null })))

const config = {
    projectName: '@tarojsx/ui',
    framework: 'react',
    date: '2020-03-20',
    designWidth: 750,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
    },
    sourceRoot: 'website/src',
    outputRoot: 'website/build/preview',
    copy: {
        patterns: [
            // { from: 'src/sitemap.json', to: 'dist/sitemap.json' },
        ],
    },
    alias: {},
    env: {},
    defineConstants: {},
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        postcss: {
            autoprefixer: {
                enable: true,
                config: {},
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
            },
        },
    },
}

module.exports = function(merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
