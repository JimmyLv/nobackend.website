var path = require('path');

var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'angular'),
  build: path.join(__dirname, '_ng')
};

var config = {
  stats: {children: false},
  entry: {
    app: PATHS.app,
    vendor: [
      // angular
      'angular',
      'angular-ui-router',
      'angular-route',
      'angular-new-router',
      'angular-sanitize',
      'angular-animate',

      // 3rd dependencies
      'ng-fx',
      'angular-cache',
      'angular-marked',
      'angular-utils-disqus',
      'angular-loading-bar',
      'angular-socialshare',
      'angular.audio',
      'angular-ui-awesome',
      'angulartics',
      'angulartics-google-analytics',
      'js-yaml/lib/js-yaml.js',
      'lowdb',
      'lowdb/browser',
      'to-markdown',
      'qrcode',
      'angular-qr'
    ]
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate?add=true!babel?presets[]=es2015'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!less')},
      {test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, loader: 'url?limit=100000&name=./fonts/[name].[ext]'},
      {test: /\.(png|jpe?g|gif)$/, loader: 'file?limit=8192&name=./images/[name].[ext]'},
      {test: /\.html$/, loader: 'ngtemplate!html?attrs[]=img:src img:ng-src'}
    ],
    noParse: []
  },
  postcss: function () {
    return [precss, autoprefixer];
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      favicon: './assets/images/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
      filename: './index.html', //生成的html存放路径，相对于path
      template: './angular/index.template', //html模板路径
      inject: 'body', //js插入的位置，true/'head'/'body'/false
      hash: true, //为静态资源生成hash值
      chunks: ['vendor', 'app'],//需要引入的chunk，不配置就会引入所有页面的资源
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'react': './pages/build/react'
    },
    modulesDirectories: ['node_modules', 'assets/libraries']
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  );
} else {
  config.devtool = 'source-map'
  config.devServer = {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    port: 8080
  }
  config.plugins.push(
    new NpmInstallPlugin({saveDev: true}),
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config