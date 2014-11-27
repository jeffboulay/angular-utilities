'use strict';

/**
 * @ngdoc function
 * @name angularUtilitiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularUtilitiesApp
 */
angular.module('angularUtilitiesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
