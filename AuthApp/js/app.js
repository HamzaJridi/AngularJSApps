var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', function($scope){
    $scope.message="Welcome to my App";
}]);