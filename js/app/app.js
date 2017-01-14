angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/user/:id',
                templateUrl: 'views/user.html',
                controller: 'UserController as user',
                resolve: {
                  userData: function ($stateParams, UserService) {
                      console.log($stateParams.id);
                      return UserService.getUser($stateParams.id);
                  }
                }
          });
      });
