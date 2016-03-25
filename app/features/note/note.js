import './note.less'
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

    vm.$onInit = () => {
      vm.config = jsyaml.load(vm.siteInfo);
      vm.selectedCategory = $routeParams.category || '编程';

      const db = low('db', {storage: localStorage});
      db.object = vm.index;

      vm.selectedPostsByCategory = db('categories').find({name: vm.selectedCategory}).posts;

      vm.isIndex = vm.postContent ? false : true;
      vm.newestPosts = vm.index.paginator.slice(0, 10);
      vm.selectedTagsWithPosts = db('tags').filter(tag => vm.config.cates.indexOf(tag.name) > -1);

      vm.showNav = true;
      vm.showToc = false;

      vm.toggleNav = () => {
        vm.showNav = !vm.showNav;
        vm.showToc = !vm.showToc;
      };

      vm.toggleToc = () => {
        vm.showToc = !vm.showToc;
      };
    };
  }
}
