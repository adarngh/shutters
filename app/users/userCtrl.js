shuttersApp.controller("userCtrl", function ($scope, $timeout, $location, userSrv) {

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

    $scope.logout = function () {
        userSrv.logout()
        $location.path("/");
    }




    $scope.isLoggedIn = function () {
        if (userSrv.isLoggedIn()) {
            return true;
        }
        else {
            return false;
        }
    }

    $scope.changeClass = function () {
        return $scope.genNav;
    }
    $scope.createUser = function () {
        if (checkUserData()) {
            return;
        }
        var newUser = {
            "cNumber": "cons-000" + userSrv.nextUserId,
            "cMail": $scope.uEmail,
            "cPassword": $scope.uPass,
            "cMobile": $scope.uMobileArea + "-" + $scope.uMobile,
            "cFirstName": $scope.uFname,
            "cLastName": $scope.uLname,
            "cAdress": $scope.uAddress,
            "cCity": $scope.uCity,
            "cZip": $scope.uZip,
            "isActive": true,
            "isSupplier": true
        };
        userSrv.nextUserId++;
        userSrv.tmpUserList.push(newUser);
        // $timeout(function () { printDiv("ordetoprint") });
        $timeout(function () { $location.path("/login") });

    }

    checkUserData = function () {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.uEmail))) {
            window.alert("בבקשה הזן כתובת מייל חוקית");
            return (true)
        }
        if ($scope.uPass != $scope.uPass2) {
            window.alert("הסיסמאות אינן זהות");
            return true;
        }
        if (!($scope.uMobileArea && $scope.uMobile && $scope.uMobileArea && $scope.uFname && $scope.uLname && $scope.uAddress && $scope.uCity && $scope.uZip)) {
            window.alert("יש למלא את כל השדות");
            return true;

        }
        return false;

    }

    $scope.goToPage = function (page) {
        if (page == "pdf") {
            window.open('./app/shared/pdf/pdf.pdf', 'קטלוג', 'resizable,height=500,width=600');
        }
        else {
            $location.path(page);
        }
    }

});