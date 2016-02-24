angular.module('app')
  .component('postLink', {
    templateUrl: './app/components/note/postLink/postLink.html',
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

      }
    }
  });