var app = angular.module('catDogMod', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

//('/') is parameter 
.when('/cat',
      {
        controller: 'SimpleController',
        templateUrl: 'indexcat.html'
      })
.when('/dog',
      {
        controller: 'SimpleController',
        templateUrl: 'indexdog.html'
      })
    
 });

    app.controller('SimpleController', function(){


  });

