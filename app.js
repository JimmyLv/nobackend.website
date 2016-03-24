require('./assets/styles/hightlight.css');
require('./assets/styles/loading-bar.css');
require('./assets/styles/font-awesome.css');

require('./assets/styles/bootstrap.css');
require('./assets/styles/yue.css');
require('./assets/styles/base.less');

import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngSanitize from 'angular-sanitize'

import ngCache from 'angular-cache'
import angulartics from 'angulartics'
import 'angular-socialshare'
import 'angulartics-google-analytics'

import Configs from './app/configs/configs.module'
import Services from './app/services/services.module'
import Features from './app/features/features.module'
import Decorators from './app/decorators/decorators.module'
import Commons from './app/commons/commons.module'

angular
  .module('app', [
    ngAnimate,
    ngSanitize,
    ngCache,
    angulartics,
    'angulartics.google.analytics',
    '720kb.socialshare',
    Configs.name,
    Services.name,
    Commons.name,
    Decorators.name,
    Features.name
  ]);