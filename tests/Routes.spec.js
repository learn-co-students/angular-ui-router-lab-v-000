describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	describe('User', function () {

		beforeEach(inject(function ($injector) {
			$state = $injector.get('$state');
		}));

		var state;
		it('should have the correct URL', function () {
			state = $state.get('user');

			expect(state.url).toEqual('/user/:id');
		});

		it('should use the right controller', function () {
			expect(state.controller).toContain('UserController');
		});

		it('should have a resolve', function () {
			expect(state.resolve).toBeDefined();
		});
	});
});