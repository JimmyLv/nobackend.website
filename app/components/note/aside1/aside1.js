export default {
  template: require('./aside1.html'),
  bindings: {
    selectedCategory: '<',
    categories: '<',
    config: '<siteConfig'
  },
  controller: function () {
    var vm = this;
    vm.$onInit = function () {

    }
  }
}