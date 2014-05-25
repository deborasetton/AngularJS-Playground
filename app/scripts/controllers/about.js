'use strict';

angular.module('angularApp')
  .controller('AboutCtrl', function ($scope, pies, $location, $routeParams) {
    $scope.pies = pies;
    console.log('Yay, you\'ve made it!');

    $scope.person = $routeParams.person || 'Unknown';

    $scope.changeRoute = function () {
      $location.path('/');
    }

    $scope.changeToFailingRoute = function () {
      $location.path('/fail');
    }

  });
