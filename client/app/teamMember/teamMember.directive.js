'use strict';

angular.module('halfDayTrackerApp')
  .directive('teamMember', function () {
    return {
      templateUrl: 'app/teamMember/teamMember.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });