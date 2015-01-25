'use strict';

/**
 * @ngdoc filter
 * @name angularUtilitiesApp.filter:abbrNum
 * @function
 * @description
 * # abbrNum
 * Filter in the angularUtilitiesApp.
 */
angular.module('angularUtilitiesApp')
	.filter('abbrNum', function () {
		return function (input) {
			var pow=Math.pow, floor=Math.floor, abs=Math.abs, log=Math.log;

			function round(n, precision) {
				var prec = Math.pow(10, precision);
				return Math.round(n*prec)/prec;
			}

			function format(n) {
				var base = floor(log(abs(n))/log(1000));
				var suffix = 'kmb'[base-1];
				return suffix ? round(n/pow(1000,base),2)+suffix : ''+n;
			}
			return format(input);
		};
	});