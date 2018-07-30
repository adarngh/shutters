shuttersApp.controller("confCtrl", function ($scope, $routeParams) {
    $scope.numberOfFields

    $scope.changeFieldArray = function () {
        $scope.fieldArray = [];
        for (var i1 = 0; i1 < $scope.numberOfFields; i1++) {

            $scope.fieldArray.push({ "fieldType": "" })
        }



    }


})