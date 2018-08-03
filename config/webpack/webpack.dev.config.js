var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');


var parentDir = path.join(__dirname, './');

module.exports = {
    entry: [
        path.join(parentDir, '../../src/index.js')
    ],
    module: {
        rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
          loader: 'babel-loader'
          }
        },
        //extract css files
        {
          test: /\.(css|sass|scss)$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader','sass-loader']
            })
        }]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
      new HTMLWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ]
}
