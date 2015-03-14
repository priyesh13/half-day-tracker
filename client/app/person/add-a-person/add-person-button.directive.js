'use strict';

angular.module('halfDayTrackerApp')
  .directive('addPersonButton', function () {
    return {
      controller: 'AddPersonCtrl',
      templateUrl: 'app/person/add-a-person/templates/add-person-button.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });