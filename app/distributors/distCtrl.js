shuttersApp.controller("distCtrl", function ($scope, $sce, userSrv, $routeParams) {
    $scope.userList = userSrv.userList;
    $scope.address = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDj2_x8-Phi_rdxi2_UBOgDlOydfPEf2BU&language=he&zoom=10&q=tel aviv");
        var userAdress = (xUser.cAdress + "+" + xUser.cCity).replace(/\s+/g, '+');
        $scope.address = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDj2_x8-Phi_rdxi2_UBOgDlOydfPEf2BU&language=he&zoom=13&q=" + userAdress);
    }
    // <!--google map API:AIzaSyDj2_x8-Phi_rdxi2_UBOgDlOydfPEf2BU-->


});