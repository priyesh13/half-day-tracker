'use strict';

angular.module('halfDayTrackerApp')
  .directive('addAPersonButton', function () {
    return {
      controller: 'AddAPersonCtrl',
      templateUrl: 'app/person/add-a-person/add-person-button.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });