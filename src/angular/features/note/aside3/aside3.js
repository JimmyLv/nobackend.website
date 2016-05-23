import './aside3.less'
import jsyaml from 'js-yaml/lib/js-yaml.js';

export default {
  templateUrl: require('./aside3.html'),
  bindings: {
    tagsWithPosts: '<',
    newestPosts: '<',
    postContent: '<',
    showToc: '<',
    showNav: '<'
  },
  controller($location, $routeParams, configService) {
    "ngInject";

    const vm = this;

    vm.$onInit = () => {
      vm.isIndex = vm.postContent ? false : true;

      const { disqus_shortname, disqus_identifier } = configService.config.disqus;
      vm.disqusConfig = {
        disqus_shortname,
        disqus_identifier: `${disqus_identifier}-${$routeParams.post || 'index'}`,
        disqus_url: $location.absUrl()
      }

      if (!vm.isIndex) {
        vm.article = _parseContent('---', vm.postContent);
      }
    };

    function _parseContent(separator, rawContent) {
      const splitResult = rawContent.split(separator);
      return {
        matter: jsyaml.load(splitResult[1]),
        content: splitResult.slice(2).join(separator)
      }
    }
  }
}