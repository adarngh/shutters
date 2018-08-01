shuttersApp.factory("ordersSrv", function ($http, $q) {
    var temp
    var orderList = [];
    var ordersUrl = "./private/jsonFiles/orders.json"

    function Order(oNumber, oOrderOwner, oWidth, oHeight, oProfileType, oNoOfWings, oFields, oColor, oIsSliding, oSpruts, oSprutsHeigt, oBattery,oItemList) {
        this.oNumber = oNumber;
        this.oOrderOwner = oOrderOwner;
        this.oWidth = oWidth;
        this.oHeight = oHeight;
        this.oProfileType = oProfileType;
        this.oNoOfWings = oNoOfWings;
        this.oFields = oFields;
        this.oColor = oColor;
        this.oIsSliding = oIsSliding;
        this.oSpruts = oSpruts;
        this.oSprutsHeigt = oSprutsHeigt;
        this.oBattery = oBattery;
        this.oItemList = oItemList;
    }

    function getOrders() {
        $http.get(ordersUrl).then(function (response) {
            var result = response.data;
            for (var i1 = 0; i1 < result.length; i1++) {
                orderList.push(new Order(result[i1].oNumber, result[i1].oOrderOwner, result[i1].oWidth, result[i1].oHeight, result[i1].oProfileType,
                    result[i1].oNoOfWings, result[i1].oFields, result[i1].oColor, result[i1].oIsSliding,result[i1].oSpruts, result[i1].oSprutsHeigt,
                    result[i1].oBattery, result[i1].oItemList));
            }

            var stop = null;

        }, function (error) {
            console.error(error);
        })

    }

    return {
        Order: Order,
        getOrders: getOrders
    }






});