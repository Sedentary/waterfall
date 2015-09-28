angular.module('waterfall.controllers')
  .controller('DashboardCtrl', function ($scope, Project) {
    $scope.loadProjects = function () {
      Project.query(function (projects) {
        $scope.projects = projects;
      });
    };

    $scope.$on('project-created', function () {
      $scope.loadProjects();
    });

    $scope.loadProjects();

    //$scope.models = {
    //  selected: null,
    //  lists: {
    //    'A': [],
    //    'B': [],
    //    'C': [],
    //    'D': [],
    //    'E': [],
    //    'F': [],
    //    'G': [],
    //    'H': [],
    //    'I': []
    //  }
    //};
    //
    //$scope.isGlued = function (list) {
    //  return list.indexOf(models.selected) !== -1;
    //};
    //
    //// Generate initial model
    //for (var i = 1, o = 0; i <= 3; ++i) {
    //  $scope.models.lists.A.push({id: o++, title: 'Title A ' + i, label: 'Item A ' + i});
    //  $scope.models.lists.B.push({id: o++, title: 'Title B ' + i, label: 'Item B ' + i});
    //  $scope.models.lists.C.push({id: o++, title: 'Title C ' + i, label: 'Item C ' + i});
    //  $scope.models.lists.D.push({id: o++, title: 'Title D ' + i, label: 'Item D ' + i});
    //  $scope.models.lists.E.push({id: o++, title: 'Title E ' + i, label: 'Item E ' + i});
    //  $scope.models.lists.F.push({id: o++, title: 'Title F ' + i, label: 'Item F ' + i});
    //  $scope.models.lists.G.push({id: o++, title: 'Title G ' + i, label: 'Item G ' + i});
    //  $scope.models.lists.H.push({id: o++, title: 'Title H ' + i, label: 'Item H ' + i});
    //  $scope.models.lists.I.push({id: o++, title: 'Title I ' + i, label: 'Item I ' + i});
    //}
    //
    //$scope.addCard = function (list) {
    //  var _id = Math.floor(Math.random() * 1000) + 1;
    //  list.push({id: _id, title: '', label: ''});
    //  list.glued = true;
    //};
    //
    //$scope.$watch('models.lists', function () {
    //  $window.project.setMaxHeight();
    //});
    //
    //$timeout($window.project.setMaxHeight);
  });