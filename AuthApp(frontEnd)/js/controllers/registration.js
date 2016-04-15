myApp.controller('LoginCtrl',
    ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $http.get('js/data.json').success(function(data) {
           //$scope.data= data;
           $scope.log=function(){
                if($scope.user.name=='hamza'&& $scope.user.password=='hamza'){
                    $location.path('/home');
                }else {
                    alert('login incorrect');
                }
            };
        });
    }]);

