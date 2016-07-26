"use strict";

app.controller('ProfileCtrl', function($scope, $location, BoardFactory, UserFactory) {
	BoardFactory.getBoards()
	.then(function(boardCollection) {
		$scope.boards = boardCollection
		return boardCollection;
	})
	// .then(function (test) {
	// 		BoardFactory.saveId(test);
	// 		console.log("after", test)
	// 	});

	$scope.DisplayUserDetails = function () {
		let userObj = {}
		 userObj.name = firebase.auth().currentUser.displayName;
		 userObj.email = firebase.auth().currentUser.email;
		return userObj
	}
	$scope.user = $scope.DisplayUserDetails()
	console.log($scope.user);

	$scope.Remove = function (removeId) {
		BoardFactory.deleteItem(removeId)
		.then(function () {
			BoardFactory.getBoards()
			.then(function (boardCollection) {
			$scope.boards = boardCollection
		});
		});
	}
})