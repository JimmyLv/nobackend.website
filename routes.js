angular
  .module('app')
  .config(['$routeProvider', function ($routeProvider) {
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
      })
      .when('/note/:category', {
        template: '<note categories="$resolve.categories.data" site-info="$resolve.site.data" index="$resolve.index.data"></note>',
        resolve: {
          categories: function ($http) {
            return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts?ref=gh-pages', {
              cache: true
            })
          },
          site: function ($http) {
            return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_config.yml?ref=gh-pages', {
              cache: true
            })
          },
          index: function ($http) {
            return $http.get('http://blog.jimmylv.info/api/index.json', {
              cache: true
            })
          }
        }
      });
  }]);