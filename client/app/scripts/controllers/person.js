'use strict';

/**
 * @ngdoc function
 * @name soundAppApp.controller:personCtrl
 * @description
 * # personCtrl
 * Controller of the soundApp
 */
angular.module('soundApp')
  .controller('personCtrl', function ($scope, Persons, $filter) {
    
    $scope.addPerson = function() {
      var newPerson = new Persons({
        name: $scope.form.name,
        slug: $filter('slug')($scope.form.name),
        completed: false
      });
      newPerson.$save(function(post){
        $scope.form = {name: ''};
      });
    };
    
  });
