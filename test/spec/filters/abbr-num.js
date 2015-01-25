'use strict';

describe('Filter: abbrNum', function () {

  // load the filter's module
  beforeEach(module('angularUtilitiesApp'));

  // initialize a new instance of the filter before each test
  var abbrNum;
  beforeEach(inject(function ($filter) {
    abbrNum = $filter('abbrNum');
  }));

  it('should return the input prefixed with "abbrNum filter:"', function () {
    var text = 'angularjs';
    expect(abbrNum(text)).toBe('abbrNum filter: ' + text);
  });

});
