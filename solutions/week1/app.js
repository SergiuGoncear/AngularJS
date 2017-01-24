(function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

      $scope.lunchString = ""

      $scope.checkLunchString = function () {
        if ($scope.lunchString.length == 0) $scope.message = "Please enter data first"
        else if ($scope.lunchString.split(",").length <= 3) $scope.message = "Enjoy!"
        else $scope.message = "Too much!"
      }
    }
})()
