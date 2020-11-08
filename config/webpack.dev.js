const paths = require('./paths');

const webpack = require('webpack');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    // set mode to dev
    mode: 'development',

    // control source maps
    devtool: 'inline-source-map',


    // spin up a server for quick dev
    devServer: {
        historyApiFallback: true,
        contentBase: paths.build,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    plugins: [
        // update only what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ]
})