angular.module('app')
  .component('post', {
    transclude: true,
    templateUrl: './app/components/note/post/post.html',
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
          {name: 'twitter', icon: 'fa-twitter'},
          {name: 'facebook', icon: 'fa-facebook'},
          {name: 'pocket', icon: 'fa-get-pocket'}
        ];
        vm.shareLink = $location.absUrl();
        vm.encodedShareLink = encodeURIComponent($location.absUrl());
        vm.hashTags = vm.meta.tags.join(', ');
        vm.formatedHashTags = vm.meta.tags.map(function (tag) {return '#' + tag + '#'}).join(' ');
        vm.encodedShareContent = encodeURIComponent(vm.formatedHashTags + ' ' + vm.meta.title + ' | 最美博客');
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