angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider){
      $stateProvider
        .state('user', {
          url: '/user',
          templateUrl: 'views/user.html', 
          controller: 'UserController',
          resolve: {
            
            user: function($route, $http){
          
              var resp =  $http.get('http://0.0.0.0:8882/rest/user/'+$route.current.params.id)
             
              return resp
            }}
        })
    })