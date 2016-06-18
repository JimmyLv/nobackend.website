module.exports = function (config) {
  const configuration = {
    browsers: ['Chrome'], // run in Chrome
    singleRun: false, // continuous running by default
    frameworks: ['mocha', 'chai'], // use the mocha test framework
    files: [
      // just load this file
      'tests.bundle.js'
    ],
    plugins: ['karma-chrome-launcher', 'karma-chai', 'karma-mocha',
      'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      // preprocess with webpack and our sourcemap loader
      'tests.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /\/node_modules\//,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-1']
            }
          },
          { test: /\.(css|less)$/, loader: 'ignore-loader' }
        ],
        postLoaders: [{ // delays coverage til after tests are run, fixing transpiled source coverage error
          test: /\.jsx?$/,
          exclude: /(test|node_modules|bower_components)\//,
          loader: 'istanbul-instrumenter'
        }]
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', 'assets/libraries', 'assets/styles', 'assets/images']
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },
    reporters: ['mocha', 'coverage'], // report results in this format
    coverageReporter: {
      reporters: [
        // produces a html document after code is run
        { type: 'html', dir: 'coverage/' },
        // generates ./coverage/lcov.info
        { type: 'lcovonly', subdir: '.' },
        // generates ./coverage/coverage-final.json
        { type: 'json', subdir: '.' }
      ]
    },
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  }

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci']
  }

  config.set(configuration)
}