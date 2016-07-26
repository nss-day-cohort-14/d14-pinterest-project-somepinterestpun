"use strict";

app.factory("PinFactory", function(FirebaseURL, $q, $http, $routeParams){

  let getPins = function() {
		let pins = [];
		return $q(function(resolve, reject) {
			let boardId = $routeParams.id
			console.log("board id?", boardId);
			$http.get(`${FirebaseURL}/pins.json?orderBy="boardid"&equalTo="${boardId}"`)
			.success(function(pinsObject) {
				let pinsCollection = pinsObject;
				//create array from object and loop thru keys - saving fb key for each item inside the obj as an id property
				Object.keys(pinsCollection).forEach(function(key){
					pinsCollection[key].id=key;
					pins.push(pinsCollection[key]);
				});
				console.log("pins:", pins);
				resolve(pins);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	let savePinsId = function(pins) {
		console.log(pins)
		return $q(function(resolve, reject) {
            $http.patch(`${FirebaseURL}/pins/${pins[0].id}.json`, JSON.stringify({"id": `${pins[0].id}`}))
                .success(function(ObjFromFirebase) {
                    console.log(ObjFromFirebase)
                    resolve(ObjFromFirebase)
                })
                .error(function (error) {
                    reject (error);
                });
        });
	}
  let addPin = function(newPin) {
       return $q(function(resolve, reject) {
           $http.post(`${FirebaseURL}/pins.json`,
               JSON.stringify(newPin))
               .success(function(ObjFromFirebase) {
                       console.log(ObjFromFirebase)
                   resolve(ObjFromFirebase)
               })
               .error(function (error) {
                   reject (error);
               });
       });
   };
   let deletePin = function(removeId) {
          let pinUrl = FirebaseURL + "/pins/" + removeId + ".json";
          return $q(function(resolve, reject) {
              $http.delete(pinUrl)
              .success(function() {
                  resolve();
          });
        });
      };
	return {getPins, savePinsId, addPin, deletePin}
});
