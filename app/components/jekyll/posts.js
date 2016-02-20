angular.module('app')
  .component('posts', {
    templateUrl: './app/components/jekyll/posts.html',
    bindings: {
      post: '<',
      categories: '<'
    },
    controller: ['$http', 'base64', 'marked', function ($http, base64, marked) {
      this.categories.forEach(function (category) {
          $http.get(category.url).then(function (res) {
            var postItems = res.data.splice(0, 1);
            category.postItems = postItems;

            postItems.forEach(function (postItem) {
                $http.get(postItem.url).then(function (res) {
                    var rawPost = res.data;
                    var decodedContent = base64.decode(rawPost.content);
                    rawPost.editUrl = rawPost.html_url.replace('blob', 'edit');
                    rawPost.content = decodedContent.split('---')[2];
                    rawPost.myHTML = marked(rawPost.content);
                    rawPost.meta = jsyaml.load(decodedContent.split('---')[1]);
                    postItem.postContent = rawPost;
                  }
                )
              }
            );
          })
        }
      );
    }]
  });
