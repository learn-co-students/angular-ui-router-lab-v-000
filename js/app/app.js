angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/user/:id',
                templateUrl: 'views/user.html',
                controller: 'UserController',
                resolve: { function($http, $stateParams) {
                  return $http({method: 'GET', url: 'http://0.0.0.0:8882/rest/user/' + $stateParams.id});
                }
              }
            });
    });
