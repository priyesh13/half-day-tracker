'use strict';

angular.module('halfDayTrackerApp')
  .controller('PersonCtrl', function ($scope, $http) {

  	$scope.useHalfDay = function() {
      $scope.person.supportHalfDays > 0 ? $scope.person.supportHalfDays -= 1 : $scope.person.bonusHalfDays -= 1;
      $http.put('/api/people/'+ $scope.person._id, $scope.person);
    };

    $scope.addHalfDay = function() {
      $scope.person.bonusHalfDays += 1;
      $http.put('/api/people/'+ $scope.person._id, $scope.person);
    };

    $scope.getAvatar = function(initials) {
    	

    	console.log("http://avatar.faw.bskyb.com/display/"+initials);
    	// var avatar = $http.get('avatar.faw.bskyb.com/display/' +initials);

    	return "https://placekitten.com/g/188/227";
    }
    
});
