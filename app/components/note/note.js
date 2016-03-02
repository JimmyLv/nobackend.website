angular.module('app')
  .component('note', {
    templateUrl: './app/components/note/note.html',
    bindings: {
      postContent: '<',
      siteInfo: '<',
      index: '<'
    },
    controller: ['$http', '$routeParams', 'base64', function ($http, $routeParams, base64) {
      var vm = this;

      console.info($routeParams);
      console.info('index data:', vm.index);
      console.info('site config:', vm.siteInfo);
      console.info('post content:', vm.postContent);
      console.info('------------fetch data finished---------------');

      vm.$onInit = function () {
        vm.config = jsyaml.load(base64.decode(vm.siteInfo.content));
        vm.selectedCategory = $routeParams.category || '编程';

        var db = low('db', {storage: low.localStorage}); // localStorage
        db.object = vm.index;

        vm.selectedTagsWithPosts = db('tags').filter(function (tag) {
          return vm.config.cates.indexOf(tag.name) > -1;
        });

        vm.isIndex = vm.postContent ? false : true;
        vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
        console.info('------------initialize vm finished---------------');
      };
    }]
  });
