"use strict";

app.controller('ProfileCtrl', function($scope, $location, BoardFactory, UserFactory, FirebaseURL, localStorageService) {
	BoardFactory.getBoards()
	.then(function(boardCollection) {
		$scope.boards = boardCollection
		return boardCollection;
	})

	//
	// $scope.DisplayUserDetails = function () {
	// 	let userObj = {}
	// 	 userObj.name = firebase.auth().currentUser.displayName;
	// 	 userObj.email = firebase.auth().currentUser.email;
	// 	return userObj
	// }
	// $scope.user = $scope.DisplayUserDetails()
	// console.log($scope.user);

	$scope.Remove = function (removeId) {
		BoardFactory.deleteBoard(removeId)
		.then(function () {
			BoardFactory.getBoards()
			.then(function (boardCollection) {
			$scope.boards = boardCollection
			});
		});
	}
let currentUser = localStorageService.get("currentUser");
	$scope.newBoard = {
		description: "",
		title: "",
		uid: currentUser.uid
	};

	$scope.AddBoard = function () {
		BoardFactory.postNewBoard($scope.newBoard)
		.then(function (response) {
			$scope.ShowNewBoard = false;
			BoardFactory.getBoards()
			.then(function (boardCollection) {
			$scope.boards = boardCollection
			});
		});
	}

	$scope.ShowNewBoard = false;

})
