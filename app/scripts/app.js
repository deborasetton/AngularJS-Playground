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
      .when('/fail', {
        template: '<h1>Fail</h1>', // Won't be rendered
        controller: 'FailingCtrl', // Won't be instantiated
        resolve: {
          pies: loadDataFail
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

var loadDataFail = function ($q, $timeout) {
  var deferred = $q.defer();
  $timeout(function () {
    deferred.reject('Failed reason');
  }, 2000);
  return deferred.promise;
}
