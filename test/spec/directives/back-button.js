describe('Directive: backButton', function () {
	//TODO: Make unit test for back button
	// load the directive's module
	beforeEach(module('angularUtilitiesApp'));

	var element,
		scope;

	beforeEach(inject(function ($rootScope, _$window_) {
		scope = $rootScope.$new();
		$window = _$window_;
	}));

	it('should call history.back when back button is clicked', inject(function () {
		spyOn($window.history, 'back');
		element.find('button').click();
		expect($window.history.back).toHaveBeenCalled();
	}));
});
