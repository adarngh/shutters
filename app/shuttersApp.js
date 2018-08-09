var shuttersApp = angular.module("shuttersApp", ['ngRoute']);
shuttersApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./app/home/home.html",
      controller : 'homeCtrl'
    })
    .when("/info", {
      templateUrl : "./app/home/info.html",
      // controller : 'homeCtrl'
    })
    .when("/dist", {
      templateUrl : "./app/distributors/distributors.html",
      controller : 'distCtrl'
    })
    .when("/login", {
      templateUrl : "./app/users/login.html",
      controller : 'userCtrl'
    })
    .when("/signup", {
      templateUrl : "./app/users/signUp.html",
      controller : 'userCtrl'
    })
    .when("/orderlist", {
        templateUrl : "./app/orders/orderList.html",
        controller : 'orderCtrl'
      })
    .when("/neworder", {
      templateUrl : "./app/orders/newOrder.html",
      controller : 'newOrderCtrl'
    })
    .otherwise({ redirectTo: '/' });
  });
