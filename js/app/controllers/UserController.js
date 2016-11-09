function UserController(UserServiceReturnVal) {
  this.user = UserServiceReturnVal.data;
}

angular
	.module('app')
	.controller('UserController', UserController);