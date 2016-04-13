var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('RegistrationController', ['$scope', function($scope){
	$scope.register = function(){
		if ($scope.myform.$valid) {
			$scope.message = 'Welcome ' + $scope.user.firstname; 
		}
	};
}]);