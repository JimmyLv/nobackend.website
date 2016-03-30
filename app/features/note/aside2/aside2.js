import './aside2.less'

export default {
  templateUrl: require('./aside2.html'),
  bindings: {
    posts: '<',
    category: '<selectedCategory'
  },
  controller($routeParams) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      vm.selectedPost = `/${$routeParams.post}`;
      console.info('selectedPost:', vm.category + vm.selectedPost);
    }
  }
}