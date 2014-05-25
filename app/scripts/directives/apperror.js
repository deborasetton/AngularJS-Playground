'use strict';

angular.module('angularApp')
  .directive('appError', function ($rootScope) {
    return {
      template: '<div class="alert alert-info" ng-show="isError"><p>Something went wrong.</p><p>Reason: <span id="fail-reason"></span></p></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, reason) {
          scope.isError = true;
          element.find('#fail-reason').text(reason);
        });
      }
    };
  });
