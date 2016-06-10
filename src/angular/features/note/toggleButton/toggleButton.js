import './toggleButton.less'

export default  {
  templateUrl: require('./toggleButton.html'),
  bindings: {
    toggleNav: '&',
    toggleToc: '&'
  },
  controller($routeParams) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      vm.isSlide = $routeParams.category === '演讲';
      vm.enableToc = $routeParams.post !== undefined;
      vm.enableLang = $routeParams.category === '翻译';
    }

    vm.showEnglish = true;

    vm.toggleEnglish = function () {
      vm.showEnglish = !vm.showEnglish;
      const englishTitle = angular.element(document.querySelectorAll('.english-title'));
      const englishContent = angular.element(document.querySelectorAll('blockquote'));
      if (vm.showEnglish) {
        englishTitle.removeClass('english-hidden');
        englishContent.removeClass('english-hidden');
      } else {
        englishTitle.addClass('english-hidden');
        englishContent.addClass('english-hidden');
      }
    }
  }
}
