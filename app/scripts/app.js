'use strict';

angular
  .module('fbWizardApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'builder',
    'builder.components',
    'validator.rules',
    'builder.wizard'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
