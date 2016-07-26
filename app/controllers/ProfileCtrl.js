"use strict";

app.controller('ProfileCtrl', function($scope, $location, BoardFactory, UserFactory, FirebaseURL, localStorageService) {
	BoardFactory.getBoards()
	.then(function(boardCollection) {
		$scope.boards = boardCollection
		return boardCollection;
	})

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
	$scope.user = currentUser;
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


