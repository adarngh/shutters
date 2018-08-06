shuttersApp.controller("newOrderCtrl", function ($scope, $timeout, $location, orderSrv, userSrv) {
    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }



    var activeUser = userSrv.getActiveUser();
    $scope.userName = activeUser.cFirstName + " " + activeUser.cLastName;
    $scope.userPhone = activeUser.cMobile;
    $scope.userMail = activeUser.cMail;
    $scope.orderList = orderSrv.orderList;
    $scope.numberOfFields = 1;
    $scope.leverType = new Array(5);
    $scope.fieldArray = [{ "fieldType": $scope.leverType[0] }];

    $scope.changeFieldArray = function () {
        $scope.fieldArray.splice(0);
        for (var i1 = 0; i1 < $scope.numberOfFields; i1++) {

            $scope.fieldArray.push({ "fieldType": $scope.leverType[i1] })
        }
    }
    printDiv = function (divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', '_blank', 'width=300,height=300');
        popupWin.document.open();
        popupWin.document.write('<!DOCTYPE html><html ng-app="shuttersApp" dir="rtl"><head><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge">'
        +'<title>Shutters</title><meta name="viewport" content="width=device-width, initial-scale=1.0">'
        +'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">'
        +'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">'
        +'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"crossorigin="anonymous">'
        +'<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js">'
        +'</script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js">'
        +'</script><script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js">'
        +'</script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js">'
        +'</script><script src="./app/shuttersApp.js"></script><script src="./app/distributors/distCtrl.js"></script>'
        +'<script src="./app/contructors/userSrv.js"></script><script src="./app/contructors/userCtrl.js"></script><script src="./app/contructors/orderCtrl.js"></script>'
        +'<script src="./app/contructors/newOrderCtrl.js"></script><script src="./app/contructors/orderSrv.js"></script><script src="./app/home/homeCtrl.js"></script>'
        +'<link rel="stylesheet" type="text/css" media="screen" href="./app/style.css" /></head><body ng-controller="newOrderCtrl">'         
        + printContents + '</body></html>');
        popupWin.document.close();
    }


    $scope.createOrder = function () {
        var itemList = [];
        var tempField = [];



        itemList.push({
            "catNo": "BKAL07-002",
            "name": "דף הוראות",
            "quantity": 1
        });
        itemList.push({
            "catNo": "BKAL07-001",
            "name": "מטען USB",
            "quantity": 1
        });
        itemList.push({
            "catNo": "BKAL05-05-1000",
            "name": "פאנל05",
            "quantity": $scope.pSolarPanels * $scope.pNoOfWings
        });
        if ($scope.battery == "AH 10") {
            itemList.push({
                "catNo": "BKAL06-06-1001",
                "name": "סוללה 10.4 Ah 3.7V 2A קטן סמסונג",
                "quantity": $scope.pNoOfWings

            });
        }
        else if ($scope.battery == "AH 13") {
            itemList.push({
                "catNo": "BKAL06-06-1002",
                "name": "סוללה 13.8 Ah 3.7V 2A קטן פנסוניק",
                "quantity": $scope.pNoOfWings

            });
        }
        else if ($scope.battery == "AH 16") {
            itemList.push({
                "catNo": "BKAL06-06-1003",
                "name": "סוללה סוללה 15.6 Ah 3.7V 2A גדול סמסונג",
                "quantity": $scope.pNoOfWings

            });
        }
        else {
            itemList.push({
                "catNo": "BKAL06-06-1004",
                "name": "20.7 Ah 3.7V 2A גדול פנסוניק",
                "quantity": $scope.pNoOfWings

            });
        }


        if ($scope.pColor == "לבן") {
            itemList.push({
                "catNo": "BKAL03-03W-1000",
                "name": "סבסוב03-לבן",
                "quantity": $scope.pNoOfWings * $scope.numberOfFields
            });
            itemList.push({
                "catNo": "BKAL02-01W-1000",
                "name": "בקרה02רגיל-לבן",
                "quantity": $scope.pNoOfWings
            });
            var noRight = 0;
            var noLeft = 0;
            var noDouble = 0;
            for (var i1 = 0; i1 < $scope.fieldArray.length; i1++) {
                if ($scope.leverType[i1] == "ימין") {
                    tempField.push({ "dir": "ימין" });
                    noRight++;
                }
                else if ($scope.leverType[i1] == "שמאל") {
                    tempField.push({ "dir": "שמאל" });
                    noLeft++;
                }
                else {
                    tempField.push({ "dir": "דו צדדי" });
                    noDouble++;
                }
            }
            if (noRight > 0) {
                itemList.push({
                    "catNo": "BKAL03-03-W1063",
                    "name": "מנוף ימני-לבן",
                    "quantity": noRight * $scope.pNoOfWings
                });
            }
            if (noLeft > 0) {
                itemList.push({
                    "catNo": "BKAL03-03-W1062",
                    "name": "מנוף שמאלי-לבן",
                    "quantity": noLeft * $scope.pNoOfWings
                });
            }
            if (noDouble > 0) {
                itemList.push({
                    "catNo": "BKAL03-03-W1061",
                    "name": "מנוף דו-צדדי-לבן",
                    "quantity": noDouble * $scope.pNoOfWings
                });
            }
            if ($scope.pIsSliding == "כן") {
                itemList.push({
                    "catNo": "BKAL04-04W-1000",
                    "name": "הזזה04-לבן",
                    "quantity": $scope.pNoOfWings
                });
                if ($scope.pNoOfWings > 1) {
                    itemList.push({
                        "catNo": "BKAL04-04W-2000",
                        "name": "מגנט04-לבן",
                        "quantity": $scope.pNoOfWings - 1
                    });
                }
            }
        }
        else {
            itemList.push({
                "catNo": "BKAL03-03G-1000",
                "name": "סבסוב03-אפור",
                "quantity": $scope.pNoOfWings * $scope.numberOfFields
            });
            itemList.push({
                "catNo": "BKAL02-01G-1000",
                "name": "בקרה02רגיל-אפור",
                "quantity": $scope.pNoOfWings
            });
            var noRight = 0;
            var noLeft = 0;
            var noDouble = 0;
            for (var i1 = 0; i1 < $scope.fieldArray.length; i1++) {
                if ($scope.leverType[i1] == "ימין") {
                    tempField.push({ "dir": "ימין" });
                    noRight++;
                }
                else if ($scope.leverType[i1] == "שמאל") {
                    tempField.push({ "dir": "שמאל" });
                    noLeft++;
                }
                else {
                    tempField.push({ "dir": "דו צדדי" });
                    noDouble++;
                }
            }
            if (noRight > 0) {
                itemList.push({
                    "catNo": "BKAL03-03-G1063",
                    "name": "מנוף ימני-אפור",
                    "quantity": noRight * $scope.pNoOfWings
                });
            }
            if (noLeft > 0) {
                itemList.push({
                    "catNo": "BKAL03-03-G1062",
                    "name": "מנוף שמאלי-אפור",
                    "quantity": noLeft * $scope.pNoOfWings
                });
            }
            if (noDouble > 0) {
                itemList.push({
                    "catNo": "BKAL03-03-G1061",
                    "name": "מנוף דו-צדדי-אפור",
                    "quantity": noDouble * $scope.pNoOfWings
                });
            }
            if ($scope.pIsSliding == "כן") {
                itemList.push({
                    "catNo": "BKAL04-04G-1000",
                    "name": "הזזה04-אפור",
                    "quantity": $scope.pNoOfWings
                });
                if ($scope.pNoOfWings > 1) {
                    itemList.push({
                        "catNo": "BKAL04-04G-2000",
                        "name": "מגנט04-אפור",
                        "quantity": $scope.pNoOfWings - 1
                    });
                }
            }
        }

        var date = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var dateText = date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "/" + date.getUTCMonth() + "/" + date.getFullYear();
        var newOrder = new orderSrv.Order(orderSrv.getNewOrderNum(), activeUser.cNumber, $scope.pWidth, $scope.pHeight, $scope.pProfileType, $scope.pNoOfWings, tempField, $scope.pColor, $scope.pIsSliding, $scope.pSpruts, $scope.pSprutsHeigt, $scope.pBattery, itemList, dateText, $scope.pRemarks);
        $scope.orderList.push(newOrder);
        $scope.newOrder = newOrder;
        $timeout(function(){printDiv("ordetoprint")},3000);
        // $timeout(printDiv


        
        // $location.path("/orderlist");

        var stop = null;
    }
});



