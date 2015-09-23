angular.module('waterfall.services')
  .factory('List', function ($resource, Util) {
    return $resource(Util.getApiUrl('list/:id'), {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  });