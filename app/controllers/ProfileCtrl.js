"use strict";

app.controller('ProfileCtrl', function($scope, $location, BoardFactory) {
	BoardFactory.getBoards()
	// .then(function (test) {
	// 		BoardFactory.saveId(test);
	// 		console.log("after", test)
	// 	});
})