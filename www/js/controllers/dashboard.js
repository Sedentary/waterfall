angular.module('waterfall.controllers')
  .controller('DashboardCtrl', function ($scope, $window, $timeout, $log, DashboardService) {

    $scope.models = {
      selected: null,
      lists: {
        'A': [],
        'B': [],
        'C': [],
        'D': [],
        'E': [],
        'F': [],
        'G': [],
        'H': [],
        'I': []
      }
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      $scope.models.lists.A.push({title: 'Title A ' + i, label: 'Item A ' + i});
      $scope.models.lists.B.push({title: 'Title B ' + i, label: 'Item B ' + i});
      $scope.models.lists.C.push({title: 'Title C ' + i, label: 'Item C ' + i});
      $scope.models.lists.D.push({title: 'Title D ' + i, label: 'Item D ' + i});
      $scope.models.lists.E.push({title: 'Title E ' + i, label: 'Item E ' + i});
      $scope.models.lists.F.push({title: 'Title F ' + i, label: 'Item F ' + i});
      $scope.models.lists.G.push({title: 'Title G ' + i, label: 'Item G ' + i});
      $scope.models.lists.H.push({title: 'Title H ' + i, label: 'Item H ' + i});
      $scope.models.lists.I.push({title: 'Title I ' + i, label: 'Item I ' + i});
    }

    $scope.addCard = function (list) {
      var now = new Date().getTime();
      list.push({title: 'Title ' + now, label: "Item " + now});
    };

    $scope.$watch('models.lists', function () {
      $window.project.setMaxHeight();
    });

    $timeout($window.project.setMaxHeight);
  });