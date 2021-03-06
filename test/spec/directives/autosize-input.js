'use strict';

describe('Directive: autosizeInput', function () {

  // load the directive's module
  beforeEach(module('angularUtilitiesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<autosize-input></autosize-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the autosizeInput directive');
  }));
});
