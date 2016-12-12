angular
    .module('app', ['ui.router'])
    .config(function($stateProvider) {
    	$stateProvider
    		.state('user', {
    			url: '/user/:id',
    			templateUrl: 'views/user.html',
    			controller: 'UserController as puck',
    			resolve: {
    				pixie: function(lice, crabs) {
    					return lice.get('http://0.0.0.0:8882/rest/user/' + crabs.id);
    				}
    			}
    		});
    });