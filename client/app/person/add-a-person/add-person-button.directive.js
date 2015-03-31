'use strict';

angular.module('halfDayTrackerApp')
  .directive('addPersonButton', function () {
    return {
      restrict: 'E',
      template: '<button add-person-inline class="btn btn-danger">Add Person</button>'
    };
  });