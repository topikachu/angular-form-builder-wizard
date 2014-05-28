'use strict';

describe('Directive: fbWizard', function () {

  // load the directive's module
  beforeEach(module('fbWizardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fb-wizard></fb-wizard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fbWizard directive');
  }));
});
