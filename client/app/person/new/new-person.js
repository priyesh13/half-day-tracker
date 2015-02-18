'use strict';

angular.module('halfDayTrackerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('person.add', {
        url: '/add',
        templateUrl: 'app/person/new/new-person.html',
        controller: 'NewPersonCtrl'
      });
  });