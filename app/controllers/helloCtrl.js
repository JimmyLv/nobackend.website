angular.module('app')
  .controller('HelloCtrl', function () {
    this.name = 'jimmy';
    this.sayHi = function () {
      alert("Hi, " + this.name)
    }
  });