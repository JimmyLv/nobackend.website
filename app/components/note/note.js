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

      console.info('$routeParams:', $routeParams);
      console.info('site info:', vm.siteConfig);
      console.info('index data:', vm.index);
      console.info('categories:', vm.index.categories);
      console.info('paginator:', vm.index.paginator);
      console.info('tags:', vm.index.tags);

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
      vm.$onInit = function () {
        vm.siteConfig = jsyaml.load(base64.decode(vm.siteInfo.content));
        vm.selectedCategory = $routeParams.category ? $routeParams.category : '编程';

        var selectedCategory = vm.index.categories.find(function (category) {
          return category.name === vm.selectedCategory;
        });

        var selectedTagsWithPosts = vm.index.tags.filter(function (tag) {
          return vm.siteConfig.cates.indexOf(tag.name) > -1;
        });

        console.info('selectedTagsWithPosts', selectedTagsWithPosts);

        vm.selectedTagsWithPosts = selectedTagsWithPosts;
        vm.selectedPosts = selectedCategory.posts;
      };

      function tryDB() {
        var db = low(); // in-memory
        var db = low('db', {storage: low.localStorage}); // localStorage

        vm.index.paginator.forEach(function (item) {
          db('paginator').push(item);
        });
        vm.index.categories.forEach(function (item) {
          db('categories').push(item);
        });
        vm.index.tags.forEach(function (item) {
          db('tags').push(item);
        });
      }

      console.info('---------------------------');
    }]
  });
