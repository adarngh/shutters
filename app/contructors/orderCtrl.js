shuttersApp.controller("orderCtrl", function ($scope, $routeParams,$location, orderSrv,userSrv) {
    // ordersSrv.getOrders();
    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }
    
    
    $scope.orderList = orderSrv.orderList;
    $scope.activeUser=userSrv.getActiveUser();
        
    $scope.itemList = [];
    $scope.currentOrder = {};
    $scope.orderDetail = [];
    var orderDetailsKeys = ["oWidth", "oHeight", "oProfileType", "oNoOfWings", "oFields", "oColor", "oIsSliding", "oSpruts", "oSprutsHeigt", "oBattery", "oRemarks"];
    var orderDetailsDesc = ["רוחב", "גובה", "סוג פרופיל", "מס' כנפיים", "שדות", "צבע", "כולל הזזה", "סוג שפרוץ", "גובה שפרוץ", "גודל סוללה", "הערות"];

    // $scope.numberOfFields = 1;
    // $scope.leverType = new Array(5);
    // $scope.fieldArray = [{ "fieldType": $scope.leverType[0] }];


    // $scope.changeFieldArray = function () {
    //     $scope.fieldArray.splice(0);
    //     for (var i1 = 0; i1 < $scope.numberOfFields; i1++) {

    //         $scope.fieldArray.push({ "fieldType": $scope.leverType[i1] })
    //     }
    // }

    $scope.getOrderDetails = function (order) {
        $scope.currentOrder = order;
        $scope.orderDetail.splice(0);
        for (var i1 = 0; i1 < orderDetailsKeys.length; i1++) {
            if (orderDetailsDesc[i1] == "שדות") {
                var fText = "";
                if (order[orderDetailsKeys[i1]][0].dir == "שמאל") {
                    fText = "מנוף שמאלי";
                }
                else if (order[orderDetailsKeys[i1]][0].dir == "ימין") {
                    fText = "מנוף ימני";
                }
                else {
                    fText = "מנוף דו-צדדי"
                }
                for (var i2 = 1; i2 < order[orderDetailsKeys[i1]].length; i2++) {
                    if (order[orderDetailsKeys[i1]][i2].dir == "שמאל") {
                        fText =fText + " ,מנוף שמאלי";
                    }
                    else if (order[orderDetailsKeys[i1]][i2].dir == "ימין") {
                        fText =fText+ " ,מנוף ימני";
                    }
                    else {
                        fText =fText+ " ,מנוף דו-צדדי";
                    }
                }
                $scope.orderDetail.push({
                    "text": orderDetailsDesc[i1],
                    "value": fText
                });
            }
            else if (orderDetailsDesc[i1] == "כולל הזזה") {
                if (order[orderDetailsKeys[i1]]=="כן") {
                    var sText = "כן"
                }
                else {
                    var sText = "לא"
                }
                $scope.orderDetail.push({
                    "text": orderDetailsDesc[i1],
                    "value": sText
                });
            }
            else {
                $scope.orderDetail.push({
                    "text": orderDetailsDesc[i1],
                    "value": order[orderDetailsKeys[i1]]
                });
            }
        }
    } 
    
    







})