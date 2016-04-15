myApp.controller('LoginCtrl',
    ['$scope', '$http', '$location', '$rootScope' ,
    function($scope, $http, $location, $rootScope) {
        $http.get('js/data.json').success(function(data) {
           $scope.data= data;
           $scope.log=function(){
               for (var i =0; i < $scope.data.length; i++) {
                   if($scope.user.email==$scope.data[i].email && $scope.user.password==$scope.data[i].password) {
                       $rootScope.isLogin = true;
                   }
               }
               if ($rootScope.isLogin) {
                   $location.path('/home');
               } else {
                   $scope.errormsg = "Sorry, your Email and Password are not valid"
                   $scope.user.email = '';
                   $scope.user.password = '';
               }
           };
           $rootScope.logOut = function() {
               $location.path('/login');
               $rootScope.isLogin = false;
           }
        });
    }]);