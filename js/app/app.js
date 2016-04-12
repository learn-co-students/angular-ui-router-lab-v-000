angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('user', {
          url: '/user/:name',
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function ($UserService, $route) {
              return UserService.getUser($route.current.params.name);
            }
          }
        });
    });