angular
  .module('app', ['ngRoute'])
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/hello', {
      template: '<hello name="$resolve.name"></hello>',
      resolve: {
        name: function () {
          return 'jimmy';
        }
      }
    })
    .when('/appList', {
      template: '<app-list app-items="$resolve.appItems"></app-list>',
      resolve: {
        appItems: function ($http) {
          return $http.get('data.json')}
      }
    });
}