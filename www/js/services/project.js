angular.module('waterfall.services')
  .service('Project', function ($http, $resource, Util) {
    return $resource(Util.getApiUrl('project/:id'), {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  });