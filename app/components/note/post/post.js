const jsyaml = require('js-yaml/lib/js-yaml.js');

export default {
  transclude: true,
  templateUrl: require('./post.html'),
  bindings: {
    pageContent: '<',
    showToc: '<'
  },
  controller: function ($document, $location, base64) {
    'ngInject';

    var vm = this;
    console.info('selectedPageContent:', vm.pageContent);
    console.info('showTOC:', vm.showToc);

    var result = _parseContent('---', vm.pageContent.content);

    console.info('setting tile', result.meta.title);
    $document[0].title = result.meta.title + ' | 最美博客';

    vm.$onInit = function () {

      vm.editUrl = vm.pageContent.html_url.replace('blob', 'edit');
      vm.content = result.content;
      vm.meta = result.meta;

      vm.socialShare = [
        {name: 'twitter', icon: 'fa-twitter'},
        {name: 'facebook', icon: 'fa-facebook'},
        {name: 'pocket', icon: 'fa-get-pocket'}
      ];
      vm.shareLink = $location.absUrl();
      vm.encodedShareLink = encodeURIComponent($location.absUrl());
      vm.hashTags = vm.meta.tags.join(', ');
      vm.formatedHashTags = vm.meta.tags.map(tag => '#' + tag + '#').join(' ');
      vm.encodedShareContent = encodeURIComponent(vm.meta.title + ' ' + vm.formatedHashTags + ' | 最美博客');
    };

    function _parseContent(separator, rawContent) {
      var splitResult = base64.decode(rawContent).split(separator);
      return {
        content: splitResult.slice(2).join(separator),
        meta: jsyaml.load(splitResult[1])
      }
    }
  }
}