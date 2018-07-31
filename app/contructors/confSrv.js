shuttersApp.factory("confSrv", function ($http, $q) {
    function Proposal(pNumber, pConsNo, pWiddth, pHeight, pProfileType, pNoOfWings, pNoOfFields,pColor,pIsSliding,pRemarks) {
        this.pNumber = pNumber;
        this.pConsNo = pConsNo;
        this.pWidth = pWiddth;
        this.pHeight = pHeight;
        this.pProfileType = pProfileType;
        this.pNoOfWings = pNoOfWings;
        this.pNoOfFields =pNoOfFields;
        this.pColor=pColor;
        this.pIsSliding=pIsSliding;
        this.pRemarks=pRemarks;
        this.pItemList;
    }


    return{
        Proposal: Proposal
    }
});