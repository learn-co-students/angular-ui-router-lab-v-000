angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('user', {
          url: "/user/:id",
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function (MyService, $stateParams) {
              return MyService.getU($stateParams.id);
            }
          }
        });
    });