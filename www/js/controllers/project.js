angular.module('waterfall.controllers')
  .controller('ProjectCtrl', function ($scope, $routeParams, $window, Project, List, Card) {
    $scope.loadProject = function () {
      Project.get({id: $routeParams.id}, function (project) {
        console.log(project);
        $scope.project = project;
      });
    };
    $scope.loadProject();

    $scope.newList = function () {
      var list = new List();
      list.name = 'New List';
      list.project = $scope.project;
      list.cards = [];

      list.$save(function (newList) {
        $scope.project.lists.push(newList);
        $scope.project.$update(function () {
          $scope.loadProject();
        });
      });
    };

    $scope.addCard = function (list) {
      list = List.get({id: list}, function () {
        console.log('lol');
        var card = new Card();
        card.name = 'New Card';
        list.cards.push({title: '', label: ''});
        list.cards.glued = true;
        $window.project.setMaxHeight();
      });
    };
  });