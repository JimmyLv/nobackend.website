import angular from 'angular'
import ngSanitize from 'angular-sanitize'
import ngAnimate from 'angular-animate'
import ngFx from 'ng-fx'

import ngCache from 'angular-cache'
import ngMarked from 'angular-marked'
import ngDisqus from 'angularUtils-disqus'
import ngLoadingBar from 'angular-loading-bar'
import angulartics from 'angulartics'
import 'angular-socialshare'
import 'angulartics-google-analytics'

// from assets
import 'angular.audio'
import 'angular-ui-awesome'
import '../assets/styles/angular-ui-awesome.css'

import Configs from './configs/configs.module'
import Services from './services/services.module'
import Features from './features/features.module'
import Decorators from './decorators/decorators.module'
import Commons from './commons/commons.module'

angular
  .module('app', [
    ngAnimate,
    ngFx,
    ngSanitize,
    ngCache,
    ngMarked,
    ngDisqus,
    ngLoadingBar,
    angulartics,
    'angulartics.google.analytics',
    '720kb.socialshare',
    'ja.qr',
    'ngAudio',
    'ngUiAwesome',
    Configs.name,
    Services.name,
    Commons.name,
    Decorators.name,
    Features.name
  ]);