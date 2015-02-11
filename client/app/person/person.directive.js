'use strict';

angular.module('halfDayTrackerApp')
  .directive('person', function () {
    return {
    	controller: 'PersonCtrl',
      templateUrl: 'app/person/person.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });