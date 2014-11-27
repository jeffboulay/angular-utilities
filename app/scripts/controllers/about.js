'use strict';

/**
 * @ngdoc function
 * @name angularUtilitiesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularUtilitiesApp
 */
angular.module('angularUtilitiesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
