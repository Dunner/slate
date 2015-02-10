'use strict';


/**
 * @ngdoc service
 * @name soundApp.Stream
 * @description
 * # Stream
 * Service in the soundApp.
 */

angular.module('soundApp')
   .service('Stream', function ($resource) {
      return $resource('api/stream/:filename', {
         filename: '@filename'
      });
   });