function UserController(user) {
  debugger
  this.data = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);