'use strict';

// Injector examples.
// Examples from: https://egghead.io/lessons/angularjs-injectors

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $injector) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

