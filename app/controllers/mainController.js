angular.module('app')
  .controller('MainCtrl', function (githubService) {
    var vm = this;
    vm.message = 'hello';

    githubService.getConfig().then(function (res) {
      vm.config = res.data;
    });
  });