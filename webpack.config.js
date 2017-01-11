var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths[1];

var config = module.exports = {
  context: __dirname,
  entry: './src/entry.js',
  plugins: [
    new ExtractTextPlugin('./build/styles.css')
  ]
};

config.output = {
  path: path.join(__dirname, 'build'),
  filename: 'bundle.js',
  publicPath: './build',
  devtoolModuleFilenameTemplate: '[resourcePath]',
  devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
};

config.resolve = {
  extensions: ['', '.js'],
  alias: {
    'babel-runtime/regenerator': require.resolve('babel-runtime/regenerator')
  },
  modulesDirectories: [ 'node_modules' ]
};

config.module = {
  loaders: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, './src'),
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
      loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
    },
    {
      test: /\.scss$/,
      include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
      loader: "style!css!sass?includePaths[]=" + bourbon + "&includePaths[]=" + neat
    }
  ]
}

