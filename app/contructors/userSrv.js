shuttersApp.factory('userSrv', function ($http, $q) {

    var activeUser = null;//new User({fname:"Nir", lname:"Channes", id:"1", email:"nir@nir.com"});//null;
    var userUrl = "./private/jsonFiles/constructors.json"
    var userList = [];
    var tmpUserList=[];
    var nextUserId=3;
    getDistList();
    function User(userData) {
        this.cNumber = userData.cNumber,
            this.cID = userData.cID,
            this.cMail = userData.cMail,
            this.cPassword = userData.cPassword,
            this.cMobile = userData.cMobile,
            this.cFirstName = userData.cFirstName,
            this.cLastName = userData.cLastName,
            this.cAdress = userData.cAdress,
            this.cCity = userData.cCity,
            this.cZip = userData.cZip,
            this.isActive = userData.isActive,
            this.isSupplier = userData.isSupplier
    }


    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function login(email, password) {
        var async = $q.defer();
        var userNotFound = true;
        
        
        
        for (var i1 = 0; i1 < tmpUserList.length; i1++) {
            if (tmpUserList[i1].cMail == email && tmpUserList[i1].cPassword == password) {
                activeUser = new User(tmpUserList[i1]);
                async.resolve(activeUser);
                userNotFound = false;
                return async.promise;;
            }
        }






        $http.get(userUrl).then(function (response) {
            var userList = response.data;
            for (var i1 = 0; i1 < userList.length; i1++) {
                if (userList[i1].cMail == email && userList[i1].cPassword == password) {
                    activeUser = new User(response.data[i1]);
                    async.resolve(activeUser);
                    userNotFound = false;
                    break;
                }
            }
            if (userNotFound) {
                async.reject("invalid credentials");
            }
        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }

    function getActiveUser() {
        return activeUser;
    }

    function getDistList() {
        $http.get(userUrl).then(function (response) {
            userList.splice(0);
            var result = response.data;
            for (var i1 = 0; i1 < result.length; i1++) {
                userList.push(new User(result[i1]));
            }

            var stop = null;

        }, function (error) {
            console.error(error);
        })

    }
    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser,
        getDistList: getDistList,
        userList: userList,
        tmpUserList:tmpUserList,
        nextUserId:nextUserId
    }


})
