angular.module('app')
  .component('hello', {
    templateUrl: './app/components/hello/hello.html',
    bindings: {
      name: '<'
    },
    controller: function () {
      this.girlFriend = 'plus plus';
    }
  });

