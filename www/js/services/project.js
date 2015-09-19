angular.module('waterfall.services')
  .service('ProjectService', function ($http, $resource, UtilService) {
    return $resource(UtilService.getApiUrl('project/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    }));
  });