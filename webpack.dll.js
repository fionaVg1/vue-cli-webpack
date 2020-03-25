const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '[name].json'),
            name: '[name]_library',
        })
    ]
}