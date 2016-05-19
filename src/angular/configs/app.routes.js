export default function routing($routeProvider, $urlRouterProvider, $stateProvider, $locationProvider) {
  'ngInject';

  $urlRouterProvider.when(/hello|users|dashboard/, function ($match, $state, $location) {
    'ngInject';

    console.info($match, $state);
    alert('Hello, but this page is not ready yet!');
    $location.path('note');
  });

  $stateProvider
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

          const {category, post} = $route.current.params;
          if (post) {
            return githubService.getPost(category, post);
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

          const {question, answer} = $route.current.params;
          return zhihuService.getAnswer(question, answer);
        }
      }
    })
    .when('/photos', {template: '<iframe id="preview" src="http://unperfectlove.lofter.com/" frameborder="0" width="100%" height="100%"></iframe>'})
    .when('/', {redirectTo: '/note'});

  $locationProvider.hashPrefix('!');
}
