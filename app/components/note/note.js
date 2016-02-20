angular.module('app')
  .component('note', {
    templateUrl: './app/components/note/note.html',
    bindings: {
      categories: '<',
      siteInfo: '<'
    },
    controller: ['$http', 'base64', function ($http, base64) {
      var vm = this;

      vm.categories.forEach(function (category) {
          $http.get(category.url).then(function (res) {
            var postItems = res.data.splice(0, 1);
            category.postItems = postItems;

            postItems.forEach(function (postItem) {
                $http.get(postItem.url).then(function (res) {
                    var rawPost = res.data;
                    var decodedContent = base64.decode(rawPost.content);
                    rawPost.editUrl = rawPost.html_url.replace('blob', 'edit');
                    rawPost.content = decodedContent.split('---')[2];
                    rawPost.meta = jsyaml.load(decodedContent.split('---')[1]);
                    postItem.postContent = rawPost;
                  }
                )
              }
            );
          })
        }
      );

      vm.siteConfig = jsyaml.load(base64.decode(vm.siteInfo.content));
      console.info('site info:', vm.siteConfig);
      console.info('categories:', vm.categories);
    }]
  });
