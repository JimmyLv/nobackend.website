import './post.less'
import jsyaml from 'js-yaml/lib/js-yaml.js';

export default {
  transclude: true,
  templateUrl: require('./post.html'),
  bindings: {
    postContent: '<',
    showToc: '<'
  },
  controller($document, $location, $routeParams, $sce) {
    "ngInject";

    const vm = this;

    const result = _parseContent('---', vm.postContent);

    console.info('setting tile:', result.matter.title);
    $document[0].title = `${result.matter.title} | 最美博客`;

    vm.$onInit = () => {

      vm.filename = `_posts/${$routeParams.category}/${$routeParams.post}.md`;
      vm.editUrl = `https://github.com/JimmyLv/jimmy.lv/edit/gh-pages/${vm.filename}`;
      vm.content = result.content;
      vm.matter = result.matter;

      vm.slideUrl = $sce.trustAsResourceUrl(`http://blog.jimmylv.info/pages/slides/${$routeParams.post}.htm`);

      vm.socialShare = [
        {name: 'twitter', icon: 'fa-twitter'},
        {name: 'facebook', icon: 'fa-facebook'},
        {name: 'pocket', icon: 'fa-get-pocket'}
      ];
      vm.shareLink = $location.absUrl();
      vm.encodedShareLink = encodeURIComponent($location.absUrl());
      vm.hashTags = vm.matter.tags.join(', ');
      var formattedHashTags = vm.matter.tags.map(tag => `#${tag}#`).join(' ');
      vm.encodedShareContent = encodeURIComponent(`${vm.matter.title} ${formattedHashTags} | 最美博客`);
    };

    function _parseContent(separator, rawContent) {
      const splitResult = rawContent.split(separator);
      return {
        content: splitResult.slice(2).join(separator),
        matter: jsyaml.load(splitResult[1])
      }
    }
  }
}