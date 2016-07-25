"use strict";

app.factory("BoardFactory", function(FirebaseURL, $q, $http){

	let getBoards = function() {
		let board = [];
		return $q(function(resolve, reject) {
			let userId = firebase.auth().currentUser.uid
			console.log("user id?", userId);
			$http.get(`${FirebaseURL}/board.json?orderBy="uid"&equalTo="${userId}"`)
			.success(function(boardObject) {
				let boardCollection = boardObject;
				//create array from object and loop thru keys - saving fb key for each item inside the obj as an id property
				Object.keys(boardCollection).forEach(function(key){
					boardCollection[key].id=key;
					board.push(boardCollection[key]);
				});
				console.log("items:", board);
				resolve(board);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	let saveId = function(board) {
		console.log(board)
		return $q(function(resolve, reject) {
            $http.patch(`${FirebaseURL}/board/${board[0].id}.json`, JSON.stringify({"id": `${board[0].id}`}))
                .success(function(ObjFromFirebase) {
                    console.log(ObjFromFirebase)
                    resolve(ObjFromFirebase)
                })
                .error(function (error) {
                    reject (error);
                });
        });
	}
	return {getBoards, saveId}
});
