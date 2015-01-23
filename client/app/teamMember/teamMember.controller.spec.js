'use strict';

describe('Controller: TeammemberCtrl', function () {

  // load the controller's module
  beforeEach(module('halfDayTrackerApp'));

  var TeammemberCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeammemberCtrl = $controller('TeammemberCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
