var ToDo = angular.module('ToDo', []);

ToDo.controller('ToDoCtrl', ['$scope', function($scope) {
	$scope.todos = [
		{
			'title' : 'Build a todo app',
			'done' : false
		}
	];

	$scope.addTodo = function(){};
	$scope.clearCompleted = function(){};
}]);