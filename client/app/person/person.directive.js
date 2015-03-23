'use strict';

angular.module('halfDayTrackerApp')
  .directive('person', function () {
    return {
      controller: 'PersonCtrl',
      templateUrl: 'app/person/person.html',
      restrict: 'E',
      replace: true,
      link: function (scope, element, attrs) {
      }
    };
  });