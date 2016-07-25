"use strict";

var app = angular.module('app', ['ngRoute'])
.constant('FirebaseURL', "https://group-project-somepinterestpun.firebaseio.com/");

app.config(function($routeProvider) {
    // let authConfig = {
    //     apiKey: FBCreds.apiKey,
    //     authDomain: FBCreds.authDomain
    // };
    // firebase.initializeApp(authConfig);

    $routeProvider.
        when('/', {
        	templateUrl: 'partials/splash.html',
        	controller: 'NavCtrl'
        }).
        when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileCtrl'
        }).
        when('/profile/board', {
            templateUrl: 'partials/board.html',
            controller: 'BoardCtrl'
        }).
        when('/profile/board/:pinId', {
            templateUrl: 'partials/pin.html',
            controller: 'PinCtrl'
        }).
        otherwise('/profile');
});