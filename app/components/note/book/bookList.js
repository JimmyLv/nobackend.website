angular.module('app')
  .component('bookList', {
    transclude: true,
    templateUrl: './app/components/note/book/bookList.html',
    bindings: {
      books: '<'
    },
    controller: function () {
      var vm = this;

      vm.$onInit = function () {
        console.info('books:', vm.books);

      };
    }
  });