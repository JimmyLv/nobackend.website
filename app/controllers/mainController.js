angular.module('app')
  .controller('MainCtrl', ['$location', 'githubService', function ($location, githubService) {
    var vm = this;

    githubService.getConfig().then(function (res) {
      vm.config = res.data;
      console.info('initial config:', vm.config);
    });

    githubService.getIndex().then(function (res) {
      vm.posts = res.data.paginator;
      console.info('initial posts:', vm.posts);
    });

    vm.clearSearch = _clearSearch;
    vm.randomPost = _randomPost;

    function _clearSearch() {
      delete vm.searchText;
    }

    function _randomPost() {
      var post = vm.posts[Math.floor(Math.random() * vm.posts.length)];
      console.info('random post:', post);
      $location.path('note/' + post.category + post.url)
    }
  }]);