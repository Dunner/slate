'use strict';

/**
 * @ngdoc overview
 * @name soundAppApp
 * @description
 * # soundAppApp
 *
 * Main module of the application.
 */
angular
  .module('soundApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'angularFileUpload',
    
    'btford.socket-io'
  ])
  .run(   ['$rootScope', '$state', '$window',
  function ($rootScope,   $state,   $window) {
  
    //Statechange
    $rootScope.$on('$stateChangeStart', function () {
      $window.scrollTo(0, 0);
    });
    $rootScope.$on('$stateChangeSuccess', function () {
      $window.scrollTo(0, 0);
      $rootScope.state = $state.current.name;
    });
    $rootScope.$on('$stateChangeError', function () {
      console.log('STATE CHANGE ERROR');
    });
    
  }])
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider',
  function ($locationProvider,   $stateProvider,   $urlRouterProvider,   $httpProvider) {
    // State Configurations //
    $httpProvider.defaults.withCredentials = true;

    $stateProvider
    
      .state('list', {
        url: '/',
        templateUrl: 'views/list.html',
        controller: 'listCtrl'
      })
      
      .state('person', {
        url: '/person',
        templateUrl: 'views/person.html',
        controller: 'personCtrl'
      })
      
      .state('sound', {
        url: '/sound',
        templateUrl: 'views/sound.html',
        controller: 'soundCtrl'
      });
      
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }]);