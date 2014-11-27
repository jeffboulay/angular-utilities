'use strict';

/**
 * @ngdoc filter
 * @name angularUtilitiesApp.filter:findLink
 * @function
 * @description
 * # findLink
 * Filter in the angularUtilitiesApp.
 */
angular.module('angularUtilitiesApp')
  .filter('findLink',['$filter', function ($filter) {
		return function(text, target) {
			if (!text) {
				return text;
			}
			var replacedText = $filter('linky')(text, target);

			var targetAttr = '';
			if (angular.isDefined(target)) {
				targetAttr = ' target="' + target + '"';
			}
			// replace href but keep them to our site
			var replacePattern3 = /((https?)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(\/\S*)?)/gim;
			replacedText = text.replace(replacePattern3, '<a href="$1">$1</a>');

			// replace #hashtags and send them to twitter
			var replacePattern1 = /(^|\s)#(\w*[a-zA-Z_]+\w*)/gim;
			replacedText = replacedText.replace(replacePattern1, '$1<a href="https://twitter.com/search?q=%23$2"' + targetAttr + '>#$2</a>');

			// replace @mentions but keep them to our site
			var replacePattern2 = /(^|\s)\@(\w*[a-zA-Z_]+\w*)/gim;
			replacedText = replacedText.replace(replacePattern2, '$1<a href="https://twitter.com/$2"' + targetAttr + '>@$2</a>');

			return replacedText;
		};
	}]);
