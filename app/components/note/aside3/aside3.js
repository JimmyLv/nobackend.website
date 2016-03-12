angular.module('app')
  .component('aside3', {
    templateUrl: './app/components/note/aside3/aside3.html',
    bindings: {
      newest: '<',
      tagsWithPosts: '<',
      selectedCategory: '<',
      paginator: '<newestPaginator'
    },
    controller: function () {
      var vm = this;
      vm.$onInit = function () {
        vm.newestPosts = vm.paginator.slice(0,10);
        vm.selectedTags = vm.tagsWithPosts.map(function (tag) {return tag.name});
        console.info('selectedTags:', vm.selectedTags);
      }
    }
  });