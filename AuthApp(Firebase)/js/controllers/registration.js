myApp.controller('RegistrationController',
    ['$scope', 'Authentication',
        function($scope, Authentication){

            $scope.login = function() {
                Authentication.login($scope.user);
        };//login method from Auth service

        $scope.logout = function() {
            Authentication.logout();
        };//logout method from Auth service

        $scope.register = function() {
            Authentication.register($scope.user);
        };//register
}]);//Controller

