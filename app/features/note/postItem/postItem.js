import './postItem.less'

export default {
  templateUrl: require('./postItem.html'),
  bindings: {
    posts: '<'
  },
  transclude: {
    'date': '?postDate'
  },
  controller() {
    const vm = this;

    vm.$onInit = () => {
    }
  }
}