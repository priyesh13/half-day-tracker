'use strict';

angular.module('halfDayTrackerApp')
  .directive('addPersonButton', function () {
    return {
      restrict: 'E',
      template: '<button add-person-inline data-ng-hide="isFormOpen" class="btn btn-danger">Add Person</button>'
    };
  });