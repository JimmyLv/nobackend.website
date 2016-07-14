import angular from 'angular'
import ngSanitize from 'angular-sanitize'
import ngAnimate from 'angular-animate'
import ngFx from 'ng-fx'

import ngCache from 'angular-cache'
import ngMarked from 'angular-marked'
import ngDisqus from 'angular-utils-disqus'
import ngLoadingBar from 'angular-loading-bar'
import angulartics from 'angulartics'
import 'angular-socialshare'
import 'angulartics-google-analytics'

import jsyaml from 'js-yaml/lib/js-yaml.js';

// from assets
import 'expose?QRCode!qrcode'
import 'angular-qr'
import 'angular.audio'
import 'angular-ui-awesome'
import 'angular-ui-awesome.css'

import Configs from './configs/configs.module.js'
import Services from './services/services.module.js'
import Features from './features/features.module.js'
import Decorators from './decorators/decorators.module.js'
import Commons from './commons/commons.module.js'

(function () {
  const initInjector = angular.injector(['ng']);
  const $http = initInjector.get('$http');
  $http.get('/_config.yml').then(
    function (response) {
      angular.module('config', []).constant('CONFIG', jsyaml.load(response.data));
      angular.element(document).ready(function () {
        angular.module('app', [
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
        angular.bootstrap(document, ['app']);
      })
    }
  )
})();
