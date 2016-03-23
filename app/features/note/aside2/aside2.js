export default {
  templateUrl: require('./aside2.html'),
  bindings: {
    posts: '<',
    selectedCategory: '<'
  },
  controller($routeParams) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      vm.selectedPost = `/${$routeParams.post}`;
      console.info('selectedPost:', vm.selectedCategory + vm.selectedPost);
    }
  }
}