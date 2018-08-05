shuttersApp.controller("userCtrl", function ($scope, $routeParams, $location, userSrv) {

    $scope.uEmail = "";
    $scope.uPassword = "";
    $scope.invalidLogin = false;
    $scope.genNav = "d-none";
    // $scope.genNav="";
    $scope.login = function () {
        $scope.invalidLogin = false;
        userSrv.login($scope.uEmail, $scope.uPassword).then(function (activeUser) {
            $scope.genNav = "";
            $location.path("/orderlist");
        }, function () {
            $scope.invalidLogin = true;
        })


    }





    $scope.changeClass = function () {
        return $scope.genNav;




    }

















});