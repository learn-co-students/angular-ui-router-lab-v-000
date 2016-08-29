function UserController(user) {
	this.info = user.data;
	console.log(this.info.email);
}

angular
	.module('app')
	.controller('UserController', UserController);
