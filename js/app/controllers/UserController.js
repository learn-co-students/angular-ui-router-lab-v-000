function UserController() {
	this.dust = pixie.data;
}

angular
	.module('app')
	.controller('UserController', UserController);