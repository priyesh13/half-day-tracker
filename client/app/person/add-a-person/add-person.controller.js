'use strict';

angular.module('halfDayTrackerApp')
  .controller('AddPersonCtrl', function ($scope, $http, $modal) {

  	$scope.openForm = function () {
  		$scope.modal = $modal.open({
  			templateUrl: 'app/person/add-a-person/add-person.html', 
  			controller: 'AddPersonCtrl'
  		});
  	}
});