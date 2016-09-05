function UserService($http, $routeParams) {
  this.getUser = function($http) {
    return $http.get('/user/' + routeParams.id)
  }
}
