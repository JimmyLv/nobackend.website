import './page.less'
import low from 'lowdb';
import localStorage from 'lowdb/browser';

export default {
  templateUrl: require('./page.html'),
  bindings: {
    index: '<',
    zhihu: '<'
  },
  controller($routeParams, $sce) {
    "ngInject";

    const vm = this;

    console.info('zhihu:', vm.zhihu);

    vm.$onInit = () => {

      const db = low('db', {storage: localStorage});
      db.object = vm.index;

      vm.selectedPage = $routeParams.page;

      if ($routeParams.page === 'zhihu') {
       console.info('zhihu: ', vm.zhihu.topanswers);
        vm.selectedPosts = vm.zhihu.topanswers;
      } else {
        vm.selectedPosts = db('categories').find({name: '编程'}).posts;
        vm.pageUrl = $sce.trustAsResourceUrl(`http://blog.jimmylv.info/pages/${$routeParams.page}.html`);
      }
      console.info('------------initialize vm finished---------------');
    };
  }
}
