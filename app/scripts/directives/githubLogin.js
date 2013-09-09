'use strict';

angular.module('angularjsOauthApp')
  .directive('githubLogin', function ($http, $sanitize) {
    return {
      template: '<a href="#">Login</a>',
      restrict: 'E',
      link: function postLink(scope, element) {
        var OAuth = window.OAuth;
        OAuth.initialize('Wwa6lTxxmeeJxHIXLrGtu5bp6kw');

        // @todo: Get state from service.
        var csrfToken = 1234;

        element.bind('click', function() {
          OAuth.popup('github', {state: csrfToken}, function(error, result) {

            $http({
              method: "JSONP",
              url: "https://api.github.com/user",
              params: {
                access_token: result.access_token,
                callback: "JSON_CALLBACK"
              }
            })
            .success(function(data) {
              var name = $sanitize(data.data.name);
              element.html('Hello ' + name + ' <a href="#">Logout</a>');
              console.log('Hello ' + name + ' <a href="#">Logout</a>');
            }).
            error(function(data) {
              console.log(data);
            });
          });
        });
      }
    };
  });
