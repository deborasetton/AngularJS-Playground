'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $injector) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
