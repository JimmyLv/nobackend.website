angular.module('app')
  .component('nest', {
    templateUrl: './app/components/note/nest/nest.html',
    bindings: {
      siteInfo: '<',
      index: '<'
    },
    controller: ['$http', '$routeParams', '$sce', 'base64', function ($http, $routeParams, $sce, base64) {
      var vm = this;

      vm.$onInit = function () {
        var db = low('db', {storage: low.localStorage}); // localStorage
        db.object = vm.index;

        vm.config = jsyaml.load(base64.decode(vm.siteInfo.content));
        vm.selectedCategory = $routeParams.category || '编程';
        vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
        vm.pageUrl = $sce.trustAsResourceUrl('http://blog.jimmylv.info/pages/' + $routeParams.page + '.html');

        console.info('------------initialize vm finished---------------');
      };
    }]
  });
