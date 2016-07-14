function UserController(user) {
	var ctrl = this;
	ctrl.data = user.data;
	console.log(this.data);
}

angular
	.module('app')
	.controller('UserController', UserController);