function UserService($http){
  this.getUser = function(user_name){
    return $http.get('http://0.0.0.0:8882/rest/user/' + user_name);
  }
}

angular
  .module('app')
  .service('UserService', UserService)