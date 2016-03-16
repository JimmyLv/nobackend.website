export default {
  templateUrl: require('./link.html'),
  bindings: {
    posts: '<',
    category: '<selectedCategory'
  },
  transclude: {
    'date': '?postDate'
  },
  controller: function () {
    var vm = this;
    vm.$onInit = function () {
      console.info(vm.category);
    }
  }
}