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
        appItems($http) {
          'ngInject';

          return $http.get('../../assets/data.json')
        }
      },
      controller($scope, appItems) {
        'ngInject';

        $scope.appItems = appItems;
      }
    });

  const originalWhen = $routeProvider.when;

  $routeProvider.when = (path, route) => {
    route.resolve || (route.resolve = {});
    angular.extend(route.resolve, {
      index(githubService) {
        'ngInject';

        return githubService.getIndex();
      }
    });

    return originalWhen.call($routeProvider, path, route);
  };

  $routeProvider
    .when('/note/:category?/:post?', {
      template: '<note post-content="$resolve.post.data" index="$resolve.index.data"></note>',
      resolve: {
        post($route, githubService) {
          'ngInject';

          const category = $route.current.params.category;
          const postId = $route.current.params.post;
          if (postId) {
            return githubService.getPost(category, postId);
          }
        }
      }
    })
    .when('/pages/:page', {
      template: '<page index="$resolve.index.data" zhihu="$resolve.zhihu.data"></page>',
      resolve: {
        zhihu($route, zhihuService) {
          'ngInject';

          const page = $route.current.params.page;
          if (page === 'zhihu') {
            return zhihuService.getTopAnswers();
          }
        }
      }
    })
    .when('/pages/:page/question/:question/answer/:answer', {
      template: '<page index="$resolve.index.data" zhihu="$resolve.zhihu.data" question="$resolve.question"></page>',
      resolve: {
        zhihu(zhihuService) {
          'ngInject';

          return zhihuService.getTopAnswers();
        },
        question($route, zhihuService) {
          'ngInject';

          const params = $route.current.params;
          return zhihuService.getAnswer(params.question, params.answer);
        }
      }
    })
    .when('/photos', {template: '<iframe id="preview" src="http://unperfectlove.lofter.com/" frameborder="0" width="100%" height="100%"></iframe>'})
    .when('/', {redirectTo: '/note'});

  $locationProvider.hashPrefix('!');
}
