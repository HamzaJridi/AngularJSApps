myApp.controller('LoginCtrl',
    ['$scope', '$http', '$location', '$rootScope' ,
    function($scope, $http, $location, $rootScope) {
        $http.get('js/data.json').success(function(data) {
           $scope.data= data;
           $scope.log=function(){
               var j=0;
               for (var i =0; i < $scope.data.length; i++) {

                   if($scope.user.email==$scope.data[i].email && $scope.user.password==$scope.data[i].password) {
                       j++;
                   }
               }
               if (j>0) {
                   $rootScope.isLogin = true;
                   $location.path('/home');
               } else {
                   alert('login incorrect')
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