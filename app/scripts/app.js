'use strict';

angular
  .module('angularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: {
          pies: loadData
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var loadData = function ($q, $timeout) {
  var defer = $q.defer();

  $timeout(function () {
    defer.resolve(['Chocolate', 'Apple', 'Banana']);
  }, 2000);

  console.log('Loading route data.');
  return defer.promise;
}
