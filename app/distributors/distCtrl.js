shuttersApp.controller("distCtrl", function ($scope,$sce,userSrv,$routeParams) {
    // var userList=userSrv.getDistList();
    // var userAdress=(userList[0].cAdress+" "+userList[0].cAdress).replace(" ","+");
    $scope.address=$sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDj2_x8-Phi_rdxi2_UBOgDlOydfPEf2BU&q=בילו+16+תל+אביב");
    // $scope.address=$sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDj2_x8-Phi_rdxi2_UBOgDlOydfPEf2BU&q="+userAdress);
    
    


});