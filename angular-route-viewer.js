'use strict';
angular.module('angular-route-viewer', ['ngRoute', 'bogus', 'ui.bootstrap'])
  .config(['$routeProvider', '$compileProvider',
    function ($routeProvider, $compileProvider) {
      console.log($compileProvider);

      $routeProvider
        .when('/:1/:2/:three/:4/:name', { controller: 'BogusCtrl', controllerAs: 'SuperBogus', template:"<h1>Hello World</h1>"  })
        .when('/people/:name/purchases', {})
        .when('/people/:name/purchases/:id', {})
        .when('/404', {controller: 'ErrorCtrl', templateUrl: "SomeTemplate.html"})
        .otherwise({ redirectTo: '/404'});
    }]);


angular.module('angular-route-viewer')
  .controller('RouteViewerCtrl', ['$scope', '$route',
    function ($scope, $route) {
      console.log(angular.injector());
      $scope.routes = [];
      angular.forEach($route.routes, function (route) {
        var url = route.originalPath;
        if (url) {
          if (url.indexOf('/', url.length - 1) === -1) {
            route.collapsed = true;
            $scope.routes.push(route);
          }
        }
      });

      $scope.toogleCollapsed = function(route){
        route.collapsed = !route.collapsed;
      }
    }]);