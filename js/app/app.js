angular
  // Add ui.router to app getters
  .module('app', ['ui.router'])
  // Add .config
  // Pass $stateProvider as argument
  .config(function ($stateProvider) {
    $stateProvider
      // Use .state instead of .when
      .state('user', {
        // Add Configuration Object
        url: '/user/:id',
        templateUrl: 'views/user.html',
        controller: 'UserController as vm',
        // Fetch Data
        resolve: {
          // Pass $http and $statPparams as arguments
          user: function functionName($http, $stateParams) {
            // Return response Data passing a dinamic Url
            return $http.get('http://0.0.0.0:8882/rest/user/' + $stateParams.id);
          }
        }
      })
  });
