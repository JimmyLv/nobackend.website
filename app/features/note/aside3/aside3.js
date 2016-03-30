import './aside3.less'

export default {
  templateUrl: require('./aside3.html'),
  bindings: {
    selectedCategory: '<',
    tagsWithPosts: '<',
    newestPosts: '<',
    postContent: '<',
    showToc: '<',
    showNav: '<'
  },
  controller(configService) {
    "ngInject";

    const vm = this;

    vm.$onInit = () => {
      vm.isIndex = vm.postContent ? false : true;
      vm.disqusConfig = configService.config.disqus;
    }
  }
}