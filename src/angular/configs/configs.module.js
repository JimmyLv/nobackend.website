import 'loading-bar.css'

import ngRoute from 'angular-route'
import uiRouter from 'angular-ui-router'
import 'angular-new-router'

import config from './app.config.js'
import routing from './app.routes.js'
import running from './app.run.js'

export default angular.module('app.configs', [
    ngRoute,
    uiRouter,
    'ngNewRouter'
  ])
  .config(config)
  .config(routing)
  .run(running);