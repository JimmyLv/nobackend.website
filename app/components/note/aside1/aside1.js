export default {
  templateUrl: './app/components/note/aside1/aside1.html',
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