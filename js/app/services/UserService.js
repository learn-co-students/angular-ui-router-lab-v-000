function UserService($http) {
  this.getUser = function(id) {
  $http.get('/user/' + id);
  }
}

angular
  .module('app')
  .service('UserService', UserService)
