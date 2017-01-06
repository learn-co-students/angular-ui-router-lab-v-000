function UserController(user) {
	this.id = user.id;
}

angular
	.module('app')
	.controller('UserController', UserController);
