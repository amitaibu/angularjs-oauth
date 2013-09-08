'use strict';

describe('Directive: githubLogin', function () {
  beforeEach(module('angularjsOauthApp'));

  var element;

  it('should show a login', inject(function ($rootScope, $compile) {
    element = angular.element('<github-login></github-login>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('<a href="#">Login</a>');
  }));
});
