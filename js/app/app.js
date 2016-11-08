angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: 'UserController',
          resolve: {
            user: function($routeParams, UserService) {
              return UserService.getUser($routeParams.id)
            }
          }
        })
    })
