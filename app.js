angular
  .module('app', [
    'ngRoute',
    'base64',
    'ab-base64',
    'hc.marked',
    'angular-cache'
  ])
  .config(config)
  .run(function ($http, CacheFactory) {
    $http.defaults.cache = CacheFactory('defaultCache', {
      maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes
      cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
      deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
    });
  });

function config($routeProvider) {
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
    }).when('/jekyll', {
    template: '<posts post="$resolve.post.data" categories="$resolve.categories.data"></posts>',
    resolve: {
      post: function ($http) {
        return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts/%E7%BC%96%E7%A8%8B/2014-11-15-pythonic-zen.md?ref=gh-pages', {
          cache: true
        })
      },
      categories: function ($http) {
        return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts?ref=gh-pages', {
          cache: true
        })
      }
    }
  });
}