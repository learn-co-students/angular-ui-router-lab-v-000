angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
    	$stateProvider
    		.state('user', {
    			url: '/user/:name',
    			templateUrl: 'views/user.html',
    			controller: 'UserController as ctrl',
    			resolve: {
    				user: function($http, $stateParams){
    					console.log($stateParams);
    					return $http.get('http://0.0.0.0:8882/rest/user/' + $stateParams.name)
    				}
    			}
    		});
    });