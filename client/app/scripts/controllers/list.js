'use strict';

/**
 * @ngdoc function
 * @name soundAppApp.controller:listCtrl
 * @description
 * # listCtrl
 * Controller of the soundApp
 */
angular.module('soundApp')
  .controller('listCtrl', function ($scope, $filter, Sounds, Persons, Stream, Audio) {
    
    Sounds.query(function(response) {
      $scope.sounds = response;
    });
    Persons.query(function(response) {
      $scope.persons = response;
      $scope.query = $scope.persons[0];
    });
    
    $scope.stream = function(filename) {
      //var filename = filename.replace(/\.[^/.]+$/, "")
      
      Audio.play('/api/stream/' + filename);
    };
    
  });
