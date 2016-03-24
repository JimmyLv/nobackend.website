import low from 'lowdb';
import localStorage from 'lowdb/browser';
import jsyaml from 'js-yaml/lib/js-yaml.js';

export default  {
  templateUrl: require('./note.html'),
  bindings: {
    postContent: '<',
    siteInfo: '<',
    index: '<'
  },
  controller($routeParams) {
    "ngInject";

    const vm = this;

    console.info('index:', vm.index);
    console.info('------------fetch data finished---------------');

    vm.$onInit = () => {
      vm.config = jsyaml.load(vm.siteInfo);
      vm.selectedCategory = $routeParams.category || '编程';

      const db = low('db', {storage: localStorage});
      db.object = vm.index;

      console.info('config:', vm.config);
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
