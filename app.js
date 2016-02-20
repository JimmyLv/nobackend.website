angular
  .module('app', [
    'ngRoute',
    'base64',
    'ab-base64',
    'hc.marked'
  ])
  .config(config);

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
        return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts/%E7%BC%96%E7%A8%8B/2014-11-15-pythonic-zen.md?ref=gh-pages')
      },
      categories: function ($http) {
        return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts?ref=gh-pages')
      }
    }
  });
}