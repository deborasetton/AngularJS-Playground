'use strict';

angular.module('angularApp')
  .factory('loggerDecorator', function () {
      console.log("Instantiating loggerDecorator");

      function _createWrapper(fn) {
        var newFn = function () {
          var orig = fn.apply(fn, arguments);
          console.log("Ok, this function was called with " + arguments.length + " arguments.");
          return orig;
        };
        // Mantain signatures
        newFn.toString = function () {
          return fn.toString();
        };
        return newFn;
      }

      // Decorator method
      return function (scope, functions) {
        for (var i = 0; i < functions.length; i++) {
          var fName = functions[i];
          if (typeof scope[fName] == 'function') {
            scope[fName] = _createWrapper(scope[fName]);
          }
        }
        return scope;
      };
  });
