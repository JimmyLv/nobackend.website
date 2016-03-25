import './home.less'

export default {
  templateUrl: require('./home.html'),
  bindings: {
    newest: '<',
    newestPosts: '<',
    tagsWithPosts: '<'
  },
  controller() {
    const vm = this;
    vm.$onInit = () => {
      vm.selectedTags = vm.tagsWithPosts.map(tag => tag.name);
      console.info('selectedTags:', vm.selectedTags);
    }
  }
}