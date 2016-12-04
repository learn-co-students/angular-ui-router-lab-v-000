// function UserController(user) {
//   debugger
//   this.user = user.data;
// }
//
// angular
// 	.module('app')
// 	.controller('UserController', UserController);
function UserController(user) {
	this.data = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
