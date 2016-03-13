export default {
  transclude: true,
  templateUrl: './app/components/note/books/books.html',
  bindings: {
    books: '<'
  },
  controller: function () {
    var vm = this;

    vm.$onInit = function () {
      console.info('books:', vm.books);

    };
  }
}