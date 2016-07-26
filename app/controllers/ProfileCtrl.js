"use strict";

app.controller('ProfileCtrl', function($scope, $location, BoardFactory, UserFactory, FirebaseURL, localStorageService, PinFactory) {
	BoardFactory.getBoards()
	.then(function(boardCollection) {
		$scope.boards = boardCollection
		return boardCollection;
	})
	.then(function(){
		$scope.boardNumber = $scope.boards.length;
		console.log("yo", $scope.boardNumber)
	})

	PinFactory.getAllPins()
	.then(function(pins){
		$scope.pinNumber = pins.length;
		console.log("pinnum", $scope.pinNumber)
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


