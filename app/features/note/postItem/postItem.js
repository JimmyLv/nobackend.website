export default {
  templateUrl: require('./postItem.html'),
  bindings: {
    posts: '<',
    category: '<selectedCategory'
  },
  transclude: {
    'date': '?postDate'
  },
  controller() {
    const vm = this;

    vm.$onInit = () => {
      console.info(vm.category);
    }
  }
}