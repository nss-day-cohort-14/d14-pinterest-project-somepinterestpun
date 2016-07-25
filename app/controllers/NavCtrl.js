"use strict";
app.controller('NavCtrl', function($scope, $location, UserFactory){
	$scope.login = function(){
		let provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(user){
			UserFactory.getUserList()
			.then(function(userList){
				let currentUser = firebase.auth().currentUser;
				let currentUid = firebase.auth().currentUser.uid;
				let userArray = [];
				for (user in userList){
					let index = userList[user];
					if(currentUid != index.uid){
						let userObject = {
							name: currentUser.displayName,
							email: currentUser.email,
							uid: currentUser.uid
						}
						userArray.push(userObject);
					}
				}
				UserFactory.createUser(userArray[0])
			})
		})
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