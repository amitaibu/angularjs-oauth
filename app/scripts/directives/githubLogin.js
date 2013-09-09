'use strict';

angular.module('angularjsOauthApp')
  .directive('githubLogin', function ($http, $sanitize) {
    return {
      template: '<a href="#">Login</a>',
      restrict: 'E',
      link: function postLink(scope, element) {
        var OAuth = window.OAuth;

        // @todo: Key should be taken from config.
        OAuth.initialize('Wwa6lTxxmeeJxHIXLrGtu5bp6kw');

        // @todo: Get state from service.
        var csrfToken = 1234;

        /**
         * Change login.
         *
         * @param name
         *   The unsanitized user name.
         */
        var loggedIn = function(name) {
          element.html('Hello ' + $sanitize(name) + ' <a href="#">Logout</a>');
        };

        element.bind('click', function() {
          OAuth.popup('github', {state: csrfToken}, function(error, result) {

            $http({
              method: 'JSONP',
              url: 'https://api.github.com/user',
              params: {
                access_token: result.access_token,
                callback: 'JSON_CALLBACK'
              }
            })
            .success(function(data) {
              scope.user.data = data;
              scope.user.name = data.data.name
              loggedIn(data.data.name);
            }).
            error(function(data) {
              console.log(data);
            });
          });
        });
      }
    };
  });
