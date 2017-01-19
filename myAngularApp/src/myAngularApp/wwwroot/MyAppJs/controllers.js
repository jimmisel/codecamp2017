'use strict';
var MyApp;
(function (MyApp) {
    var PetListController = (function () {
        function PetListController() {
            this.pets = [
                { id: 1, name: 'bob', pic: 'https://s-media-cache-ak0.pinimg.com/736x/32/00/3b/32003bd128bebe99cb8c655a9c0f00f5.jpg', type: 'rabbit' },
                { id: 2, name: 'rover', pic: 'https://files.graphiq.com/stories/t4/The_Best_Dog_Breeds_18262_10912.jpg', type: 'dog' },
                { id: 3, name: 'thumper', pic: 'http://eskipaper.com/images/white-rabbit-1.jpg', type: 'rabbit' }
            ];
        }
        return PetListController;
    }());
    angular.module('PetShopApp').controller('petListController', PetListController);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map