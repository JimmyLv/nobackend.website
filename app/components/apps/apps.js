export default angular.module('app.components.apps', [])
  .component('apps', {
    templateUrl: require('./apps.html'),
    bindings: {
      appItems: '<'
    },
    controller: function () {
      this.apps = this.appItems.data.data.apps;
    }
  })
