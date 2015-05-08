'use strict';

angular.module('halfDayTrackerApp')
  .controller('PersonCtrl', function ($scope, $http) {

    $scope.useHalfDay = function($event) {
      $scope.open($event)
      // $scope.person.supportHalfDays > 0 ? $scope.person.supportHalfDays -= 1 : $scope.person.bonusHalfDays -= 1;
      // $http.put('/api/people/'+ $scope.person._id, $scope.person);
    };

    $scope.addHalfDay = function() {
      $scope.person.bonusHalfDays += 1;
      $http.put('/api/people/'+ $scope.person._id, $scope.person);
    };

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      console.log('hello')
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  });
