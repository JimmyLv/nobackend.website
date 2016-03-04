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
        var result = _parseContent('---', vm.pageContent.content);

        vm.editUrl = vm.pageContent.html_url.replace('blob', 'edit');
        vm.content = result.content;
        vm.meta = jsyaml.load(result.meta);
        vm.disqusConfig = {
          disqus_shortname: 'gotoshare',
          disqus_identifier: 'JimmyLv',
          disqus_url: 'http://blog.jimmylv.info/'
        }
      };

      function _parseContent(separator, rawContent) {
        var splitResult = base64.decode(rawContent).split(separator);
        return {
          content: splitResult.slice(2).join(separator),
          meta: splitResult[1]
        }
      }
    }
  });