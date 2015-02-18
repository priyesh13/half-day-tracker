'use strict';

angular.module('halfDayTrackerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('person.add', {
        url: '/add',
        templateUrl: 'app/person/new/new-person.html',
        controller: 'NewPersonCtrl'
      });
  });



      // .state('person.add', {
      // 	url: '/add',
      // 	onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
      // 		$modal.open({
      // 			templateUrl: 'person/new/new-person.html', 
      // 			controller: ['$scope', function($scope) {
      // 				console.log('im here')
      // 			}]
      // 		});
      // 	}]
      // })

// $stateProvider.state("items.add", {
//     url: "/add",
//     onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
//         $modal.open({
//             templateUrl: "items/add",
//             resolve: {
//               item: function() { new Item(123).get(); }
//             },
//             controller: ['$scope', 'item', function($scope, item) {
//               $scope.dismiss = function() {
//                 $scope.$dismiss();
//               };

//               $scope.save = function() {
//                 item.update().then(function() {
//                   $scope.$close(true);
//                 });
//               };
//             }]
//         }).result.finally(function() {
//             $state.go('^');
//         });
//     }]
// });

