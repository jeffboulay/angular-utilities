'use strict';

/**
 * @ngdoc filter
 * @name angularUtilitiesApp.filter:percentage
 * @function
 * @description
 * # percentage
 * Filter in the angularUtilitiesApp.
 */
angular.module('angularUtilitiesApp')
  .filter('percentage', function () {
		return function (input, decimals) {
			return $filter('number')(input * 100, decimals) + '%';
		};
  });
