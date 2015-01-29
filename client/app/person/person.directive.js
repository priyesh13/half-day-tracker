'use strict';

angular.module('halfDayTrackerApp')
  .directive('person', function () {
    return {
      templateUrl: 'app/person/person.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });