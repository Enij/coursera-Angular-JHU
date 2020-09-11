(function (){
  'use strict';

  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.checkFoodAmount = function (){
      $scope.message = "Please enter data first";
      var splitFoodList = $scope.foodList.split(',');

      if(splitFoodList == ""){
        $scope.message = "Please enter data first";
      }
      else if(splitFoodList.length > 0 && splitFoodList.length <= 3){
        $scope.message = "Enjoy!";
      }
      else{
        $scope.message = "Too much!";
      }
    }

  }

})();
