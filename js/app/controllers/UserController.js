function UserController(data) {
	var vm = this
	vm.user = data.data
}

angular
	.module('app')
	.controller('UserController', UserController);
