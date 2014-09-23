'use strict';

/* Controllers */

var app = angular.module('rapsodiaControllers', []);

app.controller('LookbookController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $http.get('lookbooks').success(function(data) {
      $scope.looks = data;
    });
  }
]);