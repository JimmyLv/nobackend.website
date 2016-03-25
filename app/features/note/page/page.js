import './page.less'
import low from 'lowdb';
import localStorage from 'lowdb/browser';
import jsyaml from 'js-yaml/lib/js-yaml.js';

export default {
  templateUrl: require('./page.html'),
  bindings: {
    siteInfo: '<',
    index: '<'
  },
  controller($routeParams, $sce) {
    "ngInject";

    const vm = this;

    vm.$onInit = () => {
      const db = low('db', {storage: localStorage});
      db.object = vm.index;

      vm.config = jsyaml.load(vm.siteInfo);
      vm.selectedCategory = $routeParams.category || '编程';
      vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
      vm.pageUrl = $sce.trustAsResourceUrl(`http://blog.jimmylv.info/pages/${$routeParams.page}.html`);

      console.info('------------initialize vm finished---------------');
    };
  }
}
