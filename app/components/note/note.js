const low = require('lowdb');
const localStorage = require('lowdb/browser');

export default {
  template: require('./note.html'),
  bindings: {
    postContent: '<',
    siteInfo: '<',
    index: '<'
  },
  controller: function ($http, $routeParams, base64) {
    'ngInject';

    var vm = this;

    console.info($routeParams);
    console.info('index data:', vm.index);
    console.info('site config:', vm.siteInfo);
    console.info('post content:', vm.postContent);
    console.info('------------fetch data finished---------------');

    vm.$onInit = function () {
      vm.config = jsyaml.load(base64.decode(vm.siteInfo.content));
      vm.selectedCategory = $routeParams.category || '编程';

      var db = low('db', {storage: localStorage}); // localStorage
      db.object = vm.index;

      vm.selectedTagsWithPosts = db('tags').filter(function (tag) {
        return vm.config.cates.indexOf(tag.name) > -1;
      });

      vm.isIndex = vm.postContent ? false : true;
      vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
      console.info('------------initialize vm finished---------------');

      vm.showNav = true;
      vm.showToc = false;

      vm.toggleNav = function () {
        vm.showNav = !vm.showNav;
        vm.showToc = !vm.showToc;
        console.info('vm.showNav', vm.showNav);
      };

      vm.toggleTOC = function () {
        vm.showToc = !vm.showToc;
        console.info('vm.showToc', vm.showToc);
      };

      vm.disqusConfig = {
        disqus_shortname: 'nobackend-website',
        disqus_identifier: 'nobackend-website',
        disqus_url: 'http://nobackend.website'
      };
    };
  }
}
