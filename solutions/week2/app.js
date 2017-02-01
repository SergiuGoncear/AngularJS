(function () {
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService) {
      var buyController = this;
      buyController.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

      buyController.boughtItem = function(itemIndex) {
        ShoppingListCheckOffService.boughtItem(itemIndex)
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtController = this;
      boughtController.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var toBuyItems =
        [{name: "Cookies", quantity: 10},
          {name: "Chips", quantity: 4},
          {name: "Sugary Drinks", quantity: 5},
          {name: "Bread", quantity: 1},
          {name: "Milk", quantity: 5}];
      var boughtItems = [];

      service.getToBuyItems = function() {
        return toBuyItems;
      }

      service.getBoughtItems = function() {
        return boughtItems;
      }

      service.boughtItem = function(itemIndex) {
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
      }
    }

})()
