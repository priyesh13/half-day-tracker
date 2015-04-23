'use strict';

angular.module('halfDayTrackerApp')
  .directive('addPersonInline', function ($compile, $templateRequest) {
    return {
      controller: 'AddPersonCtrl',
      link: function (scope, element, attrs) {
        element.bind('click', function() {
          scope.isFormOpen = true;
          $templateRequest("app/person/add-a-person/add-a-person-form.html").then(function(html) {
            console.log($compile(html))
            angular.element(document.getElementById('space-for-new-person')).append($compile(html)(scope));
          });
        })
      }
    };
  });
