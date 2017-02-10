angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider
        .state('user',{
          url: '/user/:id',
          tempalteUrl: 'views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: function($http, $route){
              return $http.get('http://0.0.0.0:8882/' + $route.current.params.id)
            }
          }
        })
    })
