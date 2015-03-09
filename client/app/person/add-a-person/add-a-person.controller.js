'use strict';

angular.module('halfDayTrackerApp')
  .controller('AddAPersonCtrl', function ($scope, $http, $modal) {

  	$scope.openForm = function () {
  		$scope.modal = $modal.open({
  			templateUrl: 'app/person/add-a-person/add-a-person.html', 
  			controller: 'AddAPersonCtrl',
  			size: 'sm'
  		});
  	}
});