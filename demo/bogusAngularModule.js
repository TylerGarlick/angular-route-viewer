'use strict';

angular.module('bogus', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/test/:name', {controller: 'BogusCtrl'})
      .when('/test/:name/purchases', {})
      .when('/test/:name/purchases/:id', {})
      ;
  }]);