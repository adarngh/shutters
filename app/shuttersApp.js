var shuttersApp = angular.module("shuttersApp", ['ngRoute']);
shuttersApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./app/home/home.html"
    })
    .when("/signup", {
      templateUrl : "./app/contructors/signUp.html",
      controller : 'dogGalCtrl'
    })
    .when("/neworder", {
      templateUrl : "./app/contructors/configurator.html",
      controller : 'confCtrl'
    })
    // .otherwise({ redirectTo: '/' });
  });
