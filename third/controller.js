function HelloController($scope) {
	$scope.greeting = { text: 'Hello' };
}

function HelloController2($scope, $location) {
	$scope.greeting = { text: 'Hello' };
	// use $location for something good here...
}

