var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        path.join(__dirname, "./../src/app"),
    ],
    output: {
        path: path.join(__dirname, "./../build/js"),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: path.join(__dirname, './../src'),
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [require('babel-plugin-transform-function-bind')]
                }
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:10]")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/bundle.css"),
        new webpack.ProvidePlugin({
            _: 'underscore'
        }),
    ],
    externals: {
    }
};