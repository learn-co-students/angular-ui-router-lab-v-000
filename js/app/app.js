angular
    .module('app', ['uiRouter']);
    .config(function ($stateProvider) {
$stateProvider
.state('user', {
url: '/user/:id',
templateUrl: 'views/user.html',
controller: 'UserController'
});
});