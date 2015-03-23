'use strict';

angular.module('halfDayTrackerApp')
  .controller('AddPersonCtrl', function ($scope, $http, socket) {

  	$scope.resetPerson = function() {
  		$scope.person.name = '';
  		$scope.person.initials = '';
  	}

    $scope.cancelForm = function () {
      var form = document.getElementById('space-for-new-person');
      var formInputs = document.getElementById('add-person-form');
      form.removeChild(formInputs);
      $scope.resetPerson();
    }

    $scope.addPerson = function () {
		var newPerson = {
			name: $scope.person.name,
			initials: $scope.person.initials,
			supportHalfDays: 0,
    		bonusHalfDays: 0
		}

		$http.post('/api/people', newPerson);
		$scope.updateView();
		$scope.cancelForm();
    }

    $scope.updateView = function() {
   		$http.get('/api/people').success(function(people) {
          $scope.people = people;
          socket.syncUpdates('person', $scope.people);
        });
    }


});