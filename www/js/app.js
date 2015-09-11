'use strict';

// Module declaration
angular.module('waterfall.controllers', []);
angular.module('waterfall.services', []);

// App
angular.module('waterfall', [
  'ngRoute',
  'dndLists',
  'waterfall.controllers',
  'waterfall.services'
])
  .config(function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'templates/dashboard.html',
      controller: 'DashboardCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/dashboard'});
  });