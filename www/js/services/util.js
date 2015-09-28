angular.module('waterfall.services')
  .service('Util', function ($http) {
    var apiUrl = '//localhost:3000/api/v1/';

    return {
      /**
       *
       * @param {function} cb
       */
      isApiAlive: function (cb) {
        $http.get(this.getApiUrl('index/'))
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