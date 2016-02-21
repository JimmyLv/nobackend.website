angular
  .module('app')
  .service('GitHubService', function($q) {
    return {
      getItem: function() {
        var dfd = $q.defer();

        setTimeout(function() {
          dfd.resolve({
            name: 'Mittens Cat'
          })
        }, 2000);

        return dfd.promise
      }
    }
  });