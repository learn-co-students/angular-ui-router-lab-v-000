function Router($stateProvider) {
  $stateProvider
    .state('user', {
      url: '/user/:id',
      templateUrl: '/js/app/views/user.html',
      controller: 'UserController as ctrl',
      resolve: {
        user: function($stateParams, UserService) {
          return UserService.getUser($stateParams.id);
        }
      },
      // add default params
      params: {
        id: 'liam'
      }
    });
}

angular
    .module('app', ['ui.router'])
    .config(Router);