angular.module('waterfall.controllers')
  .controller('ProjectCtrl', function ($scope, $rootScope, $routeParams, $window, Project, List, Card) {
    $scope.project = {};

    $scope.loadProject = function () {
      Project.get({id: $routeParams.id}, function (project) {
        $scope.project = project;
      });
    };
    $scope.loadProject();

    $scope.create = function () {
      var project = new Project($scope.project);
      project.users = []; //FIXME user is needed, and we still dont have this information in the scope
      project.$save(function () {
        $rootScope.$broadcast('project-created');
      });
    };

    $scope.addList = function () {
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