angular
  .module('app')
  .config(['$routeProvider', '$urlRouterProvider', '$stateProvider',
    function ($routeProvider, $urlRouterProvider, $stateProvider) {
      //$urlRouterProvider.otherwise('/home'); // default route

      $stateProvider
        .state('users2', {
          url: '/users2',
          views: {
            "viewA": {templateUrl: './components/users/users.html'},
            "viewB": {template: '<a ui-sref="users2.details({id:34})">cross link (ui-sref)</a>'}
          },
          controller: 'Users2Controller',
          controllerAs: 'users2'
        })
        .state('users2.details', {
          url: '/:id',
          template: '<button ng-click="details.sayHi(\'ui-router\')">changed to ui-router</button>',
          controller: 'DetailsController',
          controllerAs: 'details'
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
        })
        .when('/note/:category?', {
          template: '<note categories="$resolve.categories.data" site-info="$resolve.site.data" index="$resolve.index.data"></note>',
          resolve: {
            //categories: function ($http) {
            //  return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts?ref=gh-pages', {
            //    cache: true
            //  })
            //},
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
        })
        .when('/note/:category?/:post*\/', {
          template: '<note post-content="$resolve.post.data" site-info="$resolve.site.data" index="$resolve.index.data"></note>',
          resolve: {
            post: function ($http, $route) {
              var category = $route.current.params.category;
              var postId = $route.current.params.post;
              return $http.get('https://api.github.com/repos/JimmyLv/Jimmy.lv/contents/_posts/'+ category + '/' + postId + '.md' +'?ref=gh-pages', {
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