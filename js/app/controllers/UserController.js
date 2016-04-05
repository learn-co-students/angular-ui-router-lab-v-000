function UserController(user) {
  var ctrl = this;
  this.userObj = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);