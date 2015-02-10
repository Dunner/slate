'use strict';

/**
 * @ngdoc service
 * @name soundApp.Audio
 * @description
 * # Audio
 * Factory in the soundApp.
 */
angular.module('soundApp')
  .factory('Audio', function () {
    var audioElement = '';  //audioElement.autoPlay = false;

    return {
      getElement: function() {
        return audioElement;
      },
      setElement: function(element) {
        audioElement = element;
      },
      play: function(filename) {
        audioElement.src = filename;
        audioElement.play();
      },
      resume: function() {
        audioElement.play();
      },
      pause: function() {
        audioElement.pause();
      },
      stop: function() {
        audioElement.pause();
        audioElement.src = audioElement.currentSrc; /** http://stackoverflow.com/a/16978083/1015046 **/
      },
      incVol: function() {
        if (audioElement.volume < 1) {
          audioElement.volume = (audioElement.volume + 0.1).toFixed(2);
        }
        return audioElement.volume;
      },
      decVol: function() {
        if (audioElement.volume > 0) {
          audioElement.volume = (audioElement.volume - 0.1).toFixed(2);
        }
        return audioElement.volume;
      },
      timer: function(callback) {
        audioElement.ontimeupdate = function() {
          callback(audioElement.duration, audioElement.currentTime);
        };
      },
    };
    
  });
