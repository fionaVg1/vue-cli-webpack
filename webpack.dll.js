const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry:{
        vendor:['jquery']
    },
    output:{
        path:path.resolve(__dirname ,'src/dll'),
        filename:'[name].js',
        library:'[name]_library'
    },
    plugins:[
        new webpack.DllPlugin({
            path:path.join(__dirname,'/src/dll','[name].json'),
            name:'[name]_library'
        })
    ]
}