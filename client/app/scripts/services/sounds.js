'use strict';


/**
 * @ngdoc service
 * @name soundApp.Sounds
 * @description
 * # Sounds
 * Service in the soundApp.
 */

angular.module('soundApp')
   .service('Sounds', function ($resource) {
      return $resource('api/sounds/:slug', {
         slug: '@slug'
      });
   });