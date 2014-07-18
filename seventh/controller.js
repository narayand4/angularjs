function AddUserController($scope) {
	$scope.message = '';
	$scope.addUser = function () {
		// TODO for the reader: actually save user to database...
		$scope.message = 'Thanks, ' + $scope.user.first + ', we added you!';
	};
}
