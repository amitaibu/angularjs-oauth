'use strict';

describe('Directive: githubLogin', function () {
  beforeEach(module('angularjsOauthApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<github-login></github-login>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the githubLogin directive');
  }));
});
