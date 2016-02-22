angular.module('app')
  .component('note', {
    templateUrl: './app/components/note/note.html',
    bindings: {
      categories: '<',
      siteInfo: '<',
      index: '<'
    },
    controller: ['$http', '$routeParams', 'base64', function ($http, $routeParams, base64) {
      var vm = this;

      var db = low('db', {storage: low.localStorage}); // localStorage
      if (Object.keys(db.object).length === 0) {
        db.object = vm.index;
      }

      vm.$onInit = function () {
        vm.siteConfig = jsyaml.load(base64.decode(vm.siteInfo.content));
        vm.selectedCategory = $routeParams.category || '编程';

        vm.selectedTagsWithPosts = db('tags').filter(function (tag) {
          return vm.siteConfig.cates.indexOf(tag.name) > -1;
        });
        vm.selectedPosts = db('categories').find({name: vm.selectedCategory}).posts;
      };

      console.info('---------------------------');

      //vm.categories.forEach(function (category) {
      //    $http.get(category.url).then(function (res) {
      //      var postItems = res.data.splice(0, 1);
      //      category.postItems = postItems;
      //
      //      postItems.forEach(function (postItem) {
      //          $http.get(postItem.url).then(function (res) {
      //              var rawPost = res.data;
      //              var decodedContent = base64.decode(rawPost.content);
      //              rawPost.editUrl = rawPost.html_url.replace('blob', 'edit');
      //              rawPost.content = decodedContent.split('---')[2];
      //              rawPost.meta = jsyaml.load(decodedContent.split('---')[1]);
      //              postItem.postContent = rawPost;
      //            }
      //          )
      //        }
      //      );
      //    })
      //  }
      //);
    }]
  });
