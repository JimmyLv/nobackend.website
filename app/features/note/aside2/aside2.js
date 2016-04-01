import './aside2.less'

export default {
  templateUrl: require('./aside2.html'),
  bindings: {
    posts: '<'
  },
  controller($routeParams) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      console.info('params: ', $routeParams);
      vm.selectedPost = `/${$routeParams.post}`;
      vm.itemUrl = `/note/${$routeParams.category}`;
      console.info('selected item:', vm.selectedCategory + vm.selectedPost);
    }
  }
}