const app = angular.module('MyApp', []);



// app.directive('papaya', function(){
//   return {
//     restrict: 'E', // E=element, A=attribute, C=class, M=comment
//     templateUrl: 'partials/partial1.html',  // template replaces the directive element
//     controller: function (){
//       this.name = 'Papaya  ya ya its a papaya'
//     },
//     controllerAs: 'fruit', // how it should instatiated (Controller as fruit)
//     scope: {
//       myAttribute: '@awesome'
//     }
//   }
// })

app.directive('papaya', function(){
  return {
    restrict: 'E', // E=element, A=attribute, C=class, M=comment
    templateUrl: 'partials/partial1.html',  // template replaces the directive element
    controller: 'MyController',
    controllerAs: 'fruit', // how it should instatiated (Controller as fruit)
    scope: {
      myAttribute: '@awesome'
    }
  }
})











app.controller('MyController', ['$http', function($http){// constructor function called MyController
  this.includePath = 'partials/partial1.html';
  this.name = "papayyaaaa";
  this.changeInclude = function(){
    this.includePath = 'partials/partial2.html';
  }


  this.crimes = [];
  this.getCrimes = function(){
    console.log(this)
    const ctrl = this;
    $http({
      method: 'GET',
      url: 'https://data.cityofchicago.org/resource/crimes.json'
    }).then(function(response){
        // succes callback
        console.log(this)
        ctrl.crimes = response.data
        console.log(response)
    }, function(err){
      // failure callback
      console.log(err)
    });
  }
}]);
