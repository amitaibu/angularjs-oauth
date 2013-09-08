'use strict';

angular.module('angularjsOauthApp')
  .directive('githubLogin', function () {
    return {
      template: '<a href="#">Login</a>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        OAuth.initialize('Wwa6lTxxmeeJxHIXLrGtu5bp6kw');
        
        element.bind('click', function() {
          //Using popup (option 1)
          OAuth.popup('github', function(error, result) {
            //handle error with error
            //use result.access_token in your API request
            console.log(result);
          });
        });
      }
    };
  });
