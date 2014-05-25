'use strict';

angular.module('angularApp')
  .controller('AppCtrl', function ($scope, $rootScope, $route, $location) {
    console.log('AppCtrl instantiated.');

    $rootScope.$on('$routeChangeStart', function (event, current, previous, resolve) {
      console.log('Route change started (path has already changed)');
    });

    $rootScope.$on("$routeChangeSuccess", function (event, current, previous, resolve) {
      console.log('Route change ended.');

      // Interesting stuff you have access to:
      // current.locals.$template
      // current.$$route.controller
    });

    $rootScope.$on('$routeChangeError', function (event, current, previous, reason) {
        console.log('Failed to change route.');
    });

  });
