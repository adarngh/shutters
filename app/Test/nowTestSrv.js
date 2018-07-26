shuttersApp.factory("nowTestSrv", function ($http, $q) {
    var nowSrvUrl = "https://json-server-heroku-hbivssdgyw.now.sh";
    function getAllPosts() {
        var getUrl = nowSrvUrl + "/posts";
        $http.get(getUrl).then(function (response) {
            posts = response.data;
            var stop = null;

        }, function (error) {
            console.error(error);
        })

    }



    return{
        getAllPosts: getAllPosts
    }
});