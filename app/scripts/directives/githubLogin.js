'use strict';

angular.module('angularjsOauthApp')
  .directive('githubLogin', function ($http) {
    return {
      template: '<a href="#">Login</a>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        OAuth.initialize('Wwa6lTxxmeeJxHIXLrGtu5bp6kw');

        // @todo: Get state from service.
        var csrfToken = 1234;

        element.bind('click', function() {
          OAuth.popup('github', {state: csrfToken}, function(error, result) {
            console.log(result);

            $http({method: 'GET', url: 'https://oauth.io/api/me'}).
              success(function(data, status, headers, config) {

              }).
              error(function(data, status, headers, config) {
              });
          });
        });
      }
    };
  });