var ToDo = angular.module('ToDo', []);

ToDo.controller('ToDoCtrl', ['$scope', function($scope) {
	$scope.todos = [
		{
			'title' : 'Build a todo app',
			// set every new task to not done status
			'done' : false 
		}
	];
	//add and display new tasks
	$scope.addTodo = function(){
		/*push : adds one or more elts to the end of the array 
		and returns the new length of the array*/
		$scope.todos.push({
			//tie the typed data in the input field with ng-model = newTodo
			'title' : $scope.newTodo,
			'done' : false
		});
		//disabling the submit btn when the input field is empty
		//$scope.newTodo = ''
	};

	//delete done tasks from the page
	$scope.clearCompleted = function(){
		/* 	*filter() :creates a new array with all elements that pass 
			the test implemented by the provided function.
			*this will create a new array with the not done tasks and assign it to
			the "todos" array
		*/
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done
		});
	};
	
}]);