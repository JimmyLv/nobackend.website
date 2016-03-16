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
      {test: /\.css$/, loader: "style!css"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, loader: 'url?limit=100000&name=./fonts/[name].[ext]'},
      {test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=8192&name=./images/[hash].[ext]'},
      {test: /\.html$/, loader: 'ngtemplate!html?attrs[]=img:src img:ng-src'}
    ],
    noParse: []
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'react': 'build/react'
    }
  }
};