const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        vendor: ['jquery','axios']
    },
    output: {
        path: path.join(__dirname,'./vendor/js'),
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './vendor/js/[name].json'),
            name: '[name]_library',
        })
    ]
}