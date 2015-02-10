'use strict';

/**
 * @ngdoc filter
 * @name soundApp.filter:slug
 * @function
 * @description
 * # slug
 * Filter in the soundApp.
 */
angular.module('soundApp')
  .filter('slug', function () {
    return function (text) {
      return text.replace(/[^a-z0-9_ -]/gi, '').replace(/\s+/g, '-').toLowerCase();
    };
  });
