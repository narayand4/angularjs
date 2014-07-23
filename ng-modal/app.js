function MyCtrl($scope) {
	$scope.name = "";
	$scope.$watch("name", function(newValue, oldValue) {
		if ($scope.name.length > 0) {
			$scope.greeting = "Greetings " + $scope.name;
		}
	});
}
