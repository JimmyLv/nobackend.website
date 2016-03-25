import './books.less'

export default {
  transclude: true,
  templateUrl: require('./books.html'),
  bindings: {
    books: '<'
  },
  controller() {
    const vm = this;

    vm.$onInit = () => {
      console.info('books:', vm.books);

    };
  }
}