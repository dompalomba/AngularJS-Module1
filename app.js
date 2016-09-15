(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.dishes= "Example: pasta, bread, eggs";
  $scope.message_return = "enter initial data";
  $scope.calculateTooMuch = function () {
    var too_much= false;
    var total_dishes_array = $scope.dishes.split(",");

    if ($scope.dishes == "") {
      $scope.message_return = "Please enter data first";
      return;
    };
    if (total_dishes_array.length > 3) {
      too_much = true
     };
    if (too_much) {
      $scope.message_return = "Too much!!";
    } else {
      $scope.message_return = "Enjoy!!!";
    }
    };

  }
})();
