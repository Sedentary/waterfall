'use strict';

// Module declaration
angular.module('waterfall.controllers', []);
angular.module('waterfall.services', []);

// App
angular.module('waterfall', [
  'ngRoute',
  'ngResource',
  'dndLists',
  'luegg.directives',
  'waterfall.controllers',
  'waterfall.services'
])

  // Configuration
  .config(function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'templates/dashboard.html',
      controller: 'DashboardCtrl'
    });

    $routeProvider.when('/project/:id', {
      templateUrl: 'templates/project.html',
      controller: 'ProjectCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/dashboard'});
  });