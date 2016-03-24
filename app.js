require('./assets/styles/hightlight.css');
require('./assets/styles/loading-bar.css');
require('./assets/styles/font-awesome.css');

require('./assets/styles/bootstrap.css');
require('./assets/styles/yue.css');
require('./assets/styles/base.less');

import angular from 'angular'
import ngRoute from 'angular-route'
import ngAnimate from 'angular-animate'
import ngSanitize from 'angular-sanitize'

import 'angular-ui-router'
import 'angular-new-router'
import './node_modules/angular-utf8-base64/angular-utf8-base64'
import './node_modules/angulartics-google-analytics/lib/angulartics-google-analytics'
import './node_modules/angulartics-google-analytics/lib/angulartics-google-analytics'
import './node_modules/angular-socialshare/src/js/angular-socialshare'

import ngCache from './node_modules/angular-cache/dist/angular-cache'
import ngDisqus from 'angularUtils-disqus'
import ngLoadingBar from 'angular-loading-bar'
import angulartics from 'angulartics'
import marked from 'marked'
import ngMarked from 'angular-marked'

import config from './app/configs/app.config.js'
import routing from './app/configs/app.routes.js'
import running from './app/configs/app.run.js'

import Features from './app/features/features.module.js'
import Services from './app/services/services.module'
import Commons from './app/commons/commons.module'
import Decorators from './app/decorators/decorators.module'

angular
  .module('app', [
    ngRoute,
    ngAnimate,
    ngSanitize,
    'ui.router',
    'ngNewRouter',
    'ab-base64',
    'ja.qr',
    ngMarked,
    ngCache,
    ngDisqus,
    ngLoadingBar,
    angulartics,
    'angulartics.google.analytics',
    '720kb.socialshare',
    Services.name,
    Commons.name,
    Decorators.name,
    Features.name
  ])
  .config(config)
  .config(routing)
  .run(running);