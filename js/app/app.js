angular
    .module('app', ['ui.router'])
    .config(function($stateProvider) {
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function ($routeParams, UserService) {
              // http call to get user's profile
              return $http.get('/user/' + $routeParams.id);
            }
          }
        });
    })