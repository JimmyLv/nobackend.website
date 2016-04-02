import './page.less'
import low from 'lowdb';
import localStorage from 'lowdb/browser';
import find from 'lodash/find';

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
        vm.selectedPage = 'zhihu';
        vm.selectedPosts = vm.zhihu.topanswers;

        if (vm.question) {
          const selectedAnswer = find(vm.selectedPosts, {link: `/question/${$routeParams.question}/answer/${$routeParams.answer}`});
          vm.answer = `---
          layout: zhihu
          title: ${selectedAnswer.title}
          category: [知乎]
          tags: [知乎]
          date: ${selectedAnswer.date}
          ---
          ${vm.question}
          `
        }
      } else {
        vm.selectedPage = $routeParams.page;
        vm.selectedPosts = db('categories').find({name: '编程'}).posts;
        vm.pageUrl = $sce.trustAsResourceUrl(`http://blog.jimmylv.info/pages/${$routeParams.page}.html`);
      }

      // TODO: refactor together
      vm.showNav = true;
      vm.showToc = false;

      vm.toggleNav = () => {
        vm.showNav = !vm.showNav;
        vm.showToc = !vm.showToc;
      };

      vm.toggleToc = () => {
        vm.showToc = !vm.showToc;
      };

      console.info('------------initialize vm finished---------------');
    };
  }
}
