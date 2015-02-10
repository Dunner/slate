'use strict';

/**
 * @ngdoc function
 * @name soundAppApp.controller:feedCtrl
 * @description
 * # feedCtrl
 * Controller of the soundApp
 */
angular.module('soundApp')
  .controller('soundCtrl', function ($scope, Sounds, Persons, $filter, $upload) {
    
    Persons.query(function(response) {
      $scope.persons = response;
    });
    
    
    $scope.addSound = function() {
      if ($scope.file) {
        console.log($scope.form.name.length);
        if ($scope.form.name.length > 2) {
          if ($scope.form.person._id) {
            //Create sound in db
            var newSound = new Sounds({
              name: $scope.form.name,
              person: $scope.form.person._id,
              filename: $scope.file[0].name,
              slug: $filter('slug')($scope.form.name),
              completed: false
            });
            newSound.$save(function(){
              $scope.form = {name: '', person: ''};
            });
            //Upload sound to server
            $upload.upload({
                url: '/api/user/uploads',
                file: $scope.file[0]
            }).progress(function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
            }).success(function (data, status, headers, config) {
              console.log('file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data));
              $scope.error = undefined;
            });
          } else {
            $scope.error = 'Invalid person chosen';
          }
        } else {
          $scope.error = 'Name of soundfile to short';
        }
      } else {
        $scope.error = 'You chose no file or a broken file';
      }
    };
    
    $scope.setName = function(filename) {
      filename = filename.replace(/\.[^/.]+$/, "");
      $scope.form = {name: filename, person: ''};
    };
    
    
  });
