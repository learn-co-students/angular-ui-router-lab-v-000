function UserController($scope, user) {
  $scope.user = JSON.stringify(user.data);
}

angular
.module('app')
.controller('UserController', UserController);
