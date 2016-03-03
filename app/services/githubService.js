angular
  .module('app')
  .service('githubService', function ($http) {
    /*
    var github = new Github({
      apiUrl: 'https://api.github.com'
    });
    var repo = github.getRepo('JimmyLv', 'jimmy.lv');
    repo.contents('gh-pages', '_posts/', function(err, contents) {
      console.info(contents);
    });
    repo.read('gh-pages', '_config.yml', function(err, data) {
      console.info(data);
    });
    */

    const API_URL = 'https://api.github.com';
    var github = {
      useName: 'JimmyLv',
      repoName: 'jimmy.lv',
      branch: 'gh-pages'
    };

    function buildUrl(path) {
      var baseUrl = API_URL + '/repos/' + github.useName + '/' + github.repoName + '/contents/';
      return baseUrl + path + '?ref=' + github.branch;
    }

    return {
      read: function (path) {
        return $http.get(buildUrl(path), {
          cache: true
        })
      },
      getPost: function (category, postId) {
        var filePath = '_posts/' + category + '/' + postId + '.md';
        return $http.get(buildUrl(filePath), {
          cache: true
        })
      },
      getConfig: function () {
        return $http.get(buildUrl('_config.yml'), {
          cache: true
        })
      },
      getIndex: function () {
        return $http.get('http://blog.jimmylv.info/api/index.json', {
          cache: true
        })
      }
    }
  });