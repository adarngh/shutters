shuttersApp.controller("confCtrl", function ($scope, $routeParams,ordersSrv) {
    ordersSrv.getOrders();
    $scope.numberOfFields=1;    
    $scope.leverType=new Array(5);
    $scope.fieldArray=[{ "fieldType": $scope.leverType[0] }];
    $scope.changeFieldArray = function () {
        $scope.fieldArray.splice(0);
        for (var i1 = 0; i1 < $scope.numberOfFields; i1++) {

            $scope.fieldArray.push({ "fieldType": $scope.leverType[i1] })
        }



    }


})