'use strict';

/* App Module */

var app = angular.module('rapsodiaApp', ['rapsodiaControllers', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'partials/test.html'
    }).
    otherwise({
      templateUrl: 'partials/home.html'
    });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
]);