angular
    .module('app', ['ui.router'])
    .config(function($stateProvider) {
    		$stateProvider.state('user', {
    			url: '/user/:id',
    			templateUrl: 'js/app/views/users.html',
    			controller: 'UserController as vm',
    			resolve: {
    				user: function(UserService, $stateParams) {
    					return UserService.getUser($stateParams.id);    					
    				}
    			}
    		})
    });