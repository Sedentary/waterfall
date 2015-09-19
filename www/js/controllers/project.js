angular.module('waterfall.controllers')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectService) {
    ProjectService.get({id: $routeParams.id}, function (project) {
      $scope.project = project;
    });

    $scope.newList = function () {
      $scope.project.lists.push({name: '', project: $scope.project, cards: []});
    };

    $scope.addCard = function (list) {
      list.cards.push({title: '', label: ''});
      list.cards.glued = true;
    };
  });