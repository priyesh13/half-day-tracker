'use strict';

angular.module('halfDayTrackerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamMember', {
        url: '/teamMember',
        templateUrl: 'app/teamMember/teamMember.html',
        controller: 'TeamMemberCtrl'
      });
  });