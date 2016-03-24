import '../../assets/styles/loading-bar.css'

import ngRoute from 'angular-route'
import uirouter from 'angular-ui-router'
import 'angular-new-router'

import ngMarked from 'angular-marked'
import ngDisqus from 'angularUtils-disqus'
import ngLoadingBar from 'angular-loading-bar'

import config from './app.config'
import routing from './app.routes'
import running from './app.run'

export default angular.module('app.configs', [
    ngRoute,
    uirouter,
    'ngNewRouter',
    'ja.qr',
    ngMarked,
    ngDisqus,
    ngLoadingBar
  ])
  .config(config)
  .config(routing)
  .run(running);