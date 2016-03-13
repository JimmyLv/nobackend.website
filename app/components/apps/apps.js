export default {
  templateUrl: './app/components/apps/apps.html',
  bindings: {
    appItems: '<'
  },
  controller: function () {
    this.apps = this.appItems.data.data.apps;
    console.log(this.apps);
  }
}
