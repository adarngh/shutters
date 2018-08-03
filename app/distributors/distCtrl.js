shuttersApp.controller("distCtrl", function ($scope, $routeParams,document) {
    
    
    
    function initMap() {
        // The location of Home
        var Home = { lat: 32.069319, lng: 34.780047 };
        // The map, centered at Home
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: Home });
        // The marker, positioned at Home
        var marker = new google.maps.Marker({ position: Home, map: map });
    }



});