angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: '/views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            data: function($http, $stateParams){
              console.log('hi')
              return $http.get('http://localhost:8882/rest/user/' + $stateParams.id)

            }
          }
      })
    })
