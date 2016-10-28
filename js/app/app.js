angular
    .module('app', ['ui.router'])
    .config(function($stateProvider) {
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function ($http, $stateParams) {
              // http call to get user's profile
              debugger
              return $http.get('http://localhost:8882/rest/user/' + $stateParams.id);
            }
          }
        });
    })