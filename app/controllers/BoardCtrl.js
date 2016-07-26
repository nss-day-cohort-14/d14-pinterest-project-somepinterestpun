"use strict";

app.controller('BoardCtrl', function($scope, $location, PinFactory, UserFactory, $routeParams, localStorageService) {
	PinFactory.getPins()
	.then(function(pinsCollection) {
		$scope.pins = pinsCollection
		// return pinsCollection;
	})
  .then(function(){
    console.log($scope.pins);
  })
	// .then(function (test) {
	// 		PinFactory.saveId(test);
	// 		console.log("after", test)
	// 	});
	// $scope.DisplayBoardDetails = function () {
	// 	let boardObj = {}
	// 	 boardObj.name = firebase.auth().currentUser.displayName;
	// 	 boardObj.email = firebase.auth().currentUser.email;
	// 	return boardObj
	// }
	// $scope.board = $scope.DisplayBoardDetails()
	// console.log($scope.board);
  $scope.createPin = function(){
    let currentUser = localStorageService.get("currentUser");
        let newPin = {
            title: $scope.pinTitle,
            url: $scope.pinUrl,
            uid: currentUser.uid,
            boardid:$routeParams.id
        }
        PinFactory.addPin(newPin)
        .then(function () {
    		PinFactory.getPins()
        .then(function (pinsCollection) {
  			$scope.pins = pinsCollection
  		});
    })
  }
$scope.showNewPin = false;


	$scope.Remove = function (removeId) {
		PinFactory.deletePin(removeId)
		.then(function () {
			PinFactory.getPins()
			.then(function (pinsCollection) {
			$scope.pins = pinsCollection
		});
		});
	}
})
