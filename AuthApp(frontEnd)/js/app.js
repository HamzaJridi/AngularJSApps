var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl : 'views/login.html',
            controller : 'LoginCtrl'
        })
        .when('/home', {
            templateUrl : 'views/home.html',
            controller : 'HomeCtrl'
        })
        .otherwise({
            redirectTo : '/login'
        });
}]);