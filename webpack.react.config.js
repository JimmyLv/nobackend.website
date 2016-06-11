var path = require('path')

var webpack = require('webpack')
var precss = require('precss')
var autoprefixer = require('autoprefixer')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var HappyPack = require('happypack')

var isProd = process.env.NODE_ENV === 'production'

const PATHS = {
  app: path.join(__dirname, 'src/react/index.jsx'),
  build: path.join(__dirname, '_react'),
  publicPath: '//o7mw3gkkh.qnssl.com/_react/'
}

var config = {
  stats: { children: false },
  entry: {
    app: PATHS.app,
    vendor: [
      // react
      'react'
    ]
  },
  output: {
    path: PATHS.build,
    publicPath: isProd ? PATHS.publicPath : '',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'happypack/loader'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!less') },
      { test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, loader: 'url?limit=100000&name=./fonts/[name].[ext]' },
      { test: /\.(png|jpe?g|gif)$/, loader: 'file?limit=8192&name=./images/[name].[ext]' }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer]
  },

  plugins: [
    new HappyPack({
      cache: true,
      loaders: ['babel?presets[]=react&presets[]=es2015&cacheDirectory'],
      threads: 5
    }),
    new webpack.ProvidePlugin({ 'React': 'react' }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      favicon: './assets/images/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
      filename: './index.html', //生成的html存放路径，相对于path
      template: './src/react/index.template', //html模板路径
      inject: 'body', //js插入的位置，true/'head'/'body'/false
      hash: !!isProd, //为静态资源生成hash值
      chunks: ['vendor', 'app'],//需要引入的chunk，不配置就会引入所有页面的资源
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules', 'assets/libraries', 'assets/styles', 'assets/images']
  }
}

if (isProd) {
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
  )
} else {
  config.entry.app = [
    'webpack-dev-server/client?http://0.0.0.0:8082', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    PATHS.app
  ]
  config.devtool = 'source-map'
  config.devServer = {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    port: 8082
  }
  config.plugins.push(
    new NpmInstallPlugin({ saveDev: true }),
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config