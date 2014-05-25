'use strict';

angular.module('angularApp')
  .controller('AboutCtrl', function ($scope, pies, $location) {
    $scope.pies = pies;
    console.log('Yay, you\'ve made it!');

    $scope.changeRoute = function () {
      $location.path('/');
    }

    $scope.changeToFailingRoute = function () {
      $location.path('/fail');
    }

  });
