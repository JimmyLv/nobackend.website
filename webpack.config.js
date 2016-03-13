var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './app.js'),
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate?add=true!babel-loader'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json']
  }
};