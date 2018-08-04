shuttersApp.controller("userCtrl", function ($scope, $routeParams, $location, userSrv) {

    $scope.uEmail = "";
    $scope.uPassword = "";
    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;
        userSrv.login($scope.uEmail, $scope.uPassword).then(function(activeUser){
            $location.path("/orderlist");
        }, function() {
            $scope.invalidLogin = true;
        })
    }























});