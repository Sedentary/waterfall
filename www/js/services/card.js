angular.module('waterfall.services')
  .factory('Card', function ($resource, Util) {
    return $resource(Util.getApiUrl('card/:id'), {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  });