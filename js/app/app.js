angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider){
        $stateProvider
            .state('user.name', {
                url: '/user/:id',
                templateUrl: 'views/NUTS.js',
                controller: 'UserController as user',
                resolve: {
                    function($http, $route){
                      user=$http.get('http://0.0.0.0:8882/rest/user' + route.current.params.id)
                    }
                }

            })
    })