'use strict';

/* App Module */

var app = angular.module('rapsodiaApp', ['rapsodiaControllers', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/lookbook', {
      templateUrl: 'partials/lookbook.html'
    }).
    otherwise({
      templateUrl: 'partials/home.html'
    });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
]);