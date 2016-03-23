export default angular.module('app.apps', [])
  .component('apps', {
    templateUrl: require('./apps.html'),
    bindings: {
      appItems: '<'
    },
    controller() {
      this.apps = this.appItems.data.data.apps;
    }
  })
