'use strict';

angular.module('halfDayTrackerApp')
  .directive('addPersonInline', function ($compile) {
    return {
      controller: 'AddPersonCtrl',
      link: function (scope, element, attrs) {
        element.bind('click', function() {
          scope.isFormOpen = true;
          angular.element(document.getElementById('space-for-new-person'))
            .append($compile('<form novalidate name="add-person-form" id="add-person-form" class="add-person-form"><input type="text" data-ng-model="person.name" placeholder="Name"><input type="text" data-ng-model="person.initials" placeholder="Initials"><button type="button" class="btn btn-default" data-ng-click="addPerson()">Submit</button><button type="button" class="btn" data-ng-click="cancelForm()">Cancel</button></form>')(scope));
        })
      }
    };
  });



