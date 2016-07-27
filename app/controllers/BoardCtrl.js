"use strict";

app.controller('BoardCtrl', function($scope, $location, PinFactory, UserFactory, $routeParams, localStorageService) {
	PinFactory.getPins()
	.then(function(pinsCollection) {
		$scope.pins = pinsCollection
	})
  .then(function(){
    console.log($scope.pins);
  })
	
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
        $scope.ShowNewPin = false;
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
