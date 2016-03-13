export default {
  templateUrl: './app/components/note/aside2/aside2.html',
  bindings: {
    posts: '<',
    selectedCategory: '<'
  },
  controller: function ($routeParams) {
    'ngInject';

    var vm = this;
    vm.$onInit = function () {
      vm.selectedPost = '/' + $routeParams.post;
      console.info('selectedPost:', vm.selectedCategory + vm.selectedPost);
    }
  }
}