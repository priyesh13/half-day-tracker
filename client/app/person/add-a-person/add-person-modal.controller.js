'use strict';

angular.module('halfDayTrackerApp')
  .controller('AddPersonModalCtrl', function ($scope, $http, $modalInstance) {

    $scope.cancelForm = function () {
      console.log('cancel')
      $modalInstance.dismiss('cancel');
    }

    $scope.addPerson = function () {
      console.log('add person...')
    }
});