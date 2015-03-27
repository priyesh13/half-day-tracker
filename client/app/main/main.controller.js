'use strict';

angular.module('halfDayTrackerApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, $rootScope) {
      $scope.people = [];

      $http.get('/api/people').success(function(people) {
        $scope.people = people;
        socket.syncUpdates('person', $scope.people);
      });

      $rootScope.isAdmin = Auth.isAdmin;
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