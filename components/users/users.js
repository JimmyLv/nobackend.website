angular
  .module('app')
  .controller('UsersController', function () {
    console.log('hi, user!');
    this.sayHi = function (name) {
      alert('Hi,' + name);
    }
  })
  .controller('UsersController2', function () {
    console.log('hi, user2!');
    this.sayHi = function (name) {
      alert('Hi,' + name);
    }
  })
  .controller('DetailsController', ['$stateParams', function ($stateParams) {
    console.info($stateParams);
    this.sayHi = function (name) {
      console.log('hi, user2 details!', $stateParams.id);
      alert('Hi,' + name);
    }
  }]);