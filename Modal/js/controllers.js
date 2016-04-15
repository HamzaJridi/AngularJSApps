myApp.controller('ModalCtrl', ['$scope', function($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function() {
        $scope.showModal = !$scope.showModal;
    };
}]);

myApp.directive('modal', function() {
   return {

   };
});