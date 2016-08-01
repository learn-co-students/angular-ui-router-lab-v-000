angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider){
      $stateProvider.state('user', {
        url: '/user/:id',
        templateUrl: 'views/user.html',
        controller: 'UserController as user',
        resolve: function($http, $route){
          return http.$get('http://0.0.0.0:8882/rest/user/' + $route.current.params.id)
        }
      })
    });
