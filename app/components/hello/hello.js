angular.module('app')
  .controller('HelloCtrl2', function (name) {
    this.name = name;
    this.girlFriend = 'plus plus';
    this.sayHi = function () {
      alert("Hi, " + this.name)
    }
  });