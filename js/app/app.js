angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider.state('user', {
        url: '/user/:name',
        templateUrl: 'views/user.html',
        controller: 'UserController as user',
        resolve: {
          user: function($http){
            $http.get('http://0.0.0.0:8882/rest/user/' + $stateParams.name);
          }
        }
      });
    });