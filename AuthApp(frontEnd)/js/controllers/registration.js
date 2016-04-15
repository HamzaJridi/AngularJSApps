myApp.controller('LoginCtrl',
    ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $http.get('js/data.json').success(function(data) {
           $scope.data= data;
           $scope.log=function(){
               var j=0;
               for (var i =0; i < $scope.data.length; i++) {

                   if($scope.user.name==$scope.data[i].name && $scope.user.password==$scope.data[i].password) {
                       j++;
                   }
               }
               if (j>0) {
                   $location.path('/home');
               } else {
                   alert('login incorrect')
                   $scope.user.name = '';
                   $scope.user.password = '';
               }

            };

        });
    }]);