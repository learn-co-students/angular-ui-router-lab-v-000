function UserController(user) { // Pass user (from resolve) as controller argument
	var vm = this;
	// vm.user equals data from user
	vm.user = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
