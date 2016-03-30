import './aside3.less'

export default {
  templateUrl: require('./aside3.html'),
  bindings: {
    config: '<',
    posts: '<',
    selectedCategory: '<',
    tagsWithPosts: '<',
    newestPosts: '<',
    postContent: '<',
    showToc: '<',
    showNav: '<'
  },
  controller($routeParams, configService) {
    "ngInject";

    const vm = this;

    vm.$onInit = () => {
      vm.isIndex = vm.postContent ? false : true;
      vm.selectedCategory = $routeParams.category || '编程';

      vm.disqusConfig = configService.config.disqus;
    }
  }
}