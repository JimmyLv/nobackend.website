import './post.less'

export default {
  transclude: true,
  templateUrl: require('./post.html'),
  bindings: {
    matter: '<frontMatter',
    content: '<postContent',
    showToc: '<'
  },
  controller($document, $location, $routeParams, $sce, configService) {
    "ngInject";

    const vm = this;

    console.info('setting tile:', vm.matter.title);
    vm.subtitle = configService.config.project.subtitle;
    $document[0].title = `${vm.matter.title} | ${vm.subtitle}`;

    vm.$onInit = () => {
      var github = configService.config.github;

      vm.filename = `_posts/${$routeParams.category || ''}/${$routeParams.post}.md`;
      vm.editUrl = `https://github.com/${github.user}/${github.repo}/edit/${github.branch}/${vm.filename}`;
      vm.zhihuUrl = `https://zhihu.com/question/${$routeParams.question}/answer/${$routeParams.answer}`;

      vm.slideUrl = $sce.trustAsResourceUrl(`${configService.api('slides')}/${$routeParams.post}.htm`);

      vm.socialShare = [
        {name: 'twitter', icon: 'fa-twitter'},
        {name: 'facebook', icon: 'fa-facebook'},
        {name: 'pocket', icon: 'fa-get-pocket'}
      ];
      vm.shareLink = $location.absUrl();
      vm.encodedShareLink = encodeURIComponent($location.absUrl());
      vm.hashTags = vm.matter.tags.join(', ');
      var formattedHashTags = vm.matter.tags.map(tag => `#${tag}#`).join(' ');
      vm.encodedShareContent = encodeURIComponent(`${vm.matter.title} ${formattedHashTags} | ${vm.subtitle}`);
    };
  }
}