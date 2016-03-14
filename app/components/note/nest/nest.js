const low = require('lowdb');
const localStorage = require('lowdb/browser');

export default {
  template: require('./nest.html'),
  bindings: {
    siteInfo: '<',
    index: '<'
  },
  controller: function ($http, $routeParams, $sce, base64) {
    'ngInject';

    var vm = this;

    vm.$onInit = function () {
      var db = low('db', {storage: localStorage}); // localStorage
      db.object = vm.index;

      vm.config = jsyaml.load(base64.decode(vm.siteInfo.content));
      vm.selectedCategory = $routeParams.category || '编程';
      vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
      vm.pageUrl = $sce.trustAsResourceUrl('http://blog.jimmylv.info/pages/' + $routeParams.page + '.html');

      console.info('------------initialize vm finished---------------');
    };
  }
}
