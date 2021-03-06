var path = require('path');
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './scripts/main.js',
        vendor: [
            'lodash',
            'moment',
            'normalizr',
            'react',
            'redux',
            'soundcloud'
        ]
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: './server/public/static/js/[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [nodeModulesDir] },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass') }
        ]
    },
    plugins: [
        ignore,
        new ExtractTextPlugin('./server/public/static/css/main.css')//,
        //new webpack.optimize.CommonsChunkPlugin('vendor', './server/public/static/js/vendor.js')
    ]
};
