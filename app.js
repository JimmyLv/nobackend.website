angular
  .module('app', [
    'ngRoute',
    'ngAnimate',
    'ui.router',
    'ngNewRouter',
    'ngSanitize',
    'ab-base64',
    'hc.marked',
    'angular-cache',
    'angularUtils.directives.dirDisqus',
    'angular-loading-bar'
  ])
  .constant("CONFIG", {
    "url": "http://localhost",
    "port": "0803"
  })
  .config(['markedProvider', 'cfpLoadingBarProvider', function (markedProvider, cfpLoadingBarProvider) {
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code, true).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      },
      link: function (href, title, text) {
        return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
      }
    });

    cfpLoadingBarProvider.includeSpinner = false;
  }])
  .run(['$http', 'CacheFactory', function ($http, CacheFactory) {
    $http.defaults.cache = CacheFactory('defaultCache', {
      maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes
      cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
      deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
    });
  }])
  .run(['$router', function ($router) {
    $router.config([
      {
        path: '/dashboard',
        component: {
          users: 'users',
          dashboard: 'dashboard'
        },
        as: 'dashboard'
      }])
  }]);