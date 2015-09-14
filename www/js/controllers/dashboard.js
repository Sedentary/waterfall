angular.module('waterfall.controllers')
  .controller('DashboardCtrl', function ($scope, $window, $timeout, DashboardService) {

    $scope.models = {
      selected: null,
      lists: {
        'A': {glued: false, list: []},
        'B': {glued: false, list: []},
        'C': {glued: false, list: []},
        'D': {glued: false, list: []},
        'E': {glued: false, list: []},
        'F': {glued: false, list: []},
        'G': {glued: false, list: []},
        'H': {glued: false, list: []},
        'I': {glued: false, list: []}
      }
    };

    // Generate initial model
    for (var i = 1, o = 0; i <= 3; ++i) {
      $scope.models.lists.A.list.push({id: o++, title: 'Title A ' + i, label: 'Item A ' + i});
      $scope.models.lists.B.list.push({id: o++, title: 'Title B ' + i, label: 'Item B ' + i});
      $scope.models.lists.C.list.push({id: o++, title: 'Title C ' + i, label: 'Item C ' + i});
      $scope.models.lists.D.list.push({id: o++, title: 'Title D ' + i, label: 'Item D ' + i});
      $scope.models.lists.E.list.push({id: o++, title: 'Title E ' + i, label: 'Item E ' + i});
      $scope.models.lists.F.list.push({id: o++, title: 'Title F ' + i, label: 'Item F ' + i});
      $scope.models.lists.G.list.push({id: o++, title: 'Title G ' + i, label: 'Item G ' + i});
      $scope.models.lists.H.list.push({id: o++, title: 'Title H ' + i, label: 'Item H ' + i});
      $scope.models.lists.I.list.push({id: o++, title: 'Title I ' + i, label: 'Item I ' + i});
    }

    $scope.addCard = function (list) {
      var _id = Math.floor(Math.random() * 1000) + 1;
      list.list.push({id: _id, title: '', label: ''});
      list.glued = true;
    };

    $scope.$watch('models.lists', function () {
      $window.project.setMaxHeight();
    });

    $timeout($window.project.setMaxHeight);
  });