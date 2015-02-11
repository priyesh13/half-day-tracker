'use strict';

angular.module('halfDayTrackerApp')
  .controller('PersonCtrl', function ($scope) {

  	$scope.useHalfDay = function(person){

    	if ($scope.person.supportHalfDays > 0) {

    	} else if ($scope.person.bonusHalfDays > 0) {

    	}
    };

    $scope.$watch('person', function () {
    	$scope.$noHalfDays = $scope.person.supportHalfDays === 0 && $scope.person.bonusHalfDays === 0;
    });
    
  });
