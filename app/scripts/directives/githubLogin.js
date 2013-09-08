'use strict';

angular.module('angularjsOauthApp')
  .directive('githubLogin', function ($http) {
    return {
      template: '<a href="#">Login</a>',
      restrict: 'E',
      link: function postLink(scope, element) {
        var OAuth = OAuth || {};
        OAuth.initialize('Wwa6lTxxmeeJxHIXLrGtu5bp6kw');

        // @todo: Get state from service.
        var csrfToken = 1234;

        element.bind('click', function() {
          OAuth.popup('github', {state: csrfToken}, function(error, result) {
            console.log(result);

            $http({method: 'JSONP', url: 'https://oauth.io/api/me'})
            .success(function(data) {
              console.log(data);
            }).
            error(function(data) {
              console.log(data);
            });
          });
        });
      }
    };
  });
