import angular from 'angular';
const jsyaml = require('js-yaml/lib/js-yaml.js');

export default angular.module('app.components.posts', [])
  .component('posts', {
    templateUrl: require('./posts.html'),
    bindings: {
      categories: '<'
    },
    controller: function ($http, base64, marked) {
      'ngInject';

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
    }
  })