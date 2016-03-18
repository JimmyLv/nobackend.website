const low = require('lowdb');
const localStorage = require('lowdb/browser');
const jsyaml = require('js-yaml/lib/js-yaml.js');

import aside1 from './aside1/aside1'
import aside2 from './aside2/aside2'
import aside3 from './aside3/aside3'
import books from './books/books'
import link from './link/link'
import nest from './nest/nest'
import post from './post/post'

export default  {
  templateUrl: require('./note.html'),
  bindings: {
    postContent: '<',
    siteInfo: '<',
    index: '<'
  },
  controller: function ($http, $routeParams, base64) {
    'ngInject';

    var vm = this;

    console.info('index data:', vm.index);
    console.info('site config:', vm.siteInfo);
    console.info('post content:', vm.postContent);
    console.info('------------fetch data finished---------------');

    vm.$onInit = function () {
      vm.config = jsyaml.load(base64.decode(vm.siteInfo.content));
      vm.selectedCategory = $routeParams.category || '编程';

      var db = low('db', {storage: localStorage});
      db.object = vm.index;

      vm.selectedTagsWithPosts = db('tags').filter(tag => vm.config.cates.indexOf(tag.name) > -1);

      vm.isIndex = vm.postContent ? false : true;
      vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
      console.info('------------initialize vm finished---------------');

      vm.showNav = true;
      vm.showToc = false;

      vm.toggleNav = () => {
        vm.showNav = !vm.showNav;
        vm.showToc = !vm.showToc;
      };

      vm.toggleTOC = () => {
        vm.showToc = !vm.showToc;
      };

      vm.disqusConfig = {
        disqus_shortname: 'nobackend-website',
        disqus_identifier: 'nobackend-website',
        disqus_url: 'http://nobackend.website'
      };
    };
  }
}
