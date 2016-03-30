import './aside1.less'

export default {
  templateUrl: require('./aside1.html'),
  bindings: {
    selectedCategory: '<',
    categories: '<'
  },
  controller(configService) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      vm.locals = configService.config.locals;
      vm.rssUrl = configService.config.posts.api.rss;
    }
  }
}