angular.module('app')
  .component('aside2', {
    templateUrl: './app/components/note/aside2/aside2.html',
    bindings: {
      posts: '<',
      selectedCategory: '<'
    },
    controller: function () {
      var vm = this;
      vm.$onInit = function () {
        console.info('selectedCategories:', vm.selectedCategory)
      }
    }
  });