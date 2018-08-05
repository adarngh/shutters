var shuttersApp = angular.module("shuttersApp", ['ngRoute']);
shuttersApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./app/home/home.html",
      controller : 'homeCtrl'
    })
    .when("/dist", {
      templateUrl : "./app/distributors/distributors.html",
      controller : 'distCtrl'
    })
    .when("/login", {
      templateUrl : "./app/contructors/login.html",
      controller : 'userCtrl'
    })
    .when("/signup", {
      templateUrl : "./app/contructors/signUp.html",
      controller : 'userCtrl'
    })
    .when("/orderlist", {
        templateUrl : "./app/contructors/orderList.html",
        controller : 'orderCtrl'
      })
    .when("/neworder", {
      templateUrl : "./app/contructors/newOrder.html",
      controller : 'newOrderCtrl'
    })
    .otherwise({ redirectTo: '/' });
  });
