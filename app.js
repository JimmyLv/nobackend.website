require('./style/hightlight.css');
require('./style/loading-bar.css');
require('./style/font-awesome.css');

require('./style/bootstrap.css');
require('./style/yue.css');
require('./style/base.less');

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

import config from './app.config'
import routing from './app.routes'
import running from './app.run'

import toc from './app/directives/toc'
import Components from './app/components/components.module'
import Services from './app/services/services.module'
import Commons from './app/commons/commons.module'

angular
  .module('app', [
    ngRoute,
    ngAnimate,
    ngSanitize,
    'ui.router',
    'ngNewRouter',
    'ab-base64',
    ngMarked,
    ngCache,
    ngDisqus,
    ngLoadingBar,
    angulartics,
    'angulartics.google.analytics',
    '720kb.socialshare',
    'ja.qr',
    Components.name,
    Services.name,
    Commons.name
  ])
  .config(config)
  .config(routing)
  .run(running)
  .directive('tableOfContents', toc);