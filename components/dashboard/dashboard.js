angular
  .module('app')
  .controller('DashboardController', function () {
    this.sayHi = function (name) {
      alert('Hi,' + name);
    }
  });