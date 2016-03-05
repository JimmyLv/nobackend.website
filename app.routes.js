angular
  .module('app')
  .config(['$routeProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($routeProvider, $urlRouterProvider, $stateProvider, $locationProvider) {
      //$urlRouterProvider.otherwise('/note'); // default route

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
        })
        .state('hello', {
          url: '/hello',
          templateUrl: './app/components/hello/hello.html',
          controller: 'HelloCtrl2',
          controllerAs: 'hello',
          resolve: {
            name: function () {
              return 'jimmy';
            }
          }
        })
        .state('zuimeia', {
          url: '/zuimeia',
          template: '<app-list app-items="appItems"></app-list>',
          resolve: {
            appItems: function ($http) {
              return $http.get('data.json')
            }
          },
          controller: function ($scope, appItems) {
            $scope.appItems = appItems;
          }
        })
        .state('jekyll', {
          url: '/jekyll',
          template: '<posts categories="categories.data"></posts>',
          resolve: {
            categories: function (githubService) {
              return githubService.read('_posts');
            }
          },
          controller: function ($scope, categories) {
            $scope.categories = categories;
          }
        });

      $routeProvider
        .when('/note/:category?/:post?', {
          template: '<note post-content="$resolve.post.data" site-info="$resolve.config.data" index="$resolve.index.data" show-nav="main.showNav" show-toc="main.showTOC"></note>',
          resolve: {
            post: function ($route, githubService) {
              var category = $route.current.params.category;
              var postId = $route.current.params.post;
              if (postId) {
                return githubService.getPost(category, postId);
              }
            },
            config: function (githubService) {
              return githubService.getConfig();
            },
            index: function (githubService) {
              return githubService.getIndex();
            }
          }
        })
        .when('/', {
          redirectTo: '/note'
        });

      $locationProvider.hashPrefix('!');
    }]);