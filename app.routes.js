export default function routing($routeProvider, $urlRouterProvider, $stateProvider, $locationProvider) {
  'ngInject';
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
    .state('zuimeia', {
      url: '/zuimeia',
      template: '<apps app-items="appItems"></apps>',
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

  var originalWhen = $routeProvider.when;

  $routeProvider.when = function (path, route) {
    route.resolve || (route.resolve = {});
    angular.extend(route.resolve, {
      config: function (githubService) {
        return githubService.getConfig();
      },
      index: function (githubService) {
        return githubService.getIndex();
      }
    });

    return originalWhen.call($routeProvider, path, route);
  };

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
        }
      }
    })
    .when('/pages/:page', {template: '<nest site-info="$resolve.config.data" index="$resolve.index.data"></nest>'})
    .when('/photos', {template: '<iframe id="preview" src="http://unperfectlove.lofter.com/" frameborder="0" width="100%" height="100%"></iframe>'})
    .when('/', {redirectTo: '/note'});

  $locationProvider.hashPrefix('!');
}
