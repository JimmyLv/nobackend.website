import './page.less'
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

    const vm = this;

    console.info('$routeParams', $routeParams);
    console.info('zhihu', vm.zhihu);

    vm.$onInit = () => {

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
        vm.selectedPosts = find(vm.index.categories, {name: '编程'}).posts;
        vm.pageUrl = $sce.trustAsResourceUrl(`http://blog.jimmylv.info/pages/${$routeParams.page}`);
      }

      // TODO: refactor toge
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
