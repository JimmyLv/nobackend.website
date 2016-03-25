import './aside1.less'

export default {
  templateUrl: require('./aside1.html'),
  bindings: {
    selectedCategory: '<',
    categories: '<',
    config: '<siteConfig'
  },
  controller() {
    const vm = this;
    vm.$onInit = () => {

    }
  }
}