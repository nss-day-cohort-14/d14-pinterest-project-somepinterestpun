"use strict";
app.controller('NavCtrl', function($scope, $location){
	$scope.login = function(){
		let provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	}
	$scope.logout = function(){
		firebase.auth().signOut();
		$location.url("/");
		console.log("signed out");
	}
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			$scope.$apply(function(){
				$scope.loggedin = true;
			})
		}
		else {
			$scope.$apply(function(){
				$scope.loggedin = false;
			})
		}
	})
})
