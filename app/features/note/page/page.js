import './page.less'
import low from 'lowdb';
import localStorage from 'lowdb/browser';

export default {
  templateUrl: require('./page.html'),
  bindings: {
    siteInfo: '<',
    index: '<'
  },
  controller($routeParams, $sce, configService) {
    "ngInject";

    const vm = this;

    vm.$onInit = () => {

      const db = low('db', {storage: localStorage});
      db.object = vm.index;

      var meta = configService.config.meta;
      vm.selectedCategory = $routeParams.category || meta.active;
      vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
      vm.pageUrl = $sce.trustAsResourceUrl(`http://blog.jimmylv.info/pages/${$routeParams.page}.html`);

      console.info('------------initialize vm finished---------------');
    };
  }
}
