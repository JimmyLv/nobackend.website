angular.module('app')
  .component('posts', {
    templateUrl: './app/components/jekyllPosts/posts.html',
    bindings: {
      post: '<',
      categories: '<'
    },
    controller: ['$http', 'base64', function ($http, base64) {
      //var github = new Github({
      //  token: "4b417dc371cf5803a9da4efba13bab5eacacc533",
      //  auth: "oauth"
      //});
      //
      //var repo = github.getRepo('JimmyLv', 'Jimmy.lv');
      //console.info(repo.read('gh-pages', '_posts/%E7%BC%96%E7%A8%8B/2014-11-15-pythonic-zen.md', function(err, data) {}));
      //


      var categories = this.categories;
      var postsWithCategories = [];

      console.info('post:', this.post);
      console.info('categories:', this.categories);

      categories.forEach(function (category) {
          $http.get(category.url).then(function (res) {
            console.info(category.name);
            var postItems = res.data.splice(0, 1);
            category.postItems = postItems;

            postItems.forEach(function (postItem) {
                $http.get(postItem.url).then(function (res) {
                    console.info('postItem:', res.data);
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

      console.info(categories);


      this.posts = [this.post];

    }]
  });
