angular.module('waterfall.controllers')
  .controller('DashboardCtrl', function ($scope, $window, $timeout, DashboardService) {

    $scope.models = {
      selected: null,
      lists: {
        "A": [],
        "B": [],
        "C": [],
        "D": [],
        "E": [],
        "F": [],
        "G": [],
        "H": [],
        "I": []
      }
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      $scope.models.lists.A.push({label: "Item A" + i});
      $scope.models.lists.B.push({label: "Item B" + i});
      $scope.models.lists.C.push({label: "Item C" + i});
      $scope.models.lists.D.push({label: "Item D" + i});
      $scope.models.lists.E.push({label: "Item E" + i});
      $scope.models.lists.F.push({label: "Item F" + i});
      $scope.models.lists.G.push({label: "Item G" + i});
      $scope.models.lists.H.push({label: "Item H" + i});
      $scope.models.lists.I.push({label: "Item I" + i});
    }

    $scope.addCard = function (list) {
      var now = new Date().getTime();
      list.push({label: "Item " + now + i});
    };

    $scope.$watch('models.lists', function () {
      $window.project.setMaxHeight();
    });

    $timeout($window.project.setMaxHeight);
  });