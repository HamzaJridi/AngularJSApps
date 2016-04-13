var pageControllers = angular.module('pageControllers', []);

pageControllers.controller('PageOne', ['$scope', '$http', function($scope, $http){
    $http.get('js/data.json').success(function(_data){
        $scope.data=_data;
        $scope.pageClass = 'page-one';
    });
}]);

pageControllers.controller('PageTwo', ['$scope', '$http', function($scope, $http){
    $http.get('js/data.json').success(function(_data){
        $scope.data=_data;
        $scope.pageClass = 'page-two';
    });
}]);

pageControllers.controller('PageThree', ['$scope', '$http', function($scope, $http){
    $http.get('js/data.json').success(function(_data){
        $scope.data=_data;
        $scope.pageClass = 'page-three';
    });
}]);





/*pageControllers.controller('PageOne', function ($scope) {
    $scope.data =
    {
        "name":"Barot Bellingham",
        "shortname":"Barot_Bellingham",
        "reknown":"Royal Academy of Painting and Sculpture",
        "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
    }
});*/