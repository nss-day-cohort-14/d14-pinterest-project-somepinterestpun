"use strict";
<<<<<<< HEAD
app.controller('NavCtrl', function($scope, $location, BoardFactory, UserFactory){
	$scope.login = function(){
		let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(user){
            UserFactory.getUserList()
            .then(function(userList){
                let currentUser = firebase.auth().currentUser;
                let currentUid = firebase.auth().currentUser.uid;
                let userArray = [];
                let userExists = null
                for (user in userList){
                    let index = userList[user];
                    if(currentUid === index.uid){
                        userExists = true;
                    }
                    else {
                        userExists = false;
                    }
                }
                if(userExists === false){
                    let userObject = {
                        name: currentUser.displayName,
                        email: currentUser.email,
                        uid: currentUser.uid
                    }
                    UserFactory.createUser(userObject)
                }
            })
		.then(function () {
			$location.url('/profile');
		})
        })
    }
=======
app.controller('NavCtrl', function($scope, $location, UserFactory){
	$scope.login = function(){
		let provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(user){
			UserFactory.getUserList()
			.then(function(userList){
				let currentUser = firebase.auth().currentUser;
				let currentUid = firebase.auth().currentUser.uid;
				let userArray = [];
				let userExists = null
				for (user in userList){
					let index = userList[user];
					if(currentUid === index.uid){
						userExists = true;
					}
					else {
						userExists = false;
					}
				}
				if(userExists === false){
					let userObject = {
						name: currentUser.displayName,
						email: currentUser.email,
						uid: currentUser.uid
					}
					UserFactory.createUser(userObject)
				}
			})
		})
	}
>>>>>>> master
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