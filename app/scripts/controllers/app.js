'use strict';

angular.module('angularApp')
  .controller('AppCtrl', function ($scope, $rootScope, $route, $location) {
    console.log('AppCtrl instantiated.');

    $rootScope.$on('$routeChangeStart', function (event, current, previous, resolve) {
      console.log('Route change started (path has already changed)');
    });

    $rootScope.$on("$routeChangeSuccess", function (event, current, previous, resolve) {
      console.log('Route change ended. Current controller is: ' + current.$$route.controller);

      // Interesting stuff you have access to:
      // current.locals.$template
      // current.$$route.controller
    });

  });
