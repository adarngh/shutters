var shuttersApp = angular.module("shuttersApp", ['ngRoute']);
shuttersApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./app/home/home.html",
      controller : 'homeCtrl'
    })
    .when("/distributors", {
      templateUrl : "./app/distributors/distributors.html",
      // controller : 'distCtrl'
    })
    .when("/signup", {
      templateUrl : "./app/contructors/signUp.html",
      controller : 'confCtrl'
    })
    .when("/orderlist", {
        templateUrl : "./app/contructors/proposalList.html",
        controller : 'confCtrl'
      })
    .when("/neworder", {
      templateUrl : "./app/contructors/configurator.html",
      controller : 'confCtrl'
    })
    .otherwise({ redirectTo: '/' });
  });
