'use strict';

/**
 * @ngdoc directive
 * @name angularUtilitiesApp.directive:backButton
 * @description
 * # backButton
 */
angular.module('angularUtilitiesApp')
	.directive('backbutton', ['$window', function($window) {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				elem.bind('click', function () {
					$window.history.back();
					console.log("back");
				});
			}
		};
	}]);