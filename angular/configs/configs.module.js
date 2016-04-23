import '../../assets/styles/loading-bar.css'

import ngRoute from 'angular-route'
import uiRouter from 'angular-ui-router'
import 'angular-new-router'

import config from './app.config'
import routing from './app.routes'
import running from './app.run'

export default angular.module('app.configs', [
    ngRoute,
    uiRouter,
    'ngNewRouter'
  ])
  .config(config)
  .config(routing)
  .run(running);