'use strict';

describe('Directive: teamMember', function () {

  // load the directive's module and view
  beforeEach(module('halfDayTrackerApp'));
  beforeEach(module('app/teamMember/teamMember.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<team-member></team-member>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the teamMember directive');
  }));
});