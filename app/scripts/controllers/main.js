'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $injector, loggerDecorator) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.plainCount = 0;
    $scope.plain = function () {
      $scope.plainCount++;
      return true;
    };

    $scope.withArgsCount = 0;
    $scope.withArgs = function (arg) {
      $scope.withArgsCount += arg;
      return arg;
    }

    loggerDecorator($scope, ['plain', 'withArgs']);

    $scope.withArgs();
    $scope.withArgs(1);
    $scope.withArgs(1, 2, 3);
  });
