const util = require('util')
const webpack = require('webpack')
const webpackChain = require('webpack-chain')

// @ts-ignore
const log = (...args) => console.log(...args.map(arg => util.inspect(arg, { depth: null })))

module.exports = {
    env: {
        NODE_ENV: '"production"',
    },
}
