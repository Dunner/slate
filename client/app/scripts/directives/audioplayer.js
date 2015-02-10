'use strict';


/**
 * @ngdoc service
 * @name soundApp.AudioPlayer
 * @description
 * # AudioPlayer
 * Service in the soundApp.
 */

angular.module('soundApp')
  .directive('ngAudioPlayer', function(Audio) {
    return {
      restrict: 'E',
      scope: true,
      controller: function($scope, $element) {
        $scope.playing = 'Now: playing';
        $scope.audioElement = $element[0].children[1];
        Audio.setElement($scope.audioElement);
        
        $scope.$watch('audioElement.src', function () {
            console.log($scope.audioElement.src);
        });
      },
      template: 
      '<div class="playing">{{playing}}</div>'+ 
      '<audio controls playing="null"></audio>',
    };
  });