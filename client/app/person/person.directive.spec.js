'use strict';

describe('Directive: person', function () {

  // load the directive's module and view
  beforeEach(module('halfDayTrackerApp'));
  beforeEach(module('app/person/person.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<person></person>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the person directive');
  }));
});