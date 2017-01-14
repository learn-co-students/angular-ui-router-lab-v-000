function UserController(userData) {

	this.data = userData.data;
	console.log(userData.data.name.first);
}

angular
	.module('app')
	.controller('UserController', UserController);
