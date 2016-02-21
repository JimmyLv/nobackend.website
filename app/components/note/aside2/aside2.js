angular.module('app')
  .component('aside2', {
    templateUrl: './app/components/note/aside2/aside2.html',
    bindings: {
      posts: '<',
      selectedCategory: '<'
    },
    controller: function () {
      var vm = this;
      console.info('all posts:', vm.posts);
      console.info('selectedCategory:', vm.selectedCategory);
      vm.$onInit = function () {

      }
    }
  });