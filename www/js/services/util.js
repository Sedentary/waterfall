angular.module('waterfall.services')
  .service('UtilService', function ($http) {
    var apiUrl = '//waterfall-api.herokuapp.com/api/v1/';

    return {
      /**
       *
       * @param {function} cb
       */
      isApiAlive: function (cb) {
        $http.get(getApiUrl('index/'))
          .success(cb(true))
          .error(cb(false));
      },

      /**
       *
       * @param {string} url
       * @returns {string}
       */
      getApiUrl: function (url) {
        if (url.startsWith('/')) {
          url = url.slice(1);
        }
        return apiUrl + url;
      }
    };
  });