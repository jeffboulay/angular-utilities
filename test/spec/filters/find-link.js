'use strict';

describe('Filter: findLink', function () {

	// load the filter's module
	beforeEach(module('angularUtilitiesApp'));

	// initialize a new instance of the filter before each test
	var findLink;
	beforeEach(inject(function ($filter) {
		findLink = $filter('findLink');
	}));

	it('should return the input with @mentions wrapped in a href"', function () {
		var mention = '@jeffboulay is a twitter user';
		expect(findLink(mention)).toBe('<a href="https://twitter.com/jeffboulay">@jeffboulay</a> is a twitter user');
	});
	it('should return the input with hash tags  wrapped in a href"', function () {
		var hashtag = '#newhotness is a twitter hashtag';
		expect(findLink(hashtag)).toBe('<a href="https://twitter.com/search?q=%23newhotness">#newhotness</a> is a twitter hashtag');
	});
	it('should return the input with hyperlinks  wrapped in a href"', function () {
		var link = 'http://awesomesite.com is a link';
		expect(findLink(link)).toBe('<a href="http://awesomesite.com">http://awesomesite.com</a> is a link');
	});

});
