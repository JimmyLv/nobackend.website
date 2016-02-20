angular
  .module('app', [
    'ngRoute',
    'ngSanitize',
    'ab-base64',
    'hc.marked',
    'angular-cache'
  ])
  .config(['$routeProvider', 'markedProvider', function ($routeProvider, markedProvider) {
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function (code, lang) {
        if (lang) {
          return hljs.highlight(lang, code, true).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      },
      link: function (href, title, text) {
        return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
      }
    });

    $routeProvider
      .when('/hello', {
        template: '<hello name="$resolve.name"></hello>',
        resolve: {
          name: function () {
            return 'jimmy';
          }
        }
      })
      .when('/zuimeia', {
        template: '<app-list app-items="$resolve.appItems"></app-list>',
        resolve: {
          appItems: function ($http) {
            return $http.get('data.json')
          }
        }
      })
      .when('/jekyll', {
        template: '<posts categories="$resolve.categories.data"></posts>',
        resolve: {
          categories: function ($http) {
            return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts?ref=gh-pages', {
              cache: true
            })
          }
        }
      });
  }])
  .run(function ($http, CacheFactory) {
    $http.defaults.cache = CacheFactory('defaultCache', {
      maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes
      cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
      deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
    });
  });