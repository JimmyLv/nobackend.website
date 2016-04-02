import './page.less'
import low from 'lowdb';
import localStorage from 'lowdb/browser';

export default {
  templateUrl: require('./page.html'),
  bindings: {
    index: '<',
    zhihu: '<',
    question: '<?'
  },
  controller($routeParams, $sce) {
    "ngInject";

    console.info('$routeParams', $routeParams);

    const vm = this;

    vm.$onInit = () => {

      const db = low('db', {storage: localStorage});
      db.object = vm.index;

      if ($routeParams.page === 'zhihu') {
        console.info('got zhihu:', vm.question);
        vm.selectedPage = 'zhihu';
        vm.selectedPosts = vm.zhihu.topanswers;
      } else {
        vm.selectedPage = $routeParams.page;
        vm.selectedPosts = db('categories').find({name: '编程'}).posts;
        vm.pageUrl = $sce.trustAsResourceUrl(`http://blog.jimmylv.info/pages/${$routeParams.page}.html`);
      }
      console.info('------------initialize vm finished---------------');
    };
  }
}
