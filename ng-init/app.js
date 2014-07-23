function MyCtrl($scope) {
	$scope.value = 1;
	$scope.incrementValue = function(increment) {
		$scope.value += increment;
	};
}
