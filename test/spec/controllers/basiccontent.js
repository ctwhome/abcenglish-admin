'use strict';

describe('Controller: BasiccontentCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var BasiccontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasiccontentCtrl = $controller('BasiccontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
