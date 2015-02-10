'use strict';


/**
 * @ngdoc service
 * @name soundApp.Persons
 * @description
 * # Persons
 * Service in the soundApp.
 */

angular.module('soundApp')
   .service('Persons', function ($resource) {
      return $resource('api/persons/:slug', {
         slug: '@slug'
      });
   });