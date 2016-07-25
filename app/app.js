"use strict";

var app = angular.module('app', ['ngRoute'])
.constant('FirebaseURL', "https://group-project-somepinterestpun.firebaseio.com/");

app.config(function($routeProvider) {
<<<<<<< HEAD
    
=======
    // let authConfig = {
    //     apiKey: FBCreds.apiKey,
    //     authDomain: FBCreds.authDomain
    // };
    // firebase.initializeApp(authConfig);

>>>>>>> master
    $routeProvider.
        when('/', {
        	templateUrl: 'partials/splash.html',
        	controller: 'NavCtrl'
        }).
        when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileCtrl'
        }).
        when('/profile/board/:id', {
            templateUrl: 'partials/board.html',
            controller: 'BoardCtrl'
        }).
         when('/profile/pin', {
            templateUrl: 'partials/pin.html',
            controller: 'pinCtrl'
        }).
        otherwise('/profile');
});