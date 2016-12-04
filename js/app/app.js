// angular
//     .module('app', ['ui.router'])
//     .config(function($stateProvider){
//       debugger
//         $stateProvider
//             .state('user', {
//                 url: '/user/:id',
//                 templateUrl: 'views/user.html',
//                 controller: 'UserController as vm',
//                 resolve: {
//                     user: function($http, $stateParams){
//                         debugger
//                         return $http.get(`http://0.0.0.0:8882/rest/user/${$stateParams}`);
//                     }
//                 }
//             });
//
//     });
angular
  .module('app', ['ui.router'])
	.config(function ($stateProvider) {
		$stateProvider
			.state('user', {
				url: '/user/:id',
				templateUrl: 'views/user.html',
				controller: 'UserController as vm',
				resolve: {
					user: function ($http, $stateParams) {
						debugger
						return $http.get('http://0.0.0.0:8882/rest/user/' + $stateParams.id);
					}
				}
			});
	});
