shuttersApp.controller("distCtrl", function ($scope,$sce,userSrv,$routeParams) {
    // userSrv.getDistList();
    $scope.userList=userSrv.userList;
    var userAdress=($scope.userList[0].cAdress+"+"+$scope.userList[0].cCity).replace(/\s+/g, '+');
    // $scope.address=$sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDj2_x8-Phi_rdxi2_UBOgDlOydfPEf2BU&q=בילו+16+תל+אביב");
    $scope.address=$sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDj2_x8-Phi_rdxi2_UBOgDlOydfPEf2BU&q="+userAdress);
    
    


});