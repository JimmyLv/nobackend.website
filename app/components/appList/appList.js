angular.module('app')
  .component('appList', {
    templateUrl: './app/components/appList/appList.html',
    bindings: {
      appItems: '<'
    },
    controller: function () {
      this.apps = this.appItems.data.data.apps;
      console.log(this.apps);
    }
  });
