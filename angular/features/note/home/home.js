import './home.less'

export default {
  templateUrl: require('./home.html'),
  bindings: {
    newestPosts: '<',
    tagsWithPosts: '<'
  },
  controller(configService) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      vm.newest = configService.config.locals.newest;
      vm.selectedTags = vm.tagsWithPosts.map(tag => tag.name);
      console.info('selectedTags:', vm.selectedTags);
    }
  }
}