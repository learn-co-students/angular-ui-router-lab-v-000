function UserController(user) {
	ctrl = this;

	ctrl.user = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
