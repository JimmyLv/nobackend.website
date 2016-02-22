angular.module('app')
  .component('aside3', {
    transclude: true,
    templateUrl: './app/components/note/aside3/aside3.html',
    bindings: {
      newest: '<',
      tagsWithPosts: '<'
    },
    controller: function () {
      var vm = this;
      console.info('selectedCategory:', vm.tagsWithPosts);
      vm.$onInit = function () {

      }
    }
  });