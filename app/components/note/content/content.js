angular.module('app')
  .component('content', {
    transclude: true,
    templateUrl: './app/components/note/content/content.html',
    bindings: {
      pageContent: '<'
    },
    controller: function (base64) {
      var vm = this;
      console.info('selectedPageContent:', vm.pageContent);
      vm.$onInit = function () {
        var decodedContent = base64.decode(vm.pageContent.content);

        vm.editUrl = vm.pageContent.html_url.replace('blob', 'edit');
        vm.content = decodedContent.split('---')[2];
        vm.meta = jsyaml.load(decodedContent.split('---')[1]);
      }
    }
  });