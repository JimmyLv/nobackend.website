angular.module('app')
  .component('postLink', {
    templateUrl: './app/components/note/link/link.html',
    bindings: {
      posts: '<',
      category: '<selectedCategory'
    },
    transclude: {
      'date': '?postDate'
    },
    controller: function () {
      var vm = this;
      vm.$onInit = function () {
        console.info(vm.category);
      }
    }
  });