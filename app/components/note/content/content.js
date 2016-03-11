angular.module('app')
  .component('content', {
    transclude: true,
    templateUrl: './app/components/note/content/content.html',
    bindings: {
      pageContent: '<',
      showToc: '<'
    },
    controller: ['$location', 'base64', function ($location, base64) {
      var vm = this;
      console.info('selectedPageContent:', vm.pageContent);
      console.info('showTOC:', vm.showToc);

      vm.$onInit = function () {
        var result = _parseContent('---', vm.pageContent.content);

        vm.editUrl = vm.pageContent.html_url.replace('blob', 'edit');
        vm.content = result.content;
        vm.meta = result.meta;
        vm.html = marked('# TEST');
        vm.disqusConfig = {
          disqus_shortname: 'gotoshare',
          disqus_identifier: 'JimmyLv',
          disqus_url: 'http://blog.jimmylv.info/'
        };
        vm.socialShare = [
          {url: 'https://twitter.com/share', icon: 'twitter'},
          {url: 'https://www.evernote.com/clip.action', icon: 'wechat'},
          {url: 'http://service.weibo.com/share/share.php', icon: 'weibo'},
          {url: vm.editUrl, icon: 'github'}
        ];
        vm.shareLink = $location.absUrl();
      };

      function _parseContent(separator, rawContent) {
        var splitResult = base64.decode(rawContent).split(separator);
        return {
          content: splitResult.slice(2).join(separator),
          meta: jsyaml.load(splitResult[1])
        }
      }
    }]
  });