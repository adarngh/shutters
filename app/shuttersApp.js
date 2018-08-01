var shuttersApp = angular.module("shuttersApp", ['ngRoute']);
shuttersApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./app/home/home.html",
      controller : 'homeCtrl'
    })
    .when("/signup", {
      templateUrl : "./app/contructors/signUp.html",
      controller : 'confCtrl'
    })
    .when("/orderlist", {
        templateUrl : "./app/contructors/ProposalList.html",
        controller : 'confCtrl'
      })
    .when("/neworder", {
      templateUrl : "./app/contructors/configurator.html",
      controller : 'confCtrl'
    })
    .otherwise({ redirectTo: '/' });
  });
