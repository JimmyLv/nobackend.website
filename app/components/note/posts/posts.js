angular.module('app')
  .component('postsWithDate', {
    templateUrl: './app/components/note/posts/posts.html',
    bindings: {
      posts: '<'
    },
    controller: function () {
      var vm = this;
      console.info('all posts:', vm.posts);
      vm.$onInit = function () {

      }
    }
  });