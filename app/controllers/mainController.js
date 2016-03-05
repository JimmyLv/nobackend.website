angular.module('app')
  .controller('MainCtrl', ['$location', 'githubService', function ($location, githubService) {
    var vm = this;
    vm.message = 'hello';
    vm.clearSearch = function () {
      delete vm.searchText;
    };
    vm.randomPost = function () {
      var post = vm.posts[Math.floor(Math.random() * vm.posts.length)];
      console.info('random post:', post);
      $location.path('note/' + post.category + post.url)
    };

    githubService.getConfig().then(function (res) {
      vm.config = res.data;
    });

    githubService.getIndex().then(function (res) {
      vm.posts = res.data.paginator;
      console.info('initial data:', vm.posts);
    });
  }]);