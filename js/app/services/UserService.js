function UserService($http) {
	this.getUser = function(name) {
		return $http.get('/rest/user/' + name);
	}
}