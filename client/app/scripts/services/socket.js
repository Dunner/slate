'use strict';

/**
 * @ngdoc service
 * @name soundApp.socket
 * @description
 * # socket
 * Factory in the soundApp.
 */
angular.module('soundApp')
  .factory('socket', function (socketFactory) {
    return socketFactory();
  });
