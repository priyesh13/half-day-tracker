'use strict';

angular.module('halfDayTrackerApp')
  .controller('MainCtrl', function ($scope, $http, $modal, socket) {
      $scope.people = [];

      $http.get('/api/people').success(function(people) {
        $scope.people = people;
        socket.syncUpdates('person', $scope.people);
      });
  });




    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });