angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider
        .state('user.id', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: "UserController as user",
          resolve: {
            user: function($route, $http){
              debugger;
              return $http.get('/rest/user/' + $route.current.params.id)
            }
          }
        })
    });
