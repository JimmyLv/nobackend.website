export default  {
  templateUrl: require('./musicBox.html'),
  bindings: {
    musicId: '<'
  },
  controller($sce) {
    'ngInject';

    const vm = this;

    vm.$onInit = () => {
      console.info(vm.musicId);
      vm.musicUrl = $sce.trustAsResourceUrl(`http://music.163.com/outchain/player?type=2&id=${ vm.musicId }&auto=1&height=66`);
    }
  }
}