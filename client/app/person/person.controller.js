'use strict';

angular.module('halfDayTrackerApp')
  .controller('PersonCtrl', function ($scope, $http, $modal) {

  	$scope.useHalfDay = function() {
      $scope.person.supportHalfDays > 0 ? $scope.person.supportHalfDays -= 1 : $scope.person.bonusHalfDays -= 1;
      $http.put('/api/people/'+ $scope.person._id, $scope.person);
    };

    $scope.addHalfDay = function() {
      $scope.person.bonusHalfDays += 1;
      $http.put('/api/people/'+ $scope.person._id, $scope.person);
    };
    
});
