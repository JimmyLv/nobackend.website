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
    }
  }
}
