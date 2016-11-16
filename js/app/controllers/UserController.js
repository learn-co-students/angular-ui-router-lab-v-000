function UserController() {
	var vm = this
	vm.user = user.data
}

angular
	.module('app')
	.controller('UserController', UserController);
