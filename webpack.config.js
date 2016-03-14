var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    app: ['webpack/hot/dev-server', './app.js']
  },
  output: {
    path: './assets',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate?add=true!babel-loader'},
      {test: /\.html$/, loader: 'raw'}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.json']
  }
};