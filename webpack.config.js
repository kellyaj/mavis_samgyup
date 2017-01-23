var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths[1];

var BUILD_DIR = path.resolve(__dirname + '/build')
var SRC_DIR = path.resolve(__dirname + '/src')

module.exports = {
  entry: SRC_DIR + '/entry.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, './src/styles'),
        loader: "style!css!sass?includePaths[]=" + bourbon + "&includePaths[]=" + neat
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../../../build/styles.css')
  ]
}
