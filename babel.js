const pkg = require('./package.json')

module.exports = [
    'import',
    {
        libraryName: pkg.name,
        libraryDirectory: 'dist',
        camel2DashComponentName: false,
        transformToDefaultImport: false,
    },
    'import ' + pkg.name,
]
