function UserController(user) {
  var vm = this;
  vm.user = user.data;
  console.log(vm.user)
}

angular
	.module('app')
	.controller('UserController', UserController);