angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          contoller: 'UserController',
          resolve: {
            resolve: {
            user: function ($routeParams, UserService) {
              return UserService.getService($routeParams.name);

          }
        });
    });
