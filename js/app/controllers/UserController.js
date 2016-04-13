function UserController(user) {
  this.data = user.data;
  console.log(user);
}

angular
	.module('app')
	.controller('UserController', UserController);
