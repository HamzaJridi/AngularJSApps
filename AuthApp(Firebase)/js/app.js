var myApp = angular.module('myApp',
    ['ngRoute', 'firebase'])
    //add a const that contain the fire base app's url
    .constant('FIREBASE_URL', 'https://angauth1.firebaseio.com/');


//notify the user when accessing a page without log-in
myApp.run(['$rootScope', '$location',
    function($rootScope, $location) {
        $rootScope.$on('$routeChangeError',
            function(event, next,previous,error){
                if(error=='AUTH_REQUIRED') {
                    $rootScope.message = 'Sorry you must log in to access the page';
                    $location.path('/login');
                }//AUTH REQUIRED
        });//event info
    }]);//run

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller : 'RegistrationController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegistrationController'
        })
        .when('/success', {
            templateUrl: 'views/success.html',
            controller: 'SuccessController',
            //to prevent accessing pages without logging-in
            resolve: {
                //requireAuth : method in the auth service
                currentAuth: function(Authentication) {
                    return Authentication.requireAuth();
                }//current Auth
            }//resolve
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);